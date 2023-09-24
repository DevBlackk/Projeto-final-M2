function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-hidden');
}

const menuButton = document.getElementById('menu-hamburger');
menuButton.addEventListener('click', toggleMenu);

toggleMenu();

const btnHome = document.getElementById('home').addEventListener('click', () => {
    window.location.href = './index.html';
});

const btnAbout = document.getElementById('about').addEventListener('click', () => {
    window.location.href = './web/pages/about.html';
})

const btnActions = document.getElementById('actions').addEventListener('click', () => {
    window.location.href = './web/pages/actions.html';
})

const btnContact = document.getElementById('contact').addEventListener('click', () => {
    window.location.href = './web/pages/contact.html';
})

