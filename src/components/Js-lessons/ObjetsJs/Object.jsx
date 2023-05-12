import { useState } from "react";
import React from 'react'

const Object = () => {

    const obj = { a: 1, b: 2, c: 3 };

    for (const [key, value] of Object.entries(obj)) {
        console.log(`La clé ${key} a pour valeur ${value}`);
    }

    const myObj = {};
    myObj.name = "John";
    myObj.age = 30;

    const obj1 = { prop1: "valeur 1" };
    const obj2 = { prop2: "valeur 2" };
    const obj3 = Object.assign({}, obj1, obj2); // crée un nouvel objet avec les propriétés de obj1 et obj2

    const obj4 = { prop1: "valeur 1", prop2: "valeur 2" };
    const keys = Object.keys(obj4); // renvoie ['prop1', 'prop2']

    const obj5 = { prop1: "valeur 1", prop2: "valeur 2" };
    const entries = Object.entries(obj5); // renvoie [['prop1', 'valeur 1'], ['prop2', 'valeur 2']]
    for (const [key, value] of entries) {
        console.log(`${key} : ${value}`);
    }
    // Sortie : 
    // prop1 : valeur 1
    // prop2 : valeur 2


    ////// Creation d'un objet de tableau
    const generateRandomObject = () => {
        const obj = {};
        for (let i = 0; i < 9; i++) {
            obj[`prop${i + 1}`] = Math.floor(Math.random() * 100);
        }
        return obj;
    };

    const [myObject, setMyObject] = useState(generateRandomObject());

    const obj6 = { a: 1, b: 2 };
    const properties = Object.getOwnPropertyNames(obj6);
    console.log(properties); // Résultat: ["a", "b"]

    // Object.getOwnPropertyNames(obj) renvoie toutes les propriétés propres de l'objet, y compris les propriétés non énumérables. Cela signifie qu'il renvoie également les propriétés qui sont déclarées avec Object.defineProperty() ou Object.defineProperties() en spécifiant enumerable: false.
    // Les propriétés avec l'attribut enumerable défini sur false ne sont pas incluses lors des opérations d'itération sur les objets. Cela signifie qu'elles ne sont pas lues ou parcourues par des méthodes telles que for...in, Object.keys(), Object.values(), Object.entries(), ou lors de la sérialisation de l'objet avec JSON.stringify().



    const obj7 = {};
    Object.defineProperty(obj7, "a", { value: 1, enumerable: false });
    Object.defineProperty(obj7, "b", { value: 2, enumerable: true });

    const properties7 = Object.getOwnPropertyNames(obj7);
    console.log(properties7); // Résultat: ["a", "b"]

    /////////////////////////////////

    //La boucle for...in et la boucle for...of sont toutes deux des boucles de parcours utilisées en JavaScript, mais elles ont des différences importantes dans leur fonctionnement.

    // La boucle for...in est utilisée pour parcourir les propriétés énumérables d'un objet. Elle itère sur toutes les clés des propriétés d'un objet, y compris les clés des propriétés héritées. Voici un exemple :

    const obj8 = { a: 1, b: 2, c: 3 };

    for (let key in obj8) {
        console.log(key); // Résultat: "a", "b", "c"
    }

    // En revanche, la boucle for...of est utilisée pour parcourir des objets itérables tels que les tableaux, les chaînes de caractères, les ensembles (Sets), les maps (Maps), etc. Elle itère sur les éléments eux-mêmes plutôt que sur leurs clés. Voici un exemple avec un tableau :

    const array = [1, 2, 3];

    for (let element of array) {
        console.log(element); // Résultat: 1, 2, 3
    }






    //// POO progrmmation orientée objet

    function Personne(nom, age, sexe) {
        this.nom = nom;
        this.age = age;
        this.sexe = sexe;
        this.direBonjour = function () {
            console.log("Bonjour!");
        }
    }



    const personne1 = new Personne("John", 30, "homme");

    //Si vous souhaitez obtenir à la fois les clés propres et les clés héritées, vous pouvez utiliser la méthode for...in ou Object.getOwnPropertyNames().

    // Exemple avec clés propres et héritées
    function Personne2() {
        this.nom = "John";
        this.age = 30;
    }

    Personne2.prototype.pays = "France";

    const personne = new Personne2();

    const keys2 = Object.keys(personne);
    console.log(keys2); // Résultat: ["nom", "age"]

    const allKeys = [];
    for (let key in personne) {
        allKeys.push(key);
    }
    console.log(allKeys); // Résultat: ["nom", "age", "pays"]

    return (
        <div>

        </div>
    )
}

export default Object









// Enfin, voici quelques exemples de méthodes disponibles sur l'objet Object :

// Object.keys(obj) : renvoie un tableau contenant les noms des propriétés propres à un objet
// Object.values(obj) : renvoie un tableau contenant les valeurs des propriétés propres à un objet
// Object.entries(obj) : renvoie un tableau contenant des tableaux de deux éléments, chaque tableau contenant une paire clé-valeur propre à l'objet
// Object.assign(target, source) : copie les propriétés de un ou plusieurs objets sources vers un objet cible. Si une propriété existe déjà sur l'objet cible, elle sera écrasée. Notez que la méthode Object.assign ne modifie pas les objets d'origine. 
// Object.freeze(obj) : empêche la modification des propriétés d'un objet
// Object.seal(obj) : empêche l'ajout de nouvelles propriétés et la suppression de propriétés existantes sur un objet, mais permet la modification des propriétés existantes. 

