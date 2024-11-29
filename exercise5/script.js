const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');
const pw1Check = document.getElementById('pw1_check');
const pw2Check = document.getElementById('pw2_check');
const submitBtn = document.getElementById('submitBtn');

// Function to validate passwords
function validatePasswords() {
  // Clear previous error messages
  pw1Check.textContent = '';
  pw2Check.textContent = '';
  submitBtn.style.display = 'none'; // Hide submit button by default

  const password = passwordInput.value;
  const password2 = password2Input.value;
  let valid = true; // Track validity

  // Check password length
  if (password.length < 6) {
    pw1Check.textContent = 'Password must be at least 6 characters long.';
    valid = false;
  }

  // Check if passwords match
  if (password !== password2) {
    pw2Check.textContent = 'Passwords do not match.';
    valid = false;
  }

  // If valid, show the submit button
  if (valid) {
    submitBtn.style.display = 'inline';
  }
}

// Adding event listeners to password inputs
passwordInput.addEventListener('input', validatePasswords);
password2Input.addEventListener('input', validatePasswords);