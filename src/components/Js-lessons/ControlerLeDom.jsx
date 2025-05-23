import React, { useEffect } from 'react';

const ControlerLeDom = () => {
    useEffect(() => {
        window.addEventListener('load', () => {
            const h1 = document.querySelector('h1');
            const pp = document.querySelector('p');
            const div = document.querySelector('.contenu');
            const lien = document.querySelector('a');

            console.log(h1.innerText);
            const text = h1.innerText;
            const maj_text = text.toUpperCase();
            h1.innerText = maj_text;
            h1.style.color = 'blue';
            h1.style.fontSize = '2Opx';
            h1.style.textTransform = 'lowerCase';

            const maj = pp.innerText.toUpperCase();
            pp.innerText = maj;
            pp.classList.add('something');
            pp.classList.remove('something');
            const myClasses = ['error', 'success', 'attenton'];
            let index = 0;

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
                index++;
            };

            const intervalId = setInterval(changeClass, 2000);

            const noms = ['Isabelle', 'katherine', 'Heloïse'];

            noms.forEach((nom) => {
                div.innerHTML += `<p>${nom}</p>`;
            });

            lien.innerText = 'Allez sur Youtube';
            lien.setAttribute('href', 'http://youtube.com');

            const link = document.createElement('a');
            link.href = 'http://google.com';
            link.innerHTML = 'Allez sur Google';
            document.body.appendChild(link);

            return () => {
                clearInterval(intervalId);
            };
        });
    }, []);

    return (
        <div>
            Cours sur comment controler le DOM, voir dans la console
            <p>Ici on est obligé d'utiliser UseEffect et l'écouteur d'événements "load" sans quoi ça ne marcherait pas, ce n'est pas comme sur une page html</p>
        </div>)
        ;
};

export default ControlerLeDom;
