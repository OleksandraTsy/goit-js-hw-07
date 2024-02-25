const inputText = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const helloText = document.querySelector("h1");


inputText.addEventListener("input", handleInput);

function handleInput(event) {
    const userName = event.currentTarget.value;
    if (userName === " ") {
        return helloText
    } else {
        nameOutput.textContent = userName.trim("");
    }
    
    }
