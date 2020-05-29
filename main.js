var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
	const choice = ['r','p','s'];
	const random = Math.floor(Math.random() * 3);
	return choice[random];
}

function convert(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	if(letter === "s") return "Scissors";
}
function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML= userScore;
	compScore_span.innerHTML = compScore;
	const u = "user".fontsize(3).sub();
	const c = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convert(userChoice)}${u} beats ${convert(computerChoice)}${c}. You Win!`;
	document.getElementById(userChoice).classList.add('green');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green'),700);
}

function lose(userChoice,computerChoice){
	compScore++;
	userScore_span.innerHTML= userScore;
	compScore_span.innerHTML = compScore;
	const u = "user".fontsize(3).sub();
	const c = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convert(computerChoice)}${c} beats ${convert(userChoice)}${u}. You Lose!`;
	document.getElementById(userChoice).classList.add('red');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red'),700);
}
function draw(userChoice,computerChoice){
	const u = "user".fontsize(3).sub();
	const c = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convert(userChoice)}${u} equals ${convert(computerChoice)}${c}. Its a draw!`;
	document.getElementById(userChoice).classList.add('gray');
	setTimeout(() => document.getElementById(userChoice).classList.remove('gray'),700);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;
	}
}

function main() {
	paper_div.addEventListener('click', () => game("p"));

	scissor_div.addEventListener('click', () => game("s"));

	rock_div.addEventListener('click', () => game("r"));
}

main();