/**
 * type annotation
 */

// typed parameter, typed return function
function greeter(person : string) : string {
    return  `Hello, ${person}.`;
}

// Array type parameter
function some_function01(arr : Array<string>) : void {
    return;
}

let user = "John Doe";
let test01 = false;
let test02 = null;

document.body.textContent = greeter(user);



/**
 * interfaces
 */

interface Person {
    firstName: string;
    lastName: string;
}

class MalePerson implements Person {
    constructor(){}
    firstName = "bob";
    lastName = "ross";
} // -> error if any Propiety in interface not implemented in class that extends it

function welcome(person : Person) {
    return `Welcome ${person.firstName} ${person.lastName}.`;
}

let somePerson = new MalePerson();
welcome(somePerson);
