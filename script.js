document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelectorAll('.nav-bar');

    navBars.forEach((navBar) => {
        const toggle = navBar.querySelector('.nav-toggle');
        const menu = navBar.querySelector('ul');

        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            const isOpen = navBar.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    });
});
