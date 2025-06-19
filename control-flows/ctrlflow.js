// if statement
if (true) {
    console.log("Hello World");
}

// if else statement
if (true) {
    console.log("This is true");
} else {
    console.log("This is not true");
}

// if elseif else statement
let num = 0;
if (num == 0) {
    console.log("Num is 0");
} else if (num == 1) {
    console.log("Num is 1");
} else if (num == 2) {
    console.log("Num is 2");
} else {
    console.log("Num is undefined");
}

// switch statement
let result = 0;
switch (result) {
    case 0:
        console.log("result is 0");
        break;
    case 1:
        console.log("result is 1");
        break;
    default:
        console.log("result is undefined");
        break;
}

// Tenerary Operator
let user = {
    name: "Alice",
    age: 23
};

console.log(user.age > 20 ? "Authorized" : "Not Qualified");