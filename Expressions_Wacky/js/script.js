/* 
Matthew Bathurst
Assignment: Expressions (Wacky File)
Web Fundamentals Online Section 3
*/

/* You said wacky, I'm not to wacky of an individual, so a wacky calculation, how many lapdances 
do we have to give to pay for my tuition.  And before you ask
*/

alert("Times are tough, that's why I decided to start dancing my through college.\nSo here's a calculator to figure out how many private dances you must perform to pay for school!");
// This alerts the user to the problem at hand

var tuition = prompt("How much tuition do you owe?"); // Asks the user to give valueable data to figure how they plan to pay it off
var howMuch = prompt("How much will you charge for your dances?"); //prompt to get user precieved value
var managementFee = howMuch / 2; // constant value for how much you owe your management
var clubFee = howMuch / 8; // constant value for how much you owe the club
var earningPerDance = howMuch - clubFee - managementFee; //calculation for how much you earn per dance
var howManyDances = tuition / earningPerDance; // FINAL CALCULATION. 
console.log("Welcome to the wild world of professional dancing, as I'm your guide, here's some important information. \nYou will give 1/2 of your earnings to your manager. \nYou will give 1/8 of your earnings to your club. \nSo here's how many dances you'll perform to pay off your tuition:" + howManyDances + "! \nSo are you ready? You're on Next!");
// Personally Funny way of reporting the inforamtion generated.