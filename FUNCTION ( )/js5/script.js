//    -----------------ARRY----------------

//   ------------------ AT() ----------------------

// at() metodi – Massiv yoki qator (string) elementlarini indeks orqali olish
// 📌 at() metodi massiv yoki qatorning (string) ixtiyoriy indeksidagi elementni qaytaradi. Salbiy indekslarni ham qo‘llab-quvvatlaydi, bu esa massivning oxiridan element olishni osonlashtiradi.

// let str = "JavaScript";

// console.log(str.at(0));  // "J"
// console.log(str.at(4));  // "S"
// console.log(str.at(-1)); // "t" (oxirgi harf)
// console.log(str.at(-3)); // "i" (oxirdan uchinchi harf)

//   ------------------ JOIN() -----------------------

// let newArry = [1, 2, 3, 4, 5, "Mhammadjon", "Behruz"];

// console.log(newArry.join(' '));


//   ------------------ PUSH() -----------------------

// push() metodi – Massivga yangi element qo‘shish
// 📌 push() metodi massivning oxiriga yangi element(lar) qo‘shadi va massivning yangi uzunligini qaytaradi.

// let newArry = [1, 2, 3, 4, 5, "Mhammadjon", "Behruz"];

// newArry.push("Mirjalol")

// console.log(newArry);


//   ------------------ POP() -----------------------

// pop() metodi – Oxirgi elementni olib tashlash
// 📌 pop() massivning oxirgi elementini olib tashlaydi va uni qaytaradi. Bu metod massivni o‘zgartiradi (mutatsiya qiladi). Agar massiv bo‘sh bo‘lsa, undefined qaytaradi.

// let newArry = [1, 2, 3, 4, 5];

// for (let i = newArry.length - 1; i >= 0; i--) {
//     newArry.pop()     
// }

// console.log(newArry);



//   ------------------ SHIFT() -----------------------

// shift() – Massivning boshidan elementni olib tashlash
// shift() birinchi elementni olib tashlaydi va qolgan elementlarni siljitadi.

// let arr = [1, 2, 3, 4, 5];
// arr.shift(); // 1-elementni olib tashlaydi

// console.log(arr); // [2, 3, 4, 5]

//   ------------------ UNSHIFT() -----------------------

// unshift() – Massivning boshiga yangi element qo‘shish
// 📌 unshift() yangi elementni boshiga qo‘shadi va qolganlarini o‘ngga suradi.

// let arr = [2, 3, 4, 5];
// arr.unshift(1); // Boshiga 1 ni qo‘shadi

// console.log(arr); // [1, 2, 3, 4, 5]

//   ------------------ REVERSE() -----------------------

// reverse() – Joyida o'zgartiradi (mutatsiya qiladi)
// 📌 reverse() metodi asl massivni o'zgartiradi va shu massivni qaytaradi.

// let newArry = [1, 2, 3, 4, 5];

// newArry.reverse()
// console.log(newArry);

//   ------------------ toREVERSE() -----------------------

// toReversed() – Yangi massiv yaratadi (immutatsion usul)
// 📌 toReversed() esa yangi teskari massiv yaratadi va asl massiv o'zgarishsiz qoladi.

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.toReversed();

// console.log(newArr); // [5, 4, 3, 2, 1]
// console.log(arr);    // [1, 2, 3, 4, 5] (o'zgarmaydi)


//   ------------------ SPLICE() -----------------------

// splice() metodi – Massivga o‘zgartirish kiritish
// 📌 splice() JavaScript-da massivga element qo‘shish, o‘chirish va almashtirish uchun ishlatiladi. U asl massivni o‘zgartiradi (mutatsiya qiladi).

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2); // 1-indeksdan boshlab 2 ta elementni o‘chiradi
// arr.splice(0, 1, "olma"); // 1-indeksdan boshlab 2 ta elementni o‘chiradi va olma qo'shadi


// console.log(arr); // [1, 4, 5]

//   ------------------ SLICE() -----------------------

// slice() metodi – Massivdan qism olish (aslini o'zgartirmasdan)
// 📌 slice() metodi JavaScript-da massivning bir qismini yangi massiv sifatida ajratib olish uchun ishlatiladi. Asl massiv o'zgarmaydi (immutatsion usul).

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 4);

// console.log(newArr); // [2, 3, 4]
// console.log(arr);    // [1, 2, 3, 4, 5] (asl massiv o'zgarmaydi)


//   ------------------ FILL() -----------------------


// fill() metodi – Massivni bir xil qiymat bilan to‘ldirish
// 📌 fill() metodi massivdagi barcha yoki ma’lum indekslar orasidagi elementlarni bitta qiymat bilan to‘ldiradi. Asl massiv o‘zgaradi (mutatsiya qiladi).


// fill() Sintaksisi
// array.fill(value, start, end)


// fill() yordamida butun massivni to‘ldirish
// let arr = [1, 2, 3, 4, 5];
// arr.fill(0);

// console.log(arr); // [0, 0, 0, 0, 0]


//   ------------------ replace() -----------------------

// let matn = "salom dunyo";
// let yangiMatn = matn.replace("dunyo", "O'zbekiston");
// console.log(yangiMatn); // "salom O'zbekiston"



// const array = ["value 1", "value 2", undefined, 1, null, "value 3", null, undefined, "value 4"];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === null || Array[i] === undefined) { 
//         array.fill("emety", i, i + 1);
//     } 
// }

// console.log(array);



// let cars = ['malibu', 'gentra', 'spark', 'cobalt', 'captiva'];
// let ansver = 'gentra';

// if (cars.includes(ansver)) {
//     for (let i = 0; i < cars.length; i++) {
//         if (cars[i] === ansver) {
//             cars.splice(i, 1); 
//             break; 
//         }
//     }
//     console.log(cars); 
// } else {
//     console.log('mashina mavjud emas');
// }



// let wer1 = ["item1", "item2"]
// let wer2 = ["itemA", "itemB"]

// let mixNewArry1 = wer1.concat(wer2)
// console.log(mixNewArry1);



