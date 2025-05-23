const nbrArrondi = Math.floor(3, 7);
const nbrRandom = Math.random();
const randomTen = Math.floor(Math.random() * 10);
const id = Math.floor(Math.random() * 1000000); //fourni un id de 1 à 1 000 000;
const roundedNum = Math.ceil(nbrArrondi * 10 * 2) / 10 ** 2; //arrondi au chiffre supérieur
const round = Math.round(10, 4); //arrondi à l'entier le plus proche
const minimum = Math.min();
const maximum = Math.max();




const numLong = 36.23452;
const roundedCloser = Math.round(numLong);
console.log(roundedCloser); // affiche 36, arrondi à l'entier le plus proche

const num5 = 43.758;
const rounded5 = Math.floor(num5);
console.log(rounded5); // affiche 43, arrondi à l'entier inférieur

const num2 = 43.247;
const rounded2 = Math.ceil(num2);
console.log(rounded2); // affiche 44, arrondi à l'entier supérieur

const num1 = 43.247;
const rounded4 = num1.toFixed(2);
console.log(rounded4); // affiche "43.25", arrondi au chiffre après la virgule que l'on veut



const numero = 36.7;
const entierSup = numero.toFixed()
console.log(entierSup) // affiche 37, pareil que Math.round(), arrondi à l'entier le plus proche


const num = 36.8;
const rounded = Math.round(num / 10) * 10;
console.log(rounded); // affiche 40






