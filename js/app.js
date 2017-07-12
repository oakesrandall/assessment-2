//Declares variables to use to move the cars
var carOne = {
	margin: 0
};
var carTwo = {
	margin: 0
};
//Check to see if the page is ready
$(document).ready(function() {
});

//Listens for keystrokes and increases the margin of the
//corresponding car
$(document).keydown(function(event) {
	if (event.which === 90){
		carOne.margin += 5;
		$(".carOneImg").css("margin-left", carOne.margin + "%");
		hasWon();
	}
	else if (event.which === 191){
		carTwo.margin += 5;
		$(".carTwoImg").css("margin-left", carTwo.margin + "%");
		hasWon();
	}

});

//resets the game by resetting the margin and moving the cars there
function resetGame() {
	carOne.margin = 0;
	carTwo.margin = 0;
	$(".carOneImg").css("margin-left", carOne.margin);
	$(".carTwoImg").css("margin-left", carTwo.margin);
}

//determines if the car has reached a specific point and declares
//a winner
function hasWon() {
	if (carOne.margin === 90) {
		alert("Car One has won the race!");
		resetGame();
	}
	else if (carTwo.margin === 90) {
		alert("Car Two has won the race!");
		resetGame();
	}
}
