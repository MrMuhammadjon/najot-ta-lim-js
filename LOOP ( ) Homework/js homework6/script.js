// for-----1

// let i = 1;
// let l = 15;

// for (i; i <= l; i++) {
//     console.log(i);

// }

// for-----2

// let l = 10

// for (let i = 1; i <= l; i++) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }

// }


// for------3

// let price = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(i + " kg konfet narxi:", price * i);
// }

// for------4

// let price = 5;

// for (let i = 1.2; i <= 2; i += 0.2) {
//     console.log(i + " kg konfet narxi:", price * i);
// }

// for------5

// let a = 1;
// let b = 2;
// let c = 0;

// for (let i = a; i <= b; i++) {
//  c += i;
// }

// console.log("javob", c);

// for------6

// let a = 1;
// let b = 3;
// let c = 1;

// for (let i = a; i <= b; i++) {
//  c *= i;
// }

// console.log("javob", c);

// for------7

// let a = 2;
// let b = 5;
// let kavdratyigindi = 0;

// for (let i = a; i <= b; i++) {
//     kavdratyigindi += i * i;
// }

// console.log("Kvadratlar yig'indi", kavdratyigindi);

// for------8

// let n = 3;
// let l = 1;

// for (let i = 1.1; i <= n; i += 0.1) {
//     l *= i;
// }

// console.log("javob:", l);

// for------9


// for (let i = 1.1; i <= 2; i += 0.1) {

//     if (i < 0) {
//         break;
//     }

//     console.log("Ko'paytma:", i);

// }



// for------10

// let square = 0;
// let n = 2
// let n = prompt("butun son kiritinglarrrrr iltiomos shu kod ishlasinnnnnn")

// for (let i = 1; i <= 2 * n - 1; i += 2) {
//     square += i;
//     console.log("Natija:", square);
// }

// for------11


// let a = 2.5;
// let power = 1;
// let n = 3

// for (let i = 1; i <= n; i++) {
//     power *= a;
// }
// console.log("Daraja:", power);

// for------12

// let a = 2;
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     console.log(a + " ning " + i + " - darajasi: " + a ** i);
// }


// for------13

// let a = 2;
// let n = 3;

// for (let i = 1; i <= n; i++) {
//     console.log(i + " ning " + a + " - darajasi: " + a ** i);
// }

// for------14


// let n = 5
// let a = 1

// for (let i = 1; i < n; i++) {

//     a *= i
// }

// console.log(a);

// let n = 5;
// let S = 0;

// for (let i = 1; i <= n; i++) {

//     let faktorial = 1;

//     for (let j = 1; j <= i; j++) {
//         faktorial *= j;
//     }
//     S += faktorial;
// }

// console.log("Yig'indi S:", S);




// for------15

// let k = 3;
// let n = 3
// let sumK = 0;
// for (let i = 1; i <= n; i++) {
//     sumK += Math.pow(i, k);
// }
// console.log("Daraja", sumK);

// for------16

let sumNN = 0;
let n = 3

for (let i = 1; i <= n; i++) {
    sumNN += Math.pow(i, i);
}
console.log("For16 - S:", sumNN);

// for------17

//

// for------18



// for------19
// let n = -2

// let isPrime = n > 1;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// console.log("For19 - Tubmi:", isPrime);

// for------20

// let n = 5

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//     console.log(row);
// }



