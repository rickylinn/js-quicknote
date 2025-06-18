// normal function
let addOne = function(a, b) {
    return a + b;
}

// arrow function
let addTwo = (a, b) => {
    return a + b;
}

// Parameter တစ်ခုထဲဆိုရင် ဝိုက်ကွင်းအဖွင့်အပိတ်ကို မထည့်ဘဲရေးလို့ရပါတယ်
let withoutParenthesis = n => {
    return n * 2;
}
let result = withoutParenthesis(2);  // -> 4

// Statement တစ်ကြောင်းဘဲရှိရင် တွန့်ကွင်းအဖွင့်အပိတ်နဲ့ return ကို မထည့်ဘဲရေးလို့ရပါတယ်။ အလိုအလျှောက် return ပြန်ပေးပါတယ်။
let withoutReturn = _ => "hello world";
console.log(withoutReturn()); // -> hello world

