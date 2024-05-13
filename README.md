<br>
<a href='#'>
<p align="center">
   <img width="100" src="./js-logo.png">
</p>
</a>

<h1 align='center'>JavaScript Notes</h1>

<h6 align='center'>Notes that I made while learning to code in <ul><b>JavaScript</b></ul></h6>
<br>

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

### 🔴 1. Console Log

- The console.log() method writes a message to the console.
- The console is useful for testing purposes.

```javascript
console.log("Hello, World!");
```

Output:

```javascript
Hello, World!
```

### 🔴 2. Variables

- Variables are containers for storing data values.
- JavaScript variables are containers for storing data values.
- You declare a JavaScript variable with the let keyword.

```javascript
let name = "John";
console.log(name);
```

Output:

```javascript
John;
```

- You can also declare a variable and assign a value to it in the same line.

```javascript
let name = "John",
  age = 25,
  isMarried = false;
console.log(name, age, isMarried);
```

Output:

```javascript
John 25 false
```

### 🔴 3. Data Types

- You can also change the value of a variable.

```javascript
let name = "John";
console.log(name);
name = "Doe";
console.log(name);
```

Output:

```javascript
John;
Doe;
```

- JavaScript has dynamic types. This means that the same variable can be used to hold different data types.

```javascript
let name = "John";
console.log(name);
name = 25;
console.log(name);
```

Output:

```javascript
John;
25;
```

- JavaScript has 7 data types that are divided into two categories: primitive data types and object data types.

### 🔴 4. Primitive Data Types

- Primitive data types are data that has a primitive value.
- There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

```javascript
let name = "John"; // String
let age = 25; // Number
let isMarried = false; // Boolean
let x = undefined; // Undefined
let y = null; // Null
```

### 🔴 5. Comments

- Comments can be used to explain JavaScript code, and to make it more readable.
- JavaScript will ignore comments.

```javascript
// This is a single-line comment

/*
This is a multi-line comment
*/
```

### 🔴 6. Operators

- Operators are used to perform operations on variables and values.
- JavaScript has the following types of operators: Arithmetic, Assignment, Comparison, Logical, Bitwise, and Conditional.

```javascript
let x = 5;
let y = 2;
let z = x + y;
console.log(z);
```

Output:

```javascript
7;
```

### 🔴 7. Strings

- A string (or a text string) is a series of characters like "John Doe".
- Strings are written with quotes. You can use single or double quotes.

```javascript
let name = "John Doe";
console.log(name);
```

Output:

```javascript
John Doe
```

### 🔴 8. User Input

- The prompt() method displays a dialog box that prompts the visitor for input.
- A prompt box is often used if you want the user to input a value before entering a page.

```javascript
let name = prompt("Enter your name:");
console.log(name);
```

Output:

```javascript
John;
```

### 🔴 9. Functions

- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).

```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
```

Output:

```javascript
Hello, World!
```

### 🔴 10. Type Conversion

- JavaScript has many built-in methods that can be used to convert data from one type to another.

```javascript
let x = "5";
console.log(typeof x);
x = Number(x);
console.log(typeof x);
```

Output:

```javascript
string;
number;
```

### 🔴 11. Const

- Constants are similar to let variables, except that the value cannot be changed.

```javascript
const name = "John";
console.log(name);
```

Output:

```javascript
John;
```

### 🔴 12. Math

- JavaScript has a built-in Math object that allows you to perform mathematical tasks on numbers.

```javascript
let x = 5;
let y = 2;
let z = Math.pow(x, y);
console.log(z);
```

Output:

```javascript
25;
```

### 🔴 13. Random

- JavaScript has a built-in Math.random() method that returns a random number between 0 (inclusive), and 1 (exclusive).

```javascript
let x = Math.random();
console.log(x);
```

Output:

```javascript
0.123456789;
```

### 🔴 14. If-else

- Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
- Use the else statement to specify a block of code to be executed if the condition is false.

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

Output:

```javascript
You are an adult.
```

