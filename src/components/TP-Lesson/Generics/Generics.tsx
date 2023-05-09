function generics(data: any) {
    return data;
}
console.log(generics("Leo"));
console.log(generics(27));
console.log(generics(true));

function identity<T>(data: T) { //dit qu'il faut donner un type à la fonction, peu importe ce type
    return data;
}
console.log(identity<string>("Leo"));
console.log(identity<number>(27));
console.log(identity<boolean>(true));

const monArray: Array<number> = [1, 5, 2];
monArray.push(6);