function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("John");  


var add = function(a, b) {
    return a + b;
};
console.log(add(2, 3));  


const multiply = (a, b) => a * b;
console.log(multiply(2, 3));  


(function() {
    console.log("This is an IIFE");
})();  

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("John");  // Output: Hello, John!


// Example

function getMultiplier(number) {
    return function(value) {
      return number * value;
    };
}

const makeTwice = getMultiplier(2)
console.log(makeTwice(4)) 
  