### 🔴 15. Ternary Operator

- JavaScript has a shorthand way of writing an if-else statement, known as the ternary operator.

```javascript
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);
```

Output:

```javascript
You are an adult.
```

### 🔴 16. Switch

- Use the switch statement to select one of many code blocks to be executed.

```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```

Output:

```javascript
Wednesday;
```

### 🔴 17. String Methods

- JavaScript has many built-in methods that can be used on strings.

```javascript
let name = "John Doe";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(0));
console.log(name.indexOf("Doe"));
console.log(name.slice(0, 4));
console.log(name.replace("John", "Jane"));
console.log(name.trim());
console.log(name.split(" "));
console.log(name.split(""));
console.log(name.split(" ", 1));
```

Output:

```javascript
8;
JOHN DOE;
john doe;
J;
5;
John;
Jane Doe;
John Doe;
["John", "Doe"];
["J", "o", "h", "n", " ", "D", "o", "e"];
["John"];

```

### 🔴 18. String Slicing

- You can extract a part of a string and create a new string using the slice() method.

```javascript
let name = "John Doe";
let firstName = name.slice(0, 4);
let lastName = name.slice(5);
console.log(firstName);
console.log(lastName);
```

Output:

```javascript
John;
Doe;
```

### 🔴 19. Logical Operators

- Logical operators are used to determine the logic between variables or values.

```javascript
let x = 5;
let y = 2;
console.log(x > 3 && y < 3); // and
console.log(x > 3 || y < 3); // or
console.log(!(x > 3));
```

Output:

```javascript
true;
true;
false;
```

### 🔴 20. Operators

- = assignment operator
- == comparison operator (compare if values are equal)
- === strict comparison operator (compare if values & datatypes are equal)
- != not equal operator
- !== strict not equal operator

### 🔴 21. For Loops

- Use the for loop to execute a block of code a number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Output:

```javascript
0;
1;
2;
3;
4;
```

### 🔴 22. While Loops

- Use the while loop to execute a block of code as long as a condition is true.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

Output:

```javascript
0;
1;
2;
3;
4;
```

### 🔴 23. Do While Loop

- The do/while loop is a variant of the while loop. This loop will execute the code block once before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

Output:

```javascript
0;
1;
2;
3;
4;
```

### 🔴 24. Functions

- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).

```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
```

Output:

```javascript
Hello, World!
```

### 🔴 25. Function Parameters

- Function parameters are the names listed in the function definition.
- Function arguments are the real values passed to the function.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");
```

Output:

```javascript
Hello, John!
```

### 🔴 26. Local and Global Scope

- In JavaScript, scope refers to the visibility of variables.
- Local variables are variables declared within a JavaScript function.
- Global variables are variables declared outside a function.

```javascript
let name = "John"; // Global variable

function greet() {
  let message = "Hello, " + name + "!"; // Local variable
  console.log(message);
}

greet();
```

Output:

```javascript
Hello, John!
```

### 🔴 27. Arrays

- JavaScript arrays are used to store multiple values in a single variable.
- You access an array element by referring to the index number.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output:

```javascript
["Apple", "Banana", "Cherry"];
Apple;
Banana;
Cherry;
```

### 🔴 28. Array Methods

- JavaScript has many built-in methods that can be used on arrays.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // Length of the array
console.log(fruits.toString()); // Converts the array to a string
console.log(fruits.join(" * ")); // Joins the elements of an array into a string
console.log(fruits.pop()); // Removes the last element from an array
console.log(fruits.push("Date")); // Adds a new element to an array
console.log(fruits.shift()); // Removes the first element from an array
console.log(fruits.unshift("Apricot")); // Adds a new element to an array
console.log((fruits[0] = "Avocado")); // Changes the first element of an array
console.log(fruits.splice(1, 2)); // Adds/Removes elements from an array
console.log(fruits.concat(["Blueberry", "Blackberry"])); // Joins two arrays
console.log(fruits.slice(1)); // Selects a part of an array
console.log(fruits.sort()); // Sorts the elements of an array
console.log(fruits.reverse()); // Reverses the order of the elements in an array
```

