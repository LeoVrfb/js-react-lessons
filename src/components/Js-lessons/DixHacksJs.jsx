import React from 'react'

const DixHacksJs = () => {
    let condition = true;
    let personne = {
        id: 1,
        nom: 'kamdjou',
        ...condition && { age: 25 } // ajout de propriétés conditionnelles
    }
    console.log(personne);

    let person = {
        nom: 'kamdjou',
        salaire: 10000
    }
    console.log('age' in person);
    console.log('salaire' in person);

    const dynamic = 'favorite';
    let item = {
        nom: 'Biscuit',
        [dynamic]: 'chocolat'
    }
    console.log(item);

    const people = { id: 1, name: 'John Doe' };
    const { id, name } = people;
    const { id: identifiant } = people;
    let nom_prop = 'name';
    let { [nom_prop]: nom } = people;
    console.log(identifiant);
    console.log(nom);
    console.log(people)
    console.log(id)
    console.log(name) // destructuring

    //Nullish Coalescing Operator

    const foo = null ?? 'Hello'; // C'est nul ? oui, on affiche pas Hello. Non, on affiche pas Hello.
    console.log(foo)
    const bar = 'Not null' ?? 'Hello';
    console.log(bar);
    const baz = 0 ?? 'Hello';
    console.log(baz);

    //Chainage optionel (optional chaining)

    const book = {
        id: 1,
        title: 'Title',
        author: null
    }
    console.log(book.author && book.author.age);
    console.log(book.author?.age);
    console.log(book.author?.address?.city); //return le résultat ou undefined

    const gens = {
        firstName: 'Haseeb',
        lastName: 'Anwar',
        printName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    console.log(gens.printName?.()); //return le résultat ou undefined

    //Double exclamation Operator

    const greeting = 'Hello there !';
    const noGreeting = '';
    console.log(!!greeting)
    console.log(!!noGreeting)
    console.log(noGreeting ? true : false)

    //Converstion de chaine et d'entiers

    const stringNumer = '123';
    console.log(+stringNumer);
    console.log(typeof +stringNumer);

    let myString = 25 + '';
    console.log(myString);
    console.log(typeof myString);

    // Array, valeur fausses

    const myArray = [null, false, 'Hello', undefined, 0];

    const filtered = myArray.filter(Boolean);
    const anyTruthy = myArray.some(Boolean);
    const allTruthy = myArray.every(Boolean);
    console.log(filtered);
    console.log(anyTruthy);
    console.log(allTruthy);

    // Comment aplatir mes tableaux

    const myTab = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]];
    const flattedArray = myTab.flat();
    console.log(flattedArray);
    // plus avancé
    const arra = [0, 1, 2, [[[3, 4]]]];
    console.log(arra.flat(3));







    return (
        <div>
            {name}
        </div>
    )
}

export default DixHacksJs
