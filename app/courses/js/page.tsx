import React from 'react';

const JavaScriptLearning:React.FC = () => {
  return (
    <div className="mx-20 p-4 space-y-6">
      <div className="bg-white rounded-lg mt-5 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to JavaScript Learning</h1>
        <p className="text-lg text-gray-600">
          JavaScript is a versatile programming language widely used for web development. It enables you to create dynamic and interactive web applications.
        </p>
      </div>

      <div className="bg-white rounded-lg p-4 mt-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Getting Started with JavaScript</h2>
        <p className="text-lg text-gray-600">
          To start learning JavaScript, you only need a web browser and a text editor. JavaScript runs directly in the browser, allowing you to experiment and see results in real-time.
        </p>
      </div>

      <div className="bg-black rounded-lg p-4 mt-5 shadow-md text-blue-100">
        <h2 className="text-2xl font-bold mb-4">Hello World in JavaScript</h2>
        <p className="text-lg text-gray-400">
          Let's start with a simple "Hello, World!" program in JavaScript:
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`console.log("Hello, World!");`}
        </pre>
        <p className="text-lg text-gray-400 mt-4">
          This code prints "Hello, World!" to the browser's console. The <code>console.log</code> function is used to output data to the console.
        </p>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-md mt-5">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">JavaScript Features</h2>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Variables and Data Types</h3>
        <p className="text-lg text-gray-600">
          JavaScript supports various data types, including numbers, strings, booleans, objects, arrays, and more. Variables are declared using <code>var</code>, <code>let</code>, or <code>const</code>.
        </p>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Functions</h3>
        <p className="text-lg text-gray-600">
          Functions are blocks of code that can be called and reused. They can take parameters and return values.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`function add(a, b) {
  return a + b;
}`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Conditional Statements (if-else)</h3>
        <p className="text-lg text-gray-600">
          Conditional statements are used to make decisions in your code.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`if (condition) {
  // Code to run if the condition is true
} else {
  // Code to run if the condition is false
}`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Loops (for, while, do-while)</h3>
        <p className="text-lg text-gray-600">
          Loops allow you to repeatedly execute a block of code.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`// For Loop
for (let i = 0; i < 5; i++) {
  // Code to repeat
}

// While Loop
let i = 0;
while (i < 5) {
  // Code to repeat
  i++;
}

// Do-While Loop
let i = 0;
do {
  // Code to repeat
  i++;
} while (i < 5);
`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Objects and Object-Oriented Programming</h3>
        <p className="text-lg text-gray-600">
          JavaScript is an object-oriented language. You can create and work with objects, which can have properties and methods.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`// Object with properties and methods
const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, I'm " + this.name);
  }
};
`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">DOM Manipulation</h3>
        <p className="text-lg text-gray-600">
          The Document Object Model (DOM) allows you to interact with HTML elements and change their content and attributes dynamically.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`// Select and modify an HTML element
const element = document.getElementById("myElement");
element.innerHTML = "New content";
`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Asynchronous JavaScript (Promises and Async/Await)</h3>
        <p className="text-lg text-gray-600">
          JavaScript supports asynchronous programming using Promises and the <code>async/await</code> syntax.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`// Example using Promises
const fetchData = fetch("https://api.example.com/data");
fetchData
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example using async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Modules and ES6 Features</h3>
        <p className="text-lg text-gray-600">
          ES6 (ECMAScript 2015) introduced several features such as modules, arrow functions, template literals, and more to enhance JavaScript development.
        </p>

        <p className="text-lg text-gray-600">
          JavaScript is a rich and dynamic language, and these are just the basics. You can explore further, including libraries and frameworks, to build web applications, games, mobile apps, and even server-side applications.
        </p>
      </div>
      <div className="bg-black rounded-lg p-4 mt-5 shadow-md text-blue-100">
        <h2 className="text-2xl font-bold mb-4">Promises in JavaScript</h2>
        <p className="text-lg text-gray-400">
          Promises are a way to handle asynchronous operations in JavaScript. They represent a value which might be available now or in the future. Promises have three states: pending, resolved (fulfilled), or rejected.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`// Example using Promises
const fetchData = fetch("https://api.example.com/data");
fetchData
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example using async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`}
        </pre>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-md mt-5">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">More JavaScript Features</h2>

        <h3 className="text-xl font-bold mb-2 text-blue-600">ES6 Modules</h3>
        <p className="text-lg text-gray-600">
          ES6 introduced native support for modules. You can use <code>import</code> and <code>export</code> to organize your code into reusable modules.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`// Math.js (Export)
export function add(a, b) {
  return a + b;
}

// App.js (Import)
import { add } from './Math.js';`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Arrow Functions</h3>
        <p className="text-lg text-gray-600">
          Arrow functions provide a concise syntax for writing anonymous functions. They automatically bind the <code>this</code> value to the surrounding context.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`const add = (a, b) => a + b;`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Template Literals</h3>
        <p className="text-lg text-gray-600">
          Template literals allow you to embed expressions inside strings, making it easy to create dynamic strings.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`const name = "Alice";
const greeting = \`Hello, \${name}!\`;`}
        </pre>

        <h3 className="text-xl font-bold mb-2 text-blue-600">Spread and Rest Operators</h3>
        <p className="text-lg text-gray-600">
          The spread operator (<code>...</code>) is used to expand elements from arrays and objects. The rest operator gathers elements into arrays.
        </p>
        <pre className="bg-black p-4 rounded-lg mt-4 text-blue-100">
          {`// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest Operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}`}
        </pre>
      </div>
    </div>
  );
};

export default JavaScriptLearning;
