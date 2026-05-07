// Exercices SQL — chaque exo a une consigne, un schéma initial, et une vérification
// On utilise alasql côté client pour exécuter les requêtes
window.SQL_EXERCISES = [
  {
    id: "sql_q1",
    title: "Q1 — Jointure simple",
    consigne: "Affiche les jeux avec le nom du studio, triés par note décroissante. Colonnes attendues : titre, studio, genre, note_metascore.",
    setup: `
CREATE TABLE studio (studio_id INT, nom VARCHAR(100), pays VARCHAR(60), annee_creation INT);
CREATE TABLE jeu (jeu_id INT, studio_id INT, titre VARCHAR(120), genre VARCHAR(50), plateforme VARCHAR(50), date_sortie DATE, budget_euros DECIMAL, note_metascore INT);
INSERT INTO studio VALUES (1,'NovaPixel','France',2012),(2,'IronQuest','Espagne',2016),(3,'SkyForge Interactive','Canada',2010);
INSERT INTO jeu VALUES (1,1,'Neon Kart','Course arcade','PC','2024-03-15',450000,78),(2,1,'Shadow Tactics VR','Action VR','VR','2025-01-20',1200000,84),(3,2,'Dungeon Chef','RPG casual','Switch','2023-10-05',300000,73),(4,2,'Mecha Arena X','Combat multijoueur','PC','2024-11-12',950000,81),(5,3,'Eco Colony','Simulation','PC','2022-06-18',700000,88);
`,
    expectedRows: 5,
    expectedFirst: { titre: "Eco Colony", note_metascore: 88 },
    solution: `SELECT j.titre, s.nom AS studio, j.genre, j.note_metascore
FROM jeu j JOIN studio s ON s.studio_id = j.studio_id
ORDER BY j.note_metascore DESC;`,
    hint: "JOIN sur studio_id, ORDER BY note DESC.",
  },
  {
    id: "sql_q2",
    title: "Q2 — Agrégation",
    consigne: "Calcule le revenu total et les copies vendues par jeu. Colonnes : titre, total_copies, revenu_total. Trie par revenu décroissant.",
    setup: `
CREATE TABLE jeu (jeu_id INT, titre VARCHAR(120));
CREATE TABLE vente (vente_id INT, jeu_id INT, mois DATE, region VARCHAR(40), copies_vendues INT, revenu_euros DECIMAL);
INSERT INTO jeu VALUES (1,'Neon Kart'),(2,'Shadow Tactics VR'),(3,'Dungeon Chef'),(4,'Mecha Arena X'),(5,'Eco Colony');
INSERT INTO vente VALUES
(1,1,'2024-04-01','Europe',18000,360000),(2,1,'2024-04-01','Amerique Nord',12000,240000),(3,1,'2024-05-01','Europe',9000,180000),
(4,2,'2025-02-01','Europe',15000,675000),(5,2,'2025-02-01','Amerique Nord',11000,495000),(6,2,'2025-03-01','Asie',6000,270000),
(7,3,'2023-11-01','Europe',22000,330000),(8,3,'2023-11-01','Asie',15000,225000),
(9,4,'2024-12-01','Europe',14000,560000),(10,4,'2024-12-01','Amerique Nord',13000,520000),(11,4,'2025-01-01','Asie',8000,320000),
(12,5,'2022-07-01','Europe',26000,780000),(13,5,'2022-07-01','Amerique Nord',19000,570000),(14,5,'2022-08-01','Asie',17000,510000);
`,
    expectedRows: 5,
    expectedFirst: { titre: "Eco Colony" },
    solution: `SELECT j.titre, SUM(v.copies_vendues) AS total_copies, SUM(v.revenu_euros) AS revenu_total
FROM jeu j JOIN vente v ON v.jeu_id=j.jeu_id
GROUP BY j.jeu_id, j.titre ORDER BY revenu_total DESC;`,
    hint: "GROUP BY + SUM. N'oublie pas ORDER BY revenu_total DESC.",
  },
  {
    id: "sql_q3",
    title: "Q3 — Filtre WHERE + JOIN",
    consigne: "Liste les employés ayant travaillé > 500 heures sur au moins un jeu. Colonnes : nom, specialite, titre, heures_travaillees.",
    setup: `
CREATE TABLE employe (employe_id INT, nom VARCHAR(100), specialite VARCHAR(60), niveau VARCHAR(20), salaire_annuel DECIMAL);
CREATE TABLE jeu (jeu_id INT, titre VARCHAR(120));
CREATE TABLE participation (jeu_id INT, employe_id INT, role_projet VARCHAR(60), heures_travaillees INT);
INSERT INTO employe VALUES (1,'Amina Benali','Game Design','Senior',52000),(2,'Lucas Moreau','Gameplay Programming','Confirme',48000),(3,'Sofia Garcia','3D Art','Senior',51000),(4,'Hugo Martin','Data Analytics','Junior',39000),(5,'Emma Chen','AI Programming','Lead',68000),(6,'Nora Diallo','UX/UI','Confirme',44000),(7,'Mateo Ruiz','Sound Design','Junior',36000),(8,'Chloe Laurent','QA Testing','Confirme',41000);
INSERT INTO jeu VALUES (1,'Neon Kart'),(2,'Shadow Tactics VR'),(3,'Dungeon Chef'),(4,'Mecha Arena X'),(5,'Eco Colony');
INSERT INTO participation VALUES (1,1,'Lead Game Designer',420),(1,2,'Gameplay Developer',510),(2,2,'VR Gameplay Developer',620),(2,3,'3D Artist',540),(2,5,'AI Lead',480),(4,2,'Network Gameplay Developer',580),(4,3,'Mecha Artist',430),(4,5,'AI Combat Lead',610),(5,5,'AI Simulation Lead',530);
`,
    expectedRows: 6,
    solution: `SELECT e.nom, e.specialite, j.titre, p.heures_travaillees
FROM participation p JOIN employe e ON e.employe_id=p.employe_id JOIN jeu j ON j.jeu_id=p.jeu_id
WHERE p.heures_travaillees > 500 ORDER BY p.heures_travaillees DESC;`,
    hint: "WHERE p.heures_travaillees > 500.",
  },
  {
    id: "sql_q4",
    title: "Q4 — HAVING",
    consigne: "Trouve les jeux dont le revenu total dépasse leur budget. Colonnes : titre, budget_euros, revenu_total, marge_brute_estimee.",
    setup: `
CREATE TABLE jeu (jeu_id INT, titre VARCHAR(120), budget_euros DECIMAL);
CREATE TABLE vente (vente_id INT, jeu_id INT, revenu_euros DECIMAL);
INSERT INTO jeu VALUES (1,'Neon Kart',450000),(2,'Shadow Tactics VR',1200000),(3,'Dungeon Chef',300000),(4,'Mecha Arena X',950000),(5,'Eco Colony',700000);
INSERT INTO vente VALUES (1,1,360000),(2,1,240000),(3,1,180000),(4,2,675000),(5,2,495000),(6,2,270000),(7,3,330000),(8,3,225000),(9,4,560000),(10,4,520000),(11,4,320000),(12,5,780000),(13,5,570000),(14,5,510000);
`,
    expectedRows: 4,
    solution: `SELECT j.titre, j.budget_euros, SUM(v.revenu_euros) AS revenu_total, SUM(v.revenu_euros)-j.budget_euros AS marge_brute_estimee
FROM jeu j JOIN vente v ON v.jeu_id=j.jeu_id
GROUP BY j.jeu_id, j.titre, j.budget_euros HAVING SUM(v.revenu_euros) > j.budget_euros
ORDER BY marge_brute_estimee DESC;`,
    hint: "HAVING SUM(v.revenu_euros) > j.budget_euros.",
  },
  {
    id: "sql_q5",
    title: "Q5 — DISTINCT + COUNT",
    consigne: "Compte le nombre de jeux par genre. Colonnes : genre, nb_jeux. Trie par nb_jeux décroissant.",
    setup: `
CREATE TABLE jeu (jeu_id INT, titre VARCHAR(120), genre VARCHAR(50));
INSERT INTO jeu VALUES (1,'Neon Kart','Course arcade'),(2,'Shadow Tactics VR','Action VR'),(3,'Dungeon Chef','RPG casual'),(4,'Mecha Arena X','Combat multijoueur'),(5,'Eco Colony','Simulation'),(6,'Pixel Hero','Course arcade'),(7,'Mystic Realms','RPG casual');
`,
    expectedRows: 5,
    solution: `SELECT genre, COUNT(*) AS nb_jeux FROM jeu GROUP BY genre ORDER BY nb_jeux DESC;`,
    hint: "GROUP BY genre, COUNT(*).",
  },
];

