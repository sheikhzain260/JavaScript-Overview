// Global scope variables
var globalVariable = "I am a global variable";  // Global variable declaration using the "var" keyword
let globalLetVariable = "I am a global let variable";  // Global variable declaration using the "let" keyword
const globalConstVariable = "I am a global const variable";  // Global variable declaration using the "const" keyword

function exampleFunction() {
  // Function scope variables
  var functionVariable = "I am a function variable";  // Function scope variable declaration using the "var" keyword
  let functionLetVariable = "I am a function let variable";  // Function scope variable declaration using the "let" keyword
  const functionConstVariable = "I am a function const variable";  // Function scope variable declaration using the "const" keyword

  console.log(globalVariable);  // Accessing the global variable within the function
  console.log(globalLetVariable);  // Accessing the global let variable within the function
  console.log(globalConstVariable);  // Accessing the global const variable within the function

  console.log(functionVariable);  // Accessing the function variable within the function
  console.log(functionLetVariable);  // Accessing the function let variable within the function
  console.log(functionConstVariable);  // Accessing the function const variable within the function
}

exampleFunction();

console.log(globalVariable);  // Accessing the global variable outside the function
console.log(globalLetVariable);  // Accessing the global let variable outside the function
console.log(globalConstVariable);  // Accessing the global const variable outside the function

// console.log(functionVariable);  // This will throw an error since functionVariable is not accessible outside the function
// console.log(functionLetVariable);  // This will throw an error since functionLetVariable is not accessible outside the function
// console.log(functionConstVariable);  // This will throw an error since functionConstVariable is not accessible outside the function

// Data type examples
var numberVariable = 10;  // Number data type
var stringVariable = "Hello, world!";  // String data type
var booleanVariable = true;  // Boolean data type
var arrayVariable = [1, 2, 3, 4, 5];  // Array data type
var objectVariable = { name: "John", age: 30, city: "New York" };  // Object data type
