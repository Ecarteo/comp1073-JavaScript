// Global variables
const buttons = document.querySelectorAll('.toy-choice-buttons button');

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
function changeChoice(buttonPressed) {
    switch(index) {
        case 0:
            choice1 = 1;
            break;
        case 1:
            choice2 = 2;
            break;
        case 2:
            choice3 = 3;
            break;
        case 3:
            choice4 = 4;
            break;
        case 4:
            choice5 = 5;
            break;
    }
}

function runFunctions(buttonPressed) {
    changeChoice(buttonPressed);
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        switch(index) {
            case 0:
                
                break;
            case 1:
                
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            case 4:
                
                break;
        }
    });
});