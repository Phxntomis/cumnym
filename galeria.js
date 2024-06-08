// Obtener elementos del DOM
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close');

// Array para almacenar las URLs de las imágenes
const images = [];

// Función para abrir el modal
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modalContainer.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modalContainer.style.display = 'none';
}

// Event listener para abrir el modal al hacer clic en una imagen
document.querySelectorAll('.pic img').forEach((img, index) => {
    img.addEventListener('click', () => {
        openModal(img.src);
        // Guardar las URLs de todas las imágenes
        document.querySelectorAll('.pic img').forEach(img => images.push(img.src));
        // Guardar el índice de la imagen actual
        currentIndex = index;
    });
});

// Event listener para cerrar el modal al hacer clic en el botón de cierre
closeBtn.addEventListener('click', closeModal);

// Event listener para cerrar el modal al presionar la tecla Esc
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    } else if (event.key === 'ArrowLeft') {
        // Navegar a la imagen anterior al presionar la flecha izquierda
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex];
    } else if (event.key === 'ArrowRight') {
        // Navegar a la siguiente imagen al presionar la flecha derecha
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex];
    }
});

// Event listener para cerrar el modal al hacer clic fuera del contenido modal
modalContainer.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
        closeModal();
    }
});
