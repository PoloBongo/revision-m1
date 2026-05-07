// Vue Glossaire avec recherche
window.GlossaryView = function GlossaryView({ onClose }) {
  const [q, setQ] = useState('');
  const filtered = window.GLOSSARY.filter(g =>
    g.term.toLowerCase().includes(q.toLowerCase()) ||
    g.def.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <View title="Glossaire" onClose={onClose}
      headerRight={<span className="tag">{window.GLOSSARY.length} termes</span>}>
      <input className="search-input" placeholder="🔍 Chercher un terme ou une définition…"
        value={q} onChange={e => setQ(e.target.value)} autoFocus />
      <div className="glossary-list">
        {filtered.map((g, i) => (
          <div key={i} className="glossary-item">
            <div className="glossary-term">{g.term}</div>
            <div className="glossary-def">{g.def}</div>
          </div>
        ))}
      </div>
      {!filtered.length && <div className="empty-state"><h3>Aucun résultat.</h3></div>}
    </View>
  );
};

// Vue Schémas interactifs (UML, GANTT, MCD)
window.DiagramsView = function DiagramsView({ onClose }) {
  const [tab, setTab] = useState('mcd');
  return (
    <View title="Schémas interactifs" onClose={onClose}>
      <div style={{display:'flex', gap:8, marginBottom:18}}>
        {[['mcd','MCD du TP'],['gantt','GANTT exemple'],['pert','PERT'],['uml','UML Use Case']].map(([k,l]) => (
          <Btn key={k} kind={tab===k?'primary':'default'} onClick={() => setTab(k)}>{l}</Btn>
        ))}
      </div>
      {tab==='mcd' && <McdDiagram />}
      {tab==='gantt' && <GanttDiagram />}
      {tab==='pert' && <PertDiagram />}
      {tab==='uml' && <UmlDiagram />}
    </View>
  );
};

