// Module Écologie — UC A4/5 « Les entreprises et les enjeux de la transition écologique »
// Épreuve FEDE de type QCM (1 h, 40 questions, 1 seule réponse juste, 3 pts/bonne réponse).
// Réutilise ExamTimer (défini dans langue.jsx) et le rendu QCM façon ComprehensionView.

// ── Passage d'un sujet (40 QCM chronométrés + score + corrigé) ────────────
window.EcoSujetView = function EcoSujetView({ sujet, onClose }) {
  const E = window.ECOLOGIE;
  const [seed, setSeed] = useState(0); // change pour re-mélanger
  // Mélange l'ordre des questions ET des réponses à chaque passage.
  const questions = useMemo(() => {
    const order = sujet.questions.map((_, i) => i).sort(() => Math.random() - 0.5);
    return order.map(qi => {
      const q = sujet.questions[qi];
      const co = q.choices.map((_, i) => i).sort(() => Math.random() - 0.5);
      return { ...q, choices: co.map(i => q.choices[i]), answer: co.indexOf(q.answer) };
    });
  }, [sujet.id, seed]);

  const [picked, setPicked] = useState({});      // {qIdx: choiceIdx}
  const [submitted, setSubmitted] = useState(false);

  const total = questions.length;
  const answered = Object.keys(picked).length;
  const score = questions.reduce((a, q, i) => a + (picked[i] === q.answer ? 1 : 0), 0);
  const points = score * E.pointsParBonneReponse;
  const maxPoints = total * E.pointsParBonneReponse;

  function submit(e) {
    setSubmitted(true);
    const pct = Math.round((score / total) * 100);
    if (pct >= 75) Sfx.correct?.(); else Sfx.wrong?.();
    award(score * 3, e);
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
  }
  function restart() { setPicked({}); setSubmitted(false); setSeed(x => x + 1); }

  const pct = Math.round((score / total) * 100);

  return (
    <View title={sujet.title} onClose={onClose}
      headerRight={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
        {sujet.officiel && <span className="tag" style={{color:'var(--accent)'}}>🏛️ officiel</span>}
        <ExamTimer minutes={E.duree} label="" />
      </div>}>
      <div style={{maxWidth:820, margin:'0 auto'}}>
        <div className="diagram-card" style={{display:'flex', alignItems:'center', gap:14, flexWrap:'wrap'}}>
          <span style={{fontSize:34}}>🌍</span>
          <div style={{flex:1, minWidth:200}}>
            <h3 style={{margin:0}}>{sujet.theme}</h3>
            <p style={{margin:'4px 0 0', color:'var(--fg-2)', fontSize:13}}>
              {total} questions · 1 seule réponse juste · {E.pointsParBonneReponse} pts par bonne réponse · {maxPoints} pts au total · {E.duree} min.
            </p>
          </div>
        </div>

        {submitted && (
          <div className="empty-state" style={{margin:'18px 0'}}>
            <h3 style={{fontSize:32, color: pct>=75 ? 'var(--good)' : pct>=50 ? 'var(--warn)' : 'var(--bad)'}}>
              {score} / {total}
            </h3>
            <p style={{fontSize:14}}>{points} / {maxPoints} points · {pct>=75 ? '🏆 Très bon niveau' : pct>=50 ? '👍 À consolider' : '📚 À retravailler'}</p>
            <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:8}}>
              <Btn onClick={restart}>↻ Recommencer (re-mélange)</Btn>
              <Btn kind="primary" onClick={onClose}>Retour aux sujets</Btn>
            </div>
          </div>
        )}

        <div className="section-label">{total} questions · 3 pts chacune</div>

        {questions.map((q, i) => (
          <div key={i} className="qcm-question" style={{marginBottom:16}}>
            <div className="qcm-q-text"><strong style={{color:'var(--fg-3)'}}>{i+1}.</strong> {q.q}</div>
            {q.choices.map((c, idx) => {
              let cls = 'qcm-choice';
              if (submitted) {
                if (idx === q.answer) cls += ' correct';
                else if (idx === picked[i]) cls += ' wrong';
              } else if (picked[i] === idx) cls += ' wrong'; // surbrillance sélection
              return (
                <button key={idx} className={cls} disabled={submitted}
                  onClick={() => setPicked(p => ({...p, [i]: idx}))}>
                  <span style={{fontFamily:'var(--mono)', color:'var(--fg-3)', marginRight:10}}>{String.fromCharCode(65+idx)}.</span>
                  {c}
                </button>
              );
            })}
            {submitted && q.explain && <div className="qcm-explain">💡 {q.explain}</div>}
          </div>
        ))}

        {!submitted ? (
          <div style={{textAlign:'center', margin:'24px 0'}}>
            <p style={{color:'var(--fg-3)', fontSize:12, marginBottom:10}}>{answered}/{total} répondues</p>
            <Btn kind="primary" onClick={submit}>Valider mes réponses</Btn>
          </div>
        ) : (
          <div style={{display:'flex', gap:12, justifyContent:'center', margin:'24px 0'}}>
            <Btn onClick={restart}>↻ Recommencer (re-mélange)</Btn>
            <Btn kind="primary" onClick={onClose}>Retour aux sujets</Btn>
          </div>
        )}
      </div>
    </View>
  );
};

