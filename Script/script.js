document.getElementById('btn-play-now').addEventListener('click', function () {
    const homeSection = document.getElementById('home-section');
    const playGroundSection = document.getElementById('play-ground-section');
    homeSection.classList.add('hidden');
    playGroundSection.classList.remove('hidden');
    continueGame();
    timer();
});
function continueGame() {
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet.toUpperCase();
    const key = document.getElementById(alphabet);
    key.classList.add('bg-yellow-400');
}
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const index = Math.round(Math.random() * 25);
    const alphabet = alphabets[index];
    return alphabet;
}
document.addEventListener('keyup', function (event) {
    const playerPressed = event.key.toLowerCase();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
    if (currentAlphabet === playerPressed) {
        const screenColor = document.getElementById('screen-color');
        screenColor.classList.remove('bg-[#ff5757]');
        const currentScoreElement = document.getElementById('current-score');
        const currentScore = parseInt(currentScoreElement.innerText);
        currentScoreElement.innerText = currentScore + 1;
        const key = document.getElementById(playerPressed);
        key.classList.remove('bg-yellow-400');
        continueGame();
    }
    else {
        const screenColor = document.getElementById('screen-color');
        screenColor.classList.add('bg-[#ff5757]');
        const scoreSection = document.getElementById('score-section');
        const playGroundSection = document.getElementById('play-ground-section');
        const currentScoreElement = document.getElementById('current-score');
        const totalScorePoint = document.getElementById('total-score-point');

        const currentLifeElement = document.getElementById('current-life');
        const currentLife = parseInt(currentLifeElement.innerText);
        currentLifeElement.innerText = currentLife - 1;
        if (currentLife <= 0) {
            const currentScore = parseInt(currentScoreElement.innerText);
            playGroundSection.classList.add('hidden');
            scoreSection.classList.remove('hidden');
            totalScorePoint.innerText = currentScore;
        }
    }
});

document.getElementById('btn-play-again').addEventListener('click', function () {
    const screenColor = document.getElementById('screen-color');
    screenColor.classList.remove('bg-[#ff5757]');
    const playGroundSection = document.getElementById('play-ground-section');
    const scoreSection = document.getElementById('score-section');
    const currentScoreElement = document.getElementById('current-score');
    const currentLifeElement = document.getElementById('current-life');
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    const timerElement = document.getElementById('timer');
    const key = document.getElementById(currentAlphabet);
    playGroundSection.classList.remove('hidden');
    scoreSection.classList.add('hidden');
    currentScoreElement.innerText = 0;
    currentLifeElement.innerText = 5;
    timerElement.classList.remove('text-red-600');
    key.classList.remove('bg-yellow-400');
    continueGame();
    timer();
});
let timerInterval;
function timer() {
    const currentScoreElement = document.getElementById('current-score');
    const totalScorePoint = document.getElementById('total-score-point');
    const scoreSection = document.getElementById('score-section');
    const playGroundSection = document.getElementById('play-ground-section');
    const timerElement = document.getElementById('timer');
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    let seconds = 30;
    timerInterval = setInterval(() => {
        timerElement.innerText = seconds;
        if (seconds <= 10) {
            timerElement.classList.add('text-red-600');
        }
        if (seconds <= 0) {
            const currentScore = parseInt(currentScoreElement.innerText);
            playGroundSection.classList.add('hidden');
            scoreSection.classList.remove('hidden');
            totalScorePoint.innerText = currentScore;
            clearInterval(interval);
            timerElement.classList.remove('text-red-600');
        }
        seconds--;
    }, 1000);
}
