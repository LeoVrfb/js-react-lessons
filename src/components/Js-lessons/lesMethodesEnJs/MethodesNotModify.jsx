import React from 'react'
import { useState } from 'react';

const MethodesNotModify = () => {


    // concat, map, filter, reduce, some, every, includes, slice, substr, substring, toLowerCase, toUpperCase, trim, split, replace, flatmap

    const [noms, setNoms] = useState(['marie', 'muriel', 'marguerite', 'anne-sophie']);
    const [nombre, setNombre] = useState([8, 4, 14, 10, 132, 3, 9]);

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

    function displayDayOfWeek(day) {
        let dayOfWeek;

        switch (day) {
            case 0:
                dayOfWeek = "Sunday";
                break;
            case 1:
                dayOfWeek = "Monday";
                break;
            case 2:
                dayOfWeek = "Tuesday";
                break;
            case 3:
                dayOfWeek = "Wednesday";
                break;
            case 4:
                dayOfWeek = "Thursday";
                break;
            case 5:
                dayOfWeek = "Friday";
                break;
            case 6:
                dayOfWeek = "Saturday";
                break;
            default:
                dayOfWeek = "Invalid day";
        }

        return `The day of the week is ${dayOfWeek}`;
    }



    return (

        <div>
            <p>{noms.concat(nombre)}</p>{/* on fusionne deux ou plusieurs tableaux ensemble */}
            <p>{nombre.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0)}</p> {/* On accumule l'accumulateur que l'on définie à 0 avec la currentvalue qui sont chaque valeur du tableau */}
            <p>{noms.reduce((accumulator, currentValue) => { return accumulator + ' ' + currentValue })}</p> {/* On espace tous les noms avec un espace */}
            <p>{nombre.reduce((acc, cur) => cur === 10 ? acc + 1 : acc, 0)}</p> {/* On cherche toutes les occurences du chiffre 10 */}
            <p>{nombre.some(num => num > 10)}</p> {/* On vérifie si au moins si au moins un élément du tableau est supérieur à 10 (renvoie true) */}
            <p>{noms.filter((nom) => nom !== 'marie')}</p>{/* on remove un élément spécifique du tableau*/}
            <p>{noms.filter((nom) => nom === 'marie')}</p>{/* on ne garde qu'un élément spécifique du tableau*/}
            <p>{nombre.filter((number) => number % 2 === 0)}</p>{/* on sélectionne les nombres pairs */}
            {res[1]}
            {result[1]}
            {displayDayOfWeek(2)}




        </div>
    );
}

export default MethodesNotModify
