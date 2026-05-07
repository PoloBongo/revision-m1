// Éditeur SQL — utilise alasql (chargé via CDN dans index.html)
window.SqlExoView = function SqlExoView({ exo, onClose }) {
  const [code, setCode] = useState(exo.solution ? '' : '');
  const [output, setOutput] = useState(null);
  const [outputType, setOutputType] = useState('info');
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);

  function run(e) {
    if (!window.alasql) {
      setOutput('alasql non chargé.');
      setOutputType('error');
      return;
    }
    try {
      // reset DB
      const db = new window.alasql.Database();
      const setup = exo.setup.split(';').map(s => s.trim()).filter(Boolean);
      setup.forEach(s => db.exec(s));
      const userQueries = code.split(';').map(s => s.trim()).filter(Boolean);
      if (!userQueries.length) {
        setOutput('Tape ta requête puis clique sur Exécuter.');
        setOutputType('info');
        return;
      }
      let res = null;
      userQueries.forEach(q => { res = db.exec(q); });
      // alasql renvoie un array de results par query ; on prend la dernière
      const rows = Array.isArray(res) ? (Array.isArray(res[0]) ? res[res.length-1] : res) : [];
      // Vérification
      let ok = true;
      const reasons = [];
      if (exo.expectedRows !== undefined && rows.length !== exo.expectedRows) {
        ok = false;
        reasons.push(`Tu as ${rows.length} lignes, attendu : ${exo.expectedRows}.`);
      }
      if (ok && exo.expectedFirst) {
        const first = rows[0] || {};
        for (const [k, v] of Object.entries(exo.expectedFirst)) {
          if (String(first[k]) !== String(v)) {
            ok = false;
            reasons.push(`Première ligne : ${k}=${first[k]} mais attendu ${v}.`);
            break;
          }
        }
      }
      setOutput({ rows, ok, reasons });
      setOutputType(ok ? 'success' : (rows.length ? 'info' : 'error'));
      if (ok && !AppState.get().sqlSolved.includes(exo.id)) {
        const s = AppState.get();
        AppState.set({ sqlSolved: [...s.sqlSolved, exo.id] });
        award(25, e);
        Sfx.correct();
        UIfx.toast('🎉 Exercice validé ! +25 XP', 'success');
      } else if (ok) {
        Sfx.correct();
      }
    } catch (err) {
      setOutput('Erreur SQL : ' + err.message);
      setOutputType('error');
      Sfx.wrong();
    }
  }

  return (
    <View title={exo.title} onClose={onClose}
      headerRight={<span className="tag">SQL · alasql</span>}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <div className="diagram-card">
          <div style={{color:'var(--fg-2)', fontSize:14, marginBottom:8}}>
            <strong style={{color:'var(--accent)'}}>Consigne :</strong> {exo.consigne}
          </div>
          <details style={{fontSize:13, color:'var(--fg-3)'}}>
            <summary style={{cursor:'pointer'}}>📋 Voir le schéma & données de départ</summary>
            <pre style={{marginTop:8, background:'var(--bg-2)', padding:10, borderRadius:6, overflow:'auto', fontSize:11}}>{exo.setup}</pre>
          </details>
        </div>

        <div className="editor-wrap" style={{marginBottom:14}}>
          <div className="editor-tabs">
            <span className="editor-tab active">query.sql</span>
            <div style={{flex:1}} />
          </div>
          <textarea className="editor-textarea" value={code} onChange={e => setCode(e.target.value)}
            placeholder="-- Tape ta requête SQL ici…&#10;SELECT ..." spellCheck={false} />
          <div style={{padding:'10px 14px', background:'var(--bg-2)', borderTop:'1px solid var(--border)', display:'flex', gap:8}}>
            <Btn kind="primary" onClick={run}>▶ Exécuter</Btn>
            {exo.hint && <Btn kind="ghost" onClick={() => setShowHint(!showHint)}>💡 Indice</Btn>}
            <Btn kind="ghost" onClick={() => setShowSolution(!showSolution)}>👁 {showSolution?'Cacher':'Voir'} la solution</Btn>
          </div>
          {showHint && exo.hint && (
            <div className="editor-output" style={{color:'var(--warn)'}}>💡 {exo.hint}</div>
          )}
          {showSolution && (
            <div className="editor-output" style={{color:'var(--accent-2)'}}>{exo.solution}</div>
          )}
          {output && typeof output === 'object' && output.rows ? (
            <div className="editor-output" style={{maxHeight:340}}>
              {output.ok ? <div style={{color:'var(--good)', marginBottom:8}}>✅ Bravo, résultat correct !</div>
                : output.reasons?.length ? <div style={{color:'var(--warn)', marginBottom:8}}>⚠️ {output.reasons.join(' ')}</div>
                : null}
              {output.rows.length ? (
                <table className="result-table">
                  <thead><tr>{Object.keys(output.rows[0]).map(k => <th key={k}>{k}</th>)}</tr></thead>
                  <tbody>
                    {output.rows.slice(0, 50).map((r, idx) => (
                      <tr key={idx}>{Object.keys(output.rows[0]).map(k => <td key={k}>{String(r[k])}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              ) : <div style={{color:'var(--fg-3)'}}>0 ligne retournée.</div>}
            </div>
          ) : output ? (
            <div className={'editor-output ' + outputType}>{output}</div>
          ) : null}
        </div>
      </div>
    </View>
  );
};

// Éditeur Python — Pyodide chargé à la demande
window.PyExoView = function PyExoView({ exo, onClose }) {
  const [code, setCode] = useState(exo.starter || '');
  const [output, setOutput] = useState(null);
  const [outputType, setOutputType] = useState('info');
  const [loading, setLoading] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [pyLoaded, setPyLoaded] = useState(!!window.__pyodide);

  async function ensurePyodide() {
    if (window.__pyodide) return window.__pyodide;
    if (!window.loadPyodide) {
      // Charge dynamiquement le script
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
        s.onload = resolve; s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    const py = await window.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' });
    window.__pyodide = py;
    return py;
  }

  async function run(e) {
    setLoading(true);
    setOutput('⏳ Chargement de Python (Pyodide)…');
    setOutputType('info');
    try {
      const py = await ensurePyodide();
      setPyLoaded(true);
      // Capture stdout
      py.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);
      py.runPython(code);
      // Test
      try {
        py.runPython(exo.check);
      } catch (err) {
        const out = py.runPython('sys.stdout.getvalue()');
        setOutput((out ? '📤 Sortie :\n' + out + '\n\n' : '') + '❌ Test échoué : ' + err.message);
        setOutputType('error');
        Sfx.wrong();
        setLoading(false);
        return;
      }
      const out = py.runPython('sys.stdout.getvalue()');
      setOutput((out ? '📤 Sortie :\n' + out + '\n' : '') + '✅ Test réussi !');
      setOutputType('success');
      if (!AppState.get().pySolved.includes(exo.id)) {
        const s = AppState.get();
        AppState.set({ pySolved: [...s.pySolved, exo.id] });
        award(25, e);
      }
      Sfx.correct();
    } catch (err) {
      setOutput('Erreur : ' + err.message);
      setOutputType('error');
      Sfx.wrong();
    }
    setLoading(false);
  }

  return (
    <View title={exo.title} onClose={onClose}
      headerRight={<span className="tag">Python · Pyodide</span>}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <div className="diagram-card">
          <div style={{color:'var(--fg-2)', fontSize:14}}>
            <strong style={{color:'var(--accent)'}}>Consigne :</strong> {exo.consigne}
          </div>
          {exo.hint && <div style={{color:'var(--fg-3)', fontSize:12, marginTop:8}}>💡 {exo.hint}</div>}
        </div>

        <div className="editor-wrap" style={{marginBottom:14}}>
          <div className="editor-tabs"><span className="editor-tab active">solution.py</span></div>
          <textarea className="editor-textarea" value={code} onChange={e => setCode(e.target.value)}
            placeholder="# Ton code Python…" spellCheck={false} />
          <div style={{padding:'10px 14px', background:'var(--bg-2)', borderTop:'1px solid var(--border)', display:'flex', gap:8}}>
            <Btn kind="primary" onClick={run} disabled={loading}>{loading ? '⏳…' : '▶ Exécuter & tester'}</Btn>
            <Btn kind="ghost" onClick={() => setShowSolution(!showSolution)}>👁 {showSolution?'Cacher':'Voir'} solution</Btn>
            {!pyLoaded && <span style={{fontSize:11, color:'var(--fg-3)', alignSelf:'center'}}>1er run : ~5s de chargement Pyodide</span>}
          </div>
          {showSolution && <div className="editor-output" style={{color:'var(--accent-2)'}}>{exo.solution}</div>}
          {output && <div className={'editor-output ' + outputType}>{output}</div>}
        </div>
      </div>
    </View>
  );
};

// MongoDB — vérification textuelle
window.MongoExoView = function MongoExoView({ exo, onClose }) {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);
  const [outputType, setOutputType] = useState('info');
  const [showSolution, setShowSolution] = useState(false);

  function check(e) {
    const norm = code.replace(/\s+/g, '').toLowerCase();
    const exp = (exo.expected || '').replace(/\s+/g, '').toLowerCase();
    const exp2 = (exo.expected2 || '').replace(/\s+/g, '').toLowerCase();
    const ok = norm.includes(exp) && (!exp2 || norm.includes(exp2));
    if (ok) {
      setOutput('✅ Bonne syntaxe ! Vérifié sur les motifs clés.');
      setOutputType('success');
      if (!AppState.get().mongoSolved.includes(exo.id)) {
        const s = AppState.get();
        AppState.set({ mongoSolved: [...s.mongoSolved, exo.id] });
        award(20, e);
      }
      Sfx.correct();
    } else {
      setOutput('❌ Pas tout à fait. Vérifie les opérateurs et la structure.');
      setOutputType('error');
      Sfx.wrong();
    }
  }

  return (
    <View title={exo.title} onClose={onClose}
      headerRight={<span className="tag">MongoDB Shell</span>}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <div className="diagram-card">
          <div style={{color:'var(--fg-2)', fontSize:14}}>
            <strong style={{color:'var(--accent)'}}>Consigne :</strong> {exo.consigne}
          </div>
        </div>
        <div className="editor-wrap">
          <div className="editor-tabs"><span className="editor-tab active">query.js</span></div>
          <textarea className="editor-textarea" value={code} onChange={e => setCode(e.target.value)}
            placeholder="db.jeux_catalogue.find(...)" spellCheck={false} />
          <div style={{padding:'10px 14px', background:'var(--bg-2)', borderTop:'1px solid var(--border)', display:'flex', gap:8}}>
            <Btn kind="primary" onClick={check}>✓ Vérifier</Btn>
            <Btn kind="ghost" onClick={() => setShowSolution(!showSolution)}>👁 {showSolution?'Cacher':'Voir'} solution</Btn>
          </div>
          {showSolution && <div className="editor-output" style={{color:'var(--accent-2)'}}>{exo.solution}</div>}
          {output && <div className={'editor-output ' + outputType}>{output}</div>}
        </div>
      </div>
    </View>
  );
};
