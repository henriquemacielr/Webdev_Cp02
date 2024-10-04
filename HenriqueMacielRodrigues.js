// Exercício 01
function numPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let testeNumero = 7; 
console.log(testeNumero + (numPrimo(testeNumero) ? " é um número primo." : " não é um número primo."));


// Exercício 02
function entrePrimos(X, Y) {
    let contador = 0;
    for (let i = X; i <= Y; i++) {
        if (numPrimo(i)) {
            contador++;
        }
    }
    console.log(`Quantidade de números primos entre ${X} e ${Y}: ${contador}`);
}

let x = 10; 
let y = 30; 
entrePrimos(x, y);


// Exercício 03
function entrePrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function contarPrimos(X, Y) {
    let contador = 0;
    for (let i = X; i <= Y; i++) {
        if (entrePrimo(i)) {
            contador++;
        }
    }
    console.log(`Entre os números ${X} e ${Y}, há ${contador} números primos`);
}

let x = 10; 
let y = 30; 
contarPrimos(x, y);


// Exercício 04
function fibonacci(n) {
    let a = 1, b = 1; 
    console.log(a); 

    if (n > 1) {
        console.log(b); 
    }

    for (let i = 3; i <= n; i++) {
        const proximoTermo = a + b; 
        console.log(proximoTermo); 
        a = b; 
        b = proximoTermo; 
    }
}
fibonacci(10);
