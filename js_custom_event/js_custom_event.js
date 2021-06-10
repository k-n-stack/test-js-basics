const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('awesome', e => console.log(e.detail.text()));

textarea.addEventListener('input', function() {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () => textarea.value } }))
});
const div01 = document.getElementById("test");

div01.addEventListener('wordChange', function(event) {
    div01.textContent = event.detail.word;
});

// first method
function changeWord(w) {
    const event01 = new CustomEvent('wordChange', {
        detail: {
            word: w
        }
    });
    div01.dispatchEvent(event01);
}