// Submit Buttons
var startButton = document.getElementById('start_button')
var backButton = document.getElementById('back_button')
var clearHsButton = document.getElementById('clear_highscores_button')
var submitInitials = document.getElementById('submit_initials')

//Containers
var infoContainer = document.getElementById('info_container')
var questionContainer = document.getElementById('question_container')
var initialContainer = document.getElementById('initials_container')
var highscoreContainer = document.getElementById('highscore_container')

//Choice Buttons 
var questionInsert = document.getElementById('question_insert')
var choice1 = document.getElementById('choice_1')
var choice2 = document.getElementById('choice_2')
var choice3 = document.getElementById('choice_3')
var choice4 = document.getElementById('choice_4')

//EventListeners
startButton.addEventListener('click', startGame)

//Funtctions
function startGame(){
    console.log('Start Button Clicked')
    infoContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion();
}

function nextQuestion() {
    console.log('Next function running');
    // for (var i = 0; i < questions.length; i++) {
    //     console.log(questions[i]);
    // }
    choice1.innerHTML = questions[0].choices[0].text;
    choice2.innerHTML = questions[0].choices[1].text;
    choice3.innerHTML = questions[0].choices[2].text;
    choice4.innerHTML = questions[0].choices[3].text;

    if (choice1.onclick){
        console.log(true);
    } else {
        console.log(false);
    }

}

// function answerSelect() {
//     if (answer chosen === true){
//         nextQuestion
//     } else if (end of loop){
//         initialContainer.classList
//     }

// }

//Questions
var questions = [
    //console.log(questions[0]);
    {
        question: 'INSERT QUESTION 1',
        choices: [
            {text: 'INSERT CHOICE 1', correct: true},
            {text: 'INSERT CHOICE 2', correct: false},
            {text: 'INSERT CHOICE 3', correct: false},
            {text: 'INSERT CHOICE 4', correct: false},
        ]

    },
    //console.log(questions[1]);
    {
        question: 'INSERT QUESTION 2',
        choices: [
            {text: 'INSERT CHOICE 1', correct: true},
            {text: 'INSERT CHOICE 2', correct: false},
            {text: 'INSERT CHOICE 3', correct: false},
            {text: 'INSERT CHOICE 4', correct: false},
        ]

    },
    //console.log(questions[2]);
    {
        question: 'INSERT QUESTION 3',
        choices: [
            {text: 'INSERT CHOICE 1', correct: true},
            {text: 'INSERT CHOICE 2', correct: false},
            {text: 'INSERT CHOICE 3', correct: false},
            {text: 'INSERT CHOICE 4', correct: false},
        ]

    },
    //console.log(questions[3]);
    {
        question: 'INSERT QUESTION 4',
        choices: [
            {text: 'INSERT CHOICE 1', correct: true},
            {text: 'INSERT CHOICE 2', correct: false},
            {text: 'INSERT CHOICE 3', correct: false},
            {text: 'INSERT CHOICE 4', correct: false},
        ]

    },
]

//Things to do
/*
> if button chosn === true THEN move onto next question
> Once all questions have been answered SHOW initials 'page' THEN 
submit to LocalStorage AND show hihgscores

> Timer ... 
IF time runs out GAME OVER -> SHOW initials page -> highscore page
subtract 5s if button chosen === false  

> Score ...
Keep track of score
subtract if needed

> Currently figuring out
How to insert questions array into Questions Container buttons

*/
























