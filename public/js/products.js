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

productos.forEach(producto => {
    let cardContainer = document.createElement("div");
    contenedorProductos.append(cardContainer);
    cardContainer.id = "card-container";
    cardContainer.className = "bg-white rounded-xl flex flex-col p-8 gap-4 drop-shadow-xl lg:transition lg:duration-300 lg:hover:scale-105";

    let cardImg = document.createElement("div");
    cardContainer.append(cardImg);
    cardImg.id = "card-img";
    cardImg.innerHTML = `
        <img src="${producto.img}" alt="${producto.name}" class="flex justify-center w-full lg:transition lg:duration-300 lg:hover:scale-105">
    `;

    let cardInfo = document.createElement("div");
    cardContainer.append(cardInfo);
    cardInfo.id = "card-info";
    cardInfo.className = "flex flex-col gap-1";
    cardInfo.innerHTML = `
        <div class="name-description-price flex justify-between">
            <div class="name-description">
                <h3 class="font-poppins font-bold text-xl">${producto.name}</h3>
                <p class="font-poppins font-normal text-gris">${producto.type}</p>
            </div>
            <div class="price">
                <p class="font-poppins font-bold text-xl">$${producto.price}</p>
            </div>
        </div>
    `;

    let botonAgregar = document.createElement("button");
    cardContainer.append(botonAgregar);
    botonAgregar.id = "boton-agregar";
    botonAgregar.className = "font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg";
    botonAgregar.innerText = "Add to cart";

    botonAgregar.addEventListener("click", () => {
        carrito.push(
            {id: producto.id,
            name: producto.name,
            type: producto.type,
            price: producto.price,
            stock: producto.stock,
            img: producto.img}
        );
    });
});

// CARRITO DE COMPRAS




