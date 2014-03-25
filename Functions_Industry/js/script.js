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
var age = prompt("Please stay your age.");
var maxHeart = heartrate(gender, age);
console.log("Hello your max heart should be around " + Math.round(maxHeart) + " beats per minute.\nThis number is calculated based on averages, and each person can have a different one based upon your personal genetics.");

function heartrate(gender, age){
	if (gender == "m" || gender == "male" || gender == "Male") {
		var maxHeart = 202 - (.55 * age); 
		return maxHeart;
	}else{
		var maxHeart = 216 - (1.09 * age);
		return maxHeart;
	}
}



