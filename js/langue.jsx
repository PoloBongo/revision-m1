// Module Langue vivante — Examen blanc B2 (CECRL)
// 3 épreuves : Compréhension écrite, Vocabulaire (texte à trous), Rédaction.

// ── Minuteur réutilisable ────────────────────────────────────────────────
window.ExamTimer = function ExamTimer({ minutes, label = "Temps restant" }) {
  const [left, setLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setLeft(l => (l > 0 ? l - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [running]);
  useEffect(() => { if (left === 0 && running) { setRunning(false); Sfx.wrong?.(); UIfx.toast?.('⏰ Temps écoulé !', 'warn'); } }, [left, running]);
  const m = Math.floor(left / 60), s = left % 60;
  const danger = left <= 300;
  return (
    <div style={{display:'flex', alignItems:'center', gap:10}}>
      <span className="tag" style={{fontFamily:'var(--mono)', fontSize:14, color: danger ? 'var(--bad)' : 'var(--accent)'}}>
        ⏱ {label} {String(m).padStart(2,'0')}:{String(s).padStart(2,'0')}
      </span>
      <Btn onClick={() => setRunning(r => !r)}>{running ? '⏸' : '▶'}</Btn>
      <Btn kind="ghost" onClick={() => { setLeft(minutes*60); setRunning(false); }}>↻</Btn>
    </div>
  );
};

// ── 1. Compréhension écrite (texte + 10 QCM, 3 pts/réponse) ──────────────
window.ComprehensionView = function ComprehensionView({ doc, onClose }) {
  const [seed, setSeed] = useState(0); // change pour re-mélanger
  // Mélange l'ordre des questions ET des réponses à chaque passage.
  const questions = useMemo(() => {
    const order = doc.questions.map((_, i) => i).sort(() => Math.random() - 0.5);
    return order.map(qi => {
      const q = doc.questions[qi];
      const co = q.choices.map((_, i) => i).sort(() => Math.random() - 0.5);
      return { ...q, choices: co.map(i => q.choices[i]), answer: co.indexOf(q.answer) };
    });
  }, [doc.id, seed]);
  const [picked, setPicked] = useState({});       // {qIdx: choiceIdx}
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(picked).length;
  const score = questions.reduce((a, q, i) => a + (picked[i] === q.answer ? 1 : 0), 0);
  const points = score * window.LANGUE.pointsParBonneReponse;

  function submit(e) {
    setSubmitted(true);
    const pct = Math.round((score / questions.length) * 100);
    if (pct >= 80) Sfx.correct?.(); else Sfx.wrong?.();
    award(score * 5, e);
  }

  return (
    <View title={`Compréhension — ${doc.title}`} onClose={onClose}
      headerRight={<span className="tag">{doc.theme}</span>}>
      <div style={{maxWidth:820, margin:'0 auto'}}>
        <div className="diagram-card" style={{whiteSpace:'pre-line', lineHeight:1.7, fontSize:15}}>
          {doc.text}
        </div>

        <div className="section-label">{questions.length} questions · 3 pts chacune</div>

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
            <p style={{color:'var(--fg-3)', fontSize:12, marginBottom:10}}>{answered}/{questions.length} répondues</p>
            <Btn kind="primary" onClick={submit}>Valider mes réponses</Btn>
          </div>
        ) : (
          <div className="empty-state">
            <h3 style={{fontSize:30, color: score>=8 ? 'var(--good)' : score>=5 ? 'var(--warn)' : 'var(--bad)'}}>
              {score} / {questions.length}
            </h3>
            <p style={{fontSize:14}}>{points} / {questions.length*3} points · {score>=8 ? '🏆 Très bon niveau' : score>=5 ? '👍 À consolider' : '📚 À retravailler'}</p>
            <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:12}}>
              <Btn onClick={() => { setPicked({}); setSubmitted(false); setSeed(x => x + 1); }}>↻ Recommencer (re-mélange)</Btn>
              <Btn kind="primary" onClick={onClose}>Retour</Btn>
            </div>
          </div>
        )}
      </div>
    </View>
  );
};

