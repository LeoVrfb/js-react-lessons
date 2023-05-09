class FonctionCalcul<T extends number, U extends number> { /* ... | string (j'aurais une erreur)*/
    x: T;
    y: U;
    add(): number {
        return this.x + this.y;
    }
    sub(): number {
        return this.x - this.y;
    }
}
let monTotal = new FonctionCalcul<number, number>();
monTotal.x = 10;
monTotal.y = 5;
console.log(monTotal.add());
console.log(monTotal.sub());