Output:

```javascript
3;
Apple, Banana, Cherry;
Apple * Banana * Cherry;
Cherry;
3;
Apple;
4;
Avocado;
["Banana", "Cherry"];
["Avocado", "Blueberry", "Blackberry"];
["Blueberry", "Blackberry"];
["Avocado", "Blueberry", "Blackberry"];
```

### 🔴 29. Spread Operator

- The spread operator is used to expand an array into individual elements.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
let moreFruits = ["Date", "Fig"];
console.log(...fruits);
console.log(...moreFruits);
```

Output:

```javascript
Apple Banana Cherry;
Date Fig;
```

### 🔴 30. Rest Operator

- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

```javascript
function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  console.log(total);
}

sum(1, 2, 3, 4, 5);
```

Output:

```javascript
15;
```

### 🔴 31. Callback function

- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

function getName(callback) {
  let name = prompt("Enter your name:");
  callback(name);
}

getName(greet);
```

Output:

```javascript
Hello, John!;
```

### 🔴 32. For Each

- The forEach() method calls a function once for each element in an array, in order.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

Output:

```javascript
Apple;
Banana;
Cherry;
```

### 🔴 33. Map

- The map() method creates a new array by performing a function on each array element.

```javascript
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map(function (number) {
  return number * 2;
});
console.log(double);
```

Output:

```javascript
[2, 4, 6, 8, 10];
```

### 🔴 34. Filter

- The filter() method creates a new array with array elements that pass a test.

```javascript
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(function (number) {
  return number % 2 == 0;
});
console.log(even);
```

Output:

```javascript
[2, 4];
```

### 🔴 35. Reduce

- The reduce() method reduces the array to a single value.

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (total, number) {
  return total + number;
});
console.log(sum);
```

Output:

```javascript
15;
```

### 🔴 36. Function expressions

- A JavaScript function can also be defined using an expression.

```javascript
let greet = function () {
  console.log("Hello, World!");
};

greet();
```

Output:

```javascript
Hello, World!;
```

### 🔴 37. Arrow Function

- Arrow functions allow us to write shorter function syntax.

```javascript
let greet = () => {
  console.log("Hello, World!");
};

greet();
```

Output:

```javascript
Hello, World!;
```

### 🔴 38. Objects

- JavaScript objects are containers for named values called properties or methods.
- You create an object using curly braces {}.

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isMarried: false,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isMarried);
person.greet();
```

Output:

```javascript
{
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isMarried: false,
  greet: [Function: greet]
};
John;
Doe;
25;
false;
Hello, World!;
```

### 🔴 39. This keyword

- In an object method, this refers to the owner object.
- In a function, this refers to the global object.

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
```

Output:

```javascript
John Doe;
```

### 🔴 40. Constructor

- JavaScript is an object-oriented programming language.
- Everything is an object.
- Objects are created using constructors.

```javascript
function Person(firstName, lastName, age, isMarried) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMarried = isMarried;
}

let person = new Person("John", "Doe", 25, false);
console.log(person);
```

Output:

```javascript
Person { firstName: "John", lastName: "Doe", age: 25, isMarried: false };
```

### 🔴 41. Class

- JavaScript classes are templates for JavaScript objects.
- Use the class keyword to create a class.

```javascript
class Person {
  constructor(firstName, lastName, age, isMarried) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMarried = isMarried;
  }
}

let person = new Person("John", "Doe", 25, false);
console.log(person);
```

Output:

```javascript
Person { firstName: "John", lastName: "Doe", age: 25, isMarried: false };
```

### 🔴 42. Static Keyword

- The static keyword defines a static method for a class.
- Static methods are called without creating an instance of the class.

```javascript
class Math {
  static add(x, y) {
    return x + y;
  }
}

