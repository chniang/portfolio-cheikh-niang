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
// Gestion du formulaire de contact
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    
    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const submitBtn = form.querySelector(".submit-btn");
            const originalBtnText = submitBtn.textContent;
            
            // Désactiver le bouton pendant l'envoi
            submitBtn.disabled = true;
            submitBtn.textContent = "Envoi en cours... ⏳";
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    status.className = "success";
                    status.textContent = "✅ Message envoyé avec succès ! Je vous répondrai bientôt.";
                    form.reset();
                } else {
                    status.className = "error";
                    status.textContent = "❌ Erreur lors de l'envoi. Veuillez réessayer.";
                }
            } catch (error) {
                status.className = "error";
                status.textContent = "❌ Erreur réseau. Veuillez vérifier votre connexion.";
            }
            
            // Réactiver le bouton
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                status.style.display = "none";
            }, 5000);
        });
    }
});
