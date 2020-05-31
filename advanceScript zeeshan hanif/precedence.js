//Order of precedence

//Function declarations take precedence over variable declarations
//Function declarations are hoisted over variable declarations but not over variable assignments.

//Variable assignment over function declaration
var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number
//Function declarations over variable declarations
var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function



//this is very useful
