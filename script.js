document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    let isValid = true;
    const messages = [];

    //username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("username must be at least 3 characters long");

    }
    //email validation
    if (!(email.includes('@') && emailInput.includes('.'))) {
      isValid = false;
      messages.push("please include '@' and '.' ");

    }
  
    //password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("password must be 8 charaters long");
    }
  
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      form.submit();

    }

    else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = "#dc3545";
    }
  }
  )
}
)