// ── 2. Vocabulaire (texte à trous) ───────────────────────────────────────
window.VocabulaireView = function VocabulaireView({ doc, onClose }) {
  const [picked, setPicked] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [seed, setSeed] = useState(0);

  const parts = useMemo(() => doc.text.split(/(\{\d+\})/g), [doc.id]);
  // Mélange l'ordre des propositions de chaque blanc (la bonne n'est plus toujours en 1er).
  const blanks = useMemo(() => doc.blanks.map(b => {
    const order = b.options.map((_, i) => i).sort(() => Math.random() - 0.5);
    return { options: order.map(i => b.options[i]), answer: order.indexOf(b.answer) };
  }), [doc.id, seed]);
  const total = blanks.length;
  const answered = Object.keys(picked).length;
  const score = blanks.reduce((a, b, i) => a + (picked[i] === b.answer ? 1 : 0), 0);
  const points = score * window.LANGUE.pointsParBonneReponse;

  function submit(e) {
    setSubmitted(true);
    const pct = Math.round((score / total) * 100);
    if (pct >= 80) Sfx.correct?.(); else Sfx.wrong?.();
    award(score * 3, e);
  }
  function restart() { setPicked({}); setSubmitted(false); setSeed(x => x + 1); }

  return (
    <View title={`Vocabulaire — ${doc.title}`} onClose={onClose}
      headerRight={<span className="tag">{doc.theme}</span>}>
      <div style={{maxWidth:820, margin:'0 auto'}}>
        <p style={{color:'var(--fg-2)', fontSize:13}}>Complète chaque blanc avec la proposition correcte (1 seule juste). 3 pts par bonne réponse.</p>

        <div className="diagram-card" style={{lineHeight:2.6, fontSize:15}}>
          {parts.map((part, k) => {
            const m = part.match(/^\{(\d+)\}$/);
            if (!m) return <span key={k} style={{whiteSpace:'pre-line'}}>{part}</span>;
            const bi = +m[1];
            const blank = blanks[bi];
            const sel = picked[bi];
            const isWrong = submitted && sel !== blank.answer;
            let color = 'var(--border-strong)';
            if (submitted) color = sel === blank.answer ? 'var(--good)' : 'var(--bad)';
            else if (sel != null) color = 'var(--accent)';
            return (
              <span key={k} style={{whiteSpace:'nowrap'}}>
                <sup style={{fontFamily:'var(--mono)', fontSize:10, color:'var(--fg-3)', marginRight:1}}>{bi+1}</sup>
                <select value={sel ?? ''} disabled={submitted}
                  onChange={e => setPicked(p => ({...p, [bi]: +e.target.value}))}
                  style={{margin:'0 2px', padding:'3px 6px', borderRadius:6, background:'var(--bg-3)',
                          color:'var(--fg-1)', border:`1.5px solid ${color}`, fontSize:14, fontFamily:'var(--mono)'}}>
                  <option value="" disabled>— {bi+1} —</option>
                  {blank.options.map((o, oi) => <option key={oi} value={oi}>{o}</option>)}
                </select>
                {isWrong && (
                  <span style={{color:'var(--good)', fontFamily:'var(--mono)', fontSize:13, margin:'0 4px 0 2px'}}>
                    →&nbsp;{blank.options[blank.answer]}
                  </span>
                )}
              </span>
            );
          })}
        </div>

        {submitted && (
          <div style={{margin:'18px 0'}}>
            <div className="section-label">Corrigé complet</div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px,1fr))', gap:8}}>
              {blanks.map((b, i) => {
                const ok = picked[i] === b.answer;
                return (
                  <div key={i} className="tag" style={{justifyContent:'flex-start', color: ok?'var(--good)':'var(--bad)'}}>
                    <strong style={{marginRight:4}}>{i+1}.</strong> {ok ? '✓' : '✗'} {b.options[b.answer]}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!submitted ? (
          <div style={{textAlign:'center', margin:'24px 0'}}>
            <p style={{color:'var(--fg-3)', fontSize:12, marginBottom:10}}>{answered}/{total} blancs complétés</p>
            <Btn kind="primary" onClick={submit}>Valider</Btn>
          </div>
        ) : (
          <div className="empty-state">
            <h3 style={{fontSize:30, color: score>=Math.ceil(total*0.8) ? 'var(--good)' : score>=Math.ceil(total*0.5) ? 'var(--warn)' : 'var(--bad)'}}>
              {score} / {total}
            </h3>
            <p style={{fontSize:14}}>{points} points</p>
            <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:12}}>
              <Btn onClick={restart}>↻ Recommencer (re-mélange)</Btn>
              <Btn kind="primary" onClick={onClose}>Retour</Btn>
            </div>
          </div>
        )}
      </div>
    </View>
  );
};

// ── 3. Rédaction (essai + compteur de mots + checklist B2) ───────────────
window.RedactionView = function RedactionView({ onClose }) {
  const prompts = window.LANGUE.redaction;
  const [pi, setPi] = useState(0);
  const [text, setText] = useState('');
  const [checks, setChecks] = useState({});

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const target = 400;
  const ratio = Math.min(words / target, 1.2);
  const wordColor = words === 0 ? 'var(--fg-3)' : words < 350 ? 'var(--warn)' : words <= 450 ? 'var(--good)' : 'var(--warn)';

  return (
    <View title="Rédaction — Essai B2" onClose={onClose}
      headerRight={<ExamTimer minutes={40} label="" />}>
      <div style={{maxWidth:820, margin:'0 auto'}}>
        <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:12}}>
          {prompts.map((p, i) => (
            <Btn key={p.id} kind={i===pi?'primary':'default'} onClick={() => setPi(i)}>Sujet {i+1}</Btn>
          ))}
        </div>

        <div className="diagram-card">
          <span className="tag">{prompts[pi].theme}</span>
          <p style={{margin:'10px 0 0', fontSize:15, lineHeight:1.6}}>{prompts[pi].prompt}</p>
        </div>

        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'16px 0 6px'}}>
          <span className="section-label" style={{margin:0}}>Ta réponse</span>
          <span style={{fontFamily:'var(--mono)', fontSize:13, color:wordColor}}>{words} mots / ~{target}</span>
        </div>
        <div className="progress" style={{height:6, background:'var(--bg-3)', borderRadius:3, overflow:'hidden', marginBottom:10}}>
          <div style={{height:'100%', width:(ratio*100/1.2)+'%', background:wordColor, transition:'width .3s'}}/>
        </div>
        <textarea value={text} onChange={e => setText(e.target.value)}
          placeholder="Write your essay here…"
          style={{width:'100%', minHeight:300, padding:14, borderRadius:10, background:'var(--bg-2)',
                  color:'var(--fg-1)', border:'1px solid var(--border)', fontSize:15, lineHeight:1.7,
                  fontFamily:'var(--sans, inherit)', resize:'vertical'}}/>

        <div className="section-label">Grille d'auto-évaluation B2 ({Object.values(checks).filter(Boolean).length}/{window.LANGUE.b2checklist.length})</div>
        <div className="diagram-card">
          {window.LANGUE.b2checklist.map((c, i) => (
            <label key={i} style={{display:'flex', gap:10, alignItems:'flex-start', padding:'6px 0', cursor:'pointer', fontSize:14}}>
              <input type="checkbox" checked={!!checks[i]} onChange={e => setChecks(s => ({...s, [i]: e.target.checked}))}
                style={{marginTop:3, accentColor:'var(--accent)'}}/>
              <span style={{color: checks[i] ? 'var(--fg-1)' : 'var(--fg-2)'}}>{c}</span>
            </label>
          ))}
        </div>

        <div style={{display:'flex', gap:12, justifyContent:'flex-end', margin:'18px 0'}}>
          <Btn kind="ghost" onClick={() => { setText(''); setChecks({}); }}>Effacer</Btn>
          <Btn kind="primary" onClick={onClose}>Retour</Btn>
        </div>
        <p style={{color:'var(--fg-3)', fontSize:12, textAlign:'center'}}>
          💡 Astuce : vise 380–420 mots, un argument par paragraphe, et coche la grille pour t'auto-corriger.
        </p>
      </div>
    </View>
  );
};

