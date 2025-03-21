// String.prototype.trm = function () {
//     return this.trim();
// };

// String.prototype.upperCase = function () {
//     return this.toUpperCase();
// };

// String.prototype.has = function (substring) {
//     return this.includes(substring);
// };

// String.prototype.cut = function (start, end) {
//     return this.slice(start, end);
// };

// String.prototype.rpt = function (count) {
//     return this.repeat(count);
// };

// let str = "  Hello World!  ";

// console.log(str.trm());
// console.log(str.upperCase());
// console.log(str.has("World"));
// console.log(str.cut(2, 7));
// console.log(str.rpt(3));



// Number.prototype.fixed = function (digits = 0) {
//     return this.toFixed(digits);
// };

// Number.prototype.round = function () {
//     return Math.round(this);
// };

// Number.prototype.isSquare = function () {
//     return Number.isInteger(Math.sqrt(this));
// };

// Number.prototype.count = function () {
//     if (this < 0 || !Number.isInteger(this)) return null;
//     return this.toString().length;
// };

// Number.prototype.sum = function () {
//     if (this < 0 || !Number.isInteger(this)) return null;
//     return this.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
// };

// let num1 = 4.567;
// console.log(num1.fixed(2));
// console.log(num1.round());

// let num2 = 16;
// console.log(num2.isSquare());

// let num3 = 10;
// console.log(num3.isSquare());

// let num4 = 12345;
// console.log(num4.count());
// console.log(num4.sum());     

// function Animal(name, speed, limitAge) {
//     this.name = name;
//     this.speed = speed;
//     this.limitAge = limitAge;
// }

// Animal.prototype.info = function() {
//     return `Name: ${this.name}, Speed: ${this.speed} km/h, Limit Age: ${this.limitAge} years`;
// };

// const lion = new Animal("Lion", 80, 15);
// console.log(lion.info());

// function Student(name, course, years, university) {
//     this.name = name;
//     this.course = course;
//     this.years = years;
//     this.university = university;
// }

// Student.prototype.leftYears = function(currentYear) {
//     return this.years - currentYear;
// };

// const student1 = new Student("Ali", "Computer Science", 4, "Oxford");
// console.log(student1.leftYears(2));