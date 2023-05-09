class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @loggedMethod
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

function loggedMethod(originalMethod: any, context: any) {
    return function replacementFunction(this: any, ...args: any) {
        console.log(`Enter in method`)
        const result = originalMethod.call(this, ...args)
        console.log(`Exit from method`)
        return result
    }
}

const p = new Person("Ron");
p.greet();
