function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-hidden');
}

const menuButton = document.getElementById('menu-hamburger');
menuButton.addEventListener('click', toggleMenu);

toggleMenu();
