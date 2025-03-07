const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 28 },
    { name: "Emma", age: 26 }
];

// const s1 = {
    name: "Alice",
     age: 25
// }
// const s2 = {
    name: "Bob",
     age: 30
// }
// const s3 = {
    name: "Charlie",
     age: 22
// }
// const s4 = {
    name: "David",
     age: 28
// }
// const s5 = {
//     name: "Emma",
//      age: 26
// }



// function  AllStudents(name, age) {
//     this.name = name
//     this.age = age
// }

// const student1 = new AllStudents("Muhammadjon", 18)
// const student2 = new AllStudents("Muhammadjon", 20)

// console.log(student1);
// console.log(student2);


// const li = {
//     name: 'M-5',
//     Brand: 'BMW',
//     power: '1000ph',
// }

// Object.freeze(li)




// 📌 3.2. Object.values() - Qiymatlarni olish
// Obyektning barcha qiymatlarini massiv sifatida qaytaradi.

// const user = { name: "Alice", age: 25, country: "USA" };

// console.log(Object.values(user)); // ["Alice", 25, "USA"]

// ✅ Obyekt qiymatlarini massiv shaklida olish mumkin



// 📌 3.3. Object.entries() - Kalit-qiymat juftliklarini olish
// Bu metod obyektni [kalit, qiymat] shaklidagi massivga aylantiradi.

// const user = { name: "Alice", age: 25 };

// console.log(Object.entries(user)); 
/*
[
  ["name", "Alice"],
  ["age", 25]
]
*/

// ✅ Bu metod massivda iteratsiya qilish uchun foydali


// 📌 3.4. Object.assign() - Obyektni nusxalash va birlashtirish
// Bu metod obyektni boshqa obyektga nusxalash yoki obyektlarni birlashtirish uchun ishlatiladi.

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3 };

// const merged = Object.assign({}, obj1, obj2);

// console.log(merged); // { a: 1, b: 2, c: 3 }

// ✅ Object.assign() nusxa yaratadi va obyektlarni birlashtiradi



// 📌 3.5. Object.freeze() - Obyektni muzlatish (o‘zgartirib bo‘lmaydigan qilish)
// Bu metod obyektni o‘zgarmas qilib qo‘yadi.

// const user = { name: "Alice", age: 25 };

// Object.freeze(user);

// user.age = 30; // ❌ Ishlamaydi
// console.log(user.age); // 25


// ✅ Object.freeze() obyektni o‘zgartirib bo‘lmaydigan qiladi



// 📌 3.6. Object.seal() - Obyektni "muhrlash" (faqat mavjud xususiyatlarni o‘zgartirish mumkin)
// Farqi shundaki, yangi xususiyat qo‘shib yoki o‘chirish mumkin emas, lekin mavjudlarini o‘zgartirish mumkin.

// const user = { name: "Alice", age: 25 };

// Object.seal(user);

// user.age = 30;  // ✅ Ishlaydi
// user.country = "USA"; // ❌ Ishlamaydi
// delete user.name; // ❌ Ishlamaydi

// console.log(user); // { name: "Alice", age: 30 }

// ✅ Object.seal() faqat mavjud xususiyatlarni o‘zgartirishga ruxsat beradi




// 📌 JavaScript this Kalit So‘zi
// this JavaScript-da obyektga bog‘langan kontekst ni bildiradi. Uning qiymati kodning qayerda va qanday chaqirilganiga bog‘liq.

// 1. Obyekt Ichida this
// Agar this obyekt metodida ishlatilsa, u o‘sha obyektni anglatadi:



// 📌JavaScript: Shallow Copy va Deep Copy
// JavaScript-da obyektni nusxalash (copy) qilishda shallow copy va deep copy usullari bor.


// 📌 1. Shallow Copy (Yuqori sathdagi nusxa)
// Shallow copy obyektning faqat ustki qavatini nusxalaydi.
// Agar obyekt ichida boshqa obyektlar (nested objects) bo‘lsa, ularning faqat referens (manzil) nusxalanadi.

// Shallow Copy usullari:

// Object.assign()
// Spread operator (...)


// 📌 1.1. Object.assign() bilan nusxalash
// 

// const obj1 = { name: "Alice", details: { age: 25, city: "NY" } };
// const obj2 = Object.assign({}, obj1);

