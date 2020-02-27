var questionNum = document.querySelector(".question-number");
var questionCont = document.querySelector(".question-content");
var answerOne = document.querySelector(".answer-one");
var answerTwo = document.querySelector(".answer-two");
var answerThree = document.querySelector(".answer-three");
var answerFour = document.querySelector(".answer-four");


function renderQuestions () {

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
// question 1: "blah blah blah";

// answerA: "asdfg";
// answerB: "asdfgh";
// answerC: "keurgesjb";
// answerD: "mnbv";

// pseudo code:
//first i need to grab the classes that i want to populate my questions into from the html - still deciding if i need a card for this or if i should just create li tags in a <ul> within a plain column
//second i need to figure out how to write a for loop to populate a question and four answers at the same time, while knowing which answer is correct
//the code needs to log the correct answer if it is selected, and add it to a 'score' section that i will also have to create
//create a score/points section that logs correct answers
//at the end of the quiz, i need to populate a high score page that keeps peoples names (input field) and the score they earned, and rates them against other people who have taken it, and stores the information
//WHILE all this is happening i need an interval timer in the corner counting down from 60, a correct answer will add ten second, and an incorrect answer will deduct 10 seconds.
//the quiz must end when the timer reaches 0, regardless of if all questions have been answered or not

//key research points: high score page (storing user scores with inputted names in the app), 