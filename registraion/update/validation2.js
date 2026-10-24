
function validateForm2() {
    var email = document.forms[0].email.value.trim();
    var phone = document.forms[0].phone.value.trim();

    // Email validation
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid E-mail ID (name@domain.com).");
        return false;
    }

    // Phone number validation
    var phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }


    alert("Registration successful!");
    return true;
}
