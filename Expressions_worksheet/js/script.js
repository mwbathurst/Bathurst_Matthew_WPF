/* 
Matthew Bathurst
Activity: Expression Worksheet
Web Fundamentals Online Section 3
*/

//Problem 1: Dog Years

var sparkyAge = 4;
var sparkyDogAge = sparkyAge * 7;

//print's out the age of sparky in human and dog years to the console

console.log("Sparky is " + sparkyAge + " human years old which is " + sparkyDogAge + " in dog years.");

//Problem 2: Slice of Pie Part I

var slicesPerPizza = 8;
var partySize = 10;
var pizzaTotal = 4;
var totalSlices = pizzaTotal * slicesPerPizza;
var slicesPerPerson = totalSlices / partySize; 

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Problem 3: Sliceof Pie Part II

var sparkyPizzaTotal = totalSlices % partySize;

console.log("Sparky got " + sparkyPizzaTotal + " slices of pizza.");


//Problem 4: Average shopping bill

var weeklyGrocery = [200, 450, 320, 150, 100];
var totalGroceryCost = weeklyGrocery[0] + weeklyGrocery[1] + weeklyGrocery[2] + weeklyGrocery[3] + weeklyGrocery[4];
var groceryAvg = totalGroceryCost / 5;

console.log("You have spent a total of $" + totalGroceryCost + " on groceries over 5 weeks. That is an average of $" + groceryAvg + " per week");

