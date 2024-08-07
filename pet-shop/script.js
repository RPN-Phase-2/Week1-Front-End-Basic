document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#hamburger');
    const close = document.querySelector('#close');
    const navItems = document.querySelectorAll('nav ul li');

    function toggleNavMenu(isOpen) {
        navItems.forEach(item => item.style.display = isOpen ? 'block' : 'none');
        close.style.display = isOpen ? 'block' : 'none';
        hamburger.style.display = isOpen ? 'none' : 'block';
    }

    hamburger.addEventListener('click', function() {
        toggleNavMenu(true);
    });

    close.addEventListener('click', function() {
        toggleNavMenu(false);
    });

    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
           
            toggleNavMenu(true);
        }
    });
});
