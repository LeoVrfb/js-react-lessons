import React from 'react'

const ObjetInterface = () => {
    interface Object {
        [key: string]: any;
        sayHello: { (name: string): string };
        cachou: number;
    }

    const myObject: Object = {
        title: 'nom',
        color: 'rouge',
        sayHello(name) {
            return name
        },
        cachou: 5
    }

    return (
        <div>
            {myObject.sayHello('moi')}
        </div>
    )
}

export default ObjetInterface
