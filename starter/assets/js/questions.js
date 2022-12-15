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

    //When time run out to 0 Quiz is over//
    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 6000);

  next();
}
