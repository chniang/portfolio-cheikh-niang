// Détection mobile
const isMobile = window.innerWidth <= 768;

// Navigation entre les pages
document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");
    const sidebar = document.getElementById("sidebar");
    
    // Créer le bouton hamburger
    createMobileMenuButton();

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            navButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            pages.forEach(page => page.classList.remove("active"));
            
            const pageId = this.getAttribute("data-page");
            document.getElementById(pageId).classList.add("active");

            if (isMobile) {
                sidebar.classList.remove("active");
                const menuToggle = document.querySelector(".menu-toggle");
                if (menuToggle) menuToggle.classList.remove("active");
            }

            window.scrollTo(0, 0);
        });
    });

    // Sur mobile : activer TOUTES les animations immédiatement
    if (isMobile) {
        document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right, .animate-zoom').forEach(el => {
            el.classList.add('animated');
        });
    } else {
        // Sur desktop uniquement
        initScrollAnimations();
    }
});

function createMobileMenuButton() {
    const menuToggle = document.createElement("button");
    menuToggle.className = "menu-toggle";
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(menuToggle);

    const sidebar = document.getElementById("sidebar");
    menuToggle.addEventListener("click", function() {
        this.classList.toggle("active");
        sidebar.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (isMobile && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
}

function initScrollAnimations() {
    // Desktop seulement
    if (isMobile) return;
    
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right, .animate-zoom');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
}

// Formulaire (même code que avant)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const submitBtn = form.querySelector(".submit-btn");
            const originalBtnText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = "Envoi en cours... ⏳";

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.className = "success";
                    status.textContent = "✅ Message envoyé avec succès !";
                    form.reset();
                } else {
                    status.className = "error";
                    status.textContent = "❌ Erreur. Réessayez.";
                }
            } catch (error) {
                status.className = "error";
                status.textContent = "❌ Erreur réseau.";
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }
});
