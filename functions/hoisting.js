// It is workable because js auto declare before invoking
console.log(add(1, 2)); // -> 3
function add(a, b) {
    return a + b;
}

// But it is not working, because of declare as let which assigned function expression
console.log(test(1, 3)); // -> Error
let test = (a, b) => {
    return a * b;
}


