/**
 * inheritance
 * prior ECMA2015
 */

// base constructor
function Person(firstname, lastname, age, gender) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    Person.prototype.greeting = function() {
        alert(`Hello, my name is ${this.firstname} ${this.lastname}.`);
    };
    Person.prototype.farewell = function() {
        alert(`Seeya, I was ${this.age} years old`);
    };
}

// derived constuctor
function Teacher(firstname, lastname, age, gender, subject) {
    // call itself statically
    Person.call(this, firstname, lastname, age, gender);
    this.subject = subject;
}

let teacher = new Teacher('john', 'doe', 21, 'male', 'Math');
console.log(teacher);

/**
 * inheritance prior ECMA2015 from contructor with no parameters
 */

function Wall() {
    this.width = 10;
    this.height = 20;
}

function RedWall(color) {
    Wall.call(this);
    this.color = color;
}

let redWall = new RedWall('red');
console.log(redWall);

/**
 * To finish ...................
 */

/**
 * ECMAScript 2015 classes
 */

class PersonClass {

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    greeting() {
        console.log(`Hi, my name is ${this.firstname} ${this.lastname}, and i'm ${this.age} years old`);
    }

    farewell() {
        console.log(`Goodbye.`);
    }
}

let some_person = new PersonClass('bob', 'ross', '60');
console.log(some_person);
some_person.greeting();

class TeacherClass extends PersonClass {
    constructor(subject, salary, firstname, lastname, age) {
        super(firstname, lastname, age);
        this.subject = subject;
        this.salary = salary;
    }
}

/**
 * test polymorphism not in inheritance
 */

class Foo {
    constructor() {}
    display() {
        console.log('display in Foo called');
    }
}
class Doo {
    constructor() {}
    display() {
        console.log('display in Doo called');
    }
}

let foo = new Foo();
let doo = new Doo();

foo.display();
doo.display();

/**
 * test polymorphism in inheritance context
 */

class BaseClass {
    constructor(){}
    display() {
        console.log('in Base class');
    }
}

class DerivedClass extends BaseClass {
    constructor() {
        super();
    }
    display(){
        console.log('in Derived class');
    }
}

let base = new BaseClass();
let derived = new DerivedClass();

base.display();
derived.display();

/**
 * abstract class?
 */

class Abstract {
    constructor() {
        if(new.target === Abstract) {
            throw new TypeError("cannot instanciate abstract class.");
        }
        console.log('in Abstract constructor');
    }
}

class Test extends Abstract {
    constructor() {
        super();
        console.log("Test instanciated");
    }
}

// let variable01 = new Abstract(); // this will throw an error
let variable02 = new Test();

