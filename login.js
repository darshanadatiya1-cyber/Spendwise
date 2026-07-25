document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const rememberMe = document.getElementById("rememberMe").checked;

            // Simple validation example
            if (email && password) {
                console.log("Login details submitted:", { email, password, rememberMe });
                alert(`Welcome back, ${email}!`);
                
                // Reset form or redirect user
                loginForm.reset();
            } else {
                alert("Please fill in all required fields.");
            }
        });
    }
});