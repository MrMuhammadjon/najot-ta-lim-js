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
