function wacht(button) {
    // Obtener el artículo más cercano
    const article = button.closest('.custom-project-item');
    // Obtener la descripción (párrafo con clase 'about')
    const description = article.querySelector('.custom-about');

    // Alternar la visibilidad de la descripción
    if (description.style.display === "none") {
        description.style.display = "block";
        button.textContent = "Hide Description";
    } else {
        description.style.display = "none";
        button.textContent = "Description";
    }
}
