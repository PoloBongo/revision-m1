// Épreuve de Langue vivante (anglais) — Examen blanc niveau B2 (CECRL)
// Format officiel FEDE :
//   1. Compréhension écrite : QCM 20 questions (2 textes ~350 mots, 10 questions/texte) — 3 pts/bonne réponse → 60 pts
//   2. Vocabulaire : texte ~500 mots à trous (30 blancs, 4 propositions) — 3 pts/bonne réponse → 90 pts
//   3. Rédaction : essai ~400 mots (B2) → 70 pts
//   Total : 220 pts · Durée : 1 h 45 (105 min)
//
// NB : contenus d'entraînement (anglais). Pour ajouter des textes, suivre la même structure.
window.LANGUE = {
  duree: 105, // minutes
  bareme: { qcm: 60, vocab: 90, essai: 70, total: 220 },
  pointsParBonneReponse: 3,

  // ── 1. COMPRÉHENSION ÉCRITE — 10 sujets ──────────────────────────────
  // Contenu déporté dans data/langue-comprehension.js (chargé AVANT ce fichier).
  comprehension: (window.LANGUE_CE || []),

  // ── 2. VOCABULAIRE (texte à trous) — 10 sujets × 30 blancs ─────────────
  // Contenu déporté dans data/langue-vocab.js (chargé AVANT ce fichier).
  vocabulaire: (window.LANGUE_VOCAB || []),

  // ── 3. RÉDACTION (essai ~400 mots, B2) ─────────────────────────────────
  redaction: [
    { id: "es1", theme: "Économie / Travail", prompt: "Some people believe the four-day working week will become the standard everywhere in the next twenty years. To what extent do you agree? Justify your position with relevant arguments and examples. (≈ 400 words)" },
    { id: "es2", theme: "Culture / Société", prompt: "\"Digital access to museums will eventually make physical visits unnecessary.\" Discuss this statement, presenting arguments for and against before giving your own opinion. (≈ 400 words)" },
    { id: "es3", theme: "Technologie / Social", prompt: "Has remote work done more good than harm to employees and society? Develop a structured, argued answer based on the documents and your own knowledge. (≈ 400 words)" },
  ],

  // Grille d'auto-évaluation inspirée des descripteurs B2 du CECRL
  b2checklist: [
    "Introduction qui présente clairement le sujet et annonce ta position / ton plan",
    "Idées organisées en paragraphes distincts avec un argument par paragraphe",
    "Connecteurs logiques variés (however, therefore, moreover, on the other hand, as a result…)",
    "Exemples concrets ou références aux documents pour étayer chaque argument",
    "Vocabulaire précis et varié, sans répétitions excessives",
    "Temps et structures grammaticales corrects et diversifiés",
    "Conclusion qui résume et donne une opinion personnelle nuancée",
    "Longueur respectée (≈ 400 mots) et registre formel cohérent",
  ],
};
