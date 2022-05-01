// rolling a joke on initial site load and setting joke texts to hidden
document.addEventListener('DOMContentLoaded', () => {
    getJoke();
    setup = document.getElementById("setup-text")
    punchline = document.getElementById("punchline-text");
    punchline.style.visibility = "hidden";
    setup.style.visibility = "hidden";
    // adding an event listener to body of the site which triggers eventHandler funtion
    document.body.addEventListener('click', eventHandler);
});

// funtion responsible for rolling ID number of a joke
function rollJoke() {
    jokeID = Math.floor(Math.random() * 379);
}

// function responsible for sending a request for joke setup and punchline
function getJoke() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/jokes', true);
    rollJoke();
    xhr.onload = function() {
        if (xhr.status == 200) {
            data = JSON.parse(this.response);
            document.getElementById("setup-text").innerHTML = data[jokeID].setup;
            document.getElementById("punchline-text").innerHTML = data[jokeID].punchline;
        };
    };
    xhr.send();
}

// variable used to determine order of events
var counter = 0;

// function which handles animations and usage of all above functions
function eventHandler() {
    counter++
    if(counter == 1) {
        setup.style.visibility = "visible";
        document.getElementById("setup-container").classList.add("animated-box");
    }
    if(counter%2 == 0){
        punchline.style.visibility = "visible";
        document.getElementById("punchline-container").classList.add("animated-box");
        document.getElementById("setup-container").classList.remove("animated-box");
    }
    if(counter%2 == 1 && counter>1){
        punchline.style.visibility = "hidden";
        getJoke();
        document.getElementById("setup-container").classList.add("animated-box");
        document.getElementById("punchline-container").classList.remove("animated-box");
    }
}