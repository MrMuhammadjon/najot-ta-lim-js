// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)


// 2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];


// let newREduc = animals.reduce((acc, animals) => {
//     acc[animals] = (acc[animals] || 0) + 1    
//     return acc
// }, {})

// console.log(newREduc);


// 3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)


// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]


// let input = [1, 2, 3, 4, 5]

// let newinput = input.map(input => Math.pow(input, 2))
// console.log(newinput);



// 4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)


// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42

// function primitive(arry) {
//     return arry.filter(num => num > 0).reduce((sum, num) => sum + num, 0)
// }

// let input = [ 1, -4, 12, 0, -3, 29, -150];

// console.log(primitive(input));


// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)


// Input: 'George Raymond Richard Martin'
// Output: 'GRRM'


// function splitText(params) {
//     return params.split(' ').map(A => A[0]).join('')
// }

// let input = 'George Raymond Richard Martin'
// console.log(splitText(input));


// 6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).


// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54


// function sortPerson(params) {
//     params.sort((a, b) => a.age - b.age)
//     let minAge = params[0].age
//     let maxAge = params[params.length - 1].age
//     let Miss = maxAge - minAge
//     return Miss
// }

// let input = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];

// console.log(sortPerson(input));



// 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)


// function  FilterMassi(params) {
//     let juftson = params.filter(num => num % 2 === 0)
//     let tokson = params.filter(num => num % 2 === 1)
//     return { tokson, juftson}
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(FilterMassi(numbers));



// 8.  N ta elementdan iborat massiv berilgan.Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin.
// Faqat birinchi uchragani qoldirilsin. (reduce)


// function removeDuplic(arr) {
//     return arr.reduce((acc, item) => {
//         if (!acc.includes(item)) {
//             acc.push(item);
//         }
//         return acc;
//     }, []);
// }

// let N = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, , 9, 4, 9]

// console.log(removeDuplic(N));



// 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 }
// ];

// let A = 'sortById';
// let B = 'sortByname';
// let C = 'sortByprice'
// let J = 'sortByRating'

// let input = 'sortByRating';


// function SortProducts(params) {
//     if (A = input) {
//         const sortedById = [...params].sort((a, b) => a.id - b.id);
//         return sortedById
//     } else if (B = input) {
//         const sortedByName = [...params].sort((a, b) => a.name.localeCompare(b.name));
//         return sortedByName
//     }
//     else if (C = input) {
//         const sortedByName = [...params].sort((a, b) => a.price - b.price);
//         return sortedByName
//     } else if (J = input) {
//         const sortedByRating = [...products].sort((a, b) => b.rating - a.rating);
//         return sortedByRating
//     } else {
//         const sortedByDiscount = [...products].sort((a, b) => b.discount - a.discount);
//         return sortedByDiscount
//     }

// }

// console.log(SortProducts(products));


// 10. Rating bo'yicha eng kuchli product topilsin. (sort)


// function SortByRating (params) {
//     const SortByRating = [...params].sort((a, b) => a.rating - b.rating) 
//     return SortByRating
// }

// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 }
// ];

// console.log(SortByRating(products));

