/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let prompt = require('prompt-sync')();


let regPrice = 800;
let age = prompt("Enter your age: ");
if(age<10) {
    console.log("You get free ticket.");
}
else if (age >= 60) {
    price = regPrice - (regPrice*15)/100;
    console.log("Nice. You get 15% discount & you have to pay "+price+"tk");
}
else {
    let prof = prompt("Are you a student? (yes / not): ");
    if(prof == "yes") {
        price = regPrice - (regPrice*50)/100;
        console.log("Nice. You get 50% discount & you have to pay "+price+"tk");
    }
    else {
        console.log("ok. You have to pay: "+regPrice+"tk");
    }
}