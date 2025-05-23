import React, { useEffect } from 'react'

const Why = () => {

    function commandeLait() {
        setTimeout(() => {
          console.log('Votre tasse de lait est prête');
        }, 5000);
      }
      
      function commandeOmelette() {
        setTimeout(() => {
          console.log('Votre omelette est prête');
        }, 10000);
      }
      
      function commandeVerreEau() {
        setTimeout(() => {
          console.log('Votre verre d\'eau est prêt');
        }, 2000);
      }
      
      commandeLait();
      commandeOmelette();
      commandeVerreEau();


    return (
        <div>
            <p>Why, voir dans la console !</p>
            <p>Ici le but est simplement de comprendre la raison des callback en expliquant l'asynchronisme</p>
        </div>
    )
}

export default Why
