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

function getMessage(result, humanChoice, computerChoice) {
	if (result > 0) {
		return ("You win! " + capitalizeFirstLetter(humanChoice) + " beats " + capitalizeFirstLetter(computerChoice));
	} else if (result < 0) {
		return ("You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice));
	} else {
		return ("It's a draw!");
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let humanChoice = "";
	let computerChoice = "";
	let result = 0;
	let round = 0;
	const btnRock = document.querySelector("#btn-rock");
	const btnPaper = document.querySelector("#btn-paper");
	const btnScissor = document.querySelector("#btn-scissors");
	const btnReset = document.querySelector("#btn-reset");
	const humanScoreText = document.querySelector("#human-score");
	const computerScoreText = document.querySelector("#computer-score");
	const roundMessageText = document.querySelector("#round-message");
	const finalMessageText = document.querySelector("#final-message");
	humanScoreText.textContent = humanScore;
	computerScoreText.textContent = computerScore;
	btnReset.onclick = () => {
		humanScore = 0;
		computerScore = 0;
		humanChoice = "";
		computerChoice = "";
		result = 0;
		round = 0;
		humanScoreText.textContent = humanScore;
		computerScoreText.textContent = computerScore;
		roundMessageText.innerHTML = "";
		finalMessageText.textContent = "";
	};
	[btnRock, btnPaper, btnScissor].map((btn) => btn.onclick = () => {
		humanChoice = btn.textContent;
		computerChoice = getComputerChoice();
		if (round < 5) {
			result = playRound(humanChoice, computerChoice);
			if (result < 0) {
				computerScore += 1;
			} else if (result > 0) {
				humanScore += 1;
			}	
			round += 1;
			humanScoreText.textContent = humanScore;
			computerScoreText.textContent = computerScore;
			const para = document.createElement("p");
			para.textContent = "Round " + round + ": " + getMessage(result, humanChoice, computerChoice);
			roundMessageText.innerHTML += para.outerHTML;
		}
		if (round == 5) {
			//Print final message
			if (humanScore > computerScore) {
				finalMessageText.textContent = "You win!";
			} else if (humanScore < computerScore) {
				finalMessageText.textContent = "You lose!";
			} else {
				finalMessageText.textContent = "It is a draw!";
			}
			round = 6;
		}
	});
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
