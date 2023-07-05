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

let contenedorProductos = document.getElementById("productos");

let cartCards = document.getElementById("cart-cards");

let cartEmpty = document.getElementById("cart-empty");

let sumatoriaCarrito = document.getElementById("sumatoria-carrito");

let botonCompra = document.getElementById("boton-compra")

let carrito;

let carritoStorage = JSON.parse(localStorage.getItem("carritoStorage"));

if(localStorage.getItem("carritoStorage")){

    cartEmpty.classList.add("hidden");

    sumatoriaCarrito.classList.remove("hidden");

    botonCompra.classList.remove("hidden");

    carrito = carritoStorage;

    let subtotal = carrito.reduce( (acumulador, producto) => acumulador + producto.price*producto.cantidad,0);
            sumatoriaCarrito.innerHTML = `
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                    <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                    <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                    <p id="shipping" class="price font-poppins font-bold">$0</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                    <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                </div>
            `;

    carrito.forEach(productoCarro => {
        let cartCard = document.createElement("div");
        cartCards.append(cartCard);
        cartCard.className = "cart-card flex gap-4 justify-between bg-white p-4 mt-4 rounded-xl drop-shadow-xl";
        cartCard.innerHTML = `
            <div class="cart-card-img flex items-center">
                <img src="${productoCarro.img}" alt="${productoCarro.name}" class="h-32">
            </div>
            <div class="card-card-info flex flex-col gap-2">
                <div class="name-type-delete flex gap-10">
                    <div class="name-type flex flex-col">
                        <h3 class="font-poppins font-bold">${productoCarro.name}</h3>
                        <p class="font-poppins font-normal text-gris text-sm">${productoCarro.type}</p>
                    </div>
                    <button id="delete-button${productoCarro.id}" class="bg-gray-200 py-1 px-2 rounded"><i class='bx bx-trash text-2xl text-gris'></i></button>
                </div>
                <div class="cont-cant flex bg-gray-200 rounded-lg justify-between items-center px-1 py-1 w-24">
                    <span id="menos${productoCarro.id}" class="menos font-poppins font-bold text-gris text-md border-r border-solid border-gris px-2 cursor-pointer">-</span>
                    <span id="num${productoCarro.id}" class="num font-poppins font-bold text-gris text-md">${productoCarro.cantidad}</span>
                    <span id="mas${productoCarro.id}" class="mas font-poppins font-bold text-gris text-md border-l border-solid border-gris px-2 cursor-pointer">+</span>
                </div>
                <div class="unit-price-total">
                    <div class="unit-price flex items-center justify-between">
                        <p class="unit-p font-poppins font-normal text-gris text-sm">Unit price:</p>
                        <p class="price font-poppins font-bold">$${productoCarro.price}</p>
                    </div>
                    <div class="total-price flex items-center justify-between">
                        <p class="total-p font-poppins font-normal text-gris text-sm">Total:</p>
                        <p id="total-price${productoCarro.id}" class="price font-poppins font-bold">$${productoCarro.price*productoCarro.cantidad}</p>
                    </div>
                </div>
            </div>
        `;

        carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));

        let menos = document.getElementById(`menos${productoCarro.id}`);
        let num = document.getElementById(`num${productoCarro.id}`);
        let mas = document.getElementById(`mas${productoCarro.id}`);
        let totalPrice = document.getElementById(`total-price${productoCarro.id}`);
        mas.addEventListener("click", () => {
            productoCarro.cantidad++;
            num.innerText = productoCarro.cantidad;
            totalPrice.innerText = "$" + parseInt(productoCarro.price)*productoCarro.cantidad;
            subtotal = subtotal + productoCarro.price;
            sumatoriaCarrito.innerHTML = `
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                    <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                    <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                    <p id="shipping" class="price font-poppins font-bold">$0</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                    <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                </div>
            `;
            carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
        });
        menos.addEventListener("click", () => {
            if(productoCarro.cantidad>1){
                productoCarro.cantidad--;
                num.innerText = productoCarro.cantidad;
                totalPrice.innerText = "$" + parseInt(productoCarro.price)*productoCarro.cantidad;
                subtotal = subtotal - productoCarro.price;
                sumatoriaCarrito.innerHTML = `
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                        <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                        <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                        <p id="shipping" class="price font-poppins font-bold">$0</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                        <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                    </div>
                `;
                carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
            };
        });

        let deleteButton = document.getElementById(`delete-button${productoCarro.id}`);
        deleteButton.addEventListener("click", () => {
            if(carrito.length > 1){
                const index = carrito.indexOf(productoCarro);
                carrito.splice(index, 1);
                cartCard.remove();
                subtotal = subtotal - productoCarro.price*productoCarro.cantidad;
                sumatoriaCarrito.innerHTML = `
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                        <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                        <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                        <p id="shipping" class="price font-poppins font-bold">$0</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                        <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                    </div>
                `;
                carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: `<b>${productoCarro.name}</b> has been deleted to the cart!`
                })
            }else{
                const index = carrito.indexOf(productoCarro);
                carrito.splice(index, 1);
                cartCard.remove();
                cartEmpty.classList.remove("hidden");
                sumatoriaCarrito.classList.add("hidden");
                botonCompra.classList.add("hidden");
                subtotal = subtotal - productoCarro.price*productoCarro.cantidad;
                sumatoriaCarrito.innerHTML = `
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                        <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                        <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                        <p id="shipping" class="price font-poppins font-bold">$0</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                        <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                    </div>
                `;
                carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                carritoStorage = null;
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: `<b>${productoCarro.name}</b> has been deleted to the cart!`
                })
            };
        });
    });

}else{
    carrito = [];

    carritoStorage = [];

    cartEmpty.classList.remove("hidden");

    sumatoriaCarrito.classList.add("hidden");

    botonCompra.classList.add("hidden");
};