// ── Hub Écologie ──────────────────────────────────────────────────────────
window.EcologieView = function EcologieView({ onClose }) {
  const E = window.ECOLOGIE;
  const [sub, setSub] = useState(null);

  // Tire un sujet au hasard, jamais le même deux fois de suite (localStorage).
  function lancerAleatoire() {
    const last = (() => { try { return localStorage.getItem('eco_lastSujet'); } catch { return null; } })();
    let pool = E.sujets.filter(s => s.id !== last);
    if (!pool.length) pool = E.sujets;
    const sujet = pool[Math.floor(Math.random() * pool.length)];
    try { localStorage.setItem('eco_lastSujet', sujet.id); } catch {}
    setSub(sujet);
  }

  if (sub) return <EcoSujetView sujet={sub} onClose={() => setSub(null)} />;

  return (
    <View title="Écologie — UC A4/5 (transition écologique)" onClose={onClose}
      headerRight={<span className="tag">QCM · 1 h</span>}>
      <div style={{maxWidth:880, margin:'0 auto'}}>
        <div className="diagram-card">
          <h3 style={{marginTop:0}}>📋 Format de l'épreuve</h3>
          <p style={{color:'var(--fg-2)', fontSize:13, margin:'0 0 10px'}}>
            UE A — Culture et citoyenneté européennes · <strong>« Les entreprises et les enjeux de la transition écologique »</strong>.
            Type : <strong>QCM</strong> · Durée : <strong>1 h</strong> · Une seule réponse juste par question.
          </p>
          <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
            <span className="tag">40 questions</span>
            <span className="tag">3 pts / bonne réponse</span>
            <span className="tag">0 pt / erreur ou absence</span>
            <span className="tag" style={{color:'var(--accent)'}}>120 pts au total</span>
          </div>
        </div>

        <div className="diagram-card" style={{display:'flex', alignItems:'center', gap:14, flexWrap:'wrap', marginTop:14}}>
          <div style={{flex:1, minWidth:200}}>
            <h3 style={{margin:0}}>🎲 Sujet aléatoire</h3>
            <p style={{margin:'4px 0 0', color:'var(--fg-2)', fontSize:13}}>
              Lance un sujet au hasard parmi les {E.sujets.length} — jamais le même deux fois de suite. Ou choisis ci-dessous.
            </p>
          </div>
          <Btn kind="primary" onClick={lancerAleatoire}>▶ Lancer un sujet aléatoire</Btn>
        </div>

        <div className="section-label">Sujets d'entraînement — {E.sujets.length} disponibles</div>
        <div className="chapter-grid">
          {E.sujets.map(s => (
            <div key={s.id} className="chapter-card" onClick={() => setSub(s)}>
              <div className="accent-bar" style={{background: s.officiel ? '#F59E0B' : '#34D399'}}/>
              <span className="icon">{s.officiel ? '🏛️' : '🌱'}</span>
              <h3>{s.title}</h3>
              <p>{s.session} · {s.theme}</p>
              <p style={{color:'var(--fg-3)', fontSize:12}}>
                {s.questions.length} questions · {s.questions.length*3} pts · {E.duree} min
              </p>
            </div>
          ))}
        </div>

        <p style={{color:'var(--fg-3)', fontSize:12, textAlign:'center', marginTop:18}}>
          💡 Le sujet 1 reproduit le sujet officiel d'entraînement FEDE (corrigé exact). Les sujets 2 et 3 sont inédits, au même niveau, pour t'entraîner davantage.
        </p>
      </div>
    </View>
  );
};
