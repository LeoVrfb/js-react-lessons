export namespace MathFunctions {

    export function soustraction(x: number, y: number) {
        return x - y;
    }

    export function division(x: number, y: number) {
        return x / y;
    }

    export function addition(x: number, y: number) {
        return x + y;
    }

    export function multiplication(x: number, y: number) {
        return x * y;
    }
}

console.log(MathFunctions.addition(5, 5));
console.log(MathFunctions.multiplication(5, 5));





export function addition(arg0: number, arg1: number): any {
    throw new Error('Function not implemented.');
}

export function multiplication(arg0: number, arg1: number): any {
    throw new Error('Function not implemented.');
}
/// <reference path="nom du fichier" />
// Voilà comment on appelle un namespace dans un fichier js classique
// Cependant les namespace ne sont pas une fonctionnalité es6 donc pour des questions d'incompatibilité il est conseillé de ne pas les utiliser. Attention également aux modifications du fichier ts.config à faire pour l'utiliser. Difficile à gérer sur les gros projets.

