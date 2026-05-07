// State manager — XP, progression, spaced repetition
window.AppState = (() => {
  const KEY = 'revisionM1_state_v1';
  const defaults = {
    xp: 0,
    level: 1,
    streak: 0,
    lastSession: null,
    chapterProgress: {}, // chapterId -> {qcm: %, flash: %, total: %}
    qcmStats: {},        // chapterId -> {seen:[], correct:[]}
    flashStats: {},      // cardKey -> {seen, success, nextReview}
    sqlSolved: [],       // exoIds
    pySolved: [],
    mongoSolved: [],
    bestBoss: 0,
    sound: true,
  };

  let state = load();
  const subs = new Set();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { ...defaults };
      return { ...defaults, ...JSON.parse(raw) };
    } catch {
      return { ...defaults };
    }
  }
  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
    subs.forEach(fn => fn(state));
  }
  function get() { return state; }
  function set(patch) { state = { ...state, ...patch }; save(); }
  function subscribe(fn) { subs.add(fn); return () => subs.delete(fn); }

  function levelFromXP(xp) {
    // 100 xp pour lvl 2, +50 chaque level
    let lvl = 1, need = 100, total = 0;
    while (xp >= total + need) { total += need; lvl++; need += 50; }
    return { level: lvl, current: xp - total, need };
  }

  function addXP(amount) {
    state.xp += amount;
    const { level } = levelFromXP(state.xp);
    state.level = level;
    save();
  }

  function bumpStreak() {
    const today = new Date().toDateString();
    if (state.lastSession === today) return;
    const yesterday = new Date(Date.now() - 864e5).toDateString();
    state.streak = state.lastSession === yesterday ? state.streak + 1 : 1;
    state.lastSession = today;
    save();
  }

  function recordQCM(chapter, qIdx, correct) {
    if (!state.qcmStats[chapter]) state.qcmStats[chapter] = { seen: [], correct: [] };
    const s = state.qcmStats[chapter];
    if (!s.seen.includes(qIdx)) s.seen.push(qIdx);
    if (correct && !s.correct.includes(qIdx)) s.correct.push(qIdx);
    save();
  }

  function recordFlash(chapter, idx, success) {
    const key = chapter + '_' + idx;
    const now = Date.now();
    const prev = state.flashStats[key] || { seen: 0, success: 0, nextReview: 0, ease: 1 };
    prev.seen++;
    if (success) {
      prev.success++;
      prev.ease = Math.min(prev.ease * 1.6, 30);
      prev.nextReview = now + prev.ease * 864e5;
    } else {
      prev.ease = 1;
      prev.nextReview = now + 36e5; // 1h
    }
    state.flashStats[key] = prev;
    save();
  }

  function getDueFlashcards(chapter, allCards) {
    const now = Date.now();
    return allCards.map((c, i) => {
      const key = chapter + '_' + i;
      const stat = state.flashStats[key];
      const due = !stat || stat.nextReview <= now;
      return { ...c, idx: i, due, stat };
    });
  }

  function chapterMasteryPct(chapterId) {
    const qcm = (window.QCM[chapterId] || []);
    const flash = (window.FLASHCARDS[chapterId] || []);
    const qStats = state.qcmStats[chapterId] || { seen: [], correct: [] };
    const fStats = Object.entries(state.flashStats)
      .filter(([k]) => k.startsWith(chapterId + '_'))
      .map(([, v]) => v);
    const qPct = qcm.length ? (qStats.correct.length / qcm.length) : 0;
    const fPct = flash.length ? (fStats.filter(s => s.success > 0).length / flash.length) : 0;
    if (!qcm.length && !flash.length) return 0;
    const w = (qcm.length + flash.length);
    return Math.round(((qPct * qcm.length) + (fPct * flash.length)) / w * 100);
  }

  function reset() {
    state = { ...defaults };
    save();
  }

  return { get, set, subscribe, addXP, bumpStreak, recordQCM, recordFlash, getDueFlashcards, chapterMasteryPct, levelFromXP, reset };
})();

// Sound effects (Web Audio synth — no files)
window.Sfx = (() => {
  let ctx = null;
  function ensure() { if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)(); return ctx; }
  function tone(freq, dur, type='sine', gain=.08) {
    if (!window.AppState.get().sound) return;
    try {
      const c = ensure();
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.value = gain;
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
      o.connect(g); g.connect(c.destination);
      o.start(); o.stop(c.currentTime + dur);
    } catch {}
  }
  return {
    correct() { tone(660, .12, 'triangle', .1); setTimeout(() => tone(880, .15, 'triangle', .1), 90); },
    wrong()   { tone(220, .25, 'sawtooth', .08); },
    flip()    { tone(540, .05, 'sine', .04); },
    levelUp() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, .18, 'triangle', .1), i*100)); },
    combo()   { tone(880, .08, 'square', .06); setTimeout(() => tone(1320, .12, 'square', .06), 70); },
  };
})();

// Floating UI helpers
window.UIfx = {
  toast(msg, type='info') {
    const el = document.createElement('div');
    el.className = 'toast ' + type;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  },
  xpGain(amount, x, y) {
    const el = document.createElement('div');
    el.className = 'xp-gain';
    el.textContent = '+' + amount + ' XP';
    el.style.left = (x || window.innerWidth/2) + 'px';
    el.style.top = (y || window.innerHeight/2) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  },
  combo(n) {
    const el = document.createElement('div');
    el.className = 'combo-banner';
    el.textContent = 'COMBO x' + n + ' 🔥';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1400);
  },
};
