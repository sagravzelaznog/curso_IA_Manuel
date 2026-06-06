import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "3-16",
    "fileName": "SESION3-16.html",
    "title": "3.16: Introducción a redes neuronales",
    "meta": "Módulo 3: Machine Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Comprender la inspiración biológica de las redes neuronales</li><li>Conocer la anatomía básica de una red neuronal artificial (nodos, pesos, sesgos)</li><li>Entender la diferencia entre Machine Learning clásico y Deep Learning inicial</li></ul>",
    "content": "<h3>Inspiración Biológica</h3><p>Las Redes Neuronales Artificiales (ANN) se inspiran en el funcionamiento del cerebro humano. Así como las neuronas biológicas se conectan mediante sinapsis para transmitir señales, las ANN usan 'nodos' (neuronas artificiales) conectados por 'pesos' para procesar datos.</p><h3>Arquitectura Básica</h3><p>Una red neuronal simple consta de tres tipos de capas: la capa de entrada (recibe datos), capas ocultas (procesan características) y la capa de salida (predicción final). Cada conexión tiene un 'peso' (weight) que determina su importancia, y cada neurona tiene un 'sesgo' (bias) que ajusta la activación.</p>",
    "practical": "<h3>1. Construyendo una red conceptual</h3><p>Imagina que quieres predecir si vas a jugar tenis. Tus entradas son: Clima, Temperatura y Viento. Dibuja en papel cómo conectarías estas 3 entradas a 2 nodos ocultos y finalmente a 1 nodo de salida (Jugar: Sí/No).</p>",
    "exercises": "<h3>Ejercicio 1</h3><p>Escribe en pseudocódigo o Python una función simple que tome 3 entradas (x1, x2, x3), las multiplique por 3 pesos fijos (w1, w2, w3), sume un sesgo (b) y retorne el resultado.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿En qué se inspiran las redes neuronales artificiales?", "options": ["En los circuitos de la computadora", "En el cerebro humano y sus neuronas biológicas", "En los árboles de decisión", "En bases de datos relacionales"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuáles son las tres partes principales de la arquitectura de una red neuronal?", "options": ["Teclado, Mouse, Monitor", "Capa de entrada, capas ocultas, capa de salida", "Variables, Funciones, Clases", "Nodos, Redes, Internet"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué función cumplen los 'pesos' (weights) en una conexión neuronal?", "options": ["Determinan la importancia o fuerza de la señal de esa conexión", "Hacen que la red sea más pesada en memoria", "Borran la información innecesaria", "Son las salidas finales"], "correctAnswer": 0 },
      { "id": 4, "question": "¿Qué es un 'sesgo' (bias) en una neurona?", "options": ["Un error del programador", "Un valor constante extra que ajusta la activación de la neurona", "Una regla que impide aprender", "El resultado final"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué capa recibe los datos iniciales?", "options": ["Capa de salida", "Capa oculta", "Capa de entrada", "Capa profunda"], "correctAnswer": 2 },
      { "id": 6, "question": "¿Qué capa entrega la predicción final?", "options": ["Capa de salida", "Capa oculta", "Capa de entrada", "Capa de pesos"], "correctAnswer": 0 },
      { "id": 7, "question": "¿Las redes neuronales artificiales son exactamente iguales a los cerebros humanos?", "options": ["Sí, son réplicas exactas", "No, son solo abstracciones matemáticas fuertemente simplificadas", "Sí, pero piensan más rápido", "No, porque no usan electricidad"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "3-17",
    "fileName": "SESION3-17.html",
    "title": "3.17: Perceptrón simple",
    "meta": "Módulo 3: Machine Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender qué es un Perceptrón y su historia</li><li>Comprender la función de activación de escalón unitario</li><li>Aprender por qué el perceptrón simple no puede resolver problemas no lineales (ej. XOR)</li></ul>",
    "content": "<h3>¿Qué es el Perceptrón?</h3><p>Inventado por Frank Rosenblatt en 1957, el perceptrón es la forma más simple de red neuronal. Consiste en una sola neurona que toma múltiples entradas, las multiplica por sus pesos, las suma, añade un sesgo, y pasa el resultado por una 'Función de Activación'.</p><h3>Limitación Lineal</h3><p>El perceptrón original usaba una función de activación tipo 'escalón' (si la suma es > 0 devuelve 1, si no 0). Su mayor problema es que solo puede aprender patrones que son 'linealmente separables', fallando en compuertas lógicas simples como la compuerta XOR.</p>",
    "practical": "<h3>Implementando un Perceptrón Lógico (AND)</h3><pre><code class='language-python'>def perceptron_and(x1, x2):\\n    w1, w2, b = 1, 1, -1.5\\n    suma = (x1 * w1) + (x2 * w2) + b\\n    return 1 if suma > 0 else 0\\n\\nprint(perceptron_and(1, 1)) # Devuelve 1</code></pre>",
    "exercises": "<h3>Ejercicio 1</h3><p>Modifica los pesos y el sesgo del ejemplo anterior para construir una compuerta lógica OR.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Quién inventó el perceptrón?", "options": ["Alan Turing", "Frank Rosenblatt", "Geoffrey Hinton", "Yann LeCun"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es un perceptrón simple?", "options": ["Una red con mil capas", "La forma más simple de red neuronal de una sola neurona", "Un tipo de árbol de decisión", "Una computadora antigua"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué problema famoso NO pudo resolver el perceptrón simple?", "options": ["Suma", "Compuerta AND", "Compuerta XOR", "Compuerta OR"], "correctAnswer": 2 },
      { "id": 4, "question": "¿Qué hace la función de activación de 'escalón'?", "options": ["Devuelve un rango entre 0 y 1", "Devuelve 1 si la suma supera un umbral, de lo contrario 0", "Devuelve el valor exacto de la suma", "Eleva al cuadrado el resultado"], "correctAnswer": 1 },
      { "id": 5, "question": "Matemáticamente, un perceptrón divide el espacio con:", "options": ["Una línea plana (hiperplano)", "Una curva compleja", "Círculos concéntricos", "Polígonos aleatorios"], "correctAnswer": 0 },
      { "id": 6, "question": "En la fórmula: Salida = (w1*x1 + w2*x2) + b, ¿qué es 'b'?", "options": ["Base", "Bias (Sesgo)", "Binary", "Bound"], "correctAnswer": 1 },
      { "id": 7, "question": "Un perceptrón solo puede aprender si los datos son:", "options": ["Linealmente separables", "Totalmente aleatorios", "Imágenes en 3D", "Inseparables"], "correctAnswer": 0 }
    ]
  },
  {
    "id": "3-18",
    "fileName": "SESION3-18.html",
    "title": "3.18: Backpropagation",
    "meta": "Módulo 3: Machine Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Comprender cómo aprenden realmente las redes neuronales</li><li>Entender el concepto de 'Función de Costo' o 'Pérdida'</li><li>Conocer cómo el algoritmo de propagación hacia atrás actualiza los pesos</li></ul>",
    "content": "<h3>El problema del aprendizaje</h3><p>Si la red adivina mal, ¿cómo sabe qué pesos debe cambiar? Aquí entra el algoritmo de Retropropagación (Backpropagation). Este algoritmo calcula el error (diferencia entre la predicción y el valor real) en la capa de salida y lo propaga 'hacia atrás' por toda la red.</p><h3>Gradiente Descendente</h3><p>Utilizando cálculo (derivadas), la red averigua en qué dirección debe modificar cada peso individual para que, la próxima vez, el error sea un poco menor. A esto se le conoce como 'Gradiente Descendente'.</p>",
    "practical": "<h3>Intuición del Gradiente Descendente</h3><p>Imagina que estás vendado en la cima de una montaña y quieres bajar. Tanteas el suelo con tu pie (derivada) y das un paso hacia donde hay más pendiente de bajada. Repites esto (épocas) hasta llegar al valle (error mínimo).</p>",
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga y escribe en un comentario la diferencia entre una 'Época' (Epoch) y un 'Lote' (Batch) en el entrenamiento de redes neuronales.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué algoritmo permite a las redes neuronales ajustar sus pesos y aprender?", "options": ["Árboles de decisión", "Backpropagation (Retropropagación)", "Búsqueda Binaria", "K-means"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué representa la 'Función de Costo' (Loss Function)?", "options": ["El precio de entrenar el modelo", "El error o diferencia entre la predicción y la respuesta real", "La cantidad de memoria RAM usada", "El número de capas de la red"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué método matemático se usa en backpropagation para saber cómo cambiar los pesos?", "options": ["Sumas simples", "Cálculo diferencial (Derivadas / Gradientes)", "Trigonometría básica", "Geometría"], "correctAnswer": 1 },
      { "id": 4, "question": "En la analogía de la montaña, ¿qué representa estar en el punto más bajo (el valle)?", "options": ["El máximo error", "El mínimo error posible (pesos óptimos)", "El inicio del entrenamiento", "Una neurona apagada"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué significa que el error se propaga 'hacia atrás'?", "options": ["Que la red desaprende", "Que el error se calcula en la salida y se reparte la culpa a las capas anteriores", "Que los datos se leen al revés", "Que solo funciona en Python antiguo"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué es una Época (Epoch)?", "options": ["Un año de entrenamiento", "Una pasada completa de TODOS los datos de entrenamiento a través de la red", "Una sola imagen analizada", "Un error fatal"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué hace el 'Learning Rate' (Tasa de aprendizaje)?", "options": ["Define qué tan rápido lee la computadora", "Controla el tamaño del 'paso' que se da al ajustar los pesos", "Cuenta las horas de ejecución", "Detiene el entrenamiento automáticamente"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "3-19",
    "fileName": "SESION3-19.html",
    "title": "3.19: Redes neuronales multicapa",
    "meta": "Módulo 3: Machine Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Diferenciar entre un perceptrón simple y un Perceptrón Multicapa (MLP)</li><li>Entender la importancia de funciones de activación no lineales como ReLU o Sigmoide</li><li>Identificar la estructura de una red densamente conectada</li></ul>",
    "content": "<h3>Perceptrón Multicapa (MLP)</h3><p>Al agregar 'capas ocultas' entre la entrada y la salida, obtenemos una Red Neuronal Multicapa. Esto resuelve el problema de la no-linealidad que tenía el perceptrón simple (ej. puede resolver XOR). Se les llama 'densas' porque cada neurona de una capa se conecta a todas las de la siguiente.</p><h3>Funciones de Activación No Lineales</h3><p>Para que las capas ocultas sirvan de algo, necesitan no-linealidad. Las funciones más usadas hoy son ReLU (Rectified Linear Unit), Sigmoide y Tanh. Sin ellas, una red de mil capas sería matemáticamente igual a una red de una sola capa.</p>",
    "practical": "<h3>Visualizando Funciones de Activación</h3><pre><code class='language-python'>import numpy as np\\n\\ndef relu(x):\\n    return np.maximum(0, x)\\n\\ndef sigmoid(x):\\n    return 1 / (1 + np.exp(-x))</code></pre><p>ReLU simplemente convierte todos los números negativos a 0, y deja los positivos igual.</p>",
    "exercises": "<h3>Ejercicio 1</h3><p>Escribe una función en Python que simule la función de activación 'Leaky ReLU', la cual en vez de devolver 0 para números negativos, devuelve el número multiplicado por 0.01.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué es un Perceptrón Multicapa (MLP)?", "options": ["Una red con una sola neurona enorme", "Una red que incluye capas ocultas entre la entrada y la salida", "Una base de datos paralela", "Un servidor multicore"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Por qué el MLP sí puede resolver el problema XOR?", "options": ["Porque tiene funciones de activación no lineales y capas ocultas", "Porque usa más memoria RAM", "Porque está programado en C++", "Porque los datos son ignorados"], "correctAnswer": 0 },
      { "id": 3, "question": "¿Qué significa que una capa sea 'Densa' (Dense)?", "options": ["Que su código es difícil de leer", "Que cada neurona está conectada a TODAS las neuronas de la capa anterior", "Que pesa muchos Megabytes", "Que no se puede modificar"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué hace la función de activación ReLU con un número negativo (ej. -5)?", "options": ["Lo vuelve positivo (5)", "Devuelve 0", "Devuelve -5", "Lo eleva al cuadrado"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué pasaría si usáramos solo funciones 'Lineales' en múltiples capas ocultas?", "options": ["La red sería increíblemente poderosa", "La red matemáticamente colapsaría al equivalente de tener solo una capa", "Habría un error de sintaxis", "Nada especial"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué rango de valores devuelve la función Sigmoide?", "options": ["-1 a 1", "0 a infinito", "0 a 1", "1 a 100"], "correctAnswer": 2 },
      { "id": 7, "question": "¿Para qué tipo de tareas en la capa de salida es excelente la función Sigmoide?", "options": ["Clasificación binaria (probabilidades)", "Suma de enteros", "Pintar imágenes", "Reproducir audio"], "correctAnswer": 0 }
    ]
  },
  {
    "id": "3-20",
    "fileName": "SESION3-20.html",
    "title": "3.20: Regularización en ML",
    "meta": "Módulo 3: Machine Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender qué es el Overfitting (Sobreajuste) y Underfitting</li><li>Aprender técnicas de regularización como Dropout o L2</li><li>Saber cómo usar datos de validación para prevenir el memorizado</li></ul>",
    "content": "<h3>El problema del Overfitting</h3><p>Las redes neuronales son tan poderosas que a menudo 'memorizan' los datos de entrenamiento en lugar de encontrar patrones generales. Cuando esto ocurre, la red tiene un error cercano a cero en entrenamiento, pero falla estrepitosamente con datos nuevos. A esto se le llama Overfitting.</p><h3>Dropout y L1/L2</h3><p>Para evitarlo, usamos la Regularización. 'Dropout' es una técnica donde aleatoriamente 'apagamos' un porcentaje de neuronas durante el entrenamiento, obligando a la red a no depender de unas pocas conexiones. L1 y L2 (Ridge/Lasso) penalizan los pesos muy grandes en la función de costo.</p>",
    "practical": "<h3>Visualizando el Underfitting vs Overfitting</h3><p>Imagina que quieres separar puntos azules de rojos. Underfitting traza una línea recta torpe que falla mucho. Un modelo óptimo hace una curva suave y general. Overfitting dibuja una línea loca, temblorosa, que toca perfectamente todos los puntos de entrenamiento pero no sirve para el mundo real.</p>",
    "exercises": "<h3>Ejercicio 1</h3><p>Analiza: Si ves que la precisión de tu modelo en Entrenamiento sube a 99%, pero en Validación baja repentinamente a 70%, ¿qué está pasando y qué técnica aplicarías?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué es el Overfitting (Sobreajuste)?", "options": ["Cuando el modelo es muy simple y no aprende nada", "Cuando el modelo memoriza el entrenamiento y pierde capacidad de generalizar datos nuevos", "Cuando la computadora se calienta", "Cuando el modelo es perfecto en todo"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es el Underfitting (Subajuste)?", "options": ["Cuando el modelo es tan simple que ni siquiera aprende los datos de entrenamiento", "Cuando la red memoriza los datos", "Un método de regularización", "Cuando hay demasiadas capas"], "correctAnswer": 0 },
      { "id": 3, "question": "¿Qué es la técnica de 'Dropout'?", "options": ["Sacar a la red neuronal del programa", "Apagar aleatoriamente ciertas neuronas durante el entrenamiento para forzar robustez", "Borrar datos de entrenamiento", "Bajar el learning rate a 0"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué síntoma claro nos indica que hay Overfitting?", "options": ["Error alto en entrenamiento y validación", "Error bajo en entrenamiento, pero error muy alto en validación", "El programa no compila", "Error bajo en ambos sets"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué hacen las regularizaciones L1 y L2 matemáticamente?", "options": ["Suman nuevas capas a la red", "Multiplican los datos por 1 y 2", "Añaden una penalización en la función de costo basada en el tamaño de los pesos", "Borran la base de datos"], "correctAnswer": 2 },
      { "id": 6, "question": "¿Por qué 'memorizar' es malo para una IA?", "options": ["Porque ocupa mucha memoria de disco", "Porque no podrá predecir situaciones nuevas y ligeramente diferentes", "Porque es inmoral", "Memorizar nunca es malo en IA"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué nombre recibe el conjunto de datos que NO se usa para entrenar, pero sirve para medir el overfitting?", "options": ["Training Set (Entrenamiento)", "Validation/Test Set (Validación/Prueba)", "Null Set (Vacío)", "Database"], "correctAnswer": 1 }
    ]
  }
];

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

// Insert or replace the new sessions
newSessions.forEach(newSession => {
  const existingIndex = data.findIndex(s => s.id === newSession.id);
  if (existingIndex !== -1) {
    data[existingIndex] = newSession;
  } else {
    data.push(newSession);
  }
});

// Sort to ensure correct order
data.sort((a, b) => {
  const [modA, numA] = a.id.split('-').map(Number);
  const [modB, numB] = b.id.split('-').map(Number);
  if (modA !== modB) return modA - modB;
  return numA - numB;
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully created/updated sessions 3.16 to 3.20');
