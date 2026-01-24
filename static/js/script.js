// Navigation entre les pages
document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");
    const sidebar = document.getElementById("sidebar");
    
    // Créer le bouton hamburger
    createMobileMenuButton();

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

            // Sur mobile, fermer la sidebar après clic
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
                const menuToggle = document.querySelector(".menu-toggle");
                if (menuToggle) {
                    menuToggle.classList.remove("active");
                }
            }

            // Scroll vers le haut
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // Initialiser les animations UNE SEULE FOIS au chargement
    initScrollAnimations();
});

// Fonction pour créer le bouton hamburger mobile
function createMobileMenuButton() {
    const menuToggle = document.createElement("button");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    document.body.appendChild(menuToggle);

    const sidebar = document.getElementById("sidebar");

    // Toggle menu au clic
    menuToggle.addEventListener("click", function() {
        this.classList.toggle("active");
        sidebar.classList.toggle("active");
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove("active");
                menuToggle.classList.remove("active");
            }
        }
    });

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
}

// Fonction pour détecter les éléments visibles et les animer - VERSION FIXÉE
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right, .animate-zoom'); 
    
    // Options optimisées pour mobile
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe animated
                entry.target.classList.add('animated');
                // NE PLUS OBSERVER cet élément après animation (FIX CRITIQUE!)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments
    animatedElements.forEach(element => {
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
                    status.textContent = "❌ Une erreur s'est produite. Réessayez ou contactez-moi directement par email.";
                }
            } catch (error) {
                status.className = "error";
                status.textContent = "❌ Erreur réseau. Vérifiez votre connexion et réessayez.";
            } finally {
                // Réactiver le bouton
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }
});
