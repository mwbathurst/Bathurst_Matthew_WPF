/* 
Matthew Bathurst
Activity: Function Worksheet
Web Fundamentals Online Section 1
*/


//Problem 1: Circumference
console.log("Problem 1: Circumference"); //Titles Problem
var radius = 2; //measurement variable 
var circumference = circumference(radius);  // variable that will be used to print out function for assignment
console.log("The Circumference of the circle is " + circumference);
// final print out of assignment

function circumference(radius){
	var circ;  //defines variable for calculation
	var pi = Math.PI //DEFINES THE Pi component of the equation using the math library
	circ = 2 * pi * radius; // computes the circumference equation
	return circ; //returns outcome of calculation 

}
//Function for the Equation of 2pi*r = c, the parameter is defined as radius for future use
console.log("---------"); //Formatting for Assignment

//Problem 2: Stung!

console.log("Problem 2: Stung"); //Titles Problem

var weight = 95; // weight variable for bee stings
var stings = stung(weight); // variable that will be used to print out function for assignment
console.log("It takes " + stings + " bee stings to kill this animal!"); // final print out of assignment

function stung(weight){
	var stingsPerLb = 8 + 2/3; // stings needed per lb to kill given
	var stun; //defines variable for future to define stings
	stun = stingsPerLb * weight; // calculates the stings needed to kill
	return stun; //returns the calculation
}
// function for the equation that 8 2/3 bee stings * weight in lbs = how many stings it takes to kill with weight being the parameter