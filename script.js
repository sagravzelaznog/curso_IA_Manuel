// Función para cambiar entre pestañas de sistemas operativos
function openTab(evt, osName) {
    // Ocultar todos los contenidos de pestañas
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Desactivar todas las pestañas
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Mostrar la pestaña seleccionada
    document.getElementById(osName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Función para mostrar/ocultar pistas y soluciones
function toggleHint(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('visible');
    
    // Opcional: Desplazarse suavemente al elemento
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Función para copiar código al portapapeles
function copyToClipboard(element) {
    const code = element.textContent;
    navigator.clipboard.writeText(code).then(() => {
        // Mostrar notificación de copiado
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = '¡Código copiado!';
        document.body.appendChild(notification);
        
        // Eliminar la notificación después de 2 segundos
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

// Función para inicializar los event listeners de los bloques de código
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar la primera pestaña como activa
    const firstTab = document.querySelector('.tab-button');
    const firstTabContent = document.querySelector('.tab-content');
    if (firstTab && firstTabContent) {
        firstTab.classList.add('active');
        firstTabContent.classList.add('active');
    }

    // Agregar botón de copiar a los bloques de código
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach(block => {
        // Crear botón de copiar
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.title = 'Copiar al portapapeles';
        copyButton.innerHTML = '<i class="far fa-copy"></i>';
        
        // Posicionar el botón en la esquina superior derecha
        block.style.position = 'relative';
        copyButton.style.position = 'absolute';
        copyButton.style.top = '8px';
        copyButton.style.right = '8px';
        copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
        copyButton.style.border = 'none';
        copyButton.style.borderRadius = '4px';
        copyButton.style.padding = '4px 8px';
        copyButton.style.cursor = 'pointer';
        copyButton.style.transition = 'background 0.3s';
        
        copyButton.addEventListener('mouseover', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.3)';
        });
        
        copyButton.addEventListener('mouseout', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        copyButton.addEventListener('click', () => {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="far fa-copy"></i>';
                }, 2000);
            });
        });
        
        block.appendChild(copyButton);
    });

    // Configurar navegación entre sesiones
    setupNavigation();
});

// Función para configurar la navegación entre sesiones
function setupNavigation() {
    // Aquí podrías implementar la lógica para navegar entre sesiones
    // Por ahora, solo actualizamos los enlaces para que no recarguen la página
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Lógica de navegación entre sesiones iría aquí
            console.log('Navegación a:', this.textContent);
        });
    });
}

