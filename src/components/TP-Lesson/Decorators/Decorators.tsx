// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @loggedMethod
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// function loggedMethod(
//   originalMethod: any,
//   context: ClassMethodDecoratorContext
// ) {
//   const { name: methodName } = context;
//   return function replacementFunction(this: any, ...args: any) {
//     console.log(`Enter in method ${String(methodName)}`);
//     const result = originalMethod.call(this, ...args);
//     console.log(`Exit from method ${String(methodName)}`);
//     return result;
//   };
// }

// const p = new Person('Ron');
// p.greet();

export {};
