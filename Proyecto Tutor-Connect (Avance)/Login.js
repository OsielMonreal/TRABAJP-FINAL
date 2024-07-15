const users = [
    {
        username: 'usuario1',
        email: 'usuario1@example.com',
        password: 'password1'
    },
    {
        username: 'usuario2',
        email: 'usuario2@example.com',
        password: 'password2'
    },
    {
        username: 'usuario3',
        email: 'usuario3@example.com',
        password: 'password3'
    },
    {
        username: 'usuario4',
        email: 'usuario4@example.com',
        password: 'password4'
    },
    {
        username: 'usuario5',
        email: 'usuario5@example.com',
        password: 'password5'
    }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    const loginMessage = document.getElementById('loginMessage');

    if (user) {
        loginMessage.textContent = 'Login exitoso. Bienvenido, ' + user.username + '!';
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
        loginMessage.style.color = 'red';
    }
});