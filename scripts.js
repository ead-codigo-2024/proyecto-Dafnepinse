// Selección del formulario de contacto y el formulario de contacto real
const formulario = document.getElementById("formulario-contacto");
const form = document.getElementById("contact-form");

// Función para alternar la visibilidad del formulario y actualizar el estado en localStorage
function toggleFormulario() {
    const isVisible = formulario.style.display === "flex";
    formulario.style.display = isVisible ? "none" : "flex";
    localStorage.setItem('formularioVisible', !isVisible); // Guardar estado actualizado
}

// Mostrar u ocultar el formulario al cargar según el estado guardado en localStorage
window.addEventListener('load', () => {
    const formularioVisible = localStorage.getItem('formularioVisible') === 'true';
    formulario.style.display = formularioVisible ? "flex" : "none";
});

// Manejo del envío del formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación: comprobar que los campos no estén vacíos
    if (nombre && email && mensaje) {
        mostrarMensajeExito(); // Llama a función que muestra el mensaje de éxito
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

// Función para mostrar mensaje de éxito y ocultar el formulario
function mostrarMensajeExito() {
    formulario.innerHTML = ""; // Limpiar el contenido del formulario

    // Crear mensaje de éxito
    const mensajeExito = document.createElement("div");
    mensajeExito.classList.add("mensaje-exito");
    mensajeExito.innerHTML = `<p>¡Formulario enviado con éxito!</p>`;

    // Crear botón de aceptar
    const botonAceptar = document.createElement("button");
    botonAceptar.textContent = "Aceptar";
    botonAceptar.classList.add("btn-contact");

    mensajeExito.appendChild(botonAceptar);
    formulario.appendChild(mensajeExito); // Agregar mensaje y botón al formulario

    // Alternar visibilidad del formulario con botón o temporizador
    toggleFormulario();
    const timeout = setTimeout(toggleFormulario, 3000); // Cerrar automáticamente tras 3 segundos

    // Cerrar si el usuario hace clic en "Aceptar" antes de los 3 segundos
    botonAceptar.addEventListener("click", () => {
        clearTimeout(timeout);
        toggleFormulario();
    });

    // Limpiar localStorage y reiniciar el formulario
    localStorage.removeItem('formularioVisible');
    form.reset();
}

function mostrarFormulario() {
    const formulario = document.getElementById('formulario-contacto');
    
    // Cambiar la visibilidad del formulario al hacer clic
    if (formulario.style.display === 'none' || formulario.style.display === '') {
        formulario.style.display = 'block'; // Muestra el formulario
    } else {
        formulario.style.display = 'none'; // Oculta el formulario
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Función para abrir el submenú y hacer scroll hacia la sección 4
function toggleMenuAndScroll() {
    // Abrir o cerrar el submenú (asegúrate de que la clase 'submenu' tiene una animación o cambio de visibilidad)
    const submenu = document.querySelector('.submenu');
    submenu.classList.toggle('active'); // Asegúrate de tener una clase 'active' en CSS para mostrar el submenú

    // Desplazar hacia la sección 4 (con el id de la sección 4)
    const section4 = document.getElementById('cuarta-seccion');
    section4.scrollIntoView({ behavior: 'smooth' }); // Hace un scroll suave
}