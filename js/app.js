const cards = document.querySelectorAll(".memory-card");
const displayResults = document.querySelector("#score");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter = 0;

const reloadWindow = document.querySelector('.reload-window');

function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;

	this.classList.add("flip");

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;

		return;
	}

	secondCard = this;
	checkForMatch();
}

function checkForMatch() {
	let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

	isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);

	resetBoard();
	if (disableCards) {
		counter = counter + 1;

		displayResults.textContent = counter * 10 + " pts";

		// every time the disableCards function is called the variable counter increase its value by 1
		if (counter === 6) {
			resetGame();
		}
	}
}

function unflipCards() {
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");

		resetBoard();
	}, 1200);
}

function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

function shuffle() {
	cards.forEach((card) => {
		let randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;
	});
}

function resetGame () {
	cards.forEach((card) => {
		setTimeout(() => {
			card.classList.remove('flip');
		}, 500);

		setTimeout(() => {
			reloadWindow.classList.add('active');
		}, 1500);
	})
}

cards.forEach((card) => card.addEventListener("click", flipCard));

shuffle();
