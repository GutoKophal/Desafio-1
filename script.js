document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const submitButton = form.querySelector("button[type='submit']");

    submitButton.disabled = true;

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validateName(name) {
        const re = /^[a-zA-Z\s]+$/;
        return re.test(String(name));
    }

    function checkFormValidity() {
        if (validateName(firstName.value) && validateName(lastName.value) && validateEmail(email.value) &&message.value.length >= 10) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    firstName.addEventListener("input", checkFormValidity);
    lastName.addEventListener("input", checkFormValidity);
    email.addEventListener("input", checkFormValidity);
    message.addEventListener("input", checkFormValidity);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: message.value
        };
        localStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = "success.html";
    });
});