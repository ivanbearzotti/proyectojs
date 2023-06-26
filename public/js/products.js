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
    price: 899,
    stock: 2,
    img: "./assets/img/bandit1.png"},
    {id: 2,
    name: "WTF?! V2",
    type: "Freestyle",
    price: 799,
    stock: 2,
    img: "./assets/img/wtf.png"},
    {id: 3,
    name: "Bullit V2",
    type: "Big Air",
    price: 899,
    stock: 2,
    img: "./assets/img/bullit.png"},
    {id: 4,
    name: "Breeze V4",
    type: "Wave",
    price: 799,
    stock: 2,
    img: "./assets/img/breeze.png"},
]

// CARDS DE PRODUCTOS

let carrito = [];

let contenedorProductos = document.getElementById("productos");

let cartCards = document.getElementById("cart-cards");

let cartEmpty = document.getElementById("cart-empty");

let botonesAgregar = document.querySelector(".boton-agregar");

let botonesBorrar = document.querySelectorAll(".boton-borrar");


productos.forEach(producto => {
    contenedorProductos.innerHTML += `
        <div class="card container bg-white rounded-xl flex flex-col p-8 gap-4 drop-shadow-xl lg:transition lg:duration-300 lg:hover:scale-105">
            <div class="card-img flex justify-center">
                <img src="${producto.img}" alt="${producto.name}" class="w-full lg:transition lg:duration-300 lg:hover:scale-105">
            </div>
            <div class="card-info flex flex-col gap-1">
                <div class="name-description-price flex justify-between">
                    <div class="name-description">
                        <h3 class="font-poppins font-bold text-xl">${producto.name}</h3>
                        <p class="font-poppins font-normal text-gris">${producto.type}</p>
                    </div>
                    <div class="price">
                        <p class="font-poppins font-bold text-xl">$${producto.price}</p>
                    </div>
                </div>
            </div>
            <div class="cart">
                <button id="agregar${producto.id}" class="boton-agregar font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2rounded-lg">Add to Cart</button>
            </div>
        </div>
    `;

    botonesAgregar = document.querySelector(".boton-agregar");

    botonesAgregar.addEventListener("click", () => {
        const id = producto.id;
        console.log(id);
    })

    // console.log(botonesAgregar)

    // botonesAgregar.forEach(boton => {
    //     boton.addEventListener("click", () => {
    //         const id = producto.id;
    //         console.log(id);
    //     });
    // })
});

carrito.forEach(producto => {
    cartCards.innerHTML += `
        <div class="cart-card flex gap-4 justify-between bg-white p-4 mt-6 rounded-xl drop-shadow-xl">
            <div class="cart-card-img flex items-center">
                <img src="${producto.img}" alt="" class="h-32">
            </div>
            <div class="card-card-info flex flex-col gap-2">
                <div class="name-type-delete flex gap-10">
                    <div class="name-type flex flex-col">
                        <h3 class="font-poppins font-bold">${producto.name}</h3>
                        <p class="font-poppins font-normal text-gris text-sm">${producto.type}</p>
                    </div>
                    <button id="borrar${producto.id}" class="boton-borrar bg-gray-200 py-1 px-2 rounded"><i class='bx bx-trash text-2xl text-gris'></i></button>
                </div>
                <div class="cont-cant flex bg-gray-200 rounded-lg justify-between items-center px-1 py-1 w-24">
                    <span class="menos font-poppins font-bold text-gris text-md border-r border-solid border-gris px-2 cursor-pointer">-</span>
                    <span class="num font-poppins font-bold text-gris text-md">1</span>
                    <span class="mas font-poppins font-bold text-gris text-md border-l border-solid border-gris px-2 cursor-pointer">+</span>
                </div>
                <div class="unit-price-total">
                    <div class="unit-price flex items-center justify-between">
                        <p class="unit-p font-poppins font-normal text-gris text-sm">Unit price:</p>
                        <p class="price font-poppins font-bold">$${producto.price}</p>
                    </div>
                    <div class="total-price flex items-center justify-between">
                        <p class="total-p font-poppins font-normal text-gris text-sm">Total:</p>
                        <p class="price font-poppins font-bold">$${producto.price}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
});






