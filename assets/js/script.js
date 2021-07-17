// variable containing the number of questions in the quiz and the question number
var quizLength = 4;
var questionNumber = 1;

// variable to hold the score and highscore
var score = 0;
var highscore = 0;

// variables that contain the elements of each part of the quiz
var titleEl = document.querySelector("#title");
var questionEl = document.querySelector("#question");
var optionOneEl = document.querySelector("#option-one");
var optionTwoEl = document.querySelector("#option-two");
var optionThreeEl = document.querySelector("#option-three");
var optionFourEl = document.querySelector("#option-four");

// variables that allow to check which answer is chosen
var choiceOneEl = document.querySelector("#choice-one");
var choiceTwoEl = document.querySelector("#choice-two");
var choiceThreeEl = document.querySelector("#choice-three");
var choiceFourEl = document.querySelector("#choice-four");

// variable to target the submit button
var submitEl = document.querySelector("#submit");

// array containing all of the questions and possible answers
var questions = [
    {
        q: "What is the first rule of not being seen?",
        a: "Not standing up",
        o1: "Better camoflauge",
        o2: "Standing behind a bush",
        o3: "Staying deathly quiet",
        title: "Flying Circus",
        id: 0
    },
    {
        q: "Who is the wife of Biggus Dickus?",
        a: "Incontinentia Buttocks",
        o1: "Smallus titius",
        o2: "Larges tookus",
        o3: "Loudus Mouthus",
        title: "Life of Brian",
        id: 1
    },
    {
        q: "After purchasing a parrot that he believes is dead, the man returns to confront the shopkeep. What does the shopkeeper claim that the Parrot is pining for?",
        a: "The fjords",
        o1: "A cracker",
        o2: "A bit of fresh air",
        o3: "His homeland",
        title: "Flying Circus",
        id: 2
    },
    {
        q: "According to the Holy Book of Armaments what is the number that though shalt count to before tossing the Holy Hand Grenade of Antioch?",
        a: "Three",
        o1: "One",
        o2: "Two",
        o3: "Five",
        title: "The Search for the Holy Grail",
        id: 3
    },
    {
        q: "When King Arthur and his knights are chased by a monster within a cave, how do they escape with their lives?",
        a: "The animator dies",
        o1: "They run out the way they came",
        o2: "They leave behind Sir Gallahad",
        o3: "They poke at it with the pointy bit of their swords",
        title: "The Search for the Holy Grail",
        id: 4
    }];

// variable to pick a random question from the array
var questionAsked = questions[Math.floor(Math.random() * questions.length)];

// function to choose a question that has not been asked
var generateQuestion = function() {
    // retrieves the quizId array from localStorage
    var existingQuizId = JSON.parse(localStorage.getItem("quizId"));
    
    // checks to see if the array in localStorage exists and if not creates it
    if (existingQuizId == null) {
        existingQuizId = [];
        localStorage.setItem("quizId", existingQuizId);
    };

    // checks to see if the question has been asked before and if it has generates another one
    for ( var i = 0; i < existingQuizId.length; i++) {
        while (questionAsked.id == existingQuizId[i]) {
            if (questionAsked.id == existingQuizId[i]) {
                questionAsked = questions[Math.floor(Math.random() * questions.length)];
            } else {
                return questionAsked;
            };
        };
    };

    // generates the options based on the question that is asked
    generateOptions(questionAsked);

    // appends the id of the current question to and pushes it to localStorage
    quizId = questionAsked.id
    existingQuizId.push(quizId);
    localStorage.setItem("quizId", JSON.stringify(existingQuizId));
};

