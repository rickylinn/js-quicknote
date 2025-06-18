// Object တွေမှာ ကိုယ်ပိုင်ဂုဏ်သတ္တိလေ းတွေ ရိှကြတယ်။ Property လို့ ခေါ်ကြ လေ့ ရိှပါတယ ်။ တစ်ချုိ့ကတော့ ကိုယ်ပိုင်ဂုဏ်သတိ္တအပြ င် အပြ ုအမူလေးတွေပါ ရိှကြ တယ်။ Method လို့ ခေါ်ကြ လေ့ ရိှပါတယ ်။ ဒီလို Property တွေ Method တွေ စုဖဲွ့ပါဝင်တဲ့Object တွေကို ကိုယ်တိုင် တည်ဆောက်ယူလို့ ရနိုင်သလို သက်ဆိုင်ရာ Language က တစ်ခါထဲ ထည့်ပေးထားတဲ့ အသင့်သုံး Standard Object တွေလည်း ရှိနိုင်တယ်။

// Array ဟာ JavaScript ရဲ့ Standard Object တစ်ခုဖြစ်ပါတယ ်။ 
// တစ်ခြ ား Languageတွေရဲ့ Array Type နဲ့ သဘေ ာသဘာဝ ဆင်တူတဲ့လုပ်ဆောင်ချက်ကို ရရှိစေဖို့အတွက် Array လို့ခေါ်တဲ့ Standard Object တစ်ခုကို အသင့်ထည့်သွင်း ပေးထားတာပါ။
// Array တစ်ခုတည်ဆောက်ဖို့အတွက် နည်းလမ်း (၂) မျုိ းရိှပါတယ်။

// Array Object Constructor
let mixOne = new Array("Alice", 3.14, true);

// Array Literal
let mixTwo = ["Alice", 3.14, true];

let name = mixOne[0];
let num = mixOne[1];
let out = mixOne[2];
let noElement = mixOne[3]; // -> undefined

mixOne[3] = "Hay, I'm new element";

// Array Properties
let fruits = ["Apple", "Orange"];
console.log(fruits.length); // -> 2
fruits[2] = "Mango";
console.log(fruits.length); // -> 3
console.log(fruits[fruits.length - 1]); // -> "Mango"

// Array of Array
let myArr = [
    1,
    2,
    [1, 2, 3, 4, 5],
    "hello world",
    true,
    3.14
];

console.log(myArr[2][0]); // -> 1
console.log(myArr[3]); // -> "hello world"

// Array Methods
let myArrTwo = ["Alice", "Bob", "Yoshi"];
console.log(`Original Array: ${myArrTwo}`); // -> ["Alice", "Bob", "Yoshi"]

// push() Method ကို Array ရဲ့နောက်ဆုံးကနေ Index တစ်ခုတိုးဖို့အတွက် သုံးနိုင်ပါတယ်။
myArrTwo.push("Mario");
console.log(`Push Array: ${myArrTwo}`); // -> ["Alice", "Bob", "Yoshi", "Mario"]

// pop() Method ကိုတော့ Array ရဲ့နောက်ဆုံး Index ကို ဖယ်ထုတ်ဖို့သုံးနိုင်ပါတယ်။
myArrTwo.pop();
console.log(`Pop Array: ${myArrTwo}`); // -> ["Alice", "Bob", "Yoshi"]

// shift() Method ကိုတော့ Array ရဲ့ရှေ့ဆုံး Index ကိုဖယ်ထုတ်ဖို့ သုံးပါတယ်။
myArrTwo.shift();
console.log(`Shift Array: ${myArrTwo}`); // -> ["Bob", "Yoshi"]

// unshift() Method ကိုတော့ Array ရဲ့ရှေ့ဆုံးမှာ Index တစ်ခုတိုးဖို့ သုံးနိုင်ပါတယ်။
myArrTwo.unshift("Alice");
console.log(`Unshift Array: ${myArrTwo}`); // -> ["Alice", "Bob", "Yoshi"]

