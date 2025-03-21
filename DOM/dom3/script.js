// let a = document.getElementsByTagName('h1')
// let count = 1

// for (let i = 0; i < a.length; i++) {
//     a[i].innerText += ' Judo'
//     a[i].innerText += count
//     count++
// }



// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     // map() bilan har bir user'ni ekranga chiqaramiz
//     data.map(user => {
//       console.log(`Ism: ${user.name}, Email: ${user.email}`);
//     });
//   })
//   .catch(error => console.error("Xatolik yuz berdi:", error));


// let img1 = document.getElementById('img1');
// let teu = true

// function on() {
// if (teu = !teu) {
//     img1.src = './photo_2023-08-02_14-46-11.jpg'
// }else{
//     img1.src = './photo_2023-08-02_14-46-12.jpg'
// }
// }




// 1. Tugma bosilganda matnni o‘zgartirish
// 👉 Tugmaga bosilganda <p> elementi ichidagi matn o‘zgaradi.

// let p = document.getElementById('p');

// function btn(params) {
//     p.innerText = 'salom Dunyo'
// }


// 2. Foydalanuvchi ismini chiqarish
// 👉 Input maydoniga ism kiritiladi, tugmaga bosilganda ekranga chiqariladi.


// let input = document.getElementById('input');
// let p = document.getElementById('p');

// function btn() {
//     p.innerText = input.value
// }


// 3. Rasmni almashtirish
// 👉 Tugmaga bosilganda rasm manbai (src) o‘zgaradi.

// let img1 = document.getElementById('img1');
// let teu = true

// function on() {
// if (teu = !teu) {
//     img1.src = './photo_2023-08-02_14-46-11.jpg'
// }else{
//     img1.src = './photo_2023-08-02_14-46-12.jpg'
// }
// }


// 4. Element fon rangini o‘zgartirish
// 👉 Tugmaga bosilganda div fon rangi o‘zgaradi.

// let contaienr = document.getElementById('container');
// let input = document.getElementById('color');


// function btn() {
//     contaienr.style.background = input.value
//     console.log(contaienr);

// }


