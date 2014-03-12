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
var weight = [1, 1000]; // weight[0] = grams per gram, weight[1] = grams per kilogram,
var weeklyTotalScoops = scoopsPerWorkout * workoutsPerWeek //knowing how many workouts per week I know I'll consume how many scoops per week
var yearTotalScoops = weeklyTotalScoops * 52 // yearly total of grams calculated
var weeklyGramsTotal = [weight[0] * weeklyTotalScoops, weeklyTotalScoops / weight[1] ]; // organize and calculate weekly gram totals and kilogram total
var yearlyGramsTotal = [weight[0] * yearTotalScoops, yearTotalScoops / weight[1] ];  //organize and calculate yearly gram total and kilogram total
var howManyLbsPerYear = yearlyGramsTotal[1] * 2.2046;  // conversion of kg to lbs

console.log(weeklyTotalScoops, yearTotalScoops);
console.log(yearlyGramsTotal[0], yearlyGramsTotal[1]);
console.log(howManyLbsPerYear);

console.log("You consume " + scoopsPerWorkout + " scoops of the Protein: "+ protein + "each workout.  You know that you workout, " +  workoutsPerWeek + " times a week.  From there you know you consume " + weeklyTotalScoops + " scoops per week.  At that rate you're consuming " + weeklyGramsTotal[0] + " grams, that amasses to " + yearlyGramsTotal[1] + " kilograms per year.  And when you go shopping for a years supply you know you need to purchase " + howManyLbsPerYear + " pounds of " + protein + "for the year!");

