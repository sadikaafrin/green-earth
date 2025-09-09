1.Ans:
The primary differences between var, let, and const in JavaScript are their scope, reassignment, and re-declaration rules. var is function-scoped and can be reassigned and re-declared. let is block-scoped, can be reassigned, but not re-declared. const is also block-scoped, cannot be reassigned or re-declared, but its contents (like objects or arrays) can still be mutated. In modern JavaScript, it's best to avoid var and prefer const by default, using let only when reassignment is necessary.

2.Ans:
forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.
Example:
 const numbers = [1, 2, 3];
 numbers.forEach(num => console.log(num * 2)); // Logs 2, 4, 6

map() executes the same code on every element in an array and returns a new array with the updated elements.
Example:
 const numbers = [1, 2, 3];
 const doubledNumbers = numbers.map(num => num * 2); // doubledNumbers is [2, 4, 6]

filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.
Example:
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(num => num % 2 === 0); // evenNumbers is [2, 4]

3.Ans:
Arrow functions, introduced in ECMAScript 2015 (ES6), provide a concise syntax for writing function expressions in JavaScript. They offer an alternative to traditional function syntax and address certain limitations, particularly regarding the this keyword.
Key characteristics of arrow functions:
Concise Syntax: They offer a shorter syntax compared to traditional function expressions, often omitting the function keyword, return statement, and curly braces for single-expression functions.
JavaScript

    // Traditional function
    const add = function(a, b) {
      return a + b;
    };

    // Arrow function
    const addArrow = (a, b) => a + b;
Lexical this Binding:
Arrow functions do not create their own this context. Instead, they inherit this from the enclosing lexical scope (the scope in which they are defined). This behavior simplifies this handling, especially within callbacks and nested functions, as it prevents unexpected this rebindings.
No arguments object:
Arrow functions do not have their own arguments object. If you need to access arguments, you can use rest parameters (...args).
Not suitable for constructors:
Arrow functions cannot be used as constructors with the new keyword, as they do not have a prototype property.
When to use arrow functions:
Arrow functions are particularly beneficial for:
Short, inline functions:
Their concise syntax makes them ideal for simple operations and one-liner functions.
Callbacks:
They are frequently used as callbacks in higher-order functions like map(), filter(), reduce(), and event listeners, due to their simplified this binding.
Maintaining this context:
When you need this to consistently refer to the surrounding context, arrow functions are a reliable choice.

4.Ans:
Destructuring assignment in ES6 is a JavaScript expression that allows for the unpacking of values from arrays, or properties from objects, into distinct variables. This simplifies the process of extracting data from complex data structures, making code more readable and concise. 
How it works:
Array Destructuring:
Values are extracted based on their position within the array.
The syntax uses square brackets [] on the left-hand side of the assignment operator, mirroring the structure of the array being destructured.
Example:
        const numbers = [10, 20, 30];
        const [a, b, c] = numbers; // a = 10, b = 20, c = 30
Skipping elements: You can skip elements by leaving empty commas in the destructuring pattern.
Example:
       const [, secondElement,] = numbers; // secondElement = 20
Rest parameters: The spread operator ... can be used to gather remaining elements into a new array.
Example:
       const [first, ...rest] = numbers; // first = 10, rest = [20, 30]
Object Destructuring:
Properties are extracted based on their property names.
The syntax uses curly braces {} on the left-hand side, mirroring the structure of the object.
Example:
       const person = { name: "Alice", age: 30 };
       const { name, age } = person; // name = "Alice", age = 30
Renaming variables: You can assign extracted properties to variables with different names using a colon :.
Example:
      const { name: fullName, age: yearsOld } = person; // fullName = "Alice", yearsOld = 30
Default values: You can provide default values for properties that might be missing in the object.
Example:
      const { occupation = "Unemployed" } = person; // occupation = "Unemployed" (if not present in person)
Rest properties: The spread operator ... can be used to gather remaining properties into a new object.

5.Ans:
Template literals, introduced in ECMAScript 2015 (ES6), provide a more flexible and readable way to work with strings in JavaScript compared to traditional string concatenation. 
Template Literals:
Syntax: Enclosed by backticks (`` ` ``) instead of single or double quotes.
Embedded Expressions: Allow embedding expressions (variables, function calls, arithmetic operations) directly within the string using the ${expression} syntax. This is known as string interpolation.
Multi-line Strings: Support multi-line strings without the need for escape characters (\n). Line breaks within the backticks are preserved.
Example of Template Literal:
const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.
Difference from String Concatenation:
String concatenation, typically achieved using the + operator, involves combining multiple strings and variables into a single string.
Example of String Concatenation:
const name = "Bob";
const age = 25;
const greeting = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(greeting); // Output: Hello, my name is Bob and I am 25 years old.
Key Differences:
Readability:
Template literals significantly improve readability, especially when dealing with complex strings involving multiple variables or expressions, as they eliminate the need for repetitive + operators and quotes.
Interpolation vs. Concatenation:
Template literals offer direct string interpolation using ${} for embedding expressions, while concatenation requires explicit + operators to join string segments and variables.
Multi-line Support:
Template literals inherently support multi-line strings, whereas traditional concatenation requires \n characters for line breaks, making multi-line strings less intuitive.
Expression Evaluation:
Template literals can evaluate any valid JavaScript expression within the ${} placeholder, providing greater flexibility than simple variable insertion.