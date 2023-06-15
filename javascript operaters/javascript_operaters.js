let a = 5;
let b = 3;

// Arithmetic Operators
let addition = a + b; // 8
let subtraction = a - b; // 2
let multiplication = a * b; // 15
let division = a / b; // 1.6666666666666667
let remainder = a % b; // 2
let exponentiation = a ** b; // 125

console.log(addition); 
console.log(subtraction); 
console.log(multiplication); 
console.log(division); 
console.log(remainder);
console.log(exponentiation);

// Assignment Operators
let x = 10;
x += 5; // x is now 15
x -= 3; // x is now 12
x *= 2; // x is now 24
x /= 4; // x is now 6
x %= 2; // x is now 0

console.log(x);
// Comparison Operators
let equal = a == b; 
let notEqual = a != b; 
let strictEqual = a === b; 
let strictNotEqual = a !== b; 
let greaterThan = a > b; 
let lessThan = a < b; 
let greaterThanOrEqual = a >= b; 
let lessThanOrEqual = a <= b; 

// Logical Operators
let isTrue = true;
let isFalse = false;

let logicalAnd = isTrue && isFalse; // Logical AND operator (&&)
console.log(logicalAnd); // Output: false

let logicalOr = isTrue || isFalse; // Logical OR operator (||)
console.log(logicalOr); // Output: true

let logicalNot = !isTrue; // Logical NOT operator (!)
console.log(logicalNot); 



// Bitwise AND
let bitwiseAnd = a & b; // 0101 & 0011 = 0001 (1 in decimal)

// Bitwise OR
let bitwiseOr = a | b; // 0101 | 0011 = 0111 (7 in decimal)

// Bitwise XOR
let bitwiseXor = a ^ b; // 0101 ^ 0011 = 0110 (6 in decimal)

// Bitwise NOT
let bitwiseNot = ~a; // ~0101 = 1010 (-6 in decimal)

// Left Shift
let leftShift = a << 1; // 0101 << 1 = 1010 (10 in decimal)

// Right Shift
let rightShift = a >> 1; // 0101 >> 1 = 0010 (2 in decimal)

// Zero-fill Right Shift
let zeroFillRightShift = a >>> 1; // 0101 >>> 1 = 0010 (2 in decimal)


// Unary Operators
let unaryPlus = +a; // 5
let unaryMinus = -b; // -3
let increment = ++a; // 6 (pre-increment)
let decrement = --b; // 2 (pre-decrement)
let typeofOperator = typeof a; // "number"
let voidOperator = void b; // undefined
let deleteOperator = delete x; // true

// Ternary Operator
let result = (a > b) ? "a is greater than b" : "b is greater than or equal to a";
console.log(result);
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No"; // Ternary operator (condition ? expression1 : expression2)
console.log(isAdult); 

// Unary Operators:
let z = "5";
let y = +"10";

console.log(typeof z); // string
console.log(typeof y); // number

console.log(z + y); // "510" (string concatenation)
console.log(+z + y); // 15 (numeric addition)


const c = 5;
const d = -c;
console.log(d)

// The value of y will be -5


let x1 = 42;
let y1 = "Hello, World!";
let z1 = true;

console.log(typeof x1);  // Output: "number"
console.log(typeof y1);  // Output: "string"
console.log(typeof y1);  // Output: "boolean"

// Increment and Decrement Operators
let counter = 0;

counter++; // Post-increment operator (++)
console.log(counter); // Output: 1

counter--; // Post-decrement operator (--)
console.log(counter); // Output: 0

++counter; // Pre-increment operator (++)
console.log(counter); // Output: 1

--counter; // Pre-decrement operator (--)
console.log(counter); 

// String Concatenation Operator
let greeting = "Hello";
let name = "John";
let message = greeting + " " + name; // String concatenation operator (+)
console.log(message); 



