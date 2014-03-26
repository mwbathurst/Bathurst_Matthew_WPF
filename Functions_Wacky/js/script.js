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
var bankAccount = prompt("Old Man Bathurst use to say gotta have money in the bank to pay for it. So using his super secret formula, He needs to know how much you got in your Bank Account.");
var ring = ring(ringCost, bankAccount);

if(ring >= 1.5){
	console.log("You can easily afford that ring! Your bank account can afford, so pay cash for it and ask that person tonight!!");
}else if(ring <=1.5 && ring > 1){
	console.log("You have enough money to purchase the ring, but knowing Old Man Bathurt, I would suggest buying the ring on credit and proposing tonight!")
}
else{
	console.log("Sorry you're to broke, don't ask her to marry that special someone unless they are ok with a crackerjack ring.");
}

function ring(cost, account){
	var theOneRing = account / (cost * 2);
	return theOneRing;

}






