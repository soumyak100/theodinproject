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
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function playRound(humanChoice, computerChoice) {
	humanScore = 0;
	computerScore = 0;
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
		console.log("You win! " + capitalizeFirstLetter(hChoice) + " beats " + capitalizeFirstLetter(cChoice));
	} else if (computerScore > humanScore) {
		console.log("You win! " + capitalizeFirstLetter(cChoice) + " beats " + capitalizeFirstLetter(hChoice));
	} else {
		console.log("It's a draw!");
	}
}


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
