// Global variables
const choiceButtons = document.querySelectorAll('.toy-choice-buttons button');
const interactiveButtons = document.querySelectorAll('.toy-interactive-buttons button');

// Arrays
const group1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]
const group2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"]
const group3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"]
const group4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"]
const group5 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
const choices = [group1, group2, group3, group4, group5];

// Choices
let choice1 = 0;
let choice2 = 0;
let choice3 = 0;
let choice4 = 0;
let choice5 = 0;

// Functions
// This system allows the buttons to recycle through the options
function setNewChoice(buttonPressed, currentValue) {
    if (buttonPressed === 0 || buttonPressed === 3)
        if (currentValue > 6)
            return 1;
        else
            return currentValue + 1;
    else
        if (currentValue > 5)
            return 1;
        else
            return currentValue + 1;
}

function changeChoice(buttonPressed) {
    switch(buttonPressed) {
        case 0: choice1 = setNewChoice(buttonPressed, choice1); break;
        case 1: choice2 = setNewChoice(buttonPressed, choice2); break;
        case 2: choice3 = setNewChoice(buttonPressed, choice3); break;
        case 3: choice4 = setNewChoice(buttonPressed, choice4); break;
        case 4: choice5 = setNewChoice(buttonPressed, choice5); break;
    }
}

// Runs all neccesary functions for choice buttons to work
function runFunctions(buttonPressed) {
    changeChoice(buttonPressed);
}

// Playback Button Handler
function playChosenStory() {
    if (choice1 !== 0 && choice2 !== 0 && choice3 !== 0 && choice4 !== 0 && choice5 !== 0)
        console.log(choices[0][choice1 - 1], choices[1][choice2 - 1], choices[2][choice3 - 1], choices[3][choice4 - 1], choices[4][choice5 - 1]);
    else
        ; // display a message requesting choices
}

// Surprise Button Handler
function playRandomStory() {
    for (let i = 0; i < 5; i++) { // code runs for each button
        let randomTimes = Math.floor(Math.random() * 6) + 1; // randomizer
        for (let j = 0; j < randomTimes; j++) {
            runFunctions(i); // simulate random button clicks
        }
    }
    playChosenStory(); // play the random story naturally
}

// Interactive Buttons Handler
interactiveButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        switch(index) {
            case 0: // SURPRISE BUTTON
                playRandomStory()
                break;
            case 1: // PLAYBACK BUTTON
                playChosenStory()
                break;
        }
    });
});

// Choice Buttons Handler
choiceButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        runFunctions(index);
    });
});