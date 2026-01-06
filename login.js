const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

// hardcoded creditials for demo
const validCredentials = {
    username: 'student123',
    password: 'password123'
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('username').Value;
    const password = document.getElementById('password').Value;

    // basic validation
    // if either the passord or the username field are left empty
    if (!username || !password) {
        showMessage('Please fil in all the fields', 'error');
    }

    // validation of the fields
    if (username.lenght < 3) {
        showMessage('username must be at least 3 characters long', 'error');
        return;
    }

    if (password.lenght < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
    }

    // check credentials
    if (username === validCredentials.username && password === validCredentials.password) {
        showMessage('login successful', 'seccess');

        // simulate redirect after 1.5 seconds
        setTimeout(() => {alert('login successful');}, 1500);
    } else {
        showMessage('invalid username or password', 'error');
    }

});

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = 'message ' + type;
    messageDiv.style.display = 'block';

    if (type === 'error') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}

// Display demo credentials on page load

window.addEventListener('load', function() {
    console.log('demo Credentials:');
    console.log('username: student123');
    console.log('Password: password123');
});
