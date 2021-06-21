/**
 * Asynchronous JS
 */


/**
 * Async callbacks
 */

const button = document.querySelector('#click');

// the callback function is not called immediately.
// it is "called back" asynchronously somewhere inside the containing function body.
button.addEventListener('click', function() {
    alert('Clicked');

    let p_elem = document.createElement('p');
    p_elem.textContent = "This is a newly-added paragraph.";

    document.body.appendChild(p_elem);
});

/**
 * Promises
 */

fetch('products.json').then(function(response) {
    return response.json();
}).then(function(json) {
    let products = json;
    console.log(products);
}).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
});