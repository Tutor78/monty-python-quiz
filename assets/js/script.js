// variable containing the number of questions in the quiz
var quizLength = 2;

// variables that contain the elements of each part of the quiz
var questionEl = document.querySelector("#question");
var optionOneEl = document.querySelector("#option-one");
var optionTwoEl = document.querySelector("#option-two");
var optionThreeEl = document.querySelector("#option-three");
var optionFourEl = document.querySelector("#option-four");


// array containing all of the questions and possible answers
var questions = [
    {
        q: "What is the first rule of not being seen?",
        a: "Not standing up",
        o1: "Better camoflauge",
        o2: "Standing behind a bush",
        o3: "Staying deathly quiet"
    },
    {
        q: "Who is the wife of Biggus Dickus?",
        a: "Incontinentia Buttocks",
        o1: "Smallus titius",
        o2: "Larges tookus",
        o3: "Loudus Mouthus"
    },
    {
        q: "After purchasing a parrot that he believes is dead, the man returns to confront the shopkeep. What does the shopkeeper claim that the Parrot is pining for?",
        a: "The fjords",
        o1: "A cracker",
        o2: "A bit of fresh air",
        o3: "His homeland"
    },
    {
        q: "According to the Holy Book of Armaments what is the number that though shalt count to before tossing the Holy Hand Grenade of Antioch?",
        a: "Three",
        o1: "One",
        o2: "Two",
        o3: "Five"
    },
    {
        q: "When King Arthur and his knights are chased by a monster within a cave, how do they escape with their lives?",
        a: "The animator dies",
        o1: "They run out the way they came",
        o2: "They leave behind Sir Gallahad",
        o3: "They poke at it with the pointy bit of their swords"
    }];

for (var i = 0; i < quizLength; i++) {
    // variable to pick a random question from the array
    var questionAsked = questions[Math.floor(Math.random() * questions.length)];

    // variables to store random choices from the chosen question
    var optionChoice1 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice2 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice3 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
    var optionChoice4 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];

    // adding while loops and if statements to ensure there are no duplicate answers
    while (optionChoice1 === optionChoice2 || optionChoice1 === optionChoice3 || optionChoice1 === optionChoice4) {
        if (optionChoice1 === optionChoice2 || optionChoice1 === optionChoice3 || optionChoice1 === optionChoice4) {
            var optionChoice1 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice2 === optionChoice1 || optionChoice2 === optionChoice3 || optionChoice2 === optionChoice3) {
        if (optionChoice2 === optionChoice1 || optionChoice2 === optionChoice3 || optionChoice2 === optionChoice3) {
            optionChoice2 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice3 === optionChoice1 || optionChoice3 === optionChoice2 || optionChoice3 === optionChoice4) {
        if (optionChoice3 === optionChoice1 || optionChoice3 === optionChoice2 || optionChoice3 === optionChoice4) {
            optionChoice3 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    while (optionChoice4 === optionChoice1 || optionChoice4 === optionChoice2 || optionChoice4 === optionChoice3) {
        if (optionChoice4 === optionChoice1 || optionChoice4 === optionChoice2 || optionChoice4 === optionChoice3) {
            optionChoice4 = questionAsked[Object.keys(questionAsked)[Math.floor(Math.random() * (4 - 1 + 1) + 1)]];
        };
    };

    // setting the question to be displayed
    questionEl.textContent = questionAsked.q;

    // adding random choices to each option
    optionOneEl.textContent = optionChoice1;
    optionTwoEl.textContent = optionChoice2;
    optionThreeEl.textContent = optionChoice3;
    optionFourEl.textContent = optionChoice4;
};

