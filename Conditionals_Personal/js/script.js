/* 
Matthew Bathurst
Assignment: Conditional Personal
Web Fundamentals Online Section 1
March 15, 2013
*/


// Question needing calculating: Have you earned the right to consume protein pudding tonight? 


/* Basic Health guidelines, I prescribe to in terms of food.  I consume 1.5g of Protein per lb of weight per day.  
If this dietary requirement is not meet I eat a protein pudding, if I exceed 1.5g of Protein per lb, I do not consume the protein puddying.
*/

alert("Let's calculate if you deserve to have protein pudding for desert tonight."); //Introduction to the Program

//Variable List


var weight = prompt("How many pounds do you weigh?"); // Defines the 1st input from the user that will be basis for determining calculation for solution 
var protein = prompt("How many grams of protein have you consumed today?"); // Defines the 2nd input from the user that will help determine calculation for solution
var voidInput = ""; // Setup for Validating inputs from user
var proteinPerLb = protein / weight; // Main Calculation for Problem 
var goal = 1.5; // The given in which proteinPerLb gets compared to, also variable allows for coder to change code without dramatic change
var desert; // Setting up for Ternary statement of Protein/PerLb > goal No Protein Pudding Desert, if Protein < goal then consume protein pudding

desert = (proteinPerLb < goal) ? "You need to eat some protein pudding your Protein consumption hasn't reached its Goal yet" : "You have reached your Protein consumption GOAL for today, sorry you can't have desert!";
//This line of code compares the calculation of what you have consumed(protein/weight) vs your goal(1.5g of protein per lb of weight) and it outputs if you can have desert or not

console.log(desert);