// Épreuve 2 — VOCABULAIRE (texte à trous), format officiel FEDE
//   Texte ~500 mots · 30 « blancs » · 4 propositions/blanc · 3 pts/bonne réponse → 90 pts
//   10 sujets d'entraînement (thèmes : politique, économique, social, culturel, etc.)
// Chargé AVANT data/langue.js, qui fait : vocabulaire: window.LANGUE_VOCAB.
// Chaque blanc : { options:[bonne, ...distracteurs], answer:0, explain:"pourquoi ce mot" }.
// (La vue mélange l'ordre des propositions à l'affichage.)
window.LANGUE_VOCAB = [
  {
    id: "voc1",
    theme: "Économique / Social",
    title: "The gig economy",
    text: `The rise of the gig economy has {0} the traditional idea of a job for life. Instead of relying on a single employer, millions of workers now {1} a living through short-term contracts, freelance projects and app-based tasks. For its {2}, this arrangement offers an unprecedented degree of {3}: people can choose when, where and how much they work.

Supporters {4} that the gig economy {5} opportunities to those long excluded from the labour market. Students, parents and retirees can {6} extra income around their other commitments, while skilled freelancers often {7} far more than they would in a conventional post. In theory, talent rather than connections {8} who succeeds.

Critics, however, paint a far less {9} picture. Behind the language of freedom, they argue, lies a worrying {10} of basic protections. Gig workers rarely {11} paid holidays, sick leave or a guaranteed wage, and a slow week can leave them struggling to {12} the bills. The risks once {13} by companies have quietly been {14} onto individuals.

The legal status of these workers remains fiercely {15}. Are they genuinely self-employed, or employees in all but {16}? Courts across the world have reached {17} conclusions, and a single ruling can {18} the business model of an entire platform overnight. Companies insist that reclassifying workers would {19} costs and ultimately {20} the very jobs people depend on.

Meanwhile, the algorithms that {21} this new world of work are coming under {22} scrutiny. Drivers and couriers complain that opaque systems {23} their pay, monitor their every move and can {24} them without warning or appeal. Being managed by software, they say, can feel {25} and dehumanising.

What is clear is that the gig economy is here to {26}. The challenge for policymakers is to {27} its flexibility with decent safeguards, so that independence does not {28} insecurity. Striking that {29} will define the future of work for a generation.`,
    blanks: [
      { options: ["overturned", "reinforced", "ignored", "repeated"], answer: 0, explain: "'overturn an idea' = bouleverser/renverser une idée ; 'reinforce' (renforcer) dirait l'inverse." },
      { options: ["earn", "spend", "lose", "waste"], answer: 0, explain: "Collocation 'earn a living' = gagner sa vie." },
      { options: ["advocates", "critics", "victims", "enemies"], answer: 0, explain: "'For its advocates' = pour ses partisans/défenseurs." },
      { options: ["flexibility", "rigidity", "boredom", "secrecy"], answer: 0, explain: "'flexibility' = souplesse ; 'rigidity' est l'opposé." },
      { options: ["claim", "deny", "doubt", "forget"], answer: 0, explain: "'claim that' = affirmer que ; 'deny/doubt' inverseraient le sens." },
      { options: ["offers", "denies", "closes", "hides"], answer: 0, explain: "'offer opportunities' = offrir des perspectives." },
      { options: ["supplement", "refuse", "return", "hide"], answer: 0, explain: "'supplement one's income' = compléter ses revenus." },
      { options: ["make", "lose", "owe", "borrow"], answer: 0, explain: "'make money' = gagner de l'argent." },
      { options: ["determines", "hides", "delays", "forgets"], answer: 0, explain: "'determine who succeeds' = déterminer qui réussit." },
      { options: ["rosy", "gloomy", "blurred", "brief"], answer: 0, explain: "'a rosy picture' = un tableau idyllique ; ici 'less rosy' = moins reluisant." },
      { options: ["erosion", "growth", "defence", "supply"], answer: 0, explain: "'erosion of protections' = effritement des protections." },
      { options: ["enjoy", "refuse", "avoid", "lose"], answer: 0, explain: "'enjoy holidays/benefits' = bénéficier de congés/avantages." },
      { options: ["cover", "raise", "print", "ignore"], answer: 0, explain: "'cover the bills' = régler/payer les factures." },
      { options: ["borne", "created", "enjoyed", "hidden"], answer: 0, explain: "'risks borne by companies' = risques supportés par (to bear → borne)." },
      { options: ["shifted", "given", "sold", "lent"], answer: 0, explain: "'shift risks onto individuals' = reporter les risques sur les individus." },
      { options: ["contested", "admired", "ignored", "welcomed"], answer: 0, explain: "'fiercely contested' = âprement débattu/contesté." },
      { options: ["name", "work", "theory", "law"], answer: 0, explain: "Idiome 'in all but name' = à tout sauf le nom (= dans les faits)." },
      { options: ["conflicting", "identical", "cheerful", "final"], answer: 0, explain: "'conflicting conclusions' = des conclusions contradictoires." },
      { options: ["upend", "confirm", "reward", "copy"], answer: 0, explain: "'upend a business model' = bouleverser un modèle économique." },
      { options: ["raise", "lower", "hide", "split"], answer: 0, explain: "'raise costs' = augmenter les coûts." },
      { options: ["destroy", "create", "protect", "double"], answer: 0, explain: "'destroy jobs' = détruire des emplois." },
      { options: ["govern", "ignore", "fear", "praise"], answer: 0, explain: "'govern this world of work' = régissent ce monde du travail." },
      { options: ["growing", "fading", "gentle", "secret"], answer: 0, explain: "'growing scrutiny' = une surveillance croissante." },
      { options: ["dictate", "raise", "reveal", "gift"], answer: 0, explain: "'dictate their pay' = imposent/fixent leur rémunération." },
      { options: ["dismiss", "promote", "reward", "train"], answer: 0, explain: "'dismiss' = licencier/désactiver (sans préavis ni recours)." },
      { options: ["alienating", "warm", "friendly", "fair"], answer: 0, explain: "'alienating' = aliénant (avec 'dehumanising')." },
      { options: ["stay", "leave", "fail", "wait"], answer: 0, explain: "Idiome 'here to stay' = installé durablement." },
      { options: ["reconcile", "replace", "forbid", "ignore"], answer: 0, explain: "'reconcile X with Y' = concilier la flexibilité avec des protections." },
      { options: ["breed", "prevent", "reward", "reduce"], answer: 0, explain: "'breed insecurity' = engendrer la précarité." },
      { options: ["balance", "blow", "deal", "record"], answer: 0, explain: "'strike a balance' = trouver le juste équilibre." },
    ],
  },
  {
    id: "voc2",
    theme: "Environnement / Urbanisme",
    title: "Rewilding the city",
    text: `As concrete continues to {0} across the planet, a quiet movement is pushing in the opposite {1}. From Berlin to Singapore, city authorities are deliberately bringing nature back into the urban {2}, replacing grey surfaces with greenery in a process often called urban rewilding.

The benefits, researchers say, are {3}. Trees and parks {4} temperatures during heatwaves, absorb rainwater that would otherwise {5} drains, and trap some of the pollution that {6} city air. Beyond the {7} advantages, contact with nature has been shown to {8} stress and improve mental health.

Encouraging wildlife in dense neighbourhoods, however, is not {9}. Some residents {10} about insects, allergies or the cost of {11} new green spaces. Developers, eager to {12} every square metre, often {13} parks as wasted land that could generate profit.

Supporters {14} these objections. A well-designed green roof or pocket park, they point out, can {15} property values and attract visitors, more than {16} its upkeep. Far from a luxury, nature in the city is increasingly seen as essential {17}.

Climate change has {18} the debate. As summers grow hotter and storms more {19}, the ability of green infrastructure to cool streets and {20} floods has moved from a pleasant idea to an urgent {21}. Cities that once paved over rivers are now carefully {22} them.

Critics warn that rewilding must not become a tool for {23}. When a neglected district is suddenly {24} with parks and trees, rents can {25}, pushing out the very residents who waited longest for {26}. Greening a city, they insist, must {27} everyone, not just the wealthy.

For now, the {28} seems unstoppable. In a warming, crowded world, letting nature back in may be one of the smartest {29} a city can make.`,
    blanks: [
      { options: ["spread", "shrink", "cool", "sleep"], answer: 0, explain: "'concrete continues to spread' = le béton continue de s'étendre." },
      { options: ["direction", "weather", "season", "colour"], answer: 0, explain: "'the opposite direction' = la direction inverse." },
      { options: ["fabric", "desert", "silence", "budget"], answer: 0, explain: "'the urban fabric' = le tissu urbain." },
      { options: ["substantial", "trivial", "imaginary", "secret"], answer: 0, explain: "'substantial benefits' = des bénéfices considérables." },
      { options: ["lower", "raise", "hide", "ignore"], answer: 0, explain: "'lower temperatures' = font baisser les températures." },
      { options: ["overwhelm", "clean", "fill", "avoid"], answer: 0, explain: "'overwhelm drains' = saturer les égouts." },
      { options: ["fouls", "clears", "cools", "feeds"], answer: 0, explain: "'foul the air' = vicier/polluer l'air." },
      { options: ["practical", "imaginary", "legal", "musical"], answer: 0, explain: "'practical advantages' = avantages concrets/pratiques." },
      { options: ["reduce", "increase", "ignore", "cause"], answer: 0, explain: "'reduce stress' = réduire le stress." },
      { options: ["straightforward", "forbidden", "expensive", "famous"], answer: 0, explain: "'not straightforward' = pas si simple." },
      { options: ["complain", "dream", "boast", "sing"], answer: 0, explain: "'complain about' = se plaindre de." },
      { options: ["maintaining", "destroying", "hiding", "selling"], answer: 0, explain: "'maintaining green spaces' = entretenir les espaces verts." },
      { options: ["exploit", "waste", "donate", "ignore"], answer: 0, explain: "'exploit every square metre' = exploiter chaque mètre carré." },
      { options: ["dismiss", "praise", "build", "rent"], answer: 0, explain: "'dismiss parks as wasted land' = considérer (avec dédain) les parcs comme du gâchis." },
      { options: ["counter", "accept", "repeat", "fear"], answer: 0, explain: "'counter objections' = réfuter les objections." },
      { options: ["boost", "lower", "hide", "tax"], answer: 0, explain: "'boost property values' = faire grimper la valeur immobilière." },
      { options: ["covering", "wasting", "raising", "losing"], answer: 0, explain: "'more than covering its upkeep' = couvrant largement son entretien." },
      { options: ["infrastructure", "decoration", "furniture", "clothing"], answer: 0, explain: "'essential infrastructure' = une infrastructure essentielle." },
      { options: ["intensified", "ended", "hidden", "cooled"], answer: 0, explain: "'intensified the debate' = a intensifié le débat." },
      { options: ["frequent", "rare", "gentle", "quiet"], answer: 0, explain: "'more frequent' = plus fréquentes." },
      { options: ["prevent", "cause", "enjoy", "ignore"], answer: 0, explain: "'prevent floods' = prévenir les inondations." },
      { options: ["necessity", "luxury", "mistake", "rumour"], answer: 0, explain: "'an urgent necessity' = une nécessité urgente (opposé de 'luxury')." },
      { options: ["uncovering", "burying", "selling", "freezing"], answer: 0, explain: "'uncovering rivers' = remettre à découvert des rivières (jadis recouvertes)." },
      { options: ["gentrification", "education", "recycling", "tourism"], answer: 0, explain: "'gentrification' = embourgeoisement (hausse des loyers chassant les habitants)." },
      { options: ["upgraded", "ruined", "emptied", "flooded"], answer: 0, explain: "'upgraded with parks' = revalorisé/aménagé avec des parcs." },
      { options: ["soar", "fall", "freeze", "vanish"], answer: 0, explain: "'rents can soar' = les loyers peuvent flamber." },
      { options: ["improvement", "punishment", "silence", "rent"], answer: 0, explain: "'waited longest for improvement' = attendu le plus longtemps une amélioration." },
      { options: ["benefit", "ignore", "punish", "copy"], answer: 0, explain: "'must benefit everyone' = doit profiter à tous." },
      { options: ["momentum", "silence", "damage", "debt"], answer: 0, explain: "'the momentum seems unstoppable' = la dynamique semble irrésistible." },
      { options: ["investments", "mistakes", "jokes", "threats"], answer: 0, explain: "'the smartest investments' = les investissements les plus avisés." },
    ],
  },
  {
    id: "voc3",
    theme: "Culturel / Médias",
    title: "Books in the age of screens",
    text: `Every few years, someone {0} the death of the printed book. Screens, we are told, will {1} paper for good, and libraries will become {2} of a bygone age. Yet the reality has proved far more {3}.

Sales of e-readers, which once seemed {4}, have levelled off, while printed books continue to {5} millions of buyers. Many readers, it turns out, still {6} the feel of paper, the smell of a new volume and the satisfaction of {7} a physical bookmark forward.

Scientists have begun to {8} why the medium matters. Studies suggest that readers {9} information more deeply from print than from screens, perhaps because scrolling {10} our attention and encourages {11} skimming. On paper, the eye moves more {12}, and memory {13} accordingly.

That does not mean digital reading has no {14}. Audiobooks have {15} an entirely new audience, allowing people to {16} literature while commuting or exercising. Online libraries put millions of titles within {17} of anyone with a phone, {18} barriers that once kept books out of reach.

Publishers, caught between two {19}, are learning to {20} both. A bestselling novel now appears simultaneously in print, e-book and audio, each format {21} a different need. Rather than {22} one another, the formats increasingly {23}.

Educators, meanwhile, worry about a deeper {24}: whether young people raised on endless feeds can still {25} the patience that long, demanding texts {26}. Sustained reading, they argue, is a skill that must be {27}, not assumed.

The printed book, then, has refused to {28}. Like the bicycle or the wristwatch, it has survived newer technology by doing one thing supremely {29}.`,
    blanks: [
      { options: ["predicts", "prevents", "mourns", "hides"], answer: 0, explain: "'predict the death of' = prédire la mort de." },
      { options: ["replace", "print", "clean", "sell"], answer: 0, explain: "'replace paper' = remplacer le papier." },
      { options: ["relics", "leaders", "centres", "models"], answer: 0, explain: "'relics of a bygone age' = des vestiges d'une époque révolue." },
      { options: ["complicated", "boring", "cheap", "recent"], answer: 0, explain: "'more complicated' = bien plus nuancée/compliquée." },
      { options: ["unstoppable", "useless", "illegal", "tiny"], answer: 0, explain: "'seemed unstoppable' = semblaient irrésistibles." },
      { options: ["attract", "repel", "ignore", "tax"], answer: 0, explain: "'attract buyers' = attirer des acheteurs." },
      { options: ["cherish", "hate", "fear", "sell"], answer: 0, explain: "'cherish the feel of paper' = chérir le contact du papier." },
      { options: ["sliding", "throwing", "hiding", "burning"], answer: 0, explain: "'sliding a bookmark forward' = faire glisser un marque-page." },
      { options: ["investigate", "ignore", "deny", "forget"], answer: 0, explain: "'investigate why' = chercher à comprendre pourquoi." },
      { options: ["absorb", "lose", "reject", "copy"], answer: 0, explain: "'absorb information' = assimiler l'information." },
      { options: ["fragments", "sharpens", "rewards", "saves"], answer: 0, explain: "'fragments our attention' = fragmente notre attention." },
      { options: ["shallow", "careful", "deep", "slow"], answer: 0, explain: "'shallow skimming' = une lecture superficielle en diagonale." },
      { options: ["steadily", "wildly", "rarely", "loudly"], answer: 0, explain: "'moves more steadily' = avance plus régulièrement." },
      { options: ["improves", "fades", "stops", "lies"], answer: 0, explain: "'memory improves accordingly' = la mémoire s'améliore en conséquence." },
      { options: ["merit", "colour", "weight", "sound"], answer: 0, explain: "'has no merit' = n'a aucun intérêt/mérite." },
      { options: ["reached", "lost", "bored", "copied"], answer: 0, explain: "'reached a new audience' = touché un nouveau public." },
      { options: ["enjoy", "avoid", "print", "sell"], answer: 0, explain: "'enjoy literature' = profiter de la littérature." },
      { options: ["reach", "sight", "danger", "reason"], answer: 0, explain: "'within reach' = à portée." },
      { options: ["removing", "building", "hiding", "raising"], answer: 0, explain: "'removing barriers' = abattant les obstacles." },
      { options: ["worlds", "prices", "cities", "laws"], answer: 0, explain: "'between two worlds' = entre deux mondes." },
      { options: ["embrace", "reject", "fear", "ignore"], answer: 0, explain: "'embrace both' = adopter les deux." },
      { options: ["serving", "hiding", "raising", "losing"], answer: 0, explain: "'serving a different need' = répondant à un besoin différent." },
      { options: ["replacing", "helping", "copying", "joining"], answer: 0, explain: "'rather than replacing one another' = plutôt que de se remplacer." },
      { options: ["complement", "destroy", "ignore", "repeat"], answer: 0, explain: "'the formats complement' = les formats se complètent." },
      { options: ["concern", "joke", "reward", "silence"], answer: 0, explain: "'a deeper concern' = une inquiétude plus profonde." },
      { options: ["summon", "waste", "sell", "fear"], answer: 0, explain: "'summon the patience' = mobiliser la patience." },
      { options: ["demand", "forbid", "offer", "hide"], answer: 0, explain: "'texts demand' = les textes exigent (de la patience)." },
      { options: ["cultivated", "ignored", "punished", "sold"], answer: 0, explain: "'must be cultivated' = doit se cultiver." },
      { options: ["disappear", "improve", "sell", "grow"], answer: 0, explain: "'refused to disappear' = a refusé de disparaître." },
      { options: ["well", "badly", "rarely", "slowly"], answer: 0, explain: "'supremely well' = remarquablement bien." },
    ],
  },
  {
    id: "voc4",
    theme: "Technologique / Économique",
    title: "Artificial intelligence and the future of work",
    text: `Few technologies have {0} as much excitement and {1} as artificial intelligence. Within a few years, systems that can write, draw and {2} have moved from research labs into everyday {3}, leaving workers to wonder what their place will be.

Optimists insist that history is on their {4}. Every great wave of automation, from the loom to the computer, ultimately {5} more jobs than it destroyed, even if the {6} was painful. AI, they argue, will {7} humans of dull, repetitive tasks and free them for more {8} work.

Pessimists are not so {9}. This time, they warn, machines are coming for {10} work as well as manual labour, threatening roles once thought {11} to automation. When a single program can do the work of {12} analysts, the displaced may struggle to {13} new positions quickly enough.

The truth probably lies somewhere in {14}. Most experts expect AI to {15} jobs rather than simply abolish them, taking over certain tasks while leaving others to people. A doctor may {16} on AI to read scans, yet still {17} the patient herself.

What worries economists most is not the {18} number of jobs but their {19}. If the gains flow mainly to those who own the technology, inequality could {20} sharply. Ensuring that the benefits are widely {21} may prove the central political {22} of the coming decade.

Education systems are scrambling to {23}. Skills that machines cannot easily {24} — creativity, judgement, empathy — are suddenly at a {25}. Yet retraining millions of adults is a slow and costly {26}, and the technology is advancing far {27} than most institutions can move.

Whatever happens, doing nothing is not an {28}. The societies that thrive will be those that learn to {29} alongside intelligent machines rather than compete against them.`,
    blanks: [
      { options: ["generated", "hidden", "reduced", "delayed"], answer: 0, explain: "'generate excitement' = susciter l'enthousiasme." },
      { options: ["anxiety", "boredom", "silence", "profit"], answer: 0, explain: "'excitement and anxiety' = enthousiasme et angoisse (contraste)." },
      { options: ["reason", "sleep", "eat", "travel"], answer: 0, explain: "'systems that can reason' = des systèmes capables de raisonner." },
      { options: ["life", "weather", "music", "sport"], answer: 0, explain: "'everyday life' = la vie quotidienne." },
      { options: ["side", "desk", "mind", "road"], answer: 0, explain: "Idiome 'history is on their side' = l'histoire leur donne raison." },
      { options: ["created", "hid", "taxed", "copied"], answer: 0, explain: "'created more jobs than it destroyed' = a créé plus d'emplois qu'elle n'en a détruits." },
      { options: ["transition", "reward", "holiday", "profit"], answer: 0, explain: "'the transition was painful' = la transition fut douloureuse." },
      { options: ["relieve", "accuse", "remind", "warn"], answer: 0, explain: "'relieve humans of tasks' = décharger les humains de tâches." },
      { options: ["rewarding", "boring", "dangerous", "cheap"], answer: 0, explain: "'more rewarding work' = un travail plus gratifiant." },
      { options: ["confident", "loud", "tall", "rich"], answer: 0, explain: "'not so confident' = pas si confiants." },
      { options: ["skilled", "cheap", "foreign", "seasonal"], answer: 0, explain: "'skilled work' = le travail qualifié (et pas seulement manuel)." },
      { options: ["immune", "close", "equal", "central"], answer: 0, explain: "'immune to automation' = à l'abri de l'automatisation." },
      { options: ["countless", "grateful", "junior", "foreign"], answer: 0, explain: "'countless analysts' = d'innombrables analystes." },
      { options: ["secure", "quit", "lose", "avoid"], answer: 0, explain: "'secure new positions' = décrocher de nouveaux postes." },
      { options: ["between", "advance", "public", "secret"], answer: 0, explain: "'somewhere in between' = quelque part entre les deux." },
      { options: ["reshape", "abolish", "copy", "hide"], answer: 0, explain: "'reshape jobs' = transformer les emplois (plutôt que les supprimer)." },
      { options: ["rely", "refuse", "give", "report"], answer: 0, explain: "'rely on AI' = s'appuyer sur l'IA." },
      { options: ["examine", "ignore", "sell", "copy"], answer: 0, explain: "'examine the patient' = examiner le patient." },
      { options: ["sheer", "small", "fake", "rising"], answer: 0, explain: "'the sheer number' = le nombre même/considérable." },
      { options: ["distribution", "colour", "weight", "sound"], answer: 0, explain: "'their distribution' = leur répartition." },
      { options: ["widen", "narrow", "vanish", "freeze"], answer: 0, explain: "'inequality could widen' = les inégalités pourraient se creuser." },
      { options: ["shared", "hidden", "taxed", "copied"], answer: 0, explain: "'widely shared' = largement partagés." },
      { options: ["challenge", "holiday", "reward", "secret"], answer: 0, explain: "'the central political challenge' = le défi politique central." },
      { options: ["adapt", "relax", "retire", "refuse"], answer: 0, explain: "'scrambling to adapt' = se démènent pour s'adapter." },
      { options: ["replicate", "buy", "break", "count"], answer: 0, explain: "'machines cannot replicate' = les machines ne peuvent reproduire." },
      { options: ["premium", "loss", "standstill", "distance"], answer: 0, explain: "Idiome 'at a premium' = très recherché/prisé." },
      { options: ["process", "reward", "holiday", "rumour"], answer: 0, explain: "'a slow and costly process' = un processus lent et coûteux." },
      { options: ["faster", "slower", "quieter", "cheaper"], answer: 0, explain: "'advancing far faster than' = progresse bien plus vite que." },
      { options: ["option", "error", "insult", "accident"], answer: 0, explain: "'not an option' = pas une option." },
      { options: ["collaborate", "compete", "hide", "retire"], answer: 0, explain: "'collaborate alongside machines' = collaborer avec les machines." },
    ],
  },
  {
    id: "voc5",
    theme: "Social / Économique",
    title: "The housing crisis",
    text: `In cities across the world, the dream of owning a home is slipping {0} reach. Prices have risen far {1} than wages, and even renting now {2} an ever-larger share of people's income. For an entire generation, secure housing has become a {3} luxury.

The causes are {4} and tangled. In many places, the supply of new homes has simply failed to {5} pace with demand. Restrictive planning rules {6} construction, while wealthy investors {7} up properties as assets, leaving some flats empty in the middle of a housing {8}.

The consequences {9} far beyond inconvenience. Young people {10} starting families, workers cannot afford to live near their jobs, and homelessness has {11} in the richest cities on earth. When housing {12} so much income, there is little left to {13} or spend elsewhere.

Governments have tried a {14} of remedies, with mixed results. Rent controls can {15} tenants in the short term but may {16} landlords from maintaining or building homes. Subsidies risk simply {17} prices higher if supply does not {18} as well.

A growing number of experts argue that the only lasting {19} is to build, and build a lot. Yet new construction often {20} fierce local opposition from residents anxious to {21} the character of their neighbourhoods, a phenomenon sometimes {22} as NIMBYism.

Others point to deeper {23} questions. Should housing be treated mainly as an {24} to be traded for profit, or as a basic human {25}? The answer a society gives tends to {26} the policies it is willing to {27}.

What is certain is that ignoring the problem will only {28} it. A roof over one's head is not a {29}; it is a foundation on which everything else depends.`,
    blanks: [
      { options: ["beyond", "within", "under", "across"], answer: 0, explain: "'beyond reach' = hors de portée." },
      { options: ["faster", "slower", "quieter", "cheaper"], answer: 0, explain: "'risen far faster than wages' = bien plus vite que les salaires." },
      { options: ["swallows", "saves", "prints", "returns"], answer: 0, explain: "'swallows a share of income' = engloutit une part des revenus." },
      { options: ["distant", "cheap", "daily", "useless"], answer: 0, explain: "'a distant luxury' = un luxe lointain/inaccessible." },
      { options: ["numerous", "simple", "secret", "recent"], answer: 0, explain: "'numerous and tangled' = nombreuses et enchevêtrées." },
      { options: ["keep", "lose", "set", "break"], answer: 0, explain: "'keep pace with demand' = suivre le rythme de la demande." },
      { options: ["hamper", "speed", "fund", "praise"], answer: 0, explain: "'hamper construction' = entraver la construction." },
      { options: ["snap", "clean", "give", "rent"], answer: 0, explain: "'snap up properties' = rafler des biens." },
      { options: ["shortage", "surplus", "party", "boom"], answer: 0, explain: "'a housing shortage' = une pénurie de logements." },
      { options: ["extend", "stop", "hide", "shrink"], answer: 0, explain: "'extend far beyond' = s'étendent bien au-delà." },
      { options: ["delay", "enjoy", "finish", "celebrate"], answer: 0, explain: "'delay starting families' = repoussent la fondation d'une famille." },
      { options: ["risen", "vanished", "frozen", "retired"], answer: 0, explain: "'homelessness has risen' = le sans-abrisme a augmenté." },
      { options: ["devours", "saves", "prints", "returns"], answer: 0, explain: "'housing devours income' = le logement dévore les revenus." },
      { options: ["save", "waste", "owe", "print"], answer: 0, explain: "'little left to save' = peu de marge pour épargner." },
      { options: ["range", "lack", "fear", "copy"], answer: 0, explain: "'a range of remedies' = tout un éventail de remèdes." },
      { options: ["protect", "evict", "tax", "ignore"], answer: 0, explain: "'protect tenants' = protéger les locataires." },
      { options: ["discourage", "encourage", "force", "pay"], answer: 0, explain: "'discourage landlords from' = dissuader les propriétaires de." },
      { options: ["pushing", "cutting", "hiding", "freezing"], answer: 0, explain: "'pushing prices higher' = faire grimper les prix." },
      { options: ["rise", "fall", "stop", "hide"], answer: 0, explain: "'if supply does not rise' = si l'offre n'augmente pas." },
      { options: ["solution", "problem", "rumour", "delay"], answer: 0, explain: "'the only lasting solution' = la seule solution durable." },
      { options: ["meets", "avoids", "funds", "praises"], answer: 0, explain: "'meets opposition' = se heurte à une opposition." },
      { options: ["preserve", "destroy", "sell", "tax"], answer: 0, explain: "'preserve the character' = préserver le caractère." },
      { options: ["known", "sold", "hidden", "paid"], answer: 0, explain: "'known as NIMBYism' = appelé NIMBYisme." },
      { options: ["ethical", "musical", "sporting", "weekly"], answer: 0, explain: "'ethical questions' = des questions éthiques." },
      { options: ["asset", "insult", "accident", "error"], answer: 0, explain: "'an asset to be traded' = un actif que l'on échange." },
      { options: ["right", "luxury", "habit", "secret"], answer: 0, explain: "'a basic human right' = un droit humain fondamental." },
      { options: ["shape", "hide", "copy", "delay"], answer: 0, explain: "'shape the policies' = façonner les politiques." },
      { options: ["pursue", "refuse", "forget", "mock"], answer: 0, explain: "'willing to pursue' = prête à mener/poursuivre." },
      { options: ["worsen", "solve", "hide", "delay"], answer: 0, explain: "'will only worsen it' = ne fera qu'aggraver." },
      { options: ["luxury", "foundation", "secret", "reward"], answer: 0, explain: "'not a luxury' = pas un luxe (mais un fondement)." },
    ],
  },
  {
    id: "voc6",
    theme: "Social / Culturel",
    title: "The overtourism dilemma",
    text: `For decades, mass tourism was {0} as an unmixed blessing, a reliable source of jobs and foreign {1}. Lately, however, a growing number of destinations have begun to {2} under the sheer weight of visitors, a problem now widely known as {3}.

The symptoms are hard to {4}. Historic centres are so {5} that residents can barely move; rents {6} as flats are converted into holiday lets; and fragile monuments {7} under millions of footsteps. Cities that once {8} tourists are now learning to fear them.

Locals increasingly {9} that their neighbourhoods have been turned into theme parks. Bakeries and hardware shops give way to souvenir stalls, and the rhythms of ordinary life are {10} by the constant churn of {11} crowds. What was once a community starts to feel like a stage {12} for outsiders.

Authorities are experimenting with ways to {13} the flow. Some cities {14} a tax on overnight visitors; others {15} the number of cruise ships or ban new hotels. A few have even launched campaigns {16} tourists to behave, or to visit at quieter times of {17}.

The industry, naturally, is {18}. Tourism supports countless livelihoods, and heavy-handed restrictions risk {19} away the very income a city depends on. The challenge is to {20} visitor numbers without {21} the goose that lays the golden egg.

Part of the answer may {22} in spreading tourists more evenly. Encouraging travel to lesser-known regions can {23} pressure on hotspots while bringing money to areas that genuinely {24} it. Promoting respect for local customs also {25} a difference.

Ultimately, overtourism forces a hard {26}: how many visitors a place can {27} before the very things that drew them are {28}. Getting that balance wrong risks killing, slowly, the destinations we claim to {29}.`,
    blanks: [
      { options: ["hailed", "feared", "ignored", "taxed"], answer: 0, explain: "'hailed as a blessing' = salué comme une bénédiction." },
      { options: ["currency", "language", "food", "music"], answer: 0, explain: "'foreign currency' = des devises étrangères." },
      { options: ["buckle", "relax", "sing", "grow"], answer: 0, explain: "'buckle under the weight' = ployer sous le poids." },
      { options: ["overtourism", "recession", "migration", "inflation"], answer: 0, explain: "'known as overtourism' = le surtourisme." },
      { options: ["ignore", "count", "sell", "build"], answer: 0, explain: "'hard to ignore' = difficiles à ignorer." },
      { options: ["crowded", "empty", "quiet", "clean"], answer: 0, explain: "'so crowded' = si bondés." },
      { options: ["soar", "fall", "freeze", "vanish"], answer: 0, explain: "'rents soar' = les loyers flambent." },
      { options: ["crumble", "shine", "grow", "relax"], answer: 0, explain: "'monuments crumble' = les monuments s'effritent." },
      { options: ["welcomed", "feared", "taxed", "copied"], answer: 0, explain: "'once welcomed tourists' = accueillaient jadis les touristes." },
      { options: ["complain", "boast", "dream", "sing"], answer: 0, explain: "'complain that' = se plaignent que." },
      { options: ["disrupted", "improved", "praised", "frozen"], answer: 0, explain: "'rhythms are disrupted' = les rythmes sont perturbés." },
      { options: ["passing", "local", "loyal", "silent"], answer: 0, explain: "'passing crowds' = des foules de passage." },
      { options: ["set", "sold", "closed", "built"], answer: 0, explain: "'a stage set for outsiders' = un décor planté pour les visiteurs." },
      { options: ["manage", "ignore", "celebrate", "copy"], answer: 0, explain: "'manage the flow' = gérer le flux." },
      { options: ["impose", "refuse", "hide", "repay"], answer: 0, explain: "'impose a tax' = instaurer une taxe." },
      { options: ["cap", "raise", "welcome", "ignore"], answer: 0, explain: "'cap the number' = plafonner le nombre." },
      { options: ["urging", "forbidding", "paying", "thanking"], answer: 0, explain: "'campaigns urging tourists to' = des campagnes exhortant les touristes à." },
      { options: ["year", "day", "money", "life"], answer: 0, explain: "'quieter times of year' = les périodes plus calmes de l'année." },
      { options: ["alarmed", "delighted", "silent", "bored"], answer: 0, explain: "'the industry is alarmed' = le secteur est inquiet." },
      { options: ["driving", "bringing", "paying", "saving"], answer: 0, explain: "'driving away the income' = faire fuir les revenus." },
      { options: ["curb", "boost", "ignore", "copy"], answer: 0, explain: "'curb visitor numbers' = freiner la fréquentation." },
      { options: ["killing", "feeding", "raising", "praising"], answer: 0, explain: "Idiome 'kill the goose that lays the golden egg' = tuer la poule aux œufs d'or." },
      { options: ["lie", "refuse", "fail", "hide"], answer: 0, explain: "'the answer may lie in' = la réponse réside peut-être dans." },
      { options: ["ease", "raise", "ignore", "double"], answer: 0, explain: "'ease pressure' = soulager la pression." },
      { options: ["need", "reject", "tax", "hide"], answer: 0, explain: "'areas that genuinely need it' = des régions qui en ont vraiment besoin." },
      { options: ["makes", "breaks", "takes", "hides"], answer: 0, explain: "Idiome 'makes a difference' = change les choses." },
      { options: ["question", "holiday", "reward", "rumour"], answer: 0, explain: "'a hard question' = une question difficile." },
      { options: ["absorb", "invent", "tax", "copy"], answer: 0, explain: "'how many visitors a place can absorb' = combien de visiteurs un lieu peut absorber." },
      { options: ["destroyed", "improved", "praised", "copied"], answer: 0, explain: "'are destroyed' = sont détruites." },
      { options: ["love", "hate", "tax", "sell"], answer: 0, explain: "'destinations we claim to love' = les destinations qu'on prétend aimer." },
    ],
  },
  {
    id: "voc7",
    theme: "Économique",
    title: "Towards a cashless society",
    text: `In a growing number of countries, the {0} of physical money is accelerating. Shoppers tap cards or phones, bills are paid with a {1}, and some cafés no longer {2} coins at all. The so-called cashless society, once a {3} prediction, is quietly arriving.

The advantages are easy to {4}. Digital payments are fast, convenient and leave a {5} that makes accounting and tax collection simpler. For businesses, handling less cash means {6} theft and lower costs. For travellers, a single phone can {7} the need for foreign notes.

Yet the retreat of cash also {8} real dangers. Millions of people — the elderly, the poor, the {9} — still depend on notes and coins for everyday {10}. A society that abandons cash too quickly risks {11} them behind and deepening existing {12}.

Privacy is another {13}. Every digital transaction leaves a record that can be {14}, analysed and sold. Cash, by contrast, is {15}: it allows people to buy and give without being {16}. To lose it entirely, critics warn, is to hand corporations and governments unprecedented {17} over our lives.

There is also the question of {18}. When payment systems depend on electricity and the internet, a power cut or cyber-attack can {19} an entire economy to a halt. Cash, however {20}, keeps working when the screens go {21}. Several central banks now {22} citizens to keep some notes for emergencies.

Partly in response, many of them are {23} so-called digital currencies of their own, hoping to {24} the convenience of electronic money with the public {25} that cash once provided. Whether such projects will {26} trust remains to be seen.

For now, the wisest course may be {27}: letting digital payments {28} without forcing cash to disappear, so that no one is {29} to choose between convenience and inclusion.`,
    blanks: [
      { options: ["decline", "return", "weight", "colour"], answer: 0, explain: "'the decline of cash' = le déclin de l'argent liquide." },
      { options: ["tap", "stamp", "letter", "coin"], answer: 0, explain: "'paid with a tap' = réglées d'un simple geste sans contact." },
      { options: ["accept", "print", "clean", "count"], answer: 0, explain: "'no longer accept coins' = n'acceptent plus les pièces." },
      { options: ["distant", "cheap", "daily", "local"], answer: 0, explain: "'a distant prediction' = une prédiction lointaine." },
      { options: ["see", "hide", "tax", "break"], answer: 0, explain: "'easy to see' = faciles à percevoir." },
      { options: ["trail", "gift", "hole", "coin"], answer: 0, explain: "'leave a trail' = laisser une trace." },
      { options: ["less", "more", "free", "fresh"], answer: 0, explain: "'less theft' = moins de vols." },
      { options: ["remove", "create", "tax", "hide"], answer: 0, explain: "'remove the need for' = supprimer le besoin de." },
      { options: ["carries", "solves", "hides", "sells"], answer: 0, explain: "'carries dangers' = comporte des dangers." },
      { options: ["unbanked", "wealthy", "famous", "retired"], answer: 0, explain: "'the unbanked' = les personnes sans compte bancaire." },
      { options: ["needs", "jokes", "secrets", "holidays"], answer: 0, explain: "'everyday needs' = les besoins quotidiens." },
      { options: ["leaving", "helping", "paying", "calling"], answer: 0, explain: "'leaving them behind' = les laisser de côté." },
      { options: ["inequalities", "savings", "holidays", "profits"], answer: 0, explain: "'deepening inequalities' = creuser les inégalités." },
      { options: ["concern", "reward", "holiday", "rumour"], answer: 0, explain: "'another concern' = une autre préoccupation." },
      { options: ["tracked", "sung", "cooked", "planted"], answer: 0, explain: "'can be tracked' = peut être pisté/suivi." },
      { options: ["anonymous", "famous", "heavy", "digital"], answer: 0, explain: "'cash is anonymous' = le liquide est anonyme." },
      { options: ["watched", "paid", "thanked", "taxed"], answer: 0, explain: "'without being watched' = sans être surveillé." },
      { options: ["power", "respect", "silence", "profit"], answer: 0, explain: "'unprecedented power over our lives' = un pouvoir inédit sur nos vies." },
      { options: ["resilience", "colour", "fashion", "taste"], answer: 0, explain: "'the question of resilience' = la question de la résilience." },
      { options: ["bring", "raise", "praise", "copy"], answer: 0, explain: "'bring an economy to a halt' = paralyser une économie." },
      { options: ["humble", "loud", "modern", "digital"], answer: 0, explain: "'however humble' = aussi modeste soit-il." },
      { options: ["dark", "bright", "loud", "green"], answer: 0, explain: "'when the screens go dark' = quand les écrans s'éteignent." },
      { options: ["urge", "forbid", "pay", "mock"], answer: 0, explain: "'urge citizens to' = invitent les citoyens à." },
      { options: ["developing", "banning", "hiding", "selling"], answer: 0, explain: "'developing digital currencies' = développent des monnaies numériques." },
      { options: ["combine", "destroy", "avoid", "reject"], answer: 0, explain: "'combine X with Y' = allier la commodité à la confiance." },
      { options: ["trust", "anger", "silence", "debt"], answer: 0, explain: "'the public trust' = la confiance du public." },
      { options: ["inspire", "lose", "tax", "hide"], answer: 0, explain: "'inspire trust' = inspirer confiance." },
      { options: ["balanced", "reckless", "secret", "violent"], answer: 0, explain: "'a balanced course' = une voie équilibrée." },
      { options: ["grow", "collapse", "freeze", "vanish"], answer: 0, explain: "'letting payments grow' = laisser les paiements se développer." },
      { options: ["forced", "invited", "paid", "allowed"], answer: 0, explain: "'no one is forced to choose' = personne n'est contraint de choisir." },
    ],
  },
  {
    id: "voc8",
    theme: "Environnement / Politique",
    title: "The energy transition",
    text: `The shift away from fossil fuels is {0} faster than almost anyone predicted a decade ago. The cost of solar panels and wind turbines has {1} so dramatically that, in much of the world, renewable electricity is now the {2} option, not merely the green one.

This transformation is {3} by a powerful mix of forces: alarm over climate change, advances in {4}, and governments eager to reduce their {5} on imported energy. Money that once flowed into oil and gas is increasingly being {6} towards clean alternatives.

The transition, however, is far from {7}. The sun does not always shine and the wind does not always {8}, so storing energy for when it is needed remains a major {9}. Building the batteries and grids required will demand vast quantities of minerals, whose extraction carries its own environmental {10}.

There are political {11} too. Communities built around coal mines or oil fields fear losing the jobs that {12} them for generations. Unless these workers are offered a credible {13}, resistance to change can {14} powerful and bitter. A fair transition, experts insist, must leave no region {15}.

Energy security has added fresh {16} to the debate. Recent crises have reminded governments how {17} it is to depend on a handful of suppliers for something so {18}. Domestic renewables, by contrast, cannot be {19} off by a hostile foreign power.

Critics caution against {20}, warning that fossil fuels will be needed for years yet and that moving too {21} could threaten supply. Supporters reply that every delay {22} the eventual cost and locks in further warming. The real risk, they argue, is moving too {23}, not too fast.

What once looked like a distant {24} has become an industrial race. The countries that {25} clean technology early stand to {26} enormous economic rewards, while latecomers may find themselves {27} on others all over again. The direction of travel, at least, is no longer in serious {28}; only the {29} remains uncertain.`,
    blanks: [
      { options: ["happening", "fading", "sleeping", "shrinking"], answer: 0, explain: "'happening faster than predicted' = se produit plus vite que prévu." },
      { options: ["fallen", "risen", "frozen", "vanished"], answer: 0, explain: "'has fallen dramatically' = a chuté de façon spectaculaire." },
      { options: ["cheapest", "slowest", "rarest", "loudest"], answer: 0, explain: "'the cheapest option' = l'option la moins chère." },
      { options: ["driven", "stopped", "hidden", "taxed"], answer: 0, explain: "'driven by forces' = porté par un ensemble de forces." },
      { options: ["technology", "fashion", "cooking", "sport"], answer: 0, explain: "'advances in technology' = des progrès technologiques." },
      { options: ["dependence", "respect", "silence", "profit"], answer: 0, explain: "'reduce their dependence on' = réduire leur dépendance à." },
      { options: ["channelled", "hidden", "wasted", "frozen"], answer: 0, explain: "'channelled towards' = redirigé/canalisé vers." },
      { options: ["simple", "famous", "cheap", "recent"], answer: 0, explain: "'far from simple' = loin d'être simple." },
      { options: ["blow", "stop", "rest", "sing"], answer: 0, explain: "'the wind does not always blow' = le vent ne souffle pas toujours." },
      { options: ["challenge", "reward", "holiday", "rumour"], answer: 0, explain: "'a major challenge' = un défi majeur." },
      { options: ["cost", "reward", "beauty", "silence"], answer: 0, explain: "'environmental cost' = un coût environnemental." },
      { options: ["obstacles", "holidays", "rewards", "jokes"], answer: 0, explain: "'political obstacles' = des obstacles politiques." },
      { options: ["sustained", "ignored", "taxed", "mocked"], answer: 0, explain: "'jobs that sustained them' = des emplois qui les ont fait vivre." },
      { options: ["alternative", "insult", "accident", "rumour"], answer: 0, explain: "'a credible alternative' = une alternative crédible." },
      { options: ["grow", "shrink", "relax", "vanish"], answer: 0, explain: "'resistance can grow powerful' = la résistance peut devenir puissante." },
      { options: ["behind", "ahead", "alone", "aside"], answer: 0, explain: "'leave no region behind' = ne laisser aucune région de côté." },
      { options: ["urgency", "colour", "humour", "silence"], answer: 0, explain: "'added fresh urgency' = a donné une nouvelle urgence." },
      { options: ["risky", "cheap", "funny", "easy"], answer: 0, explain: "'how risky it is' = à quel point c'est risqué." },
      { options: ["essential", "trivial", "colourful", "distant"], answer: 0, explain: "'something so essential' = une chose si essentielle." },
      { options: ["switched", "paid", "praised", "copied"], answer: 0, explain: "'switched off by a hostile power' = coupées par une puissance hostile." },
      { options: ["haste", "delay", "silence", "profit"], answer: 0, explain: "'caution against haste' = mettre en garde contre la précipitation." },
      { options: ["fast", "slow", "quietly", "cheaply"], answer: 0, explain: "'moving too fast' = aller trop vite." },
      { options: ["raises", "lowers", "hides", "splits"], answer: 0, explain: "'every delay raises the cost' = chaque retard accroît le coût." },
      { options: ["slowly", "quickly", "quietly", "cheaply"], answer: 0, explain: "'moving too slowly, not too fast' = trop lentement, pas trop vite." },
      { options: ["dream", "threat", "joke", "debt"], answer: 0, explain: "'a distant dream' = un rêve lointain." },
      { options: ["embrace", "reject", "fear", "tax"], answer: 0, explain: "'embrace clean technology' = adopter les technologies propres." },
      { options: ["reap", "lose", "hide", "owe"], answer: 0, explain: "'reap rewards' = récolter les bénéfices." },
      { options: ["dependent", "ahead", "silent", "wealthy"], answer: 0, explain: "'dependent on others' = dépendants des autres." },
      { options: ["doubt", "fashion", "colour", "profit"], answer: 0, explain: "'no longer in serious doubt' = ne fait plus vraiment débat." },
      { options: ["pace", "direction", "reward", "weather"], answer: 0, explain: "'only the pace remains uncertain' = seul le rythme reste incertain." },
    ],
  },
  {
    id: "voc9",
    theme: "Social",
    title: "Social media and the mind",
    text: `When social media first {0}, it promised to bring the world closer together. Friends separated by oceans could {1} in touch, and anyone with a phone could {2} their voice heard. Few {3} how profoundly these platforms would reshape not just communication, but the human mind.

Growing evidence now {4} heavy social-media use to anxiety, depression and loneliness, particularly among the {5}. Endlessly comparing their lives to the polished images of others, many young people develop a distorted {6} of what is normal. The very tool designed to {7} us can leave us feeling more {8} than ever.

Part of the problem lies in how these services are {9}. Their profits depend on {10} our attention for as long as possible, so algorithms are {11} to feed us whatever keeps us scrolling — often content that {12} outrage or insecurity. Time, on these platforms, is the product being {13}.

Defenders argue that the technology itself is {14}. Used in moderation, social media can {15} support, spread useful information and give a voice to those long {16}. The harm, they say, lies not in the tool but in how it is {17}.

Parents and schools are struggling to {18}. Simply banning phones, many have found, rarely {19}; teenagers find ways around restrictions, and total bans can leave them {20} out socially. A more promising approach is to teach young people to use these platforms {21} and to recognise when they are being {22}.

Regulators, too, are slowly {23}. Some governments now require platforms to verify users' {24} or to switch off the most addictive features for minors. Whether such rules can keep {25} with fast-moving technology is far from {26}.

Few seriously propose {27} social media altogether. The challenge, rather, is to {28} its genuine benefits while {29} ourselves, and especially our children, from its sharpest edges.`,
    blanks: [
      { options: ["appeared", "vanished", "failed", "closed"], answer: 0, explain: "'when social media first appeared' = à ses débuts." },
      { options: ["stay", "fall", "break", "go"], answer: 0, explain: "'stay in touch' = rester en contact." },
      { options: ["make", "lose", "hide", "sell"], answer: 0, explain: "'make their voice heard' = faire entendre sa voix." },
      { options: ["imagined", "denied", "enjoyed", "copied"], answer: 0, explain: "'few imagined how' = peu imaginaient à quel point." },
      { options: ["links", "cures", "hides", "sells"], answer: 0, explain: "'links use to anxiety' = associe l'usage à l'anxiété." },
      { options: ["young", "wealthy", "retired", "famous"], answer: 0, explain: "'among the young' = chez les jeunes." },
      { options: ["picture", "colour", "sound", "price"], answer: 0, explain: "'a distorted picture' = une image déformée." },
      { options: ["connect", "divide", "tax", "copy"], answer: 0, explain: "'designed to connect us' = censé nous rapprocher." },
      { options: ["isolated", "relaxed", "wealthy", "famous"], answer: 0, explain: "'feeling more isolated' = se sentir plus isolé." },
      { options: ["designed", "sold", "closed", "cleaned"], answer: 0, explain: "'how these services are designed' = comment ces services sont conçus." },
      { options: ["capturing", "freeing", "paying", "saving"], answer: 0, explain: "'capturing our attention' = capter notre attention." },
      { options: ["tuned", "banned", "cleaned", "sold"], answer: 0, explain: "'algorithms are tuned to' = les algorithmes sont réglés pour." },
      { options: ["provokes", "calms", "hides", "cures"], answer: 0, explain: "'content that provokes outrage' = du contenu qui suscite l'indignation." },
      { options: ["sold", "saved", "cleaned", "printed"], answer: 0, explain: "'the product being sold' = le produit vendu (notre temps)." },
      { options: ["neutral", "evil", "heavy", "digital"], answer: 0, explain: "'the technology is neutral' = la technologie est neutre." },
      { options: ["provide", "deny", "tax", "hide"], answer: 0, explain: "'provide support' = apporter du soutien." },
      { options: ["ignored", "praised", "paid", "famous"], answer: 0, explain: "'those long ignored' = ceux longtemps ignorés." },
      { options: ["used", "built", "sold", "cleaned"], answer: 0, explain: "'in how it is used' = dans la manière dont on l'utilise." },
      { options: ["cope", "relax", "retire", "boast"], answer: 0, explain: "'struggling to cope' = peinant à faire face." },
      { options: ["works", "fails", "sleeps", "sells"], answer: 0, explain: "'rarely works' = fonctionne rarement." },
      { options: ["left", "paid", "praised", "driven"], answer: 0, explain: "'left out socially' = mis à l'écart socialement." },
      { options: ["wisely", "blindly", "loudly", "cheaply"], answer: 0, explain: "'use platforms wisely' = utiliser ces plateformes intelligemment." },
      { options: ["manipulated", "rewarded", "praised", "paid"], answer: 0, explain: "'when they are being manipulated' = quand on les manipule." },
      { options: ["acting", "sleeping", "retiring", "failing"], answer: 0, explain: "'regulators are slowly acting' = les régulateurs agissent peu à peu." },
      { options: ["age", "mood", "colour", "accent"], answer: 0, explain: "'verify users' age' = vérifier l'âge des utilisateurs." },
      { options: ["pace", "quiet", "still", "warm"], answer: 0, explain: "'keep pace with' = suivre le rythme de." },
      { options: ["certain", "cheap", "local", "recent"], answer: 0, explain: "'far from certain' = loin d'être acquis." },
      { options: ["banning", "praising", "copying", "selling"], answer: 0, explain: "'propose banning' = proposent d'interdire." },
      { options: ["preserve", "destroy", "tax", "hide"], answer: 0, explain: "'preserve its benefits' = préserver ses bienfaits." },
      { options: ["protecting", "exposing", "selling", "blaming"], answer: 0, explain: "'protecting ourselves from' = nous protéger de." },
    ],
  },
  {
    id: "voc10",
    theme: "Scientifique / Économique",
    title: "The new space economy",
    text: `For most of the twentieth century, space was the {0} preserve of a handful of governments, a stage for national {1} and Cold War rivalry. Today, the picture could hardly be more {2}. Private companies launch most of the world's rockets, and a new {3} is racing to turn orbit into a marketplace.

The driving force has been a dramatic {4} in the cost of reaching space. Reusable rockets, once dismissed as {5}, now land themselves and fly again, slashing prices and {6} a flood of new ventures. Satellites that once cost a {7} can now be built small and cheap, and launched by the dozen.

The applications are already woven into daily {8}. The networks that {9} our phones, forecast our weather and {10} global shipping all depend on machines circling overhead. A growing share of the world's economy now {11}, quite literally, on space.

With opportunity, however, comes {12}. Decades of launches have left orbit cluttered with {13}: dead satellites and fragments hurtling at lethal {14}. A single collision can create thousands of new pieces, raising the {15} of a chain reaction that could render whole orbits {16}. Cleaning up this mess is technically hard and legally {17}.

Ownership is another unresolved {18}. Who has the {19} to mine an asteroid or claim a patch of the Moon? Existing treaties, written in a very different {20}, say surprisingly little, and the gap is widening as ambitions {21}.

Critics also question the {22}. Should vast fortunes be {23} on space tourism and distant colonies while urgent problems remain {24} on Earth? Supporters counter that space technology already {25} life below, from climate monitoring to medical {26}, and that exploration has always {27} humanity forward.

Whatever one's view, the genie is out of the {28}. Space has become an economic frontier, and the rules we write now will {29} who benefits for generations to come.`,
    blanks: [
      { options: ["exclusive", "cheap", "secret", "tiny"], answer: 0, explain: "'the exclusive preserve of' = la chasse gardée de." },
      { options: ["prestige", "weather", "debt", "silence"], answer: 0, explain: "'national prestige' = le prestige national." },
      { options: ["different", "similar", "boring", "cheap"], answer: 0, explain: "'could hardly be more different' = ne pourrait être plus différent." },
      { options: ["generation", "holiday", "silence", "debt"], answer: 0, explain: "'a new generation' = une nouvelle génération (d'entreprises)." },
      { options: ["fall", "rise", "weight", "colour"], answer: 0, explain: "'a dramatic fall in the cost' = une chute spectaculaire des coûts." },
      { options: ["impossible", "cheap", "ordinary", "legal"], answer: 0, explain: "'dismissed as impossible' = jugées impossibles." },
      { options: ["unleashing", "blocking", "hiding", "taxing"], answer: 0, explain: "'unleashing a flood of ventures' = déclenchant une vague de projets." },
      { options: ["fortune", "penny", "secret", "song"], answer: 0, explain: "'cost a fortune' = coûter une fortune." },
      { options: ["life", "weather", "music", "sport"], answer: 0, explain: "'daily life' = la vie quotidienne." },
      { options: ["connect", "break", "tax", "hide"], answer: 0, explain: "'networks that connect our phones' = les réseaux qui relient nos téléphones." },
      { options: ["guide", "sink", "tax", "copy"], answer: 0, explain: "'guide global shipping' = guident le transport maritime mondial." },
      { options: ["depends", "sleeps", "sits", "feeds"], answer: 0, explain: "'depends, quite literally, on space' = dépend, littéralement, de l'espace." },
      { options: ["risk", "profit", "silence", "colour"], answer: 0, explain: "'with opportunity comes risk' = à toute occasion s'attache un risque." },
      { options: ["debris", "treasure", "silence", "light"], answer: 0, explain: "'space debris' = des débris spatiaux." },
      { options: ["speeds", "prices", "colours", "silences"], answer: 0, explain: "'lethal speeds' = des vitesses mortelles." },
      { options: ["threat", "reward", "beauty", "silence"], answer: 0, explain: "'the threat of a chain reaction' = la menace d'une réaction en chaîne." },
      { options: ["unusable", "valuable", "crowded", "famous"], answer: 0, explain: "'render orbits unusable' = rendre des orbites inutilisables." },
      { options: ["murky", "simple", "cheap", "famous"], answer: 0, explain: "'legally murky' = juridiquement flou." },
      { options: ["question", "holiday", "reward", "rumour"], answer: 0, explain: "'an unresolved question' = une question non résolue." },
      { options: ["right", "money", "weather", "habit"], answer: 0, explain: "'the right to mine' = le droit d'exploiter." },
      { options: ["era", "colour", "weather", "mood"], answer: 0, explain: "'a very different era' = une époque très différente." },
      { options: ["grow", "shrink", "freeze", "vanish"], answer: 0, explain: "'as ambitions grow' = à mesure que les ambitions croissent." },
      { options: ["priorities", "weather", "scenery", "furniture"], answer: 0, explain: "'question the priorities' = remettre en cause les priorités." },
      { options: ["spent", "saved", "hidden", "printed"], answer: 0, explain: "'fortunes be spent on' = des fortunes dépensées pour." },
      { options: ["unsolved", "solved", "famous", "cheap"], answer: 0, explain: "'problems remain unsolved' = des problèmes restent non résolus." },
      { options: ["improves", "ignores", "taxes", "hides"], answer: 0, explain: "'technology improves life below' = la technologie améliore la vie ici-bas." },
      { options: ["advances", "bills", "holidays", "rumours"], answer: 0, explain: "'medical advances' = des avancées médicales." },
      { options: ["pushed", "held", "taxed", "copied"], answer: 0, explain: "'pushed humanity forward' = a fait progresser l'humanité." },
      { options: ["bottle", "box", "bag", "door"], answer: 0, explain: "Idiome 'the genie is out of the bottle' = on ne peut plus revenir en arrière." },
      { options: ["decide", "hide", "copy", "delay"], answer: 0, explain: "'will decide who benefits' = détermineront qui en profitera." },
    ],
  },
];

// Rattache à l'objet LANGUE si déjà présent (sinon langue.js lira window.LANGUE_VOCAB).
if (window.LANGUE) window.LANGUE.vocabulaire = window.LANGUE_VOCAB;
