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

console.log("algo01 answer : " + randomNumber);

/**
 * return output phrase depending on user input
 * @param {*} guessNumber 
 * @returns 
 */
function output_function_01(guessNumber) {

    intNumber = parseInt(guessNumber);

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

const input03 = document.querySelector('#input-algo-03');
const button03 = document.querySelector('#button-algo-03');
const list03 = document.querySelector('#list-algo-03');
const output03 = document.querySelector('#output-algo-03');

const numberCount03 = 10;

let numberNumber03 = 1;
let numberArray03 = [];

/**
 * return value depending on user input
 * @param {*} number 
 * @returns 
 */
function output_function_03(number) {

    intNumber = parseInt(number);

    if(isNaN(intNumber)) {
        return "Please, enter a valid value.";
    }
    return intNumber;
}

/**
 * handle event when user click on button
 * @param {*} event 
 */
function click_function_03(event) {

    event.preventDefault();

    intNumber = parseInt(input03.value);
    
    let li_tag = document.createElement('li');
    let li_text = document.createTextNode(output_function_03(input03.value));
    li_tag.appendChild(li_text);

    if(!isNaN(intNumber)) {
        list03.appendChild(li_tag);
        numberArray03.push(intNumber);
        ++numberNumber03;
    } else {
        output03.textContent = output_function_03(input03.value);
    }

    if(numberNumber03 > numberCount03) {
        output03.textContent = "You entered 10 number. Your highest number is : " + Math.max(...numberArray03);
        button03.parentElement.removeChild(button03);
        input03.parentElement.removeChild(input03);
    }

}

button03.addEventListener('click', click_function_03);

/**
 * algo 5
 * The user provide 5 numbers
 * After user input, the list of number will be sorted ascending
 * 
 * 
 * 
 * 
 * 
 */

const input04 = document.querySelector('#input-algo-04');
const button04 = document.querySelector('#button-algo-04');
const list04 = document.querySelector('#list-algo-04');
const output04 = document.querySelector('#output-algo-04');

let numberArray = [];
 
 /**
  * return value depending on user input
  * @param {*} number 
  * @returns 
  */
function output_function_04(number) {

    intNumber = parseInt(number);

    if(isNaN(intNumber)) {
        return "Please, enter a valid value.";
    }
    return intNumber;
}
 
function printListAsc(array) {

    // sort array in ascending order
    sortedArray = array.sort(function(a, b) {
        return a - b;
    });

    array.forEach(function(value) {
        let li_tag = document.createElement('li');
        let li_text = document.createTextNode(value);
        li_tag.appendChild(li_text);
        list04.appendChild(li_tag);
    });
}

 /**
  * handle event when user click on button
  * @param {*} event 
  */
function click_function_04(event) {

    event.preventDefault();

    intNumber = parseInt(input04.value);
    
    let li_tag = document.createElement('li');
    let li_text = document.createTextNode(output_function_04(input04.value));
    li_tag.appendChild(li_text);

    if(!isNaN(intNumber)) {
        list04.appendChild(li_tag);
        numberArray.push(intNumber);
        console.log(numberArray);
        console.log(numberArray.sort(function(a, b) {
            return a - b;
        }));
    } else {
        output04.textContent = output_function_04(input04.value);
    }

    if(parseInt(input04.value) == 0) {
        output04.textContent = "You entered value 0, now sorting the list in ascending order.";
        list04.querySelectorAll('*').forEach(n => n.remove());
        printListAsc(numberArray);
        button04.parentElement.removeChild(button04);
        input04.parentElement.removeChild(input04);
    }

}

button04.addEventListener('click', click_function_04);

/**
 * algo 05
 * When user input text in field, background div will change color
 * 
 */

const input05 = document.querySelector('#input-algo-05');
const div05 = document.getElementById('div-algo-05');

function input_function_05(event) {
    let colorModifier = (input05.value.length < 10) ? Math.floor((input05.value.length * 254) / 10) : 254;
    console.log(colorModifier);
    div05.style.backgroundColor = `rgb(255, ${colorModifier}, 255)`;
}

input05.addEventListener('input', input_function_05);

/**
 * algo 06
 * User enter a number.
 * This Script will test id provided number is Prime or not.
 * 
 * 
 */

const input06 = document.querySelector('#input-algo-06');
const button06 = document.querySelector('#button-algo-06');
const output06 = document.querySelector('#output-algo-06');

function click_function_06(number) {
    if(!isNaN(parseInt(number))) {
        return "Please, enter a valid value.";
    }
    if(parseInt(number) < 2) {
        return "Please, enter a valid value.";
    }
    return parseInt(number);
}

function isPrime(number) {
    let isPrime = true;
    for(let i = 2; i < number; ++i) {
        if(number % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

function btn06_onClick(event) {
    event.preventDefault();
    output06.textContent = click_function_06(input06.value);
}

button06.addEventListener('click', btn06_onClick);