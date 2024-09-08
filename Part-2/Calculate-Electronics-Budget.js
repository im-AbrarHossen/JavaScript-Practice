/*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptop, tablet, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    let totalMoney = (laptopPrice*laptop) + (tabletPrice*tablet) + (mobilePrice*mobile);

    return totalMoney;
}
let payment = calculateElectronicsBudget(2, 3, 1);
console.log("Total budget required: "+payment+" tk");