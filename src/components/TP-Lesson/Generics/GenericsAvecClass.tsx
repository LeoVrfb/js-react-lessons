class CalculFonctions<T> {
  add!: (x: T, y: T) => T;
  sub!: (x: T, y: T) => T;
}

let myTotal = new CalculFonctions<number>();
myTotal.add = (x, y) => x + y;
myTotal.add = (x, y) => x - y;

console.log(myTotal.add(5, 5));
console.log(myTotal.sub(5, 5));
export {};
