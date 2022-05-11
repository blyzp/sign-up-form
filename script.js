/* Elements */

const form  = document.getElementsByTagName("form")[0];

const firstName = document.getElementById("first_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

const errorName = document.querySelector(".error-name");
const errorMail = document.querySelector(".error-mail");
const errorPass = document.querySelector(".error-pass");



/* Events */

form.addEventListener("submit", (e) => {
    if (!firstName.value) {
        firstName.classList.add("error");
        errorName.textContent = "* Enter a name";
        e.preventDefault();
    } else {
        firstName.classList.remove("error");
        errorName.textContent = "";
    }
    
    if (!email.value || email.validity.typeMismatch) {
        email.classList.add("error");
        errorMail.textContent = "* Enter a valid email";
        e.preventDefault();
    } else {
        email.classList.remove("error");
        errorMail.textContent = "";
    }

    if (!password.value) {
        password.classList.add("error");        
        confirm.classList.remove("error");
        confirm.value = "";        
        errorPass.textContent = "* Enter a password";        
        e.preventDefault();
    } else if (password.value != confirm.value) {        
        password.classList.add("error");
        confirm.classList.add("error");        
        confirm.value = "";
        errorPass.textContent = "* Passwords do not match";
        e.preventDefault();
    } else {
        password.classList.remove("error");
        confirm.classList.remove("error");
        errorPass.textContent = "";
    }
});