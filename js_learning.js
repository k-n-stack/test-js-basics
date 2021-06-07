/**
 * algo 1
 * lo-hi game
 * 
 * 
 * 
 * 
 */

const button01 = document.querySelector("#button-algo-01");
const input01 = document.querySelector("#input-algo-01");
const output01 = document.querySelector("#output-algo-01");

// choose a random integer number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100 + 1);
let round = 0;

/**
 * return output phrase depending on user input
 * @param {*} guessNumber 
 * @returns 
 */
function output_function_01(guessNumber) {

    intNumber = parseInt(guessNumber);
    console.log(intNumber);

    if(isNaN(intNumber)) {
        return "Please, enter a valid value";
    }
    if(intNumber > randomNumber) {
        ++round;
        return "round " + round + ": " + "The number provided is too high";
    }
    if(intNumber < randomNumber) {
        ++round;
        return "round " + round + ": " + "The number provided is too low";
    }
    if(intNumber == randomNumber) {
        ++round;
        return "round " + round + ": " + "Congratulation, you found the number";
    }
}

/**
 * handle event when the user click on the button
 * @param {*} event 
 */
function btn01_onClick(event) {
    // prevent page redirection when user click on button.
    event.preventDefault();
    // testing the user input
    output01.textContent = output_function_01(input01.value);
}

// when user click on button ...
button01.addEventListener('click', btn01_onClick);


/**
 * algo 2
 * sum of all positive int below a number provided by user
 * 
 * 
 * 
 * 
 */

const button02 = document.querySelector("#button-algo-02");
const input02 = document.querySelector("#input-algo-02");
const output02 = document.querySelector("#output-algo-02");

/**
 * return the sum of all int below argument
 * @param {*} number 
 * @returns 
 */
function sum(number) {

    let sum = 0;

    for(let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

/**
 * return string of the sum
 * @param {*} number 
 * @returns 
 */
function printSum(number) {

    let intList = [];

    for(let i = 1; i <= number; i++) {
        intList.push(i);
    }

    return intList.join(" + ");
}

/**
 * return output phrase depending on user input
 * @param {*} number 
 * @returns 
 */
function output_function_02(number) {

    intNumber = parseInt(number);
    console.log(intNumber);

    if(isNaN(intNumber)) {
        return "Please, provide a valid value";
    }
    if(intNumber > 100) {
        return "Please, provide a valid value";
    }
    if(intNumber < 1) {
        return "Please, provide a valid value";
    }
    return printSum(number) + " = " + sum(number);
}

/**
 * handle event when the user click on the button
 * @param {*} event 
 */
function btn02_onClick(event) {
    event.preventDefault();
    output02.textContent = output_function_02(input02.value);
}

button02.addEventListener('click', btn02_onClick);

/**
 * algo 03
 * Ask user to enter 20 number
 * When user provided 20 number, print the higher number
 * 
 * 
 * 
 * 
 * 
 */

var field = document.createElement('input');