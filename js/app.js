var carOneMargin = 0;
var carTwoMargin = 0;

$(document).ready(function() {
});

$(document).keydown(function(event) {
	if (event.which === 90){
		carOneMargin += 5;
		$(".carOneImg").css("margin-left", carOneMargin + "%");
	}
	else if (event.which === 191){
		carTwoMargin += 5;
		$(".carTwoImg").css("margin-left", carTwoMargin + "%");
	}

});

function hasWon() {
	if (carOneMargin === 90) {
		alert("Car One has won the race!");
	} 
	else if (carTwoMargin === 90) {
		alert("Car Two has won the race!");
	}
}

