/* 
Matthew Bathurst
Assignment: Functions (Industry File)
Web Fundamentals Online Section 1
Date: Week 4 
*/


/* The calculation for my job.  Max Heart calculation for personal training clients
for max efficent work calculations
if male: 202 - (.55 x age)
else female 216 -(1.09 x age)

inputs = gender & age
*/

alert("Let's calculate your max heart so you can decide how much effort you want to put out for your workout.");
// Alerts the user on what the software is going to do for the user

var gender = prompt("Please state your gender.");
// Prompts User Input For if/else statement of function, this defines the multipler and formula used for equation
var age = prompt("Please stay your age.");
// Prompts User Input for calculation, 
var maxHeart = heartrate(gender, age);
// variable defined for function heartrate
console.log("Hello your max heart should be around " + Math.round(maxHeart) + " beats per minute.\nThis number is calculated based on averages, and each person can have a different one based upon your personal genetics.");
// It's the console output that gives the output of the work from the function

function heartrate(gender, age){
	if (gender == "m" || gender == "male" || gender == "Male") {
		// if statement that determines gender as male for calculation
		var maxHeart = 202 - (.55 * age); //male version of max Heart Rate
		return maxHeart; 
		//returns a workable value for future calculations
	}else{
		//states the user is not male and thus calculates maxHeart
		var maxHeart = 216 - (1.09 * age); //female version max Heart Rate
		return maxHeart;
		//returns a workable value for future calculations
	}
	//if else that defines the which equation for max heart rate is used, if the input does not equal any of the 3 acceptable forms of Male gender input, then it is assumed they are female
}
//function calculation that generates an output that can be used for further calculation if the user so desires, ie: if you want to create a future equation for ideal workout space, this number is required for the max level


