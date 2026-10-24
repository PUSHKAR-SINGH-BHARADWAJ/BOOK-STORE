
function validateForm() {
    var name = document.forms[0].name.value.trim();
    var password = document.forms[0].password.value;

    // Name validation
    var namePattern = /^[A-Za-z ]+$/;

    if (name.length < 6 || !namePattern.test(name)) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    
    return true;
}