// indexOf() နဲ့ Index တန်ဖိုးကို ရှာနိုင်ပြ ီး၊
console.log(myArrTwo.indexOf("Alice")); // -> 0

// splice() နဲ့မလိုချင်တဲ့ Index ကို ဖယ်ထုတ်နိုင်ပါတယ် | ပထမ Argument က Index ဖြ စ်ပြ ီး ဒုတိယ Argument ကတော့ အရေအတွက် ဖြ စ်ပါတယ်။ အရေအတွက်မှာ 1 ကို ပေးလို့ တစ်ခုဖျက်ပေးတာပါ။ ဖျက်လိုတဲ့အရေအတွက်ကို လိုသလို ပေးနိုင်ပါတယ်။
myArrTwo.splice(1, 1); 
console.log(`Splice Array: ${myArrTwo}`); // -> ["Alice", "Yoshi"];

// ***************************************************************************************************************************
// တစ်ချုိ့ Method က မူလ Array ရဲ့ တန်ဖိုးတွေကို ပြ ုပြ င်လိုက်တာဖြစ်ပြ ီး။ တစ်ချုိ့ Method တွေက မူလ Array ရဲ့တန်ဖိုးကို ပြောင်းလဲစေခြင်းမရိှဘဲ ရလဒ်ကို ပြ န်ပေးတာဖြ စ်ပါတယ်။ push(), pop(), shift(), unshift(), splice() စတဲ့ Method တွေကမူလ Array တန်ဖိုးတွေကို ပြ ုပြ င် ပြောင်းလဲသွားစေတဲ့ Method တွေပါ။
// ***************************************************************************************************************************


// join() Array Index တွေကို တစ်ဆက်ထဲ တစ်တွဲထဲ ဖြစ်သွားအောင် တွဲဆက်ပြ ီး String အနေနဲ့ ရလဒ်ကို ပြန်ပေးနိုင်တဲ့ လုပ်ဆောင်ချက်ဖြစ်ပါတယ်။ ဘာမှမပေ းရင်လည်း ရပါတယ်။ ကြ ားခံမထားတော့ဘဲ အကုန်လုံးကို တွဲဆက်ပေးသွားမှာပဲ ဖြစ်ပါတယ်။ 
let teams = ["Chelsea", "Real Madrid", "Liverpool"];
let stringTeams = teams.join(",");
console.log(`Original Array: ${teams}`); // -> ["Chelsea", "Real Madrid", "Liverpool"]
console.log(`Join Array: ${stringTeams}`); // -> Chelsea, Real Madrid, Liverpool
console.log(typeof stringTeams); // -> String

// map() Method အတွက် Argument အနေနဲ့ Function Expression တစ်ခုပေးရပါတယ်။ပေးလိုက်တဲ့ Function Expression ကို Array Item အားလုံးပေါ်မှာ အလုပ်လုပ်ပြ ီး နောက်ဆုံး ရလာတဲ့ရလဒ်ကို Array အနေနဲ့ ပြ န်ပေးမှာပါ။ Array ထဲကတန်ဖိုးတွေကို တစ်ခုချင်းလိုသလိုပြ ုပြ င်ရယူဖို့ အသုံးဝင်ပါတယ်။
let numOne = [1, 2, 3, 4, 5];
let numOneMap = numOne.map((n) => {
    return n + 1;
});
console.log(numOneMap); // -> [2, 3, 4, 5 ,6]

