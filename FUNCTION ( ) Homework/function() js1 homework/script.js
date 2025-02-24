// --------------------------< Func1 >-------------------------

// function power(a, n) {
//     return Math.pow(a, n);
// }


// console.log(power(3, 5)); 

// --------------------------< Func2 >-------------------------

// function power(a, n) {
//     return Math.pow(a, n);
// }

// function mean(a, b) {
//     let arithmeticMean = (a + b) / 2;
//     let geometricMean = Math.sqrt(a * b);
//     return [arithmeticMean, geometricMean];
// }

// console.log(power(3, 5));
// console.log(mean(12, 48));



// --------------------------< Func3 >-------------------------


// function power(a, n) {
//     return Math.pow(a, n);
// }

// function mean(a, b) {
//     let arithmeticMean = (a + b) / 2;
//     let geometricMean = Math.sqrt(a * b);
//     return [arithmeticMean, geometricMean];
// }

// console.log(power(3, 5));
// console.log(mean(12, 48));



// --------------------------< Func4 >-------------------------

// function isSquare(k) {
//     if (k <= 0) {
//         return false;
//     }
    
//     let sqrtK = Math.floor(Math.sqrt(k));
//     return sqrtK * sqrtK === k;
// }

// console.log(isSquare(36));  
// console.log(isSquare(25)); 


// --------------------------< Func5 >-------------------------

// function digitCount(k) {
//     if (k <= 0) {
//         throw new Error("k musbat bo'lishi kerak");
//     }
//     return k.toString().length;
// }

// console.log(digitCount(8791)); 


// --------------------------< Func6 >-------------------------

// function sumRange(A, B) {
//     if (A > B) return 0;
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumRange(5, 11)); 

// --------------------------< Func7 >-------------------------

// function nuber(A, B, S) {
//     switch (S) {
//         case '+': return A + B;
//         case '-': return A - B;
//         case '*': return A * B;
//         case '/': return B !== 0 ? A / B : 0;
//         default: return 0;
//     }
// }

// console.log(nuber(10, 15, "*")); 
// console.log(nuber(7, 8, "+")); 
// console.log(nuber(10, 0, "/")); 
// console.log(nuber(5, 3, "%"));   

// --------------------------< Func8 >-------------------------

// function isEven(K) {
//     return K % 2 === 0;
// }

// console.log(isEven(10));
// console.log(isEven(7)); 
// console.log(isEven(-4));

// --------------------------< Func9 >-------------------------


// --------------------------< Func10 >-------------------------

// function number(K, N) {
//     if (K <= 0 || N <= 1) return false; 
//     while (K % N === 0) {
//         K /= N;
//     }
//     return K === 1;
// }

// console.log(number(8, 2));  


// --------------------------< Func11>-------------------------

// function number(N) {
//     if (N < 2) return false; 
//     for (let i = 2; i * i <= N; i++) {
//         if (N % i === 0) return false; 
//     }
//     return true;
// }

// console.log(number(3));

// --------------------------< Func12>-------------------------

// function number(N) {
//     if (N < 2) return false;
//     for (let i = 2; i * i <= N; i++) {
//         if (N % i === 0) return false;
//     }
//     return true;
// }

// function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//         if (number(i)) count++;
//     }
//     return count;
// }

// console.log(numberOfPrime(10));

// --------------------------< Func13 >-------------------------



// --------------------------< Func14 >-------------------------



// --------------------------< Func15 >-------------------------


// function inverseNumber(N) {
//     return parseInt(N.toString().split("").reverse().join(""), 10);
// }

// function isPalindrom(N) {
//     return N === inverseNumber(N);
// }

// console.log(isPalindrom(218)); 

// --------------------------< Func16 >-------------------------

// function factorial(N) {
//     if (N < 0) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }
//     return result;
// }


// console.log(factorial(5)); 
// console.log(factorial(0));  
// console.log(factorial(-3)); 

// --------------------------< Func17 >-------------------------


// function getSum3(N) {
//     let sum = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(getSum3(15)); 

// --------------------------< Func18 >-------------------------

// function sumOddEven(N) {
//     let sumEven = 0, sumOdd = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             sumEven += i;
//         } else {
//             sumOdd += i;
//         }
//     }
//     return [sumEven, sumOdd];
// }


// console.log(sumOddEven(10));

// --------------------------< Func19 >-------------------------

// function invertTime(H, M, S) {
//     return H * 3600 + M * 60 + S;
// }

// console.log(invertTime(0, 6, 40)); 

// --------------------------< Func20 >-------------------------
