/* ==========================================================================
   KOVARE - Lógica Principal con Personalización de Ingredientes y LocalStorage
   ========================================================================== */

// 1. BASE DE DATOS DE PRODUCTOS ACTUALIZADA
const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Sencilla",
        categoria: "hamburguesas",
        precio: 75,
        descripcion: "Deliciosa carne de res artesanal, queso, lechuga, tomate y aderezo especial de la casa.",
        imagen: "assets/img/sencilla.jpg",
        ingredientes: ["Lechuga", "Tomate", "Cebolla", "Pepinillos", "Queso", "Mayonesa/Ketchup"]
    },
    {
        id: 2,
        nombre: "Hamburguesa Doble Carne",
        categoria: "hamburguesas",
        precio: 105,
        descripcion: "Doble porción de jugosa carne de res, doble queso, tocino crujiente y vegetales frescos.",
        imagen: "assets/img/doblecarne.jpg",
        ingredientes: ["Lechuga", "Tomate", "Cebolla", "Pepinillos", "Doble Queso", "Tocino", "Mayonesa/Ketchup"]
    },
    {
        id: 3,
        nombre: "Hamburguesa Hawaiana",
        categoria: "hamburguesas",
        precio: 95,
        descripcion: "Carne de res, queso asadero, piña a la parrilla, jamón, tomate, lechuga y aderezos.",
        imagen: "assets/img/hawaiana.jpg",
        ingredientes: ["Lechuga", "Tomate", "Cebolla", "Piña", "Jamón", "Queso Asadero"]
    },
    {
        id: 4,
        nombre: "Hot Dog Clásico",
        categoria: "hotdogs",
        precio: 45,
        descripcion: "Salchicha envuelta en tocino, tomate, cebolla, aderezos y papas picadas encima.",
        imagen: "assets/img/hotdog.jpg",
        ingredientes: ["Tomate", "Cebolla", "Jalapeño", "Mostaza", "Ketchup", "Mayonesa", "Papas espolvoreadas"]
    },
    {
        id: 5,
        nombre: "Lonche Tradicional",
        categoria: "lonches",
        precio: 65,
        descripcion: "Pan de agua crujiente con tu carne preferida, aguacate fresco, tomate, cebolla y mayonesa.",
        imagen: "assets/img/lonche.jpg",
        sabores: ["Carnitas", "Adobada", "Mixto (Carnitas y Adobada)", "Jamón"],
        ingredientes: ["Aguacate", "Tomate", "Cebolla", "Jalapeño", "Mayonesa"]
    },
    {
        id: 6,
        nombre: "Lonche con Aguacate",
        categoria: "lonches",
        precio: 75,
        descripcion: "Especialidad de la casa con extra aguacate cremoso, queso derretido, tomate y carne a elegir.",
        imagen: "assets/img/lonche-aguacate.jpg",
        sabores: ["Carnitas", "Adobada", "Mixto (Carnitas y Adobada)", "Jamón"],
        ingredientes: ["Extra Aguacate", "Queso Derretido", "Tomate", "Cebolla", "Chile Jalapeño"]
    },
    {
        id: 7,
        nombre: "Gorditas Infladas",
        categoria: "antojitos",
        precio: 25,
        descripcion: "Gorditas infladas de maíz o harina rellenas de tu guisado favorito.",
        imagen: "assets/img/gorditas.jpg",
        sabores: ["Chicharrón", "Deshebrada", "Prensado", "Queso con Chile", "Papas con Queso", "Frijoles con Queso"],
        ingredientes: ["Lechuga", "Tomate", "Salsa Verde", "Salsa Roja", "Cebolla"]
    },
    {
        id: 8,
        nombre: "Sopes Preparados",
        categoria: "antojitos",
        precio: 30,
        descripcion: "Base de maíz con frijoles refritos, guisado a elegir, lechuga, tomate, queso fresco y crema.",
        imagen: "assets/img/sopes.jpg",
        sabores: ["Deshebrada", "Chicharrón", "Prensado", "Carnitas", "Adobada", "Sencillo (Solo frijoles y queso)"],
        ingredientes: ["Frijoles", "Lechuga", "Tomate", "Queso Fresco", "Crema", "Salsa"]
    },
    {
        id: 9,
        nombre: "Tamalitos (Orden de 3)",
        categoria: "antojitos",
        precio: 50,
        descripcion: "Tamales tradicionales servidos calientitos.",
        imagen: "assets/img/tamalitos.jpg",
        sabores: ["Rojo (Carne de Puerco)", "Verde (Pollo)", "Dulce", "Queso con Rajitas"],
        ingredientes: ["Salsa Verde aparte", "Salsa Roja aparte"]
    },
    {
        id: 10,
        nombre: "Orden de Tacos (6 Tacos)",
        categoria: "antojitos",
        precio: 70,
        descripcion: "Orden de 6 tacos en tortilla caliente. Puedes elegir hasta 2 guisados diferentes.",
        imagen: "assets/img/tacos.jpg",
        guisadosTacos: ["Discada", "Papas", "Queso", "Frijoles"],
        maxGuisados: 2,
        ingredientes: ["Lechuga", "Tomate", "Cebolla", "Salsa Verde", "Salsa Roja", "Limón"]
    },
    {
        id: 11,
        nombre: "Salchipapas KOVARE",
        categoria: "papas",
        precio: 55,
        descripcion: "Papas a la francesa crujientes acompañadas de trozos de salchicha, queso cheddar derretido y aderezos.",
        imagen: "assets/img/salchipapas.jpg",
        ingredientes: ["Queso Cheddar", "Ketchup", "Mayonesa", "Mostaza", "Jalapeños"]
    },
    {
        id: 12,
        nombre: "Salchiburguer",
        categoria: "papas",
        precio: 80,
        descripcion: "Combinación especial de salchipapas con carne de hamburguesa en trozos, tomate y queso.",
        imagen: "assets/img/salchiburguer.jpg",
        ingredientes: ["Queso Cheddar", "Carne picada", "Tomate", "Ketchup", "Mayonesa", "Jalapeños"]
    },
    {
        id: 13,
        nombre: "Orden de Boneless",
        categoria: "papas",
        precio: 110,
        descripcion: "Trozos de pechuga empanizados bañados en salsa Buffalo o BBQ con aderezo Ranch y papas.",
        imagen: "assets/img/boneless.jpg",
        ingredientes: ["Salsa Buffalo", "Salsa BBQ", "Aderezo Ranch", "Papas a la francesa"]
    },
    // --- BEBIDAS Y REFRESCOS ---
    {
        id: 14,
        nombre: "Agua Fresca 1 Litro",
        categoria: "bebidas",
        precio: 35,
        descripcion: "Refrescante agua fresca natural de 1 Litro. Elige tu sabor favorito.",
        imagen: "assets/img/aguas.jpg",
        sabores: ["Horchata", "Limón", "Piña", "Jamaica"],
        ingredientes: ["Hielo", "Popote"]
    },
    {
        id: 15,
        nombre: "Fanta Botella 600ml",
        categoria: "bebidas",
        precio: 25,
        descripcion: "Refresco Fanta sabor naranja en presentación de botella de 600ml.",
        imagen: "assets/img/fanta-botella.jpg",
        ingredientes: ["Hielo", "Popote"]
    },
    {
        id: 16,
        nombre: "Fanta en Lata",
        categoria: "bebidas",
        precio: 22,
        descripcion: "Refresco Fanta sabor naranja bien frío en lata de 355ml.",
        imagen: "assets/img/fanta-lata.jpg",
        ingredientes: ["Hielo", "Popote"]
    },
    {
        id: 17,
        nombre: "Coca-Cola en Lata",
        categoria: "bebidas",
        precio: 25,
        descripcion: "Refresco Coca-Cola original helado en presentación de lata.",
        imagen: "assets/img/coca-lata.jpg",
        ingredientes: ["Hielo", "Popote"]
    },
    {
        id: 18,
        nombre: "Pepsi",
        categoria: "bebidas",
        precio: 22,
        descripcion: "Refresco Pepsi frío y refrescante.",
        imagen: "assets/img/pepsi.jpg",
        ingredientes: ["Hielo", "Popote"]
    },
    {
        id: 19,
        nombre: "Fanta Fresa en Lata",
        categoria: "bebidas",
        precio: 22,
        descripcion: "Delicioso y dulce refresco Fanta sabor fresa en lata.",
        imagen: "assets/img/fanta-fresa-lata.jpg",
        ingredientes: ["Hielo", "Popote"]
    },
    {
        id: 20,
        nombre: "Fresca Botella 600ml",
        categoria: "bebidas",
        precio: 25,
        descripcion: "Refresco Fresca sabor toronja en botella de 600ml.",
        imagen: "assets/img/fresca-botella.jpg",
        ingredientes: ["Hielo", "Popote"]
    },
    {
        id: 21,
        nombre: "Fresca en Lata",
        categoria: "bebidas",
        precio: 22,
        descripcion: "Refresco Fresca sabor toronja helado en lata de 355ml.",
        imagen: "assets/img/fresca-lata.jpg",
        ingredientes: ["Hielo", "Popote"]
    }
];

