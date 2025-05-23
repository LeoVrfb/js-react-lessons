function* monGenerateur() {
  yield 1;
  yield 2;
  yield 3;
}

// Exemple avec clés propres et héritées
function Personne() {
  this.nom = "John";
  this.age = 30;
}

Personne.prototype.pays = "France";

const personne = new Personne();

const keys = Object.keys(personne);
console.log(keys); // Résultat: ["nom", "age"]

const allKeys = [];
for (let key in personne) {
  allKeys.push(key);
}
console.log(allKeys); // Résultat: ["nom", "age", "pays"]