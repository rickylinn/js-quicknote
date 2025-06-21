function add(a, b) {
    return a + b;
}

function div(a, b) {
    if (b === 0) {
        return;
    } else {
        return a / b;
    }
}

// module.exports = div
// အကယ်၍ နှစ်ခုသုံးခုပေးချင်ရင်တော့ Object အနေနဲ့ ပြ န်ပေးကြ လေ့ရှိပါတယ်။
module.exports = {
    add,
    div
}