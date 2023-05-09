interface UserProfile {
    name: string;
    age: number;
}

class PlusUserProfile implements UserProfile {
    constructor(public name: string, public age: number, public color: string) { }

}

const user = new PlusUserProfile("Alexis", 27, "crimson");
console.log(user1.color);