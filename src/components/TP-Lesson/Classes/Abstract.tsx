import React from 'react'

const Abstract = () => {

    abstract class UserProfile {
        constructor(public name: string, public age: number) { }
    }
    class AdvancedUserProfile extends UserProfile {
        constructor(name: string, age: number, public color: string) {
            super(name, age);
        }
    }

    const user1 = new AdvancedUserProfile("Alexis", 27, "crimson");
    // const user2 = new UserProfile("Alexis", 25); // Le mot clé abstract empêche d'avoir accès aux instance de cette class


    return (
        <div>

        </div>
    )
}

export default Abstract
