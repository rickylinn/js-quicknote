// Problem Set
function add1000() {
    let result = 0;

    for (let i = 1; i <= 100000000; i++) {
        result += i;
    }

    return result;
}

// console.log("some process...");
// console.log("some process...");
// console.log(add1000());
// console.log("some process...");
// console.log("some process...");

// Solution
function add1000Later() {
    return new Promise((resolve, reject) => {
        let result = add1000();

        if (result) {
            resolve(result);
        } else {
            reject("Execution Error");
        }
    })
}

console.log("some process...");
console.log("some process...");
add1000Later()
    .then((result) => {
        console.log(result);
        return result;
    })
    .then((result) => {
        console.log(result + 2);
    })
    .catch((e) => {
        console.log(`Error: ${e}`);
    });
console.log("some process...");
console.log("some process...");