console.log(Math.add(5, 2));
```

Output:

```javascript
7;
```

### 🔴 43. Inheritance

- Inheritance is a mechanism where a new class inherits properties and methods from an existing class.

```javascript
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating.`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping.`);
  }
}
class Rabbit extends Animal {
  name = "rabbit";
}

class Fish extends Animal {
  name = "fish";
}

class Eagle extends Animal {
  name = "eagle";
}

const rabbit = new Rabbit();
const fish = new Fish();
const eagle = new Eagle();

console.log(rabbit.alive);

fish.eat();
rabbit.sleep();
```

Output:

```javascript
true;
This fish is eating.
This rabbit is sleeping.
```

### 🔴 44. Super keyword

- The super keyword is used to access and call functions on an object's parent.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Rabbit extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  eat() {
    super.eat();
    console.log(`${this.name} is eating carrots.`);
  }
}

const rabbit = new Rabbit("Rabbit", "White");
rabbit.eat();
```

Output:

```javascript
Rabbit is eating.
Rabbit is eating carrots.
```

### 🔴 45. Getters and Setters

- JavaScript getters and setters are used to define Object Accessors (Computed Properties).

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person = new Person("John");
console.log(person.name);
person.name = "Doe";
console.log(person.name);
```

Output:

```javascript
John;
Doe;
```

### 🔴 46. Destructuring

- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

let { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
```

Output:

```javascript
John;
Doe;
25;
```

### 🔴 47. Nested Objects

- You can have objects inside an object.

```javascript
let person = {
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 25,
};

console.log(person.name.firstName);
console.log(person.name.lastName);
console.log(person.age);
```

Output:

```javascript
John;
Doe;
25;
```

### 🔴 48. Array of objects

- You can have an array of objects.

```javascript
let fruits = [
  { name: "Apple", color: "Red", calories: 52 },
  { name: "Banana", color: "Yellow", calories: 89 },
  { name: "Cherry", color: "Red", calories: 50 },
];

console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[2].calories);
```

Output:

```javascript
Apple;
Yellow;
50;
```

### 🔴 49. Sort method

- The sort() method sorts the elements of an array.
- This sorts elements in lexicographical order.
- lexicographical = (alphabet + numbers + symbols) as strings

```javascript
let fruits = ["apple", "orange", "coconut", "orange", "pineapple"];
console.log(fruits.sort());
```

Output:

```javascript
["apple", "coconut", "orange", "orange", "pineapple"];
```

### 🔴 50. Sort Numbers

- The sort() method sorts the elements of an array.
- This sorts elements as strings.

```javascript
let numbers = [40, 100, 1, 5, 25, 10];
console.log(numbers.sort());
```

Output:

```javascript
[1, 10, 100, 25, 40, 5];
```

### 🔴 51. Shuffle an array

- You can shuffle an array using the sort() method.

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.sort(() => Math.random() - 0.5));
```

Output:

```javascript
[3, 1, 5, 2, 4];
```

- example 2:

```javascript
let cards = ["♠", "♣", "♥", "♦"];
console.log(cards.sort(() => Math.random() - 0.5));
```

Output:

```javascript
["♠", "♣", "♦", "♥"];
```

### 🔴 52. Dates

- JavaScript Date objects represent a single moment in time in a platform-independent format.
- Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

```javascript
let date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
```

Output:

```javascript
Thu May 09 2024 23:48:03 GMT+0530 (India Standard Time)
Thu May 09 2024
23:48:03 GMT+0530 (India Standard Time)
09/05/2024
23:48:03
```

### 🔴 53. Closure

- A closure is a function having access to the parent scope, even after the parent function has closed.

```javascript
function outer() {
  let name = "John";
  function inner() {
    console.log(name);
  }
  return inner;
}

let inner = outer();
inner();
```

Output:

```javascript
John;
```

### 🔴 54. setTimeout() function

- The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

```javascript
function greet() {
  console.log("Hello, World!");
}

