/* 
Matthew Bathurst
Assignment: Conditional Wacky
Web Fundamentals Online Section 1
March 15, 2013
*/

/*
Wacky Conditional Problem: Who is more of a man, Wilt Chamerblain or you?
I got the idea of this from reading Wilt's book, and his exploits.  Also I'm really not good at wacky so I can't think of anything
actually interesting to do.
*/

// Formula  YourConquest Number = (Women - Men)/ age (year)

alert("Welcome to The Wilt Chamerblain Man Test.");
// alerts the user to what you're about to do
var wiltsConquest = 20000/63;
// Defines the base in which we will compare the user wilt's number was estimated at 20000 women, and 0 men and he lived to be 63 years old

var gender = prompt("Are you male or female?\nPlease Respond with a simple M or F.");
// This will be the first variable as it will define, will be the first test for the if/else calculation

if(gender !== "M"){
	console.log("Do to the fact you're not male, You are missing the gender qualifer for this test.\nSo thus Wilt Chamerblain is more of a man than you.");
	//response to the question of gender does not equal male, the test is over.  If so we can continue on
}else{
	var age = prompt("How old are you? In years.");
	// asks the user to input their age as it's a part of the maniliness equation
	var men = prompt("How many male partners have you had?");
	// asks the user for their male experience, as it will be used later in the maniliness equation
	var women = prompt("How many female partners have you had?");
	// asks the user for their female experience, as it will be used later in the maniliness equation
	var yourConquest = (women - men) / age;
	// Defines the base in which we will compare the user number compared to wilts

	if(yourConquest == wiltsConquest){
		console.log("You are Wilt's Equal.");
		// the output if you and Wilt are equal in your conquest number
	}else if(yourConquest > wiltsConquest){
		console.log("You're the top ALPHA Male of all time!");
		// the output of if the results of the test comes out that the user is more of a male then Wilt Chamberlain.
	}else{
		console.log("Do you want to be like Wilt? Then get out there and assert your Alpha Male status.");
		//output of those who fail the test against Wilt
	}
		// This IF/ELSEIF testest for the solution in which we seak.

}
/* This if/else statement evaluates the user's input to gender, since working on the assumption that user does not id with the male gender,
the user can not participate in the test, because they are thus not a man. 
*/


