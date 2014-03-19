/* 
Matthew Bathurst
Assignment: Conditional Industry
Web Fundamentals Online Section 1
March 15, 2013
*/

/*
Industry Problem: How much more water do I have to consume to make sure I stay 
hydrate on the average day.  Water Hydration Medical Suggestion = weight * 2/3 +12 * workout time in minutes/60
*/



alert("Welcome to the Personal Hydration Calculation System. How much water do you need to drink today?");
//Lets the User Know the software they are about to User
var weight = prompt("How much do you weight?");
//asks users to input first important factor into calculation
if(weight == ""){
	//if validation for weight input
	var weight = prompt("Please ENTER your weight now.");
	var workout = prompt("How many minutes do you workout per day?");
	if(workout == ""){
		//if validation for workout input
		var workout = prompt("Please how many minutes do you workout per day?")
		// asks user to input second important factor into calculation
		var output = weight * 2/3 + 12 * workout/60; 
		// Final Calculation for comparision as it's formula defines required fluid; 
		var cap = 200;
		// Max Cap for user to consume
		var consumption;
		consumption = (output >= cap) ? "You've reached the medical advised amount of water consumption of " + cap + " ounces per day" : "Your advised amount of water consumption is " + output + " ounces per day.  Please remember do not exceed " + cap + " ounces per day.";
		//tenary statement for output statement
		console.log(consumption);
	}else{
		//else validation for workout input
		var output = weight * 2/3 + 12 * workout/60; 
		// Final Calculation for comparision as it's formula defines required fluid; 
		var cap = 200;
		// Max Cap for user to consume
		var consumption;
		consumption = (output >= cap) ? "You've reached the medical advised amount of water consumption of " + cap + " ounces per day" : "Your advised amount of water consumption is " + output + " ounces per day.  Please remember do not exceed " + cap + " ounces per day.";
		//tenary statement for output statement
		console.log(consumption);
	}
}else{
	//else validation for weight input
	var workout = prompt("How many minutes do you workout per day?");
// asks user to input second important factor into calculation
	if(workout == ""){
		//if validation for workout input
		var workout = prompt("Please how many minutes do you workout per day?")
		// asks user to input second important factor into calculation
		var output = weight * 2/3 + 12 * workout/60; 
		// Final Calculation for comparision as it's formula defines required fluid; 
		var cap = 200;
		// Max Cap for user to consume
		var consumption;
		consumption = (output >= cap) ? "You've reached the medical advised amount of water consumption of " + cap + " ounces per day" : "Your advised amount of water consumption is " + output + " ounces per day.  Please remember do not exceed " + cap + " ounces per day.";
		//tenary statement for output statement
		console.log(consumption);
	}else{
		//else validation for workout input
		var output = weight * 2/3 + 12 * workout/60; 
		// Final Calculation for comparision as it's formula defines required fluid; 
		var cap = 200;
		// Max Cap for user to consume
		var consumption;
		consumption = (output >= cap) ? "You've reached the medical advised amount of water consumption of " + cap + " ounces per day" : "Your advised amount of water consumption is " + output + " ounces per day.  Please remember do not exceed " + cap + " ounces per day.";
		//tenary statement for output statement
		console.log(consumption);
	}
}
