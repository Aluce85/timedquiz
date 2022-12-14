let startButton = document.querySelector("#start");
let startPage = document.querySelector("#startScreen");
let questionsElement = document.querySelector("#questions");
let timer = document.querySelector("#timer");
let currentQuestion = 0;
let currentTime = 100;
let countdown;
const questions = [
    {
    questionTitle: "What is the biggest city in Texas by population?",
    choices: ["Dallas", "Houston", "Austin", "San Antonio"],
    answer: "Houston",
},
{
    questionTitle: "What is the name of Dallas' football team?",
    choices: ["Texans", "Rams", "Bears", "Cowboys"],
    answer:"Cowboys",
},
{
    questionTitle: "What is the Cowboys logo?",
    choices: ["A moon", "A star", "A cow", "A Cowboy"],
    answer: "A star",
},
{
    questionTitle: "How many titles have the Cowboys won?",
    choices: ["1", "4", "5", "6"],
    answer: "5",
},
{
    questionTitle: "What is the last name of the Cowboys quarterback?",
    choices: ["Prescott", "Brady", "Mahomes", "Burrow"],
    answer: "Prescott",
},
{
    questionTitle: "When was the last time the Cowboys won a superbowl?",
    choices: ["2010", "1997", "1994", "1996"],
    answer: "1996",
}
];

function startQuiz() {
    console.log("Start");
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    renderQuestions();
    startTimer();
  }

  function startTheTimer() {
    countDown = setInterval(() => {
        timer.textContent = currentTime;
        currentTime--;
        if (currentTime === 0) {
            clearInterval (countDown);
        }
    }, 1000)
}

function endQuiz() {
    clearInterval(countdown);
    let endScreenEl=document.querySelector("#endScreen")
    endScreenEl.removeAttribute("class")
    let finalScoreEl = document.querySelector("#finalScore")
    finalScoreEl.textContent=currentTime;
    questionsElement.setAttribute("class", "hide")
  }
  function checkAnswer() {
    console.log(this.value);
    console.log(currentQuestion);
    if (this.value !== questions[currentQuestion].answer) {
      currentTime = currentTime - 10;
      if (currentTime < 0) {
        currentTime = 0;
      }
      timer.textContent = currentTime;
    }
    if (this.value === questions[currentQuestion].answer) {
      if (currentTime < 0) {
        currentTime = 0;
      }
      timer.textContent = currentTime;
      currentQuestion++;
      renderQuestions();
    }
    if (currentTime <= 0 || currentQuestion === questions.length -1) {
      endQuiz();
    } else {
      renderQuestions();
    }
  }
  function renderQuestions() {
    let questionTitleEl = document.querySelector("#question-title");
    let choicesEl = document.querySelector("#choices");
    questionTitleEl.textContent = questions[currentQuestion].questionTitle;
    choicesEl.textContent = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      let button = document.createElement("button");
      button.textContent = questions[currentQuestion].choices[i];
      button.setAttribute("value", questions[currentQuestion].choices[i]);
      button.onclick = checkAnswer;
      choicesEl.appendChild(button);
    }
  }
  
  function startQuiz() {
    console.log("here");
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    renderQuestions();
    startTimer();
  }
  
  function startTimer() {
    countdown = setInterval(() => {
      timer.textContent = currentTime;
      currentTime--;
      if (currentTime === 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }
  startButton.onclick = startQuiz;



