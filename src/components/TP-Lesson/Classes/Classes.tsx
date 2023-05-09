import React from 'react';

const Classes = () => {

    class UserProfile {
        [key: string]: any;
        firstName: string;
        nickname: string;
        age: number;
        private _password: string = 'testpw' //par défaut, la variable est public
        public static myName: string = 'Leo'; //Tout ce qui est static n'a pas besoin de créer d'instance de Class pour être appelé. Il peut être directement appelé depuis UserProfile.
        public myNewName: string = 'Justine';
        static sayHello() {
            console.log('Hello');
        }
        sayWorld() {
            console.log('World');
        }

        constructor(firstName: string, nickname: string, age: number) {
            this.firstName = firstName;
            this.nickname = nickname;
            this.age = age;
        }

        get password(): string {
            return this._password;
        }

        set password(newPw: string) {
            this._password = newPw;
        }

        displayInfo() {
            const values = [];
            let keys = Object.keys(this);
            for (let key of keys) {
                values.push(this[key]);
            }
            return values;
        }

    }



    const user1 = new UserProfile('Leo', 'Ayu', 27);
    user1.password = 'NewPassword'// grace à la fonction set, je réaffecte une valeur à la variable privée
    UserProfile.sayHello()
    console.log(UserProfile.myName)
    user1.sayWorld();
    console.log(user1.myNewName)


    return (
        <div>
            <h5>1.Les Classes, cours 17</h5>
            <h5>2.Les fonctions dans les classes</h5>
            <h5>3.Variable private et public</h5>
            <h5>4.Mot clé static</h5>
            <h5>5.Mot clé static</h5>

            {user1.displayInfo().map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            <p>{user1.firstName}</p>
            <p>{user1.nickname}</p>
            <p>{user1.age}</p>
            <p>{user1.password}</p>

        </div>
    );
}

export default Classes;


