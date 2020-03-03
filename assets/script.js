//Global variables
var questionCont = document.getElementById("question-content");
var answerOptions = document.getElementById("answer-options");

//timer
var timerEl = document.getElementById("timer-element");
var timeInterval;
var timeLeft = 60;

//I use this to move through questions
var questionNumber = 0;

//score keeper
var scoreKeeper = document.getElementById("score");
var counter = 0;

//High scores / storage
var highScores = localStorage.getItem("high-scores");
var scoreKept = [];

//My questions for the quiz as an object
var myQuestions = [
    {
        question: 'Where was I born?',
        potentialAnswers: ['Evanston, IL', 'Milwaukee, WI', 'Gary, IN', 'Park Ridge, IL'],
        correctAnswer: 'Evanston, IL'
    },
    {
        question: 'Where did I get my Bachelors Degreee?',
        potentialAnswers: ['DePaul University', 'Roosevelt University', 'Vanderbilt University', 'Illinois State University'],
        correctAnswer: 'Roosevelt University'
    },
    {
        question: 'What is my favorite animal?',
        potentialAnswers: ['Red Panda', 'Sloth', 'Bearded Lizard', 'Frog'],
        correctAnswer: 'Frog'
    },
    {
        question: 'What pet do I have?',
        potentialAnswers: ['A frog named Teddy', 'A ferret named Foxy', 'A cat named Bobbie', 'A dog named Rufus'],
        correctAnswer: 'A cat named Bobbie'
    },
    {
        question: 'Which one of these nationalities am I NOT?',
        potentialAnswers: ['Hungarian', 'Italian', 'German', 'Croatian'],
        correctAnswer: 'German'
    }

]

//This puts the question and answers on the page as buttons
function renderQuestions () {

    questionCont.innerHTML = myQuestions[questionNumber].question;


    for (var i=0; i < myQuestions[questionNumber].potentialAnswers.length; i++) {
        var btn = document.createElement("button");
        btn.innerText = myQuestions[questionNumber].potentialAnswers[i];
        btn.setAttribute('class', 'btn btn-success btn-block');
        answerOptions.appendChild(btn);
        btn.addEventListener("click", checkAnswers);
    }


}

//Compares users selected answer with the correct answer then moves to the next question by calling the render questions function again and adding 1 to the questionNumber variable
function checkAnswers (event) {

    var userSelect = event.target.textContent;

    var correctAnswer = myQuestions[questionNumber].correctAnswer

    if (userSelect === correctAnswer) {
        alert("Correct!");
        counter++;
        scoreKeeper.innerText = ("Score: " + counter);
        timeLeft += 10;
    }

    else {
        alert("Wrong!");
        timeLeft -= 10;
    }

    questionNumber ++;

    questionCont.innerHTML = "";
    answerOptions.innerHTML = "";

    if (questionNumber > 4) {
        endGame();
    }
    else{
        renderQuestions();
    }


}

function endGame() {

    questionCont.innerHTML = ("You scored " + counter + " points!");

    var userName = document.createElement("input");
    // var userBtn = document.createElement("button");
    userName.setAttribute("type", "text");
    userName.setAttribute("placeholder", "Enter your name here");
    // userBtn.innerText = "Submit";
    
    questionCont.appendChild(userName);
    // questionCont.appendChild(userBtn);

    answerOptions.innerHTML = " ";
    scoreKeeper.innerText = " ";

    var btnTwo = document.createElement("button");
    btnTwo.innerText = "See High Scores!";
    btnTwo.setAttribute('class', 'btn btn-success btn-block');
    answerOptions.appendChild(btnTwo);

    clearInterval(timeInterval);
    timerEl.textContent = "";

    btnTwo.addEventListener("click", highScores);

    function highScores () {
    
        questionCont.innerHTML = "";
        answerOptions.innerHTML = "";

        localStorage.setItem("high-scores", JSON.stringify(counter));
        localStorage.setItem("high-scores", counter);
        scoreKept.push(counter);
    
    }

}

console.log(localStorage); 



//Quiz timer that starts when page opens, and gets time added or subtracted with correct or incorrect answers
function quizTimer() {

    timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        // timerEl.textContent = "";
        // clearInterval(timeInterval);
        endGame();
      }

    }, 1000);


}

//Calls the timer and the first question to pop up right when the page opens
renderQuestions();

quizTimer();

