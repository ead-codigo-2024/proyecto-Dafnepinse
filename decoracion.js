// Función para abrir el modal
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "flex"; // Mostrar el modal
    modalImg.src = img.src; // Establecer la imagen en el modal
    captionText.innerHTML = img.alt; // Establecer el texto de la imagen (si existe)
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Ocultar el modal
}