setTimeout(greet, 3000);
```

Output:

```javascript
Hello, World!;
```

### 🔴 55. Synchronous

- JavaScript is a synchronous programming language.
- This means that it executes code line by line.

```javascript
console.log("Hello, World!");
console.log("Hello, Universe!");
```

Output:

```javascript
Hello, World!;
Hello, Universe!;
```

### 🔴 56. Asynchronous

- JavaScript is a single-threaded language.
- This means that it can only execute one task at a time.
- Asynchronous programming allows you to execute code outside the main thread.

```javascript
console.log("Hello, World!");
setTimeout(() => {
  console.log("Hello, Universe!");
}, 3000);
```

Output:

```javascript
Hello, World!;
Hello, Universe!;
```

### 🔴 57. Error object and Error Handeling

- JavaScript has a built-in error object that provides error information when an error occurs.
- The try statement allows you to define a block of code to be tested for errors while it is being executed.
- The catch statement allows you to define a block of code to be executed if an error occurs in the try block.
- The finally statement lets you execute code, after try and catch, regardless of the result.

```javascript
try {
  let x = 5;
  let y = 0;
  if (y == 0) throw "Division by zero";
  let z = x / y;
  console.log(z);
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally block");
}
```

Output:

```javascript
Division by zero;
Finally block;
```

- Errors can occur in the following scenarios:
  - Syntax errors
  - Logical errors
  - Runtime errors
  - Network errors
  - Promise errors
  - Security errors
  - etc.

### 🔴 58. DOM = Document Object Model

- The Document Object Model (DOM) is a programming interface for web documents.
- It represents the structure of a document as a tree of nodes.
- The DOM is used to interact with HTML elements using JavaScript.

```javascript
document.getElementById("heading").innerHTML = "Hello, World!";
```

Output:

```javascript
Hello, World!;
```

### 🔴 59. Event Listenes

- Listens for specific events to create interactive web pages.
- events: click, mouseover, mouseout, keydown, keyup, etc.
- An event listener is a procedure or function in a computer program that waits for an event to occur.

```javascript
document.getElementById("button").addEventListener("click", function () {
  alert("Hello, World!");
});
```

Output:

```javascript
Alert: Hello, World!;
```

### 🔴 60. Callback Hell

- Callback hell is a phenomenon that happens when you have too many nested callbacks.

```javascript
setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
      setTimeout(() => {
        console.log("Task 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

Output:

```javascript
Task 1;
Task 2;
Task 3;
Task 4;
```

### 🔴 61. Promises

- A promise is an object that may produce a single value some time in the future.
- A promise is a placeholder for a value that may not be available yet.

```javascript
let promise = new Promise((resolve, reject) => {
  let x = 5;
  let y = 0;
  if (y == 0) reject("Division by zero");
  let z = x / y;
  resolve(z);
});
```

Output:

```javascript
Division by zero;
```

### 🔴 62. Async/Await

- The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
- The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.

```javascript
async function divide() {
  let x = 5;
  let y = 0;
  if (y == 0) throw "Division by zero";
  let z = x / y;
  return z;
}

async function main() {
  try {
    let result = await divide();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();
```

Output:

```javascript
Division by zero;
```

- Example 2:

```javascript
async function greet() {
  return "Hello, World!";
}

async function main() {
  let message = await greet();
  console.log(message);
}

main();
```

Output:

```javascript
Hello, World!;
```

### 🔴 63. JSON

- JSON (JavaScript Object Notation) is a lightweight data-interchange format.
- JSON files are generally objects {key:value} or arrays [value1, value2, value3] or a combination of both.
- It is easy for humans to read and write.
- It is easy for machines to parse and generate.

```javascript
let person = {
  name: "John",
  age: 25,
  isMarried: false,
};

let json = JSON.stringify(person);
console.log(json);

let object = JSON.parse(json);
console.log(object);
```

Output:

```javascript
{"name":"John","age":25,"isMarried":false};
{ name: "John", age: 25, isMarried: false };
```

### 🔴 64.
