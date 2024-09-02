/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
let prompt = require('prompt-sync')();

console.log("BMI Calculator and Health Category");
let w = prompt("Enter your weight (kg): "), h = prompt("Enter your height (inch): ");
let bmi = w/((h*2.54*h*2.54)/10000);
console.log(bmi);
if(bmi<18.5){
    msg = "you are underweight."
}
else if(bmi>=18.5 && bmi<=24.9){
    msg = "you are normal."
}
else if(bmi>=25 && bmi<=29.9){
    msg = "you are overweight."
}
else{
    msg = "you are obese."
}
console.log(msg);