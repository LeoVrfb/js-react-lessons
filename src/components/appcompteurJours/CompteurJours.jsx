import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CompteurJours = () => {
  const [joursDepuisRencontre, setJoursDepuisRencontre] = useState(null);
  const [devinette, setDevinette] = useState('');
  const [reponse, setReponse] = useState('');
  const [bravo, setBravo] = useState(false);

  const dateRencontre = moment('2022-04-23');
  const maintenant = moment();

  useEffect(() => {
    setJoursDepuisRencontre(maintenant.diff(dateRencontre, 'days'));
  }, []);

  const handleChange = (event) => {
    setDevinette(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(devinette) === joursDepuisRencontre) {
      setBravo(true);
      setReponse(`Bravo, tu as trouvé ! Cela fait bien ${joursDepuisRencontre} jours que nous sommes ensemble.`);
    } else {
      setBravo(false);
      setReponse(`Désolé, tu t'es trompé. Cela fait ${joursDepuisRencontre} jours que nous sommes ensemble.`);
    }
    setDevinette('');
  }

  return (
    <div>
      <h1>Compteur de jours depuis notre rencontre</h1>
      <p>Devinette : Depuis combien de jours sommes-nous ensemble ?</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={devinette} onChange={handleChange} />
        <button type="submit">Valider</button>
      </form>
      {reponse && (
        <p style={{ color: bravo ? 'green' : 'red' }}>{reponse}</p>
      )}
      
    </div>
  );
}

export default CompteurJours;
