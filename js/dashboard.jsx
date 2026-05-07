// Vue Chapitre — choix entre flashcards et QCM, et exercices selon chapitre
window.ChapterView = function ChapterView({ chapter, onClose }) {
  const [sub, setSub] = useState(null); // 'flash' | 'qcm' | 'sql' | 'py' | 'mongo'
  const mastery = AppState.chapterMasteryPct(chapter.id);

  if (sub === 'flash') return <FlashcardsView chapter={chapter} onClose={() => setSub(null)} />;
  if (sub === 'qcm') return <QcmView chapter={chapter} onClose={() => setSub(null)} />;

  const sqlExos = chapter.id === 'sql' || chapter.id === 'tp_gaming' ? window.SQL_EXERCISES : [];
  const pyExos = chapter.id === 'python' || chapter.id === 'tp_gaming' ? window.PY_EXERCISES : [];
  const mongoExos = chapter.id === 'mongo' || chapter.id === 'tp_gaming' ? window.MONGO_EXERCISES : [];

  if (sub && sub.type === 'sql') return <SqlExoView exo={sub.exo} onClose={() => setSub(null)} />;
  if (sub && sub.type === 'py') return <PyExoView exo={sub.exo} onClose={() => setSub(null)} />;
  if (sub && sub.type === 'mongo') return <MongoExoView exo={sub.exo} onClose={() => setSub(null)} />;

  const fc = (window.FLASHCARDS[chapter.id] || []).length;
  const qc = (window.QCM[chapter.id] || []).length;

  return (
    <View title={chapter.title} onClose={onClose}
      headerRight={<span className="tag">{chapter.uc}</span>}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <div className="diagram-card">
          <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:8}}>
            <span style={{fontSize:36}}>{chapter.icon}</span>
            <div>
              <h3 style={{margin:0, fontSize:18}}>{chapter.title}</h3>
              <p style={{margin:'4px 0 0', color:'var(--fg-2)', fontSize:13}}>{chapter.summary}</p>
            </div>
          </div>
          <div style={{marginTop:14}}>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:12, fontFamily:'var(--mono)', color:'var(--fg-3)', marginBottom:4}}>
              <span>Maîtrise</span><span>{mastery}%</span>
            </div>
            <div className="progress" style={{height:6, background:'var(--bg-3)', borderRadius:3, overflow:'hidden'}}>
              <div style={{height:'100%', width:mastery+'%', background:chapter.color, transition:'width .4s'}}/>
            </div>
          </div>
          <div style={{marginTop:12, display:'flex', flexWrap:'wrap', gap:6}}>
            {chapter.keywords.map(k => <span key={k} className="tag">{k}</span>)}
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
          <div className="diagram-card" style={{cursor:fc?'pointer':'not-allowed', opacity:fc?1:.4}}
            onClick={() => fc && setSub('flash')}>
            <h3>🃏 Flashcards <span className="tag" style={{marginLeft:6}}>{fc}</span></h3>
            <p style={{color:'var(--fg-2)', fontSize:13}}>Recto/verso avec spaced repetition.</p>
          </div>
          <div className="diagram-card" style={{cursor:qc?'pointer':'not-allowed', opacity:qc?1:.4}}
            onClick={() => qc && setSub('qcm')}>
            <h3>📝 QCM <span className="tag" style={{marginLeft:6}}>{qc}</span></h3>
            <p style={{color:'var(--fg-2)', fontSize:13}}>QCM avec score, combo et corrections.</p>
          </div>
        </div>

        {sqlExos.length > 0 && (
          <>
            <div className="section-label">Exercices SQL</div>
            <div className="chapter-grid">
              {sqlExos.map(exo => (
                <div key={exo.id} className="chapter-card" onClick={() => setSub({type:'sql', exo})}>
                  <div className="accent-bar" style={{background:'#34D399'}}/>
                  <span className="icon">🗄️</span>
                  <h3>{exo.title}</h3>
                  <p>{exo.consigne.slice(0, 100)}…</p>
                  {AppState.get().sqlSolved.includes(exo.id) && <span className="tag" style={{color:'var(--good)'}}>✓ Validé</span>}
                </div>
              ))}
            </div>
          </>
        )}

        {pyExos.length > 0 && (
          <>
            <div className="section-label">Exercices Python</div>
            <div className="chapter-grid">
              {pyExos.map(exo => (
                <div key={exo.id} className="chapter-card" onClick={() => setSub({type:'py', exo})}>
                  <div className="accent-bar" style={{background:'#60A5FA'}}/>
                  <span className="icon">🐍</span>
                  <h3>{exo.title}</h3>
                  <p>{exo.consigne}</p>
                  {AppState.get().pySolved.includes(exo.id) && <span className="tag" style={{color:'var(--good)'}}>✓ Validé</span>}
                </div>
              ))}
            </div>
          </>
        )}

        {mongoExos.length > 0 && (
          <>
            <div className="section-label">Exercices MongoDB</div>
            <div className="chapter-grid">
              {mongoExos.map(exo => (
                <div key={exo.id} className="chapter-card" onClick={() => setSub({type:'mongo', exo})}>
                  <div className="accent-bar" style={{background:'#10B981'}}/>
                  <span className="icon">🍃</span>
                  <h3>{exo.title}</h3>
                  <p>{exo.consigne}</p>
                  {AppState.get().mongoSolved.includes(exo.id) && <span className="tag" style={{color:'var(--good)'}}>✓ Validé</span>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </View>
  );
};

// Dashboard principal
window.Dashboard = function Dashboard() {
  const [view, setView] = useState({ name: 'dashboard' });
  const [, force] = useState(0);
  useEffect(() => AppState.subscribe(() => force(x=>x+1)), []);
  const s = AppState.get();

  // Group chapters par UC
  const ucGroups = useMemo(() => {
    const groups = { 'D41.1': [], 'D41.2': [], 'TP': [] };
    window.CHAPTERS.forEach(c => groups[c.uc]?.push(c));
    return groups;
  }, []);

  // Stats
  const totalQcm = Object.values(window.QCM).reduce((a,q) => a + q.length, 0);
  const totalFlash = Object.values(window.FLASHCARDS).reduce((a,f) => a + f.length, 0);
  const seenQcm = Object.values(s.qcmStats).reduce((a,v) => a + v.seen.length, 0);
  const seenFlash = Object.keys(s.flashStats).length;
  const avgMastery = Math.round(window.CHAPTERS.reduce((a,c) => a + AppState.chapterMasteryPct(c.id), 0) / window.CHAPTERS.length);

  if (view.name === 'chapter') return <ChapterView chapter={view.chapter} onClose={() => setView({name:'dashboard'})}/>;
  if (view.name === 'glossary') return <GlossaryView onClose={() => setView({name:'dashboard'})}/>;
  if (view.name === 'diagrams') return <DiagramsView onClose={() => setView({name:'dashboard'})}/>;
  if (view.name === 'boss') return <BossView onClose={() => setView({name:'dashboard'})}/>;

  return (
    <>
      <TopBar onNav={n => setView({name:n})} view={view.name}/>
      <div className="app">
        <div className="uc-banner"><span className="dot"/>M1 — Application IA & Big Data · Manager projet info</div>
        <h1 className="page-title">Salut jeune Bongo</h1>
        <p className="page-subtitle">Dashboard de révision pour les UC D41.1 & D41.2 — un mois pour tout maîtriser.</p>

        <div className="intro-grid">
          <div className="hero-card">
            <h3>// Programme du jour</h3>
            <p style={{margin:'4px 0 12px'}}>2-3 chapitres, 1 batch flashcards, 1 QCM, 1 exo code.</p>
            <Btn kind="primary" onClick={() => {
              // pick chapter le moins maîtrisé
              const sorted = [...window.CHAPTERS].sort((a,b) => AppState.chapterMasteryPct(a.id) - AppState.chapterMasteryPct(b.id));
              setView({name:'chapter', chapter: sorted[0]});
            }}>▶ Démarrer la session</Btn>
          </div>
          <div className="stat-card">
            <div className="stat-label">Maîtrise moy.</div>
            <div className="stat-value" style={{color:'var(--accent)'}}>{avgMastery}%</div>
            <div className="stat-sub">tous chapitres</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">QCM vus</div>
            <div className="stat-value">{seenQcm}<span style={{fontSize:14, color:'var(--fg-3)'}}> /{totalQcm}</span></div>
            <div className="stat-sub">questions</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Cartes vues</div>
            <div className="stat-value">{seenFlash}<span style={{fontSize:14, color:'var(--fg-3)'}}> /{totalFlash}</span></div>
            <div className="stat-sub">flashcards</div>
          </div>
        </div>

        <div style={{display:'flex', gap:10, marginBottom:16, flexWrap:'wrap'}}>
          <Btn onClick={() => setView({name:'glossary'})}>📖 Glossaire ({window.GLOSSARY.length})</Btn>
          <Btn onClick={() => setView({name:'diagrams'})}>📊 Schémas (UML, GANTT, MCD)</Btn>
          <Btn onClick={() => { AppState.set({sound: !s.sound}); }}>{s.sound?'🔊':'🔇'} Sons</Btn>
          <Btn kind="ghost" onClick={() => { if(confirm('Reset complet de la progression ?')) AppState.reset(); }}>🗑 Reset</Btn>
        </div>

        <div className="section-label">UC D41.1 — Conduite et management de projet</div>
        <div className="chapter-grid">
          {ucGroups['D41.1'].map(c => <ChapterCard key={c.id} c={c} onClick={() => setView({name:'chapter', chapter:c})}/>)}
        </div>

        <div className="section-label">UC D41.2 — Développement & bases de données</div>
        <div className="chapter-grid">
          {ucGroups['D41.2'].map(c => <ChapterCard key={c.id} c={c} onClick={() => setView({name:'chapter', chapter:c})}/>)}
        </div>

        <div className="section-label">Section TP Gaming</div>
        <div className="chapter-grid">
          {ucGroups['TP'].map(c => <ChapterCard key={c.id} c={c} onClick={() => setView({name:'chapter', chapter:c})}/>)}
        </div>

        <div className="boss-card">
          <div className="boss-icon">⚔️</div>
          <div style={{flex:1}}>
            <h3>Mode Boss — Examen blanc</h3>
            <p>20 questions tirées de tous les chapitres · 20 min chrono. Meilleur score : <strong style={{color:'var(--accent)'}}>{s.bestBoss}/20</strong></p>
          </div>
          <Btn kind="primary" onClick={() => setView({name:'boss'})}>Affronter le boss</Btn>
        </div>

        <div style={{textAlign:'center', color:'var(--fg-3)', fontSize:11, fontFamily:'var(--mono)', marginTop:40, paddingBottom:20}}>
          // RevisionM1 — built for Wilfrid · Bonne chance pour les épreuves dans 1 mois 💪
        </div>
      </div>
    </>
  );
};

function ChapterCard({ c, onClick }) {
  const mastery = AppState.chapterMasteryPct(c.id);
  return (
    <div className="chapter-card" onClick={onClick}>
      <div className="accent-bar" style={{background:c.color}}/>
      <span className="icon">{c.icon}</span>
      <span className="uc-tag">{c.uc}</span>
      <h3>{c.title}</h3>
      <p>{c.summary}</p>
      <div className="progress"><div className="progress-fill" style={{width:mastery+'%', background:c.color}}/></div>
      <div className="progress-label"><span>Maîtrise</span><span>{mastery}%</span></div>
    </div>
  );
}
