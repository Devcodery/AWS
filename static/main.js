document.getElementById('loginForm').addEventListener('submit', function(event) {
    const login = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const errorDiv = document.getElementById('mensajeError');

    // Ejemplo simple de validación con JS
    if (login.length < 4) {
        event.preventDefault(); // Evita que el formulario se envíe
        errorDiv.textContent = "El usuario debe tener al menos 4 caracteres";
        errorDiv.style.display = "block";
    } else {
        errorDiv.style.display = "none";
        console.log("Formulario válido, enviando datos...");
    }
});