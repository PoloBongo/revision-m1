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
    {
      id: "ce3",
      theme: "Politique / Société",
      title: "Should sixteen-year-olds vote?",
      text: `In a handful of countries, the question is no longer hypothetical. Austria has allowed citizens to vote from the age of sixteen since 2007, and Scotland did the same for its independence referendum. Now campaigners across Europe are pushing to lower the voting age more widely, arguing that young people deserve a say in decisions that will shape their entire lives.

The case in favour rests on fairness and habit. Teenagers can leave school, work and pay taxes, so why, supporters ask, should they be denied a vote? Researchers also point to an encouraging pattern: people who cast their first ballot at sixteen, while still living at home and studying civics, are more likely to keep voting throughout adulthood. Lowering the age, the argument goes, could reverse the long decline in turnout that worries democracies everywhere.

Opponents are unconvinced. Many doubt that sixteen-year-olds possess the maturity or the political knowledge to weigh complex issues. Critics also suspect that the reform is less about principle than about party advantage, since younger voters tend to lean in particular directions. Hand teenagers the vote, they warn, and you simply hand certain parties an electoral gift.

Defenders dismiss this objection. Maturity, they note, is not magically acquired at eighteen, and plenty of older voters know little about policy. If knowledge were the test, they add, it would have to apply to everyone, not just the young. What matters is whether citizens are affected by political choices — and few are affected more than those who will live longest with the consequences.

The debate ultimately reflects a deeper disagreement about what a vote is for. Is it a reward for proven competence, or a basic right of anyone with a stake in society? As climate policy and national debt push the costs of today's decisions far into the future, the voices calling for younger voters are unlikely to fall silent.`,
      questions: [
        { q: "Since when has Austria allowed voting from sixteen?", choices: ["1997", "2007", "2017", "It still does not"], answer: 1, explain: "« since 2007 »." },
        { q: "On what occasion did Scotland let sixteen-year-olds vote?", choices: ["A general election", "Its independence referendum", "A local council vote", "A European election"], answer: 1, explain: "« Scotland did the same for its independence referendum »." },
        { q: "What practical fact do supporters use to argue for fairness?", choices: ["Teenagers can drive", "Teenagers can work and pay taxes", "Teenagers own property", "Teenagers serve in government"], answer: 1, explain: "« can leave school, work and pay taxes »." },
        { q: "What pattern do researchers highlight about first-time young voters?", choices: ["They never vote again", "They are more likely to keep voting as adults", "They vote randomly", "They lower turnout"], answer: 1, explain: "Voter tôt, en étudiant l'éducation civique, crée une habitude durable." },
        { q: "What problem could lowering the age help reverse?", choices: ["Rising taxes", "The decline in voter turnout", "School dropout", "Inflation"], answer: 1, explain: "« reverse the long decline in turnout »." },
        { q: "What is opponents' main doubt about sixteen-year-olds?", choices: ["Their maturity and political knowledge", "Their honesty", "Their availability", "Their nationality"], answer: 0, explain: "« doubt that sixteen-year-olds possess the maturity or the political knowledge »." },
        { q: "What hidden motive do critics suspect behind the reform?", choices: ["Saving money", "Gaining party advantage", "Reducing crime", "Improving schools"], answer: 1, explain: "Ils soupçonnent un calcul électoral plutôt qu'un principe." },
        { q: "How do defenders answer the maturity objection?", choices: ["They admit teenagers are immature", "They note maturity is not gained suddenly at eighteen and many older voters lack knowledge too", "They propose an exam", "They drop the idea"], answer: 1, explain: "La maturité n'apparaît pas magiquement à 18 ans ; le test de connaissance devrait alors valoir pour tous." },
        { q: "According to the last paragraph, the debate is really about:", choices: ["The cost of elections", "What a vote is fundamentally for", "How to count votes", "Which party wins"], answer: 1, explain: "Récompense d'une compétence vs droit de toute personne concernée." },
        { q: "Why does the author think the issue will persist?", choices: ["Voting is too expensive", "Long-term issues like climate and debt affect the young most", "Teenagers refuse to vote", "Parties have agreed"], answer: 1, explain: "Les conséquences futures (climat, dette) pèsent surtout sur les jeunes." },
      ],
    },
    {
      id: "ce4",
      theme: "Environnement / Économie",
      title: "The slow return of night trains",
      text: `Not long ago, the night train seemed destined for the museum. Budget airlines undercut rail fares, sleeper services were scrapped across the continent, and ageing carriages were left to rust in sidings. Yet over the past few years, an unexpected revival has been gathering speed. New routes are opening, old ones are being restored, and tickets for popular departures sell out weeks in advance.

The reasons are partly environmental. A journey by night train can produce a fraction of the carbon emissions of the equivalent flight, and a growing number of travellers say they feel uneasy about the climate impact of frequent flying. For them, boarding a sleeper in one city and waking up in another, without the queues and security checks of an airport, is both greener and strangely civilised.

Economics, however, tells a more complicated story. Running night trains is expensive: they occupy tracks for long periods, require costly sleeping cars, and earn less per passenger than a packed daytime service. Several operators have warned that without public subsidies, many of the new routes would quickly become unprofitable. Critics argue that taxpayers should not prop up a romantic idea that only well-off travellers can afford.

Supporters reply that the comparison is unfair. Aviation, they point out, has long benefited from tax-free fuel and other advantages that distort the market against rail. Level the playing field, they insist, and night trains would compete perfectly well. Several governments appear to agree, and have begun funding cross-border services as part of their climate commitments.

Whether the revival lasts will depend on more than nostalgia. Passengers must find the trains comfortable, reliable and reasonably priced; governments must keep their promises; and operators must cooperate across borders that railways, unlike planes, cannot simply fly over. For now, though, the lights are back on in the sleeping cars of Europe.`,
      questions: [
        { q: "What did the night train seem 'destined for' at the start?", choices: ["A golden age", "The museum, i.e. disappearance", "Rapid expansion", "Government ownership"], answer: 1, explain: "« seemed destined for the museum » = voué à disparaître." },
        { q: "What had budget airlines done to rail?", choices: ["Bought the railways", "Undercut rail fares", "Funded new trains", "Raised rail prices"], answer: 1, explain: "« Budget airlines undercut rail fares »." },
        { q: "What evidence shows the revival is real?", choices: ["Empty carriages", "Popular departures sell out weeks ahead", "Falling ticket prices", "Closed stations"], answer: 1, explain: "« tickets for popular departures sell out weeks in advance »." },
        { q: "What environmental advantage do night trains have?", choices: ["They use no energy", "Far lower carbon emissions than the equivalent flight", "They plant trees", "They remove airports"], answer: 1, explain: "« a fraction of the carbon emissions of the equivalent flight »." },
        { q: "Besides emissions, what comfort do travellers appreciate?", choices: ["In-flight meals", "Avoiding airport queues and security checks", "Free hotels", "Faster speed than planes"], answer: 1, explain: "« without the queues and security checks of an airport »." },
        { q: "Why is running night trains economically difficult?", choices: ["No passengers want them", "They are costly and earn less per passenger", "They are illegal", "They are too fast"], answer: 1, explain: "Occupation longue des voies, voitures-lits coûteuses, faible rendement par passager." },
        { q: "What do critics say about subsidising them?", choices: ["Taxpayers shouldn't fund a service mainly for well-off travellers", "They should be free", "They should be banned", "They should replace planes entirely"], answer: 0, explain: "« taxpayers should not prop up a romantic idea that only well-off travellers can afford »." },
        { q: "How do supporters defend subsidies?", choices: ["Trains are always cheaper", "Aviation already enjoys advantages like tax-free fuel", "Planes are dangerous", "Trains need no money"], answer: 1, explain: "L'aviation bénéficie depuis longtemps de carburant détaxé qui fausse le marché." },
        { q: "What unique obstacle do trains face that planes do not?", choices: ["Weather", "Borders they cannot simply fly over", "Fuel", "Passengers"], answer: 1, explain: "« borders that railways, unlike planes, cannot simply fly over »." },
        { q: "What is the author's tone in the final sentence?", choices: ["Despairing", "Cautiously hopeful", "Angry", "Indifferent"], answer: 1, explain: "« the lights are back on » : espoir prudent malgré les conditions posées." },
      ],
    },
    {
      id: "ce5",
      theme: "Santé / Société",
      title: "The hidden cost of ultra-processed food",
      text: `Walk down the aisles of any supermarket and most of what you see has been transformed far beyond the farm. Brightly packaged snacks, fizzy drinks, ready meals and breakfast cereals share a common feature: they are ultra-processed, made from industrial ingredients and additives rarely found in a home kitchen. In many wealthy countries, such products now account for more than half of the calories people consume.

For decades, nutrition advice focused on individual nutrients — too much sugar, too much salt, too much fat. More recently, researchers have begun to ask whether the degree of processing itself matters. A series of studies has linked diets high in ultra-processed food to obesity, heart disease and other chronic conditions, even when the amount of sugar or fat is taken into account. The food, it seems, may be doing harm in ways the old labels never captured.

Why these products are so easy to overeat is still debated. Some scientists blame their soft texture and high calorie density, which allow us to consume them quickly before our bodies register fullness. Others point to clever formulations, engineered to hit a 'bliss point' that keeps us reaching for more. Whatever the mechanism, volunteers in controlled trials tend to eat several hundred extra calories a day when their meals are ultra-processed.

The food industry pushes back firmly. Processing, it argues, makes food affordable, safe and convenient, and helps feed a crowded planet. Banning or taxing whole categories of product, manufacturers warn, would hit poorer households hardest, since cheap processed food is often all that fits a tight budget and a busy life.

Public-health experts are caught in the middle. Few want to dictate what people eat, yet they cannot ignore mounting evidence of harm. Their challenge is to make healthier options cheaper and more available, rather than simply blaming individuals for choices that the modern food environment quietly encourages.`,
      questions: [
        { q: "What feature do the listed supermarket products share?", choices: ["They are organic", "They are ultra-processed", "They are home-made", "They are imported"], answer: 1, explain: "« they are ultra-processed »." },
        { q: "In many wealthy countries, ultra-processed food provides:", choices: ["A tiny share of calories", "More than half of the calories consumed", "Only children's calories", "No measurable calories"], answer: 1, explain: "« more than half of the calories people consume »." },
        { q: "How did nutrition advice traditionally frame the problem?", choices: ["By degree of processing", "By individual nutrients like sugar, salt and fat", "By price", "By packaging colour"], answer: 1, explain: "« focused on individual nutrients »." },
        { q: "What new question are researchers now asking?", choices: ["Whether processing itself matters", "Whether food is too expensive", "Whether farms are clean", "Whether labels are colourful"], answer: 0, explain: "« whether the degree of processing itself matters »." },
        { q: "What is notable about the studies linking these foods to disease?", choices: ["They ignore sugar and fat", "The link holds even after accounting for sugar and fat", "They found no link", "They only studied children"], answer: 1, explain: "« even when the amount of sugar or fat is taken into account »." },
        { q: "What is one proposed reason these foods are easy to overeat?", choices: ["They are very hard to chew", "Soft texture and high calorie density let us eat fast before feeling full", "They are tasteless", "They are expensive"], answer: 1, explain: "Texture molle + densité calorique → on mange vite avant la satiété." },
        { q: "What does a 'bliss point' refer to?", choices: ["A health certificate", "A formulation engineered to keep us wanting more", "A type of vitamin", "A government rule"], answer: 1, explain: "Formulation conçue pour maximiser l'envie d'en reprendre." },
        { q: "In controlled trials, what happens with ultra-processed meals?", choices: ["People eat far less", "People eat several hundred extra calories a day", "People skip meals", "Nothing changes"], answer: 1, explain: "« eat several hundred extra calories a day »." },
        { q: "What is the food industry's main defence?", choices: ["Processing makes food affordable, safe and convenient", "Processing is illegal", "Processing has no effect", "Processing only helps the rich"], answer: 0, explain: "L'industrie met en avant accessibilité, sécurité et praticité." },
        { q: "What do public-health experts ultimately favour?", choices: ["Blaming individuals", "Making healthier options cheaper and more available", "Banning all food", "Doing nothing"], answer: 1, explain: "Agir sur l'environnement alimentaire plutôt que culpabiliser les individus." },
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
    {
      id: "voc2",
      theme: "Environnement / Urbanisme",
      title: "Cities turn against the car",
      text: `For most of the twentieth century, the car was {0} as the symbol of freedom and progress, and cities were redesigned around it. Today, that consensus is beginning to {1}. Faced with choking pollution and endless traffic jams, a growing number of mayors are taking {2} steps to reclaim their streets from the automobile.

The measures vary, but the {3} is similar everywhere. Some cities have introduced charges to {4} drivers from entering the centre; others have widened pavements, built protected cycle lanes and {5} entire neighbourhoods into pedestrian zones. Where cars once {6} every available space, benches, trees and cafés are slowly reappearing.

Supporters argue that the benefits are {7}. Cleaner air reduces respiratory illness, quieter streets {8} community life, and local shops often see more customers once people stroll rather than drive past. Far from harming business, they claim, removing traffic can make a district more {9} and prosperous.

Not everyone is {10}, however. Shopkeepers sometimes fear that restrictions will {11} away customers, and commuters from the suburbs complain that public transport is not yet {12} enough to replace their cars. Critics also warn that poorly planned schemes can simply {13} congestion to neighbouring streets rather than solving it.

City planners insist that the transition must be {14}. Charging drivers without offering decent buses and trains, they admit, would be {15} and deeply unpopular. The aim is not to {16} people, but to give them genuine alternatives. When walking, cycling and public transport become faster and cheaper than driving, behaviour tends to {17} on its own.

Whether these experiments {18} will depend on patience and political courage. Reclaiming a city from the car is a slow process, and the early disruption can be real. Yet for a generation worried about climate change and air quality, the direction of travel seems increasingly {19}.`,
      blanks: [
        { options: ["celebrated", "ignored", "punished", "forgotten"], answer: 0 },
        { options: ["crumble", "harden", "expand", "freeze"], answer: 0 },
        { options: ["bold", "timid", "secret", "useless"], answer: 0 },
        { options: ["aim", "fault", "delay", "refusal"], answer: 0 },
        { options: ["discourage", "welcome", "force", "invite"], answer: 0 },
        { options: ["turned", "left", "kept", "sold"], answer: 0 },
        { options: ["occupied", "avoided", "cleaned", "rented"], answer: 0 },
        { options: ["considerable", "trivial", "imaginary", "temporary"], answer: 0 },
        { options: ["encourage", "destroy", "forbid", "delay"], answer: 0 },
        { options: ["attractive", "dangerous", "deserted", "expensive"], answer: 0 },
        { options: ["convinced", "amused", "elected", "paid"], answer: 0 },
        { options: ["drive", "bring", "call", "throw"], answer: 0 },
        { options: ["reliable", "crowded", "costly", "rare"], answer: 0 },
        { options: ["shift", "reduce", "stop", "hide"], answer: 0 },
        { options: ["gradual", "instant", "secret", "violent"], answer: 0 },
        { options: ["unfair", "generous", "popular", "cheap"], answer: 0 },
        { options: ["punish", "reward", "thank", "help"], answer: 0 },
        { options: ["change", "freeze", "worsen", "vanish"], answer: 0 },
        { options: ["succeed", "fail", "collapse", "vanish"], answer: 0 },
        { options: ["clear", "uncertain", "hidden", "wrong"], answer: 0 },
      ],
    },
    {
      id: "voc3",
      theme: "Culture / Médias",
      title: "The streaming boom and its limits",
      text: `A decade ago, few would have {0} how completely streaming would reshape the way we watch television and listen to music. Subscription services {1} the market with vast libraries available at the touch of a button, and traditional broadcasters were left {2} to keep up. For viewers, the change felt like pure liberation.

The early years were marked by {3} growth. Eager to attract subscribers, platforms poured enormous sums into original content, {4} prices low and barely worrying about profit. Audiences, {5} for choice, happily signed up to several services at once and abandoned old viewing habits almost overnight.

That golden age, however, may be {6} to an end. As competition intensified, the cost of producing hit shows {7}, and investors began to demand returns. One by one, providers have raised their {8}, cracked down on password sharing and introduced cheaper plans funded by {9}. The very features that once made streaming so appealing are quietly being {10}.

For consumers, the result is a familiar sense of {11}. Subscribing to every platform now costs as much as the cable packages people once gladly {12}, and content is scattered across rival services. Viewers increasingly {13} between subscriptions, joining one to watch a single series before promptly {14}.

Critics also worry about the cultural {15} of this model. Algorithms designed to {16} our attention may narrow what we are shown, while beloved titles can {17} overnight when licensing deals expire. Ownership, in the streaming era, has become strangely {18}.

None of this means the technology will disappear. Streaming has permanently {19} our expectations of convenience and choice. But the dream of unlimited entertainment for a few euros a month is fading, replaced by a messier, more expensive reality that looks oddly like the system it once promised to replace.`,
      blanks: [
        { options: ["predicted", "denied", "refused", "ignored"], answer: 0 },
        { options: ["flooded", "avoided", "left", "closed"], answer: 0 },
        { options: ["scrambling", "relaxing", "refusing", "sleeping"], answer: 0 },
        { options: ["explosive", "modest", "negative", "frozen"], answer: 0 },
        { options: ["keeping", "raising", "hiding", "losing"], answer: 0 },
        { options: ["spoilt", "starved", "punished", "blamed"], answer: 0 },
        { options: ["coming", "going", "running", "looking"], answer: 0 },
        { options: ["soared", "collapsed", "vanished", "froze"], answer: 0 },
        { options: ["prices", "doors", "standards", "voices"], answer: 0 },
        { options: ["advertising", "donations", "taxes", "fines"], answer: 0 },
        { options: ["rolled back", "handed out", "given away", "set up"], answer: 0 },
        { options: ["frustration", "delight", "relief", "pride"], answer: 0 },
        { options: ["dropped", "kept", "praised", "missed"], answer: 0 },
        { options: ["hop", "stay", "sink", "fall"], answer: 0 },
        { options: ["cancelling", "renewing", "extending", "paying"], answer: 0 },
        { options: ["consequences", "rewards", "victories", "origins"], answer: 0 },
        { options: ["capture", "free", "calm", "waste"], answer: 0 },
        { options: ["disappear", "improve", "multiply", "remain"], answer: 0 },
        { options: ["fragile", "permanent", "solid", "simple"], answer: 0 },
        { options: ["reshaped", "lowered", "ignored", "frozen"], answer: 0 },
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
