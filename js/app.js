var carOne = {
	margin: 0
};
var carTwo = {
	margin: 0
};

$(document).ready(function() {
});

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

function resetGame() {
	carOne.margin = 0;
	carTwo.margin = 0;
	$(".carOneImg").css("margin-left", carOne.margin);
	$(".carTwoImg").css("margin-left", carTwo.margin);
}

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