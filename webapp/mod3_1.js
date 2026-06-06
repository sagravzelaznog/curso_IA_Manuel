import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const quizzes = {
  "3-1": [
    { id: 1, question: "¿Qué es el Machine Learning (Aprendizaje Automático)?", options: ["Programar robots", "Un subcampo de la IA que da a las computadoras la habilidad de aprender de los datos sin ser programadas explícitamente", "Crear bases de datos", "Diseñar hardware"], correctAnswer: 1 },
    { id: 2, question: "¿Quién acuñó el término 'Machine Learning' en 1959?", options: ["Alan Turing", "Arthur Samuel", "Elon Musk", "Bill Gates"], correctAnswer: 1 },
    { id: 3, question: "¿Cuál es la diferencia entre programación tradicional y Machine Learning?", options: ["En la tradicional ingresas datos y reglas para obtener respuestas; en ML ingresas datos y respuestas para que la máquina descubra las reglas", "No hay diferencia", "El ML usa lenguajes más viejos", "La tradicional es más rápida"], correctAnswer: 0 },
    { id: 4, question: "¿Qué es el Aprendizaje Supervisado?", options: ["Dejar al modelo solo", "El modelo aprende de datos que ya están etiquetados con la respuesta correcta", "El modelo juega videojuegos", "El modelo busca patrones sin etiquetas"], correctAnswer: 1 },
    { id: 5, question: "¿Qué es el Aprendizaje No Supervisado?", options: ["Aprender de datos etiquetados", "El modelo debe encontrar patrones y estructuras ocultas en datos SIN etiquetar", "Aprender con un profesor al lado", "Aprender de los errores de un robot"], correctAnswer: 1 },
    { id: 6, question: "¿Qué es el Aprendizaje por Refuerzo (Reinforcement Learning)?", options: ["Aprender castigando a los empleados", "Un agente aprende a tomar decisiones en un entorno maximizando una recompensa (trial and error)", "Estudiar con libros", "K-Means"], correctAnswer: 1 },
    { id: 7, question: "¿Cuál es el flujo de trabajo típico de Machine Learning?", options: ["Programar -> Compilar -> Ejecutar", "Recopilar datos -> Preprocesar -> Entrenar Modelo -> Evaluar -> Desplegar", "Descargar de internet -> Usar", "Instalar Python -> Cerrar PC"], correctAnswer: 1 }
  ],
  "3-2": [
    { id: 1, question: "¿Por qué el preprocesamiento de datos es a menudo el paso que toma más tiempo en Data Science?", options: ["Por lentitud del PC", "Porque los datos del mundo real están incompletos, tienen ruido, inconsistencias y deben limpiarse antes de modelar", "Porque Python es lento", "Para hacer tiempo"], correctAnswer: 1 },
    { id: 2, question: "¿Qué es un valor nulo o faltante (Missing Value o NaN)?", options: ["Un cero absoluto", "Un dato que no fue registrado o se perdió", "Un texto vacío", "Un error de compilación"], correctAnswer: 1 },
    { id: 3, question: "¿Cuál es una técnica común para manejar valores faltantes en una columna numérica?", options: ["Borrar todo el disco duro", "Imputación (rellenarlos con la media, mediana o moda de la columna)", "Dejarlos así", "Ponerles letras"], correctAnswer: 1 },
    { id: 4, question: "¿Qué es el 'One-Hot Encoding'?", options: ["Una técnica para enfriar el procesador", "Una técnica para convertir variables categóricas (texto) en múltiples columnas binarias de ceros y unos", "Un algoritmo de compresión", "Una forma de encriptar"], correctAnswer: 1 },
    { id: 5, question: "¿Por qué es importante el Escalamiento o Normalización de características numéricas?", options: ["Para que los números se vean bonitos", "Para que las variables con valores numéricos muy grandes no dominen a las de valores pequeños en el modelo", "Para ahorrar espacio", "No es importante"], correctAnswer: 1 },
    { id: 6, question: "¿Qué hace la Estandarización (StandardScaler en Scikit-Learn)?", options: ["Pone todos los datos de 0 a 1", "Transforma los datos para que tengan una media de 0 y una desviación estándar de 1", "Convierte todo a Standard Text", "Borra números negativos"], correctAnswer: 1 },
    { id: 7, question: "¿Qué es el conjunto de Entrenamiento (Train Set)?", options: ["Los datos que no se usan", "La porción de datos que el modelo utiliza para aprender las reglas y ajustar sus parámetros", "Los datos de prueba final", "Los datos borrados"], correctAnswer: 1 }
  ],
  "3-3": [
    { id: 1, question: "¿Qué tipo de problema resuelve la Regresión Lineal?", options: ["Predecir categorías (Gato/Perro)", "Predecir un valor numérico continuo (ej. precio de una casa, salario)", "Agrupar usuarios", "Generar imágenes"], correctAnswer: 1 },
    { id: 2, question: "En la ecuación de regresión simple y = mx + b, ¿qué representa 'm'?", options: ["La variable dependiente", "El sesgo o intersección", "El coeficiente o la pendiente (peso de la característica)", "El error"], correctAnswer: 2 },
    { id: 3, question: "¿Qué algoritmo se usa internamente a menudo para encontrar la 'mejor línea' en regresión lineal?", options: ["Mínimos Cuadrados Ordinarios (OLS)", "K-Means", "Árboles Binarios", "Búsqueda en amplitud"], correctAnswer: 0 },
    { id: 4, question: "¿Qué significa que sea 'Múltiple' (Regresión Lineal Múltiple)?", options: ["Que se ejecuta en múltiples PCs", "Que usa múltiples variables independientes (características) para predecir la variable dependiente", "Que predice varios valores", "Que se repite varias veces"], correctAnswer: 1 },
    { id: 5, question: "¿Cuál es una de las suposiciones principales de la Regresión Lineal?", options: ["Que existe una relación lineal entre las variables de entrada y la salida", "Que no se necesitan datos", "Que los datos deben formar círculos", "Que solo funciona con texto"], correctAnswer: 0 },
    { id: 6, question: "¿Qué es el MSE (Error Cuadrático Medio)?", options: ["El número total de datos", "El promedio de los errores al cuadrado entre los valores predichos y los reales", "Una métrica de precisión para clasificación", "La suma de los datos"], correctAnswer: 1 },
    { id: 7, question: "¿Qué métrica nos indica qué porcentaje de la varianza en los datos es explicada por nuestro modelo lineal (varía de 0 a 1)?", options: ["MSE", "RMSE", "R-Cuadrado (R²)", "MAE"], correctAnswer: 2 }
  ],
  "3-4": [
    { id: 1, question: "¿A pesar de su nombre, qué tipo de problema resuelve la Regresión Logística?", options: ["Problemas de Regresión (números continuos)", "Problemas de Clasificación Binaria o Multiclase (categorías)", "Problemas de compresión de audio", "Problemas matemáticos sin solución"], correctAnswer: 1 },
    { id: 2, question: "¿Qué función matemática es el núcleo de la Regresión Logística para aplastar la salida entre 0 y 1?", options: ["Función Seno", "Función Lineal", "Función Sigmoide (Logística)", "Función Exponencial"], correctAnswer: 2 },
    { id: 3, question: "Si la Regresión Logística devuelve el valor 0.85 para un correo, ¿qué significa típicamente?", options: ["Que el correo mide 0.85 KB", "Que hay un 85% de probabilidad de que pertenezca a la clase positiva (ej. es SPAM)", "Que el correo tiene 85 palabras", "Que el código falló"], correctAnswer: 1 },
    { id: 4, question: "¿Cuál es el umbral de decisión (threshold) más comúnmente usado por defecto?", options: ["0.0", "1.0", "0.5", "10.0"], correctAnswer: 2 },
    { id: 5, question: "¿Puede la regresión logística ser usada para clasificar más de 2 clases (ej. Gato, Perro, Pájaro)?", options: ["No, imposible", "Sí, mediante técnicas como One-vs-Rest (OVR) o regresión softmax/multinomial", "Solo si es un Perro", "Sí, pero solo con números pares"], correctAnswer: 1 },
    { id: 6, question: "¿Qué ventajas tiene la Regresión Logística?", options: ["Es muy compleja y lenta", "Es rápida, interpretable (podemos ver el peso de cada variable) y da probabilidades reales", "Hace dibujos", "Sustituye a las redes neuronales"], correctAnswer: 1 },
    { id: 7, question: "¿Qué pasa si las clases en nuestros datos no son separables linealmente?", options: ["La regresión logística estándar tendrá un rendimiento muy pobre", "Funcionará perfecto", "Explotará el disco", "Aprenderá magia"], correctAnswer: 0 }
  ],
  "3-5": [
    { id: 1, question: "¿Qué significa KNN?", options: ["Kilo Neural Networks", "K-Nearest Neighbors (K-Vecinos Más Cercanos)", "K-Nodos Naturales", "Kept New Numbers"], correctAnswer: 1 },
    { id: 2, question: "¿Qué tipo de algoritmo es KNN?", options: ["Basado en Gradientes", "Algoritmo 'Perezoso' (Lazy Learning) o basado en instancias, porque no aprende una ecuación, solo memoriza el dataset", "Red Neuronal profunda", "Aprendizaje no supervisado"], correctAnswer: 1 },
    { id: 3, question: "¿Cómo decide KNN la clase de un nuevo dato?", options: ["Lanza un dado", "Calcula la distancia a todos los puntos del dataset de entrenamiento, selecciona los 'K' más cercanos y hace una votación de mayoría", "Por regresión logística", "Preguntando al usuario"], correctAnswer: 1 },
    { id: 4, question: "¿Qué métrica de distancia es la más utilizada en KNN?", options: ["Distancia de Manhattan", "Distancia Euclidiana (línea recta)", "Distancia de Chebyshev", "Distancia Cosina"], correctAnswer: 1 },
    { id: 5, question: "¿Qué es el parámetro 'K'?", options: ["Un error", "Una constante matemática", "El número entero de vecinos cercanos que el algoritmo debe considerar para la votación", "Kilos de memoria"], correctAnswer: 2 },
    { id: 6, question: "¿Por qué se recomienda elegir un 'K' impar para clasificación binaria?", options: ["Por superstición", "Para evitar empates en la votación", "Porque es más rápido", "Porque no acepta pares"], correctAnswer: 1 },
    { id: 7, question: "¿Cuál es una desventaja importante de KNN?", options: ["Es muy lento durante la predicción si el dataset es gigante (porque debe medir distancia contra TODOS los puntos)", "No sirve para clasificación", "Es muy difícil de entender", "Requiere mil horas para entrenar"], correctAnswer: 0 }
  ],
  "3-6": [
    { id: 1, question: "¿Qué es un Árbol de Decisión?", options: ["Un tipo de planta gráfica", "Un modelo de ML en forma de diagrama de flujo que toma decisiones mediante reglas SI-ENTONCES (if-then)", "Una red de bases de datos", "Un método de encriptación"], correctAnswer: 1 },
    { id: 2, question: "¿Cómo se llama el nodo superior de un árbol de decisión?", options: ["Hoja", "Rama", "Nodo Raíz (Root Node)", "Tallo"], correctAnswer: 2 },
    { id: 3, question: "¿Cómo se llaman los nodos finales que entregan la predicción (donde el árbol termina)?", options: ["Nodos Raíz", "Nodos Ocultos", "Nodos Hoja (Leaf Nodes)", "Nodos Fruto"], correctAnswer: 2 },
    { id: 4, question: "¿Qué métricas matemáticas usa el árbol de decisión para saber en qué característica (variable) dividir los datos?", options: ["Trigonometría", "Índice de Gini o Ganancia de Información (Entropía)", "Mínimos cuadrados puros", "Números aleatorios"], correctAnswer: 1 },
    { id: 5, question: "¿Qué significa que un nodo tenga 'Impureza de Gini' igual a 0?", options: ["Que el algoritmo falló", "Que el nodo es perfectamente puro (todos los datos en ese nodo pertenecen a una sola clase)", "Que el árbol está roto", "Que hay entropía máxima"], correctAnswer: 1 },
    { id: 6, question: "¿Cuál es el mayor defecto de los Árboles de Decisión simples?", options: ["Son difíciles de explicar", "Son muy propensos a sufrir un grave Overfitting (sobreajuste), creando árboles gigantes que memorizan el ruido", "Solo suman números", "No se pueden dibujar"], correctAnswer: 1 },
    { id: 7, question: "¿Qué técnica se utiliza para reducir el tamaño de un árbol gigante y evitar el overfitting?", options: ["Riego (Watering)", "Poda (Pruning)", "Fertilización", "Tala indiscriminada"], correctAnswer: 1 }
  ],
  "3-7": [
    { id: 1, question: "¿Qué es un Bosque Aleatorio (Random Forest)?", options: ["Un parque nacional", "Un conjunto (Ensemble) de múltiples Árboles de Decisión que trabajan juntos", "Un algoritmo de ordenamiento de listas", "Un único árbol muy grande"], correctAnswer: 1 },
    { id: 2, question: "¿Qué concepto base usa Random Forest para combinar sus árboles?", options: ["Bagging (Bootstrap Aggregating)", "Boosting", "Stacking", "Hashing"], correctAnswer: 0 },
    { id: 3, question: "¿Qué significa 'Bootstrap' en la creación de los árboles del bosque?", options: ["Un framework CSS", "Cada árbol se entrena con una muestra aleatoria con reemplazo del dataset original", "Que usan zapatos especiales", "Que cargan el SO"], correctAnswer: 1 },
    { id: 4, question: "¿Por qué Random Forest es 'Aleatorio' además de los datos de entrenamiento?", options: ["Toma decisiones al azar", "Porque en cada división de un nodo, solo considera un subconjunto aleatorio de características (columnas), en vez de todas", "Porque el código cambia solo", "Porque escoge el nombre al azar"], correctAnswer: 1 },
    { id: 5, question: "¿Cómo toma Random Forest la decisión final en un problema de Clasificación?", options: ["Cada árbol da un voto y la clase ganadora es la predicción final (Mayoría simple)", "Escoge al árbol más grande", "Promedia todas las probabilidades matemáticas", "Lanza una moneda"], correctAnswer: 0 },
    { id: 6, question: "¿Qué gran problema de los árboles individuales soluciona mágicamente Random Forest?", options: ["El Underfitting", "El Overfitting (la combinación de muchos árboles reduce la varianza y generaliza mejor)", "Que son lentos de leer", "No soluciona nada"], correctAnswer: 1 },
    { id: 7, question: "¿Cuál es un costo asociado a usar Random Forest comparado con un árbol simple?", options: ["Es menos preciso", "Se pierde gran parte de la 'Interpretabilidad' fácil visual (ya no es un solo diagrama de flujo visible)", "Requiere internet", "No soporta clasificación"], correctAnswer: 1 }
  ],
  "3-8": [
    { id: 1, question: "¿Qué significa SVM?", options: ["Support Vector Machines (Máquinas de Vectores de Soporte)", "Simple Virtual Machines", "Super Visual Models", "Standard Vector Methods"], correctAnswer: 0 },
    { id: 2, question: "¿Cuál es el objetivo principal de SVM para clasificar dos grupos?", options: ["Dibujar muchas curvas aleatorias", "Encontrar el hiperplano óptimo que separe las clases con el MÁXIMO margen (distancia) posible", "Hacer un árbol de decisiones", "Borrar puntos lejanos"], correctAnswer: 1 },
    { id: 3, question: "¿Qué son los 'Vectores de Soporte' en SVM?", options: ["Soporte técnico del software", "Los puntos de datos más críticos y cercanos al hiperplano que definen el margen de separación", "Vectores con valor nulo", "Módulos de Python"], correctAnswer: 1 },
    { id: 4, question: "¿Qué sucede si quitas todos los puntos del dataset excepto los vectores de soporte?", options: ["El modelo se arruina", "El hiperplano óptimo sería exactamente el mismo", "El margen se vuelve infinito", "Se borran los vectores"], correctAnswer: 1 },
    { id: 5, question: "¿Qué hace SVM cuando los datos NO son separables por una línea recta en 2D?", options: ["Falla y se cierra", "Usa el 'Kernel Trick' (Truco del Kernel) para proyectar los datos matemáticamente a una dimensión superior donde sí sean separables por un plano", "Devuelve error 404", "Simplemente adivina"], correctAnswer: 1 },
    { id: 6, question: "¿Cuál de estos es un Kernel muy popular en SVM para fronteras curvas?", options: ["Kernel de Linux", "RBF (Radial Basis Function) o Kernel Gaussiano", "Kernel de Windows", "Kernel Lineal Estricto"], correctAnswer: 1 },
    { id: 7, question: "¿Para qué sirve el hiperparámetro 'C' en SVM?", options: ["Para controlar la velocidad del procesador", "Controla el equilibrio (trade-off) entre tener un margen muy ancho y clasificar correctamente TODOS los puntos de entrenamiento (penalización de errores)", "Para indicar la clase 'C'", "No existe"], correctAnswer: 1 }
  ]
};

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
data.forEach(session => {
  if (quizzes[session.id]) {
    session.quiz = quizzes[session.id];
  }
});
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully updated Mod 3 Part 1');
