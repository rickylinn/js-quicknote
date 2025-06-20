console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 1000);
console.log(4);

// 1
// 2
// 4
// 3

// Because of setTimeout is async function.

// setTimeout() အတွက် Callback အနေနဲ့ Function Expression တစ်ခုကိုပေးခဲ့တာကိုတွေ့ရနိုင်ပါတယ်။ JavaScript မှာ အဲ့ဒီလို မစေ ာင့်ဘဲ နောက်မှလုပ်စေချင်တဲ့ အလုပ်တွေရှိတဲ့Callback တွေကို အသုံးများကြ ပါတယ်။ အခုနောက်ပိုင်းမှာတော့ Callback အစား Promise လို့ခေါ်တဲ့နည်းပညာကို အစားထိုးပြ ီး သုံးလာကြ ပါတယ်။