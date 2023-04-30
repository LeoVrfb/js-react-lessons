import React, { useEffect } from 'react'

const ControlerLeDom = () => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);
    const text = h1.innerText;
    const maj_text = text.toUpperCase();
    h1.innerText = maj_text; // seule manière d'afficher correctement le DOM 
    // h1.setAttribute('style', 'color: blue');
    // h1.setAttribute('style', 'font-size: 10px');// écrase le précédent attribut...
    h1.style.color = 'blue';
    h1.style.fontSize = '2Opx';
    h1.style.textTransform = 'lowerCase';

    const pp = document.querySelector('p');
    const maj = pp.innerText.toUpperCase();
    pp.innerText = maj; // seule manière d'afficher correctement le DOM 
    pp.classList.add('something');
    pp.classList.remove('something');
    const myClasses = ['error', 'success', 'attenton'];

    let index = 0;

    useEffect(() => {

        const changeClass = () => {
            if (index > myClasses.length - 1) {
                index = 0;
                pp.setAttribute('class', '');
                pp.classList.add(myClasses[index]);
            }
            if (pp.classList.contains('error')) {
                h1.style.color = 'red';
            }
            if (pp.classList.contains('success')) {
                h1.style.color = 'green';
            }
            pp.classList.add(myClasses[index]);
            index++
        }
        const intervalId = setInterval(changeClass, 2000);
        return () => {

            clearInterval(intervalId);
        };
    }, [index]); // change de class toutes les deux secondes


    const div = document.querySelector('.contenu');
    const noms = ['Isabelle', 'katherine', 'Heloïse'];
    noms.forEach(nom => {
        div.innerHTML += `<p>${nom}</p>` // ajoute le tableau de noms au HTML
    })

    // const link = document.createElement('a');
    // const body = document.querySelector('body');
    // link.href = 'http://google.com';
    // link.innerHTML = 'Allez sur Google'
    // body.appendChild(link); // créer un lien vers google

    const lien = document.querySelector('a');
    const att = lien.getAttribute('href');
    lien.innerText = 'Allez sur Youtube'
    lien.setAttribute('href', 'http://youtube.com')




    return (
        <div>

        </div>
    )
}

export default ControlerLeDom
