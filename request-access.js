let requestButton = document.querySelector('.request-button');
let emailInput = document.querySelector('.email-input');
let formatError = document.querySelector('.format-error');
let blankError = document.querySelector('.blank-error');



requestButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
  
    const email = emailInput.value.trim();

    formatError.style.display = 'none';
    blankError.style.display = 'none';

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if email field is empty
    if (email === '') {
        blankError.style.display = 'block';
        return;
    }
  
    // Check if email format is valid using a regular expression
    
    else if (!emailRegex.test(email)) {
        formatError.style.display = 'block';
        return;
    }

    else {
        alert("Request Received, Thank you.");
    }

    emailInput.value = '';

  });
