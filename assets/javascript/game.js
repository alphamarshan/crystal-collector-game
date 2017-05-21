$(document).ready(function() {

	// This code creates a random number and inserts it into the "startingScore" div:
	var matchNumber = Math.floor((Math.random() * 100) + 19);
	$("#startingScoreP").text("Match: " + matchNumber);

	var counter = 0;
	$("#totalScoreValue").html(counter);

	var wins = 0;
	$("#winsP").text("Wins: " + wins);

	var losses = 0;
	$("#lossesP").text("Losses: " + losses);


	function resetGame() {
		matchNumber = Math.floor((Math.random() * 100) + 19);
		$("#startingScoreP").text("Match: " + matchNumber);

		counter = 0;
		$("#totalScoreValue").html(counter);
	}


	var crystalNumbers = [
	Math.floor((Math.random() * 11) + 1),
	Math.floor((Math.random() * 11) + 1),
	Math.floor((Math.random() * 11) + 1),
	Math.floor((Math.random() * 11) + 1)];


	for (var i = 0; i < crystalNumbers.length; i++) {
		var blueNumber = crystalNumbers[0];
		var greenNumber = crystalNumbers[1];
		var redNumber = crystalNumbers[2];
		var yellowNumber = crystalNumbers[3];
	}


	$("#blueCrystal").attr("Value", blueNumber);
	$("#greenCrystal").attr("Value", greenNumber);
	$("#redCrystal").attr("Value", redNumber);
	$("#yellowCrystal").attr("Value", yellowNumber);


	$(".crystalButtons").on("click", function() {

		var crystalValue = ($(this).attr('value'));
		crystalValue = parseInt(crystalValue);

		counter += crystalValue;

		$("#totalScoreValue").html(counter);


		if (counter === matchNumber) {
			alert("You win!");
			wins++;
			$("#winsP").html("Wins: " + wins);
			resetGame();
		}

		else if (counter > matchNumber) {
			alert("You lose! Try again.");
			losses++;
			$("#lossesP").html("Losses: " + losses);
			resetGame();
		}

	})


});







