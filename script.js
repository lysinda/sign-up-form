const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const confirmationText = document.querySelector(".confirmation-text");

/* Prevent form submission and check if the passwords match */
form.addEventListener("submit", (event => {
    event.preventDefault();
    if (password.value != confirmPassword.value) {
        confirmationText.textContent = "Passwords don't match";
        confirmationText.style.color = "#DB5461";
        password.classList.add("error");
        confirmPassword.classList.add("error");
    }
    else {
        confirmationText.textContent = "Registration successful!";
        confirmationText.style.color = "#A8D4AD";
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
    }
}));
