/* 
Matthew Bathurst
Assignment: Functions (Personal File)
Web Fundamentals Online Section 1
Date: Week 4 
*/

/*
How much should I expect to pay on a date with a woman, based completely on looks and age?
The 3 inputs: Her "Rating" for any numerical scale, my "Rating" for any numerical scale, and how old is she.
This calculation can be attributed to Keith Aragon baseball coach from Fort Collins High School

if she is => 21 Her rating * $15 - your rating * $1.75
else her rating * $10 - your rating * 1.75
*/

alert("How much will a date with this woman cost you?");
//Alerts the User to What the Calculation is for

var herRating = prompt("Rate your Date, give your date a numerical rating."); // This prompts the user for an input on his/her date, can be any number
var yourRating = prompt("Rate yourself, give yourself a numerical rating."); // This prompts the user for an input on his/her own rating, can be any number
var herAge = prompt("How old is your date?"); // This prompts the user for an input on his/her date's age as this will modify the calculation for potential alcohol consumption

var dateCalc = function(herRating, yourRating, herAge){
	var totalCost21 = (herRating * 15) - (yourRating * 1.75);
	// defines the potential cost of the date for the tenary
	var totalCost = (herRating * 10) - (yourRating * 1.75);
	// defines the potential cost of the date for the tenary
	var cost;
	cost = (herAge >= 21) ? "It will cost you $" + totalCost21 + " to take her out." : "It will cost you $" + totalCost + " to take her out.";
	//tenary based on age for cost of date
	return cost; // completes the function and keeps it from being just a procedure
}
//anon function for calculation


