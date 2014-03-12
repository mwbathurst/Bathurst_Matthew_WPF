/* 
Matthew Bathurst
Assignment: Expressions (Personal File)
Web Fundamentals Online Section 3
*/

/* This personal program will identify my protein consumption for an entire year, based upon gym standards
*/
alert("Welcome to Matt's Protein Consumption Calculator. \nMatt always consumes protein shake after every workout, and knowing this he must calculate how much protein powder he consumes per year.\nSo lets see how much you would consume if you consumed like Matt. ");
// Intro to the basics of the assignment

// Input Variables variable 
var protein = prompt("What is the Protein type you use?"); //Identifies the Brand in which the user uses
var scoopsPerWorkout = prompt("How many scoops of protein do you consume after a workout?\nPlease input a Numeric Value."); // Identifies the Scoops per workout as this will help calculate the amount in which is consumed 
var gramsPerScoop = prompt("How many grams are there per scoop in " + protein + "?\nPlease input a Numeric Value. ");  // Identifies the size of a scoop for later calculation for total consumption
var workoutsPerWeek = prompt("How many times do you workout per week on average?");  // Identifies the frequence in which you consume protein

// Constants
var weight = [1, 1000]; // weight[0] = grams per gram, weight[1] = grams per kilogram,
var weeklyTotalScoops = scoopsPerWorkout * workoutsPerWeek //knowing how many workouts per week I know I'll consume how many scoops per week
var yearTotalScoops = weeklyTotalScoops * 52 // yearly total of grams calculated
var weeklyGramsTotal = [weight[0] * weeklyTotalScoops, weeklyTotalScoops / weight[1] ]; // organize and calculate weekly gram totals and kilogram total
var yearlyGramsTotal = [weight[0] * yearTotalScoops, yearTotalScoops / weight[1] ];  //organize and calculate yearly gram total and kilogram total
var howManyLbsPerYear = yearlyGramsTotal[1] * 2.2046;  // conversion of kg to lbs

console.log("You consume " + scoopsPerWorkout + " scoops of the Protein: "+ protein + " each workout.  \nYou know that you workout, " +  workoutsPerWeek + " times a week.\nFrom there you know you consume " + weeklyTotalScoops + " scoops per week.  \nAt that rate you're consuming " + weeklyGramsTotal[0] + " grams, that amasses to " + yearlyGramsTotal[1] + " kilograms per year. \nWhen you go shopping for a years supply from your favorite bulk supplement store, you need to purchase " + howManyLbsPerYear + " pounds of " + protein + ".");

// This previous line of code organizes an easy statement for the user for purchasing knowledge, through the combination of all the data. 

console.log("\n\n Thank you for your time. \n Good luck and if you need a quality bulk protein, visit Proteinforhumans.com and let them know Big Matt sent you.");

// Fun Plug for a sponsor