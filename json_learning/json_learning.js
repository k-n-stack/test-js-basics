const header = document.querySelector('header');
const section = document.querySelector('section');

let requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function() {
    const superHeroes = request.response;
    console.log(superHeroes);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(obj) {
    
    const my_h1 = document.createElement('h1');
    my_h1.textContent = obj['squadName'];
    header.appendChild(my_h1);

    const my_p = document.createElement('p');
    my_p.textContent = `Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
    header.appendChild(my_p);
}

function showHeroes(obj) {
    const heroes = obj['members'];
  
    for (let i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
    
        myH2.textContent = heroes[i].name;
        myPara1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
        myPara2.textContent = `Age: ${heroes[i].age}`;
        myPara3.textContent = `Superpowers:`;
    
        const superPowers = heroes[i].powers;

        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
    
        section.appendChild(myArticle);
    }
}


let requestUrl2 = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request2 = new XMLHttpRequest();
request2.open('GET', requestUrl2);
request2.send();
request2.onload = function() {
    const some_test = request2.response;

    console.log(some_test);
    console.log(typeof some_test); // return string

    let string_to_obj = JSON.parse(some_test); // -> convert string to JSON
    console.log(string_to_obj);
    console.log(typeof string_to_obj); // return object

    let obj_to_string = JSON.stringify(string_to_obj); // -> convert JSON to string
    console.log(obj_to_string);
    console.log(typeof obj_to_string); // return string

}