// Épreuve 1 — COMPRÉHENSION ÉCRITE (QCM), format officiel FEDE
//   2 textes ~350 mots · 10 questions/texte (20 au total) · 3 pts/bonne réponse → 60 pts
//   10 sujets d'entraînement, niveau B2 (CECRL), thèmes presse généraliste.
// Chargé AVANT data/langue.js, qui fait : comprehension: window.LANGUE_CE.
window.LANGUE_CE = [
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
  {
    id: "ce6",
    theme: "Économique / Politique",
    title: "The basic income experiment",
    text: `What if every citizen received a regular sum of money from the state, with no strings attached and regardless of whether they worked? The idea, known as universal basic income, or UBI, has moved from the fringes of economic debate into serious policy discussions around the world.

Supporters present UBI as an elegant answer to several modern problems at once. As automation threatens to wipe out millions of jobs, a guaranteed income could provide a safety net for those displaced by machines. It would also replace the tangle of existing benefits with a single, simple payment, cutting bureaucracy and the stigma that often comes with claiming welfare. Above all, advocates argue, it would give people the freedom to retrain, care for relatives or take entrepreneurial risks without the fear of destitution.

Several pilot schemes have tested these claims. In Finland, a two-year trial gave a group of unemployed people a modest monthly sum. The results were revealing: recipients were no less likely to find work than a control group, contradicting fears that free money breeds idleness, and they reported significantly lower stress and greater trust in institutions.

Critics, however, remain deeply sceptical. The most obvious objection is cost. Paying every citizen enough to live on would require either punishing levels of taxation or the gutting of other public services. Some economists also warn that handing everyone cash could simply push up prices, leaving the poor no better off. Others object on principle, arguing that an income detached from any contribution would erode the value a society places on work.

Defenders counter that the current system is hardly cheap or humane, and that the question is one of priorities rather than affordability. As the debate continues, a handful of governments are preparing fresh experiments. Whether UBI proves a utopian dream or a practical tool may depend less on economics than on what kind of society people decide they want.`,
    questions: [
      { q: "What is the defining feature of universal basic income?", choices: ["A benefit paid only to the unemployed", "A regular state payment to all citizens, regardless of work", "A loan repaid through future taxes", "A grant reserved for new businesses"], answer: 1, explain: "« a regular sum of money ... no strings attached and regardless of whether they worked »." },
      { q: "Why is UBI presented as relevant to automation?", choices: ["It would train robots", "It could be a safety net for workers displaced by machines", "It would tax machines directly", "It would ban automation"], answer: 1, explain: "« a guaranteed income could provide a safety net for those displaced by machines »." },
      { q: "How would UBI affect the welfare system, according to supporters?", choices: ["It would add new benefits on top", "It would replace many benefits with one simple payment, cutting bureaucracy", "It would privatise welfare", "It would raise the retirement age"], answer: 1, explain: "« replace the tangle of existing benefits with a single, simple payment »." },
      { q: "What freedom do advocates say UBI would give people?", choices: ["To stop working forever", "To retrain, care for relatives or take risks without fear of destitution", "To avoid all taxes", "To emigrate freely"], answer: 1, explain: "« freedom to retrain, care for relatives or take entrepreneurial risks »." },
      { q: "What did the Finnish trial reveal about employment?", choices: ["Recipients stopped working", "Recipients were no less likely to find work than a control group", "Everyone found a job immediately", "The trial was abandoned"], answer: 1, explain: "Cela contredit l'idée que l'argent gratuit encourage l'oisiveté." },
      { q: "Besides employment, what did Finnish recipients report?", choices: ["Lower stress and greater trust in institutions", "Worse health", "More debt", "Less free time"], answer: 0, explain: "« significantly lower stress and greater trust in institutions »." },
      { q: "What is described as the most obvious objection to UBI?", choices: ["Its unpopularity", "Its cost", "Its complexity", "Its illegality"], answer: 1, explain: "« The most obvious objection is cost. »" },
      { q: "What economic risk do some economists raise?", choices: ["It would cause unemployment", "Giving everyone cash could push up prices, leaving the poor no better off", "It would strengthen the currency too much", "It would reduce taxes to zero"], answer: 1, explain: "« handing everyone cash could simply push up prices »." },
      { q: "What is the objection 'on principle'?", choices: ["That it is too cheap", "That an income detached from contribution could erode the value placed on work", "That it favours the rich", "That it is temporary"], answer: 1, explain: "Objection morale : un revenu sans contrepartie dévaloriserait le travail." },
      { q: "According to the final paragraph, the outcome may depend mainly on:", choices: ["Economics alone", "What kind of society people decide they want", "The price of oil", "International treaties"], answer: 1, explain: "« may depend less on economics than on what kind of society people decide they want »." },
    ],
  },
  {
    id: "ce7",
    theme: "Environnement / Société",
    title: "The recycling illusion",
    text: `For decades, we have been told that recycling is the answer to our mounting waste. Dutifully, households across the world rinse their bottles and sort their rubbish, reassured that the plastic they discard will be reborn as something new. The truth, a growing body of evidence suggests, is far less comforting.

Only a small fraction of the plastic ever produced has actually been recycled. Much of the rest has been buried, burned or simply dumped, and a great deal of what is collected for recycling is in practice too dirty, too mixed or too cheap to process profitably. For years, wealthy nations quietly exported their waste to poorer countries, until several of them refused to serve as the world's dustbin any longer.

Part of the problem is economic. Producing new plastic from oil is often cheaper than collecting, cleaning and remoulding old material, so recycled plastic struggles to compete. Part of it is technical: unlike glass or aluminium, most plastics degrade each time they are reprocessed, meaning they can be recycled only once or twice before becoming useless.

Critics argue that the plastics industry has long promoted recycling precisely because it shifts responsibility onto consumers. As long as the public believes that throwing a bottle in the right bin solves the problem, there is little pressure to reduce production in the first place. Recycling, in this view, has become a comforting distraction.

This does not mean recycling is pointless; for some materials it genuinely works and saves energy. But experts increasingly insist that it must come last, not first. The priority, they argue, should be to produce less, reuse more and redesign products so that they last. Tackling the waste crisis, in other words, will require changing not just our bins, but the entire system that fills them.`,
    questions: [
      { q: "What is the central claim of the article?", choices: ["Recycling is the perfect solution", "Recycling is far less effective than we have been led to believe", "Recycling should be banned", "Only glass can be recycled"], answer: 1, explain: "« The truth ... is far less comforting. »" },
      { q: "What has happened to most plastic ever produced?", choices: ["It has been recycled", "It has been buried, burned or dumped", "It has been exported to space", "It has been reused at home"], answer: 1, explain: "« Much of the rest has been buried, burned or simply dumped »." },
      { q: "Why is much collected plastic not actually recycled?", choices: ["It is too clean", "It is too dirty, mixed or cheap to process profitably", "It is illegal to recycle", "There is too little of it"], answer: 1, explain: "« too dirty, too mixed or too cheap to process profitably »." },
      { q: "What did several poorer countries eventually do?", choices: ["Buy more waste", "Refuse to keep taking wealthy nations' waste", "Ban all plastic", "Build more landfills"], answer: 1, explain: "« refused to serve as the world's dustbin any longer »." },
      { q: "What is the economic obstacle to recycling plastic?", choices: ["New plastic from oil is often cheaper than recycling old material", "Recycling is always free", "Oil is too expensive", "Consumers refuse to pay"], answer: 0, explain: "Le plastique recyclé peine à concurrencer le plastique neuf, moins cher." },
      { q: "What technical limit do most plastics have?", choices: ["They cannot be cleaned", "They degrade each time they are reprocessed, so can be recycled only once or twice", "They never degrade at all", "They melt at low temperatures"], answer: 1, explain: "Contrairement au verre ou à l'aluminium, le plastique se dégrade au recyclage." },
      { q: "Why, according to critics, did the industry promote recycling?", choices: ["To reduce its own production", "Because it shifts responsibility onto consumers", "To save the oceans", "To raise prices"], answer: 1, explain: "Cela déplace la responsabilité vers le consommateur." },
      { q: "What is the effect of believing recycling solves the problem?", choices: ["More plastic is reused", "There is little pressure to reduce production in the first place", "Factories close", "Prices fall"], answer: 1, explain: "« little pressure to reduce production in the first place »." },
      { q: "What does the phrase 'a comforting distraction' suggest?", choices: ["A reassuring idea that diverts attention from the real problem", "A fun activity", "An expensive technology", "A legal requirement"], answer: 0, explain: "Le recyclage rassure mais détourne du vrai enjeu : produire moins." },
      { q: "What priority order do experts recommend?", choices: ["Recycle first, then reduce", "Produce less, reuse more, and recycle only last", "Burn everything", "Export the waste"], answer: 1, explain: "« produce less, reuse more ... it must come last, not first »." },
    ],
  },
  {
    id: "ce8",
    theme: "Social / Santé",
    title: "The loneliness epidemic",
    text: `Loneliness was once dismissed as a private sorrow, an unfortunate feeling with no wider importance. Today, doctors and politicians increasingly treat it as a public-health crisis. Studies have linked chronic loneliness to a startling range of conditions, from heart disease and stroke to depression and dementia. Some researchers claim its effect on mortality rivals that of smoking.

What makes the trend so puzzling is that it has emerged in an age of unprecedented connection. We carry devices that let us reach anyone, anywhere, in an instant, yet rates of loneliness appear to be rising, especially among the young. Critics blame social media, arguing that scrolling through curated images of other people's lives is a poor substitute for genuine company and can leave users feeling more isolated than before.

Others point to deeper changes in how we live. People move more often for work, marry later and are more likely to live alone than any previous generation. The institutions that once bound communities together — local shops, places of worship, clubs — have weakened, leaving many without the casual daily contact that humans seem to need.

Governments have begun to respond in striking ways. One country appointed a minister for loneliness; others fund schemes that connect isolated people with volunteers or prescribe community activities instead of pills. Such measures, supporters say, recognise that human connection is not a luxury but a basic need, as essential to health as diet or exercise.

Sceptics warn against medicalising an ordinary human emotion, and note that solitude, freely chosen, can be a source of creativity and peace. The challenge, then, is to distinguish healthy time alone from the corrosive, involuntary kind. As populations age and households shrink, learning to keep people connected may become one of the quiet challenges of the century.`,
    questions: [
      { q: "How is loneliness increasingly regarded today?", choices: ["As a trivial private feeling", "As a public-health crisis", "As a passing fashion", "As a sign of laziness"], answer: 1, explain: "« doctors and politicians increasingly treat it as a public-health crisis »." },
      { q: "Which conditions have studies linked to chronic loneliness?", choices: ["Only mild sadness", "Heart disease, stroke, depression and dementia", "Broken bones", "Short-sightedness"], answer: 1, explain: "« from heart disease and stroke to depression and dementia »." },
      { q: "How is loneliness's effect on mortality described?", choices: ["Negligible", "Rivalling that of smoking", "Smaller than a cold", "Impossible to measure"], answer: 1, explain: "« its effect on mortality rivals that of smoking »." },
      { q: "Why is the rise of loneliness called 'puzzling'?", choices: ["It happens in an age of unprecedented connection", "It only affects the rich", "It has no causes", "It is decreasing"], answer: 0, explain: "Paradoxe : la solitude augmente alors qu'on n'a jamais été aussi connectés." },
      { q: "Which group seems particularly affected?", choices: ["The very old only", "The young", "Politicians", "Tourists"], answer: 1, explain: "« rising, especially among the young »." },
      { q: "Why do critics blame social media?", choices: ["It is too expensive", "Scrolling curated images is a poor substitute for real company and can increase isolation", "It bans messaging", "It is too slow"], answer: 1, explain: "Les images idéalisées ne remplacent pas la vraie compagnie." },
      { q: "What deeper social changes are mentioned?", choices: ["People moving for work, marrying later, living alone; weakened community institutions", "More festivals", "Larger families", "Cheaper housing"], answer: 0, explain: "Mobilité, mariages tardifs, vie en solo, affaiblissement des lieux de lien." },
      { q: "What is one striking government response cited?", choices: ["Banning phones", "Appointing a minister for loneliness or prescribing community activities", "Closing hospitals", "Raising taxes on the lonely"], answer: 1, explain: "Un pays a nommé un·e ministre de la Solitude ; d'autres prescrivent des activités." },
      { q: "What do sceptics warn against?", choices: ["Spending money", "Medicalising an ordinary emotion, noting chosen solitude can be positive", "Building parks", "Using volunteers"], answer: 1, explain: "La solitude choisie peut nourrir créativité et sérénité." },
      { q: "What does the author present as the real challenge?", choices: ["Eliminating all solitude", "Distinguishing healthy chosen solitude from corrosive, involuntary loneliness", "Closing social media", "Increasing the population"], answer: 1, explain: "« distinguish healthy time alone from the corrosive, involuntary kind »." },
    ],
  },
  {
    id: "ce9",
    theme: "Culturel",
    title: "The unlikely return of vinyl",
    text: `In an age when almost any song ever recorded can be streamed instantly for a few euros a month, one of the oddest stories in music is the return of the vinyl record. Once written off as a relic, the bulky black disc has staged a remarkable comeback, with sales climbing year after year and pressing plants struggling to keep up with demand.

The revival is, on the face of it, baffling. Vinyl is expensive, fragile and inconvenient. A record must be flipped halfway through, scratches easily and cannot be carried in a pocket. By every measure of practicality, streaming wins effortlessly. And yet, for a growing number of listeners, that is precisely the point.

Part of the appeal is the sound. Enthusiasts insist that vinyl has a warmth and richness that compressed digital files lack, though blind tests suggest the difference is often more imagined than real. More convincing, perhaps, is the experience. Playing a record demands attention: you choose an album, place the needle and listen from start to finish, rather than skipping endlessly through a bottomless playlist. In a distracted world, that ritual feels almost rebellious.

There is also the object itself. A record is something to hold, display and collect, complete with elaborate artwork and sleeve notes that a streaming icon can never match. For younger buyers in particular, who have never owned physical music, a vinyl record is a tangible link to an artist they love.

Critics see mostly nostalgia and clever marketing, and point out that many buyers never actually play their records. Yet the trend says something real about what digital convenience has taken away. In gaining instant access to everything, we may have lost the pleasure of owning something, and the simple act of giving a piece of music our full attention.`,
    questions: [
      { q: "What is described as 'one of the oddest stories in music'?", choices: ["The fall of streaming", "The return of the vinyl record despite streaming", "The invention of the CD", "The end of concerts"], answer: 1, explain: "« the return of the vinyl record »." },
      { q: "Why is the revival called 'baffling'?", choices: ["Vinyl is cheap and practical", "Vinyl is expensive, fragile and inconvenient", "Vinyl sounds terrible", "No one buys it"], answer: 1, explain: "Sur le plan pratique, le streaming l'emporte sans effort." },
      { q: "What do blind tests suggest about vinyl's sound?", choices: ["It is clearly superior", "The difference is often more imagined than real", "It is unlistenable", "It is identical to live music"], answer: 1, explain: "« the difference is often more imagined than real »." },
      { q: "How does playing a record differ from streaming?", choices: ["It demands attention — a full album rather than endless skipping", "It is faster", "It needs no equipment", "It is free"], answer: 0, explain: "On écoute un album du début à la fin, sans zapper." },
      { q: "What does the phrase 'almost rebellious' imply about focused listening?", choices: ["It is illegal", "It goes against a distracted, fragmented culture", "It is old-fashioned and boring", "It is dangerous"], answer: 1, explain: "Donner toute son attention détonne dans un monde distrait." },
      { q: "What is part of vinyl's appeal as an object?", choices: ["It is invisible", "It is something to hold, display and collect, with artwork and sleeve notes", "It plays automatically", "It fits in a pocket"], answer: 1, explain: "L'objet physique avec pochette et notes a une valeur que l'icône numérique n'a pas." },
      { q: "Why does vinyl appeal to younger buyers in particular?", choices: ["It is cheaper than streaming", "It is a tangible link to an artist they love, having never owned physical music", "It is required at school", "It plays on phones"], answer: 1, explain: "Un lien tangible avec l'artiste pour une génération née au tout-numérique." },
      { q: "What do critics mainly see in the trend?", choices: ["A technical breakthrough", "Nostalgia and clever marketing, noting many never play their records", "A threat to musicians", "A government plot"], answer: 1, explain: "Nostalgie et marketing ; beaucoup n'écoutent jamais leurs disques." },
      { q: "What does the author argue the trend reveals?", choices: ["That streaming has failed", "Something real about what digital convenience has taken away", "That vinyl sounds best", "That collecting is pointless"], answer: 1, explain: "La tendance dit quelque chose de ce que la commodité numérique a fait perdre." },
      { q: "What does the author suggest we may have lost (final sentence)?", choices: ["The pleasure of owning something and of giving music full attention", "Access to music", "The ability to buy records", "Interest in artwork"], answer: 0, explain: "En gagnant l'accès instantané, on a perdu le plaisir de posséder et d'écouter pleinement." },
    ],
  },
  {
    id: "ce10",
    theme: "Économique / Technologique",
    title: "The road to electric",
    text: `A decade ago, the electric car was a curiosity, a quiet, expensive novelty for the wealthy or the environmentally devout. Today, electric vehicles, or EVs, are rolling off production lines by the million, and several governments have announced dates by which the sale of new petrol cars will be banned altogether. The transformation of the world's roads, long predicted, appears finally to be under way.

The reasons are not purely green. Batteries have become dramatically cheaper and more powerful, bringing the price of EVs within reach of ordinary drivers and extending the distance they can travel on a single charge. Running an electric car is also far cheaper, with fewer moving parts to break and electricity costing less than petrol. For many buyers, the appeal is as much economic as ethical.

Obstacles, however, remain stubborn. Charging an EV still takes far longer than filling a tank, and in many regions the network of public chargers is patchy or unreliable, leaving drivers anxious about running flat far from home. The upfront price, though falling, is still higher than that of a comparable petrol model, and not everyone has a driveway on which to charge overnight.

There are environmental complications too. Manufacturing a battery is energy-intensive and requires minerals whose extraction can be damaging and is sometimes concentrated in a handful of countries. An electric car is only as clean as the electricity that powers it; charged from a coal-fired grid, its advantage shrinks considerably.

Few doubt the overall direction, but the pace and the consequences are fiercely debated. Will the switch deepen inequality, leaving poorer drivers stuck with ageing petrol cars? Will the electricity grid cope? The destination may be settled, but the journey, as ever, promises to be more complicated than the brochures suggest.`,
    questions: [
      { q: "How was the electric car viewed a decade ago?", choices: ["As the dominant choice", "As a quiet, expensive novelty for the wealthy or eco-minded", "As illegal", "As impossible to build"], answer: 1, explain: "« a quiet, expensive novelty for the wealthy or the environmentally devout »." },
      { q: "What shows the transformation is now under way?", choices: ["EVs produced by the million and bans on new petrol-car sales announced", "Petrol cars getting cheaper", "Factories closing", "Falling EV sales"], answer: 0, explain: "Production de masse + dates d'interdiction des voitures thermiques neuves." },
      { q: "Why have EVs become cheaper to buy?", choices: ["Governments give them away", "Batteries have become dramatically cheaper and more powerful", "Oil is banned", "Petrol cars are taxed to zero"], answer: 1, explain: "« Batteries have become dramatically cheaper and more powerful »." },
      { q: "Why are EVs cheaper to run?", choices: ["They need no energy", "Fewer moving parts to break and electricity costs less than petrol", "They are subsidised forever", "They never need charging"], answer: 1, explain: "Moins de pièces mobiles + électricité moins chère que l'essence." },
      { q: "For many buyers, the appeal is:", choices: ["Purely ethical", "As much economic as ethical", "Only about speed", "Purely about status"], answer: 1, explain: "« the appeal is as much economic as ethical »." },
      { q: "What practical obstacle to EVs is mentioned?", choices: ["They are too fast", "Slow charging and a patchy, unreliable charger network", "They cannot turn", "They are too quiet"], answer: 1, explain: "Recharge lente + réseau de bornes inégal et peu fiable." },
      { q: "What does drivers' anxiety about 'running flat far from home' refer to?", choices: ["Fear of speeding fines", "Fear of running out of charge with no reliable charger nearby", "Fear of theft", "Fear of noise"], answer: 1, explain: "L'« angoisse de l'autonomie » : tomber en panne de batterie loin d'une borne." },
      { q: "What environmental complication concerns batteries?", choices: ["They are too light", "Their manufacture is energy-intensive and needs minerals whose extraction can be damaging", "They produce no emissions ever", "They last forever"], answer: 1, explain: "Fabrication gourmande en énergie + extraction de minerais problématique." },
      { q: "What does 'only as clean as the electricity that powers it' mean?", choices: ["EVs are always clean", "If charged from a coal-fired grid, the EV's advantage shrinks considerably", "Electricity is always green", "EVs cannot be charged"], answer: 1, explain: "Une voiture rechargée sur un réseau au charbon perd son avantage écologique." },
      { q: "What remains 'fiercely debated' according to the last paragraph?", choices: ["Whether EVs exist", "The pace and consequences — such as inequality and grid capacity", "The colour of EVs", "Whether to build roads"], answer: 1, explain: "La direction est admise ; restent en débat le rythme et les conséquences." },
    ],
  },
];
if (window.LANGUE) window.LANGUE.comprehension = window.LANGUE_CE;
