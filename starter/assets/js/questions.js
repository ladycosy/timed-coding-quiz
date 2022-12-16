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
var currentQuestion = -1;
var score = 0;
var timeLeft = 0;
var timer;

//Starting the timer count//
function start() {
  timeLeft = 60;
  document.getElementById("time").innerHTML = timeLeft;

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("time").innerHTML = timeLeft;

    //When time reaches 0 the game is over//
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

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
    ` /75</h3>
    <h3>That means you got ` +
    score / 15 +
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

//Function reset//
function resetGame() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  timer = null;

  document.getElementById("time").innerHTML = timeLeft;

  var quizMessage = `
    <h1> Code Quiz </h1>
    <button onclick="start()">Start Quiz</button>`;

  document.getElementById("start-screen").innerHTML = quizMessage;
}

//If user chooses wrong answer, the timer changes (minus 10)
function incorrect() {
  timeLeft -= 10;
  next();
}

//If user chooses right answer (plus 15)
function correct() {
  score += 15;
  next();
}

//questions in loop
function next() {
  currentQuestion++;

  if (currentQuestion > questions.length - 1) {
    endGame();
    return;
  }
  var quizMessage = "<h2>" + questions[currentQuestion].title + "</h2>";

  for (
    var buttonLoop = 0;
    buttonLoop < questions[currentQuestion].choices.length;
    buttonLoop++
  ) {
    var buttonCode = '<button onclick="[ANS]">[CHOICE]</button>';
    buttonCode = buttonCode.replace(
      "[CHOICE]",
      questions[currentQuestion].choices[buttonLoop]
    );
    if (
      questions[currentQuestion].choices[buttonLoop] ==
      questions[currentQuestion].answer
    ) {
      buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
      buttonCode = buttonCode.replace("[ANS]", "wrong()");
    }
    quizContent += buttonCode;
  }

  document.getElementById("start-screen").innerHTML = quizMessage;
}
