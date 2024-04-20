#! /usr/bin/env node

import inquirer from "inquirer";

const answer:{
   Sentence:string 
} = await inquirer.prompt(
    [{
    name:"Sentence",
    message:"Enter your sentence to count the words:",
    type:"input"
    }
])

const words = answer.Sentence.trim().split(" ");
console.log(words.length);
