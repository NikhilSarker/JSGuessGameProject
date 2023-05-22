//alert("Hi");

// ONLOAD FUNCTION START
window.onload = pageReady;

function pageReady() {

  //CREATE VARIABLE
  let randomInput = document.getElementById("randomInput");
  let randomBtn = document.getElementById("randomBtn");
  let player1Input = document.getElementById("player1Input");
  let player1Btn = document.getElementById("player1Btn");
  let player1Text = document.getElementById("player1_text");
  let player1Score = document.getElementById("player1_score");
  let player2Input = document.getElementById("player2Input");
  let player2Btn = document.getElementById("player2Btn");
  let player2Text = document.getElementById("player2_text");
  let player2Score = document.getElementById("player2_score");
  let player1Chance = document.getElementById("player1Chance");
  let player2Chance = document.getElementById("player2Chance");
  let playAgain = document.getElementById("restart");


  let score1 = 0;
  let score2 = 0;

  let player1ChanceNumber = 3;
  let player2ChanceNumber = 3;

  //CREATE RANDOM NUMBER FUNCTION START
  randomBtn.onclick = createNumber;

  function createNumber() {
    randomInput.value = Math.floor(Math.random() * 5) + 1;

    player1Btn.onclick = player1Guess;
    // PLAYER1 GUESS FUNCTION START
    function player1Guess() {

      // PLAYER1 INPUT VALIDATION START

      if (player1Input.value === "") {
        player1Text.innerHTML = "<h2>Please give a value </h2>";
        player1Text.style.color = "red";
      } else if (isNaN(player1Input.value)) {
        player1Text.innerHTML = "<h2>Please give a number not string</h2>";
        player1Text.style.color = "red";
      } else if (player1Input.value > 0 && player1Input.value < 6) {

        if (player1ChanceNumber !== 0) {

          if (randomInput.value === player1Input.value) {
            //console.log("player 2 winner");
            player1Text.innerHTML = "<h2> Congratulations! player 1 win.</h2>";
            player1Text.style.color = "black";
            score1 += 10;
            player1Score.innerHTML = `Your Score: ${score1}`;

          } else {
            player1ChanceNumber--

            player1Text.innerHTML = "";

            player1Chance.innerHTML = player1ChanceNumber;
          }

        } else {
          //console.log("value not ok");
          score1 = 0;
          player1Score.innerHTML = `Your Score: ${score1} `;
          player1Chance.innerHTML = "Game Over";
          player1Text.innerHTML = "You got 0 point.";
          player1Text.style.color = "black";
        }

      } else {
        player1Text.innerHTML = "<h2>Please give value  between 1 to 5</h2>";
        player1Text.style.color = "red";

      } // PLAYER1 INPUT VALIDATION END

    }; // PLAYER1 GUESS FUNCTION END

    // PLAYER2 GUESS FUNCTION START
    player2Btn.onclick = player2Guess;

    function player2Guess() {

      // PLAYER2 INPUT VALIDATION START

      if (player2Input.value === "") {
        player2Text.innerHTML = "<h2>Please give a value </h2>";
        player2Text.style.color = "red";
      } else if (isNaN(player2Input.value)) {
        player2Text.innerHTML = "<h2>Please give a number not string</h2>";
        player2Text.style.color = "red";
      } else if (player2Input.value > 0 && player2Input.value < 6) {

        player2Text.innerHTML = "";

        if (player2ChanceNumber !== 0) {

          if (randomInput.value === player2Input.value) {

            player2Text.innerHTML = "<h2> Congratulations! player 2 win.</h2>";
            player2Text.style.color = "black";
            score2 += 10;
            player2Score.innerHTML = `Your Score: ${score2}`;
            // console.log("no")

          } else {
            player2ChanceNumber--
            player2Chance.innerHTML = player2ChanceNumber;
            // console.log("hello")
          }

        } else {
          score2 = 0;
          player2Score.innerHTML = `Your Score: ${score2}`
          player2Chance.innerHTML = "Game Over";
          player2Text.innerHTML = "You got 0 point.";
          player2Text.style.color = "black";
        }

      } else {
        player2Text.innerHTML = "<h2>Please give value  between 1 to 5</h2>";
        player2Text.style.color = "red";
      } // PLAYER2 INPUT VALIDATION END

    }; // PLAYER2 GUESS FUNCTION END

    //  PLAY AGAIN PART START

    playAgain.onclick = runAgain;

    function runAgain() {
      randomInput.value = Math.floor(Math.random() * 5) + 1;
      player1Input.value = "";
      player2Input.value = "";
      player1ChanceNumber = 3;
      player2ChanceNumber = 3;
      player1Chance.innerHTML = 3;
      player2Chance.innerHTML = 3;
      player1Text.innerHTML = "";
      player2Text.innerHTML = "";

    };
    //  PLAY AGAIN PART START

  }; // CREATE NUMBER FUNCTION END

}; //ONLOAD FUNCTION END