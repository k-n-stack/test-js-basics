console.log('ok');

const ajaxBtn = document.querySelector("#ajax-button");
const event01 = new Event("listen_txt");

let httpRequest;

function make_request() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alert_contents;
    httpRequest.open('GET', 'test.txt');
    httpRequest.send();
}

function alert_contents() {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
        if(httpRequest.status === 200) {
            alert(httpRequest.responseText);
        } else {
            alert("There was a problem with the request.");
        }
    }
}

// ajaxBtn.addEventListener("click", 'awesome', e => console.log(e.detail.text()));
ajaxBtn.addEventListener('click', make_request);