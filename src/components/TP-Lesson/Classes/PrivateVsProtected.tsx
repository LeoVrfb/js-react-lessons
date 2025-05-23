import React from 'react'

const PrivateVsProtected = () => {

    class UserProfile {
        constructor(public name: string, public age: number, private _firstName: string = 'Hello', protected _secondName: string = 'world') { }

        get firstName() { // la propriété est private donc on doit l'initialisé directement dans la class
            return this._firstName;
        }
    }


    class AdvancedUserProfile extends UserProfile {
        constructor(
            name: string,
            age: number,
            public hobbies: string[],
            public color: string,
        ) {
            super(name, age)
        }
        get secondName() {
            return this._secondName; // la propriété est protected donc on peut l'appeler dans l'extends
        }
    }
    const user1 = new AdvancedUserProfile(
        "Alexis",
        27,
        ["Lire", "Basket"],
        "crimson"
    );
    console.log(user1.firstName, user1.name, user1.hobbies, user1.secondName);
    return (
        <div>

        </div>
    )
}

export default PrivateVsProtected