// Exercices Python — exécutés via Pyodide
window.PY_EXERCISES = [
  {
    id: "py_1",
    title: "List comprehension",
    consigne: "Crée une liste `carres` contenant les carrés des nombres de 1 à 10.",
    starter: "# Ta réponse :\ncarres = ",
    check: `assert carres == [i*i for i in range(1,11)], "Mauvaise liste"`,
    solution: "carres = [i*i for i in range(1, 11)]",
    hint: "[expr for x in range(...)]",
  },
  {
    id: "py_2",
    title: "Dictionnaire",
    consigne: "Crée un dict `etudiant` avec les clés 'nom' (Wilfrid), 'master' (M1) et 'specialite' (IA).",
    starter: "etudiant = ",
    check: `assert isinstance(etudiant, dict) and etudiant.get('nom')=='Wilfrid' and etudiant.get('master')=='M1' and etudiant.get('specialite')=='IA'`,
    solution: "etudiant = {'nom':'Wilfrid','master':'M1','specialite':'IA'}",
    hint: "{cle: valeur, ...}",
  },
  {
    id: "py_3",
    title: "Fonction",
    consigne: "Écris une fonction `succes(revenu, budget)` qui retourne True si revenu > budget, False sinon.",
    starter: "def succes(revenu, budget):\n    pass",
    check: `assert succes(100,50)==True and succes(50,100)==False and succes(50,50)==False`,
    solution: "def succes(revenu, budget):\n    return revenu > budget",
  },
  {
    id: "py_4",
    title: "Filtrer une liste",
    consigne: "Liste `nums = [3, 8, 1, 12, 5, 20, 7]`. Crée `gros` qui ne contient que les éléments > 5.",
    starter: "nums = [3, 8, 1, 12, 5, 20, 7]\ngros = ",
    check: `assert gros == [8, 12, 20, 7]`,
    solution: "gros = [n for n in nums if n > 5]",
  },
  {
    id: "py_5",
    title: "Somme et moyenne",
    consigne: "À partir de `notes = [12, 14, 16, 10, 18]`, calcule `moyenne` (un float).",
    starter: "notes = [12, 14, 16, 10, 18]\nmoyenne = ",
    check: `assert abs(moyenne - 14.0) < 0.001`,
    solution: "moyenne = sum(notes) / len(notes)",
  },
];

