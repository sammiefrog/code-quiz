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

//High scores 
// var scoreKept = [];
const savedArray = JSON.parse(localStorage.getItem("high-scores")) || [];

// var savedArray = JSON.parse(localStorage.getItem("high-scores"));


// if (localStorage.getItem("high-scores") == null) {
//     localStorage.setItem("high-scores", "no scores yet"); 
//     var savedArray = JSON.parse(localStorage["high-scores"])
    // JSON.parse(localStorage.getItem("high-scores"));
// }
// else {
//     var savedArray = JSON.parse(localStorage["high-scores"]);
// }

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
        timeLeft += 10;
    }

    else {
        alert("Wrong!");
        timeLeft -= 10;
    }

    questionNumber ++;
    scoreKeeper.innerHTML = ("Score: " + counter);
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

    var inputField = document.createElement("input");
    inputField.setAttribute("class", "form-control");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "userInput");
    inputField.setAttribute("placeholder", "Enter your name here");
    
    questionCont.appendChild(inputField);

    answerOptions.innerHTML = " ";
    scoreKeeper.innerText = " ";

    var btnTwo = document.createElement("button");
    btnTwo.innerText = "See High Scores!";
    btnTwo.setAttribute('class', 'btn btn-success btn-block');
    answerOptions.appendChild(btnTwo);

    clearInterval(timeInterval);
    timerEl.textContent = "";

    // btnTwo.addEventListener("click", highScores);
    btnTwo.addEventListener("click", () => {
        // scoreKept.push(counter);
        savedArray.push(counter);


        var userNameVal = document.getElementById("userInput").value;
        // scoreKept.push(userNameVal);
        savedArray.push(userNameVal);


        alert(userNameVal);

        highScores();
      });

    function highScores () {

        questionCont.innerHTML = "";
        answerOptions.innerHTML = "";
        // localStorage["savedArray"] = JSON.stringify(savedArray);
        // localStorage.setItem("high-scores", JSON.stringify(savedArray));
        localStorage.setItem("high-scores", JSON.stringify(savedArray));

        questionCont.innerText = "High Scores: ";

        var scoreList = document.createElement('ul');
        answerOptions.appendChild(scoreList);

        for(var i=0; i < savedArray.length; i++) {
            var allTheScores = document.createElement('li');
            allTheScores.innerText = (savedArray[i]);
            scoreList.appendChild(allTheScores);
        }
    
    }
    console.log(localStorage); 
    console.log(savedArray);
}





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

