// Example-1
function twice(num, fun) {
    let result = fun(num);
    return result * 2;
}
let result = twice(5, function(x) {
    return x + 1;
});
console.log(result); // -> 12