const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length);

fruits[5] = "mango";
console.log(fruits.length);


fruits.length = 10;
console.log(fruits); 
console.log(Object.keys(fruits)); 
console.log(fruits.length); 
console.log(fruits[8]);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const areEqual = arr1.toString() === arr2.toString()
console.log(areEqual);  

const objectArray = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 }
];

console.log(objectArray);

const nestedArray = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false]
];
console.log(nestedArray);

const fruits0 = ['apple', 'banana', 'orange', 'grape', 'mango'];
const slicedFruits = fruits0.slice(1, 4);

console.log(slicedFruits);

const numbers1 = [1, 2, 3, 4, 5];

const removedElements = numbers1.splice(2, 2); // Removes 2 elements starting from index 2

console.log(removedElements); 
console.log(numbers1); 

// Adding elements using splice
numbers1.splice(2, 0, 6, 7); // Inserts 6 and 7 at index 2

console.log(numbers1); // Output: [1, 2, 6, 7, 5]

// Replacing elements using splice
numbers1.splice(3, 1, 8); // Replaces 1 element at index 3 with 8

console.log(numbers1); 

const fruits1 = ['apple', 'banana', 'orange', 'grape', 'mango'];

const index1 = fruits1.indexOf('banana');
console.log(index1);  

const index2 = fruits1.indexOf('kiwi');
console.log(index2);

const fruits2 = ['apple', 'banana', 'orange', 'grape', 'mango'];

const hasBanana = fruits2.includes('banana');
console.log(hasBanana);  

const hasKiwi = fruits2.includes('kiwi');
console.log(hasKiwi);  

const fruits3 = ['apple', 'banana', 'orange'];

const joinedString = fruits3.join(', ');
console.log(joinedString);

const numbers3 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers3.map(function(numbers3) {
  return numbers3 * 2;
});

console.log(doubledNumbers);

const numbers4 = [1, 2, 3, 4, 5];

const evenNumbers = numbers4.filter(function(numbers4) {
  return numbers4 % 2 === 0;
});

console.log(evenNumbers); 


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
});

console.log(sum);


// Exercise

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

if (array1.toString() === array2.toString()) {
  console.log("Arrays are equal");
} else {
  console.log("Arrays are not equal");
}


let head = [1, 2, 3, 4];
let swapped = head.map((value, index) => {
  if (index % 2 === 0 && index < head.length - 1) {
    return head[index + 1];
  } else if (index % 2 !== 0) {
    return head[index - 1];
  } else {
    return value;
  }
});

console.log(swapped);

