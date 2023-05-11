import React, { useRef, useState } from 'react'

const TesterChild = ({ nom, change, click }) => {
    const [step, setStep] = useState(false);
    const [etat2, setEtat2] = useState({
        personne1: { nom: 'seb', age: 24 },
        personne2: { nom: 'alex', age: 27 },
        personne3: { nom: 'Leo', age: 31 },
    });





    const handleChange = (e) => {
        const value = e.target.value;
        change(value)
    }
    const handleClick = () => {
        setStep(true)
        if (nom === '') {
            return
        }
        const cles = Object.keys(etat2);
        let lastElement = cles[cles.length - 1] ? cles[cles.length - 1] : 'personne0';
        const lastLetter = lastElement.slice(-1);
        const age = Math.floor(Math.random() * 99) + 1;
        const lettreEnChiffre = parseInt(lastLetter) + 1;
        const chiffreEnLettre = lettreEnChiffre.toString();
        const nomVariable = "personne" + chiffreEnLettre;
        const newPerson = { [nomVariable]: { nom, age } }
        const newTab = { ...etat2, ...newPerson };
        setEtat2(newTab);
        click()
    }

    const handleDelete = (cle) => {
        const recupCle = Object.entries(etat2).filter(([key]) => !key.includes(cle));
        console.log(recupCle);
        const nouvelEtat = Object.fromEntries(recupCle);
        setEtat2(nouvelEtat);
    };


    return (
        <div>
            <input htmlFor="text" type="text" value={nom} onChange={handleChange} />
            <button onClick={handleClick}>click to change</button>
            {Object.entries(etat2).map(([key, value]) => {
                return <li key={key}>{key}{value.nom} {value.age} <button onClick={() => handleDelete(key)}>X</button></li>
            })}
        </div>
    )
}

export default TesterChild


 // const trouve = etat2.findIndex(person => person.id === id); //renvoie un index
        // const newTab = etat2.slice();
        // newTab.splice(trouve, 1)
        // const copie = etat2.filter(person => person.id !== id)

        // const id = parseInt(lastLetter);
        // const findIndex = Object.keys(etat2);
        // const lastLetterNow = findIndex.slice(-1);