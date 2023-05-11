import React, { useEffect, useRef, useState } from 'react'
import TesterChild from './TesterChild';

const Tester = () => {
  let age = 0;
  let nom = 'katherine'
  let boolean = true;
  let boolean2 = 0;
  const check = 'ceci est une menace';
  let string_number = String(age);
  let number_name = Number(nom);
  console.log(string_number, typeof string_number, typeof boolean)

  for (let i = 0; i <= 10; i++) {
    age += i;
    if (age >= 10) {
      break;
    }
  }
  //   for (let i = 0; i <= 10; i++) {
  //     age = i;
  //   } 
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }


  const [truc, setTruc] = useState(["A", "B", "C"])
  const obj = { nom: 'john' };
  obj.age = 30;
  obj['profession'] = 'développeur';
  const entries = Object.entries(obj); // renvoie [['nom', 'john'], ['age', 30]]
  const flattened = entries.flat();
  console.log(flattened)

  Object.keys(obj).forEach((key) => {
    console.log(key + ' : ' + obj[key]);
  });
  console.log(truc);


  const obj2 = { ['propriété1' + 'pro']: 'chaine' };
  console.log(Object.keys(obj2));



  const handleClick = () => {
    const elementASupprimer = 'A';
    const filteredArray = truc.filter(element => element !== elementASupprimer);
    delete obj.age;

    obj['nom'] === 'john' && setTruc(filteredArray)

  };
  console.log(obj);

  const tablo = [[1, 2], [3, 4]];
  const tablo2 = { 0: [1, 2], 1: [3, 4] };

  const fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'orange', color: 'orange' }
  ];

  const apple = { name: 'apple', color: 'red' };
  const banana = { name: 'banana', color: 'yellow' };

  console.log(fruits.some(arr => JSON.stringify(arr) === JSON.stringify([1, 2]))); // true

  const [etat, setEtat] = useState('');


  const handleChange = (value) => {
    setEtat(value)
  }
  const handleClicked = () => {
    if (etat === '') {
      return
    }
    setEtat('')
  }


  return (
    <div>
      <div>{typeof age} {age}</div>
      <div>{typeof nom} {nom}</div>
      <div>{typeof boolean} {boolean}</div>
      <div>{typeof boolean2} {boolean2}</div>
      <div>{typeof check} {check === true ? 'true' : "false"}</div>
      <div>{typeof check} {check ? 'true' : "false"}</div>
      <div>{typeof number_name}{number_name}</div>
      <div>{typeof string_number}{string_number}</div>
      <TesterChild nom={etat} change={handleChange} click={handleClicked} />
      {truc}
      <button onClick={handleClick}>click me</button>
      {tablo[0][0]}



    </div>
  )
}

export default Tester
