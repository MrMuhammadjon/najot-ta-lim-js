// function getOddDividersSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i += 2) { 
//         if (n % i === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// let n = 30;
// console.log(getOddDividersSum(n));  



// - ------- -- - - - 



// function search(arr, str) {
//     return arr.filter(name => name.toLowerCase().includes(str.toLowerCase()));
// }

// let arr = ["Abdulaziz", "Shahobiddin", "Shohrux", "Shukurjon", "Azamat", "Rahmatulla"];
// let str = "az";
// console.log(search(arr, str));



//  = = = =  == = = 

// function getDividersSum(arr, n) {
//     return arr.filter(num => num % n === 0).reduce((sum, num) => sum + num, 0);
// }

// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;
// console.log(getDividersSum(arr, n)); 


//  = = = = = 

// function checkSentence(str) {
//     return /^[A-Z].*\.$/.test(str);
// }

// // Example usage:
// let str = "Abdulaziz programmer is full-stack developer.";
// console.log(checkSentence(str))


//   = = = = = 


// function getNumberOfCases(str) {
//     let upperCases = (str.match(/[A-Z]/g) || []).length;
//     let lowerCases = (str.match(/[a-z]/g) || []).length;
//     return { upperCases, lowerCases };
// }

// let str = "Abdulaziz Programmer";
// console.log(getNumberOfCases(str));



//  = = = = = 

// function changeObjToString(obj) {
//     let keys = Object.keys(obj).join('');
//     let values = Object.values(obj).join('');
//     return keys + values;
// }

// let obj = {a: 1, b: 2, c: 3};
// console.log(changeObjToString(obj));


// = = = = =


// const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
//   ];

//   function getProductsSum(...ids) {
//       return products
//           .filter(product => ids.includes(product.id))
//           .reduce((sum, product) => sum + product.price, 0);
//   }

//   console.log(getProductsSum(4, 6, 9));

//  = = = = = = = = 

// const products = [
//     { id: 1, name: 'Bike', price: 100 },
//     { id: 2, name: 'TV', price: 400 },
//     { id: 3, name: 'Album', price: 800 },
//     { id: 4, name: 'Book', price: 600 },
//     { id: 5, name: 'Phone', price: 500 },
//     { id: 6, name: 'Computer', price: 1000 },
//     { id: 7, name: 'Skate', price: 300 },
//     { id: 8, name: 'Keyboard', price: 200 },
//     { id: 9, name: 'Bottle', price: 700 },
// ];

// function getTopProducts(products, n) {
//     return products
//         .sort((a, b) => b.price - a.price)
//         .slice(0, n)
//         .map(product => product.name);
// }

// let n = 3;
// console.log(getTopProducts(products, n));



// = = = = = = = = = 


// String.prototype.count = function(char) {
//     return [...this].filter(c => c === char).length;
// };

// let str = "Abdulaziz Programmer";
// let char = "a";
// console.log(str.count(char));

//  == = = = = 
