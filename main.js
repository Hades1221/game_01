let arr = ["images/hat.png", "images/boat.png",
    "images/short.png"];
let arrWord = ["hat", "boat", "shirt"];
let counter = 0;
let i = selectRandomImage();
let score = 0;
let highScore = 0;
document.body.classList.add('backGroundBody');
let btnPlayAgain = document.querySelector('.playAgain');

//hidden and show button game over play again
const showbtnPlayAgain = function () {
    btnPlayAgain.classList.remove('hidden');
};
const hiddenbtnPlayAgain = function () {
    btnPlayAgain.classList.add('hidden');
};

function selectRandomImage() {
    document.querySelector(".countQuestion").textContent =
        "Question number " + (counter + 1)
    let index = Math.floor(Math.random() * 10 % 3);
    console.log(index);
    document.getElementById("imgToGuess").src = arr[index];
    return index;
}

function play() {
    counter++;
    if (counter <= 3) {
        let word = arrWord[i];
        let letter = document.getElementById("input").value;
        //let imgLetter = document.getElementById("imgToGuess").na
        if (!letter) {
            document.querySelector(".message").textContent =
                "No Letter 🥵";
            score -= 2;
        } else if (letter == word[0]) {
            document.querySelector(".message").textContent =
                "correct Answer 🤙";
            score += 5;
        } else if (letter != word[0]) {
            document.querySelector(".message").textContent =
                "correct Answer 👎";
            score -= 2;
        }
        document.getElementById("input").value = "";
        document.querySelector(".score").textContent =
            "score :  " + score;
        if (counter < 3) {
            i = selectRandomImage();
        }
    }
    if (counter > 2) {
        gameOver();
    }
}
function gameOver() {
    if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = "🍭 high score " + score;
    }
    document.body.classList.remove('backGroundBody');
    showbtnPlayAgain();
}

document.querySelector(".playAgain").addEventListener('click', reset);
function reset() {
    document.body.classList.add('backGroundBody');
    counter = 0;
    i = selectRandomImage();// get new random picture
    score = 0;
    document.querySelector(".score").textContent = 0;
    document.getElementById("input").value = "";
    hiddenbtnPlayAgain();
}

//event listener
document.querySelector(".play").addEventListener("click", play)