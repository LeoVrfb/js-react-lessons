import React from 'react'
import { useState } from 'react';

const MethodesModify = () => {

    const [noms, setNoms] = useState(['marie', 'muriel', 'marguerite', 'anne-sophie']);
    const [nombre, setNombre] = useState([8, 4, 14, 10, 132]);



    //L'idée de splice est donc de remove un élément d'un tableau à un endroit précis et/ou remplacer/ajouter des éléments à des endroits précis 
    const handleSplice = () => {
        const newList = [...noms]; //J'aurais pu uitiliser la méthode slice() pour copier le tableau
        newList.splice(0, 1);
        setNoms(newList); 
    };
    const handlePush = () => { //ajoute un élément en fin de tableau
        const newList = [...noms];
        newList.push('Estelle');
        setNoms(newList); 
    };
    const handlePop = () => { //retire le dernier élément
        const newList = [...noms];
        newList.pop();
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
        newList.fill('heloïse');
        setNoms(newList); 
    };



    return (

        <div>
            <p>{noms}</p>{/* from... to... */}
            <p>{nombre}</p>{/* from... to... */}
            <button onClick={handleSplice}>J'utilise la méthode splice</button>
            <button onClick={handlePush}>J'utilise la méthode push</button>
            <button onClick={handlePop}>J'utilise la méthode pop</button>
            <button onClick={handleShift}>J'utilise la méthode shift</button>
            <button onClick={handleSort}>J'utilise la méthode sort lettres</button>
            <button onClick={handleSortChiffre}>J'utilise la méthode sort nombres</button>
            <button onClick={handleSortReverse}>J'utilise la méthode reverse</button>
            <button onClick={handleFill}>J'utilise la méthode fill</button>
           
    


        </div>
    );
}

export default MethodesModify
