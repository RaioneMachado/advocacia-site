document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const scrollThreshold = 50; // Ajuste este valor para quando o efeito deve começar
    
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Função para controle do scroll
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Função para toggle do menu mobile
    function toggleMenu() {
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                this.classList.toggle('active');
                
                // Alternar ícone
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
                
                // Bloquear scroll quando menu aberto (apenas mobile)
                if (window.innerWidth <= 768) {
                    body.classList.toggle('no-scroll', navLinks.classList.contains('active'));
                }
            });
            
            // Fechar menu ao clicar nos links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        menuToggle.classList.remove('active');
                        body.classList.remove('no-scroll');
                        const icon = menuToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                });
            });
        }
    }
    
    // Inicialização
    handleScroll(); // Verifica estado inicial
    toggleMenu(); // Configura menu mobile
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', function() {
        // Fecha menu se redimensionar para desktop
        if (window.innerWidth > 768 && navLinks) {
            navLinks.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
});