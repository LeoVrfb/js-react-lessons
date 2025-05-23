import React from 'react';

const LesBoucles = () => {
  let age = 0;
  for (let i = 0; i <= 10; i++) {
    age += i;
    if (age >= 10) {
      break;
    }
  }
  //   for (let i = 0; i <= 10; i++) { // idem que l'exemple au dessus
  //     age = i;
  //   }

  let i = 0;
  let nom = ['mercedes', 'macarena'];
  while (i < nom.length) {
    // tant que... faire ça...
    console.log(nom[i]);
    i++;
  }

  let a = 0;
  do {
    //faire ça...
    console.log(nom[a]);
    a++;
  } while (a < nom.length); // tant que...

  let password = 'secret';
  if (password === 'secret') {
    console.log('Le mot de passe est bon');
  }
  if (password.length >= 6) {
    console.log('le mot de passe est un peu long');
  }

  let heure = 65;
  if (heure <= 10) {
    console.log('il est 10 heures');
  } else if (heure <= 20) {
    console.log('il est 20 heures');
  } else {
    console.log('vous vous êtes trompé');
  }

  let number = 2;

  switch (number) {
    case 1:
      console.log('janvier');
      break;
    case 2:
      console.log('février');
      break;
    case 3:
      console.log('mars');
      break;
    case 4:
      console.log('arvil');
      break;
    default:
      console.log('nombre invalide');
  }

  function displayDayOfWeek(day) {
    let dayOfWeek;

    switch (day) {
      case 0:
        dayOfWeek = 'Sunday';
        break;
      case 1:
        dayOfWeek = 'Monday';
        break;
      case 2:
        dayOfWeek = 'Tuesday';
        break;
      case 3:
        dayOfWeek = 'Wednesday';
        break;
      case 4:
        dayOfWeek = 'Thursday';
        break;
      case 5:
        dayOfWeek = 'Friday';
        break;
      case 6:
        dayOfWeek = 'Saturday';
        break;
      default:
        dayOfWeek = 'Invalid day';
    }

    return `The day of the week is ${dayOfWeek}`;
  }

  let score = 45;
  if (true) {
    var test = 9;
    score = 25;
  }
  console.log(test);

  const handleChange = () => {
    score = 500;
    test = 400;
  };
  console.log(score);

  let nombres = [12, 4, 65, 565, 4, 44, 87];
  for (var h = 0; h < nombres.length; h++) {
    let secret = 65;
    if (nombres[h] == secret) {
      console.log('le nombre trouvé est : ', nombres[h]);
    }
    console.log('nombres trouvé avant le nombre impair :', nombres[h]);

    if (nombres[h] % 2 != 0) {
      //vérifie si c'est un nombre impair...
      console.log(nombres[i]);
      break;
    } else {
      continue;
    }
  }

  // voir le tri par selection (algo), tri à bulles, recherche binaire, recherche du plus grand nombre, inverser le tableau
  const tableau = [1, 2, 4, 5, 7, 9, 10];

  function trouverNombresManquants(tableau) {
    let missing = [];

    for (let i = 0; i < tableau.length - 1; i++) {
      // Trouver tous les nombres manquants entre deux éléments consécutifs
      for (let j = tableau[i] + 1; j < tableau[i + 1]; j++) {
        missing.push(j);
      }
    }

    return missing;
  }

  // Trouver le deuxième plus grand élément
  // Dans un tableau de nombres, trouve le deuxième plus grand élément.
  // const tableau = [3, 1, 4, 1, 5, 9, 2, 6];
  // Résultat attendu : 6 (car 9 est le plus grand, 6 est le deuxième plus grand)

  function deuxiemePlusGrand(tableau) {
    for (let i = 0; i < tableau.length; i++) {
      for (let j = 0; j < tableau.length - 1 - i; j++) {
        if (tableau[j] > tableau[j + 1]) {
          let temporaryValue = tableau[j];
          tableau[j] = tableau[j + 1];
          tableau[j + 1] = temporaryValue;
        }
      }
    }

    let newTab = [...new Set(tableau)];
    if (newTab.length === 1) {
      return 'pas de deuxième plus grand';
    } else if (newTab.length > 1) {
      return newTab[newTab.length - 2];
    }
  }

  // const tableau = [1, 2, 3, 4, 5];
  //const positions = 2;

  // Résultat attendu : [4, 5, 1, 2, 3]

  // Explication:
  // Position 0: [1, 2, 3, 4, 5] (original)
  // Position 1: [5, 1, 2, 3, 4] (rotation de 1)
  // Position 2: [4, 5, 1, 2, 3] (rotation de 2) ← résultat

  return (
    <div>
      <div>{age} </div>
      <div>{i} </div>
      {handleChange()}
      <div>{score} </div>
      <div>{h} </div>
      <div>{test} </div>
      {trouverNombresManquants(tableau)}
      <br />
    </div>
  );
};

export default LesBoucles;
