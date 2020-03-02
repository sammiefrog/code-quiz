var questionCont = document.getElementById("question-content");

var answerOptions = document.getElementById("answer-options");

var timerEl = document.getElementById("timer-element");
var timeLeft = 60;

var questionNumber = 0;
var answerNumber = 0;

var scoreKeeper = document.getElementById("score");
var counter = 0;


// answerOptions.innerText = myQuestions[i].potentialAnswers[0];
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
        question: 'Which one of these ethnicities am I NOT?',
        potentialAnswers: ['Hungarian', 'Italian', 'German', 'Croatian'],
        correctAnswer: 'German'
    }

]


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

function clearOldAns () {
    answerOptions.innerHTML = "";
}

function checkAnswers (event) {

    var userSelect = event.target.textContent;

    var correctAnswer = myQuestions[questionNumber].correctAnswer

    if (userSelect === correctAnswer) {
        alert("Correct!");
        counter++;
        scoreKeeper.innerText = ("Score: " + counter);
        timeLeft += 10;
        questionNumber += 1;
        clearOldAns();
        // renderQuestions();


    }
    else {
        alert("Wrong!");
        timeLeft -= 10;
        questionNumber += 1;
        clearOldAns();
    }
    renderQuestions();

    console.log(counter);
}




function quizTimer() {

    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

quizTimer();
renderQuestions();


// pseudo code:
//first i need to grab the classes that i want to populate my questions into from the html - still deciding if i need a card for this or if i should just create li tags in a <ul> within a plain column
//second i need to figure out how to write a for loop to populate a question and four answers at the same time, while knowing which answer is correct
//the code needs to log the correct answer if it is selected, and add it to a 'score' section that i will also have to create
//create a score/points section that logs correct answers
//at the end of the quiz, i need to populate a high score page that keeps peoples names (input field) and the score they earned, and rates them against other people who have taken it, and stores the information
//WHILE all this is happening i need an interval timer in the corner counting down from 60, a correct answer will add ten second, and an incorrect answer will deduct 10 seconds.
//the quiz must end when the timer reaches 0, regardless of if all questions have been answered or not

//key research points: high score page (storing user scores with inputted names in the app), 
//keep functions at the top
//if timer is 0 then stop the function