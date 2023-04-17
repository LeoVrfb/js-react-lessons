import React, { useState, useEffect } from 'react';
import './CompteurJours.css';
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
  }, [dateRencontre, maintenant]);

  const handleChange = (event) => {
    setDevinette(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(devinette) === joursDepuisRencontre) {
      setBravo(true);
      setReponse(
        `Bravo Polina, tu as trouvé ! Cela fait bien ${joursDepuisRencontre} jours que nous sommes ensemble. ${joursDepuisRencontre} jours de bonheur avec toi, nous nous connaissons depuis le 23 avril 2022`
      );
    } else {
      setBravo(false);
      setReponse(
        `Désolé Polina, tu t'es trompé. Cela fait ${joursDepuisRencontre} jours que nous sommes ensemble. ${joursDepuisRencontre} jours de bonheur avec toi, nous nous connaissons depuis le 23 avril 2022`
      );
    }
    setDevinette('');
  };

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>Compteur de jours depuis notre rencontre</h1>
        <p>Devinette : Depuis combien de jours sommes-nous ensemble ?</p>
      </header>
      <main className='main'>
        <form className='form' onSubmit={handleSubmit}>
          <input type='number' value={devinette} onChange={handleChange} />
          <button type='submit'>Valider</button>
        </form>
        {reponse && (
          <p className={`result ${bravo ? 'success' : 'error'}`}>{reponse}</p>
        )}
      </main>
    </div>
  );
};

export default CompteurJours;
