// Player One -------------------------------------------------------
const playerOne = document.getElementById("player-one");
const playerOneName = document.getElementById("player-1");
const currentScoreOne = document.getElementById("one-current-score");
const mainScoreOne = document.getElementById("one-main-score");
const playerOneWinner = document.getElementById("player-1-win");
let cScoreValOne = 0,
  mScoreValOne = 0;

// Player Two --------------------------------------------------------
const playerTwo = document.getElementById("player-two");
const playerTwoName = document.getElementById("player-2");
const currentScoreTwo = document.getElementById("two-current-score");
const mainScoreTwo = document.getElementById("two-main-score");
const playerTwoWinner = document.getElementById("player-2-win");
let cScoreValTwo = 0,
  mScoreValTwo = 0;

// Buttons ------------------------------------------------------------
const rollDiceBtn = document.getElementById("roll-dice");
const diceImage = document.getElementById("dice-img");
const holdBtn = document.getElementById("hold");
const newGameBtn = document.getElementById("new-game-btn");

// Active Player Dots -------------------------------------------------
const dotOne = document.getElementById("dot1");
const dotTwo = document.getElementById("dot2");

let randomNumber;

// Fuction that Generate Random Dice Number --------------------------
const rollDice = () => {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  // Rolling Dice Image
  if (randomNumber === 1) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/m9mb3cx.png";
  } else if (randomNumber === 2) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/EA2qvGZ.png";
  } else if (randomNumber === 3) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/qaekzKO.png";
  } else if (randomNumber === 4) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/qbqvQvB.png";
  } else if (randomNumber === 5) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/eeBcrqU.png";
  } else if (randomNumber === 6) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/vzksTKQ.png";
  }
};

//--------------------------------------------------------
const nonActivePlayerOne = () => {
  playerOne.classList.remove("active");
  dotOne.style.display = "none";

  playerTwo.classList.add("active");
  dotTwo.style.display = "block";

  diceImage.style.visibility = "hidden";

  mScoreValOne += cScoreValOne;
  mainScoreOne.innerHTML = mScoreValOne;

  if (mScoreValOne >= 50) {
    playerOneName.innerHTML = "Winner!!";

    playerTwo.classList.remove("active");
    dotTwo.style.display = "none";

    playerOne.classList.add("active");
    dotOne.style.display = "block";
  }

  cScoreValOne = 0;
  currentScoreOne.innerHTML = 0;
};

//--------------------------------------------------------
const nonActivePlayerTwo = () => {
  playerTwo.classList.remove("active");
  dotTwo.style.display = "none";

  playerOne.classList.add("active");
  dotOne.style.display = "block";

  diceImage.style.visibility = "hidden";

  mScoreValTwo += cScoreValTwo;
  mainScoreTwo.innerHTML = mScoreValTwo;
  if (mScoreValTwo >= 50) {
    playerTwoName.innerHTML = "Winner!!";

    playerOne.classList.remove("active");
    dotOne.style.display = "none";

    playerTwo.classList.add("active");
    dotTwo.style.display = "block";
  }

  cScoreValTwo = 0;
  currentScoreTwo.innerHTML = 0;
};

//---------- Game Function --------------------------
function game() {
  if (mScoreValOne >= 50) {
    playerOneName.innerHTML = "Winner!!";

    playerTwo.classList.remove("active");
    dotTwo.style.display = "none";

    playerOne.classList.add("active");
    dotOne.style.display = "block";
  } else if (mScoreValTwo >= 50) {
    playerTwoName.innerHTML = "Winner!!";

    playerOne.classList.remove("active");
    dotOne.style.display = "none";

    playerTwo.classList.add("active");
    dotTwo.style.display = "block";
  } else {
    rollDice();
    if (playerOne.classList[1] === "active") {
      if (randomNumber === 1) {
        cScoreValOne = 0;
        nonActivePlayerOne();
      } else {
        cScoreValOne += randomNumber;
        currentScoreOne.innerHTML = cScoreValOne;
      }
    } else if (playerTwo.classList[1] === "active") {
      if (randomNumber === 1) {
        cScoreValTwo = 0;
        nonActivePlayerTwo();
      } else {
        cScoreValTwo += randomNumber;
        currentScoreTwo.innerHTML = cScoreValTwo;
      }
    }
  }
}

//-------- Hold Score Function ---------------------------
function holdScore() {
  if (playerOne.classList[1] === "active") {
    if (mScoreValOne >= 50) {
      playerOneName.innerHTML = "Winner!!";
    } else {
      nonActivePlayerOne();
    }
  } else if (playerTwo.classList[1] === "active") {
    if (mScoreValTwo >= 50) {
      playerTwoName.innerHTML = "Winner!!";
    } else {
      nonActivePlayerTwo();
    }
  }
}

// -------- New Game Function ----------------------------
function newGame() {
  cScoreValOne = 0;
  currentScoreOne.innerHTML = 0;

  cScoreValTwo = 0;
  currentScoreTwo.innerHTML = 0;

  mScoreValOne = 0;
  mainScoreTwo.innerHTML = 0;

  mScoreValTwo = 0;
  mainScoreOne.innerHTML = 0;

  playerOneName.innerHTML = "Player 1";
  playerTwoName.innerHTML = "Player 2";

  if (playerTwo.classList[1] === "active") {
    playerTwo.classList.remove("active");
    dotTwo.style.display = "none";

    playerOne.classList.add("active");
    dotOne.style.display = "block";
  }
}

//---------- Button Event Listners --------------------------
rollDiceBtn.addEventListener("click", game);
holdBtn.addEventListener("click", holdScore);
newGameBtn.addEventListener("click", newGame);
