/* 
Matthew Bathurst
Assignment: Expressions (Personal File)
Web Fundamentals Online Section 3
*/

/* This personal program will identify my protein consumption for an entire year, based upon gym standards
*/
// Input Variables variable 
var protein = prompt("What is the Protein type you use?"); //Identifies the Brand in which the user uses
var scoopsPerWorkout = prompt("How many Scoops of protein do you consume after a workout?"); // Identifies the Scoops per workout as this will help calculate the amount in which is consumed 
var gramsPerScoop = prompt("How many grams per scoop is there in " + protein + "?");  // Identifies the size of a scoop for later calculation for total consumption
var workoutsPerWeek = prompt("How many times do you workout per week on average?");  // Identifies the frequence in which you consume protein

// Constants
var weight = [1, 1000, .002]; // weight[0] = grams per gram, weight[1] = grams per kilogram, weight[2] = grams per pound
var weeklyTotalScoops = scoopsPerWorkout * workoutsPerWeek //knowing how many workouts per week I know I'll consume how many scoops per week
var yearTotalScoops = weeklyTotalScoops * 52 // yearly total of grams


console.log(weeklyTotalScoops, yearTotalScoops);
console.log(weight[0], weight[1], weight[2]);

