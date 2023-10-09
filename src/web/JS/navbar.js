
const menubar = document.getElementById('navbar');

menubar.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'home':
            window.location.href = './index.html';
            break;
        case 'about':
            window.location.href = './src/web/pages/hunger/hunger.html';
            break;
        case 'contact':
            window.location.href = './src/web/pages/contact/contact.html';
            break;
        case 'creators':
            window.location.href = './src/web/pages/creators/creators.html';
            break;
        case 'donate':
            window.location.href = './src/web/pages/donate/donate.html';
            break;
    }
})