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

  // ── 1. COMPRÉHENSION ÉCRITE ────────────────────────────────────────────
  comprehension: [
    {
      id: "ce1",
      theme: "Économie / Social",
      title: "The four-day week experiment",
      text: `When a growing number of companies in Europe began trialling a four-day working week, few economists expected the results to be so striking. The idea is simple: employees work 80% of their usual hours, keep 100% of their salary, and commit to maintaining 100% of their productivity. What sounds like wishful thinking has, in several large-scale trials, translated into measurable gains.

In the United Kingdom, a pilot involving more than sixty firms and nearly three thousand workers reported that revenue remained stable, while staff turnover dropped sharply. Crucially, the vast majority of participating companies chose to keep the shorter week once the trial ended. Managers pointed to fewer sick days, higher morale and a renewed sense of focus during working hours.

Sceptics, however, warn against drawing hasty conclusions. They argue that the firms taking part were mostly small, service-based businesses that volunteered precisely because they expected to benefit. Applying the same model to manufacturing, healthcare or retail — sectors where output is tied to physical presence — would be far more complicated. A hospital cannot simply close its doors on Fridays.

Supporters counter that the point is not to impose a single rigid formula, but to rethink how work is organised. By cutting unnecessary meetings, limiting distractions and trusting employees to manage their own time, many companies discovered they were wasting hours they had never questioned. The reduced week, they say, forced a long-overdue conversation about efficiency.

Governments are watching closely. Spain and Portugal have funded public trials, and several politicians now see the policy as a way to improve well-being without raising wages. Whether the four-day week becomes the norm or remains a niche experiment will depend on whether the early enthusiasm survives contact with less flexible industries — and with the next economic downturn.`,
      questions: [
        { q: "What is the core principle of the four-day week described in the text?", choices: ["Work 80% of hours for 80% of pay", "Work 80% of hours, keep full pay, maintain productivity", "Work four longer days for extra pay", "Reduce both hours and salary by 20%"], answer: 1, explain: "« work 80% of their usual hours, keep 100% of their salary, and commit to maintaining 100% of their productivity »." },
        { q: "In the UK pilot, what happened to revenue?", choices: ["It rose sharply", "It collapsed", "It remained stable", "It is not mentioned"], answer: 2, explain: "« revenue remained stable »." },
        { q: "What did staff turnover do during the UK trial?", choices: ["Dropped sharply", "Increased", "Stayed the same", "Doubled"], answer: 0, explain: "« staff turnover dropped sharply »." },
        { q: "After the trial, most participating companies decided to:", choices: ["Return to five days", "Keep the shorter week", "Close down", "Cut salaries"], answer: 1, explain: "« chose to keep the shorter week once the trial ended »." },
        { q: "Why are sceptics cautious about the results?", choices: ["The trials lost money", "The firms were mostly small, self-selected service businesses", "Workers complained", "The government banned it"], answer: 1, explain: "Sceptics note the firms were small, service-based and volunteered expecting to benefit." },
        { q: "Which sector is given as hard to adapt to the model?", choices: ["Software", "Marketing", "Healthcare", "Consulting"], answer: 2, explain: "« A hospital cannot simply close its doors on Fridays »." },
        { q: "According to supporters, the reduced week mainly forced companies to reconsider:", choices: ["Their salaries", "Their efficiency and organisation", "Their location", "Their products"], answer: 1, explain: "« forced a long-overdue conversation about efficiency »." },
        { q: "Which countries funded public trials?", choices: ["France and Germany", "Spain and Portugal", "Italy and Greece", "Sweden and Norway"], answer: 1, explain: "« Spain and Portugal have funded public trials »." },
        { q: "The phrase « wishful thinking » (paragraph 1) suggests the idea first seemed:", choices: ["Proven and reliable", "Too good to be realistic", "Dangerous", "Expensive"], answer: 1, explain: "Wishful thinking = espoir naïf, trop beau pour être vrai." },
        { q: "What is the author's overall stance in the final paragraph?", choices: ["Certain the model will become universal", "Openly hostile to the idea", "Cautiously balanced about its future", "Indifferent"], answer: 2, explain: "L'auteur conclut que l'avenir dépendra des secteurs rigides et de la conjoncture — ton nuancé." },
      ],
    },
    {
      id: "ce2",
      theme: "Culturel / Société",
      title: "When museums go digital",
      text: `For centuries, seeing a famous painting meant travelling to the city that housed it, queuing for hours and finally glimpsing the canvas over a crowd of raised smartphones. Today, a teenager in a remote village can examine the brushstrokes of a masterpiece in extraordinary detail without leaving home. The digitisation of museum collections, accelerated dramatically during the pandemic, has changed the relationship between art and the public.

Major institutions have placed thousands of high-resolution images online, often free of charge. Virtual tours allow visitors to wander through empty galleries at midnight; interactive features explain the historical context of each work. For schools with limited budgets, these tools have opened doors that were once firmly shut. A class in a small town can now "visit" three continents in a single afternoon.

Yet not everyone celebrates this shift. Some curators fear that a screen, however sharp, can never reproduce the scale, the texture or the quiet intensity of standing before an original. A photograph of a vast mural flattens it into something it is not. There is also a worry that easy digital access might discourage people from making the effort to see the real thing, gradually turning art into mere content to be scrolled past.

Others see a false dilemma. Far from replacing physical visits, they argue, online collections often inspire them. Someone who discovers an artist on a website may well buy a ticket months later. Digitisation, in this view, widens the audience rather than shrinking it, acting as an invitation rather than a substitute.

What few dispute is that access raises difficult questions about ownership. Who controls these images? Should publicly funded museums charge for reproductions, or treat their collections as a shared human heritage freely available to all? As galleries continue to upload their treasures, the debate over who truly owns culture is only beginning.`,
      questions: [
        { q: "What does the opening paragraph contrast?", choices: ["Painting versus photography", "The old effort of travel with today's instant home access", "Cheap and expensive tickets", "Old and modern painters"], answer: 1, explain: "Il oppose le voyage/la queue d'avant à l'accès immédiat depuis chez soi." },
        { q: "What accelerated the digitisation of collections?", choices: ["A new law", "The pandemic", "A price war", "Falling ticket sales"], answer: 1, explain: "« accelerated dramatically during the pandemic »." },
        { q: "How are many high-resolution images made available?", choices: ["At a high price", "Only to scholars", "Often free of charge", "By subscription only"], answer: 2, explain: "« thousands of high-resolution images online, often free of charge »." },
        { q: "Why are these tools valuable for schools?", choices: ["They replace teachers", "They open access despite limited budgets", "They are mandatory", "They sell artworks"], answer: 1, explain: "« For schools with limited budgets, these tools have opened doors »." },
        { q: "What concern do some curators raise?", choices: ["Screens can't reproduce scale, texture and intensity of originals", "Images are too small", "Websites are too slow", "Visitors are too noisy"], answer: 0, explain: "Ils craignent qu'un écran ne rende ni l'échelle, ni la texture, ni l'intensité." },
        { q: "What risk is mentioned about easy digital access?", choices: ["It costs too much", "It may discourage seeing the real artwork", "It damages the paintings", "It confuses curators"], answer: 1, explain: "« might discourage people from making the effort to see the real thing »." },
        { q: "How do optimists view online collections?", choices: ["As a replacement for visits", "As an invitation that can inspire real visits", "As a waste of money", "As a legal threat"], answer: 1, explain: "« acting as an invitation rather than a substitute »." },
        { q: "The phrase « a false dilemma » means the choice between digital and physical is:", choices: ["Impossible to make", "Not really an either/or opposition", "Decided by law", "Always financial"], answer: 1, explain: "Faux dilemme = opposition artificielle ; les deux peuvent coexister." },
        { q: "What unresolved question does the last paragraph raise?", choices: ["Which artist is best", "Who owns and controls the images of public collections", "How to paint murals", "When museums close"], answer: 1, explain: "« the debate over who truly owns culture is only beginning »." },
        { q: "What is the overall tone of the article?", choices: ["One-sidedly enthusiastic", "Balanced, presenting benefits and concerns", "Strongly nostalgic", "Purely technical"], answer: 1, explain: "Le texte présente avantages ET réserves de manière équilibrée." },
      ],
    },
  ],

  // ── 2. VOCABULAIRE (texte à trous) ─────────────────────────────────────
  // Le texte contient des jetons {0}, {1}… remplacés par des menus déroulants.
  vocabulaire: [
    {
      id: "voc1",
      theme: "Social / Technologie",
      title: "The remote-work revolution",
      text: `The shift to remote work has {0} transformed the way millions of people earn a living. What began as an emergency {1} during a global health crisis has gradually become a permanent {2} for many organisations. Employees who once spent hours {3} to an office now log in from their kitchen tables, and employers have been forced to {4} long-held assumptions about productivity.

Supporters of the model {5} that flexibility boosts both well-being and output. Freed from the daily {6}, workers report lower stress and a better work-life {7}. Companies, in turn, can {8} money on expensive office space and recruit talent regardless of {9}. For some, this represents a genuine {10} in the history of employment.

Critics, however, {11} out several drawbacks. Remote teams can struggle to build the informal bonds that {12} in shared offices. Junior staff, in particular, may find it hard to {13} skills without a mentor nearby. There is also a growing concern that the line between professional and private life has become dangerously {14}, leaving employees unable to switch off.

To address these challenges, many firms have adopted a hybrid {15}, combining office days with remote ones. This compromise aims to {16} the benefits of both worlds, though it requires careful {17}. Ultimately, the success of remote work will depend not on technology alone, but on the {18} of managers to trust their teams and {19} clear expectations.`,
      blanks: [
        { options: ["profoundly", "barely", "reluctantly", "rarely"], answer: 0 },
        { options: ["measure", "obstacle", "reward", "delay"], answer: 0 },
        { options: ["arrangement", "punishment", "shortage", "refusal"], answer: 0 },
        { options: ["commuting", "applying", "objecting", "retiring"], answer: 0 },
        { options: ["reconsider", "ignore", "celebrate", "forget"], answer: 0 },
        { options: ["argue", "deny", "doubt", "regret"], answer: 0 },
        { options: ["commute", "salary", "holiday", "contract"], answer: 0 },
        { options: ["balance", "burden", "failure", "penalty"], answer: 0 },
        { options: ["save", "waste", "borrow", "owe"], answer: 0 },
        { options: ["location", "loyalty", "weather", "luck"], answer: 0 },
        { options: ["turning point", "dead end", "side effect", "step back"], answer: 0 },
        { options: ["point", "give", "take", "look"], answer: 0 },
        { options: ["emerge", "vanish", "decline", "collapse"], answer: 0 },
        { options: ["acquire", "abandon", "waste", "forget"], answer: 0 },
        { options: ["blurred", "sharpened", "fixed", "drawn"], answer: 0 },
        { options: ["approach", "failure", "refusal", "accident"], answer: 0 },
        { options: ["combine", "destroy", "avoid", "reject"], answer: 0 },
        { options: ["coordination", "confusion", "isolation", "neglect"], answer: 0 },
        { options: ["willingness", "refusal", "inability", "reluctance"], answer: 0 },
        { options: ["set", "break", "lower", "hide"], answer: 0 },
      ],
    },
  ],

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
