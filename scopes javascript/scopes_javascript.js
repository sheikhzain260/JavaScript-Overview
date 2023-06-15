var globalVariable = 10;

function myFunction() {
console.log(globalVariable); 
}
console.log(globalVariable);


function myFunction() {
  var localVariable = 20; 

  if (true) {
    var blockVariable = 30; 
    let blockScopedVariable = 40; 
    console.log(localVariable); 
    console.log(blockVariable); 
    console.log(blockScopedVariable); 
  }

  console.log(localVariable); 
  console.log(blockVariable); 
}

myFunction();


function myFunction() {
  var functionScopedVariable = 50;

  if (true) {
    var blockVariable = 60;
    console.log(functionScopedVariable); 
    console.log(blockVariable); 
  }

  console.log(functionScopedVariable); 
  console.log(blockVariable); // Accessible outside the block due to function-level scope (Note: Not recommended)
}

myFunction();


