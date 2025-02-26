// User data storage (Local Storage Simulation)
const users = JSON.parse(localStorage.getItem("users")) || [];

// Register User
function register() {   
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    window.location.href = "index.html";
}

// Login User
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        alert("Login successful!");
        window.location.href = "welcome.html";
    } else {
        alert("Invalid email or password.");
    }
}

// Forgot Password
function resetPassword() {
    let email = document.getElementById("forgotEmail").value;
    let user = users.find(u => u.email === email);

    if (user) {
        alert("Password reset link sent to your email (simulated).");
    } else {
        alert("Email not found.");
    }
}

// Logout
function logout() {
    alert("Logged out!");
    window.location.href = "index.html";
}


