/* 
Matthew Bathurst
Assignment: Conditional Wacky
Web Fundamentals Online Section 1
March 15, 2013
*/

// Afte consideration the original test was extremly sexist, and thus has been redone

/* Can you be Nathan's world record holder for most hot dog's eaten in 10 minutes? We know the World Record to be held by Joey Chestnut, and he consumed
69 hotdogs in 10 minutes!
So since the cost of hotdogs are expensive we're gonna estimate how many you can eat in 10 minutes based upon a 1 minute shuttle eat as they
call it in the competive eating world.
*/

alert("I KNOW YOU WANT TO BE THE NEXT WORLD CHAMPION OF HOTDOG EATING!\nSo Lets see if you can set the world record as Joey Chestnut has promised he's going to break his world record of 69 hotdogs this year at Coney Island.");
//alerts the user to what they are about to participate in

var minuteHotdog = prompt("When you're practicing at home, how many hotdogs can you consume in 1 minute?");
//prompts user for their consumption level of hotdogs in 1 minute in practice used for calculating for max potential  	
	if(minuteHotdog == ""){
		//validating minuteHotdog variable
		var minuteHotdog = prompt("Please, When you're practicing at home, how many hotdogs can you consume in 1 minute?");
		//prompts user for their consumption level of hotdogs in 1 minute in practice used for calculating for max potential  
		var twoMinHotdog = prompt("When you're practicing at home, How many hotdogs can you consume in 2 minutes?");
		//prompt user for their consumption level of hotdogs in 2 minutes in practice used for calculating for max potential  
		if(twoMinHotdog == ""){
			var twoMinHotdog = prompt("Please, When you're practicing at home, How many hotdogs can you consume in 2 minutes?");
			var maxPotential = (2 * Number(minuteHotdog)+ Number(twoMinHotdog))/ 4;
			// Calculating the Potential pace in which you'll be able to consume in front of a crowd incorprating crowd fatigue
			var chestnut = 69; 
			// Joey Chestnut total for 10minute is the world record and comparision
			var total = maxPotential * 10;
			// your number total
			if (total > chestnut){
				console.log("You can estimate that your pace of " + total + " hotdogs consumed in 10 minutes, will set a new world record!");
				//if statement that you're estimation is on pace to be a new world champ
			}else if(total == chestnut){
				console.log("You're on pace to tie Joey Chestnut's World Record! Hopefully Joey has a bad day and you become the new champ!")
				//else if statement that you're estimation is on pace to tie the champ
			}else{
				console.log("You need to get back in the kitchen and get to work training.  Stretch that stomach, eat some lettuce, eat some cabbage, eat some hotdogs!");
				//else that you need to get back in the kitchen
			}
		}else{
			var maxPotential = (2 * Number(minuteHotdog)+ Number(twoMinHotdog))/ 4;
			// Calculating the Potential pace in which you'll be able to consume in front of a crowd incorprating crowd fatigue
			var chestnut = 69; 
			// Joey Chestnut total for 10minute is the world record and comparision
			var total = maxPotential * 10;
			// your number total
			if (total > chestnut){
				console.log("You can estimate that your pace of " + total + " hotdogs consumed in 10 minutes, will set a new world record!");
				//if statement that you're estimation is on pace to be a new world champ
			}else if(total == chestnut){
				console.log("You're on pace to tie Joey Chestnut's World Record! Hopefully Joey has a bad day and you become the new champ!")
				//else if statement that you're estimation is on pace to tie the champ
			}else{
				console.log("You need to get back in the kitchen and get to work training.  Stretch that stomach, eat some lettuce, eat some cabbage, eat some hotdogs!");
				//else that you need to get back in the kitchen

		}
		
}
	}else{
		var twoMinHotdog = prompt("When you're practicing at home, How many hotdogs can you consume in 2 minutes?");
		//prompt user for their consumption level of hotdogs in 2 minutes in practice used for calculating for max potential  
		if(twoMinHotdog == ""){
			var twoMinHotdog = prompt("Please, When you're practicing at home, How many hotdogs can you consume in 2 minutes?");
			var maxPotential = (2 * Number(minuteHotdog)+ Number(twoMinHotdog))/ 4;
			// Calculating the Potential pace in which you'll be able to consume in front of a crowd incorprating crowd fatigue
			var chestnut = 69; 
			// Joey Chestnut total for 10minute is the world record and comparision
			var total = maxPotential * 10;
			// your number total
			if (total > chestnut){
				console.log("You can estimate that your pace of " + total + " hotdogs consumed in 10 minutes, will set a new world record!");
				//if statement that you're estimation is on pace to be a new world champ
			}else if(total == chestnut){
				console.log("You're on pace to tie Joey Chestnut's World Record! Hopefully Joey has a bad day and you become the new champ!")
				//else if statement that you're estimation is on pace to tie the champ
			}else{
				console.log("You need to get back in the kitchen and get to work training.  Stretch that stomach, eat some lettuce, eat some cabbage, eat some hotdogs!");
				//else that you need to get back in the kitchen
			}
		}else{
			var maxPotential = (2 * Number(minuteHotdog)+ Number(twoMinHotdog))/ 4;
			// Calculating the Potential pace in which you'll be able to consume in front of a crowd incorprating crowd fatigue
			var chestnut = 69; 
			// Joey Chestnut total for 10minute is the world record and comparision
			var total = maxPotential * 10;
			// your number total
			if (total > chestnut){
				console.log("You can estimate that your pace of " + total + " hotdogs consumed in 10 minutes, will set a new world record!");
				//if statement that you're estimation is on pace to be a new world champ
			}else if(total == chestnut){
				console.log("You're on pace to tie Joey Chestnut's World Record! Hopefully Joey has a bad day and you become the new champ!")
				//else if statement that you're estimation is on pace to tie the champ
			}else{
				console.log("You need to get back in the kitchen and get to work training.  Stretch that stomach, eat some lettuce, eat some cabbage, eat some hotdogs!");
				//else that you need to get back in the kitchen
			}
		}
	}
