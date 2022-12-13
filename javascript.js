let startButton = document.querySelector("#start");
let startPage = document.querySelector("#startPage");
let timer = document.querySelector("#timer");
let currentTime = 60;
let currentQuestion =0;
let quizQuestions = document.querySelector("#questions");
let countDown;
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

function endQuiz() {
    clearInterval(countDown);
    let endPage = document.querySelector("#endPage")
    endPage.removeAttribute("class")
    let endScore = document.querySelector("#endScore")
    endScore.textContent= currentTime;
    quizQuestions.setAttribute("class", "hide")
}

function answerCheck() {
    console.log(this.value);
    console.log(currentQuestion);
    if (this.value !== questions[currentQuestion].answer) {
        currentTime = currentTime -10;
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
        renderQuestion();
    }
    if (currentTime <= 0 || currentQuestion === questions.length -1) {
        endQuiz();
    }
    else {
        renderQuestion();
    }
}

function renderQuestion () {
    let questionName = document.querySelector("#QuestionName");
    let answerChoices = document.querySelector("#answerChoices");
    answerChoices.textContent = "";
    questionName.textContent = questions[currentQuestion].questionName;
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let button = document.createElement("button");
    button.onClick =answerCheck
    button.setAttribute("value", questions[currentQuestion].choices[i]);
    button.textContent = questions[currentQuestion].choices[i];
    answerChoices.appendChild(button);
}
}
