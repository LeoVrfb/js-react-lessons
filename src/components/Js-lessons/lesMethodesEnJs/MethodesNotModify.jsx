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


    // La méthode reduce()
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



    ///////////////////////////////////////





    noms.filter((nom) => nom !== 'marie'); /* on remove un élément spécifique du tableau*/
    noms.filter((nom) => nom === 'marie') /* on ne garde qu'un élément spécifique du tableau*/

    //  <p>{noms.concat(nombre)}</p>{/* on fusionne deux ou plusieurs tableaux ensemble */}
    //        
    //         <p>{nombre.filter((number) => number % 2 === 0)} filter</p>{/* on sélectionne les nombres pairs */}
    //         
    //         <p>{nombre.some(num => num > 10)}</p> {/* On vérifie si au moins si au moins un élément du tableau est supérieur à 10 (renvoie true) */}





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

            {/* {newObjectUsers.age}
            {newObjectUsers.id}
            {newObjectUsers.name} */}
            {res[1]}
            {result[1]}

            <p>Liste des méthodes qui ne modifient pas directement les tableaux : </p>
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
