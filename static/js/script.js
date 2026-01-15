// Navigation entre les pages
document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Retirer la classe active de tous les boutons
            navButtons.forEach(btn => btn.classList.remove("active"));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add("active");
            
            // Cacher toutes les pages
            pages.forEach(page => page.classList.remove("active"));
            
            // Afficher la page correspondante
            const pageId = this.getAttribute("data-page");
            document.getElementById(pageId).classList.add("active");
            
            // Scroll vers le haut
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
});