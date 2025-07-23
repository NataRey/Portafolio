document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto de recargar la página

            // Capturar los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validar que todos los campos están completos
            if (nombre && email && mensaje) {
                // Crear un objeto con los datos del usuario
                const contactoData = {
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje
                };

                // Almacenar los datos en localStorage
                localStorage.setItem('contactoData', JSON.stringify(contactoData));

                // Mostrar mensaje de éxito
                alert('Gracias por contactarnos. Hemos guardado tu información.');

                // Limpiar el formulario después de guardar los datos
                form.reset();
            } else {
                alert('Por favor completa todos los campos.');
            }
        });
    } else {
        console.error("No se encontró el formulario con el ID 'contactForm'.");
    }
});