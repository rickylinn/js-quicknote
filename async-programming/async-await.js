function add1000() {
    let result = 0;

    for (let i = 1; i < 100000000; i++) {
        result += i;
    }

    return result;
}

// ရှေ့ဆုံးမှာ async Keyword ပါသွားလို့ add1000later() Function ဟာရိုးရိုး Function မဟုတ်တော့ပါဘူး။ စောင့်စရာမလိုဘဲ သူ့ဘာသာလုပ်စရာရှိတာ ဆက်လုပ်မှာမို့လို့ ချန်ထားခဲ့လို့ရတဲ့ Functionဖြစ်သွားပါပြ ီ။ အဲ့ဒီ Function ထဲမှာ add1000() Function ကို ခေါ်သုံးတဲ့အခါ await Keyword နဲ့ခေါ်သုံးထားတာကို သတိပြ ုပါ။ စောင့်ရမယ့်အလုပ်က ဒီအလုပ်မို့လို့ await ထည့်ပြ ီးလုပ်ပေးရတာပါ။ပြ ီးတော့မှ ရလာတဲ့ ရလဒ်ကို ဖော်ပြ စေထားပါတယ်။

async function add1000Later() {
    let result = await add1000();
    console.log(result);
}

console.log("some process...");
console.log("some process...");
add1000Later();
console.log("some process...");
console.log("some process...");