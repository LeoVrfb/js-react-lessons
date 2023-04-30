import React from 'react'

const Why = () => {

    const commandeLait = setTimeout(() => {
        console.log('Votre tasse de lait est prête');
    }, 5000);

    const commandeOmelette = setTimeout(() => {
        console.log('Votre omelette est prête');
    }, 10000);

    const commandeVerreEau = setTimeout(() => {
        console.log('Votre verre deau est prêt');
    }, 2000);

    commandeLait();
    commandeOmelette();
    commandeVerreEau();

    return (
        <div>

        </div>
    )
}

export default Why
