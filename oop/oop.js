// Imperative Programming: အစီအစဉ်အတိုင်း အလုပ်လုပ်စေတဲ့ ရေးနည်းရေးဟန်
// Procedual Programming: Procedure တွေ Function တွေကို လိုအပ်သလို ပေါင်းစပ်အသုံးချခြင်းအားဖြ င့် အလုပ်လုပ်စေတဲ့ ရေးဟန်
// Functional Programming:  Pure Function တွေကို စုဖွဲ့ပေါင်းစပ်ပြ ီး အလုပ်လုပ်စေခြင်းအားဖြင့် ပရိုဂရမ်ကို ဖွဲ့စည်းတည်ဆောက်ရတဲ့ ရေးဟန်
// Object Oriented Programming: Object တွေပေ ါ်မှာ အခြေခံအလုပ်လုပ်စေဖို့ စုဖွဲ့ရေးသားတဲ့ ရေးနည်းရေးဟန်

// Object
// 1. Object Constructor
let objOne = new Object({
    name: "Alice",
    age: 23,
    sayHello: function () {
        console.log("Hello World");
    }
});

// 2. Object Literal
let objTwo = {
    name: "Alice",
    age: 23,
    sayHello: function () {
        console.log("Hello World");
    }
};

// 3. From Class
class classThree {
    name = "Alice";
    age = 23;
    sayHello = function () {
        console.log("Hello World");
    }
};

let objThree = new classThree();
console.log(objThree.name);
console.log(objThree.age);
objThree.sayHello();

//  **************************************************** Class & Object ****************************************************
class Car {
    color = "Red";
    wheels = 4;
    drive() {
        console.log("This car is driving");
    }
}

let honda = new Car();
console.log(honda.color);
console.log(honda.wheels);
honda.drive();

//  **************************************************** Static Method & Properties  ****************************************************
class Calculator {
    static PI = 3.14;
    static add(a, b) {
        return a + b;
    }
};
// ဒီလို static Property/Method တွေရှိနေမယ်ဆိုရင်တော့ Class ကနေတစ်ဆင့် တိုက်ရိုက်အသုံးပြ ုလို့ရနိုင်သွားပါတယ်။
console.log(Calculator.PI);
console.log(Calculator.add(1, 1));

//  **************************************************** Constructor  ****************************************************
// Class တစ်ခုရေးသားတဲ့အခါ Constructor ထည့်ရေးလို့ရပါတယ်။ Constructor က အဲ့ဒီ Class ကို အသုံးပြ ုပြ ီး Object တည်ဆောက်စဉ်မှာ အလုပ်လုပ်ပေးမယ့် Method တစ်မျိုးပါ။ Constructor Method ရဲ့အမည်ကို constructor လို့ပေးရပါတယ်။
class Doge {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running...`);
    }
}
let dog1 = new Doge("Bobby");
let dog2 = new Doge("Rambo");

dog1.run();
dog2.run();

//  **************************************************** 1. Abstraction  ****************************************************
// To do

// **************************************************** 2. Inheritance  ****************************************************
// Class တွေတည်ဆောက်တဲ့အခါ အခြ ား Class တစ်ခုပေါ်မှာ အခြေခံပြ ီး တည်ဆောက်လို့ ရပါတယ်။ အမွေဆက်ခံလိုက်တဲ့သဘေ ာဖြစ်လို့ ဒီနည်းကိုသုံးလိုက်ရင် ပင်မ Class ရဲ့လုပ်ဆောင်ချက်တွေကို ဆက်ခံတဲ့ Class က အလိုလိုရသွားတာပါ။ Class တွေအခုလို ဆက်ခံရေးသားတဲ့အခါ တစ်ကြ ိမ်မှာ Class တစ်ခုကိုပဲ Inherit လုပ်လို့ရပါတယ်။ Multiple-Inheritance ခေါ် Class နှစ်ခုသုံးခုကနေ တစ်ပြ ိုင်တည်းဆက်ခံရေးသားလို့တော့ မရပါဘူး။
class Animal {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running...`);
    }
}

class Cat extends Animal {
    meow() {
        console.log(`${this.name} meow... meow...`);
    }
}

let puccy = new Cat("Puccy");
puccy.run();
puccy.meow();

class Dog extends Animal {
    constructor(name, color) {
        super(name); // င်မ Class ရဲ့ Constructor ကို လှမ်းခေါ်ပေးပါတယ်။
        this.color = color;
    }

    bark() {
        console.log(`${this.name} with color ${this.color} is wolf... wolf...`);
    }
}
let bobby = new Dog("Bobby", "White");
console.log(bobby.name);
console.log(bobby.color);
bobby.bark();

//  **************************************************** 3. Encapsulation (Access Modifier)  ****************************************************
// Public       -   JavaScript Class တစ်ခုအတွင်းမှာ ကြေညာလိုက်တဲ့ Property တွေ Method တွေဟာ Public သဘေ ာသဘာဝ ရှိကြပါတယ်။
// Private      -   Private ဆိုရင်တော့ Object ကနေတစ်ဆင့် အသုံးပြ ုခွင့် မပေ းတော့ပါဘူး။ ရေးထားတဲ့ Class အတွင်းထဲမှာပဲ သုံးခွင့်ရှိပါတော့တယ်။
// Protected    -   Inheritance လုပ်ပြ ီး ဆက်ခံလိုက်တဲ့အခါ ဆက်ခံတဲ့ Class ရရှိမှာက Public Property နဲ့ Method တွေကိုသာ ရရှိမှာ ဖြ စ်ပါတယ်။ JavaScript မှာ Protected ရေးထုံး မရှိပါဘူး။
// Static       -   Public သဘေ ာသဘာဝ ရှိကြပါတယ်။

// JavaScript မှာတော့ static Keyword တစ်ခုပဲ ရှိပါတယ်။ public တွေ private တွေမရှိပါဘူး။ Keyword တွေအစား ရေးတဲ့အခါမှာ ဒီလိုရေးပေးရပါတယ်။
class CarTwo {
    #hp = 150; // Private () ဒီရေးထုံးဟာ JavaScript မှာ အခုမှစမ်းသပ်အဆင့်ပဲ ရှိပါသေးတယ်။ ဒါကြောင့် ရေးထုံးအရမှန်ပါတယ်။ တစ်ချုိ့ Update မဖြစ်တဲ့ Browser တွေမှာ စမ်းကြည့်လို့တော့ ရဦးမှာ မဟုတ်ပါဘူး။ စမ်းကြည့်လို့မရရင် Browser ကို Update လုပ်ပြ ီး ပြန်စမ်းကြ ည့်နိုင်ပါတယ်။
    color = "Color"; // Public
    static info() {
        console.log(`Horse Power: ${this.hp}`);
    }
}

//  **************************************************** 4. Polymorphism  ****************************************************