// Datos del curso
const courseData = {
    modulo1: {
        titulo: "Introducción a Python",
        sesiones: [
            "1.1: Instalación y configuración de Python",
            "1.2: Variables y tipos de datos",
            "1.3: Operadores y expresiones",
            "1.4: Estructuras de control (if, else, loops)",
            "1.5: Funciones y módulos",
            "1.6: Listas y tuplas",
            "1.7: Diccionarios y conjuntos",
            "1.8: Manejo de archivos",
            "1.9: Manejo de excepciones",
            "1.10: Programación funcional",
            "1.11: Programación orientada a objetos (I)",
            "1.12: Programación orientada a objetos (II)",
            "1.13: Módulos y paquetes",
            "1.14: Pruebas unitarias",
            "1.15: Proyecto integrador Python"
        ]
    },
    modulo2: {
        titulo: "Matemáticas para IA",
        sesiones: [
            "2.1: Álgebra lineal básica",
            "2.2: Vectores y matrices",
            "2.3: Sistemas de ecuaciones lineales",
            "2.4: Valores y vectores propios",
            "2.5: Cálculo diferencial (I)",
            "2.6: Cálculo diferencial (II)",
            "2.7: Gradientes y derivadas parciales",
            "2.8: Probabilidad básica",
            "2.9: Distribuciones de probabilidad",
            "2.10: Estadística descriptiva",
            "2.11: Teorema de Bayes",
            "2.12: Optimización (I)",
            "2.13: Optimización (II)",
            "2.14: Aplicaciones prácticas",
            "2.15: Ejercicios integradores"
        ]
    },
    modulo3: {
        titulo: "Machine Learning",
        sesiones: [
            "3.1: Introducción a ML",
            "3.2: Preprocesamiento de datos",
            "3.3: Regresión lineal",
            "3.4: Regresión logística",
            "3.5: K-vecinos más cercanos",
            "3.6: Árboles de decisión",
            "3.7: Bosques aleatorios",
            "3.8: Máquinas de vectores de soporte (SVM)",
            "3.9: K-means clustering",
            "3.10: Reducción de dimensionalidad",
            "3.11: Selección de características",
            "3.12: Evaluación de modelos (I)",
            "3.13: Evaluación de modelos (II)",
            "3.14: Aprendizaje no supervisado",
            "3.15: Proyecto: Análisis predictivo",
            "3.16: Introducción a redes neuronales",
            "3.17: Perceptrón simple",
            "3.18: Backpropagation",
            "3.19: Redes neuronales multicapa",
            "3.20: Regularización en ML"
        ]
    },
    modulo4: {
        titulo: "Deep Learning",
        sesiones: [
            "4.1: Introducción a Deep Learning",
            "4.2: TensorFlow/PyTorch básico",
            "4.3: Redes Neuronales con Keras",
            "4.4: Redes Neuronales Convolucionales (I)",
            "4.5: Redes Neuronales Convolucionales (II)",
            "4.6: Transfer Learning",
            "4.7: Procesamiento de imágenes",
            "4.8: Redes Neuronales Recurrentes (I)",
            "4.9: Redes Neuronales Recurrentes (II)",
            "4.10: LSTM y GRU",
            "4.11: Procesamiento de lenguaje natural (I)",
            "4.12: Procesamiento de lenguaje natural (II)",
            "4.13: Word Embeddings",
            "4.14: Redes Generativas Adversarias (I)",
            "4.15: Redes Generativas Adversarias (II)",
            "4.16: Autoencoders",
            "4.17: Reinforcement Learning básico",
            "4.18: Aprendizaje por refuerzo profundo",
            "4.19: Redes de atención",
            "4.20: Transformers"
        ]
    },
    modulo5: {
        titulo: "Proyectos Avanzados",
        sesiones: [
            "5.1: Proyecto: Reconocimiento de imágenes",
            "5.2: Proyecto: Chatbot con NLP",
            "5.3: Proyecto: Sistema de recomendación",
            "5.4: Proyecto: Generación de texto",
            "5.5: Proyecto: Detección de objetos",
            "5.6: Despliegue de modelos (I)",
            "5.7: Despliegue de modelos (II)",
            "5.8: API REST para modelos de IA",
            "5.9: Aplicaciones web con IA",
            "5.10: Aplicaciones móviles con IA",
            "5.11: Optimización de modelos",
            "5.12: Ética en IA",
            "5.13: Sesgos en IA",
            "5.14: Futuro de la IA",
            "5.15: Proyecto final (I)",
            "5.16: Proyecto final (II)",
            "5.17: Proyecto final (III)",
            "5.18: Presentación de proyectos",
            "5.19: Revisión y retroalimentación",
            "5.20: Cierre del curso"
        ]
    }
};

