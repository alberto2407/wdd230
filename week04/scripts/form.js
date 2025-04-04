document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

    const ratingInput = document.getElementById('pageRating');
    const ratingValue = document.getElementById('ratingValue');

    // Display initial value
    ratingValue.textContent = ratingInput.value;

    // Update displayed value when range changes
    ratingInput.addEventListener('input', function () {
        ratingValue.textContent = this.value;
    });

    // Validating Password
    document.getElementById("confirmPassword").addEventListener("input", function () {
        let password = document.getElementById("password").value;
        let confirmPassword = this.value;
        let errorMessage = document.getElementById("error-message");
        let submitBtn = document.getElementById("submitBtn");
    
        if (password !== confirmPassword) {
            errorMessage.style.display = "block";  // Show error
            submitBtn.disabled = true;  // Disable button
        } else {
            errorMessage.style.display = "none";  // Hide error
            submitBtn.disabled = false;  // Enable button
        }
    });
    
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
    
        if (password !== confirmPassword) {
            document.getElementById("password").value = ""; // Clear fields
            document.getElementById("confirmPassword").value = "";
            document.getElementById("password").focus(); // Focus back
            event.preventDefault(); // Prevent form submission
        }
    });
});