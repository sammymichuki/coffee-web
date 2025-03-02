document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve stored credentials from local storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if stored credentials exist
    if (!storedUsername || !storedPassword) {
        alert("No registered user found. Please sign up first.");
        return;
    }

    // Check if user exists and password matches
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to a dashboard or homepage
    } else {
        alert("Invalid username or password!");
    }
});