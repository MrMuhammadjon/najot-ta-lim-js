//  task---2

// let str = 'A'
// let AlafibtCondesatard = 65;
// let AlfabitCondeend = 122; 

// for (let i = 0; i < str.length; i++) {
//     if (st[i].codePointAt() >= AlafibtCondesatard && str.codePointAt() <= AlfabitCondeend) {
//         console.log('lotin');
//         console.log(str[i].codePointAt());


//     }else{
//         console.log('digit');
//         console.log(str[i].codePointAt());
//     }

// }

//   task---3

// let str = "UTF-16";

// if (str.length === 0) {
//     console.log("String is empty");
// } else {
//     let firstChart = str.charAt(0);
//     let lastChart = str.charAt(str.length - 1);

//     let firstCode = firstChart.charCodeAt(0);
//     let lastCode = lastChart.charCodeAt(0);

//     console.log(`First character: ${firstChart},  end Code: ${firstCode}`);
//     console.log(`Last character: ${lastChart}, second end  Code: ${lastCode}`);
// }


//   task---4

// let N = '2';
// let belgi = 'c';
// let result = belgi.repeat(N)
// console.log(result);


// task----5


// let N = 1;
// let char = 'salom';

// let result = char.repeat(N);
// console.log(result);

// let reversedResult = result.split('').reverse().join('');
// console.log(reversedResult);


// task---6

// function countDigits(str) {
//     let count = 0;
//     for (let char of str) {
//         if (!isNaN(char) && char !== ' ') {
//             count++;
//         }
//     }
//     return count;
// }

// let sampleString = "Hello1 woerld3";
// console.log(`Number of digits: ${countDigits(sampleString)}`);

// task---7

// function countLowercaseLetters(str) {
//     let count = 0;
//     for (let char of str) {
//         if ((char >= 'a' && char <= 'z') || (char >= 'а' && char <= 'я')) {
//             count++;
//         }
//     }
//     return count;
// }

// let sampleString = "Hell мир";
// console.log(`Number of lowercase Latin and Cyrillic letters: ${countLowercaseLetters(sampleString)}`);


//  task---8



// task---9\

// function countLowercaseLetters(str) {
//     let count = 0;
//     for (let char of str) {
//         if ((char >= 'a' && char <= 'z') || (char >= 'а' && char <= 'я')) {
//             count++;
//         }
//     }
//     return count;
// }

// function convertToLowercase(str) {
//     return str.toLowerCase();
// }

// let sampleString = "Hello123a mir";
// console.log(`Number of lowercase Latin and Cyrillic letters: ${countLowercaseLetters(sampleString)}`);
// console.log(`Converted string: ${convertToLowercase(sampleString)}`);


// task---10

// function swapCase(str) {
//     let result = "";
//     for (let char of str) {
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//     return result;
// }

// let sampleString = "Hello123 Мир";
// console.log(`Swapped case string: ${swapCase(sampleString)}`);


// task---11

// function checkNumberType(str) {
//     if (!isNaN(str) && str.trim() !== "") {
//         if (Number.isInteger(Number(str))) {
//             return 1; 
//         } else {
//             return 2; 
//         }
//     }
//     return 0;
// }

// console.log(checkNumberType("22.1"));


// task---12


// function getInverseNumber(n) {
//     if (typeof n !== "number" || isNaN(n)) {
//         return null; 
//     }

//     let reversed = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
//     return reversed;
// }

// console.log(getInverseNumber(1234));  


// task---13

// function duplicateCharacter(S, C) {
//     return S.split(C).join(C + C);
// }

// console.log(duplicateCharacter("hello world", "o"));


// task---14


// function hosilQil(S1, S2, N1, N2) {
//     let yangiSatr = S1.slice(0, N1) + S2.slice(-N2);
//     return yangiSatr;
// }

// let S1 = "Matematika";
// let S2 = "Informatika";
// let N1 = 4;
// let N2 = 5;

// console.log(hosilQil(S1, S2, N1, N2)); 




// task---15

// function ikkiMartaQosh(S, C) {
//     let yangiSatr = "";

//     for (let i = 0; i < S.length; i++) {
//         yangiSatr += S[i];
//         if (S[i] === C) {
//             yangiSatr += C;
//         }
//     }

//     return yangiSatr;
// }

// let S = "salom";
// let C = "o";

// console.log(ikkiMartaQosh(S, C));

// task---16

// function belgiOldigaQosh(S1, S2, C) {
//     let yangiSatr = "";

//     for (let i = 0; i < S1.length; i++) {
//         if (S1[i] === C) {
//             yangiSatr += S2;
//         }
//         yangiSatr += S1[i];
//     }

//     return yangiSatr;
// }


// let S1 = "banana";
// let S2 = "-";
// let C = "a";

// console.log(belgiOldigaQosh(S1, S2, C));


// task---17

// function bir(S1, S2) {
//     return S1.replace(S2, "");
// }

// // Misol
// let S1 = "banana";
// let S2 = "na";

// console.log(bir(S1, S2));


// task---18


// function barchaUchrashuvlarniOchirish(S1, S2) {
//     return S1.split(S2).join(""); 
// }

// // Misol
// let S1 = "banana";
// let S2 = "na";

// console.log(barchaUchrashuvlarniOchirish(S1, S2));

//  task---19


//  task---20

// function birinchiUchrashniAlmashtirish(S1, S2, S3) {
//     return S1.replace(S2, S3); 
// }

// let S1 = "banana";
// let S2 = "na";
// let S3 = "xy";

// console.log(birinchiUchrashniAlmashtirish(S1, S2, S3)); // 

