// Efecto de desplazamiento suave
document.querySelectorAll('.gallery-section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.transform = 'scale(1.05)';
    });

    section.addEventListener('mouseout', () => {
        section.style.transform = 'scale(1)';
    });
});

// Expansión de galerías (opcional)
const gallerySections = document.querySelectorAll('.gallery-section');
gallerySections.forEach(section => {
    section.addEventListener('click', () => {
        const gallery = section.querySelector('.gallery');
        if (gallery.style.display === 'none') {
            gallery.style.display = 'block';
        } else {
            gallery.style.display = 'none';
        }
    });
});