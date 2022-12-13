let startButton = document.querySelector("#start");
let startPage = document.querySelector("#startPage");
let timer = document.querySelector("#timer");
let currentTime = 60;
let currentQuestion =0;
let quizQuestions = document.querySelector("#questions");
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
]
