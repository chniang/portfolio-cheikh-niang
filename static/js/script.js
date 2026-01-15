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
            
            // Réinitialiser les animations pour la nouvelle page
            setTimeout(() => {
                initScrollAnimations();
            }, 100);
        });
    });
    
    // Initialiser les animations au chargement
    initScrollAnimations();
});

// Fonction pour détecter les éléments visibles et les animer
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right, .animate-zoom');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        // Retirer la classe animated pour réinitialiser
        element.classList.remove('animated');
        observer.observe(element);
    });
}