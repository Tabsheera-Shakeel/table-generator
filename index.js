#! /usr/bin/env node
import inquirer from "inquirer";
let myTable = true;
while (myTable) {
    let userInput = await inquirer.prompt([
        {
            name: "number",
            type: "number",
            message: "ENTER A NUMBER",
        }
    ]);
    let myNumber = userInput.number;
    if (myNumber) {
        console.log(`\tHERE IS THE TABLE OF ${myNumber}\n`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${myNumber} x ${i} = ${myNumber * i}`);
        }
    }
    else {
        console.log("PLEASE ENTER A NUMBERICAL VALUE");
    }
    let confirming = await inquirer.prompt([
        {
            name: "confirming",
            type: "confirm",
            message: "YOU  WANT TO GENERATOR ANOTHER TABLE?",
            default: "false",
        }
    ]);
    if (confirming.confirming) {
        myTable = true;
    }
    else {
        myTable = false;
    }
}
;
