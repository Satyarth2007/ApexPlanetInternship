document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "*Name is required*";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "*Email is required*";
        isValid = false;
    } else {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "*nvalid email format*";
            isValid = false;
        }
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "*Message is required*";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});
