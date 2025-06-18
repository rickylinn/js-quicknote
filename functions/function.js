// Normal Function
function sayHello(name) {
    return `Hello, how are you, ${name}`;
}

let result = sayHello("Alice");
console.log(result);

// Default parameters
function add(a = 0, b = 1) {
    return a + b;
}
console.log(add(1)); // -> 2

// Rest parameters
function rest(a, b, ...c) {
    console.log(c); // -> [3, 4, 5] return as array
}
rest(1, 2, 3, 4, 5); 

// Function as expression
let greetOne = function greet() {
    console.log('Greeting with function name');
};
greetOne();

let greetTwo = function () {
    console.log('Greeting without function name'); // Assign anonymous function
}
greetTwo();

let greetThree = () => {
    console.log("Greeting from arrow function"); // Assign arrow function
}
greetThree();

// IIFE
(function () {
    console.log('IIFE Function');
})();





