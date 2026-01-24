// FIX ULTIME SCROLL MOBILE
(function() {
    if (window.innerWidth <= 768) {
        // Désactiver le smooth scroll
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        
        // Bloquer tous les preventDefault sur scroll
        let supportsPassive = false;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { supportsPassive = true; }
            }));
        } catch(e) {}
        
        const wheelOpt = supportsPassive ? { passive: true } : false;
        
        // Supprimer tous les event listeners qui peuvent bloquer le scroll
        window.removeEventListener('wheel', null);
        window.removeEventListener('touchmove', null);
        window.removeEventListener('scroll', null);
        
        console.log('Mobile scroll fix applied');
    }
})();
