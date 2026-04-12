function getComputerChoice() {
	const randomNum = Math.random();
	if (randomNum > 0 && randomNum <= 0.3) {
		return "rock";
	}
	else if (randomNum > 0.3 && randomNum <= 0.6) {
		return "paper";
	}

	return "scissors";
}

function getHumanChoice() {
	const humanChoice = prompt("Enter your choice (rock/paper/scissors): ");
	return humanChoice;
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase();
}

function printMessage(result, humanChoice, computerChoice) {
	if (result > 0) {
		console.log("You win! " + capitalizeFirstLetter(humanChoice) + " beats " + capitalizeFirstLetter(computerChoice));
	} else if (result < 0) {
		console.log("You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice));
	} else {
		console.log("It's a draw!");
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let humanChoice = "";
	let computerChoice = "";
	let result = 0;
	// Round 1
	humanChoice = getHumanChoice();
	computerChoice = getComputerChoice();
	result = playRound(humanChoice, computerChoice);
	if (result < 0) {
		computerScore += 1;
	} else if (result > 0) {
		humanScore += 1;
	}	
	printMessage(result, humanChoice, computerChoice);

	//Round 2
	humanChoice = getHumanChoice();
	computerChoice = getComputerChoice();
	result = playRound(humanChoice, computerChoice);
	if (result < 0) {
		computerScore += 1;
	} else if (result > 0) {
		humanScore += 1;
	}
	printMessage(result, humanChoice, computerChoice);

	//Round 3
	humanChoice = getHumanChoice();
	computerChoice = getComputerChoice();
	result = playRound(humanChoice, computerChoice);
	if (result < 0) {
		computerScore += 1;
	} else if (result > 0) {
		humanScore += 1;
	}
	printMessage(result, humanChoice, computerChoice);

	//Round 4
	humanChoice = getHumanChoice();
	computerChoice = getComputerChoice();
	result = playRound(humanChoice, computerChoice);
	if (result < 0) {
		computerScore += 1;
	} else if (result > 0) {
		humanScore += 1;
	}
	printMessage(result, humanChoice, computerChoice);

	//Round 5
	humanChoice = getHumanChoice();
	computerChoice = getComputerChoice();
	result = playRound(humanChoice, computerChoice);
	if (result < 0) {
		computerScore += 1;
	} else if (result > 0) {
		humanScore += 1;
	}
	printMessage(result, humanChoice, computerChoice);

	//Print final message
	if (humanScore > computerScore) {
		console.log("You win!");
	} else if (humanScore < computerScore) {
		console.log("You lose!");
	} else {
		console.log("It is a draw!");
	}
}


function playRound(humanChoice, computerChoice) {
	let humanScore = 0;
	let computerScore = 0;
	let hChoice = humanChoice.toLowerCase();
	let cChoice = computerChoice.toLowerCase();
	if (hChoice === "rock") {
		if (cChoice === "scissors") {
			humanScore += 1;
		} else if (cChoice === "paper") {
			computerScore += 1;
		}
	} else if (hChoice === "paper") {
		if (cChoice === "rock") {
			humanScore += 1;
		} else if (cChoice === "scissors") {
			computerScore += 1;
		}
	} else if (hChoice === "scissors") {
		if (cChoice === "paper") {
			humanScore += 1;
		} else if (cChoice === "rock") {
			computerScore += 1;
		}
	}

	if (humanScore > computerScore) {
		return 1;
	} else if (computerScore > humanScore) {
		return -1;
	}

	return 0;
}


playGame();
