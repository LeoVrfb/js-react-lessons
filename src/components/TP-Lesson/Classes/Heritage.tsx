class UserProfile {
    // name: string;  //façon moderne, nous n'avons plus besoin d'écrire  cela
    // age: number;

    constructor(public name: string, age: number) {
        // this.name = name; 
        // this.age = age;
    }
}

class AdditionUserProfile extends UserProfile {
    // hobbies: string[];
    // color: string;

    constructor(name: string, age: number, public hobbies: string[], public color: string) {
        super(name, age); // pour utiliser les propriétés de la classe parente, on a simplement besoin de les appeler dans le constructor et dans super()

        // this.hobbies = hobbies;
        // this.color = color;
    }
}

const user1 = new AdditionUserProfile("Alexis", 27, ["Lire", "Basket"], "crimson");
console.log(user1.name, user1.hobbies);

