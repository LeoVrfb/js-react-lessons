import React, { useState } from 'react'

const Array = () => {

    const str = 'hello';
    const arr = Array.from(str);
    console.log(arr); // ['h', 'e', 'l', 'l', 'o']

    const set = new Set([1, 2, 3]);
    const arr1 = Array.from(set, x => x * 2);
    console.log(arr1); // [2, 4, 6]



    const randomObj = Array.from({ length: 9 }, () => ({ [Math.random().toString(36).substring(7)]: Math.random() }))
        .reduce((acc, cur) => Object.assign(acc, cur), {});

    const [obj, setObj] = useState(randomObj);




    const myObject = { a: 1, b: 2, c: 3 };

    const myArray = Array.from(Object.entries(myObject), ([key, value]) => value);

    console.log(myArray); // [1, 2, 3]

    const str1 = "hello";
    const arr5 = Array.of(str1);

    console.log(arr5); // Résultat : ["hello"]


    // LA METHODE ARRAY.FROM()

    // La méthode Array.from() est une méthode statique de l'objet Array qui crée un nouveau tableau à partir d'un objet itérable ou d'une structure semblable à un tableau, comme une chaîne de caractères ou un objet semblable à un tableau.

    // La syntaxe générale de Array.from() est la suivante :

    // Array.from(objetIterable, fonctionDeMap, contexteOptionnel);

    // objetIterable : L'objet itérable ou semblable à un tableau à partir duquel créer le tableau.
    // fonctionDeMap (optionnelle) : Une fonction de transformation à appliquer à chaque élément de l'objet itérable. Elle prend en paramètre chaque élément de l'objet et retourne la valeur correspondante pour le nouvel élément du tableau.
    // contexteOptionnel (optionnel) : Un objet à utiliser comme contexte (this) lors de l'exécution de la fonction de transformation.

    const str9 = "hello";
    const chars = Array.from(str9);
    console.log(chars); // ['h', 'e', 'l', 'l', 'o']

    const numbers = [1, 2, 3, 4];
    const squared = Array.from(numbers, (num) => num * num);
    console.log(squared); // [1, 4, 9, 16]


    const selectElement = document.getElementById("mySelect");
    const options = Array.from(selectElement.options, (option) => ({
        value: option.value,
        label: option.textContent,
    }));

    console.log(options); // voir dans le jsx

    // résultat:

    // [
    //     { value: "1", label: "Option 1" },
    //     { value: "2", label: "Option 2" },
    //     { value: "3", label: "Option 3" }
    //   ]






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




    return (
        <div>
            <select id="mySelect">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>

        </div>
    )
}

export default Array
