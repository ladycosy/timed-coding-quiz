var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

//initizing variables - scores count, question number, remaining time count, timer  //
var score = 0;
var currentQuestion = -1;
var time = 0;
var timer = 0;

//Starting the timer count//
function start() {
  time = 60;
  document.getElementById("#time").tabIndex.innerHTML = time;

  timer = setInterval(function () {
    time--;
    document.getElementById("#time").innerHTML = time;

    //When time reaches 0 the game is over//
    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 6000);

  next();
}

//When time is out - end the game and clear the timer //
function endGame() {
  clearInterval(timer);

  var quizMessage =
    `
    <h2>Time Over</h2>
    <h3>You scored ` +
    score +
    ` /100</h3>
    <h3>That means you got ` +
    score / 20 +
    ` questions correct</h3>
    <input type="text" id="initials" placeholder="Initials"> 
    <button onclick="setScore()">Submit</button>`;

  document.getElementById("#start-screen").innerHTML = quizMessage;
}

//Storing user's values in local storage//
function setScore() {
  localStorage.setItem(
    "highscoreInitials",
    document.getElementById("#initials").value
  );
  localStorage.setItem("highscore", score);
  getScore();
}

// Printing user score and initials //
function getScore() {
  var quizMessage =
    `
    <h2>` +
    localStorage.getItem("highscoreInitials") +
    `'s highscore is:</h2>
    <h1>` +
    localStorage.getItem("highscore") +
    `</h1><br> 
    <button onclick="resetGame()">Go Back</button><button onclick="clearScore()">Clear score</button>`;

  document.getElementById("#start-screen").innerHTML = quizMessage;
}

//Clear the data - user score and initials - that is kept in local storage//
function clearScore() {
  localStorage.setItem("highscoreInitials", "");
  localStorage.setItem("highscore", "");

  resetGame();
}
