// Containers
var infoContainer = document.getElementById("infoContainer");
var questionContainer = document.getElementById("questionContainer");
var completeContainer = document.getElementById("completeContainer");
var highscoreContainer = document.getElementById("highscoreContainer");

//Question, Answer Choices
var question = document.getElementById("question");

var answerChoiceOne = document.getElementById("answerChoiceOne");
var answerChoiceTwo = document.getElementById("answerChoiceTwo");
var answerChoiceThree = document.getElementById("answerChoiceThree");
var answerChoiceFour = document.getElementById("answerChoiceFour");

var popUP = document.getElementById("popUP");

var questionIndex = 0;

//Questions
var quizQuestions = [
  {
    "question": "Question 1",
    "choiceOne": "1.Correct",
    "choiceTwo": "2.False",
    "choiceThree": "3.False",
    "choiceFour": "4.False",
    "correct": "1.Correct",
  },
  {
    "question": "Question 2",
    "choiceOne": "1.Correct",
    "choiceTwo": "2.False",
    "choiceThree": "3.False",
    "choiceFour": "4.False",
    "correct": "1.Correct",
  },
  {
    "question": "Question 3",
    "choiceOne": "1.Correct",
    "choiceTwo": "2.False",
    "choiceThree": "3.False",
    "choiceFour": "4.False",
    "correct": "1.Correct",
  },
  {
    "question": "Question 4",
    "choiceOne": "1.Correct",
    "choiceTwo": "2.False",
    "choiceThree": "3.False",
    "choiceFour": "4.False",
    "correct": "1.Correct",
  }
]

hideContainers();

function hideContainers() {
  questionContainer.classList.add('hide')
  completeContainer.classList.add('hide')
}

startBtn.addEventListener("click", startQuiz)

function startQuiz() {
  infoContainer.classList.add('hide')
  questionContainer.classList.remove('hide')
}

function showQuestions() {
  var q = quizQuestions[questionIndex];

  question.innerHTML = q.question;
  answerChoiceOne.innerHTML = q.choiceOne;
  answerChoiceOne.setAttribute("data-answer", q.choiceOne);
  answerChoiceTwo.innerHTML = q.choiceTwo;
  answerChoiceTwo.setAttribute("data-answer", q.choiceTwo);
  answerChoiceThree.innerHTML = q.choiceThree;
  answerChoiceThree.setAttribute("data-answer", q.choiceThree);
  answerChoiceFour.innerHTML = q.choiceFour;
  answerChoiceFour.setAttribute("data-answer", q.choiceFour);
}

showQuestions();
answerChoiceOne.addEventListener("click", event => {
  checkAnswer(event);
})
answerChoiceTwo.addEventListener("click", event => {
  checkAnswer(event);
})
answerChoiceThree.addEventListener("click", event => {
  checkAnswer(event);
})
answerChoiceFour.addEventListener("click", event => {
  checkAnswer(event);
})

function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (quizQuestions[questionIndex].correct === answer) {
    correctAnswer = answer;
  }

  if (answer === correctAnswer) {
    popUP.textContent = "Correct!"; // when correct, says correct
  } else {
    popUP.textContent = "Wrong! Try again"; // when wrong deducts 10 points
    if (wrong < 0) {
      wrong = 0;
    }
  }
  if (quizQuestions.length === questionIndex + 1) {
    showCompleteContainer();
    return;
  }
  questionIndex++;

  showQuestions();
}

function showCompleteContainer() {
  questionContainer.classList.add('hide')
  completeContainer.classList.remove('hide')
}