// ── Hub Langue vivante ───────────────────────────────────────────────────
window.LangueView = function LangueView({ onClose }) {
  const L = window.LANGUE;
  const [sub, setSub] = useState(null);

  // Tire un texte au hasard, jamais le même deux fois de suite (mémorisé via localStorage).
  function lancerAleatoire(list, type, storageKey) {
    const last = (() => { try { return localStorage.getItem(storageKey); } catch { return null; } })();
    let pool = list.filter(d => d.id !== last);
    if (!pool.length) pool = list; // sécurité si un seul texte
    const doc = pool[Math.floor(Math.random() * pool.length)];
    try { localStorage.setItem(storageKey, doc.id); } catch {}
    setSub({ type, doc });
  }

  if (sub && sub.type === 'ce') return <ComprehensionView doc={sub.doc} onClose={() => setSub(null)} />;
  if (sub && sub.type === 'voc') return <VocabulaireView doc={sub.doc} onClose={() => setSub(null)} />;
  if (sub === 'red') return <RedactionView onClose={() => setSub(null)} />;

  return (
    <View title="Langue vivante — Examen blanc B2" onClose={onClose}
      headerRight={<ExamTimer minutes={L.duree} />}>
      <div style={{maxWidth:880, margin:'0 auto'}}>
        <div className="diagram-card">
          <h3 style={{marginTop:0}}>📋 Format de l'épreuve écrite</h3>
          <p style={{color:'var(--fg-2)', fontSize:13, margin:'0 0 10px'}}>
            Durée : <strong>1 h 45</strong> · Aucun document ni outil autorisé · Niveau visé : <strong>B2 (CECRL)</strong>.
          </p>
          <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
            <span className="tag">QCM : {L.bareme.qcm} pts</span>
            <span className="tag">Vocabulaire : {L.bareme.vocab} pts</span>
            <span className="tag">Essai : {L.bareme.essai} pts</span>
            <span className="tag" style={{color:'var(--accent)'}}>Total : {L.bareme.total} pts</span>
          </div>
        </div>

        <div className="section-label">1 · Compréhension écrite — 20 questions (60 pts)</div>
        <div className="diagram-card" style={{display:'flex', alignItems:'center', gap:14, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:200}}>
            <h3 style={{margin:0}}>🎲 Sujet aléatoire</h3>
            <p style={{margin:'4px 0 0', color:'var(--fg-2)', fontSize:13}}>
              Lance un texte au hasard parmi les {L.comprehension.length} — jamais le même deux fois de suite. Ou choisis ci-dessous.
            </p>
          </div>
          <Btn kind="primary" onClick={() => lancerAleatoire(L.comprehension, 'ce', 'langue_lastCE')}>▶ Lancer un sujet aléatoire</Btn>
        </div>
        <div className="chapter-grid">
          {L.comprehension.map(doc => (
            <div key={doc.id} className="chapter-card" onClick={() => setSub({type:'ce', doc})}>
              <div className="accent-bar" style={{background:'#60A5FA'}}/>
              <span className="icon">📰</span>
              <h3>{doc.title}</h3>
              <p>{doc.theme} · {doc.questions.length} questions · {doc.questions.length*3} pts</p>
            </div>
          ))}
        </div>

        <div className="section-label">2 · Vocabulaire — texte à trous (90 pts)</div>
        <div className="diagram-card" style={{display:'flex', alignItems:'center', gap:14, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:200}}>
            <h3 style={{margin:0}}>🎲 Texte aléatoire</h3>
            <p style={{margin:'4px 0 0', color:'var(--fg-2)', fontSize:13}}>
              Lance un texte à trous au hasard parmi les {L.vocabulaire.length} — jamais le même deux fois de suite. Ou choisis ci-dessous.
            </p>
          </div>
          <Btn kind="primary" onClick={() => lancerAleatoire(L.vocabulaire, 'voc', 'langue_lastVOC')}>▶ Lancer un texte aléatoire</Btn>
        </div>
        <div className="chapter-grid">
          {L.vocabulaire.map(doc => (
            <div key={doc.id} className="chapter-card" onClick={() => setSub({type:'voc', doc})}>
              <div className="accent-bar" style={{background:'#34D399'}}/>
              <span className="icon">✍️</span>
              <h3>{doc.title}</h3>
              <p>{doc.theme} · {doc.blanks.length} blancs · {doc.blanks.length*3} pts</p>
            </div>
          ))}
        </div>

        <div className="section-label">3 · Rédaction — essai ~400 mots (70 pts)</div>
        <div className="boss-card" style={{cursor:'pointer'}} onClick={() => setSub('red')}>
          <div className="boss-icon">📝</div>
          <div style={{flex:1}}>
            <h3>Rédiger un essai argumenté</h3>
            <p>{L.redaction.length} sujets au choix · compteur de mots + grille d'auto-évaluation B2.</p>
          </div>
          <Btn kind="primary" onClick={(e) => { e.stopPropagation(); setSub('red'); }}>Commencer</Btn>
        </div>
      </div>
    </View>
  );
};
