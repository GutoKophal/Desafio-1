document.addEventListener("DOMContentLoaded", function() {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
        const successMessage = document.querySelector(".success-message");
        successMessage.innerHTML = `
            <h1>Form Submitted Successfully!</h1>
            <p>Thank you for getting in touch. Here is the information you submitted:</p>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
            <p><a href="index.html">Home</a></p>
            <p><a href="contact.html">Contact Us</a></p>
        `;
        localStorage.clear();
    }
});