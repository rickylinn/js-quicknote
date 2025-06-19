// Object တစ်ခုတည်ဆောက်ဖို့အတွက်လည်း Object Constructor ကိုသုံးနိုင်သလို Object Literal Operator အဖြစ် တွန့်ကွင်းအဖွင့်အပိတ်ကို သုံးနိုင်ပါတယ်။
let objOne = new Object({
    name: "Alice",
    age: 23
});
console.log(objOne);

let objTwo = {
    name: "Yoshi",
    age: 24
};
console.log(objTwo);

// လက်တွေ့အသုံးပြ ုတဲ့အခါမှာလည်း နှစ်မျုိ းသုံးလို့ရပါတယ်။ Array Index ထောက်သလို လေးထောင့်ကွင်းအဖွင့်အပိတ်နဲ့ ရေးသားအသုံးပြ ုနိုင်သလို Object Property ကိုရယူသလို Dot Operator နဲ့လည်း ရေးသားအသုံးပြ ုနိုင်ပါတယ်။
let objThree = {
    name: "Mario",
    age: 23,
};
console.log(objThree["name"]); // -> Mario
console.log(objThree.name); // -> Mario

objThree.occupation = "Solution Architect"; // Add new properties to object
console.log(objThree); 
console.log(objThree.occupation); // -> Solution Architect

// Object တွေမှာလည်း Destructuring လုပ်ဆောင်ချက် ရှိပါတယ်။
let user = {
    name: "Bob",
    age: 22
};

let { name, age } = user;
console.log(name);
console.log(age);

// Object မှာ Method တွေသတ်မှတ်ဖို့အတွက် Function Expression တွေကိုပဲ သုံးနိုင်ပါတယ်။ သက်ဆိုင်ရာ Index မှာ ရိုးရိုးတန်ဖိုး ပေးမယ့်အစား Function တစ်ခုပေးလိုက်ရတာပါ။
let objFour = {
    name: "Alice",
    age: 23,
    skills : () => {
        return "JavaScript";
    }
};

console.log(objFour.name);
console.log(objFour.age);
console.log(objFour.skills());

// Object ရဲ့ ကိုယ်ပိုင် Property တွေ Method တွေကိုအသုံးပြ ုလိုရင် this Keyword ကို အသုံးပြ ုရပါတယ်။
let objFive = {
    name: "Alice",
    printName: function() {
        return this.name;
    }
};
console.log(objFive.printName());

// Object Method တွေကို အတိုကောက်ရေးတဲ့နည်း ရှိပါသေးတယ်။ အပေါ်ကနမူနာကို အခုလိုရေးရင်လည်း ရပါတယ်။ အတူတူပါပဲ
let objSix = {
    name: "Alice",
    printName() {
        return this.name;
    }
};
console.log(objSix.printName());

// JavaScript မှာတော့ Object တွေ Array တွေကိုသာလိုအပ်သလို ပေါင်းစပ်ပြ ီးတော့ အသုံးပြ ုကြ ပါတယ်။
let person = {
    name: "Alice",
    age: 22,
    education: ["JavaScript", "Bash", "C++"]
}
console.log(person.education[2]);

let peoples = [
    { name: "Alice", age: 21 },
    { name: "Yoshi", age: 23 }
];
console.log(peoples[0].name);

// JSON နဲ့ JavaScript Object တို့ဟာ ရေးထုံးအားဖြ င့် အတူတူပါပဲ။ ကွဲလွဲချက်အနေနဲ့ (၂) ချက်မှတ်ရပါမယ်။
// ပထမတစ်ချက်ကတော့ JSON မှာ Index/Key တွေကို Double Quote အဖွင့်အပိတ်နဲ့ ရေးပေးရပါတယ်။ 
// ဒုတိယကွဲလွဲချက်အနေနဲ့၊ တန်ဖိုးအဖြ စ် JSON က လက်ခံတဲ့ အမျုိးအစား (၆) မျုိးပဲ ရိှပါတယ်။ String,Number, Boolean, null, Array, Object တို့ဖြ စ်ပါတယ်။ ဒီခြောက်မျုိ းကလဲွရင် တစ်ခြ ားအရာတွေကိုအသုံးပြ ုခွင့်မရှိတဲ့အတွက် JavaScript Object မှာလို Function တွေ Method တွေ ပါဝင်လို့ရမှာ မဟုတ်ပါဘူး။ Comment တွေကိုတောင် ထည့်သွင်းရေးသားလို့ ရမှာ မဟုတ်ပါဘူး။

// JavaScript Object တွေကို JSON String ဖြ စ်အောင်ပြောင်းလိုရင် JSON.stringify() လို့ခေါ်တဲ့ Standard Method ကိုအသုံးပြ ုနိုင်ပါတယ်။
let objSeven = {
    name: "Alice",
    age: 23
};

let jsonOne = JSON.stringify(objSeven);
console.log(objSeven);
console.log(jsonOne);

// JSON String တွေကို JavaScript Object ပြောင်းလို့လည်း ရပါတယ်။ JSON.parse() ကို သုံးရပါတယ်။
let objEight = JSON.parse(jsonOne);
console.log(objEight);

// JSON ဆိုတာ အသုံးဝင်တဲ့ JavaScript Standard Object တွေထဲက တစ်ခုအပါအဝင်ဖြ စ်ပါတယ်။ JavaScript မှာ တစ်ခြ ား အသုံးဝင်တဲ့ Standard Object တွေ အများကြ ီးကျန်ပါသေးတယ်။ ရက်စဲွ/အချနိ ်တွေကို စီမံနိုင်ဖို့အတွက် Date Object နဲ့ Absolute, Square Root, Power, Round, Min, Max စတဲ့တွက်ချက်မှုတွေအတွက် Math Object တို့လို့ အခြေခံကျတဲ့ Object တွေကနေ Promise တို့ Proxy တို့လိုအဆင့်မြ င့်ကုဒ် Architecture အတွက် အသုံးဝင်တဲ့ Object တွေထိ ရှိနေပါတယ်။