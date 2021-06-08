/**
 * object litteral
 */

const person = {};

console.log(person);

const person2 = {

    name: ['john', 'doe'],
    age: 23,
    gender: "male",

    greetings: function() {
        alert(`Hello, my name is ${this.name}. I'm ${this.age} years old`);
    }

}

console.log(person2);
console.log(person2.name);
console.log(person2.age);
console.log(person2.gender);
console.log(person2.greetings);
console.log(person2.greetings());

/**
 * sub-namespace
 */

const person3 = {
    
    name: {
        first : "john",
        last : "doe"
    },
    age: 21

}

console.log(person3.name.last);
console.log(person3.name.first);

/**
 * bracket notation
 */

console.log(person3['name']['last']); 
console.log(person3['name']['first']);

/**
 * setting object members
 */

const person4 = {
    firstname: "mary",
    age: 93
}

// changing member
console.log(person4.firstname);
person4.firstname = "sophie";
console.log(person4.firstname);

// adding new member
person4.farewell = function() {alert(`Goodbye, I was ${person4.firstname}`)};
console.log(person4.farewell());

// adding member name dynamically with bracket notation
let memberName = 'height';
let memberValue = '1.74m';
person4[memberName] = memberValue;

console.log(person4.height);

/**
 * constructor function
 */

function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert(`Hi, my name is ${this.name}.`);
    };
}

// using contructor
let person5 = new Person('bob');
person5.greeting();

/**
 * generic Object contructor
 */

// store an empty object
let obj = new Object();

// using Object() constructor with object literal as argument
let obj2 = new Object({
    name: 'carl',
    age: 63
});

console.log(obj2.age);

/**
 * using create() method
 */

let obj3 = Object.create(obj2);
console.log(obj3.name);