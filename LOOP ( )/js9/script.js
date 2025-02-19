// let car = { brand: "Toyota", engine: { type: "V8", power: "300hp" } };

// console.log(typeof car.engine.power);



// let student = { name: "Bob", subjects: ["Math", "Science", "History"] };

// console.log(student.subjects[2]);



// let car = { brand: "Toyota", engine: { type: "V8", power: "300hp" } };



// console.log(car.engine.type = "elektirik");


// let book = { title: "Programming 101", chapters: ["Intro", "Variables", "Loops", "Objects"] };


// for (let i = 0; i < book.chapters.length; i++) {
//     console.log(book.chapters[i]);
    
// }


// let student = { name: "Alice", subjects: ["Math", "English"] };
// student.subjects[2] = 'art'

// console.log(student);


// let library = {
//     name: "City Library",
//     books: [
//       { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//       { title: "1984", author: "George Orwell" }
//     ]
//   };


// console.log(library.books[1]);



// let company = {
//     name: "Tech Corp",
//     employees: [
//       { name: "Alice", position: "Developer" },
//       { name: "Bob", position: "Designer" }
//     ]
//   };


// company.employees[2]= {
//     name: 'joj',
//     position: 'sineor'
// }

// console.log(company);





// ---------------------TAKRORLSHHH-----------------




// let Objects = {
//     name: 'muhammadjpn',
//     age: 18,
//     log: 'developer',
// }


// console.log(Objects.name);
// console.log(Objects['age']);


// let array = ['gentar', 'cobalt', 'nexia', 'orlando', 'malibu']


// for (let i = 0; i < array.length; i++) {
//     console.log( array[i]);
// }




//  ------- mustaqil ish ---------


let cars = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Black",
        types: ["Sedan", "Hybrid"], // Array ichida mashina turlari
        features: {
            engine: "2.5L",
            transmission: "Automatic",
            fuel: "Petrol"
        }
    },
    {
        brand: "BMW",
        model: "X5",
        year: 2023,
        color: "White",
        types: ["SUV", "Luxury"],
        features: {
            engine: "3.0L Turbo",
            transmission: "Automatic",
            fuel: "Petrol/Diesel"
        }
    },
    {
        brand: "Tesla",
        model: "Model S",
        year: 2024,
        color: "Red",
        types: ["Sedan", "Electric"],
        features: {
            engine: "Dual Motor",
            transmission: "Automatic",
            fuel: "Electric"
        }
    }
];


let promt1 = prompt("salom hurmatli mijoz mashinalar haqida gi malumotlar abazasiga xush kelinziz!")
let promt2 = prompt("Bizlarda uch turda classik mashinalar mavjud")

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    
}