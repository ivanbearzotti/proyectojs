let openMenu = document.querySelector('.bx-menu');

let closeMenu = document.querySelector('.bx-x');

let mobileMenu = document.querySelector('.mobile-menu');

openMenu.addEventListener('click', () => {
    openMenu.classList.add("hidden");
    closeMenu.classList.remove("hidden");
    mobileMenu.classList.remove("hidden");
})

closeMenu.addEventListener('click', () => {
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    mobileMenu.classList.add("hidden");
})