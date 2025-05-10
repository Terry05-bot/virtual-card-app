function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users') || '{}');
  
    if (users[email]) {
      alert("User already exists");
      return;
    }
  
    users[email] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html";
  }
  
  function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const users = JSON.parse(localStorage.getItem('users') || '{}');
  
    if (users[email] && users[email] === password) {
      localStorage.setItem('loggedInUser', email);
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  }
  