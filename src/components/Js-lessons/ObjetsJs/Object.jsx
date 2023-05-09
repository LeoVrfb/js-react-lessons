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

