document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("subscription-email");
    const submitButton = document.getElementById("subscription-button");
    const successMessage = document.getElementById("success-message");

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function checkFormValidity() {
        if (validateEmail(emailInput.value)) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    emailInput.addEventListener("input", checkFormValidity);

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const email = emailInput.value;
        localStorage.setItem("subscriptionEmail", email);

        successMessage.style.display = "block";

        setTimeout(() => {
            emailInput.value = "";
            submitButton.disabled = true;
            successMessage.style.display = "none";
            localStorage.removeItem("subscriptionEmail");
        }, 5000);
    });
});