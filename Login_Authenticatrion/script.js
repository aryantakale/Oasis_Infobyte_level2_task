let users = [];

function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('securedContent').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function register() {
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;

    if (username && password) {
        users.push({ username, password });
        alert('Registration successful! Please login.');
    } else {
        alert('Please enter both username and password.');
    }
}