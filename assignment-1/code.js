// Global variables
const choiceButtons = document.querySelectorAll('.toy-choice-buttons button');
const interactiveButtons = document.querySelectorAll('.toy-interactive-buttons');

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
            currentValue = 0;
        else
            currentValue = currentValue++;
    else
        if (currentValue > 5)
            currentValue = 0;
        else
            currentValue = currentValue++;
}

function changeChoice(buttonPressed) {
    switch(buttonPressed) {
        case 0: setNewChoice(buttonPressed, choice1); break;
        case 1: setNewChoice(buttonPressed, choice2); break;
        case 2: setNewChoice(buttonPressed, choice3); break;
        case 3: setNewChoice(buttonPressed, choice4); break;
        case 4: setNewChoice(buttonPressed, choice5); break;
    }
}

// Runs all neccesary functions for choice buttons to work
function runFunctions(buttonPressed) {
    changeChoice(buttonPressed);
}

// Plays a random story
function playRandomStory() {
    // to do
}

// Plays chosen story
function playChosenStory() {
    if (choice1 !== 0 && choice2 !== 0 && choice3 !== 0 && choice4 !== 0 && choice5 !== 0)
        console.log("a");
    else
        ; // display a message requesting choices
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