// Función para crear las tarjetas de sesión
function createSessionCards() {
    // Módulo 1 (Sesiones 1-15)
    const container1 = document.getElementById('sessions1-15');
    courseData.modulo1.sesiones.forEach((sesion, index) => {
        container1.appendChild(createSessionCard(index + 1, sesion));
    });

    // Módulo 2 (Sesiones 16-30)
    const container2 = document.getElementById('sessions16-30');
    courseData.modulo2.sesiones.forEach((sesion, index) => {
        container2.appendChild(createSessionCard(index + 16, sesion));
    });

    // Módulo 3 (Sesiones 31-50)
    const container3 = document.getElementById('sessions31-50');
    courseData.modulo3.sesiones.forEach((sesion, index) => {
        container3.appendChild(createSessionCard(index + 31, sesion));
    });

    // Módulo 4 (Sesiones 51-80)
    const container4 = document.getElementById('sessions51-80');
    courseData.modulo4.sesiones.forEach((sesion, index) => {
        container4.appendChild(createSessionCard(index + 51, sesion));
    });

    // Módulo 5 (Sesiones 81-100)
    const container5 = document.getElementById('sessions81-100');
    courseData.modulo5.sesiones.forEach((sesion, index) => {
        container5.appendChild(createSessionCard(index + 81, sesion));
    });
}

// Función auxiliar para crear una tarjeta de sesión
function createSessionCard(number, title) {
    const card = document.createElement('div');
    card.className = 'session-card';
    
    // Crear enlace que envuelve toda la tarjeta
    const link = document.createElement('a');
    link.className = 'session-link';
    
    // Determinar el nombre del archivo basado en el número de sesión
    let fileName = '';
    
    if (number <= 15) {
        // Módulo 1: SESION1-1.html a SESION1-15.html
        fileName = `SESION1-${number}.html`;
    } else if (number <= 30) {
        // Módulo 2: SESION2-1.html a SESION2-15.html
        fileName = `SESION2-${number - 15}.html`;
    } else if (number <= 50) {
        // Módulo 3: SESION3-1.html a SESION3-20.html
        fileName = `SESION3-${number - 30}.html`;
    } else if (number <= 80) {
        // Módulo 4: SESION4-1.html a SESION4-30.html
        fileName = `SESION4-${number - 50}.html`;
    } else {
        // Módulo 5: SESION5-1.html a SESION5-20.html
        fileName = `SESION5-${number - 80}.html`;
    }
    
    // Asignar la ruta del archivo al enlace
    link.href = fileName;
    
    // Verificar si el archivo existe
    checkFileExists(fileName, (exists) => {
        if (!exists) {
            link.classList.add('disabled');
            link.href = '#';
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Esta sesión estará disponible próximamente.');
            });
        } else {
            // Asegurarse de que el enlace funcione correctamente
            link.addEventListener('click', (e) => {
                // Permitir que el navegador maneje la navegación
                return true;
            });
        }
    });
    
    const sessionNumber = document.createElement('div');
    sessionNumber.className = 'session-number';
    sessionNumber.textContent = `Sesión ${number}`;
    
    const sessionTitle = document.createElement('div');
    sessionTitle.className = 'session-title';
    sessionTitle.textContent = title.split(': ')[1] || title;
    
    const sessionDesc = document.createElement('div');
    sessionDesc.className = 'session-desc';
    sessionDesc.textContent = getSessionDescription(number);
    
    // Añadir elementos al enlace
    link.appendChild(sessionNumber);
    link.appendChild(sessionTitle);
    link.appendChild(sessionDesc);
    
    // Añadir el enlace a la tarjeta
    card.appendChild(link);
    
    // Marcar la sesión actual
    const currentSession = getCurrentSession();
    if (number === currentSession) {
        card.classList.add('current');
    } else if (number < currentSession) {
        card.classList.add('completed');
    }
    
    return card;
}