function McdDiagram() {
  return (
    <div className="diagram-card">
      <h3>MCD — TP Gaming (GameForge Academy)</h3>
      <p style={{color:'var(--fg-2)', fontSize:13}}>Survole une entité pour voir ses attributs.</p>
      <svg viewBox="0 0 800 460" style={{width:'100%', height:'auto', background:'var(--bg-0)', borderRadius:8}}>
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6EE7B7" />
          </marker>
        </defs>
        {/* Studio */}
        <g><rect x="40" y="40" width="180" height="100" rx="6" fill="#1a2332" stroke="#6EE7B7" strokeWidth="1.5"/>
          <text x="130" y="62" fill="#6EE7B7" fontSize="13" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">studio</text>
          <line x1="40" y1="72" x2="220" y2="72" stroke="#2a3548"/>
          <text x="55" y="92" fill="#e5e9f0" fontSize="11" fontFamily="JetBrains Mono"># studio_id (PK)</text>
          <text x="55" y="108" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">nom, pays</text>
          <text x="55" y="124" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">annee_creation</text>
        </g>
        {/* Jeu */}
        <g><rect x="310" y="40" width="180" height="120" rx="6" fill="#1a2332" stroke="#FCD34D" strokeWidth="1.5"/>
          <text x="400" y="62" fill="#FCD34D" fontSize="13" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">jeu</text>
          <line x1="310" y1="72" x2="490" y2="72" stroke="#2a3548"/>
          <text x="325" y="92" fill="#e5e9f0" fontSize="11" fontFamily="JetBrains Mono"># jeu_id (PK)</text>
          <text x="325" y="108" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">studio_id (FK)</text>
          <text x="325" y="124" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">titre, genre, plateforme</text>
          <text x="325" y="140" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">budget, note_metascore</text>
        </g>
        {/* Vente */}
        <g><rect x="580" y="40" width="180" height="100" rx="6" fill="#1a2332" stroke="#F472B6" strokeWidth="1.5"/>
          <text x="670" y="62" fill="#F472B6" fontSize="13" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">vente</text>
          <line x1="580" y1="72" x2="760" y2="72" stroke="#2a3548"/>
          <text x="595" y="92" fill="#e5e9f0" fontSize="11" fontFamily="JetBrains Mono"># vente_id (PK)</text>
          <text x="595" y="108" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">jeu_id (FK), mois</text>
          <text x="595" y="124" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">region, copies, revenu</text>
        </g>
        {/* Participation */}
        <g><rect x="310" y="240" width="180" height="100" rx="6" fill="#1a2332" stroke="#C4B5FD" strokeWidth="1.5" strokeDasharray="4 3"/>
          <text x="400" y="262" fill="#C4B5FD" fontSize="13" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">participation</text>
          <line x1="310" y1="272" x2="490" y2="272" stroke="#2a3548"/>
          <text x="325" y="292" fill="#e5e9f0" fontSize="11" fontFamily="JetBrains Mono"># jeu_id, employe_id (PK)</text>
          <text x="325" y="308" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">role_projet</text>
          <text x="325" y="324" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">heures_travaillees</text>
        </g>
        {/* Employe */}
        <g><rect x="40" y="340" width="180" height="100" rx="6" fill="#1a2332" stroke="#93C5FD" strokeWidth="1.5"/>
          <text x="130" y="362" fill="#93C5FD" fontSize="13" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">employe</text>
          <line x1="40" y1="372" x2="220" y2="372" stroke="#2a3548"/>
          <text x="55" y="392" fill="#e5e9f0" fontSize="11" fontFamily="JetBrains Mono"># employe_id (PK)</text>
          <text x="55" y="408" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">nom, specialite</text>
          <text x="55" y="424" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono">niveau, salaire_annuel</text>
        </g>
        {/* relations */}
        <line x1="220" y1="90" x2="310" y2="90" stroke="#6EE7B7" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <text x="240" y="84" fill="#6EE7B7" fontSize="10" fontFamily="JetBrains Mono">1,N</text>
        <line x1="490" y1="90" x2="580" y2="90" stroke="#6EE7B7" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <text x="510" y="84" fill="#6EE7B7" fontSize="10" fontFamily="JetBrains Mono">1,N</text>
        <line x1="400" y1="160" x2="400" y2="240" stroke="#6EE7B7" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <text x="408" y="200" fill="#6EE7B7" fontSize="10" fontFamily="JetBrains Mono">N</text>
        <line x1="220" y1="390" x2="310" y2="290" stroke="#6EE7B7" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <text x="240" y="340" fill="#6EE7B7" fontSize="10" fontFamily="JetBrains Mono">N</text>
      </svg>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:14, fontSize:13}}>
        <div><strong style={{color:'var(--accent)'}}>Règles métier :</strong>
          <ul style={{margin:'6px 0', paddingLeft:18, color:'var(--fg-2)'}}>
            <li>Un jeu appartient à 1 et 1 seul studio</li>
            <li>Un employé peut participer à 0..N jeux</li>
            <li>Une vente concerne 1 et 1 seul jeu</li>
            <li>Unicité (jeu_id, mois, region) sur vente</li>
            <li>PK composée sur participation</li>
          </ul>
        </div>
        <div><strong style={{color:'var(--accent)'}}>Cardinalités :</strong>
          <ul style={{margin:'6px 0', paddingLeft:18, color:'var(--fg-2)'}}>
            <li>studio (1,1) — (0,N) jeu</li>
            <li>jeu (1,1) — (0,N) vente</li>
            <li>jeu (0,N) — (0,N) employe via participation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function GanttDiagram() {
  const tasks = [
    { name:'A — Spécifications', start:0, dur:5, color:'#6EE7B7' },
    { name:'B — Conception', start:5, dur:8, color:'#93C5FD', critical:true },
    { name:'C — Maquettage', start:5, dur:4, color:'#FCD34D' },
    { name:'D — Dev backend', start:13, dur:10, color:'#C4B5FD', critical:true },
    { name:'E — Dev frontend', start:13, dur:8, color:'#F472B6' },
    { name:'F — Tests', start:23, dur:5, color:'#FB923C', critical:true },
    { name:'G — Déploiement', start:28, dur:2, color:'#10B981', critical:true },
  ];
  const total = 30;
  return (
    <div className="diagram-card">
      <h3>GANTT — Exemple de projet</h3>
      <p style={{color:'var(--fg-2)', fontSize:13}}>Les tâches en <span style={{color:'#FCA5A5'}}>rouge</span> sont sur le chemin critique (durée totale = 30 j).</p>
      <div style={{display:'flex', flexDirection:'column', gap:6, marginTop:12}}>
        {tasks.map((t, i) => (
          <div key={i} style={{display:'flex', alignItems:'center', gap:10}}>
            <div style={{width:160, fontSize:12, color:t.critical?'#FCA5A5':'var(--fg-2)', fontFamily:'var(--mono)'}}>{t.name}</div>
            <div style={{flex:1, position:'relative', height:24, background:'var(--bg-2)', borderRadius:4}}>
              <div style={{
                position:'absolute',
                left: (t.start/total*100)+'%',
                width: (t.dur/total*100)+'%',
                height:'100%',
                background:t.color,
                borderRadius:4,
                opacity: t.critical ? 1 : .85,
                boxShadow: t.critical ? '0 0 0 1px #FCA5A5' : 'none',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:11, color:'#0a0a0a', fontWeight:700, fontFamily:'var(--mono)'
              }}>{t.dur}j</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'space-between', marginTop:8, marginLeft:170, fontFamily:'var(--mono)', fontSize:10, color:'var(--fg-3)'}}>
        {[0,5,10,15,20,25,30].map(d => <span key={d}>j{d}</span>)}
      </div>
    </div>
  );
}

function PertDiagram() {
  return (
    <div className="diagram-card">
      <h3>Réseau PERT — chemin critique</h3>
      <svg viewBox="0 0 800 280" style={{width:'100%', background:'var(--bg-0)', borderRadius:8}}>
        <defs>
          <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#a3adc2"/>
          </marker>
          <marker id="arrCrit" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#FCA5A5"/>
          </marker>
        </defs>
        {[
          { id:1, x:60, y:140, label:'Début' },
          { id:2, x:220, y:80,  label:'A (5j)' },
          { id:3, x:220, y:200, label:'B (3j)' },
          { id:4, x:400, y:140, label:'C (4j)' },
          { id:5, x:580, y:80,  label:'D (6j)' },
          { id:6, x:580, y:200, label:'E (2j)' },
          { id:7, x:740, y:140, label:'Fin' },
        ].map(n => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="32" fill="#1a2332" stroke="#6EE7B7" strokeWidth="1.5"/>
            <text x={n.x} y={n.y+5} fill="#e5e9f0" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">{n.label}</text>
          </g>
        ))}
        {/* arcs */}
        <line x1="92" y1="125" x2="190" y2="92" stroke="#FCA5A5" strokeWidth="2" markerEnd="url(#arrCrit)"/>
        <line x1="92" y1="155" x2="190" y2="190" stroke="#a3adc2" strokeWidth="1.5" markerEnd="url(#arr2)"/>
        <line x1="252" y1="92" x2="370" y2="130" stroke="#FCA5A5" strokeWidth="2" markerEnd="url(#arrCrit)"/>
        <line x1="252" y1="200" x2="370" y2="155" stroke="#a3adc2" strokeWidth="1.5" markerEnd="url(#arr2)"/>
        <line x1="432" y1="125" x2="550" y2="92" stroke="#FCA5A5" strokeWidth="2" markerEnd="url(#arrCrit)"/>
        <line x1="432" y1="155" x2="550" y2="190" stroke="#a3adc2" strokeWidth="1.5" markerEnd="url(#arr2)"/>
        <line x1="612" y1="92" x2="710" y2="125" stroke="#FCA5A5" strokeWidth="2" markerEnd="url(#arrCrit)"/>
        <line x1="612" y1="200" x2="710" y2="155" stroke="#a3adc2" strokeWidth="1.5" markerEnd="url(#arr2)"/>
        <text x="400" y="20" fill="#FCA5A5" fontSize="13" fontFamily="JetBrains Mono" textAnchor="middle">Chemin critique : Début → A → C → D → Fin = 15j</text>
      </svg>
    </div>
  );
}

