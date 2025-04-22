// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginCard = document.getElementById('login-card');
    const registerCard = document.getElementById('register-card');

    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');

    // Handle the switch to Register form
    switchToRegister.addEventListener('click', function() {
        loginCard.style.display = 'none';
        registerCard.style.display = 'block';
    });

    // Handle the switch to Login form
    switchToLogin.addEventListener('click', function() {
        registerCard.style.display = 'none';
        loginCard.style.display = 'block';
    });

    // Login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (!username || !password) {
            alert("Please fill in both fields.");
        } else {
            // Simulate successful login (you can replace this with actual login logic)
            alert("Login successful!");
            // Example: Send login request to server
            // loginForm.submit(); 
        }
    });

    // Register form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (!username || !password) {
            alert("Please fill in both fields.");
        } else {
            // Simulate account creation (you can replace this with actual registration logic)
            alert("Account created successfully!");
            // Example: Send registration request to server
            // registerForm.submit(); 
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const usernameDisplay = document.getElementById('username-display');
  
    if (username && usernameDisplay) {
      usernameDisplay.textContent = username;
    }
  });
// login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // For demonstration, we just accept any credentials
    // You can validate this against stored values or backend later
    if (username && password) {
      localStorage.setItem('username', username);
      window.location.href = 'index.html'; // Redirect to main page
    } else {
      alert('Please enter valid credentials');
    }
  });
    