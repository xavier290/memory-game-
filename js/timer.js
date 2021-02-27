const timerDisplay = document.getElementById('timer');
const gameOverSection = document.querySelector('.game-over');

let timeLeft = 40;

function countDown () {
    setInterval(() => {

        if(timeLeft <= 0) {
            clearInterval(timeLeft = 0);
            gameOver();
        }

        timerDisplay.textContent = timeLeft + ' seconds left';
        timeLeft -= 1;
    }, 1000);
}

function gameOver () {
    cards.forEach((card) => {
        card.classList.remove('flip');
        gameOverSection.classList.add('failed');
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', countDown);
})