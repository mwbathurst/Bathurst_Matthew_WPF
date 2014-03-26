/* 
Matthew Bathurst
Assignment: Functions (Wacky File)
Web Fundamentals Online Section 1
Date: Week 4 
*/

/* Question: Can I propose tonight? Why is this wacky? Cause honestly marriage is scary 
Solution is a ratio of cost of the ring * 2 compared to 
available funds in bank account
*/

alert("Is tonight the night to ask that special someone to marry you?");
//alerts the user to the question at hand

//equation defined bank account / (cost of ring * 2) = the One Ring Factor
// I was always taught you need to have 1.5 times the cost of 2 ring in your bank account to purchase it and with my personal feelings on credit cards 
// I believe you can purchase it on credit if you have at least more then the cost of 2 rings

var ringCost = prompt("Hey you're ready to ask that special someone.\nSo how much does that ring cost?");
// prompt for ring cost for calculation
var bankAccount = prompt("Old Man Bathurst use to say gotta have money in the bank to pay for it. So using his super secret formula, He needs to know how much you got in your Bank Account.");
// prompt for bank account info for calculation
var ring = ring(ringCost, bankAccount);
//defines the variable for the program to compare after running the ring function

if(ring >= 1.5){
	//if statement that compares the ring value to the threshold set by Old Man Bathurst
	console.log("You can easily afford that ring! Your bank account can afford, so pay cash for it and ask that person tonight!!");
	// output to console that the if part is true
	}else if(ring <=1.5 && ring > 1){
		// else if statement that compares the ring value to the threshold set for Credit Purchase
		console.log("You have enough money to purchase the ring, but knowing Old Man Bathurt, I would suggest buying the ring on credit and proposing tonight!")
		// output to the console if the else if is true
	}else{
		// else section of if statement, that generates the result of everything being false
		console.log("Sorry you're too broke, don't ask to marry that special someone unless they are ok with a crackerjack ring.");
		//output to console if everything is false 
}
//the main program that decides if you can buy the ring
function ring(cost, account){
	var theOneRing = account / (cost * 2); // calculation of the parameters of the function  
	return theOneRing; // returns a value for future reference

} //Function that calculates the Old Man Bathurst Formula 





