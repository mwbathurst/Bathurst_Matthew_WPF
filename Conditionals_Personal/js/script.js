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
var protein = prompt("How many grams of protein have you consumed today"); // Defines the 2nd input from the user that will help determine calculation for solution
var proteinPerLb = protein / weight; // Main Calculation for Problem 
var maleProteinPerLb = 1.5; // This is a gender specific comparision calculation for males
var desert; // Setting up for Ternary statement of Protein/PerLb > 1.5g No Protein Pudding Desert, if Protein < 1.5g then consume protein pudding
var voidInput = ""; // Setup for Validating inputs from user




