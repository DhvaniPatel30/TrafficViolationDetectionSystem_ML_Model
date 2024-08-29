// Allow login without checking credentials
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Login successful!"); // Display a message
    window.location.href = "upload.html"; // Redirect to the upload page
});
