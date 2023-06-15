function hello() {
    console.log("hello World")
}

hello();


var myfunc = function() {
    console.log("make function method")
};

myfunc();

var myobj = {
    helloWorld: function() {
      console.log("Function called!");
    }
};

myobj.helloWorld();

var func = () => {
    console.log("Function called!");
};

func()

var functionName = new Function('parameter1', 'parameter2', 'console.log(parameter1 + parameter2);');

functionName(10, 20);


const getMultiplier = (number) => {
    return function(value) {
      return number * value;
    };
}

const getTwoFunc = getMultiplier(6)
console.log(getTwoFunc(2));


function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
let value = toCelsius();
console.log(value)