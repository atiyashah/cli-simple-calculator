#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Printing a Wellcome Massage
console.log(chalk.bold.rgb(284, 284, 284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 284, 284)(`<<<=======>>> ${chalk.bold.hex(`#9999FF`)(`Welcome to \`Atiya Shah \` CLI- Simple-Calculator `)}  <<<=========>>>`));
console.log(chalk.bold.rgb(284, 284, 284)(`\t\t <<<==============================>>>\n`));
// Asking question from users through inquirer
const answer = await inquirer.prompt([
    { message: chalk.green.bold("Enter first number"),
        type: "number",
        name: "firstNumber" },
    { message: chalk.green.bold("Enter second number"),
        type: "number",
        name: "secondNumber" },
    {
        message: chalk.yellow.bold("\n Select one operator to perform operations\n"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Conditional Statement if-Else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log(chalk.redBright("\n \tInvalid Input\n"));
}
