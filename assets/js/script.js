var i = 0
var timeStart = 30;
function countDown() {
  var timerEl = document.getElementById("timer");
  timerEl.textContent = timeStart;
  var timeInterval = setInterval(() => {
    if (timeStart == 0) {
      clearInterval(timeInterval);
    }
    timerEl.textContent = timeStart--;
  }, 1000);
}
countDown();

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answer: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Booleans",
  },
  {
    question: "The condition in an if/else statement is enclosed with:",
    answer: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correct: "Parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answer: [
      "Numbers & Stings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correct: "All of the above",
  },
  {
    question:
      "String values must be enclosed within _________ when being assigned variables:",
    answer: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correct: "Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: ["JavaScript", "Terminal/Bash", "for loops", "console.log"],
    correct: "for loops",
  },
];
var q = document.getElementById("q");
var a = document.getElementById("a");









function showQuestions(){
    var questionEl = document.createElement('h2')
    var answerEl = document.createElement('ol')
    questionEl.textContent = (questions[i].question)
    q.appendChild(questionEl)
    a.appendChild(answerEl)
    for (var j = 0; j < questions[i].answer.length; j++){
        var answerChoice = document.createElement('li')
        answerChoice.setAttribute('onclick', 'nextQuestion(event)')
        answerChoice.textContent = questions[i].answer[j]
        answerEl.appendChild(answerChoice);
    }
}
showQuestions();

function nextQuestion(e){
    console.log (e.target)
    if (questions[i].correct === e.target.textContent){
        console.log ("correct")
    }else {
        console.log ("wrong")
        timeStart -= 3
    }
    
    i++
    q.children[0].remove()
    a.children[0].remove()
    if (i < questions.length ){
        showQuestions();
    }else (i < questions.length)
        // showHighScore();
    }