// 2. ESTADO DEL CARRITO (CARGA DESDE LOCALSTORAGE)
let carrito = JSON.parse(localStorage.getItem("carrito_kovare")) || [];
let productoSeleccionado = null;

// 3. INICIALIZACIÓN AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
    actualizarCarritoUI();
});

// 4. MOSTRAR PRODUCTOS EN EL DOM
function mostrarProductos(lista) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `<div class="col-12 text-center text-muted py-4">No se encontraron productos en esta categoría.</div>`;
        return;
    }

    lista.forEach(prod => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4 mb-4";
        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0 card-producto">
                <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}" style="height: 200px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/300x200?text=KOVARE'">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold text-dark">${prod.nombre}</h5>
                    <p class="card-text text-muted small flex-grow-1">${prod.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="fs-5 fw-bold text-dark">$${prod.precio} MXN</span>
                        <div class="btn-group">
                            <button class="btn btn-outline-secondary btn-sm" onclick="verDetalle(${prod.id})">
                                <i class="bi bi-sliders"></i> Personalizar
                            </button>
                            <button class="btn btn-kovare-mustard btn-sm" onclick="verDetalle(${prod.id})">
                                <i class="bi bi-cart-plus"></i> Pedir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

// 5. FILTRAR POR CATEGORÍA
function filtrarCategoria(cat) {
    const botones = document.querySelectorAll("#menu-seccion .btn-outline-dark");
    botones.forEach(btn => btn.classList.remove("active"));
    
    if (event && event.target) {
        event.target.classList.add("active");
    }

    if (cat === "todos") {
        mostrarProductos(productos);
    } else {
        const filtrados = productos.filter(p => p.categoria === cat);
        mostrarProductos(filtrados);
    }
}

// 6. DETALLE Y PERSONALIZACIÓN DE PRODUCTO EN MODAL
function verDetalle(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    productoSeleccionado = prod;

    document.getElementById("modalProdTitulo").innerText = prod.nombre;
    document.getElementById("modalProdDesc").innerText = prod.descripcion;
    document.getElementById("modalProdPrecio").innerText = `$${prod.precio} MXN`;
    
    const img = document.getElementById("modalProdImg");
    img.src = prod.imagen;
    img.onerror = () => { img.src = 'https://via.placeholder.com/300x200?text=KOVARE'; };

    // Buscar o crear la sección de personalización dentro del modal
    let contPersonalizacion = document.getElementById("seccion-personalizar");
    if (!contPersonalizacion) {
        contPersonalizacion = document.createElement("div");
        contPersonalizacion.id = "seccion-personalizar";
        contPersonalizacion.className = "text-start mt-3 pt-3 border-top";
        document.querySelector("#modalProducto .modal-body").appendChild(contPersonalizacion);
    }

    let htmlPersonalizacion = "";

    // A) Si el producto requiere selección de guisado/sabor único (Select)
    if (prod.sabores && prod.sabores.length > 0) {
        htmlPersonalizacion += `
            <h6 class="fw-bold mb-2"><i class="bi bi-egg-fried text-warning me-1"></i> Selecciona la carne / guisado / sabor:</h6>
            <div class="mb-3">
                <select class="form-select form-select-sm" id="sabor-seleccionado">
                    ${prod.sabores.map(sabor => `<option value="${sabor}">${sabor}</option>`).join("")}
                </select>
            </div>
        `;
    }

    // B) Si es la orden de Tacos (Permite seleccionar máximo 2 guisados)
    if (prod.guisadosTacos && prod.guisadosTacos.length > 0) {
        htmlPersonalizacion += `
            <h6 class="fw-bold mb-2"><i class="bi bi-journal-check text-warning me-1"></i> Selecciona hasta ${prod.maxGuisados} guisados para tus 6 tacos:</h6>
            <div class="row g-2 mb-3">
        `;
        prod.guisadosTacos.forEach((guiso, idx) => {
            htmlPersonalizacion += `
                <div class="col-6">
                    <div class="form-check">
                        <input class="form-check-input check-guiso-taco" type="checkbox" value="${guiso}" id="guiso-${idx}" onchange="validarMaxGuisados(this, ${prod.maxGuisados})">
                        <label class="form-check-label small" for="guiso-${idx}">${guiso}</label>
                    </div>
                </div>`;
        });
        htmlPersonalizacion += `</div>`;
    }

    // C) Generar checkboxes de ingredientes adicionales
    if (prod.ingredientes && prod.ingredientes.length > 0) {
        htmlPersonalizacion += `<h6 class="fw-bold mb-2"><i class="bi bi-check2-square text-warning me-1"></i> Ingredientes / Acompañamientos:</h6><div class="row g-2 mb-3">`;
        prod.ingredientes.forEach((ing, idx) => {
            htmlPersonalizacion += `
                <div class="col-6">
                    <div class="form-check">
                        <input class="form-check-input check-ingrediente" type="checkbox" value="${ing}" id="ing-${idx}" checked>
                        <label class="form-check-label small" for="ing-${idx}">${ing}</label>
                    </div>
                </div>`;
        });
        htmlPersonalizacion += `</div>`;
    }

    // D) Campo de texto libre para notas
    htmlPersonalizacion += `
        <div class="mb-2">
            <label for="nota-producto" class="form-label fw-bold small mb-1">
                <i class="bi bi-pencil-square text-warning me-1"></i> Instrucciones especiales / Cómo lo deseas:
            </label>
            <textarea class="form-control form-control-sm" id="nota-producto" rows="2" placeholder="Ej. Sin cebolla, tomate extra, 3 tacos de papas y 3 de discada..."></textarea>
        </div>
    `;

    contPersonalizacion.innerHTML = htmlPersonalizacion;

    // Configurar el botón agregar
    const btnAgregar = document.getElementById("modalProdBtnAgregar");
    btnAgregar.onclick = () => {
        agregarProductoPersonalizado();
    };

    const modalBS = new bootstrap.Modal(document.getElementById("modalProducto"));
    modalBS.show();
}

// Lógica de validación para no sobrepasar el máximo de 2 guisados en tacos
function validarMaxGuisados(checkbox, max) {
    const seleccionados = document.querySelectorAll(".check-guiso-taco:checked");
    if (seleccionados.length > max) {
        alert(`Solo puedes seleccionar un máximo de ${max} guisados para tu orden de tacos.`);
        checkbox.checked = false;
    }
}

// 7. AGREGAR PRODUCTO CON SUS OPCIONES
function agregarProductoPersonalizado() {
    if (!productoSeleccionado) return;

    // Obtener ingredientes marcados
    const checks = document.querySelectorAll(".check-ingrediente:checked");
    const ingredientesElegidos = Array.from(checks).map(c => c.value);

    // Obtener guisados de tacos si aplica
    const checksGuisos = document.querySelectorAll(".check-guiso-taco:checked");
    const guisadosTacosElegidos = Array.from(checksGuisos).map(c => c.value);

    if (productoSeleccionado.guisadosTacos && guisadosTacosElegidos.length === 0) {
        alert("Por favor selecciona al menos 1 guisado para tu orden de tacos.");
        return;
    }

    // Obtener sabor o carne si aplica
    const selectSabor = document.getElementById("sabor-seleccionado");
    const saborElegido = selectSabor ? selectSabor.value : null;

    // Obtener la nota en texto libre
    const notaTexto = document.getElementById("nota-producto") ? document.getElementById("nota-producto").value.trim() : "";

    // Armar nombre formateado
    let nombreFinal = productoSeleccionado.nombre;
    if (saborElegido) {
        nombreFinal += ` (${saborElegido})`;
    } else if (guisadosTacosElegidos.length > 0) {
        nombreFinal += ` [${guisadosTacosElegidos.join(" + ")}]`;
    }

    const itemCarrito = {
        cartItemId: Date.now(),
        id: productoSeleccionado.id,
        nombre: nombreFinal,
        precio: productoSeleccionado.precio,
        imagen: productoSeleccionado.imagen,
        ingredientes: ingredientesElegidos,
        guisados: guisadosTacosElegidos,
        sabor: saborElegido,
        nota: notaTexto,
        cantidad: 1
    };

    carrito.push(itemCarrito);
    guardarYActualizar();

    // Cerrar modal
    const modalEl = document.getElementById("modalProducto");
    const modalBS = bootstrap.Modal.getInstance(modalEl);
    if (modalBS) modalBS.hide();
}

// 8. CAMBIAR CANTIDAD O ELIMINAR DEL CARRITO
function cambiarCantidad(cartItemId, cambio) {
    const item = carrito.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.cantidad += cambio;

    if (item.cantidad <= 0) {
        eliminarDelCarrito(cartItemId);
    } else {
        guardarYActualizar();
    }
}

function eliminarDelCarrito(cartItemId) {
    carrito = carrito.filter(item => item.cartItemId !== cartItemId);
    guardarYActualizar();
}

// 9. GUARDAR EN LOCALSTORAGE Y ACTUALIZAR INTERFAZ
function guardarYActualizar() {
    localStorage.setItem("carrito_kovare", JSON.stringify(carrito));
    actualizarCarritoUI();
}

function actualizarCarritoUI() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    const cantBadge = document.getElementById("cant-carrito");

    let total = 0;
    let cantidadTotal = 0;

    if (listaCarrito) {
        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            listaCarrito.innerHTML = `
                <li class="list-group-item text-center text-muted py-4">
                    <i class="bi bi-cart-x fs-1 d-block mb-2"></i>
                    Tu carrito está vacío
                </li>`;
        } else {
            carrito.forEach(item => {
                const subtotal = item.precio * item.cantidad;
                total += subtotal;
                cantidadTotal += item.cantidad;

                // Formatear detalles
                let detallesStr = "";
                if (item.ingredientes && item.ingredientes.length > 0) {
                    detallesStr += `<small class="d-block text-muted"><strong>Con:</strong> ${item.ingredientes.join(", ")}</small>`;
                }
                if (item.nota) {
                    detallesStr += `<small class="d-block text-warning fw-semibold"><i class="bi bi-chat-left-text me-1"></i>Nota: "${item.nota}"</small>`;
                }

                const li = document.createElement("li");
                li.className = "list-group-item py-2";
                li.innerHTML = `
                    <div class="d-flex justify-content-between align-items-start mb-1">
                        <div>
                            <h6 class="mb-0 fw-bold">${item.nombre}</h6>
                            ${detallesStr}
                            <small class="text-dark fw-bold">$${item.precio} c/u = $${subtotal} MXN</small>
                        </div>
                        <div class="d-flex align-items-center gap-1 ms-2">
                            <button class="btn btn-sm btn-outline-secondary px-2 py-0" onclick="cambiarCantidad(${item.cartItemId}, -1)">-</button>
                            <span class="fw-bold px-2">${item.cantidad}</span>
                            <button class="btn btn-sm btn-outline-secondary px-2 py-0" onclick="cambiarCantidad(${item.cartItemId}, 1)">+</button>
                            <button class="btn btn-sm btn-outline-danger ms-2 py-0" onclick="eliminarDelCarrito(${item.cartItemId})">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                listaCarrito.appendChild(li);
            });
        }
    } else {
        carrito.forEach(item => {
            total += item.precio * item.cantidad;
            cantidadTotal += item.cantidad;
        });
    }

    if (totalCarrito) totalCarrito.innerText = `$${total} MXN`;
    if (cantBadge) cantBadge.innerText = cantidadTotal;
}

// 10. ENVIAR PEDIDO A WHATSAPP CON DETALLES PERSONALIZADOS
document.addEventListener("click", (e) => {
    if (e.target && e.target.closest(".btn-kovare-green")) {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío. Agrega productos antes de realizar tu pedido.");
            return;
        }

        let mensaje = "¡Hola KOVARE! Quisiera realizar el siguiente pedido:%0A%0A";
        let total = 0;

        carrito.forEach((item, index) => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            mensaje += `${index + 1}. *${item.nombre}* (x${item.cantidad}) - $${subtotal} MXN%0A`;
            
            if (item.ingredientes && item.ingredientes.length > 0) {
                mensaje += `   _Con:_ ${item.ingredientes.join(", ")}%0A`;
            }
            if (item.nota) {
                mensaje += `   _Nota:_ "${item.nota}"%0A`;
            }
            mensaje += `%0A`;
        });

        mensaje += `*Total del Pedido:* $${total} MXN%0A%0A¡Muchas gracias!`;
        
        const telefono = "528711234567";
        window.open(`https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`, "_blank");
    }
});


const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const edad = document.getElementById("edad");
    const tipoUsuario = document.getElementById("tipoUsuario");
    const password = document.getElementById("password");
    const terminos = document.getElementById("terminos");

    let formularioValido = true;


    // Validar nombre
    if (nombre.value.trim() === "") {

        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");

        formularioValido = false;

    } else {

        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");

    }


    // Validar correo
    if (
        correo.value.trim() === "" ||
        !correo.value.includes("@")
    ) {

        correo.classList.add("is-invalid");
        correo.classList.remove("is-valid");

        formularioValido = false;

    } else {

        correo.classList.remove("is-invalid");
        correo.classList.add("is-valid");

    }


    // Validar edad
    if (
        edad.value === "" ||
        Number(edad.value) < 18
    ) {

        edad.classList.add("is-invalid");
        edad.classList.remove("is-valid");

        formularioValido = false;

    } else {

        edad.classList.remove("is-invalid");
        edad.classList.add("is-valid");

    }


    // Validar tipo de usuario
    if (tipoUsuario.value === "") {

        tipoUsuario.classList.add("is-invalid");
        tipoUsuario.classList.remove("is-valid");

        formularioValido = false;

    } else {

        tipoUsuario.classList.remove("is-invalid");
        tipoUsuario.classList.add("is-valid");

    }


    // Validar contraseña
    if (password.value.length < 6) {

        password.classList.add("is-invalid");
        password.classList.remove("is-valid");

        formularioValido = false;

    } else {

        password.classList.remove("is-invalid");
        password.classList.add("is-valid");

    }


    // Validar términos
    if (!terminos.checked) {

        terminos.classList.add("is-invalid");
        terminos.classList.remove("is-valid");

        formularioValido = false;

    } else {

        terminos.classList.remove("is-invalid");
        terminos.classList.add("is-valid");

    }


    // Si todo está correcto
    if (formularioValido) {

        alert("Formulario enviado correctamente.");

    }



    
});