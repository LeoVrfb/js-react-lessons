import React from 'react';

const LesClasses = () => {

    class UserProfile {
        [key: string]: any;
        firstName: string;
        nickname: string;
        age: number;

        constructor(firstName: string, nickname: string, age: number) {
            this.firstName = firstName;
            this.nickname = nickname;
            this.age = age;
        }

        displayInfo() {
            let object = Object(this);
            let output = '';
            for (let value in object) {
                output += `${this[value]}\n`;
            }
            return output;
        }
    }

    const user1 = new UserProfile('Leo', 'Ayu', 27);

    return (
        <div>


            <h2>{user1.displayInfo()}</h2>
            <h2>{user1.firstName}</h2>
            <h2>{user1.nickname}</h2>
        </div>
    );
}




export default LesClasses;