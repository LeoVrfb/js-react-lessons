import React, { useState } from 'react'

const Array = () => {

    const str = 'hello';
    const arr = Array.from(str);
    console.log(arr); // ['h', 'e', 'l', 'l', 'o']

    const set = new Set([1, 2, 3]);
    const arr1 = Array.from(set, x => x * 2);
    console.log(arr1); // [2, 4, 6]



    const randomObj = Array.from({ length: 9 }, () => ({ [Math.random().toString(36).substring(7)]: Math.random() }))
        .reduce((acc, cur) => Object.assign(acc, cur), {});

    const [obj, setObj] = useState(randomObj);




    const myObject = { a: 1, b: 2, c: 3 };

    const myArray = Array.from(Object.entries(myObject), ([key, value]) => value);

    console.log(myArray); // [1, 2, 3]



    return (
        <div>

        </div>
    )
}

export default Array
