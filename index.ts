#! /usr/bin/env/node


import inquirer from "inquirer";


// 1 : computer will generate a random number : Done .
// 2 : make a user input for gussing number : Done .
// 3 : compare user input with computer generated number and show result 


//// Generate a random number between 1 and 6 :
const randomNumber = Math.floor(Math.random() * 6 + 1);

// Prompt the user to guess a number between 1 and 6:
const answers = await inquirer.prompt([
{
    name : "userGuessedNumber",
    type : "number",
    message :"Please guess a number between 1-6 :" ,
},
]);
// Making a condion :
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations ! you guessed right number.")
} else {
    console.log(`Sorry You guessed a wrong number!! Correct answer was ${randomNumber} `)
};
 
