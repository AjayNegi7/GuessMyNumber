
let guessNumber;
let score = 20;
let highScore = 0;
(function generateNumber() {
    guessNumber = Math.floor(Math.random() * 20) + 1;
})()

const mainSection = document.querySelector(".main");
const checkBtn = document.getElementById("check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const scoreEle = document.getElementById('score');
const highScoreEle = document.getElementById('highScore');
const resetBtn = document.getElementById('againBtn');
const hintELe = document.getElementById('hint');
const allInfo = document.querySelectorAll('p')



function updateScore(score) {
    scoreEle.textContent = score;
}

function handleHighScore(score) {
    highScore = Math.max(score, highScore);
}


checkBtn.addEventListener('click', () => {
    const inputValue = Number(document.getElementById('guess').value);

    
    let msg = score === 0 ? "You Lose the Game!" : ""
    if (msg) {
        message.textContent = msg
        return;
    }

    // WIN CASE
    if (inputValue === guessNumber) {
        message.textContent = "🚀 Correct Number";
        number.textContent = guessNumber;
        handleHighScore(score)
        highScoreEle.textContent = highScore;

        mainSection.style.backgroundColor = "rgba(76, 175, 80, 0.8)";
        hintELe.classList.replace("text-black", "text-white");
        allInfo.forEach((p) => {
            p.classList.replace("text-black", "text-white");
        });

    
    }
    // Wrong Guess
    else {
        if (inputValue < guessNumber) {
            message.textContent = "Too Low!"
            score--;
            updateScore(score)
        }
        else {
            message.textContent = "Too High!";
            score--;
            updateScore(score)
        }
    }


})


// Restart Logic

resetBtn.addEventListener('click', () => {
    score = 20;
    guessNumber = Math.floor(Math.random() * 20) + 1;
    number.textContent = '?';
    message.textContent = "Start Guessing";
    scoreEle.textContent = score;
    document.getElementById('guess').value = "";
    mainSection.style.backgroundColor = "white";
    hintELe.classList.replace("text-white", "text-black")
    allInfo.forEach((p) => {
        p.classList.replace("text-white", "text-black")
    });

})


const instructionsBtn = document.getElementById('instructionsBtn');

instructionsBtn.addEventListener('click', () => {
    window.open('https://github.com/AjayNegi7/GuessMyNumber/blob/main/README.md', '_blank'); 
});
