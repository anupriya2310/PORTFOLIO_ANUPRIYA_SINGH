function validateForm() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error-message");

    if (user === "" || pass === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    if (pass.length < 5) {
        error.innerText = "Password must be at least 5 characters!";
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}
