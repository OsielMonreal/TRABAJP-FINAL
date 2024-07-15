/*Carrito*/
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartButton = document.getElementById('cartButton');
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const clearCartButton = document.getElementById('clearCart');

    const updateCartCount = () => {
        cartCount.textContent = cart.length;
    };

    const updateCartItems = () => {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.onclick = () => {
                cart.splice(index, 1);
                updateCartCount();
                updateCartItems();
            };
            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const course = button.getAttribute('data-course');
            cart.push(course);
            updateCartCount();
            updateCartItems();
        });
    });

    cartButton.addEventListener('click', () => {
        document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
    });

    clearCartButton.addEventListener('click', () => {
        cart.length = 0;
        updateCartCount();
        updateCartItems();
    });

    document.getElementById('searchButton').addEventListener('click', () => {
        const searchValue = document.getElementById('search').value.toLowerCase();
        document.querySelectorAll('.course-item').forEach(item => {
            const courseName = item.getAttribute('data-name').toLowerCase();
            if (courseName.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    updateCartCount();
    updateCartItems();
});

/* Barra de Busqueda*/
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