// obj2.name = "Bob"; 
// obj2.details.age = 30; // Nested obyekt o'zgaradi!

// console.log(obj1); 
// // { name: "Alice", details: { age: 30, city: "NY" } }
// console.log(obj2); 
// // { name: "Bob", details: { age: 30, city: "NY" } }

// ✅ Tashqi xususiyatlar mustaqil o'zgaradi (name), lekin nested obyekt (details) reference orqali bir xil bo'lib qoladi.


// 📌 1.2. Spread Operator (...) bilan nusxalash

// const obj1 = { name: "Alice", details: { age: 25, city: "NY" } };
// const obj2 = { ...obj1 };

// obj2.name = "Bob";
// obj2.details.age = 30; // Nested obyekt o'zgaradi!

// console.log(obj1);
// // { name: "Alice", details: { age: 30, city: "NY" } }
// console.log(obj2);
// // { name: "Bob", details: { age: 30, city: "NY" } }

// ✅ details (nested obyekt) referens orqali nusxalanadi, bu shallow copy!



// 📌 2. Deep Copy (To'liq nusxa)
// Deep copy obyektning hamma qismlarini (nested obyektlarni ham) yangi nusxada yaratadi.
// Yangi obyekt eski obyekt bilan bog‘liq bo‘lmaydi.

// 📌 2.1. JSON.parse(JSON.stringify(obj)) usuli
// Eng oson deep copy usuli:


// const obj1 = { name: "Alice", details: { age: 25, city: "NY" } };
// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.name = "Bob";
// obj2.details.age = 30; // Nested obyekt mustaqil!

// console.log(obj1); 
// // { name: "Alice", details: { age: 25, city: "NY" } }
// console.log(obj2);
// // { name: "Bob", details: { age: 30, city: "NY" } }

// ✅ Nested obyekt (details) mustaqil bo‘ldi!
// ⚠️ Kamchilik: Bu usul function, undefined, Symbol, Date va RegExp larni yo‘qotadi!



// 📌 2.2. structuredClone() (Modern JavaScript)
// structuredClone() bu deep copy uchun eng yaxshi usul.

// const obj1 = { name: "Alice", details: { age: 25, city: "NY" } };
// const obj2 = structuredClone(obj1);

// obj2.details.age = 30; // Nested obyekt mustaqil!

// console.log(obj1); 
// // { name: "Alice", details: { age: 25, city: "NY" } }
// console.log(obj2);
// // { name: "Alice", details: { age: 30, city: "NY" } }

// ✅ Modern va xavfsiz yechim!
// ⚠️ structuredClone() faqat browser va Node.js 17+ versiyalarida ishlaydi.


// 📌 2.3. Lodash (_.cloneDeep) bilan Deep Copy
// Lodash kutubxonasi yordamida ham deep copy qilish mumkin.

// const _ = require("lodash");

// const obj1 = { name: "Alice", details: { age: 25, city: "NY" } };
// const obj2 = _.cloneDeep(obj1);

// obj2.details.age = 30; // Nested obyekt mustaqil!

// console.log(obj1);
// // { name: "Alice", details: { age: 25, city: "NY" } }
// console.log(obj2);
// // { name: "Alice", details: { age: 30, city: "NY" } }

// ✅ Eng ishonchli usullardan biri!
// ⚠️ Buning uchun lodash kutubxonasini o‘rnatish kerak.


// Xulosa: Shallow Copy vs Deep Copy

//                                     Shallow Copy	                 |           Deep Copy
//                                                                   |
// Tashqi xususiyatlar            	Mustaqil nusxalanadi	         |         Mustaqil nusxalanadi
//                                                                   |
// Ichki obyektlar (nested       Manzil nusxalanadi (referens)       |     	Yangi obyektlar yaratadi 
//  objects)	                                                     |
//                                                                   |
// Usullar	                     Object.assign(), Spread (...)	     |    JSON.parse(JSON.stringify()), structuredClone(), _.cloneDeep()
//                                                                   |
// Afzalliklar                 	Tez ishlaydi, oddiy	Haqiqiy nusxa,   |      mustaqil obyekt
//                                                                   |
// Kamchiliklar	                   Nested obyektlar bog‘liq qoladi   | 	Sekinroq, ba’zi usullar function, Symbol, Date larni yo‘qotadi