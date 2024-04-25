//elements picked by its id
const form = document.getElementById('registration');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const termsError = document.getElementById('termsError');
const registrationSuccess = document.getElementById("success");

//event listener to the form when is submitted, if is submitted then the function is executed.
form.addEventListener('submit', function(event) {
    //prevent submission behavior
    event.preventDefault();

    //being the form empty there are no errors, so set the errors empty, null or none.
    //none due to hide messages umtil there is one happening.
    usernameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    termsError.style.display = 'none';

    //initialize all inputs valid set to true until one fails
    let inputsValid = true;

    //if username is less than 4 characters or contain more characters than is required:
    if (username.value.trim() === '' || username.value.length < 4) {
        usernameError.textContent = 'Username must be at least 4 characters';
        //error message displayed
        usernameError.style.display = 'block';
        //failed input
        inputsValid = false;
    }

    //email validation      
    if (!emailInput.validity.valid) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        inputsValid = false;
    }

    // Password validation
    if (password.value.length < 12) {
        passwordError.textContent = 'Password must be at least 12 characters long.';
        passwordError.style.display = 'block';
        inputsValid = false;
    }

    // Confirm password validation
    if (confirmPassword.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        inputsValid = false;
    }

    // Terms validation
    if (!terms.checked) {
        termsError.textContent = 'Please accept the terms and conditions.';
        termsError.style.display = 'block';
        inputsValid = false;
    }

    if (inputsValid) {
        //store data such as username, email, and password.
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        
        // After submission, clean inputs
        registrationForm.reset();

        //After all inputs successfully worked, renders the success message
        successMessage.style.display = 'block';
    }
});