productos.forEach(producto => {

    let cardContainer = document.createElement("div");
    contenedorProductos.append(cardContainer);
    cardContainer.className = "card-container bg-white rounded-xl flex flex-col p-8 gap-4 drop-shadow-xl lg:transition lg:duration-300 lg:hover:scale-105";

    let cardImg = document.createElement("div");
    cardContainer.append(cardImg);
    cardImg.className = "card-img";
    cardImg.innerHTML = `
        <img src="${producto.img}" alt="${producto.name}" class="flex justify-center w-full lg:transition lg:duration-300 lg:hover:scale-105">
    `;

    let cardInfo = document.createElement("div");
    cardContainer.append(cardInfo);
    cardInfo.className = "card-info flex flex-col gap-1";
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
    botonAgregar.className = "boton-agregar font-poppins font-bold text-white text-m bg-gris w-full px-4 py-2 rounded-lg";
    botonAgregar.innerText = "Add to cart";

    botonAgregar.addEventListener("click", () => {
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: `<b>${producto.name}</b> has been added to the cart!`
        })

        const prodAgregado = productos.find( (prod) => prod.id === producto.id);

        console.log(prodAgregado);

        cartEmpty.classList.add("hidden");

        sumatoriaCarrito.classList.remove("hidden");

        botonCompra.classList.remove("hidden");

        if(carrito.some(prod => prod.id === producto.id)){

            const index = carrito.findIndex( (prod) => prod.id === prodAgregado.id);
            carrito[index].cantidad++;

            carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));

            let subtotal = carrito.reduce( (acumulador, producto) => acumulador + producto.price*producto.cantidad,0);
            sumatoriaCarrito.innerHTML = `
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                    <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                    <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                    <p id="shipping" class="price font-poppins font-bold">$0</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                    <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                </div>
            `;

            cartCards.innerHTML = "";
            carrito.forEach(productoCarro => {
                let cartCard = document.createElement("div");
                cartCards.append(cartCard);
                cartCard.className = "cart-card flex gap-4 justify-between bg-white p-4 mt-4 rounded-xl drop-shadow-xl";
                cartCard.innerHTML = `
                    <div class="cart-card-img flex items-center">
                        <img src="${productoCarro.img}" alt="${productoCarro.name}" class="h-32">
                    </div>
                    <div class="card-card-info flex flex-col gap-2">
                        <div class="name-type-delete flex gap-10">
                            <div class="name-type flex flex-col">
                                <h3 class="font-poppins font-bold">${productoCarro.name}</h3>
                                <p class="font-poppins font-normal text-gris text-sm">${productoCarro.type}</p>
                            </div>
                            <button id="delete-button${productoCarro.id}" class="bg-gray-200 py-1 px-2 rounded"><i class='bx bx-trash text-2xl text-gris'></i></button>
                        </div>
                        <div class="cont-cant flex bg-gray-200 rounded-lg justify-between items-center px-1 py-1 w-24">
                            <span id="menos${productoCarro.id}" class="menos font-poppins font-bold text-gris text-md border-r border-solid border-gris px-2 cursor-pointer">-</span>
                            <span id="num${productoCarro.id}" class="num font-poppins font-bold text-gris text-md">${productoCarro.cantidad}</span>
                            <span id="mas${productoCarro.id}" class="mas font-poppins font-bold text-gris text-md border-l border-solid border-gris px-2 cursor-pointer">+</span>
                        </div>
                        <div class="unit-price-total">
                            <div class="unit-price flex items-center justify-between">
                                <p class="unit-p font-poppins font-normal text-gris text-sm">Unit price:</p>
                                <p class="price font-poppins font-bold">$${productoCarro.price}</p>
                            </div>
                            <div class="total-price flex items-center justify-between">
                                <p class="total-p font-poppins font-normal text-gris text-sm">Total:</p>
                                <p id="total-price${productoCarro.id}" class="price font-poppins font-bold">$${productoCarro.price*productoCarro.cantidad}</p>
                            </div>
                        </div>
                    </div>
                `;

                carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));

                let menos = document.getElementById(`menos${productoCarro.id}`);
                let num = document.getElementById(`num${productoCarro.id}`);
                let mas = document.getElementById(`mas${productoCarro.id}`);
                let totalPrice = document.getElementById(`total-price${productoCarro.id}`);
                mas.addEventListener("click", () => {
                    productoCarro.cantidad++;
                    num.innerText = productoCarro.cantidad;
                    totalPrice.innerText = "$" + parseInt(productoCarro.price)*productoCarro.cantidad;
                    subtotal = subtotal + productoCarro.price;
                    sumatoriaCarrito.innerHTML = `
                        <div class="flex justify-between">
                            <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                            <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                            <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                            <p id="shipping" class="price font-poppins font-bold">$0</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                            <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                        </div>
                    `;
                    carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                });
                menos.addEventListener("click", () => {
                    if(productoCarro.cantidad>1){
                        productoCarro.cantidad--;
                        num.innerText = productoCarro.cantidad;
                        totalPrice.innerText = "$" + parseInt(productoCarro.price)*productoCarro.cantidad;
                        subtotal = subtotal - productoCarro.price;
                        sumatoriaCarrito.innerHTML = `
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                                <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                                <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                                <p id="shipping" class="price font-poppins font-bold">$0</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                                <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                            </div>
                        `;
                        carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                    };
                });

                let deleteButton = document.getElementById(`delete-button${productoCarro.id}`);
                deleteButton.addEventListener("click", () => {
                    if(carrito.length > 1){
                        const index = carrito.indexOf(productoCarro);
                        carrito.splice(index, 1);
                        cartCard.remove();
                        subtotal = subtotal - productoCarro.price*productoCarro.cantidad;
                        sumatoriaCarrito.innerHTML = `
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                                <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                                <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                                <p id="shipping" class="price font-poppins font-bold">$0</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                                <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                            </div>
                        `;
                        carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'center',
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'success',
                            title: `<b>${productoCarro.name}</b> has been deleted to the cart!`
                        })
                    }else{
                        const index = carrito.indexOf(productoCarro);
                        carrito.splice(index, 1);
                        cartCard.remove();
                        cartEmpty.classList.remove("hidden");
                        sumatoriaCarrito.classList.add("hidden");
                        botonCompra.classList.add("hidden");
                        subtotal = subtotal - productoCarro.price*productoCarro.cantidad;
                        sumatoriaCarrito.innerHTML = `
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                                <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                                <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                                <p id="shipping" class="price font-poppins font-bold">$0</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                                <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                            </div>
                        `;
                        carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                        carritoStorage = null;
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'center',
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'success',
                            title: `<b>${productoCarro.name}</b> has been deleted to the cart!`
                        })
                    };
                });
            });

        }else{

            prodAgregado.cantidad = 1;
            carrito.push(prodAgregado);

            carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));

            let subtotal = carrito.reduce( (acumulador, producto) => acumulador + producto.price*producto.cantidad,0);
            sumatoriaCarrito.innerHTML = `
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                    <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                    <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                    <p id="shipping" class="price font-poppins font-bold">$0</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                    <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                </div>
            `;

            const index = carrito.findIndex( (prod) => prod.id === prodAgregado.id);
            cartCards.innerHTML = "";
            carrito.forEach(productoCarro => {
                let cartCard = document.createElement("div");
                cartCards.append(cartCard);
                cartCard.className = "cart-card flex gap-4 justify-between bg-white p-4 mt-4 rounded-xl drop-shadow-xl";
                cartCard.innerHTML = `
                    <div class="cart-card-img flex items-center">
                        <img src="${productoCarro.img}" alt="${productoCarro.name}" class="h-32">
                    </div>
                    <div class="card-card-info flex flex-col gap-2">
                        <div class="name-type-delete flex gap-10">
                            <div class="name-type flex flex-col">
                                <h3 class="font-poppins font-bold">${productoCarro.name}</h3>
                                <p class="font-poppins font-normal text-gris text-sm">${productoCarro.type}</p>
                            </div>
                            <button id="delete-button${productoCarro.id}" class="bg-gray-200 py-1 px-2 rounded"><i class='bx bx-trash text-2xl text-gris'></i></button>
                        </div>
                        <div class="cont-cant flex bg-gray-200 rounded-lg justify-between items-center px-1 py-1 w-24">
                            <span id="menos${productoCarro.id}" class="menos font-poppins font-bold text-gris text-md border-r border-solid border-gris px-2 cursor-pointer">-</span>
                            <span id="num${productoCarro.id}" class="num font-poppins font-bold text-gris text-md">${productoCarro.cantidad}</span>
                            <span id="mas${productoCarro.id}" class="mas font-poppins font-bold text-gris text-md border-l border-solid border-gris px-2 cursor-pointer">+</span>
                        </div>
                        <div class="unit-price-total">
                            <div class="unit-price flex items-center justify-between">
                                <p class="unit-p font-poppins font-normal text-gris text-sm">Unit price:</p>
                                <p class="price font-poppins font-bold">$${productoCarro.price}</p>
                            </div>
                            <div class="total-price flex items-center justify-between">
                                <p class="total-p font-poppins font-normal text-gris text-sm">Total:</p>
                                <p id="total-price${productoCarro.id}" class="price font-poppins font-bold">$${productoCarro.price}</p>
                            </div>
                        </div>
                    </div>
                `;

                let menos = document.getElementById(`menos${productoCarro.id}`);
                let num = document.getElementById(`num${productoCarro.id}`);
                let mas = document.getElementById(`mas${productoCarro.id}`);
                let totalPrice = document.getElementById(`total-price${productoCarro.id}`);

                mas.addEventListener("click", () => {
                    productoCarro.cantidad++;
                    num.innerText = productoCarro.cantidad;
                    totalPrice.innerText = "$" + parseInt(productoCarro.price)*productoCarro.cantidad;
                    subtotal = subtotal + productoCarro.price;
                    sumatoriaCarrito.innerHTML = `
                        <div class="flex justify-between">
                            <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                            <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                            <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                            <p id="shipping" class="price font-poppins font-bold">$0</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                            <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                        </div>
                    `;
                    carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                });
                menos.addEventListener("click", () => {
                    if(productoCarro.cantidad>1){
                        productoCarro.cantidad--;
                        num.innerText = productoCarro.cantidad;
                        totalPrice.innerText = "$" + parseInt(productoCarro.price)*productoCarro.cantidad;
                        subtotal = subtotal - productoCarro.price;
                        sumatoriaCarrito.innerHTML = `
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                                <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                                <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                                <p id="shipping" class="price font-poppins font-bold">$0</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                                <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                            </div>
                        `;
                        carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                    };
                });

                let deleteButton = document.getElementById(`delete-button${productoCarro.id}`);
                deleteButton.addEventListener("click", () => {

                    if(carrito.length > 1){
                        const index = carrito.indexOf(productoCarro);
                        carrito.splice(index, 1);
                        cartCard.remove();
                        subtotal = subtotal - productoCarro.price*productoCarro.cantidad;
                        sumatoriaCarrito.innerHTML = `
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                                <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                                <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                                <p id="shipping" class="price font-poppins font-bold">$0</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                                <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                            </div>
                        `;
                        carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'center',
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'success',
                            title: `<b>${productoCarro.name}</b> has been deleted to the cart!`
                        })
                    }else{
                        const index = carrito.indexOf(productoCarro);
                        carrito.splice(index, 1);
                        cartCard.remove();
                        cartEmpty.classList.remove("hidden");
                        sumatoriaCarrito.classList.add("hidden");
                        botonCompra.classList.add("hidden");
                        subtotal = subtotal - productoCarro.price*productoCarro.cantidad;
                        sumatoriaCarrito.innerHTML = `
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Subtotal:</p>
                                <p id="subtotal" class="price font-poppins font-bold">$${subtotal}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Tax (7%):</p>
                                <p id="tax" class="price font-poppins font-bold">$${parseFloat((subtotal*0.07).toFixed(2))}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-poppins font-normal text-gris w-3/4 flex justify-end">Shipping:</p>
                                <p id="shipping" class="price font-poppins font-bold">$0</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="font-roboto font-bold text-black text-xl w-3/4 flex justify-end">TOTAL:</p>
                                <p id="total" class="price font-poppins font-bold text-xl">$${(subtotal*1.07).toFixed(2)}</p>
                            </div>
                        `;
                        carritoStorage = localStorage.setItem("carritoStorage", JSON.stringify(carrito));
                        carritoStorage = null;
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'center',
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })
                        Toast.fire({
                            icon: 'success',
                            title: `<b>${productoCarro.name}</b> has been deleted to the cart!`
                        })
                    };
                });
            });
        };
    });
});

// CARRITO DE COMPRAS