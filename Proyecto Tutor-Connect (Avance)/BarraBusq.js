function filtrarProductos() {
    const buscador = document.getElementById('buscador').value.toLowerCase();
    const cursos = document.querySelectorAll('.curso');
    cursos.forEach(curso => {
        const nombre = curso.querySelector('h2').textContent.toLowerCase();
        const descripcion = curso.querySelector('p').textContent.toLowerCase();
        if (nombre.includes(buscador) || descripcion.includes(buscador)) {
            curso.style.display = '';
        } else {
            curso.style.display = 'none';
        }
    });
}

// Asegúrate de que las otras funciones también estén en el archivo
function addToCart(id, name, price) {
    const course = { id, name, price };
    cart.push(course);
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(course => course.id !== id);
    renderCart();
}

function renderCart() {
    const cartElement = document.getElementById('cart');
    const cartCount = document.getElementById('cartCount');
    const totalElement = document.getElementById('total');
    cartElement.innerHTML = '';
    let total = 0;

    cart.forEach(course => {
        total += course.price;
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            ${course.name} - $${course.price}
            <button onclick="removeFromCart(${course.id})">Eliminar</button>
        `;
        cartElement.appendChild(cartItem);
    });

    cartCount.innerText = cart.length;
    totalElement.innerText = `Total: $${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let total = cart.reduce((sum, course) => sum + course.price, 0);
    alert(`Total a pagar: $${total}`);
    cart = [];
    renderCart();
}

function filtrarProductos() {
    const buscador = document.getElementById('buscador').value.toLowerCase();
    console.log("Buscador: ", buscador);
    const cursos = document.querySelectorAll('.curso');
    cursos.forEach(curso => {
        const nombre = curso.querySelector('h2').textContent.toLowerCase();
        const descripcion = curso.querySelector('p').textContent.toLowerCase();
        console.log("Nombre: ", nombre, "Descripción: ", descripcion);
        if (nombre.includes(buscador) || descripcion.includes(buscador)) {
            curso.style.display = '';
        } else {
            curso.style.display = 'none';
        }
    });
}
