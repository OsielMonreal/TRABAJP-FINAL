const productos = [
    {
        id: 1,
        nombre: 'Matematicas',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/board-4444443_1280.jpg`,
            miniatura: `imagenes/board-4444443_1280.jpg`
        },
        precio: 350
    },
    {
        id: 2,
        nombre: 'Ingles',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/english-2724442_1280.jpg`,
            miniatura: `Imagenes/english-2724442_1280.jpg`
        },
        precio: 400
    },
    {
        id: 3,
        nombre: 'Programación ',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/ai-generated-8237711_1280.jpg`,
            miniatura: `Imagenes/ai-generated-8237711_1280.jpg`
        },
        precio: 450
    },
    {
        id: 4,
        nombre: 'Economia',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/Economia.jpg`,
            miniatura: `Imagenes/Economia.jpg`
        },
        precio: 280
    },
    {
        id: 5,
        nombre: 'Administración',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/Administracion.jpg`,
            miniatura: `Imagenes/Administracion.jpg`
        },
        precio: 340
    },
    {
        id: 6,
        nombre: 'Cocina',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/chef-5993951_1280.jpg`,
            miniatura: `Imagenes/chef-5993951_1280.jpg`
        },
        precio: 500
    },
    {
        id: 7,
        nombre: 'Tejido',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/Curso-Tejido.jpg`,
            miniatura: `Imagenes/Curso-Tejido.jpg`
        },
        precio: 580
    },
    {
        id: 8,
        nombre: 'Marketing Digital',
        descripcion: 'Seleccionar curso.',
        fotos: {
            principal: `Imagenes/marketing-4812381_1920.jpg`,
            miniatura: `Imagenes/marketing-4812381_1920.jpg`
        },
        precio: 370
    }
    // Agrega más productos aquí si es necesario
];

// Contenedor de cursos
const coursesContainer = document.getElementById('courses-container');

// Generar los contenedores de los cursos
courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';

    const courseImage = document.createElement('img');
    courseImage.src = course.image;
    courseImage.alt = `Curso de ${course.title}`;

    const courseTitle = document.createElement('h3');
    courseTitle.textContent = course.title;

    const courseDescription = document.createElement('p');
    courseDescription.textContent = course.description;

    const coursePrice = document.createElement('p');
    coursePrice.textContent = `Precio: ${course.price}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar al Carro';

    courseCard.appendChild(courseImage);
    courseCard.appendChild(courseTitle);
    courseCard.appendChild(courseDescription);
    courseCard.appendChild(coursePrice);
    courseCard.appendChild(addButton);

    coursesContainer.appendChild(courseCard);
});
