// ---------- 1 ---------


// function  daeg(n) {
//     let newArr = []
//     for (let i = 1; i < n; i++) {
//         newArr.push(2 ** i)
//     }
//     return newArr
// }

// console.log(daeg(5));

// ---------- 2 ---------


// function counter(n) {
//     let newArr1 = []
//     let newArr2 = []
//     for (let i = 0; i < n; i++) {
//         newArr1.push(i)
//         for (let j = 0; j < newArr1.length; j++) {
//             newArr2.push(newArr1[i] % 2 == 0)
//         }
//     }
//     return newArr2
// }

// console.log(counter(6));


// ---------- 3 ---------


// function findOddNumbers(arr) {
//     let oddNumbers = []; 
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) { 
//             oddNumbers.push(arr[i]);
//             count++;
//         }
//     }

//     console.log(oddNumbers.join(" "), "toqlar soni =", count);
// }

// let numbers = [4, 5, 7, 8, 6, 9];
// findOddNumbers(numbers); 


// ---------- 4 ---------

// function juftIndeksElementlar(arr) {
//     return arr.filter((_, index) => index % 2 === 0);
// }

// let input = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(juftIndeksElementlar(input));


// ---------- 5 ---------

// function teskari(arr) {
//     let natija = [];
//     for (let i = arr.length - 1; i > 0; i -= 2) {
//         natija.push(arr[i]); 
//     }
//     return natija;
// }

// let input = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(teskari(input));


// ---------- 6 ---------

// function juftVaToq(arr) {
//     let natija = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         natija.push(arr[i]);
//     }

//     for (let i = 1; i < arr.length; i += 2) {
//         natija.push(arr[i]);
//     }

//     return natija;
// }

// let input = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(juftVaToq(input)); 



// ---------- 7 ---------

// function customPrint(arr) {
//     let n = arr.length;
//     let result = [];
//     let left = 0, right = n - 1;
    
//     while (left <= right) {
//         if (left < n) {
//             result.push(arr[left]);
//         }
//         if (right > left) {
//             result.push(arr[right]);
//         }
//         left += 2;
//         right -= 2;
//     }
    
//     console.log(result);
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// customPrint(a);

// ---------- 8 ---------

// function getOddMin(arr) {
//     let min = Infinity;
//     for (let i = 0; i < arr.length; i += 2) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// let a = [4, 7, 1, 9, 3, 6, 8, 2];
// console.log(getOddMin(a));

// ---------- 9 ---------

// function getOddMin(arr) {
//     let min = Infinity;
//     for (let i = 0; i < arr.length; i += 2) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// function getEvenMax(arr) {
//     let max = -Infinity;
//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let a = [4, 7, 1, 9, 3, 6, 8, 2];
// console.log(getOddMin(a));
// console.log(getEvenMax(a));


// // ---------- 10 ---------
// function f(arr) {
//     let m = -Infinity;
//     let p = null;
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         let s = arr[i] + arr[i + 1];
//         if (s > m) {
//             m = s;
//             p = [arr[i], arr[i + 1]];
//         }
//     }
    
//     return p;
// }

// let a = [4, 7, 1, 9, 3, 6, 8, 2];
// console.log(f(a));
