document.addEventListener('DOMContentLoaded', () => {
    const progressCtx = document.getElementById('progressChart').getContext('2d');
    const courseProgressCtx = document.getElementById('courseProgressChart').getContext('2d');

    new Chart(progressCtx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [{
                label: 'Progreso Mensual',
                data: [10, 20, 30, 40, 50, 60],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(courseProgressCtx, {
        type: 'bar',
        data: {
            labels: ['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4', 'Curso 5'],
            datasets: [{
                label: 'Progreso del Curso',
                data: [80, 50, 75, 90, 60],
                backgroundColor: [
                    '#28a745',
                    '#ffc107',
                    '#dc3545',
                    '#17a2b8',
                    '#6c757d'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('data-target');

            sections.forEach(section => {
                section.classList.add('hidden');
                if (section.id === target) {
                    section.classList.remove('hidden');
                }
            });
        });
    });
});
