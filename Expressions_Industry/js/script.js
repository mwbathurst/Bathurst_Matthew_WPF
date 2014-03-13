/* 
Matthew Bathurst
Assignment: Expressions (Industry File)
Web Fundamentals Online Section 3
*/

/* I work for an MMA (Mixed Martial Arts) Gym, and one of the most presistent problems 
I come across is how to explain the breakdown of a professional fight contract to a 
fighter.  So I figured why not make a quick little program so I don't have to deal with
them face to face.
*/


var name = prompt("What is your name?"); // Asks for name of fighter to give them personal feel while I'm not physically there.

alert(name + ", here we'll explain to you how your fight check is broken down. Click Ok when ready.");
// alerts the fighter that we're going to help them

var fighterPurse = prompt("How much money did you make for your fight? \nDO NOT INCLUDE PERFORMANCE BONUSES or SPONSORSHIP MONEY! \nNumeric Values Only.");
// this prompts the user to tell us how much the user made from the fight, this will be the basis for future calculations.  Fighters forget that their management fee from the gym differ based upon source of their income, so a reminder for clarity is needed.

var fighterBonus = prompt("How much money did you make from Performance Bonuses in the fight? \nDO NOT INCLUDE YOUR FIGHT PURSE OR SPONSORSHIP MONEY! \nNumeric Values Only.");
// this prompts the user to tell us how much the user made from performance bonuses only.  Fighters forget that their management fee from the gym differ based upon source of their income, so a reminder for clarity is needed.

var fighterSponsorship = prompt("How much money did you make from your Sponsorships in the fight? \nDO NOT INCLUDE YOUR FIGHT PURSE OR BONUSES MONEY! \nNumeric Values Only.");
// this prompts the user to tell us how much the user made from his sponsorships only.

var ticketSales = prompt("How much did money did you make from selling tickets to your fight?");
// this is a prompt to the user to tell us how much made from ticket sales. 

var total = Number(fighterPurse) + Number(fighterBonus) + Number(fighterSponsorship) + Number(ticketSales);
// Calculates the total income earned from the fight before cuts and all.  Had issue with variables being treated as strings so defined them as numbers

var gymCuts = [fighterPurse * 0.15, fighterBonus * .05,fighterSponsorship * .015]; 
// Calculates the different cuts the takes from how much the fighter earns based upon the source of the income, 15% out of the purse, 5% if there is a bonus, 15% out of the sponsorship money earned

console.log(total);
console.log(name + ", congratulations on your fighting. \nYou earned a total of "  )
