// // To print something in the console tab of developer tools of a web page
// console.log(`Hello World!`);
// console.log(`I like JavaScript!`);

// // To create a pop-up with a message
// // window.alert(`YOOOOO`);

// // This is a comment

// /* This
// is multi-line
// comment
// */

// // Changing text content using getElementById() function
// document.getElementById("paneer").textContent = "Allo Bhujia";

// // Variable
// // a container that stores a value
// // You cannot use the same name for a variable more than once

// let x;
// x = 71;
// console.log(x);

// let y = 46;
// console.log(46);

// // let age = 19;

// // console.log(`I am ${age} years old.`);
// // console.log(typeof age);

// let firstName = "Aditya";
// console.log(firstName);
// console.log(typeof firstName);
// console.log(`My name is ${firstName}.`);

// // Booleans

// let online = true;

// console.log(typeof online);
// console.log(online);

// let fullName = "Aditya Raj";
// let myAge = 19;

// document.getElementById("p1").textContent = `I am ${fullName}.`;
// document.getElementById("p2").textContent = `My age is ${myAge} years old.`;

// //  user input
// // 1. using the alert pop-up window
// // let username = window.prompt(`What's your username?`);
// // window.alert(`Welcome ${username}`);
// // console.log(`${username} just logged in.`);

// let username;
// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   console.log(username);
//   document.getElementById("userHere").textContent = `Welcome ${username}`;
// };
// //  type conversions
// // change the datatype of a value to another
// // let newAge = window.prompt("How old are you?");
// // newAge = Number(newAge);
// // newAge += 1;

// // console.log(newAge, typeof newAge);

// // Const
// // a variable con't be changed

// const pi = 3.14159;
// console.log(pi);

// // Math
// // its a built in object that provides a collection of properties and methods

// console.log(Math.PI); // Pi
// console.log(Math.E); // Euler's Number

// let a = 3;
// let b = 2;
// let c;
// let d = 1;

// // c = Math.round(a);
// // c = Math.floor(a);   // to always round down
// // c = Math.ceil(a); // to always round up
// // c = Math.trunc(a); // removes any decimal portion
// // c = Math.pow(a, b); // a to the power of b
// // c = Math.sqrt(a); // to find the square root
// // c = Math.log(a); // to find the square root
// c = Math.sin(a); // to find sin function
// c = Math.cos(a); // to find cos function
// c = Math.tan(a); // to find tan function
// c = Math.abs(a); // to find the absolute value, removes the negative sign

// let max = Math.max(a, b, d);
// let min = Math.min(a, b, d);
// console.log(`Max number is: ${max}`);
// console.log(`Min number is: ${min}`);

// console.log(c);

// // Random function
// // using only random() will generate a random number between 0 and 1
// let randomNum = Math.floor(Math.random() * 100) + 1; // this will give a random number between 1 and 100
// console.log(`Dice rolled to: ${randomNum}`);

// If statements
// let age = Number(window.prompt("What's yout age?"));

// if (age >= 18) {
//   console.log("You can drive 👍");
// } else {
//   console.log(`You need to wait ${18 - age} years to drive, kid 🚨`);
// }

// checked property

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = `Payment Successful`;
//   } else {
//     subResult.textContent = `Payment Failed`;
//   }
//   if (visaBtn.checked) {
//     paymentResult.textContent = `Visa Payment`;
//   } else if (masterCardBtn.checked) {
//     paymentResult.textContent = `MasterCard Payment`;
//   } else if (paypalBtn.checked) {
//     paymentResult.textContent = `PayPal Payment`;
//   } else {
//     paymentResult.textContent = `You must select a Payment Mode`;
//   }
// };

// Ternary Operator
// shortcut to if and else statements

// let age = 21;
// let message = age >= 18 ? "You are an adult." : "You are a minor.";
// console.log(message);

// Switch
// let day = 5;
// switch (day) {
//   case 1:
//     console.log("Wednesday");
//     break;
//   case 2:
//     console.log("Thursday");
//     break;
//   case 3:
//     console.log("Friday");
//     break;
//   case 4:
//     console.log("Saturday");
//     break;
//   case 5:
//     console.log("Sunday");
//     break;
//   case 6:
//     console.log("Monday");
//     break;
//   case 7:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Another Day");
//     break;
// }

// let fullName = "John Doe";
// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5);
// console.log(firstName);
// console.log(lastName);

// // Logical Operator
// let x = 5;
// let y = 2;
// console.log(x > 3 && y < 3);
// console.log(x > 3 || y < 3);
// console.log(!(x > 3));

// // While Loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt(`What's your username ?`);
// }

