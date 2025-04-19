
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const lessonsDiv = document.getElementById("lessons");

  if (loginForm) {
    loginForm.onsubmit = (e) => {
      e.preventDefault();
      const id = document.getElementById("userId").value;
      const password = document.getElementById("password").value;
      const user = JSON.parse(localStorage.getItem(id));
      if (user && user.password === password) {
        sessionStorage.setItem("currentUser", id);
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid login");
      }
    };
  }

  if (registerForm) {
    registerForm.onsubmit = (e) => {
      e.preventDefault();
      const id = document.getElementById("registerId").value;
      const password = document.getElementById("registerPassword").value;
      const user = { password, startTime: new Date().getTime() };
      localStorage.setItem(id, JSON.stringify(user));
      alert("Registered! Please log in.");
      window.location.href = "index.html";
    };
  }

  if (lessonsDiv) {
    const id = sessionStorage.getItem("currentUser");
    const user = JSON.parse(localStorage.getItem(id));
    if (!user) return window.location.href = "index.html";

    const now = new Date().getTime();
    const timePassed = now - user.startTime;
    const oneDay = 24 * 60 * 60 * 1000;

    if (timePassed < oneDay) {
      lessonsDiv.innerHTML = `
        <h3>Freemium Lessons</h3>
        <ul>
          <li><a href="#">Lesson 1: Intro to IT Support</a></li>
          <li><a href="#">Lesson 2: Microsoft 365 Basics</a></li>
        </ul>
        <p>You have ${(24 - Math.floor(timePassed / (60 * 60 * 1000)))} hours left.</p>
      `;
    } else {
      lessonsDiv.innerHTML = `
        <h3>Access Expired</h3>
        <p>Your freemium access has expired. Please subscribe to continue.</p>
        <button onclick="alert('Redirect to payment')">Subscribe Now</button>
      `;
    }
  }
});
