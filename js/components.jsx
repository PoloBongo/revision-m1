// Composants partagés
const { useState, useEffect, useRef, useMemo } = React;

// Bouton pill
window.Btn = function Btn({ kind = 'default', onClick, children, ...rest }) {
  const cls = kind === 'primary' ? 'btn btn-primary' : kind === 'ghost' ? 'btn btn-ghost' : kind === 'danger' ? 'btn btn-danger' : 'btn';
  return <button className={cls} onClick={onClick} {...rest}>{children}</button>;
};

// Top bar avec XP / streak
window.TopBar = function TopBar({ onNav, view }) {
  const [, force] = useState(0);
  useEffect(() => AppState.subscribe(() => force(x => x + 1)), []);
  const s = AppState.get();
  const lvl = AppState.levelFromXP(s.xp);
  const pct = (lvl.current / lvl.need) * 100;
  return (
    <div className="topbar">
      <div className="logo" style={{cursor:'pointer'}} onClick={() => onNav('dashboard')}>
        <span className="prompt">~/</span>revisionM1<span style={{color:'var(--fg-3)'}}>.sh</span>
      </div>
      <div className="topbar-spacer" />
      <div className="streak-pill" title="Streak quotidien">
        <span>🔥</span><span>{s.streak}j</span>
      </div>
      <div className="xp-pill" title={`${s.xp} XP total`}>
        <span className="lvl">Lv.{lvl.level}</span>
        <div className="xp-bar"><div className="xp-fill" style={{width: pct + '%'}} /></div>
        <span style={{color:'var(--fg-3)', fontFamily:'var(--mono)', fontSize:11}}>{lvl.current}/{lvl.need}</span>
      </div>
    </div>
  );
};

// Vue plein écran générique
window.View = function View({ title, onClose, children, headerRight }) {
  useEffect(() => {
    const esc = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);
  return (
    <div className="view">
      <div className="view-header">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">←</button>
        <h2>{title}</h2>
        <div style={{flex:1}} />
        {headerRight}
      </div>
      <div className="view-body">{children}</div>
    </div>
  );
};

// Award helper — XP + animation + level up
window.award = function(amount, evt) {
  const before = AppState.levelFromXP(AppState.get().xp).level;
  AppState.addXP(amount);
  const after = AppState.levelFromXP(AppState.get().xp).level;
  const x = evt?.clientX, y = evt?.clientY;
  UIfx.xpGain(amount, x, y);
  if (after > before) {
    Sfx.levelUp();
    UIfx.toast('🎉 Level Up ! Niveau ' + after, 'success');
  }
  AppState.bumpStreak();
};