function UmlDiagram() {
  return (
    <div className="diagram-card">
      <h3>UML — Use Case (système de révision)</h3>
      <svg viewBox="0 0 700 360" style={{width:'100%', background:'var(--bg-0)', borderRadius:8}}>
        {/* Acteur */}
        <g transform="translate(60, 160)">
          <circle cx="0" cy="0" r="14" fill="none" stroke="#6EE7B7" strokeWidth="1.5"/>
          <line x1="0" y1="14" x2="0" y2="50" stroke="#6EE7B7" strokeWidth="1.5"/>
          <line x1="-20" y1="25" x2="20" y2="25" stroke="#6EE7B7" strokeWidth="1.5"/>
          <line x1="0" y1="50" x2="-15" y2="80" stroke="#6EE7B7" strokeWidth="1.5"/>
          <line x1="0" y1="50" x2="15" y2="80" stroke="#6EE7B7" strokeWidth="1.5"/>
          <text x="0" y="105" fill="#e5e9f0" fontSize="12" fontFamily="JetBrains Mono" textAnchor="middle">Étudiant</text>
        </g>
        {/* Système */}
        <rect x="220" y="40" width="440" height="280" rx="6" fill="none" stroke="#2a3548" strokeWidth="1.5" strokeDasharray="4 3"/>
        <text x="440" y="32" fill="#a3adc2" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">Système RevisionM1</text>
        {[
          {x:340, y:90, label:'Réviser flashcards'},
          {x:540, y:90, label:'Passer un QCM'},
          {x:340, y:170, label:'Coder en SQL'},
          {x:540, y:170, label:'Coder en Python'},
          {x:340, y:250, label:'Consulter glossaire'},
          {x:540, y:250, label:'Mode Boss'},
        ].map((u, i) => (
          <g key={i}>
            <ellipse cx={u.x} cy={u.y} rx="80" ry="26" fill="#1a2332" stroke="#93C5FD" strokeWidth="1.5"/>
            <text x={u.x} y={u.y+4} fill="#e5e9f0" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">{u.label}</text>
            <line x1="80" y1="180" x2={u.x-78} y2={u.y} stroke="#3b4a66" strokeWidth="1"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Vue Boss / examen blanc
window.BossView = function BossView({ onClose }) {
  // mix de questions de tous les chapitres
  const allQ = useMemo(() => {
    const list = [];
    Object.entries(window.QCM).forEach(([cid, qs]) => {
      qs.forEach((q, qi) => list.push({ ...q, _cid: cid, _qi: qi }));
    });
    return list.sort(() => Math.random() - .5).slice(0, 20);
  }, []);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [done, setDone] = useState(false);
  const [time, setTime] = useState(20 * 60);

  useEffect(() => {
    if (done) return;
    const id = setInterval(() => setTime(t => {
      if (t <= 1) { setDone(true); return 0; }
      return t - 1;
    }), 1000);
    return () => clearInterval(id);
  }, [done]);

  function pick(idx, e) {
    if (picked !== null) return;
    setPicked(idx);
    const q = allQ[i];
    const correct = idx === q.answer;
    AppState.recordQCM(q._cid, q._qi, correct);
    if (correct) {
      Sfx.correct();
      const newCombo = combo + 1;
      setCombo(newCombo);
      setScore(score + 1);
      award(15 + (newCombo>=3?5:0), e);
      if (newCombo >= 3) UIfx.combo(newCombo);
    } else { Sfx.wrong(); setCombo(0); }
  }

  function next() {
    if (i + 1 >= allQ.length) {
      setDone(true);
      const s = AppState.get();
      if (score > s.bestBoss) AppState.set({ bestBoss: score });
    }
    else { setI(i + 1); setPicked(null); }
  }

  if (done) {
    const pct = Math.round((score / allQ.length) * 100);
    return (
      <View title="🏆 Mode Boss — Résultat" onClose={onClose}>
        <div className="empty-state">
          <div style={{fontSize:64, marginBottom:8}}>{pct >= 75 ? '🏆' : pct >= 50 ? '⚔️' : '💀'}</div>
          <h3 style={{fontSize:36}}>{score} / {allQ.length}</h3>
          <p style={{fontSize:14, marginBottom:24}}>
            {pct >= 75 ? 'Boss vaincu — tu es prêt pour l\'examen !' : pct >= 50 ? 'Pas mal, mais le boss respire encore.' : 'Le boss t\'a vaincu. Reprends les chapitres faibles !'}
          </p>
          <Btn kind="primary" onClick={onClose}>Retour au dashboard</Btn>
        </div>
      </View>
    );
  }

  const q = allQ[i];
  const min = String(Math.floor(time/60)).padStart(2,'0');
  const sec = String(time%60).padStart(2,'0');

  return (
    <View title="🏆 Mode Boss — Examen blanc" onClose={onClose}
      headerRight={<span className="tag" style={{color: time < 60 ? 'var(--bad)' : 'var(--warn)', fontSize:13}}>⏱ {min}:{sec}</span>}>
      <div className="qcm-container">
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:12, fontSize:12, fontFamily:'var(--mono)', color:'var(--fg-3)'}}>
          <span>Question {i+1}/{allQ.length}</span>
          <span>Score : {score} · Combo : {combo}</span>
        </div>
        <div className="qcm-progress">
          {allQ.map((_, idx) => <span key={idx} className={idx<i?'done':idx===i?'current':''}/>)}
        </div>
        <div className="qcm-question">
          <div style={{fontFamily:'var(--mono)', fontSize:11, color:'var(--fg-3)', marginBottom:8}}>
            Chapitre : {(window.CHAPTERS.find(c => c.id===q._cid)||{}).title}
          </div>
          <div className="qcm-q-text">{q.q}</div>
          {q.choices.map((c, idx) => {
            let cls = 'qcm-choice';
            if (picked !== null) {
              if (idx === q.answer) cls += ' correct';
              else if (idx === picked) cls += ' wrong';
            }
            return (
              <button key={idx} className={cls} disabled={picked !== null} onClick={(e) => pick(idx, e)}>
                <span style={{fontFamily:'var(--mono)', color:'var(--fg-3)', marginRight:10}}>{String.fromCharCode(65+idx)}.</span>{c}
              </button>
            );
          })}
          {picked !== null && (
            <div style={{marginTop:18, textAlign:'right'}}>
              <Btn kind="primary" onClick={next}>{i+1>=allQ.length?'Terminer':'Suivant →'}</Btn>
            </div>
          )}
        </div>
      </div>
    </View>
  );
};