// Lista de archivos existentes (se llenará dinámicamente)
const existingFiles = [
    'SESION1-1.html', 'SESION1-2.html', 'SESION1-3.html', 'SESION1-4.html', 'SESION1-5.html',
    'SESION1-6.html', 'SESION1-7.html', 'SESION1-8.html', 'SESION1-9.html', 'SESION1-10.html',
    'SESION1-11.html', 'SESION1-12.html', 'SESION1-13.html', 'SESION1-14.html', 'SESION1-15.html',
    'SESION2-1.html', 'SESION2-2.html', 'SESION2-3.html', 'SESION2-4.html', 'SESION2-5.html',
    'SESION2-6.html', 'SESION2-7.html', 'SESION2-8.html', 'SESION2-9.html', 'SESION2-10.html',
    'SESION2-11.html', 'SESION2-12.html', 'SESION2-13.html', 'SESION2-14.html', 'SESION2-15.html',
    'SESION3-1.html', 'SESION3-2.html', 'SESION3-3.html', 'SESION3-4.html', 'SESION3-5.html',
    'SESION3-6.html', 'SESION3-7.html', 'SESION3-8.html', 'SESION3-9.html', 'SESION3-10.html',
    'SESION3-11.html', 'SESION3-12.html', 'SESION3-13.html', 'SESION3-14.html', 'SESION3-15.html',
    'SESION3-16.html', 'SESION3-17.html', 'SESION3-18.html', 'SESION3-19.html', 'SESION3-20.html',
    'SESION4-1.html', 'SESION4-2.html', 'SESION4-3.html', 'SESION4-4.html', 'SESION4-5.html',
    'SESION4-6.html', 'SESION4-7.html', 'SESION4-8.html', 'SESION4-9.html', 'SESION4-10.html',
    'SESION4-11.html', 'SESION4-12.html', 'SESION4-13.html', 'SESION4-14.html', 'SESION4-15.html',
    'SESION4-16.html', 'SESION4-17.html', 'SESION4-18.html', 'SESION4-19.html', 'SESION4-20.html',
    'SESION4-21.html', 'SESION4-22.html', 'SESION4-23.html', 'SESION4-24.html', 'SESION4-25.html',
    'SESION4-26.html', 'SESION4-27.html', 'SESION4-28.html', 'SESION4-29.html', 'SESION4-30.html',
    'SESION5-1.html', 'SESION5-2.html', 'SESION5-3.html', 'SESION5-4.html', 'SESION5-5.html',
    'SESION5-6.html', 'SESION5-7.html', 'SESION5-8.html', 'SESION5-9.html', 'SESION5-10.html',
    'SESION5-11.html', 'SESION5-12.html', 'SESION5-13.html', 'SESION5-14.html', 'SESION5-15.html',
    'SESION5-16.html', 'SESION5-17.html', 'SESION5-18.html', 'SESION5-19.html', 'SESION5-20.html'
];

// Función para verificar si un archivo existe
function checkFileExists(url, callback) {
    // Verificar contra la lista de archivos existentes
    const exists = existingFiles.includes(url);
    callback(exists);
}

// Función para obtener la descripción de la sesión
function getSessionDescription(sessionNumber) {
    // Aquí podrías agregar descripciones más detalladas para cada sesión
    if (sessionNumber <= 15) {
        return `Aprende los fundamentos de Python para IA`;
    } else if (sessionNumber <= 30) {
        return `Conceptos matemáticos esenciales para IA`;
    } else if (sessionNumber <= 50) {
        return `Técnicas de Machine Learning`;
    } else if (sessionNumber <= 80) {
        return `Técnicas avanzadas de Deep Learning`;
    } else {
        return `Proyecto práctico de IA`;
    }
}

// Función para determinar la sesión actual
function getCurrentSession() {
    // Aquí podrías implementar la lógica para determinar la sesión actual
    // Por ahora, devolvemos 1 como valor por defecto
    return 1;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createSessionCards();
    
    // Agregar funcionalidad de búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterSessions);
    }
});

// Función para filtrar sesiones (opcional)
function filterSessions(event) {
    const searchTerm = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.session-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.session-title').textContent.toLowerCase();
        const desc = card.querySelector('.session-desc').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Función para marcar una sesión como completada
function markAsCompleted(sessionNumber) {
    // Aquí podrías implementar la lógica para guardar el progreso
    console.log(`Sesión ${sessionNumber} marcada como completada`);
}

// Función para exportar a PDF (esqueleto para implementación futura)
function exportToPDF() {
    // Implementar la lógica de exportación a PDF
    console.log('Exportando a PDF...');
}
