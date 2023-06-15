const person1 = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello!',this.name);
    }
};

person1.greet()
console.log(person1.greet());

const greet = function() {
    console.log('Hello!');
  };



// Exercise

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = firstName + ' ' + lastName;
}
  
const person2 = new Person('John', 'doe');
console.log(person2)

class Person3 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const person3 = new Person3(firstName = 'John', lastName = 'Doe');
  console.log(person3.firstName,person3.lastName);