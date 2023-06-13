// CARRITO

let openMenu = document.querySelector('.bx-menu');

let closeMenu = document.querySelector('.bx-x-1');

let mobileMenu = document.querySelector('.mobile-menu');

let openCart = document.querySelector('.bx-cart-alt');

let closeCart = document.querySelector('.bx-x-2');

let cartMenu = document.querySelector('.cart-menu');

let main = document.querySelector('.main');

let footer = document.querySelector('.footer');

openMenu.addEventListener('click', () => {
    openMenu.classList.add("hidden");
    closeMenu.classList.remove("hidden");
    mobileMenu.classList.remove("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
    cartMenu.classList.add("hidden");
    closeCart.classList.add("hidden");
    openCart.classList.remove("hidden");
})

closeMenu.addEventListener('click', () => {
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    mobileMenu.classList.add("hidden");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
})

openCart.addEventListener('click', () => {
    openCart.classList.add("hidden");
    closeCart.classList.remove("hidden");
    cartMenu.classList.remove("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
    mobileMenu.classList.add("hidden");
    closeMenu.classList.add("hidden");
    openMenu.classList.remove("hidden");
})

closeCart.addEventListener('click', () => {
    openCart.classList.remove("hidden");
    closeCart.classList.add("hidden");
    cartMenu.classList.add("hidden");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
})

// CONTADOR DE CANTIDAD

let menos = document.querySelector(".menos");
let mas = document.querySelector(".mas");
let num = document.querySelector(".num");

let a = 1;

mas.addEventListener("click", () => {
    a++;
    num.innerText = a;
})

menos.addEventListener("click", () => {
    if(a>1){
        a--;
        num.innerText = a;
    }
    
})

// PRODUCTOS

productos = [
    {id: 1,
    name: "Bandit XVI",
    type: "Freeride",
    size: ["8m", "10m", "12m"],
    color: "orange",
    price: 899,
    stock: 2,
    img: "./assets/img/bandit1.png"},
    {id: 2,
    name: "WTF?! V2",
    type: "Freestyle",
    size: ["8m", "10m", "12m"],
    color: "orange",
    price: 899,
    stock: 2,
    img: "./assets/img/bandit1.png"},
    {id: 3,
    name: "Bullit V2",
    type: "Big Air",
    size: ["8m", "10m", "12m"],
    color: "blue",
    price: 899,
    stock: 2,
    img: "./assets/img/bandit1.png"},
    {id: 4,
    name: "Breeze V4",
    type: "Wave",
    size: ["8m", "10m", "12m"],
    color: "orange",
    price: 899,
    stock: 2,
    img: "./assets/img/wtf.png"},
]

console.log(productos);