// a function to generate each questions with variety in the options
var generateOptions = function (questionOptions) {
    // variables to store random choices from the chosen question
    var optionChoice1 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice2 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice3 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice4 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];

    // adding while loops and if statements to ensure there are no duplicate answers
    while (optionChoice1 === optionChoice2 || optionChoice1 === optionChoice3 || optionChoice1 === optionChoice4) {
        if (optionChoice1 === optionChoice2 || optionChoice1 === optionChoice3 || optionChoice1 === optionChoice4) {
            optionChoice1 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice2 === optionChoice1 || optionChoice2 === optionChoice3 || optionChoice2 === optionChoice3) {
        if (optionChoice2 === optionChoice1 || optionChoice2 === optionChoice3 || optionChoice2 === optionChoice3) {
            optionChoice2 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice3 === optionChoice1 || optionChoice3 === optionChoice2 || optionChoice3 === optionChoice4) {
        if (optionChoice3 === optionChoice1 || optionChoice3 === optionChoice2 || optionChoice3 === optionChoice4) {
            optionChoice3 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice4 === optionChoice1 || optionChoice4 === optionChoice2 || optionChoice4 === optionChoice3) {
        if (optionChoice4 === optionChoice1 || optionChoice4 === optionChoice2 || optionChoice4 === optionChoice3) {
            optionChoice4 = questionOptions[Object.keys(questionOptions)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    // setting the question to be displayed and the corresponding title
    titleEl.textContent = questionOptions.title;
    questionEl.textContent = questionOptions.q;

    // adding random choices to each option
    optionOneEl.textContent = optionChoice1;
    optionTwoEl.textContent = optionChoice2;
    optionThreeEl.textContent = optionChoice3;
    optionFourEl.textContent = optionChoice4;
};

// function to add to and set score
var increaseScore = function() {
    score = localStorage.getItem("score");
    score++;
    localStorage.setItem("score", score);
};

// function to reset the quiz numbers
var resetQuiz = function() {
    questionNumber = 0;
    localStorage.setItem("questionNumber", questionNumber);
    existingQuizId = [];
    localStorage.setItem("quizId", JSON.stringify(existingQuizId));
    score = 0;
    localStorage.setItem("score", score);
};

// main function that runs the quiz
var main = function() {
    // gets the question number from local storage
    questionNumber = localStorage.getItem("questionNumber");
    score = localStorage.getItem("score");

    // checks to see if the questionNumber variable is less than the quiz length
    if (questionNumber < quizLength) {
        // generates the question that is displayed on screen
        generateQuestion();

        submitEl.addEventListener("click", function() {

            // checks to see which option has been chosen and compares it to the answer of the question
            if (choiceOneEl.checked === true && optionOneEl.textContent === questionAsked.a) {
                alert("That is correct");
                increaseScore();
            } else if (choiceTwoEl.checked === true && optionTwoEl.textContent === questionAsked.a) {
                alert("That is correct");
                increaseScore();
            } else if (choiceThreeEl.checked === true && optionThreeEl.textContent === questionAsked.a) {
                alert("That is correct");
                increaseScore();
            } else if (choiceFourEl.checked === true && optionFourEl.textContent === questionAsked.a) {
                alert("That is correct");
                increaseScore();
            } else {
                alert("That is wrong");
            };

            console.log(score);

            // increments and sets the questionNumber variable to localStorage
            questionNumber = localStorage.getItem("questionNumber");
            questionNumber++;
            localStorage.setItem("questionNumber", questionNumber);
        });
    // after the number of questions reaches the quiz length it asks if the player would like to play again
    } else {
        score = localStorage.getItem("score");
        highscore = localStorage.getItem("highscore");

        if (score > highscore) {
            highscore = score;
            localStorage.setItem("highscore", highscore);
            alert("New highscore of " + highscore + " out of " + quizLength + "!");
        }

        alert("Game Over! Your score is " + score + " out of " + quizLength + "!");
        alert("The current highscore is " + highscore + " out of " + quizLength + " correct!");
        var playAgain = confirm("Would you like to play again?");
        // if the player chooses to play again it resets the quiz and runs the main function again
        if (playAgain) {
            resetQuiz();
            main();
        }
    };
};

// runs the quiz
main();