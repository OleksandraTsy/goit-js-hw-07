const inputText = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputText.addEventListener("input", handleInput);

function handleInput(event) {
    const userName = event.currentTarget.value.trim(); 
    if (userName.length > 0) {
        nameOutput.textContent = userName;
    } else {
        nameOutput.textContent = "Anonymous";
    }
}
