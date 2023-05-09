class CalculFonctions<T> {
    add: (x: T, y: T) => T;
    sub: (x: T, y: T) => T;
}

let myTotal = new CalculFonctions<number>();
myTotal.add = (x, y) => x + y;