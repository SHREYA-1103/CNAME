document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Additional validation can be added here, such as email format validation

        // If all fields are filled, submit the form (can be replaced with actual form submission)
        alert("Form submitted successfully!");
        form.reset(); // Reset the form after submission
    });
});
