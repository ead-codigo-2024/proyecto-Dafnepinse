// Función para mostrar u ocultar el formulario
function mostrarFormulario() {
    var formulario = document.getElementById("formulario-contacto");
    // Alterna la visibilidad del formulario
    if (formulario.style.display === "flex") {
        formulario.style.display = "none"; // Oculta el formulario
        localStorage.setItem('formularioVisible', 'false'); // Guardar en localStorage que está oculto
    } else {
        formulario.style.display = "flex"; // Muestra el formulario
        localStorage.setItem('formularioVisible', 'true'); // Guardar en localStorage que está visible
    }
}

// Comprobar el estado del formulario al cargar la página
window.addEventListener('load', () => {
    const formularioVisible = localStorage.getItem('formularioVisible');
    
    // Si está visible, mostrar el formulario
    if (formularioVisible === 'true') {
        var formulario = document.getElementById("formulario-contacto");
        formulario.style.display = "flex"; // Muestra el formulario
    } else {
        var formulario = document.getElementById("formulario-contacto");
        formulario.style.display = "none"; // Oculta el formulario
    }
});

// Manejo del envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Aquí puedes agregar más validaciones si lo deseas
    if (nombre && email && mensaje) {
        // Crear y mostrar el mensaje de éxito
        var mensajeExito = document.createElement("div");
        mensajeExito.classList.add("mensaje-exito");

        // Crear el texto de éxito
        var textoExito = document.createElement("p");
        textoExito.textContent = "¡Formulario enviado con éxito!";

        // Crear el botón de Aceptar
        var botonAceptar = document.createElement("button");
        botonAceptar.textContent = "Aceptar";
        botonAceptar.classList.add("btn-contact"); // Usamos el estilo de btn-contact

        // Agregar el mensaje y el botón a la capa de éxito
        mensajeExito.appendChild(textoExito);
        mensajeExito.appendChild(botonAceptar);

        // Agregar la capa de éxito al formulario
        var formulario = document.getElementById("formulario-contacto");
        formulario.innerHTML = ""; // Limpiar el formulario
        formulario.appendChild(mensajeExito); // Agregar el mensaje

        // Mostrar el mensaje de éxito
        mostrarFormulario();

        // Evento para cerrar el formulario cuando se hace clic en "Aceptar"
        botonAceptar.addEventListener("click", function() {
            // Ocultar el formulario al hacer clic en el botón "Aceptar"
            mostrarFormulario();
        });

        // Reiniciar el formulario después de mostrar el éxito
        setTimeout(function() {
            document.getElementById("contact-form").reset(); // Reinicia el formulario
            mostrarFormulario(); // Cierra el formulario
        }, 3000); // Lo cierra después de 3 segundos
    } else {
        alert("Por favor, complete todos los campos.");
    }
});
