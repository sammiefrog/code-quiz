var questionCont = document.getElementById("question-content");

var answerOptions = document.getElementById("answer-options");


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
    }
]


// function renderQuestions () {
    questionCont.innerHTML = myQuestions[0].question;


    for (var i=0; i < 4; i++) {
        var btn = document.createElement("button");
        btn.innerText = myQuestions[0].potentialAnswers[i];
        btn.setAttribute("data-index", [i]);
        btn.setAttribute('class', 'btn btn-success btn-block');
        answerOptions.appendChild(btn);

        btn.addEventListener("click", checkAnswers);
    }



// }

// renderQuestions();

function checkAnswers (event) {

    var userSelect = event.target.textContent;

    var correctAnswer = myQuestions[0].correctAnswer;

    if (userSelect === correctAnswer) {
        alert("Correct!");
    }
    else {
        alert("Wrong!");
    }
    console.log(correctAnswer);
}




function quizTimer() {
    var timeLeft = 60;
    var timerEl = document.getElementById("timer-element");

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