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

//Group 2: Check the Login
console.log("Check the Login");

//user inputs 
var username = "Admin";
var password = "password";

//correct inputs
var usernameMaster = "Admin";
var passwordMaster = "password";

if (username == usernameMaster && password == passwordMaster) {
	console.log("Welcome, " + username + "!");	
}else if(username !== usernameMaster){
	console.log("User not found. Try again.");
}else{
	console.log("Password does not match our records.");
}

console.log(" --------- ");

// Group 3  Tire Pressure
console.log("Tire Pressure");
var tirePressure = [10, 10, 20, 20]; //[Left Front Tire, Right Front Tire, Left Back Tire, Right Back Tire]

if(tirePressure[0] == tirePressure[1] && tirePressure[2] == tirePressure[3]) {
	console.log("The tires pass spec!");
}else{
	console.log("Get your tires checked out!");
}


