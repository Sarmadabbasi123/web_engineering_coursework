function validateForm() {
    // Reset all error messages
    hideAllErrors();
    
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('nameError');
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('emailError');
        isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phoneNumber').value.trim();
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        showError('phoneError');
        isValid = false;
    }
    
    // Product validation
    const product = document.getElementById('favourite-product').value;
    if (product === '') {
        showError('productError');
        isValid = false;
    }
    
    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showError('messageError');
        isValid = false;
    }
    
    // Show success message if all validations pass
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        // Reset form after successful submission
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
            document.forms[0].reset();
        }, 3000);
    }
    
    return false; // Prevent form submission
}

function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
}

function hideAllErrors() {
    const errors = document.getElementsByClassName('error');
    for (let error of errors) {
        error.style.display = 'none';
    }
    document.getElementById('successMessage').style.display = 'none';
}