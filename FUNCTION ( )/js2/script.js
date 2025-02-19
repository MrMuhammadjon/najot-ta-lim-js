
// let h1 = document.querySelector('h1')
// let counter = 0

// function plas() {
//     counter++
//     h1.textContent = counter
// }

// function reset() {
//     counter = 0
//     h1.textContent = counter
// }

// function minus() {

//     if (counter > 0) {
//         counter--
//     } h1.textContent = counter
// }





//  ------ function Declaration  -------


// function hello() {
//     console.log("Hello, world!");
// }
// hello(); // Hello, world!






// ------------ function Expression  ---------------------


// const hello = function() {
//     console.log("Hello, world!");
// };
// hello(); // Hello, world!




// ---------------- function Arrow -----------------------


// const hello = () => {
//     console.log("Hello, world!");
// };
// hello(); // Hello, world!


// ----------------------- Function Expression (IIFE) ------------------

// (function() {
//     console.log("This function runs immediately!");
// })(); 
// // This function runs immediately!



// (() => console.log("IIFE example"))(); 
// // IIFE example


// const toshmat = (x, b) => {
//     let javob = x + b
//     return javob
// }

// console.log(toshmat(10, 20));

// console.log(toshmatqosh());



function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display');
    let lastChar = display.value.slice(-1);
    
    // Agar oxirgi kiritilgan belgi operator bo'lsa, almashtirmaslik uchun tekshirish
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    display.value += operator;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Math amalini bajarish
    } catch (e) {
        alert('Xato! Qayta urinib ko’ring.');
        clearDisplay();
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}