document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    
    emailError.classList.add('d-none');
    passwordError.classList.add('d-none');
    
    if (email.value.trim() === '') {
        emailError.textContent = 'Email tidak boleh kosong';
        emailError.classList.remove('d-none');
        event.preventDefault();
    }
    
    if (password.value.trim() === '') {
        passwordError.textContent = 'Kata sandi tidak boleh kosong';
        passwordError.classList.remove('d-none');
        event.preventDefault();
    }
});