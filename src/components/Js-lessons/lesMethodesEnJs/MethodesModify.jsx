import React, { useEffect } from 'react'
import { useState } from 'react';

const MethodesModify = () => {

    const [noms, setNoms] = useState(['nom1', 'nom2', 'nom3', 'name4']);
    const [nombre, setNombre] = useState([1, 2, 3, 4, 6, 7, 5 ]);


    //L'idée de splice est donc de remove un élément d'un tableau à un endroit précis et/ou remplacer/ajouter des éléments à des endroits précis 
    const handleSplice = () => {
        const newList = [...noms]; //J'aurais pu uitiliser la méthode slice() pour copier le tableau
        newList.splice(0, 1);
        setNoms(newList); 
    };
    const handlePush = () => { //ajoute un élément en fin de tableau
        const newList = [...noms];
        newList.push('newName');
        setNoms(newList); 
    };
    const handlePop = () => { //retire le dernier élément
        const newList = [...noms];
        newList.pop();
        setNoms(newList); 
    };

    const handleUnshift = () => { //Ajoute du contenu au début du tableau
        const newList = [...noms];
        newList.unshift('newName');
        setNoms(newList); 
    };

    const handleShift = () => { //retire le premier élément
        const newList = [...noms];
        newList.shift();
        setNoms(newList); 
    };

    const handleSort = () => { //tri les éléments dans l'ordre alphabétiques
        const newList = [...noms];
        newList.sort();
        setNoms(newList); 
    };
    const handleSortChiffre = () => { //tri les éléments dans l'ordre croissant
        const newList = [...nombre];
        newList.sort((a, b) => a - b);
        setNombre(newList); 
    };
    const handleSortReverse = () => { //inverse totalement les éléments du tableau
        const newList = [...noms];
        newList.reverse();
        setNoms(newList); 
    };
    const handleFill = () => { //remplace tous les éléments d'un tableau par une valeur donnée
        const newList = [...noms];
        newList.fill('newName');
        setNoms(newList); 
    };

    const handleCopyWhitin = () => { //copie des éléments au sein du tableau. Ne peut l'agrandir
        const newList = [...nombre];
        newList.copyWithin(3);
        setNombre(newList); 
    };
    const handleEntries = () => { //permet de renvoyer un nouvel objet tableau contenant des paires clé-valeur pour chaque élément du tableau d'origine
        const newList = [...noms];
        const entries = newList.entries();

        for (const [index, value] of entries) {
            index === 2 && setNoms(value)
          }
    };


  

    return (

        <div>

            <h3>Les Méthodes mutatrices, ou mutables - "accessors" ou "getters"</h3>
            <p>{noms}</p>{/* from... to... */}
            <p>{nombre}</p>{/* from... to... */}
            <button onClick={handleSplice}>J'utilise la méthode splice</button>
            <button onClick={handlePush}>J'utilise la méthode push</button>
            <button onClick={handleUnshift}>J'utilise la méthode Unshift</button>
            <button onClick={handlePop}>J'utilise la méthode pop</button>
            <button onClick={handleShift}>J'utilise la méthode shift</button>
            <button onClick={handleSort}>J'utilise la méthode sort lettres</button>
            <button onClick={handleSortChiffre}>J'utilise la méthode sort nombres</button>
            <button onClick={handleSortReverse}>J'utilise la méthode reverse</button>
            <button onClick={handleFill}>J'utilise la méthode fill</button>
            <button onClick={handleCopyWhitin}>J'utilise la méthode copyWithin</button>
            <button onClick={handleEntries}>J'utilise la méthode entries</button>

            <ul>
            Méthodes qui modifient directement les tableaux :
            <li>reverse</li>
            <li>sort</li>
            <li>fill</li>
            <li>pop</li>
            <li>shift</li>
            <li>copyWithin</li>
            <li>push</li>
            <li>unshift</li>
            <li>splice</li>
            <li>entries</li>
                   
            </ul>
           
    


        </div>
    );
}

export default MethodesModify
