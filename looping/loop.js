// While Loop
let num = 0;
while(num < 3) {
    console.log(num);
    num++;
}

// Do While
let i = 0;
do {
    console.log("DO DO DO");
    i++;
} while(i < 3);

// For loop
let fruits = ["Mango", "Apple", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Looping Arrays and Object
// Array တွေစီမံဖို့အတွက် map, filter, reduce တို့လို Method တွေရှိပြ ီးဖြ စ်ပါတယ်။ ဒါပေမယ့် အဲ့ဒီ Method တွေက Objects တွေအတွက်သုံးလို့ မရပါဘူး။ Object တွေကို Loop လုပ်ဖို့အတွက် for-in Loop ကိုသုံးနိုင်ပါတယ်။
let userOne = {
    name: "Alice",
    age: 23,
    occupation: "JS Developer"
};

// For in loop 
for (properties in userOne) {
    console.log(userOne[properties]);
}

// for-in Loop ကို ရိုးရိုး Array တွေအတွက်လည်း အသုံးပြ ုနိုင်ပါတယ်။
let arrOne = [1, 2, 3, 4, 5];
for (index in arrOne) {
    console.log(arrOne[index]);
}

// Array တွေအတွက် for-of Loop ကိုလည်း အသုံးပြ ုနိုင်ပါတယ်။ for-of Loop ကို Iterable Object တွေအတွက်ပဲသုံးလို့ရပါတယ်။ ရိုးရိုး Object တွေအတွက် မရပါဘူး။
// Iterable Object ဆိုတာ Iterable Protocol က သတ်မှတ်ထားတဲ့ သတ်မှတ်ချက်နဲ့အညီ တည်ဆောက်ထားတဲ့ Object တွေကိုပြောတာပါ။ Array တွေ String တွေကို for-of နဲ့ Loop လုပ်နိုင်ပြ ီး ရိုးရိုး Object တွေအတွက်လိုအပ်ရင် for-in ကို အသုံးပြ ုရမှာပဲဖြစ်ပါတယ်။
let arrTwo = [1, 2, 3, 4, 5];
for (value of arrTwo) {
    console.log(value);
}