// filter() Method အတွက်လည်း Function Expression တစ်ခုကို Argument အနေနဲ့ပေးရပါတယ်။ Array ထဲက လိုချင်တဲ့ Item တွေကို ရွေးယူချင်ရင် အသုံးဝင်ပါတယ်။ filter() ရဲ့ထူးခြ ားချက်ကတော့ map() လို Item အားလုံးကို ပြ န်ပေးတာ မဟုတ်တော့ဘဲ return true ဖြ စ်တဲ့ Item တွေကိုပဲ ပြ န်ပေးတာပါ။ နမူနာအရ % သင်္ကေ တကိုသုံးပြ ီး လက်ရှိတန်ဖိုးကို 2 နဲ့စားပြ ီး အကြွ င်းရှာထားပါတယ်။ စာလို့ပြ တ်ရင် 0 မို့လို့ false ပါ။ စားလို့မပြ တ်ရင်တော့ အကြွ င်းတန်ဖိုးတစ်ခုရမှာမို့လို့ true ပါ။ 2 နဲ့စားလို့ မပြ တ်တဲ့ တန်ဖိုးဆိုရင် return true ဖြ စ်မှာမို့လို့ ရလဒ်အနေနဲ့ 2 နဲ့စားလို့ မပြ တ်တဲ့ မဂဏန်းတွေချည်းပဲ ပြ န်ရတာကို တွေ့ရမှာ ဖြ စ်ပါတယ်။
let numTwo = [1, 2, 3, 4, 5];
let numTwoFilter = numTwo.filter((n) => {
    return n % 2;
})
console.log(numTwoFilter); // -> [1, 3 ,5]

// reduce() Method အတွက်လည်း Function Expression တစ်ခုကို ပေးရတာပါပဲ။ သူကတော့ Array Item အားလုံးပေါ်မှာအလုပ်လုပ်ပြ ီး နောက်ဆုံးရလဒ်တန်ဖိုးတစ်ခုကို ပြ န်ပေးပါတယ်။ဥပမာ - Array ထဲမှရိှသမျှ တန်ဖိုးအားလုံးကို ပေါင်းလိုက်ပြ ီး ပေါင်းခြ င်းရလဒ်ကို ပြ န်ပေးတာမျုိးပါ။ reduce() ရဲ့ Function Expression အတွက် Parameter နှစ်ခုရှိတာကို သတိပြ ုပါ။ နမူနာအရ a က Accumulative Value ခေါ် အလုပ်လုပ်လက်စ တန်ဖိုးဖြ စ်ပြ ီး n က လက်ရှိအလုပ်လုပ်နေတဲ့ Item ရဲ့တန်ဖိုးဖြ စ်ပါတယ်။
let numThree = [1, 2, 3, 4, 5];
let numThreeReduce = numThree.reduce((acc, n) => {
    return acc + n;
});
console.log(numThreeReduce); // -> 15

// ***************************************************************************************************************************
// join(), map(), filter(), reduce() ကတော့ မူလ Arrayတန်ဖိုးတွေကို မပြေ ာင်းပါဘူး။ ရလာတဲ့ ရလဒ်ကိုသာ ပြန်ပေးတာပါ
// ***************************************************************************************************************************

// Array Destructuring
let helloArray = [10, 20];
let a = helloArray[0];
let b = helloArray[1];

let [x, y] = helloArray;
console.log(a); // -> 10
console.log(b); // -> 20
console.log(x); // -> 10
console.log(y); // -> 20

// Array Spread : Spread လို့ခေါ်တဲ့ လုပ်ဆောင်ချက်ဟာ Array တစ်ခုအတွင်းက Item တွေကို တန်ဖိုးတစ်ခုချင်းစီအဖြ စ်ခွဲထုတ်ပေးနိုင်ပါတယ်။
let one = [1, 2 ,3];
let two = ["a", "b", "c"];
let three = [one, two]; // -> [[1, 2, 3], ["a", "b", "c"]]
let four = [...one, ...two] // -> [1, 2, 3, "a", "b", "c"]
console.log(three);
console.log(four);

let spreadArr = [1, 2];
function spreadFun (a, b) {
    return a + b;
}
let r1 = spreadFun(spreadArr[0], spreadArr[1]);  // -> Normal Style
let r2 = spreadFun(...spreadArr); //-> Spread style

console.log(r1); // -> 3
console.log(r2); // -> 3