// variable containing the number of questions in the quiz and the question number
var quizLength = 10;
var questionNumber = 1;

// variable to store a session key for the timer
var timeLeft = 'timeLeft';

// variable to hold the time left in the quiz
var elapsedTime;

// variable to hold the score and highscore
var score = 0;
var highscore = 0;

// variable to hold the timer
var timerEl = document.querySelector("#timer");

// variable to display feedback
var feedbackEl = document.querySelector("#feedback");

// variable to change the look of the main section and header at the end of the quiz
var mainEl = document.getElementById("#main");

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
        a: "The number which is Three",
        o1: "Maybe it could be One",
        o2: "Possibly the answer is Two",
        o3: "It could even be Five",
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
    },
    {
        q: "While attempting to purchase cheese, the shopkeeper claims that it is the cleanest in the area. Why?",
        a: "It is uncontanimated with cheese",
        o1: "His pet cats take care of any pests",
        o2: "The shopkeep does a daily walk around",
        o3: "The local bobby keeps the riff raff away",
        title: "Flying Circus",
        id: 5
    },
    {
        q: "What is the basis for which the peasants claim that a woman is a witch?",
        a: "She turned one into a newt",
        o1: "She is dressed like one",
        o2: "She smells like one",
        o3: "She has a wart",
        title: "The Search for the Holy Grail",
        id: 6
    },
    {
        q: "What is the name of the enchanter that King Arthur and his knights happen upon during their travels?",
        a: "Tim",
        o1: "Steve",
        o2: "Chuck",
        o3: "Merlin",
        title: "The Search for the Holy Grail",
        id: 7
    },
    {
        q: "What does one not expect?",
        a: "The Spanish Inquisition",
        o1: "A surprise birthday party",
        o2: "A choir standing outside ones home",
        o3: "A jolly fat man getting stuck in the chimney",
        title: "Flying Circus",
        id: 8
    },
    {
        q: "While hanging on the cross what should one be thinking?",
        a: "To always look on the brightside of life",
        o1: "To always look on the darkside of life",
        o2: "To contemplate one's choices that led to this predicament",
        o3: "Nothing because soon you'll be lifeless",
        title: "Life of Brian",
        id: 9
    },
    {
        q: "While looking for the correct room for an argument, what room does the fellow stumble into first?",
        a: "Abuse",
        o1: "Prop acting",
        o2: "Sleeping on things",
        o3: "Marriage Counseling",
        title: "Flying Circus",
        id: 10
    },
    {
        q: "What branch of the Royal Society for Putting Things on Top of Other Things finds the whole thing a bit silly",
        a: "Staffordshire",
        o1: "London",
        o2: "France",
        o3: "Australasia",
        title: "Flying Circus",
        id: 11
    },
    {
        q: "What is it that the Knights who say Ni require for passage?",
        a: "A shrubbery",
        o1: "A strong beverage",
        o2: "Two fishes",
        o3: "The holy grail",
        title: "The Search for the Holy Grail",
        id: 12
    },
    {
        q: "During delivery of the baby there is something missing. What is it?",
        a: "The patient",
        o1: "The machine that goes bing",
        o2: "The most expensive machines",
        o3: "The doctors",
        title: "The Meaning of Life",
        id: 13
    },
    {
        q: "When life gets you down what should be the one thing you remember?",
        a: "Your insignificance",
        o1: "That life isn't too bad",
        o2: "There will always be something worse",
        o3: "That the universe is massive",
        title: "The Meaning of Life",
        id: 14
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
    feedbackEl.textContent = "";
    localStorage.setItem("feedback", feedbackEl.textContent);
    window.sessionStorage.removeItem(timeLeft);
    main();
};

var timer = function(i, callback) {  
    //callback = callback || function(){};
    timer = setInterval(function() {
        minutes = parseInt(i / 60, 10);
        seconds = parseInt(i % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerEl.innerHTML = "Time Remaining: " + minutes + ":" + seconds;
        
        if ((i--) > 0) {
            window.sessionStorage.setItem(timeLeft, i);
        } else {
            window.sessionStorage.removeItem(timeLeft);
            clearInterval(timer);
            callback();
            }
    }, 1000);
}


// main function that runs the quiz
var main = function() {
    // gets the question number from local storage
    questionNumber = localStorage.getItem("questionNumber");
    score = localStorage.getItem("score");

    window.onload = function() {
        var countDownTime = window.sessionStorage.getItem(timeLeft) || 1800;
        timer(countDownTime, function() {
            timerEl.textContent = countDownTime;
        });
        elapsedTime = countDownTime;
    };


    // checks to see if the questionNumber variable is less than the quiz length
    if (questionNumber < quizLength || elapsedTime > 0) {
        // displays the feedback from the previous question
        var feedback = localStorage.getItem("feedback");
        feedbackEl.textContent = feedback;

        // generates the question that is displayed on screen
        generateQuestion();

        submitEl.addEventListener("click", function() {

            // checks to see which option has been chosen and compares it to the answer of the question
            if (choiceOneEl.checked === true && optionOneEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "You are correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else if (choiceTwoEl.checked === true && optionTwoEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "You are correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else if (choiceThreeEl.checked === true && optionThreeEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "You are correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else if (choiceFourEl.checked === true && optionFourEl.textContent === questionAsked.a) {
                feedbackEl.textContent = "You are correct!"
                localStorage.setItem("feedback", feedbackEl.textContent);
                increaseScore();
            } else {
                feedbackEl.textContent = "You are horribly terribly wrong!"
                localStorage.setItem("feedback", feedbackEl.textContent);
            };

            console.log(score);

            // increments and sets the questionNumber variable to localStorage
            questionNumber = localStorage.getItem("questionNumber");
            questionNumber++;
            localStorage.setItem("questionNumber", questionNumber);

        });
    // after the number of questions reaches the quiz length it asks if the player would like to play again
    } else {
        // retrieves the score and highscore
        score = localStorage.getItem("score");
        highscore = localStorage.getItem("highscore");
        var playerName;

        // changes the html of the main element to display different information
        mainEl.innerHTML = "<div><h2 id='congrats'>Congratulations</h2></div><div><h3 id='score'></h3></div><div><h3 id='highscore'></h3></div><button type=submit id='play-again'>Play Again?</button>";

        // variable to select the new elements in the html
        var highscoreEl = document.querySelector("#highscore");
        var scoreEl = document.querySelector("#score");
        var playAgainEl = document.querySelector("#play-again");        

        // if the current score is higher than the highscore it changes the highscore to match the score
        if (score > highscore) {
            highscore = score;
            localStorage.setItem("highscore", highscore);
            playerName = prompt("What is your name so that you may be stored in the archives?");
            localStorage.setItem("playerName", playerName);
        };

        playerName = localStorage.getItem("playerName");

        // displays the score and highscore of previous quizzes
        scoreEl.textContent = "You got " + score + " out of " + quizLength + " correct!";
        highscoreEl.textContent = playerName + " holds the highscore of " + highscore + " out of " + quizLength + "!";

        // places a listener on the play again button which resets the quiz
        playAgainEl.addEventListener("click", function() {
            resetQuiz();
            window.location.reload();
        });
    };
};

// runs the quiz
main();