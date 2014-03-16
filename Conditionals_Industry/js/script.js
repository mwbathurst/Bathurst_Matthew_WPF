/* 
Matthew Bathurst
Assignment: Conditional Industry
Web Fundamentals Online Section 1
March 15, 2013
*/

/*
Industry Problem: How much more water do I have to consume to make sure I stay 
hydrate on the average day.  
*/

/* Formula in ounce= weight * 2/3 + (12oz * (workout time/60min)) 
	if output is greater then 200 out, then it's capped at 200
*/

var weight = prompt("How much do you weight?");
//asks users to input first important factor into calculation
var workout = prompt("How many minutes do you workout per day?");
// asks user to input second important factor into calculation
var consumption = prompt("How many ounces of water have you consumed today?");
var output = weight * 2/3 + 12 * workout/60; 
// Final Calculation for comparision as it's formula defines required fluid; 
if(consumption => output && consumption < 200){
	console.log("Your Daily goal of " + output + " ounces of water has been meet. \nRemember over-hydration can be just as dangerous as under-hydration, so remember to stay under 200 ounces a day." );
	// this is the print out if consumption is greater than Output and less than medical max of 200
