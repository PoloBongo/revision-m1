// Flashcards — recto/verso + champ optionnel `code` (HTML autorisé via <pre><code>)
window.FLASHCARDS = {
  uml: [
    { front: "Use Case Diagram", back: "Modélise les interactions entre acteurs et fonctionnalités du système." },
    { front: "Diagramme de classes", back: "Représente la structure statique : classes, attributs, méthodes, relations." },
    { front: "Diagramme de séquence", back: "Montre la chronologie des messages échangés entre objets." },
    { front: "Diagramme d'activité", back: "Décrit un workflow ou un algorithme étape par étape." },
    { front: "BPMN", back: "Business Process Model and Notation — modélisation de processus métier." },
    { front: "SWOT", back: "Strengths, Weaknesses, Opportunities, Threats — analyse stratégique." },
  ],
  planif: [
    { front: "WBS", back: "Work Breakdown Structure — découpage hiérarchique des tâches." },
    { front: "PBS", back: "Product Breakdown Structure — découpage des livrables." },
    { front: "OBS", back: "Organization Breakdown Structure — qui fait quoi." },
    { front: "RBS", back: "Resource (ou Risk) Breakdown Structure." },
    { front: "Chemin critique", back: "Plus longue chaîne de tâches sans marge — détermine la durée minimale du projet." },
    { front: "Marge libre", back: "Retard max d'une tâche sans impacter la suivante." },
    { front: "GANTT", back: "Diagramme à barres représentant les tâches dans le temps." },
    { front: "PERT", back: "Réseau de tâches avec dépendances et durées, pour calculer le chemin critique." },
  ],
  cycles: [
    { front: "Cycle en V", back: "Phases descendantes (analyse → code) symétriques aux phases montantes (tests)." },
    { front: "Cycle en cascade", back: "Phases séquentielles, pas de retour arrière prévu." },
    { front: "Cycle en spirale", back: "Itérations successives avec analyse de risques entre chacune." },
    { front: "Agile", back: "Itérations courtes, adaptation au changement, livrables fréquents." },
    { front: "MOA", back: "Maître d'Ouvrage — le client / commanditaire." },
    { front: "MOE", back: "Maître d'Œuvre — celui qui réalise (souvent prestataire)." },
    { front: "Triangle du projet", back: "Budget — Portée — Délai. Modifier l'un impacte les autres." },
    { front: "Scrum Master", back: "Facilite le process, lève les obstacles. ≠ chef de projet hiérarchique." },
  ],
  management: [
    { front: "Délégation", back: "Confier une tâche avec autonomie + responsabilité, en gardant le suivi." },
    { front: "Conduite de réunion", back: "Ordre du jour, time-boxing, animateur, compte-rendu." },
    { front: "Action corrective", back: "Mesure prise pour réduire un écart constaté (budget, délai)." },
  ],
  ethique: [
    { front: "RGPD", back: "Règlement Général sur la Protection des Données — UE, mai 2018." },
    { front: "DPO", back: "Data Protection Officer — délégué à la protection des données." },
    { front: "Droit à l'oubli", back: "Droit pour un individu de demander la suppression de ses données." },
    { front: "Notification fuite (CNIL)", back: "Sous 72h après prise de connaissance de la violation." },
    { front: "Green coding", back: "Pratiques de dev visant à réduire l'empreinte écologique du logiciel." },
    { front: "Donnée sensible", back: "Origine, opinion politique, santé, biométrie, orientation sexuelle, etc." },
  ],
  erp: [
    { front: "ERP / PGI", back: "Progiciel intégré couvrant plusieurs fonctions (compta, RH, prod, ventes...)." },
    { front: "Acteurs ERP", back: "SAP, Oracle, Microsoft Dynamics, Sage, Odoo." },
  ],
  java: [
    { front: "Encapsulation",
      back: "Cacher les attributs (private) derrière des accesseurs (get/set).",
      code: `public class Compte {
  private double solde;
  public double getSolde() { return solde; }
  public void deposer(double m) {
    if (m > 0) solde += m;
  }
}`
    },
    { front: "Héritage",
      back: "Une classe fille hérite des attributs/méthodes de sa classe mère.",
      code: `class Animal { void crier() { ... } }
class Chien extends Animal {
  @Override
  void crier() { System.out.println("Wouf"); }
}`
    },
    { front: "Polymorphisme",
      back: "Un même nom de méthode → plusieurs comportements selon le type.",
      code: `Animal a = new Chien();
a.crier();   // → "Wouf"  (résolu à l'exécution)`
    },
    { front: "Interface",
      back: "Contrat de méthodes à implémenter, sans code (sauf default).",
      code: `interface Payable {
  double montant();
  default String resume() { return "Total: " + montant(); }
}
class Facture implements Payable {
  public double montant() { return 99.0; }
}`
    },
    { front: "JDBC",
      back: "Java DataBase Connectivity — API standard pour accéder aux SGBD.",
      code: `try (Connection c = DriverManager.getConnection(url, u, p);
     PreparedStatement ps = c.prepareStatement(
       "SELECT * FROM jeu WHERE genre = ?")) {
  ps.setString(1, "RPG");
  ResultSet rs = ps.executeQuery();
}`
    },
    { front: "Servlet",
      back: "Composant Java côté serveur traitant des requêtes HTTP.",
      code: `@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req,
                       HttpServletResponse res) throws IOException {
    res.getWriter().write("Bonjour");
  }
}`
    },
    { front: "JSP", back: "JavaServer Pages — pages HTML avec code Java embarqué.",
      code: `<%@ page language="java" %>
<html><body>
  <h1>Bonjour <%= request.getParameter("nom") %></h1>
</body></html>`
    },
    { front: "JSE vs JEE", back: "JSE = standard. JEE = entreprise (servlets, EJB, JSP, JPA)." },
  ],
  python: [
    { front: "Liste vs Tuple", back: "Liste = mutable []. Tuple = immutable ().",
      code: `l = [1, 2, 3]; l.append(4)        # OK
t = (1, 2, 3); t[0] = 9            # TypeError`
    },
    { front: "Dictionnaire", back: "Structure clé:valeur, accès O(1).",
      code: `jeu = {"titre": "Hollow Knight", "note": 90}
jeu["studio"] = "Team Cherry"
for k, v in jeu.items(): print(k, v)`
    },
    { front: "List comprehension", back: "[expr for x in iterable if cond] — création concise de liste.",
      code: `notes = [85, 60, 92, 40, 78]
hauts = [n for n in notes if n >= 80]
# → [85, 92]`
    },
    { front: "pip", back: "Gestionnaire de paquets Python.",
      code: `pip install pandas scikit-learn
pip freeze > requirements.txt`
    },
    { front: "pandas", back: "Lib de manipulation de données tabulaires (DataFrame).",
      code: `import pandas as pd
df = pd.read_csv("ventes.csv")
df.groupby("region")["revenu"].sum()`
    },
    { front: "scikit-learn", back: "Lib de machine learning (classification, régression, clustering).",
      code: `from sklearn.ensemble import RandomForestClassifier
m = RandomForestClassifier(n_estimators=100)
m.fit(X_train, y_train)
m.score(X_test, y_test)`
    },
  ],
  php: [
    { front: "REST", back: "Representational State Transfer — API basée sur HTTP + verbes.",
      code: `GET    /api/jeux         → liste
POST   /api/jeux         → crée
PUT    /api/jeux/42      → met à jour
DELETE /api/jeux/42      → supprime`
    },
    { front: "MVC", back: "Modèle-Vue-Contrôleur — séparation des responsabilités.",
      code: `// Contrôleur
public function show($id) {
  $jeu = Jeu::find($id);          // Modèle
  return view('jeu.detail', $jeu); // Vue
}`
    },
    { front: "CRUD", back: "Create, Read, Update, Delete.",
      code: `INSERT INTO jeu (...) VALUES (...);   -- Create
SELECT * FROM jeu WHERE id = 1;       -- Read
UPDATE jeu SET note = 95 WHERE id=1;  -- Update
DELETE FROM jeu WHERE id = 1;         -- Delete`
    },
    { front: "PDO", back: "PHP Data Objects — couche d'abstraction d'accès aux BDD.",
      code: `$pdo = new PDO("mysql:host=localhost;dbname=app", $u, $p);
$stmt = $pdo->prepare("SELECT * FROM jeu WHERE genre = ?");
$stmt->execute(["RPG"]);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);`
    },
    { front: "JSON", back: "JavaScript Object Notation — format texte d'échange.",
      code: `{
  "titre": "Celeste",
  "tags": ["plateforme", "indie"],
  "note": 92
}`
    },
    { front: "CURL", back: "Client URL — bibliothèque pour faire des requêtes HTTP.",
      code: `$ch = curl_init("https://api.exemple.fr/jeux");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$json = curl_exec($ch);
curl_close($ch);`
    },
  ],
  sql: [
    { front: "PRIMARY KEY", back: "Identifie de manière unique chaque ligne. Non-NULL.",
      code: `CREATE TABLE jeu (
  jeu_id   INT PRIMARY KEY,
  titre    VARCHAR(100) NOT NULL
);`
    },
    { front: "FOREIGN KEY", back: "Référence la PK d'une autre table → intégrité référentielle.",
      code: `CREATE TABLE vente (
  vente_id INT PRIMARY KEY,
  jeu_id   INT,
  FOREIGN KEY (jeu_id) REFERENCES jeu(jeu_id)
);`
    },
    { front: "INNER JOIN", back: "Retourne uniquement les lignes ayant correspondance dans les 2 tables.",
      code: `SELECT j.titre, s.nom
FROM jeu j
INNER JOIN studio s ON j.studio_id = s.studio_id;`
    },
    { front: "LEFT JOIN", back: "Toutes les lignes de gauche + correspondances de droite (NULL sinon).",
      code: `SELECT j.titre, v.copies
FROM jeu j
LEFT JOIN vente v ON v.jeu_id = j.jeu_id;
-- jeux sans vente → copies = NULL`
    },
    { front: "GROUP BY", back: "Agrège les lignes par valeur d'une (ou +) colonne(s).",
      code: `SELECT genre, COUNT(*) AS nb, AVG(note_metascore) AS moy
FROM jeu
GROUP BY genre;`
    },
    { front: "HAVING", back: "Filtre APRÈS agrégation (vs WHERE qui filtre avant).",
      code: `SELECT genre, COUNT(*) AS nb
FROM jeu
GROUP BY genre
HAVING COUNT(*) >= 3;`
    },
    { front: "ON DELETE CASCADE", back: "Supprime automatiquement les lignes liées en cas de suppression du parent.",
      code: `CREATE TABLE vente (
  vente_id INT PRIMARY KEY,
  jeu_id   INT,
  FOREIGN KEY (jeu_id)
    REFERENCES jeu(jeu_id)
    ON DELETE CASCADE
);`
    },
    { front: "Trigger", back: "Procédure qui s'exécute automatiquement sur INSERT/UPDATE/DELETE.",
      code: `CREATE TRIGGER maj_total
AFTER INSERT ON vente
FOR EACH ROW
UPDATE jeu SET copies_totales = copies_totales + NEW.copies
WHERE jeu_id = NEW.jeu_id;`
    },
    { front: "Curseur PL/SQL", back: "Permet de parcourir ligne par ligne le résultat d'une requête.",
      code: `DECLARE
  CURSOR c IS SELECT titre FROM jeu;
  v_titre jeu.titre%TYPE;
BEGIN
  OPEN c;
  LOOP
    FETCH c INTO v_titre; EXIT WHEN c%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_titre);
  END LOOP;
  CLOSE c;
END;`
    },
  ],
  mongo: [
    { front: "Document", back: "Objet BSON/JSON, équivalent d'une ligne SQL mais avec structure libre.",
      code: `{
  "_id": ObjectId("..."),
  "titre": "Celeste",
  "studio": { "nom": "Maddy Makes" },
  "tags": ["plateforme", "indie"]
}`
    },
    { front: "Collection", back: "Ensemble de documents — équivalent d'une table.",
      code: `db.jeux_catalogue.insertOne({ titre: "Hades", note: 93 })
db.jeux_catalogue.find({ note: { $gte: 90 } })`
    },
    { front: "$match", back: "Filtre les documents dans un pipeline d'agrégation (≈ WHERE).",
      code: `db.jeux.aggregate([
  { $match: { genre: "RPG", note: { $gte: 85 } } }
])`
    },
    { front: "$group", back: "Agrège les documents par clé (≈ GROUP BY).",
      code: `db.jeux.aggregate([
  { $group: {
      _id: "$genre",
      moy_note: { $avg: "$note" },
      nb: { $sum: 1 }
  }}
])`
    },
    { front: "$unwind", back: "Décompose un tableau : un document par élément du tableau.",
      code: `// jeu = { titre: "X", tags: ["a","b"] }
db.jeux.aggregate([{ $unwind: "$tags" }])
// → { titre:"X", tags:"a" }, { titre:"X", tags:"b" }`
    },
    { front: "$lookup", back: "Jointure left outer entre 2 collections.",
      code: `db.jeux.aggregate([
  { $lookup: {
      from: "studios",
      localField: "studio_id",
      foreignField: "_id",
      as: "studio"
  }}
])`
    },
    { front: "Imbrication vs référence", back: "Embed les sous-documents lus ensemble. Référence si réutilisés ou trop volumineux.",
      code: `// Embed (1-1, 1-peu, lus ensemble)
{ titre: "X", studio: { nom: "Team Cherry" } }

// Référence (1-N volumineux ou partagé)
{ titre: "X", studio_id: ObjectId("...") }`
    },
  ],
  bigdata: [
    { front: "4V du Big Data", back: "Volume, Vélocité, Variété, Véracité." },
    { front: "Sharding", back: "Partitionnement horizontal des données sur plusieurs nœuds." },
    { front: "Clustering", back: "Ensemble de nœuds qui se répartissent la charge / réplication." },
    { front: "BDD orientée colonnes", back: "Cassandra, HBase — optimisée pour gros volumes analytiques." },
    { front: "BDD orientée graphes", back: "Neo4j — relations comme citoyens de première classe.",
      code: `// Cypher (Neo4j)
MATCH (j:Jeu)-[:DEVELOPPE_PAR]->(s:Studio {pays:"Japon"})
RETURN j.titre, s.nom`
    },
    { front: "BDD clé/valeur", back: "Redis, DynamoDB — accès ultra-rapide par clé.",
      code: `SET session:abc123 "{userId:42}" EX 3600
GET session:abc123`
    },
    { front: "MapReduce", back: "Paradigme : Map (transforme) + Reduce (agrège) sur cluster distribué.",
      code: `// Map :   (jeu) → (genre, 1)
// Reduce: (genre, [1,1,1,...]) → (genre, total)`
    },
  ],
  tp_gaming: [
    { front: "Tables du TP", back: "studio, jeu, employe, participation, vente." },
    { front: "PK de participation", back: "Composée : (jeu_id, employe_id).",
      code: `CREATE TABLE participation (
  jeu_id     INT,
  employe_id INT,
  role_projet VARCHAR(50),
  PRIMARY KEY (jeu_id, employe_id)
);`
    },
    { front: "Cible ML du TP", back: "succes = 1 si revenu_total > budget_euros, sinon 0.",
      code: `df["succes"] = (df["revenu_total"] > df["budget_euros"]).astype(int)`
    },
    { front: "Modèle utilisé", back: "RandomForestClassifier (scikit-learn).",
      code: `from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)`
    },
    { front: "OneHotEncoder", back: "Transforme variables catégorielles → colonnes binaires numériques.",
      code: `from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder(handle_unknown="ignore", sparse_output=False)
X_cat = enc.fit_transform(df[["genre", "plateforme"]])`
    },
    { front: "Pourquoi imbriquer studio (Mongo) ?", back: "Le studio est presque toujours affiché avec le jeu → évite une jointure fréquente.",
      code: `{
  "titre": "Hollow Knight",
  "studio": { "nom": "Team Cherry", "pays": "Australie" }
}`
    },
  ],
};