// console.log(`Welcome ${username}`);

// // do while

// let username = "";

// do {
//   username = window.prompt(`What's your username ?`);
// } while (username === "" || username === null);

// console.log(`Welcome home Mr.${username}`);

// For Loop
// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

// // function

// function happyBirthday(userName, age) {
//   console.log(`Happy Birthday ${userName}!!`);
//   console.log(`You are ${age} years old.`);
// }

// happyBirthday("Aditya", 19);

// // arrays
// let fruits = ["Apple", "Mango", "Grapes"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // array methods
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits.length); // Length of the array
// console.log(fruits.toString()); // Converts the array to a string
// console.log(fruits.join(" * ")); // Joins the elements of an array into a string
// console.log(fruits.pop()); // Removes the last element from an array
// console.log(fruits.push("Date")); // Adds a new element to an array
// console.log(fruits.shift()); // Removes the first element from an array
// console.log(fruits.unshift("Apricot")); // Adds a new element to an array
// console.log((fruits[0] = "Avocado")); // Changes the first element of an array
// console.log(fruits.splice(1, 2)); // Adds/Removes elements from an array
// console.log(fruits.concat(["Blueberry", "Blackberry"])); // Joins two arrays
// console.log(fruits.slice(1)); // Selects a part of an array
// console.log(fruits.sort()); // Sorts the elements of an array
// console.log(fruits.reverse()); // Reverses the order of the elements in an array

// // spread operator
// let fruits = ["Apple", "Mango", "Grapes", "Banana"];
// let moreFruits = ["Coconut", "Pears", "Strawberry"];

// console.log(fruits);
// console.log(...fruits);
// console.log(moreFruits);
// console.log(...moreFruits);

// // rest operator
// function sum(...foods) {
//   console.log(foods);
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// sum(food1, food2, food3, food4, food5);

// Random Password Generator
// doesn't work
// function generatePassword(
//   length,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// ) {
//   const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*()_-+=,.<>;:";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowercase ? lowerCaseChars : "";
//   allowedChars += includeUppercase ? upperCaseChars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   console.log(allowedChars);

//   if(length <= 0) {
//     return `(password length must be at least 1)`
//   }
//   if

//   return "";
// }

// const passwordLength = 12;
// const includeLowercase = false;
// const includeUppercase = false;
// const includeNumbers = false;
// const includeSymbols = true;

// const password = generatePassword(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// );

// console.log(`Generated Password: ${password}`);

// // Callback function
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// function getName(callback) {
//   let name = prompt("Enter your name:");
//   callback(name);
// }

// getName(greet);

// hello(wait);

// function hello(callback) {
//   console.log(`Hello`);
//   callback();
// }

// function wait() {
//   console.log(`wait`);
// }

// function leave() {
//   console.log(`Leave`);
// }

// function goodbye() {
//   console.log(`Good bye`);
// }

// sum(displayConsole, 1, 2);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

// // for each
// let fruits = ["Apple", "Mango", "Grapes", "Banana"];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// let veggies = ["Potato", "Cabbage", "Tomato", "Onion"];

