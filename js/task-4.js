const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 

    const formElements = event.currentTarget.elements;
    const info = {
        email: formElements.email.value.trim(),
        password: formElements.password.value.trim(),
    };
    
    if (formElements.email.value === "" || formElements.password.value === "") {
        alert(`All form fields must be filled in`);
    } else {
        console.log(info);
        event.currentTarget.reset(); 
    };
    }
    