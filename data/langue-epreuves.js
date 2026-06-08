// ÉPREUVES COMPLÈTES — UC B4 Anglais écrit (FEDE, niveau B2 CECR)
// Reproduit le format officiel : 1 épreuve = 2 textes de compréhension (10 QCM/texte → 60 pts)
//   + 1 texte à compléter (30 blancs → 90 pts) + 1 essai (~400 mots → 70 pts). Total 220 pts · 1 h 45.
//
//   • Épreuve 1 : reproduction FIDÈLE du sujet officiel « Janvier 2024 » (réponses du corrigé officiel).
//   • Épreuves 2 & 3 : sujets d'entraînement inédits, calqués sur ce niveau et ce format.
//
// Chargé AVANT data/langue.js (qui fait : epreuves: window.LANGUE_EPREUVES) et AVANT js/langue.jsx.
// Structure d'un blanc : { options:[...4], answer:index, explain } — la vue mélange l'ordre à l'affichage.
window.LANGUE_EPREUVES = [

  // ════════════════════════════════════════════════════════════════════════
  // ÉPREUVE 1 — Sujet OFFICIEL, Session Janvier 2024 (reproduction fidèle)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "ep_2024_01",
    session: "Officiel — Janvier 2024",
    title: "Sujet officiel · Janvier 2024",
    theme: "Économie · travail · précarité",
    officiel: true,
    comprehension: [
      {
        id: "ep1_ce1",
        theme: "Économie / Société",
        title: "The extinction of fish and chips",
        text: `One summer ago, before the region's fish and chip industry was shaken by closures, a lorry heaped with the first fresh potatoes of the season drove along the east coast of Scotland. This lorry wound its way along the East Neuk of Fife, dodging washing lines, mooring bollards and seagulls, parking with impunity to make deliveries. There was an understanding in the East Neuk that nobody would ever get angry and honk at the inbound "tattie" lorry, fish and chips being a staple meal, vital to the region's economy. Tourists come shocking distances to sit on old harbour walls and stab around in takeaway trays with wooden forks. The fish and chips sold in the East Neuk might be the best in the British Isles. Even so, by July 2022, local friers were finding it harder and harder to balance their books.

The driver of the tattie lorry, a red-cheeked Scotsman named Richard Murray, carried keys for most of the businesses on his route, to save from waking any tired friers who'd been up late the night before, poring anxiously over their sums. War in Ukraine coupled with ongoing complications from Brexit had driven up prices of almost all the goods that fish and chip shops depended on, from live ingredients to oil and salt to packaging. More distressing was the problem of rising energy costs. This meal is prepared using a great guzzler of a range cooker that must be kept on and roiling at all hours of a trading day. A trade association called the National Federation of Fish Friers said that as many as a third of the UK's 10,500 shops might go dark due to the price of electricity, warning of a potential "extinction event".

These shops were run by men and women who had thick skins, literally so when it came to their fingertips, which had become so desensitised to heat that they could be brushed against boiling oil to better position a fillet of frying fish or test the readiness of chopped potatoes as they fizzed and crisped. By the following summer, many businesses would be gone, forced to close against their owner's will.

Source: adapted from The Guardian [24/07/2023]`,
        questions: [
          { q: "Choose the correct synonym for \"wound\":", choices: ["lacerated", "meandered", "coiled", "travelled"], answer: 1, explain: "« wound its way » = serpentait / se faufilait → meandered." },
          { q: "Apart from animals and washing lines, what else was the lorry dodging?", choices: ["fallen tree trunks", "boulders and rocks", "walking passerby", "anchoring equipment"], answer: 3, explain: "« mooring bollards » = bornes d'amarrage → anchoring equipment." },
          { q: "What does the familiar term \"tattie\" refer to?", choices: ["fish", "chips", "potatoes", "fish and chips"], answer: 2, explain: "« tattie » est le terme écossais familier pour potatoes (le camion livre les pommes de terre)." },
          { q: "What is a \"staple meal\"?", choices: ["a meal vital to a region's economy", "a meal makes up most of a person's diet", "a cheap meal, usually made for blue-collar workers", "a meal that is produced in large quantities"], answer: 1, explain: "Un « staple » est un aliment de base, qui constitue l'essentiel du régime." },
          { q: "By July 2022, local friers were:", choices: ["having difficulties answering the tourists' demand", "having difficulties keeping a positive stream of revenue", "finding it harder to juggle with books", "finding it harder to come up with new recipes"], answer: 1, explain: "« finding it harder and harder to balance their books » = peinaient à équilibrer leurs comptes." },
          { q: "Richard Murray could:", choices: ["enter the shops unsupervised", "wake the owners whenever he wanted to access their shops", "have a drink with the owners", "help the owners with their accounts"], answer: 0, explain: "Il avait les clés des commerces → il pouvait entrer sans surveillance." },
          { q: "What event has affected the price of live goods?", choices: ["Brexit", "war in Ukraine", "Brexit and the war in Ukraine", "the rise of energy costs"], answer: 2, explain: "« War in Ukraine coupled with ongoing complications from Brexit had driven up prices »." },
          { q: "Choose the correct definition for the word \"guzzler\":", choices: ["to consume a large amount of petrol", "to make a liquid turbid", "to burn or boil at a high temperature", "to turn on an appliance using electricity"], answer: 0, explain: "Un « guzzler » engloutit (carburant/énergie) ; ici une friteuse très gourmande en énergie." },
          { q: "What does the \"extinction event\" refer to?", choices: ["the owners' inability to pay for their supplies", "it is the name for a third of UK's 10,500 shops", "the trade association", "owners closing their shops"], answer: 3, explain: "Un tiers des boutiques pourraient « go dark » → la fermeture des commerces." },
          { q: "To what had owners become desensitized to?", choices: ["the rising cost of electricity", "the heat of the oil", "the closing of their friends' shop", "the thickness of their fingertips"], answer: 1, explain: "Leurs doigts étaient désensibilisés à la chaleur de l'huile bouillante." },
        ],
      },
      {
        id: "ep1_ce2",
        theme: "Société / Travail",
        title: "The lonesome Highway Star",
        text: `I met Jess through REAL Women in Trucking, an advocacy group focused on labor rights, particularly for women drivers. She was usually difficult to pin down; her routes shifted frequently through the Midwest and the South and she could be gone for weeks at a time, with little advanced notice. The truck was her home in the literal sense. She didn't rent or own any property, so even during her days off she often slept in the cab and showered in nearby hotels.

After driving for hours, outside of Lebanon Junction, Kentucky, Jess stopped to fill her tank—190 gallons of diesel for $589. Showers, glorious showers, at a truck stop selling prepper magazines and the latest dash cam models, cost $14 each. Our sleep schedule was irregular—one morning, we woke up around 3, another we slept in until 8:30.

In Indiana, a few hours south of the facility where Jess had driven her first truck, cornfields gave way to lone motels and fast-food chains. "What's more American than gas stations and strip malls?" Jess asked. Flecks of rain spattered the windshield, and the sky ahead was fearsome gray.

Did I know, she asked, that breweries and soda companies halt all other production to bottle water during national emergencies? Also: Drivers who ship the syrup for Coca-Cola need a HAZMAT license because it contains flammable material. For a few years, Jess shipped mostly produce, which gave her unique and disturbing insight into our nation's food systems. "These apples," she said, showing me one she'd had in her truck for two weeks, "are last year's apples. The onions you buy in a grocery store have been in a warehouse for a year." Bananas are stored at 56 degrees if they're green, 57 if they're yellow. Don't ask about the chicken in fast food. "Picking up processed pork products, you step out of your truck into what you think is a puddle of water, but it's pig blood leaking from the trailer. Does that stop me from eating bacon?" she said. "No."

Source: adapted from n+1 magazine [25/07/23]`,
        questions: [
          { q: "What is \"REAL Women in Trucking\"?", choices: ["an institution focusing on labour rights", "a pressure group mainly for women", "a Non-Governemental Organisation for truckers", "none of the above"], answer: 1, explain: "« an advocacy group ... particularly for women drivers » = un groupe de pression surtout féminin." },
          { q: "What difficulties did the journalist have with Jess?", choices: ["Jess' routes shifted frequently", "they had an irregular sleeping schedule", "she could not get a clear answer on her whereabouts", "they had to live inside the truck"], answer: 2, explain: "« difficult to pin down ... little advanced notice » → impossible d'obtenir une réponse claire sur ses déplacements." },
          { q: "Choose the correct synonym for \"diesel\":", choices: ["gasoline", "petrol", "gas", "kerosene"], answer: 1, explain: "Diesel = carburant ; dans le registre courant → petrol (corrigé officiel)." },
          { q: "Choose the correct definition for \"strip mall\":", choices: ["a place where shops are arranged in a line", "a specific parking space outside of the highway for trucks", "an area where truck drivers can rest at a motel", "an entertainment center"], answer: 0, explain: "Un strip mall = une rangée de commerces alignés le long d'une voie." },
          { q: "Choose the correct synonym for \"fearsome\":", choices: ["menacing", "horrible", "dark", "lonesome"], answer: 0, explain: "« fearsome gray » = un gris menaçant → menacing." },
          { q: "For what kind of product do truck drivers need a HAZMAT license?", choices: ["soda syrup", "produce", "chickens", "bottled water"], answer: 0, explain: "« the syrup for Coca-Cola ... contains flammable material » → le sirop de soda." },
          { q: "How much did they spend on showers altogether?", choices: ["14 dollars", "28 dollars", "7 dollars", "21 dollars"], answer: 1, explain: "14 $ chacune × 2 personnes = 28 $." },
          { q: "What happens during a national emergency?", choices: ["breweries and soda companies continue bottling their drinks", "breweries and soda companies bottle water and their drinks", "breweries and soda companies bottle water exclusively", "none of the above"], answer: 2, explain: "« halt all other production to bottle water » → exclusivement de l'eau." },
          { q: "According to the text, it can be said that generally:", choices: ["most produce is transported in refrigerated containers", "produce can be consumed a year later after is has been harvested", "bananas are kept in a separate warehouse", "chickens are rarely transported in closed trucks"], answer: 1, explain: "Pommes / oignons stockés un an → les produits frais sont consommés bien après la récolte." },
          { q: "Choose the correct definition for \"trailer\" as used in the text:", choices: ["an advertisement for a movie consisting of short parts", "a mobile home", "a box on wheels pulled by a vehicule", "a container attached to a large vehicule"], answer: 3, explain: "Ici « trailer » = la remorque attachée au camion (d'où le sang qui s'en échappe)." },
        ],
      },
    ],
    vocabulaire: {
      id: "ep1_voc",
      theme: "Social / Travail",
      title: "Workers Wanted A Union. Then The Mysterious Men Showed Up.",
      text: `Early last year, the president of a small {0} company in Missouri received a {1} call from a man who went {2} the name of Jack Black. Workers at the company, called Motor Appliance Corp., or MAC, had just asked to {3} a union election. Jack Black specialized in "union avoidance." He wanted to offer {4} services.

Jack Black's firm has brought {5} millions of dollars over the years by providing employers with "persuaders," or, to use unions' less charitable term, "union {6}" — consultants who try to convince workers not to organize. Persuader work is {7} business these days. The number of union elections in the U.S. has surged {8} an organizing wave over the last two years. Employers are now paying upwards of $3,000 a day, plus expenses, for {9} persuader. Amazon alone dished out more than $14 million to consultants {10} year. But more often the employer is a little-known firm like MAC, which produces electric motors and battery chargers. The consulting work at MAC ultimately led to employee {11} and a hearing.

When they speak to workers, many persuaders {12} themselves as neutral parties who can provide unbiased information about the {13} process. But the contract between Black's firm and MAC laid bare the real purpose of persuader work, in almost {14} terms. One of the primary goals: "Minimize the likelihood of {15} union encroachment."

The agreement assured consultants would carry out a "thorough assessment" to pinpoint what led to the organizing effort, and conduct "role-playing scenarios" with supervisors on how to interact with workers. {16} also promised a system of "captive audience meetings" — an industry term for speeches where consultants generally deliver anti-union {17} points.

"A systematic, organized counter-campaign will be {18} to secure an election win," the contract assured. "Time is of {19} essence in commencing work on behalf of the company. Any delay is {20} to the company's chances."

Black himself {21} not be going to Missouri. He subcontracted the work out to a man who would also work under {22} pseudonym — one that complemented the name Jack Black.

A {23} 6% of private-sector workers in the U.S. belong to a union today, {24} from a high of around 3% in the 1950s. There are {25} of reasons for the long and steady decline: The loss of union-represented manufacturing jobs; {26} labor laws that make unionizing more difficult; and increasing resistance to collective bargaining from American employers, to name just a few.

{27} persuaders play an undeniable role in suppressing union membership. They help employers craft a playbook against the union. They {28} out who supports the union, who opposes it and who sits on the fence. They hold group and one-on-one meetings that {29} doubt about what a union can accomplish. Some push the boundaries of what's legal and even step over them, according to labor board case files.

Source: adapted from HuffPost [25/07/23]`,
      blanks: [
        { options: ["manufacture", "manufacturing", "manufactured", "manufacting"], answer: 1, explain: "Adjectif épithète → « a small manufacturing company » (entreprise de fabrication)." },
        { options: ["freezing", "cold", "hot", "boiling"], answer: 1, explain: "Idiome « a cold call » = un appel non sollicité / à froid." },
        { options: ["by", "as", "with", "like"], answer: 0, explain: "Idiome « to go by the name of » = se faire appeler." },
        { options: ["take", "make", "have", "hold"], answer: 3, explain: "« to hold an election » = organiser / tenir une élection." },
        { options: ["they're", "their", "his", "her"], answer: 2, explain: "Possessif renvoyant à un homme (Jack Black) → « his services »." },
        { options: ["with", "out", "in", "almost"], answer: 2, explain: "« to bring in millions » = rapporter / engranger des millions." },
        { options: ["busters", "busting", "bust", "bustings"], answer: 0, explain: "« union busters » = briseurs de syndicat (nom au pluriel)." },
        { options: ["small", "big", "interesting", "secret"], answer: 1, explain: "« big business » = un secteur très lucratif." },
        { options: ["amongst", "among", "amidst", "amid"], answer: 3, explain: "« amid an organizing wave » = au milieu d'une vague de syndicalisation (+ nom indénombrable)." },
        { options: ["everyone", "every", "each", "each one"], answer: 2, explain: "« for each persuader » = pour chaque consultant (+ singulier dénombrable)." },
        { options: ["most", "a", "past", "last"], answer: 3, explain: "« last year » = l'an dernier." },
        { options: ["resigns", "resignate", "resignating", "resignations"], answer: 3, explain: "Nom au pluriel après « led to employee » → « resignations » (démissions)." },
        { options: ["cast", "show", "praise", "seem"], answer: 0, explain: "« cast themselves as » = se présenter / se faire passer pour." },
        { options: ["unionizing", "unionization", "union", "uniting"], answer: 1, explain: "« the unionization process » = le processus de syndicalisation (nom)." },
        { options: ["militant", "military", "militaristic", "armed"], answer: 2, explain: "« in almost militaristic terms » = en des termes presque militaires." },
        { options: ["past", "future", "present", "near"], answer: 1, explain: "« future union encroachment » = une future implantation syndicale." },
        { options: ["it", "they", "he", "some"], answer: 0, explain: "Reprend « the agreement » (sing.) → « It also promised »." },
        { options: ["talking", "speaking", "presenting", "showing"], answer: 0, explain: "« talking points » = éléments de langage / arguments." },
        { options: ["implemented", "implanted", "implanting", "implement"], answer: 0, explain: "Voix passive « will be implemented » = sera mis en œuvre." },
        { options: ["most", "some", "an", "the"], answer: 3, explain: "Idiome « time is of the essence » = le temps presse." },
        { options: ["injustly", "injust", "injurious", "injury"], answer: 2, explain: "Adjectif après « is » → « injurious to » = préjudiciable à." },
        { options: ["will", "would", "should", "is"], answer: 1, explain: "Discours rapporté / futur dans le passé → « would not be going »." },
        { options: ["an", "the same", "the", "a"], answer: 3, explain: "« under a pseudonym » = sous un pseudonyme (indéfini, son existence introduite)." },
        { options: ["impressive", "staggering", "mere", "low"], answer: 2, explain: "« a mere 6% » = un maigre 6 % (insiste sur la faiblesse du chiffre)." },
        { options: ["rising", "up", "down", "declined"], answer: 2, explain: "« down from a high of » = en baisse par rapport à un sommet de." },
        { options: ["many", "plenty", "some", "lack"], answer: 0, explain: "« many reasons » = de nombreuses raisons (+ pluriel, sans « of »)." },
        { options: ["weak", "strong", "small", "large"], answer: 0, explain: "« weak labor laws » = des lois du travail faibles (qui compliquent la syndicalisation)." },
        { options: ["however", "but", "somewhat", "evidently"], answer: 1, explain: "Articulation logique en début de phrase → « But persuaders play... »." },
        { options: ["weed", "figure", "show", "take"], answer: 0, explain: "« to weed out » = repérer / éliminer (qui soutient le syndicat)." },
        { options: ["put", "shed", "sow", "show"], answer: 1, explain: "« shed doubt » = jeter le doute (réponse du corrigé officiel)." },
      ],
    },
    redaction: {
      id: "ep1_red",
      theme: "Économie / Travail",
      prompt: `As worldwide inflation has been prevalent but salaries have rarely increased significantly, consider how this has affected the primary, secondary and/or tertiary sector of the economy. Take into account the workers' conditions as well as the consumers' buying power.

Questions you may want to consider in your answer:
• Should companies increase their workers' wages to offset inflation?
• Should workers change work fields?
• Are consumers responsible for local businesses closing down?

You should emphasize your answer with points made in the texts in 400 words. Your essay should clearly include an introduction and a conclusion.`,
      modele: `As the war in Ukraine is still happening, salaries do not manage to equate the record-high inflation, pushing the limits of blue and white-collar workers alike. Who must take the blame for local businesses closing down, when consumers themselves can barely pay the price of daily produce? In this essay, I shall explain how the dynamics of the primary, secondary and tertiary sector have shifted through the complicated balance of power between workers and companies.

As we have seen in the first text, many businesses fall prey to the "extinction event" in spite of their best efforts. Although the old adage "where there is a will there is a way" might have given most local eateries hope, the reality of the situation is rather grim. Because of the rising costs of energy, revenue that could have been reinvested into wages or into paying the rising cost of daily produce is, instead, spent on electricity bills. Business owners, after paying their dues, have little more than hope left. Whilst some might want to be offsetting inflation for their workers, it becomes an almost impossible task in a world where heroes are the ones that make it through another day.

Blue-collar workers share a similar reality to business owners. In the second text, we saw how Jesse lived in her truck because she did not rent or own a home. Although Jesse might have lived this way in order to save money, housing precariousness will eventually become the norm for many adults seeking to emancipate. Indeed, the current inflation has only brought forward how little salaries have increased since the 1950's. In Europe, when the Euro currency was introduced, many countries took a while to adapt their salaries to the pricing reality. This minimal increase has devastating consequences – people spend in order to survive as they have little left for enjoyment, leaving them unable to support local businesses as they would rather save their money "just in case".

In essence, governments should take action in order to reinstate a safe economy where workers can spend part of their wages on entertainment. This would give the necessary stream of revenue and economic safety net to business owners in order to manage the rising costs of produce. Maybe then, business owners will not have to close down unwillingly, and Jesse would be able to afford more than a home on wheels.

— Copie modèle officielle (corrigé Janvier 2024).`,
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // ÉPREUVE 2 — Sujet d'entraînement inédit : « Le travail à l'ère des machines »
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "ep_train_02",
    session: "Entraînement — Sujet A",
    title: "Sujet d'entraînement A · Travail & technologie",
    theme: "Automatisation · économie de plateforme",
    comprehension: [
      {
        id: "ep2_ce1",
        theme: "Économie / Société",
        title: "The last video shop",
        text: `For nearly thirty years, Tom Reilly had unlocked the same scratched glass door at nine o'clock sharp. His shop, Reilly's Video, sat between a launderette and a shuttered bank on a street that had slowly emptied of customers. Once, on a Friday night, the queue had snaked out onto the pavement; teenagers argued over the last copy of a horror film while parents hunted for something the whole family could watch. Those evenings, Tom liked to say, had the warmth of a small festival.

The decline crept in quietly. First came the supermarkets, stacking cheap discs beside the bread. Then streaming arrived, and with it the strange new habit of watching films alone, on a phone, on a train. Within a few years the great racks of cassettes and discs that Tom had polished so proudly began to gather dust. He cut his opening hours, then his staff, until only he remained.

What kept him going was not profit — there was none — but the handful of regulars who still pushed open the door. There was Mrs Okafor, who refused to own a computer and trusted Tom to recommend a comedy for her grandchildren. There was a film student who came to borrow obscure titles no website seemed to carry. For them, the shop was less a business than a meeting place, a room where someone remembered your name and your taste.

When the landlord finally raised the rent beyond anything Tom could pay, he understood that the end had come. He did not rage against the streaming giants or blame his neighbours for staying home. Instead, on his last morning, he gave away what stock remained, pressing films into the hands of anyone who wandered in. "Take it," he told them, smiling. "Watch it with someone."

That evening he turned the key for the final time. The window, once bright with posters, reflected only the grey street. Tom walked home slowly, not bitter but tired, one of the last keepers of a ritual the world had quietly decided it no longer needed.`,
        questions: [
          { q: "Choose the correct synonym for \"shuttered\":", choices: ["renovated", "closed down", "crowded", "brightly lit"], answer: 1, explain: "« a shuttered bank » = une banque fermée / aux volets clos → closed down." },
          { q: "What does \"the queue had snaked out onto the pavement\" suggest?", choices: ["the shop was nearly empty", "there were so many customers the line stretched outside", "the street was dangerous", "the films were of poor quality"], answer: 1, explain: "La file « serpentait » jusque sur le trottoir → affluence très forte." },
          { q: "Why does Tom compare those Friday evenings to \"a small festival\"?", choices: ["films were shown outdoors", "of their lively, joyful atmosphere", "tickets were sold", "they happened only once a year"], answer: 1, explain: "« the warmth of a small festival » évoque une ambiance chaleureuse et animée." },
          { q: "What was the first cause of the shop's decline?", choices: ["streaming services", "supermarkets selling cheap discs", "the rising rent", "the loss of staff"], answer: 1, explain: "« First came the supermarkets, stacking cheap discs »." },
          { q: "Choose the correct definition of \"regulars\":", choices: ["customers who came frequently", "employees paid every month", "ordinary, average films", "shop inspectors"], answer: 0, explain: "« regulars » = des habitués, clients fidèles." },
          { q: "Why did Mrs Okafor rely on Tom?", choices: ["she could not afford films", "she refused to own a computer and trusted his advice", "she worked in the shop", "she was his relative"], answer: 1, explain: "« refused to own a computer and trusted Tom to recommend »." },
          { q: "For the regulars, the shop was mainly:", choices: ["the cheapest option in town", "a meeting place where they felt known", "a tourist attraction", "a temporary solution"], answer: 1, explain: "« less a business than a meeting place, ... where someone remembered your name »." },
          { q: "How did Tom react to the final rent increase?", choices: ["he protested furiously", "he blamed his neighbours", "he accepted it without bitterness", "he refused to leave"], answer: 2, explain: "« He did not rage ... or blame his neighbours » → il accepte sans amertume." },
          { q: "What does Tom's parting advice \"Watch it with someone\" emphasize?", choices: ["the importance of paying for films", "the value of sharing and company", "the superiority of old films", "the danger of screens"], answer: 1, explain: "Il oppose l'écran solitaire au plaisir partagé." },
          { q: "What is the overall tone of the final paragraph?", choices: ["angry and resentful", "melancholic and resigned", "cheerful and hopeful", "neutral and factual"], answer: 1, explain: "« not bitter but tired ... a ritual the world ... no longer needed » → mélancolie résignée." },
        ],
      },
      {
        id: "ep2_ce2",
        theme: "Travail / Société",
        title: "Two wheels through the rain",
        text: `Mara checked her phone for the fourth time in a minute. The little map glowed, then went dark, then glowed again, as if it too were unsure whether the next order would ever come. It was half past nine on a wet Tuesday, and she had been waiting outside the same fast-food restaurant for twenty minutes, earning nothing. The app did not pay her to wait; it paid her only to move.

She had taken up food delivery two winters earlier, after her hours at a call centre were cut. The freedom appealed to her at first. No manager looked over her shoulder; she could log on when she pleased and stop when she was tired. The bicycle, she told friends, was the only boss who never shouted. For a few months the money was enough, and the city, seen from the saddle, felt briefly like hers.

The reality, she soon learned, was harsher than the advertisements suggested. On quiet evenings she might cycle for hours and barely cover the cost of her dinner. The app rewarded speed above all, nudging her to run red lights and weave between buses she could not always see in the dark. When a customer complained, fairly or not, her rating fell, and a low rating meant fewer orders the following week. She was, in every practical sense, employed — yet entitled to none of the protections an employee could expect.

What angered her most was the silence behind the screen. There was no one to call, no office to visit, only an algorithm that decided, by rules she could not read, how much she earned and when she worked. Drivers compared notes in online groups, swapping tips and warnings, but the company itself remained a faceless presence, present everywhere and nowhere.

Her phone buzzed at last. An order, two miles away, for the price of a coffee. Mara sighed, pulled her hood tighter and pushed off into the rain. Somewhere a board of directors was no doubt celebrating record profits. Out here, on the slick streets, the future of work looked a good deal colder.`,
        questions: [
          { q: "Why does Mara keep checking her phone?", choices: ["to message friends", "to see whether a new order will arrive", "to read the news", "to check the weather"], answer: 1, explain: "Elle guette une nouvelle commande sur la carte de l'application." },
          { q: "What does \"it paid her only to move\" mean?", choices: ["she earned a fixed salary", "she was paid only while actively delivering", "waiting was the best-paid task", "movement was forbidden"], answer: 1, explain: "Pas de rémunération pour l'attente : payée uniquement quand elle livre." },
          { q: "Why did Mara start food delivery?", choices: ["she had always dreamed of cycling", "her hours at a call centre were cut", "she was offered a high salary", "she wanted to get fit"], answer: 1, explain: "« after her hours at a call centre were cut »." },
          { q: "What did Mara initially find appealing about the job?", choices: ["the high pay", "the freedom and the absence of a supervisor", "the company of colleagues", "the safety"], answer: 1, explain: "« The freedom appealed to her ... No manager looked over her shoulder »." },
          { q: "What does \"the bicycle was the only boss who never shouted\" suggest?", choices: ["she disliked cycling", "she valued the independence the job seemed to offer", "bicycles can talk", "she had a strict manager"], answer: 1, explain: "Métaphore valorisant l'autonomie apparente du métier." },
          { q: "According to the text, the app encouraged Mara to:", choices: ["take long breaks", "ride dangerously in order to deliver faster", "refuse difficult orders", "work fewer hours"], answer: 1, explain: "« nudging her to run red lights and weave between buses »." },
          { q: "Why were customer complaints so damaging?", choices: ["they led to fines", "a lower rating meant fewer future orders", "they were published in newspapers", "they cancelled her insurance"], answer: 1, explain: "« a low rating meant fewer orders the following week »." },
          { q: "Choose the correct synonym for \"harsher\":", choices: ["gentler", "tougher", "rarer", "louder"], answer: 1, explain: "« harsher than the advertisements suggested » → plus dure, plus rude." },
          { q: "What angered Mara most about the company?", choices: ["its uniforms", "the impossibility of speaking to a real person", "the colour of the app", "the long contracts"], answer: 1, explain: "« the silence behind the screen ... no one to call, no office to visit »." },
          { q: "What does the contrast in the final paragraph highlight?", choices: ["the company's profits against the workers' hard conditions", "the beauty of the city at night", "the advantages of cycling", "the kindness of customers"], answer: 0, explain: "Profits records du conseil d'administration vs. la rue froide et mal payée." },
        ],
      },
    ],
    vocabulaire: {
      id: "ep2_voc",
      theme: "Technologie / Économie",
      title: "The rise of the warehouse robots",
      text: `Step inside a modern distribution centre and you may be surprised by how few humans you {0}. Where rows of workers once pushed trolleys down endless aisles, fleets of squat orange robots now glide silently {1} the floor, lifting shelves and carrying them to the handful of staff who remain. The warehouse, long the {2} of unglamorous manual labour, has quietly become one of the most automated workplaces on earth.

The appeal for companies is obvious. Robots do not {3} tired, take holidays or ask for a raise. They work through the night without complaint, and they {4} the same task thousands of times with a precision no human hand can match. As online shopping continues to {5}, retailers are under enormous pressure to deliver faster and more cheaply, and machines promise to {6} both goals at once.

For the workers who remain, the picture is more {7}. Some welcome the change: the robots take over the heaviest lifting, {8} the risk of injury and the exhaustion of walking many kilometres a day. Others feel reduced to mere assistants, {9} to keep pace with a machine that never slows down. Their movements are tracked, their breaks {10}, and their performance measured against targets that seem to climb every month.

Critics warn that the human cost is too easily {11}. A job in a warehouse may be tough, but for many communities it is one of the few sources of steady {12} left. If a single robot can do the work of several people, they ask, where will the displaced workers {13}? Retraining schemes exist, but they are rarely {14} enough to absorb everyone, and the new technical jobs created often {15} skills that laid-off staff do not have.

Defenders of automation reply that history offers {16} for hope. Every previous wave of mechanisation, they point out, eventually created more jobs than it destroyed, even if the {17} was painful for those caught in the middle. The challenge, they argue, is not to {18} progress but to manage it fairly, sharing the gains rather than letting them flow only to those who {19} the machines.

Governments, so far, have been slow to {20}. Few have any clear plan for retraining workers on the scale that may soon be {21}, and fewer still have asked who should pay for it. Meanwhile the robots keep arriving, cheaper and more capable with each passing {22}.

What happens next will depend less on the machines themselves than on the choices societies {23} around them. Technology, after all, has no {24} of its own; it simply magnifies the priorities of those who {25} it. Whether the automated warehouse becomes a symbol of shared prosperity or of deepening {26} is, ultimately, a political question rather than a technical {27}.

For now, the orange robots glide on, indifferent to the debate they have {28}. They ask for nothing and explain nothing. They simply {29} the goods, and wait for the next instruction.`,
      blanks: [
        { options: ["see", "lose", "build", "sell"], answer: 0, explain: "« how few humans you see » = combien peu d'humains on aperçoit." },
        { options: ["across", "through", "off", "into"], answer: 0, explain: "« glide across the floor » = glisser sur le sol." },
        { options: ["preserve", "holiday", "reward", "silence"], answer: 0, explain: "« the preserve of manual labour » = la chasse gardée / le domaine du travail manuel." },
        { options: ["get", "make", "take", "do"], answer: 0, explain: "« get tired » = se fatiguer." },
        { options: ["repeat", "forget", "avoid", "lose"], answer: 0, explain: "« repeat the same task » = répéter la même tâche." },
        { options: ["grow", "shrink", "fade", "stop"], answer: 0, explain: "« continues to grow » = continue de croître." },
        { options: ["achieve", "miss", "lose", "break"], answer: 0, explain: "« achieve both goals » = atteindre les deux objectifs." },
        { options: ["mixed", "simple", "cheap", "recent"], answer: 0, explain: "« the picture is more mixed » = le tableau est plus nuancé." },
        { options: ["cutting", "raising", "hiding", "ignoring"], answer: 0, explain: "Participe : « cutting the risk of injury » = réduisant le risque de blessure." },
        { options: ["forced", "glad", "free", "ready"], answer: 0, explain: "« forced to keep pace » = contraints de suivre le rythme." },
        { options: ["timed", "extended", "ignored", "praised"], answer: 0, explain: "« their breaks timed » = leurs pauses chronométrées." },
        { options: ["overlooked", "praised", "counted", "paid"], answer: 0, explain: "« too easily overlooked » = trop facilement négligé." },
        { options: ["employment", "holiday", "silence", "rumour"], answer: 0, explain: "« steady employment » = un emploi stable." },
        { options: ["go", "sell", "build", "sing"], answer: 0, explain: "« where will the displaced workers go? » = où iront-ils ?" },
        { options: ["generous", "cheap", "famous", "quiet"], answer: 0, explain: "« rarely generous enough » = rarement assez ambitieux / dotés." },
        { options: ["require", "forget", "sell", "hide"], answer: 0, explain: "« require skills » = exigent des compétences." },
        { options: ["grounds", "silence", "damage", "debt"], answer: 0, explain: "« grounds for hope » = des raisons d'espérer." },
        { options: ["transition", "reward", "holiday", "profit"], answer: 0, explain: "« the transition was painful » = la transition fut douloureuse." },
        { options: ["halt", "welcome", "fund", "praise"], answer: 0, explain: "« not to halt progress » = non pas stopper le progrès." },
        { options: ["own", "fear", "copy", "break"], answer: 0, explain: "« those who own the machines » = ceux qui possèdent les machines." },
        { options: ["respond", "relax", "retire", "boast"], answer: 0, explain: "« slow to respond » = lents à réagir." },
        { options: ["needed", "hidden", "banned", "sold"], answer: 0, explain: "« may soon be needed » = pourrait bientôt être nécessaire." },
        { options: ["year", "silence", "colour", "mood"], answer: 0, explain: "« with each passing year » = à chaque année qui passe." },
        { options: ["make", "lose", "hide", "copy"], answer: 0, explain: "« the choices societies make » = les choix que font les sociétés." },
        { options: ["purpose", "colour", "weight", "sound"], answer: 0, explain: "« no purpose of its own » = aucune finalité propre." },
        { options: ["control", "ignore", "fear", "praise"], answer: 0, explain: "« those who control it » = ceux qui la maîtrisent." },
        { options: ["inequality", "savings", "holidays", "profits"], answer: 0, explain: "« deepening inequality » = des inégalités qui se creusent." },
        { options: ["one", "holiday", "reward", "rumour"], answer: 0, explain: "« a technical one » reprend « question » → plutôt qu'une question technique." },
        { options: ["sparked", "ended", "praised", "cooled"], answer: 0, explain: "« the debate they have sparked » = le débat qu'ils ont déclenché." },
        { options: ["move", "eat", "sell", "hide"], answer: 0, explain: "« they simply move the goods » = ils se contentent de déplacer les marchandises." },
      ],
    },
    redaction: {
      id: "ep2_red",
      theme: "Travail / Technologie",
      prompt: `Automation and digital platforms are transforming the world of work, from warehouses run by robots to jobs managed entirely by an app. Drawing on the documents, consider how technology is reshaping employment and working conditions. Take into account both the opportunities it creates and the insecurity it can cause.

Questions you may want to consider in your answer:
• Does automation ultimately destroy jobs or transform them?
• Should gig-economy workers enjoy the same protections as employees?
• Whose responsibility is it to retrain workers displaced by machines?

You should support your answer with points made in the texts in about 400 words. Your essay should clearly include an introduction and a conclusion.`,
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // ÉPREUVE 3 — Sujet d'entraînement inédit : « Consommer et jeter »
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "ep_train_03",
    session: "Entraînement — Sujet B",
    title: "Sujet d'entraînement B · Consommation & environnement",
    theme: "Surconsommation · climat · gaspillage",
    comprehension: [
      {
        id: "ep3_ce1",
        theme: "Société / Environnement",
        title: "The man who mends things",
        text: `Every Saturday morning, in the back room of a draughty community hall, Samuel sets out his tools with the care of a surgeon. Screwdrivers, soldering irons and tiny pots of oil are arranged in neat rows beneath a hand-painted sign that reads, simply, "Bring It Back to Life." For three hours, anyone may walk in carrying a broken toaster, a silent radio or a lamp that refuses to light, and Samuel, a retired electrician, will try to mend it for nothing.

He started the repair café almost by accident. A neighbour had been about to throw away a vacuum cleaner that needed only a new switch, a part costing less than a loaf of bread. Samuel fixed it in ten minutes, and word spread. Soon his kitchen table could not hold the queue of wounded appliances, and the hall was the obvious answer.

What troubles him is not the broken machines but the habit of mind behind them. People, he says, have been taught to replace rather than repair. Manufacturers design products that are difficult to open, glued shut so that a single failed component condemns the whole device to the bin. Spare parts vanish from the market within a few years, and the cost of a professional repair is often deliberately set higher than the price of buying new.

The visitors who come are not only the hard-up. A well-dressed woman brings a kettle she could easily afford to replace, yet she lingers, watching Samuel work, and admits that throwing things away has begun to make her uneasy. A teenager films the repair on his phone, fascinated, having never once seen the inside of the gadgets that fill his life. For them, the café offers something rarer than a working kettle: the quiet satisfaction of rescuing an object from waste.

Samuel knows he cannot mend the world one toaster at a time. The mountains of discarded electronics grow faster than any volunteer can shrink them. Yet he keeps unlocking the hall each Saturday, convinced that every repair is also a small act of resistance — a way of insisting, against the noise of advertising, that the things we own are worth keeping.`,
        questions: [
          { q: "Choose the correct definition of \"draughty\":", choices: ["brightly decorated", "full of cold air currents", "recently built", "very large"], answer: 1, explain: "« draughty » = plein de courants d'air froid." },
          { q: "What does the sign \"Bring It Back to Life\" refer to?", choices: ["reviving sick animals", "repairing broken objects", "a religious service", "a gardening club"], answer: 1, explain: "Le slogan invite à réparer / faire revivre les objets cassés." },
          { q: "How does Samuel charge for his work?", choices: ["by the hour", "he works for free", "a fixed monthly fee", "only for parts"], answer: 1, explain: "« will try to mend it for nothing » = gratuitement." },
          { q: "How did the repair café begin?", choices: ["it was funded by the council", "after he fixed a neighbour's vacuum cleaner and word spread", "as a paid business", "as a school project"], answer: 1, explain: "« He started the repair café almost by accident ... word spread »." },
          { q: "What \"troubles\" Samuel most?", choices: ["the lack of tools", "the habit of replacing rather than repairing", "the cold hall", "the noise"], answer: 1, explain: "« not the broken machines but the habit of mind ... replace rather than repair »." },
          { q: "According to the text, why are many products hard to repair?", choices: ["they are too old", "they are deliberately designed to be difficult to open", "they are too cheap", "they are imported"], answer: 1, explain: "« design products that are difficult to open, glued shut »." },
          { q: "Choose the correct synonym for \"hard-up\":", choices: ["wealthy", "short of money", "stubborn", "elderly"], answer: 1, explain: "« hard-up » = fauché, à court d'argent." },
          { q: "Why does the well-dressed woman come, although she could buy a new kettle?", choices: ["she enjoys shopping", "throwing things away has begun to make her uneasy", "she knows Samuel personally", "she wants to sell the kettle"], answer: 1, explain: "« admits that throwing things away has begun to make her uneasy »." },
          { q: "What does the café offer that is \"rarer than a working kettle\"?", choices: ["free food", "the satisfaction of saving an object from waste", "a certificate", "a discount"], answer: 1, explain: "« the quiet satisfaction of rescuing an object from waste »." },
          { q: "What does Samuel mean by \"a small act of resistance\"?", choices: ["a political protest march", "quietly opposing a throwaway culture", "refusing to pay taxes", "fighting manufacturers in court"], answer: 1, explain: "Résister discrètement à la culture du jetable, contre la pub." },
        ],
      },
      {
        id: "ep3_ce2",
        theme: "Environnement / Société",
        title: "The tide that took the road",
        text: `The road to Fairhaven ends now where it once continued. A rough barrier of concrete blocks marks the spot at which the tarmac simply disappears into the grey water of the North Sea. Beyond it, on a clear day, you can still make out the foundations of houses that stood, within living memory, on dry land.

Edith has lived in the village all her seventy years, and she remembers the fields that lay where the waves now break. "My father grew barley out there," she says, pointing at the open sea. Each winter, the storms gnaw a little more from the soft cliffs, and each spring the villagers count what has been lost: a footpath, a hedge, the corner of a churchyard. The sea, she observes drily, is a patient thief.

The science is not in dispute. Warmer oceans expand, melting ice adds to their volume, and storms grow fiercer as the climate shifts. For low-lying coasts of soft clay and sand, the result is a slow but relentless retreat of the land. What divides the community is not why it is happening, but what, if anything, can be done.

Some residents demand sea defences — great walls of rock to hold the water back. Engineers, however, warn that protecting one stretch of coast often merely speeds the erosion of the next, and that the cost of defending a handful of homes can dwarf their value many times over. The unspoken official policy, residents suspect, is "managed retreat": to let the sea advance and to move people inland rather than fight a battle that cannot be won.

For Edith, the word "retreat" is hard to swallow. Her house, for now, stands safe, but she has watched neighbours leave, their gardens crumbling into the surf, compensated too little and too late. "They tell us to be realistic," she says. "But how do you put a price on the place you were born?"

The tide, indifferent to such questions, comes in twice a day as it always has. A little higher each decade, it erases first the road, then the memory of the road, carrying the coastline quietly into the past.`,
        questions: [
          { q: "What has happened to the road to Fairhaven?", choices: ["it has been widened", "it now ends where the sea has swallowed it", "it was newly paved", "it was closed for repairs"], answer: 1, explain: "« the tarmac simply disappears into the grey water »." },
          { q: "What can be seen \"beyond the barrier on a clear day\"?", choices: ["a new harbour", "the foundations of houses now under water", "a forest", "another village"], answer: 1, explain: "« the foundations of houses that stood ... on dry land »." },
          { q: "What did Edith's father do on the land now covered by sea?", choices: ["he kept sheep", "he grew barley", "he built boats", "he ran a shop"], answer: 1, explain: "« My father grew barley out there »." },
          { q: "Choose the correct definition of \"gnaw\" in \"the storms gnaw a little more from the cliffs\":", choices: ["to wear away gradually", "to build up", "to freeze", "to illuminate"], answer: 0, explain: "« gnaw » = ronger / éroder peu à peu." },
          { q: "What does Edith mean by calling the sea \"a patient thief\"?", choices: ["it steals quickly", "it takes the land slowly but steadily", "it returns what it takes", "it is harmless"], answer: 1, explain: "Un voleur patient : il prend la terre lentement mais sûrement." },
          { q: "According to the text, what is NOT in dispute?", choices: ["who should pay", "the scientific causes of the rising sea", "where to build walls", "when people should leave"], answer: 1, explain: "« The science is not in dispute. »" },
          { q: "What divides the community?", choices: ["the cause of the flooding", "what, if anything, can be done about it", "the date of the storms", "the size of the village"], answer: 1, explain: "« not why it is happening, but what ... can be done »." },
          { q: "Why do engineers caution against sea walls?", choices: ["they are illegal", "protecting one stretch can worsen erosion elsewhere and cost more than the homes are worth", "they spoil the view", "they take too long to build"], answer: 1, explain: "« speeds the erosion of the next ... can dwarf their value »." },
          { q: "Choose the correct definition of \"managed retreat\":", choices: ["a military operation", "deliberately letting the sea advance and relocating people inland", "building higher walls", "evacuating tourists"], answer: 1, explain: "« to let the sea advance and to move people inland »." },
          { q: "What does Edith's final question express?", choices: ["a demand for more money", "the impossibility of measuring an emotional loss in cash", "a wish to sell her house", "her trust in the authorities"], answer: 1, explain: "« how do you put a price on the place you were born? » → une perte affective inchiffrable." },
        ],
      },
    ],
    vocabulaire: {
      id: "ep3_voc",
      theme: "Environnement / Économie",
      title: "The true cost of fast fashion",
      text: `A new dress for the price of a sandwich, worn once for a party and then forgotten at the back of a wardrobe: this is the {0} of fast fashion. Over the past two decades, clothing has become astonishingly {1}, and the big chains now release not four collections a year but a new {2} of styles almost every week. Shoppers, tempted by ever-lower prices, buy far more than they could ever {3}.

The figures are sobering. The average garment today is worn only a {4} of the times it was a generation ago before being thrown {5}. Mountains of barely used clothing are shipped to distant countries, where much of it cannot be sold and ends up {6} on open ground or burned. What looks like a {7} on the price tag conceals an enormous cost paid somewhere else.

That cost falls first on the workers who {8} our clothes. To keep prices low, much production has been moved to factories where wages are {9} and safety standards weak. Long hours, locked fire exits and the constant threat of dismissal remain depressingly {10}. When a building collapses or a fire breaks {11}, the world's attention flares briefly, then fades until the next {12}.

The environment pays too. Growing cotton {13} vast quantities of water, while synthetic fabrics shed tiny plastic fibres every time they are {14}, fibres that end up in rivers and, eventually, in the food we eat. Dyeing and finishing pour chemicals into waterways, and the industry as a whole now {15} more carbon than international flights and shipping combined.

Why, then, do we keep buying? Part of the answer lies in clever {16}. Advertising teaches us to see clothes not as objects to be kept but as a way of {17} who we are, an identity to be updated as often as a phone. Social media {18} the pressure, turning every gathering into a photograph and every photograph into a reason to {19} something new.

Change, however, is slowly {20}. A growing number of shoppers now {21} second-hand clothes, repair what they own, or rent outfits for special occasions rather than buying them {22}. Some governments are beginning to {23} manufacturers responsible for the waste their products create, and a few brands, sensing the shift, have started to {24} repairs and take-back schemes.

None of this, on its own, will be {25}. As long as a new top costs less than a coffee, the temptation to treat clothing as disposable will {26}. The real solution may require us to {27} the very idea that newer is always better, and to rediscover an older {28}: that a well-made garment, cared for and repaired, can last for years rather than a single {29}.`,
      blanks: [
        { options: ["promise", "silence", "damage", "debt"], answer: 0, explain: "« the promise of fast fashion » = la promesse de la mode jetable." },
        { options: ["cheap", "expensive", "rare", "heavy"], answer: 0, explain: "« astonishingly cheap » = étonnamment bon marché." },
        { options: ["wave", "silence", "colour", "weight"], answer: 0, explain: "« a new wave of styles » = une nouvelle vague de modèles." },
        { options: ["wear", "build", "sell", "drive"], answer: 0, explain: "« more than they could ever wear » = plus qu'ils ne porteront jamais." },
        { options: ["fraction", "majority", "number", "crowd"], answer: 0, explain: "« a fraction of the times » = une fraction du nombre de fois." },
        { options: ["away", "up", "off", "in"], answer: 0, explain: "« thrown away » = jeté." },
        { options: ["rotting", "growing", "shining", "sleeping"], answer: 0, explain: "« ends up rotting on open ground » = finit par pourrir à ciel ouvert." },
        { options: ["bargain", "mistake", "threat", "joke"], answer: 0, explain: "« a bargain on the price tag » = une bonne affaire sur l'étiquette." },
        { options: ["make", "buy", "wear", "sell"], answer: 0, explain: "« the workers who make our clothes » = ceux qui fabriquent nos vêtements." },
        { options: ["low", "high", "fair", "secret"], answer: 0, explain: "« wages are low » = les salaires sont bas." },
        { options: ["common", "rare", "famous", "cheap"], answer: 0, explain: "« depressingly common » = d'une banalité déprimante." },
        { options: ["out", "up", "in", "down"], answer: 0, explain: "« a fire breaks out » = un incendie se déclare." },
        { options: ["disaster", "holiday", "reward", "bargain"], answer: 0, explain: "« until the next disaster » = jusqu'à la prochaine catastrophe." },
        { options: ["consumes", "saves", "hides", "prints"], answer: 0, explain: "« consumes vast quantities of water » = consomme d'énormes quantités d'eau." },
        { options: ["washed", "worn", "sold", "folded"], answer: 0, explain: "« every time they are washed » = à chaque lavage." },
        { options: ["emits", "saves", "hides", "absorbs"], answer: 0, explain: "« emits more carbon » = émet plus de carbone." },
        { options: ["marketing", "cooking", "farming", "weather"], answer: 0, explain: "« clever marketing » = un marketing habile." },
        { options: ["expressing", "hiding", "forgetting", "selling"], answer: 0, explain: "« a way of expressing who we are » = une façon d'exprimer qui l'on est." },
        { options: ["amplifies", "eases", "hides", "ends"], answer: 0, explain: "« amplifies the pressure » = amplifie la pression." },
        { options: ["buy", "keep", "repair", "return"], answer: 0, explain: "« a reason to buy something new » = une raison d'acheter du neuf." },
        { options: ["spreading", "fading", "stopping", "sleeping"], answer: 0, explain: "« change is slowly spreading » = le changement se diffuse lentement." },
        { options: ["choose", "reject", "burn", "hide"], answer: 0, explain: "« choose second-hand clothes » = optent pour la seconde main." },
        { options: ["new", "cheap", "online", "abroad"], answer: 0, explain: "« rather than buying them new » = plutôt que de les acheter neufs." },
        { options: ["hold", "thank", "pay", "free"], answer: 0, explain: "« hold manufacturers responsible » = tenir les fabricants pour responsables." },
        { options: ["offer", "refuse", "hide", "tax"], answer: 0, explain: "« started to offer repairs » = ont commencé à proposer des réparations." },
        { options: ["enough", "useless", "illegal", "secret"], answer: 0, explain: "« will be enough » = sera suffisant." },
        { options: ["remain", "vanish", "freeze", "fall"], answer: 0, explain: "« the temptation will remain » = la tentation demeurera." },
        { options: ["question", "accept", "repeat", "praise"], answer: 0, explain: "« question the very idea » = remettre en cause l'idée même." },
        { options: ["wisdom", "mistake", "rumour", "fashion"], answer: 0, explain: "« an older wisdom » = une sagesse plus ancienne." },
        { options: ["season", "year", "life", "decade"], answer: 0, explain: "« rather than a single season » = plutôt qu'une seule saison." },
      ],
    },
    redaction: {
      id: "ep3_red",
      theme: "Consommation / Environnement",
      prompt: `From the clothes we discard after a single wear to the appliances we replace rather than repair, modern life encourages us to consume and throw away. Drawing on the documents, discuss the causes and consequences of our throwaway culture, and consider who bears responsibility for changing it. Take into account both individual choices and the role of companies and governments.

Questions you may want to consider in your answer:
• Are consumers or producers more responsible for waste?
• Should governments force manufacturers to make products that last?
• Can individual habits make a real difference?

You should support your answer with points made in the texts in about 400 words. Your essay should clearly include an introduction and a conclusion.`,
    },
  },

];

// Rattache à l'objet LANGUE si déjà présent (sinon langue.js lira window.LANGUE_EPREUVES).
if (window.LANGUE) window.LANGUE.epreuves = window.LANGUE_EPREUVES;
