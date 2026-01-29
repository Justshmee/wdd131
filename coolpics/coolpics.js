const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('show');
}

const main = document.querySelector('main');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

main.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    const img = e.target;
    const alt = img.getAttribute('alt');

    modalImage.src = 'norris-full.jpg';
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
