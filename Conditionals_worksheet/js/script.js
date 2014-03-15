/*
*//* 
Matthew Bathurst
Activity: Conditionals Worksheet
Web Fundamentals Online Section 3
*/

//STUFF YOUR FACE I
console.log("Stuff Your Face I");
var competitorWeight = 245;

if(competitorWeight > 250){
	console.log("The competitor qualifies for the heavyweight division.");
}else{
	console.log("The competitor needs to gain some weight!");
}

console.log(" --------- ");

//Group 1: Celsius to Fahrenheit Converter
console.log("Celsius to Fahrenheit Converter");
var temp = 100;
var unit = "C";

if(unit == "F"){
	var tempA = 5/9 * (temp - 32);
	console.log("The Temperature is " + tempA + " degrees Celsius.");
;}else if(unit == "C"){
	var tempA = (9/5 * temp) + 32;
	console.log("The Temperature is " + tempA + " degrees Fahrenheit.");
}else{
	console.log("We're only using Fahrenheit & Celsius units of measure for this!");
}

console.log(" --------- ");



