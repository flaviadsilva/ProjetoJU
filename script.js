document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Função para abrir/fechar menu
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Alternar ícone (troca barras por X)
        const icon = mobileBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            // Se o menu estiver ativo, exibe o X para fechar
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark'); // Use fa-xmark
        } else {
            // Se o menu estiver fechado, exibe as barras
            icon.classList.remove('fa-xmark'); // Use fa-xmark
            icon.classList.add('fa-bars');
        }
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileBtn.querySelector('i');
            // Garante que o ícone volte para as barras ao fechar
            icon.classList.remove('fa-xmark'); // Use fa-xmark
            icon.classList.add('fa-bars');
        });
    });
});