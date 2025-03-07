
// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)
// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)

// let max = 100;
// let A = 85;
// let B = 70;
// let C = 60;

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getGrade(percent) {
//   if (percent >= A && percent <= max) return "5 baho";
//   if (percent >= B && percent < A) return "4 baho";
//   if (percent >= C && percent < B) return "3 baho";
//   return "2 baho"; 
// }

// function filterStudent(students) {
//   return students.map(student => ({
//     name: student.name,
//     percent: student.percent,
//     grade: getGrade(student.percent)
//   }));
// }

// const gradedStudents = filterStudent(students);
// gradedStudents.forEach(student => {
//   console.log(`${student.name}: ${student.percent}% - ${student.grade}`);
// });


// 2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)


// Output: {
//   dog: 2,
//     chicken: 3,
//       cat: 1,
//         rabbit: 1
// }

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];


// const wordCount = animals.reduce((acc, animals) => {
//   acc[animals] = (acc[animals] || 0) + 1;
//   return acc;
// }, {});

// console.log(wordCount);


//3. Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)


// let Input = [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// let Input = [1, 2, 3, 4, 5]


// const newMap = Input.map(Input => Math.pow(Input, 2))
// console.log(newMap);


// 4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)


// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42

// let input = [ 1, -4, 12, 0, -3, 29, -150]

// const sum = input.filter(input =>input > 0).reduce((acc,input) => acc +input, 0)

// console.log(sum);


// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)


// Input: 'George' 'Raymond' 'Richard' 'Martin'
// Output: 'GRRM'



// let input = 'George Raymond Richard Martin'


// let newMAp = input.split(' ').map(A => A[0]).join('')

// console.log(newMAp);


// 6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).


// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54


// let input = [
//   { name: 'b', age: 13 },
//   { name: 's', age: 56 },
//   { name: 'j', age: 45 },
//   { name: 'N', age: 67 },
//   { name: 'a', age: 65 }
// ];



// input.sort((a, b) => a.age - b.age)


// let minAge = input[0].age
// let maxAge = input[input.length - 1].age

// let dif = maxAge - minAge

// console.log(dif);


// 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// function separateEvenOdd(arr) {
//     let evenNumbers = arr.filter(num => num % 2 === 0);
//     let oddNumbers = arr.filter(num => num % 2 !== 0);

//     return { evenNumbers, oddNumbers };
// }

// // Test
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = separateEvenOdd(numbers);

// console.log("Juft sonlar:", result.evenNumbers); // [2, 4, 6, 8, 10]
// console.log("Toq sonlar:", result.oddNumbers);   // [1, 3, 5, 7, 9]



// 8.  N ta elementdan iborat massiv berilgan.Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin.
// Faqat birinchi uchragani qoldirilsin. (reduce)


// let newA = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9];

// let reduct = newA.reduce((acc, newA) => {
//     acc[newA] === acc[newA]delete
// }, {})

// console.log(reduct);



// 9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)

// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 }
// ];

// const NeWSort = [...products].sort((a, b) => a.id - b.id)

// console.log(NeWSort);


// 10. Rating bo'yicha eng kuchli product topilsin. (sort)

// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 }
// ];

// const NeWSort = [...products].sort((a, b) => a.rating - b.rating)
// const newS = NeWSort.pop()
// console.log(newS);


// 11. Narxi eng past bo'lgan product topilsin. (sort)


// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 }
// ];

// const NeWSort = [...products].sort((a, b) => a.price - b.price)
// const newS = NeWSort.shift()
// console.log(newS);



// 12. Barcha products narxlari yig'indisi topilsin. (reduce)

// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 }
// ];


// const newReduct = products.reduce((acc, products) => acc + products.price, 0)
// console.log(newReduct);


// 13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)


// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 }
// ];


// const newmap = products.map((element, index, arry) => {
//     return element.name
// })

// console.log(newmap);

// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)

// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 },
//     { id: 5, name: "BMW", price: 600, rating: 4.3, discount: 15 },

// ];


// const newFind = products.find(element => element.id === 5)

// console.log(newFind);

// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)


// const products = [
//     { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1500, rating: 4.7, discount: 5 },
//     { id: 5, name: "Tablet", price: 600, rating: 4.3, discount: 15 },
//     { id: 2, name: "Headphones", price: 200, rating: 4.6, discount: 20 },
//     { id: 4, name: "Monitor", price: 300, rating: 4.2, discount: 10 },
//     { id: 5, name: "BMW", price: 600, rating: 4.3, discount: 15 },

// ];

// let fil = products.filter(element => element.id !== 4)

// console.log(fil);


// 16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)