// veggies.forEach(function (veggie) {
//   console.log(veggie);
// });

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.forEach(function (display) {
//   console.log(display * 2);
// });

// map function
// map function creates an array by performing a function on each array elements

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let double = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(double);

// let fruits = ["Apple", "Mango", "Grapes", "Banana"];

// let likes = fruits.map(function (fruit) {
//   return `I like eating ${fruit}`;
// });

// console.log(likes);

// // Filter

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = numbers.filter(function (number) {
//   return number % 2 == 0;
// });

// console.log(even);

// // Reduce Method
// // reduce() method reduces the array to a single value

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = numbers.reduce(function (total, number) {
//   return total + number;
// });

// console.log(sum);

// Function expressions

// const greet = function () {
//   console.log(`Hello Friend`);
// };

// greet();
// greet();
// greet();

// Arrow Function

// normal function =>
// function hello() {
//   console.log(`Hello Friend`);
// }

// hello();

// arrow function =>
// let hello = (name) => {
//   console.log(`Hello Friends of ${name}`);
// };

// hello(`Aditya`);

// // objects

// const person1 = {
//   firstName: "Aditya",
//   lastName: "Raj",
//   age: 19,
//   oneLove: false,
//   greet: function () {
//     console.log(`Hello Friend`);
//   },
// };

// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.oneLove);
// person1.greet();

// // this keyword

// let person = {
//   firstName: "Aditya",
//   lastName: "Raj",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// Constructor

// function Person(firstName, lastName, age, isMarried) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.isMarried = isMarried;
// }

// let person = new Person("Aditya", "Raj", 19, false);

// console.log(person);

// Class

// class Person {
//   constructor(firstName, lastName, age, isMarried) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }
// }

// let person = new Person("Aditya", "Raj", 19, false);

// console.log(person);

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   myProduct() {
//     console.log(`---------------`);
//     console.log(`Product is ${this.name}`);
//     console.log(`Price is Rs.${this.price}`);
//     console.log(`---------------`);
//   }
// }

// let product1 = new Product("T-Shirt", 249);
// let product2 = new Product("Hoodie", 649);

// product1.myProduct();
// product2.myProduct();

// console.log(product1);
// console.log(product2);

//  Static keyword

// class Math {
//   static add(x, y) {
//     return x + y;
//   }
// }

// console.log(Math.add(2, 6));

// Inhertitance
// allows a new class to inherit properties and methods from an existing class (parrent -> child) .  helps with code reuseability

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is sleeping.`);
//   }
// }
// class Rabbit extends Animal {
//   name = "rabbit";
// }

// class Fish extends Animal {
//   name = "fish";
// }

// class Eagle extends Animal {
//   name = "eagle";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const eagle = new Eagle();

// console.log(rabbit.alive);

// fish.eat();
// rabbit.sleep();

// Super Keyword
// this is similar to this keyword.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }

//   eat() {
//     super.eat();
//     console.log(`${this.name} is eating carrots.`);
//   }
// }

// const rabbit = new Rabbit("Rabbit", "White");
// rabbit.eat();

// Getters and Setters

// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// let person = new Person("John");
// console.log(person.name);
// person.name = "Doe";
// console.log(person.name);

// Destructuring
// let person = {
//   firstName: "Aditya",
//   lastName: "Raj",
//   age: 19,
// };

// let { firstName, lastName, age } = person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);

// Nested Objects

// let person = {
//   name: {
//     firstName: "Aditya",
//     lastName: "Raj",
//   },
//   age: 19,
// };

// console.log(person.name.firstName);
// console.log(person.name.lastName);
// console.log(person.age);

// Array of objects

// let fruits = [
//   { name: "Apple", color: "Red", calories: 52 },
//   { name: "Banana", color: "Yellow", calories: 89 },
//   { name: "Grapes", color: "Green", calories: 50 },
//   { name: "Coconut", color: "White", calories: 230 },
//   { name: "Pineapple", color: "Yellow", calories: 235 },
// ];

// fruits.pop();
// console.log(fruits);
// console.log(fruits[0].name);
// console.log(fruits[1].color);
// console.log(fruits[2].calories);

// sort method

// let fruits = ["apple", "orange", "coconut", "orange", "pineapple"];

// fruits.sort();

// console.log(fruits);

// // sorting numbers

// let numbers = [40, 100, 3, 5, 23, 10];
// console.log(numbers.sort());

// shuffle an array

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers.sort(() => Math.random() - 0.5));

// Dates

// let date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// Closure

// function outer() {
//   let name = "Aditya";
//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }

// let inner = outer();
// inner();

// setTimeout() function
// syntax:
// setTImeout(callback, delay)

// function greet() {
//   console.log(`Hello!`);
//   console.log(`Nice to meet you.`);
// }

// setTimeout(greet, 3000); // this will execute to greet() function after 3 seconds

// Synchronous
// javascript is synchronous programming language, this means it will execute the code line by line

// console.log(`Hello World`); // this executes first
// console.log(`Hello Universe`); // this executes after the first line

// Asynchronous
// javascript is single threaded , this means it can execute only one task at a time.

// console.log(`Hello World!`);
// setTimeout(() => {
//   console.log(`Hello Universe!`);
// }, 3000);

// error object and error handeling
// - The try statement allows you to define a block of code to be tested for errors while it is being executed.
// - The catch statement allows you to define a block of code to be executed if an error occurs in the try block.
// - The finally statement lets you execute code, after try and catch, regardless of the result.

// let x = 5;
// let y = 0;

// if (y == 0) {
//   let z = x / y;
//   console.log(z);
// }

// try {
//   let x = 5;
//   let y = 10;
//   if (y == 0) throw "Division by zero.";
//   let z = x / y;
//   console.log(z);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Finally block.");
// }

// Event listeners

// document.getElementById("btn-light").addEventListener("click", function () {
//   document.body.style.backgroundColor = "lightgray";
// });

// document.getElementById("btn-dark").addEventListener("click", function () {
//   document.body.style.backgroundColor = "black";
// });

// Callback Hell

setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
      setTimeout(() => {
        console.log("Task 4");
        setTimeout(() => {
          console.log("Task 5");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
