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

/**
 * accessing object prototype
 */

let person6 = new Person('ross');
proto6 = Object.getPrototypeOf(person6);
proto6_2 = Object.getPrototypeOf(proto6);
console.log(proto6);
console.log(proto6_2);

/**
 * check existing prototype properties
 */

console.log(Person.prototype);
console.log(Object.prototype);

console.log(new String());
console.log(new Date());
console.log(new Number());
console.log(new Array());

/**
 * create object using create() from a specified proto object
 */

let person7 = Object.create(person6);
console.log(person7.__proto__); // return person6 object

/**
 * constructor property
 */

console.log(person6.constructor);
console.log(person7.constructor);

/**
 * create object instance from object.constructor() function
 */

let person8 = new person7.constructor('Mike');
console.log(person8);

/**
 * return name of the constructor
 */

console.log(person8.constructor.name);

/**
 * Modifying prototype
 * add method to prototype
 */

let person9 = new Person('Robert');
person9.greeting();
console.log(person9);

Person.prototype.farewell = function () {
    alert(`My name is ${this.name}, Goodbye`);
};

person9.farewell();

Person.prototype.farewell();

/**
 * Modify prototype
 * delete method in prototype
 */

delete Person.prototype.farewell; // deleting farewell method in proto
// person9.farewell(); // generate error "person9.farewell is not a function"

/**
 * Modifying prototype
 * update method in prototype
 */

/**
 * Prototype : common pattern of object definition
 */

function Voiture(annee, couleur, marque) {
    this.annee = annee;
    this.couleur = couleur;
    this.marque = marque;

    Voiture.prototype.getAnnee = () => { return this.annee; };
    Voiture.prototype.getCouleur = () => { return this.couleur; };
    Voiture.prototype.getMarque = () => { return this.marque; };
}

let test_voiture = new Voiture(1999, 'bleue', 'renault');

console.log(test_voiture.getCouleur());