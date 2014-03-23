/* 
Matthew Bathurst
Activity: Function Worksheet
Web Fundamentals Online Section 1
*/


//Problem 1: Circumference
console.log("Problem 1: Circumference");
var radius = 2;
var circumference = circumference(radius);
console.log("The Circumference of the circle is " + circumference);

function circumference(radius){
	var circ;
	var pi = Math.PI
	circ = 2 * pi * radius;
	return circ;

}

console.log("---------");

//Problem 2: Stung!

console.log("Problem 2: Stung");

var weight = 95;
var stings = stung(weight);
console.log("It takes " + stings + " bee stings to kill this animal!");
function stung(weight){
	var stingsPerLb = 8 + 2/3;
	var stun;
	stun = stingsPerLb * weight;
	return stun;
}