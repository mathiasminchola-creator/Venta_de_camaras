// Datos del carrito
let carrito = [];
// Precios de todo el catálogo (¡Se agregaron los modelos de exterior que faltaban!)
const precios = {
    // Cámaras de batería
    "Eufy SoloCam S340": 299,
    "EZVIZ eLife 2K+": 189,
    "HB8": 220,
    "BC2": 149,
    "CB3": 175,
    "CB2": 160,
    "HB90x Dual 4G Kit": 380,
    "BC1-B1": 135,
    "HB90 Dual Kit": 350,
    "BM1": 110,
    
    // Cámaras de interior
    "EZVIZ C6N": 95,
    "Xiaomi Smart Camera": 80,
    "EZVIZ C6 2K+": 130,
    "Hikvision": 200,
    "C6W": 145,
    "C2C 720p": 65,
    "C6CN mejorada": 120,

    // Cámaras de exterior
    "C520WS": 210,              
    "EZVIZ C3X": 195,        
    "Anksono": 140,             
    "H4": 180,                 
    "H5 4G": 290,             
    "H9c Dual 2K": 310,       
    "LC3": 260,               
    "LC1C": 155,           
    "C8W Pro 2K": 245,    
    "C3TN": 115,                 
    "H8c 4G": 225,               
    // Accesorios
    "Panel solar de carga": 55,
    "Soporte de montaje en pared": 25,
};

// Alternar la visibilidad del panel lateral del carrito
function toggleCarrito() {
    document.getElementById("carritoPanel").classList.toggle("abierto");
    document.getElementById("carritoOverlay").classList.toggle("activo");
}

// Agregar producto o incrementar cantidad
function agregarAlCarrito(nombre) {
    const existente = carrito.find(p => p.nombre === nombre);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            nombre,
            precio: precios[nombre] || 0,
            cantidad: 1
        });
    }
    actualizarCarrito();
}

// Remover por completo un producto del carrito
function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(p => p.nombre !== nombre);
    actualizarCarrito();
}

// Renderizar la interfaz del carrito y actualizar contadores/totales
function actualizarCarrito() {
    const lista = document.getElementById("carritoItems");
    const total = document.getElementById("carritoTotal");
    const count = document.getElementById("cartCount");

// Calcular el número total de ítems en el carrito
    const totalItems = carrito.reduce((s, p) => s + p.cantidad, 0);
    count.textContent = totalItems;

// Estado vacío
    if (carrito.length === 0) {
        lista.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
        total.textContent = "S/ 0.00";
        return;
    }

// Renderizar ítems con mapeo seguro para el evento onclick
    lista.innerHTML = carrito.map(p => `
        <div class="carrito-item">
            <div class="carrito-item-info">
                <strong>${p.nombre}</strong>
                <span>Cantidad: ${p.cantidad}</span>
                <span>S/ ${(p.precio * p.cantidad).toFixed(2)}</span>
            </div>
            <button onclick='eliminarDelCarrito("${p.nombre}")'>🗑</button>
        </div>
    `).join("");

// Calcular la sumatoria total de precios
    const sum = carrito.reduce((s, p) => s + p.precio * p.cantidad, 0);
    total.textContent = `S/ ${sum.toFixed(2)}`;
}
