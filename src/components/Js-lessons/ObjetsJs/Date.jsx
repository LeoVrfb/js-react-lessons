
import React, { useEffect, useState } from 'react'


const DateObject = () => {

    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const datString = today.toLocaleDateString('fr-FR', options);
    console.log(datString); // "5 mai 2023"

    const [now, setNow] = useState(new Date());
    const dateString = now.toLocaleDateString();
    const dateStringTime = now.toLocaleTimeString();
    const isoString = now.toISOString();

    const milliSec = now.getTime();
    const annee = now.getFullYear();
    const month = now.getMonth();
    const jourMois = now.getDate();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const heure = now.getHours();


    const [time, setTime] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevState => new Date().toLocaleTimeString())
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <p>{time}</p>
            <p>{dateString}</p>
            <p>{dateStringTime}</p>
            <p>{isoString}</p>
            <p>{milliSec}</p>
            <p>{annee}</p>
            <p>{month}</p>
            <p>{jourMois}</p>
            <p>{seconds}</p>
            <p>{minutes}</p>
            <p>{heure}</p>

        </div>
    )
}

export default DateObject


// L'objet Date en JavaScript est utilisé pour travailler avec des dates et des heures. Il permet de créer des instances de dates, d'obtenir des informations sur la date et l'heure actuelles, et de manipuler des dates pour effectuer des opérations telles que l'ajout ou la soustraction de jours, de mois, d'années, d'heures, de minutes ou de secondes.



// Voici quelques exemples de méthodes disponibles sur l'objet Date :

// new Date() : crée une instance de l'objet Date, qui représente la date et l'heure actuelles.
// getTime() : renvoie le nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC.
// getFullYear() : renvoie l'année en cours de l'objet Date.
// getMonth() : renvoie le mois en cours de l'objet Date (0 pour janvier, 1 pour février, etc.).
// getDate() : renvoie le jour du mois en cours de l'objet Date.
// getHours() : renvoie l'heure en cours de l'objet Date.
// getMinutes() : renvoie les minutes en cours de l'objet Date.
// getSeconds() : renvoie les secondes en cours de l'objet Date.
// toISOString() : renvoie une chaîne de caractères représentant l'objet Date au format ISO 8601.
// En plus de ces méthodes, l'objet Date fournit également des méthodes pour effectuer des opérations sur les dates, telles que setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), qui permettent de modifier les valeurs de l'objet Date.

// L'objet Date est très utile pour travailler avec des dates et des heures en JavaScript, que ce soit pour afficher la date et l'heure actuelles sur une page web, pour effectuer des calculs de durée ou pour manipuler des dates pour des tâches spécifiques.


