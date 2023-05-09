import React, { useEffect } from 'react'
import { useState } from 'react';

const MethodesNotModify = () => {

    // concat, map, filter, reduce, some, every, includes, slice, substr, substring, toLowerCase, toUpperCase, trim, split, replace, flatmap

    const [noms, setNoms] = useState(['marie', 'muriel', 'marguerite', 'anne-sophie']);
    const [nombre, setNombre] = useState([8, 4, 14, 10, 132, 3, 9]);
    const [arr, setArr] = useState([1, 2, [3, 4], 5]);
    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ];


    const obj2 = [
        { name: 'jerome' },
        { name: 'taratata' },
        { tableau: ['salut', 'hello'] }
    ];
    const res = obj2.reduce((acc, obj) => {
        if (obj.tableau) {
            return acc.concat(obj.tableau);
        } else {
            return acc;
        }
    }, []);
    const result = obj2.flatMap((obj) => {
        if (obj.tableau) {
            return obj.tableau;
        } else {
            return [];
        }
    });

    const handleEntries = () => { //permet de renvoyer un nouvel objet tableau (Array Iterator) contenant des paires clé-valeur pour chaque élément du tableau d'origine

    };


    // LA METHODE REDUCE()
    // Ne donne pas le même résultat lorqu'elle est mise dans une variable que lorsqu'elle est appelé dans le jsx
    // La méthode reduce peut devenir mutatrice si on modifie l'accumulateur ou les éléments de l'array

    const ageUsers = users.reduce((acc, user) => acc + user.age, 0);
    const additionNombre = nombre.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);


    // ici on va transformer le tableau users en objet qui va ramasser les propriétés de chaque objet et les ramener à une seule. Puis on aura toutes les valeurs accumulées dans un tableau par propriétés.
    const newObjectUsers = users.reduce((acc, { id, name, age }) => {
        acc.id.push(id);
        acc.name.push(name);
        acc.age.push(age);
        return acc;
    }, { id: [], name: [], age: [] });

    /* On espace tous les noms avec un espace */
    const spaceName = noms.reduce((accumulator, currentValue) => { return accumulator + ' ' + currentValue });

    /* On cherche toutes les occurences du chiffre 10 */
    const occurenceTen = nombre.reduce((acc, cur) => cur === 10 ? acc + 1 : acc, 0);



    // LA METHODE FILTER()

    const removeName = noms.filter((nom) => nom !== 'marie'); /* on remove un élément spécifique du tableau*/
    const selectName = noms.filter((nom) => nom === 'marie') /* on ne garde qu'un élément spécifique du tableau*/
    const pairs = nombre.filter((number) => number % 2 === 0) /* on sélectionne les nombres pairs */
    const filteredUsers = users.filter(user => user.id !== 3); /* on supprime un élément d'un tableau d'objet */


    // LA METHODE SOME - renvoie un boolean

    const supTen = nombre.some(num => num > 10) /* On vérifie si au moins si au moins un élément du tableau est supérieur à 10  */
    const hasMarie = noms.some((element) => element === 'marie');/* On vérifie si au moins un élément revoie 'marie' */
    const hasEven = nombre.some((element) => element % 2 === 0); /* On vérifie si au moins un élément est un chiffre pair  */
    const hasBob = users.some((user) => user.name === 'Bob'); /* On vérifie si au moins un élément possede la propriété 'bob'  */
    const fruits = [
        { name: 'apple', color: 'red' },
        { name: 'banana', color: 'yellow' },
        { name: 'orange', color: 'orange' }
    ];

    const apple = { name: 'apple', color: 'red' };
    const banana = { name: 'banana', color: 'yellow' };

    console.log(fruits.some(arr => JSON.stringify(arr) === JSON.stringify([1, 2]))); // true


    //LA METHODE ENTRIES - renvoie un Array Iterator (voire les générateurs)
    //Voire méthode values() et keys() qui sont similaires mais de renvoie qu'une des deux valeurs d'entries

    const entries = Object.entries(noms);
    const listItems = [];
    for (const [index, value] of entries) {
        listItems.push([index, value]);
    }


    //LA METHODE CONCAT - fusionne plusieurs tableaux entre eux

    const concatTab = noms.concat(nombre) /* on fusionne deux ou plusieurs tableaux ensemble */

    // LA METHODE AT

    const secondElement = noms.at(1);
    const lastElement = noms.at(1);


    // LA METHODE EVERY - vérifie si tout les éléments répondent à une condition

    const numbers = [2, 4, 6, 8];
    const allEven = numbers.every((num) => num % 2 === 0);
    console.log(allEven); // true

    const moreNumbers = [2, 4, 6, 7, 8];
    const allEven2 = moreNumbers.every((num) => num % 2 === 0);
    console.log(allEven2); // false




    const handleFlat = () => {
        const flated = arr.flat();
        setArr(flated);
    }
    useEffect(handleFlat, [])

    console.log(arr + ` tableau flatisé`)

    return (

        <div>
            <h3>Les Méthodes non-mutatrices - mutators ou setters</h3>

            <p>{noms} = tous les noms</p>
            <p>{nombre} = tous les nombres</p>


            <p>{ageUsers} - addition des ages - reduce</p>
            <p>{additionNombre} - Addition de tous les nombres - reduce</p> {/* On addtionne l'accumulateur que l'on définie à 0 avec la currentvalue qui est chaque valeur du tableau */}
            <p>{spaceName} - Met un espace entre les noms - reduce</p>
            <p>{occurenceTen} - occurences du chiffre 10 - reduce</p>
            <p>{JSON.stringify(newObjectUsers)} - clé/valeurs - reduce</p>
            <p>{removeName} - on supprime un élément - filter</p>
            <p>{selectName} - on ne garde qu'un élément - filter</p>
            <p>{pairs} - on ne garde que les chiffres pairs - filter</p>
            <p>{JSON.stringify(filteredUsers)} - on supprime un élément du tableau d'objets - filter</p>
            <p>{JSON.stringify(supTen)} - on vérifie qu'au moins un élément est supérieur à 10 - some</p>
            <p>{JSON.stringify(hasMarie)} - on vérifie qu'au moins un élément renvoie 3 - some</p>
            <p>{JSON.stringify(hasEven)} - on vérifie si il y a des nombre pairs - some</p>
            <p>{JSON.stringify(hasBob)} - on vérifie si au moins un élément à la propriété Bob - some</p>
            <p>{JSON.stringify(listItems)} - on vérifie si au moins un élément à la propriété Bob - some</p>

            {/* {res[1]}
            {result} */}

            <h4>Liste des méthodes qui ne modifient pas directement les tableaux : </h4>


            <li>length</li>
            <li>values</li>
            <li>at</li>
            <li>from</li>
            <li>join</li>
            <li>toString</li>
            <li>forEach</li>
            <li>concat</li>
            <li>some</li>
            <li>flatMap</li>
            <li>of</li>
            <li>every</li>
            <li>slice</li>
            <li>findIndex</li>
            <li>find</li>
            <li>includes</li>
            <li>reduceRight</li>
            <li>reduce</li>
            <li>isArray</li>
            <li>filter</li>
            <li>keys</li>
            <li>map</li>
            <li>lastIndexOf</li>

        </div>
    );
}

export default MethodesNotModify