// Exercices MongoDB shell — vérification textuelle
window.MONGO_EXERCISES = [
  {
    id: "mongo_1",
    title: "Find avec projection",
    consigne: "Affiche les jeux PC avec leur titre, le nom du studio et la note. Cache l'_id.",
    expected: `db.jeux_catalogue.find({plateforme:"PC"},{titre:1,"studio.nom":1,note_metascore:1,_id:0})`,
    solution: `db.jeux_catalogue.find({plateforme:"PC"},{titre:1,"studio.nom":1,note_metascore:1,_id:0})`,
  },
  {
    id: "mongo_2",
    title: "Aggregate $sum",
    consigne: "Calcule le revenu total par jeu via $project + $sum sur ventes_mensuelles.revenu_euros.",
    expected: `$sum: "$ventes_mensuelles.revenu_euros"`,
    solution: `db.jeux_catalogue.aggregate([{$project:{titre:1, revenu_total:{$sum:"$ventes_mensuelles.revenu_euros"}}},{$sort:{revenu_total:-1}}])`,
  },
  {
    id: "mongo_3",
    title: "$unwind + $group",
    consigne: "Calcule le revenu par région tous jeux confondus. Indice : $unwind sur ventes_mensuelles puis $group _id région.",
    expected: `$unwind`,
    expected2: `$group`,
    solution: `db.jeux_catalogue.aggregate([{$unwind:"$ventes_mensuelles"},{$group:{_id:"$ventes_mensuelles.region",revenu_region:{$sum:"$ventes_mensuelles.revenu_euros"}}},{$sort:{revenu_region:-1}}])`,
  },
];
