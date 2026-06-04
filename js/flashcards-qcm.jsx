// Vue Flashcards
const { useState: useStateF, useEffect: useEffectF } = React;

window.FlashcardsView = function FlashcardsView({ chapter, onClose }) {
  const allCards = window.FLASHCARDS[chapter.id] || [];
  const dueCards = AppState.getDueFlashcards(chapter.id, allCards);
  // Priorité aux dues, sinon toutes
  const queue = useMemo(() => {
    const due = dueCards.filter(c => c.due);
    return (due.length ? due : dueCards).sort(() => Math.random() - .5);
  }, [chapter.id]);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(false);

  if (!queue.length) {
    return (
      <View title={`Flashcards — ${chapter.title}`} onClose={onClose}>
        <div className="empty-state"><h3>Pas de flashcards pour ce chapitre.</h3></div>
      </View>
    );
  }

  if (done) {
    return (
      <View title={`Flashcards — ${chapter.title}`} onClose={onClose}>
        <div className="empty-state">
          <h3>✅ Session terminée !</h3>
          <p>{queue.length} cartes revues. +{queue.length * 5} XP gagnés.</p>
          <Btn kind="primary" onClick={onClose}>Retour</Btn>
        </div>
      </View>
    );
  }

  const card = queue[i];

  function rate(success, e) {
    AppState.recordFlash(chapter.id, card.idx, success);
    if (success) { Sfx.correct(); award(5, e); } else { Sfx.wrong(); }
    if (i + 1 >= queue.length) setDone(true);
    else { setI(i + 1); setFlipped(false); }
  }

  return (
    <View title={`Flashcards — ${chapter.title}`} onClose={onClose}>
      <div className="fc-progress">{i + 1} / {queue.length}</div>
      <div className={'flashcard ' + (flipped ? 'flipped' : '')} onClick={() => { setFlipped(!flipped); Sfx.flip(); }}>
        <div className="flashcard-inner">
          <div className="flashcard-face">
            <div className="label">Recto · clique pour retourner</div>
            <div className="content">{card.front}</div>
          </div>
          <div className="flashcard-face back">
            <div className="label">Verso</div>
            <div className="content">
              <div>{card.back}</div>
              {card.code && <pre><code>{card.code}</code></pre>}
            </div>
          </div>
        </div>
      </div>
      <div className="flashcard-controls">
        {!flipped ? (
          <Btn onClick={() => { setFlipped(true); Sfx.flip(); }}>Retourner</Btn>
        ) : (
          <>
            <Btn kind="danger" onClick={(e) => rate(false, e)}>❌ Pas su</Btn>
            <Btn kind="primary" onClick={(e) => rate(true, e)}>✅ Su</Btn>
          </>
        )}
      </div>
      <p style={{textAlign:'center', color:'var(--fg-3)', fontSize:12, marginTop:24}}>
        Spaced repetition activé : les cartes que tu rates reviennent vite, celles que tu maîtrises s'espacent.
      </p>
    </View>
  );
};

// Vue QCM
window.QcmView = function QcmView({ chapter, onClose, mode = 'normal' }) {
  const rawQuestions = window.QCM[chapter.id] || [];
  // Mélange l'ordre des choix pour éviter que la bonne réponse soit toujours à la même position.
  const questions = useMemo(() => rawQuestions.map(q => {
    const order = q.choices.map((_, idx) => idx).sort(() => Math.random() - 0.5);
    return {
      ...q,
      choices: order.map(idx => q.choices[idx]),
      answer: order.indexOf(q.answer),
    };
  }), [chapter.id]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [done, setDone] = useState(false);

  if (!questions.length) {
    return <View title={`QCM — ${chapter.title}`} onClose={onClose}>
      <div className="empty-state"><h3>Pas de QCM pour ce chapitre.</h3></div>
    </View>;
  }

  function pick(idx, e) {
    if (picked !== null) return;
    setPicked(idx);
    const correct = idx === questions[i].answer;
    AppState.recordQCM(chapter.id, i, correct);
    if (correct) {
      Sfx.correct();
      const newCombo = combo + 1;
      setCombo(newCombo);
      setScore(score + 1);
      const xp = 10 + (newCombo >= 3 ? 5 : 0);
      award(xp, e);
      if (newCombo >= 3) UIfx.combo(newCombo);
    } else {
      Sfx.wrong();
      setCombo(0);
    }
  }

  function next() {
    if (i + 1 >= questions.length) setDone(true);
    else { setI(i + 1); setPicked(null); }
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <View title={`QCM — ${chapter.title}`} onClose={onClose}>
        <div className="empty-state">
          <h3 style={{fontSize:32, color: pct >= 80 ? 'var(--good)' : pct >= 50 ? 'var(--warn)' : 'var(--bad)'}}>
            {score} / {questions.length}
          </h3>
          <p style={{fontSize:14, marginBottom:24}}>
            {pct >= 80 ? '🏆 Excellent !' : pct >= 50 ? '👍 Pas mal, continue.' : '📚 À retravailler.'}
          </p>
          <div style={{display:'flex', gap:12, justifyContent:'center'}}>
            <Btn onClick={() => { setI(0); setPicked(null); setScore(0); setCombo(0); setDone(false); }}>↻ Recommencer</Btn>
            <Btn kind="primary" onClick={onClose}>Retour</Btn>
          </div>
        </div>
      </View>
    );
  }

  const q = questions[i];

  return (
    <View title={`QCM — ${chapter.title}`} onClose={onClose}>
      <div className="qcm-container">
        <div className="qcm-progress">
          {questions.map((_, idx) => (
            <span key={idx} className={idx < i ? 'done' : idx === i ? 'current' : ''} />
          ))}
        </div>
        <div className="qcm-question">
          <div className="qcm-q-text">{q.q}</div>
          {q.choices.map((c, idx) => {
            let cls = 'qcm-choice';
            if (picked !== null) {
              if (idx === q.answer) cls += ' correct';
              else if (idx === picked) cls += ' wrong';
            }
            return (
              <button key={idx} className={cls} disabled={picked !== null} onClick={(e) => pick(idx, e)}>
                <span style={{fontFamily:'var(--mono)', color:'var(--fg-3)', marginRight:10}}>{String.fromCharCode(65+idx)}.</span>
                {c}
              </button>
            );
          })}
          {picked !== null && q.explain && (
            <div className="qcm-explain">💡 {q.explain}</div>
          )}
          {picked !== null && (
            <div style={{marginTop:18, textAlign:'right'}}>
              <Btn kind="primary" onClick={next}>{i + 1 >= questions.length ? 'Voir le score' : 'Suivant →'}</Btn>
            </div>
          )}
        </div>
        <div style={{textAlign:'center', color:'var(--fg-3)', fontSize:12, fontFamily:'var(--mono)'}}>
          Score : {score}/{i + (picked!==null?1:0)} · Combo : {combo}
        </div>
      </div>
    </View>
  );
};
