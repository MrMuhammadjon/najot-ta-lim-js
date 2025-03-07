//  -------------------- rest operator -----------------

// function rest(...values) {
//     let sum = 0
//     for (let i = 0; i < values.length; i++) {
//         sum += values[i]
//     }
//     return sum

// }

// console.log(rest(1, 2, 3, 4, 5, 7));




// ---------------------------- factory function -------------------------


// function one(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                return a + b + c + d
//             }
//         }
//     }
// }

// const first = one(3)
// const second = first(5)
// const third = second(5)
// const res = third(7)

// console.log(res);

// -------------------------- VID --------------------------

// function one(params) {
//     const setinterval = setTimeout(() => {
//         return function (res) { 
//             console.log("5" + "5");
            
//         }
//     }, params)
// }


// const first = one(2000);
// const res = first(5)


function cd(params) {
    
}