
// L'objet Map en JavaScript est une collection d'éléments où chaque élément est stocké sous forme de paire clé-valeur. La clé et la valeur peuvent être de n'importe quel type, même une fonction ou un autre objet. Les clés sont uniques, ce qui signifie que chaque clé ne peut être présente qu'une seule fois dans la Map. En utilisant les méthodes de l'objet Map, vous pouvez ajouter, supprimer et modifier les éléments de la Map. 

const myMap = new Map();

myMap.set("key1", "value1"); // ajoute des éléments
myMap.set("key2", "value2");
myMap.set("key3", "value3");

const valuesIterator = myMap.values();
const valeur = myMap.get('key1'); //accéder à une valeur
myMap.delete('key1');
const hasKey = myMap.has('key1'); //vérifie si une clé existe dans la Map
myMap.forEach(function (value, key) { //parcourir des éléments de la Map
  console.log(key, value);
});



console.log(valuesIterator.next().value); // Affiche "value1"
console.log(valuesIterator.next().value); // Affiche "value2"
console.log(valuesIterator.next().value); // Affiche "value3"


const myMap1 = new Map([['key1', 'value1'], // on peut créer une Map soit même
['key2', 'value2'],
['key3', 'value3']
]);

const table = [['cle', 'valeur'], ['cle2', 'Valeur']]
const myMap2 = new Map(table);
const newMap = new Map([...table].map(([key, value]) => [key.toUpperCase(), value.toUpperCase()]));
for (const [key, value] of myMap2) {
  console.log(`${key} = ${value}`);
}




