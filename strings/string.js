// JavaScript က အရာတော်တော်များများကို Object ကဲ့သို့ အသုံးပြ ုနိုင်အောင် စီစဉ်ပေးထားပါတယ်။
// String, Boolean, Number, Function တို့လို အခြေခံလုပ်ဆောင်ချက်တွေကအစ Object Wrapper ခေါ် အလွှာတစ်ထပ် အုပ်ထားပေးလို့ အဲ့ဒီ String, Boolean, Number, Function တွေအားလုံးကို Object ကဲ့သို့ အသုံးပြ ုနိုင်ပါတယ်။ သူတို့မှာလည်း Standard Property တွေ Methodတွေရှိနေပါတယ်။

// String Object တစ်ခုတည်ဆောက်ဖို့အတွက် String Constructor နဲ့ String Literal (သို့မဟုတ်) Template Literal တို့ကို အသုံးပြ ုနိုင်ပါတယ်။
let stringOne = new String("Hello World");
let stringTwo = "Hello Universe";
let stringThree = `hello ${stringTwo}`;
console.log(stringOne);
console.log(stringTwo);
console.log(stringThree);

// သတိပြ ုရမှာကတော့ String တွေမှာ length လို့ခေါ်တဲ့ Property ရှိနေခြ င်းပဲဖြ စ်ပါတယ်။ Object မို့လို့ Property ရှိနေတာပါ။ length တင်မကပါဘူး Index လည်း ရှိပါသေးတယ်
let myName = "Alice";
console.log(myName[0]); // -> 'A'
console.log(myName.length); // -> 5

// charAt() လို့ခေါ်တဲ့ Standard String Method
console.log(myName.charAt(0)); // -> 'A'

// toUpperCase() Method ကို စာလုံး အကြ ီးတွေပြေ ာင်းဖို့ သုံးပါတယ်။
let upperName = myName.toUpperCase();
console.log(myName);
console.log(upperName);

// toLowerCase() ကိုတော့ စာလုံး အသေးတွေပြေ ာင်းဖို့ သုံးပါတယ်။
let lowerName = myName.toLowerCase();
console.log(myName);
console.log(lowerName);

// trim() ကို ရှေ့ဆုံးနဲ့ နောက်ဆုံးက Space တွေရှင်းဖို့သုံးပါတယ်။
let spaceText = " Hi, I am text with some spacing ";
let trimText = spaceText.trim();
console.log(spaceText);
console.log(trimText);

// substr() ကိုတော့ လိုချင်တဲ့အပိုင်း ဖြ တ်ယူဖို့သုံးပါတယ်။ substr() အတွက် Argument နှစ်ခုပေးတဲ့အခါ ပထမတစ်ခုက Index ဖြ စ်ပြ ီး ဒုတိယတစ်ခုက စာလုံးအရေအတွက်ဖြစ်ပါတယ်။
let textOne = "Hello World";
let subText = textOne.substring(0, 5);
console.log(textOne);
console.log(subText); // -> Hello

// split() ကိုတော့ အပိုင်းပိုင်း ခွဲထုတ်ဖို့ သုံးပါတယ်။ split() Method အတွက် Space တစ်ခုကို Argument အနေနဲ့ ပေးလိုက်တဲ့အခါ Space နဲ့ ပိုင်းဖြ တ်ပြ ီး ပိုင်းဖြ တ်လို့ရလာတဲ့ ရလဒ်ကို Array တစ်ခုအနေနဲ့ ပြ န်ပေးတာကို တွေ့ရမှာပါ။ Argument မပေ းတဲ့အခါမှာတော့ ရှိသမျှ Character အားလုံးကို တစ်လုံးစီခွဲထုတ်လိုက်ပြ ီး ရလဒ်ကို Array အနေနဲ့ ပြန်ပေးမှာပဲ ဖြစ်ပါတယ်။
let orgString = "Hello World";
let splitString = orgString.split(" ");
console.log(splitString);
console.log(orgString.split());