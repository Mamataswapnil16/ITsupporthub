
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const loginID = document.getElementById('loginID').value;
  const password = document.getElementById('password').value;
  alert(`Login attempted with ID/Email: ${loginID}`);
  // Implement actual login logic here
});
