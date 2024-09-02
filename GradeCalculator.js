/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
let prompt = require('prompt-sync')();
let alert = require('prompt-sync')();

let score = prompt("Please enter your mark: ");

// Handling user input
if (score>=90 && score<=100) {
    msg = "Your grade is A";
}
else if(score>=80 && score<90) {
    msg = "Your grade is B";
}
else if(score>=70 && score<80) {
    msg = "Your grade is C";
}
else if(score>=60 && score<70) {
    msg = "Your grade is D";
}
else if(score>0 && score<60) {
    msg = "Your grade is F";
}
else {
    msg = "invalid input please try again";
}
console.log(msg);