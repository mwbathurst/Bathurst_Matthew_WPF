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

if(consumption >= output && consumption < 200){
	console.log("Your Daily goal of " + output + " ounces of water has been meet. \nRemember over-hydration can be just as dangerous as under-hydration, so remember to stay under 200 ounces a day." );
	// this is the print out if consumption is greater than Output and less than medical max of 200
}else if (consumption >= 200){
	console.log("You've reached the level of over-hydration for the day, please do not consume any more liquids today.");
	//defines that you have over consumed for the day
}else{
	var finalDif = output - consumption
// variable if the if statement is false and allows
	if(output > 200){
		console.log("You've consumed " + consumption + " ounces today.  You need to consume " + Number(200 - consumption) + " ounces more today to reach your daily goal." );
		//if consumption goal wasn't meet, print out the total consumed and what is still needed to consume for the day(if the raw consumption goal was greater than 200)
	}else{
			console.log("You've consumed " + consumption + " ounces today.  You need to consume " + finalDif + " ounces more today to reach your daily goal." );
			//if consumption goal wasn't meet, print out the total consumed and what is still needed to consume for the day
	}
	// If/else if output total was greater than 200 and since that breaks the rule of max consumption, thus was set to cap usage.		
}
	//nested if statements to print out goal in which you need to consume.  
