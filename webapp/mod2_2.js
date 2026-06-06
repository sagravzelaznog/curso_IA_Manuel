import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const quizzes = {
  "2-9": [
    { id: 1, question: "¿Qué es una Variable Aleatoria Discreta?", options: ["Una que toma un número infinito de valores continuos", "Una que toma valores contables o enteros (ej. número de caras al lanzar monedas)", "Un error del código", "Una matriz"], correctAnswer: 1 },
    { id: 2, question: "¿Qué es una Variable Aleatoria Continua?", options: ["Una que puede tomar cualquier valor dentro de un intervalo (ej. la altura o el peso de una persona)", "Una que solo toma valor 0 o 1", "Una variable de Python", "Una ecuación lineal"], correctAnswer: 0 },
    { id: 3, question: "¿Cuál es la distribución de probabilidad continua más famosa y común en la naturaleza (curva de campana)?", options: ["Distribución Binomial", "Distribución de Poisson", "Distribución Normal (Gaussiana)", "Distribución Exponencial"], correctAnswer: 2 },
    { id: 4, question: "¿Cuáles son los dos parámetros que definen una Distribución Normal?", options: ["Masa y Velocidad", "Media (promedio) y Desviación Estándar", "X e Y", "Filas y Columnas"], correctAnswer: 1 },
    { id: 5, question: "¿Qué distribución modela la probabilidad de obtener 'k' éxitos en 'n' ensayos independientes (ej. lanzar monedas)?", options: ["Normal", "Poisson", "Binomial", "Uniforme"], correctAnswer: 2 },
    { id: 6, question: "¿Qué distribución modela el número de eventos que ocurren en un intervalo de tiempo fijo (ej. llamadas a un call center en una hora)?", options: ["Poisson", "Binomial", "Gaussiana", "Geométrica"], correctAnswer: 0 },
    { id: 7, question: "En una distribución Normal Estándar, ¿cuál es el valor de la media y la desviación estándar?", options: ["Media 100, Desviación 10", "Media 0, Desviación 1", "Media 1, Desviación 0", "Depende del dato"], correctAnswer: 1 }
  ],
  "2-10": [
    { id: 1, question: "¿Qué es la Media (Promedio)?", options: ["El valor que más se repite", "El valor del medio al ordenar", "La suma de todos los valores dividida por la cantidad de valores", "El valor máximo"], correctAnswer: 2 },
    { id: 2, question: "¿Qué es la Mediana?", options: ["El promedio matemático", "El valor central de los datos cuando están ordenados de menor a mayor", "El valor más frecuente", "La resta del mayor menos el menor"], correctAnswer: 1 },
    { id: 3, question: "¿Qué ventaja tiene la Mediana sobre la Media?", options: ["Es más rápida de calcular", "Es muy resistente (robusta) a valores atípicos extremos (outliers)", "Sirve para texto", "Ninguna"], correctAnswer: 1 },
    { id: 4, question: "¿Qué es la Moda?", options: ["El valor más grande", "El promedio", "El valor que aparece con mayor frecuencia en un conjunto de datos", "La desviación"], correctAnswer: 2 },
    { id: 5, question: "¿Qué mide la Desviación Estándar?", options: ["El promedio de los datos", "Qué tan dispersos o alejados están los datos respecto a la media", "La cantidad total de datos", "El valor mínimo absoluto"], correctAnswer: 1 },
    { id: 6, question: "¿Qué son los Cuartiles?", options: ["Cuatro números al azar", "Valores que dividen un conjunto de datos ordenados en cuatro partes iguales (25%, 50%, 75%)", "Variables en Python", "Funciones trigonométricas"], correctAnswer: 1 },
    { id: 7, question: "En un Boxplot (Diagrama de caja), ¿qué representan los puntos que quedan muy alejados de los 'bigotes'?", options: ["Errores de código", "Valores atípicos (Outliers)", "La media", "La moda"], correctAnswer: 1 }
  ],
  "2-11": [
    { id: 1, question: "¿Quién formuló el Teorema de Bayes?", options: ["Isaac Newton", "Thomas Bayes", "Alan Turing", "Albert Einstein"], correctAnswer: 1 },
    { id: 2, question: "¿Para qué sirve el Teorema de Bayes?", options: ["Para sumar fracciones", "Para actualizar la probabilidad de una hipótesis a medida que se obtiene nueva evidencia", "Para hacer derivadas", "Para invertir matrices"], correctAnswer: 1 },
    { id: 3, question: "En la fórmula P(A|B) = P(B|A)P(A) / P(B), ¿qué es P(A)?", options: ["Probabilidad final", "Probabilidad a Priori (la creencia antes de la evidencia)", "La evidencia", "El error"], correctAnswer: 1 },
    { id: 4, question: "¿Qué es la probabilidad 'A Posteriori' en Bayes?", options: ["P(B)", "P(A|B), la probabilidad actualizada de la hipótesis dada la evidencia", "P(A)", "P(B|A)"], correctAnswer: 1 },
    { id: 5, question: "¿Qué algoritmo clásico de Machine Learning está basado directamente en este teorema?", options: ["Regresión Lineal", "K-Means", "Naive Bayes Classifier", "Redes Neuronales Recurrentes"], correctAnswer: 2 },
    { id: 6, question: "¿Por qué el clasificador se llama 'Naive' (Ingenuo) Bayes?", options: ["Porque fue hecho por novatos", "Porque asume ingenuamente que todas las características (features) son independientes entre sí", "Porque no funciona bien", "Porque es muy fácil"], correctAnswer: 1 },
    { id: 7, question: "¿Cuál es un uso histórico muy famoso del clasificador Naive Bayes?", options: ["Pilotar aviones", "Filtros de Spam en el correo electrónico", "Jugar ajedrez", "Generar imágenes"], correctAnswer: 1 }
  ],
  "2-12": [
    { id: 1, question: "¿De qué trata la Optimización en matemáticas e IA?", options: ["De comprimir archivos ZIP", "De encontrar el mejor elemento (máximo o mínimo) de un conjunto de alternativas viables", "De programar más rápido", "De usar menos memoria RAM"], correctAnswer: 1 },
    { id: 2, question: "¿Qué es la 'Función Objetivo' (u Objective Function)?", options: ["Un error de Python", "La función matemática que deseamos minimizar (ej. el costo/error) o maximizar (ej. la ganancia)", "El objetivo de vida", "Una variable booleana"], correctAnswer: 1 },
    { id: 3, question: "¿Qué es un Mínimo Local?", options: ["El punto más bajo de TODA la función", "El punto más bajo en una región específica, pero no necesariamente el más bajo de todos", "Un punto donde la función sube", "El origen (0,0)"], correctAnswer: 1 },
    { id: 4, question: "¿Qué es un Mínimo Global?", options: ["El valor absoluto más pequeño en todo el dominio de la función", "Un mínimo cerca del origen", "Un punto máximo", "Una constante"], correctAnswer: 0 },
    { id: 5, question: "¿Qué problema ocurre a menudo al entrenar redes neuronales no convexas?", options: ["El código falla", "El algoritmo de optimización se puede quedar atascado en un Mínimo Local y no encontrar el Mínimo Global", "Se borran los datos", "El error llega a menos infinito"], correctAnswer: 1 },
    { id: 6, question: "¿Qué significa que una función sea 'Convexa' (forma de tazón)?", options: ["Que tiene forma de zigzag", "Que cualquier mínimo local es también el mínimo global absoluto", "Que no tiene solución", "Que solo tiene máximos"], correctAnswer: 1 },
    { id: 7, question: "El algoritmo del Descenso del Gradiente es un algoritmo de optimización...", options: ["Exacto", "Iterativo (da pasos poco a poco)", "Aleatorio", "Inútil"], correctAnswer: 1 }
  ],
  "2-13": [
    { id: 1, question: "¿Qué es el 'Descenso de Gradiente Estocástico' (SGD)?", options: ["Un algoritmo que usa todos los datos a la vez", "Una versión del descenso de gradiente que calcula el error usando una sola muestra (o un lote pequeño) al azar en vez de todo el dataset", "Un gradiente estático", "Un método de ordenamiento"], correctAnswer: 1 },
    { id: 2, question: "¿Por qué se usa SGD en lugar del Descenso de Gradiente Tradicional (Batch) en Big Data?", options: ["Porque el tradicional es más rápido", "Porque procesar todo el dataset en cada paso requiere demasiada memoria y tiempo", "Para que sea menos preciso a propósito", "Para gastar más disco"], correctAnswer: 1 },
    { id: 3, question: "¿Qué es el 'Momentum' en optimización?", options: ["La velocidad del disco", "Una técnica que acumula la inercia de los gradientes anteriores para acelerar la convergencia y evitar atascos", "El tamaño de la red", "Una librería visual"], correctAnswer: 1 },
    { id: 4, question: "¿Qué es ADAM (Adaptive Moment Estimation)?", options: ["Un robot famoso", "Uno de los optimizadores más modernos y populares en Deep Learning que adapta la tasa de aprendizaje por cada parámetro", "Un lenguaje antiguo", "Una métrica de error"], correctAnswer: 1 },
    { id: 5, question: "¿Qué hiperparámetro crítico deben ajustar los optimizadores?", options: ["El color de fondo", "La Tasa de Aprendizaje (Learning Rate)", "El número de píxeles", "La IP del servidor"], correctAnswer: 1 },
    { id: 6, question: "¿Qué sucede si programamos un decaimiento (decay) en la tasa de aprendizaje?", options: ["La IA se vuelve tonta", "Comienza dando pasos grandes y poco a poco da pasos más pequeños para afinarse en el mínimo", "La red colapsa", "Se borran los pesos"], correctAnswer: 1 },
    { id: 7, question: "¿Qué algoritmo avanzado usa la segunda derivada para optimizar más rápido pero es muy costoso de calcular?", options: ["SGD", "Método de Newton", "Backpropagation", "KNN"], correctAnswer: 1 }
  ],
  "2-14": [
    { id: 1, question: "¿Para qué se usan las matemáticas en el Procesamiento de Imágenes (ej. filtros)?", options: ["Solo para saber los colores", "Las imágenes se tratan como matrices y se les aplican operaciones de convolución matricial", "Para hacerlas más pequeñas de tamaño en disco", "No se usan matemáticas en imágenes"], correctAnswer: 1 },
    { id: 2, question: "¿Qué aplicación directa tiene la estadística en IA?", options: ["Sistemas de Recomendación (como Netflix) basados en correlación y probabilidades", "Dibujar en la pantalla", "Instalar Python", "Manejar bases de datos SQL"], correctAnswer: 0 },
    { id: 3, question: "¿Cómo se utiliza el Álgebra Lineal en el Procesamiento de Lenguaje Natural (NLP)?", options: ["Traduciendo palabras a números al azar", "Transformando palabras en vectores (Word Embeddings) donde operaciones matemáticas reflejan similitud semántica", "Buscando palabras en el diccionario", "Solo usando IF y ELSE"], correctAnswer: 1 },
    { id: 4, question: "Si la palabra Rey es [0.9, 0.1], y Hombre es [0.8, 0.2], ¿qué usamos para saber si son similares?", options: ["Resta simple", "Similitud del Coseno (producto punto normalizado) entre sus vectores", "Suma de enteros", "Aleatoriedad"], correctAnswer: 1 },
    { id: 5, question: "¿En qué área es indispensable el cálculo diferencial continuo?", options: ["En la lectura de CSV", "En el entrenamiento de redes neuronales (Backpropagation)", "En sistemas operativos", "En HTML"], correctAnswer: 1 },
    { id: 6, question: "¿Qué algoritmo se basa fundamentalmente en el teorema de Pitágoras (distancia euclidiana)?", options: ["K-Nearest Neighbors (K-Vecinos más cercanos)", "Árboles de decisión", "Regresión logística", "Redes convolucionales"], correctAnswer: 0 },
    { id: 7, question: "Las matemáticas detrás de la reducción de dimensiones como PCA se basan en:", options: ["Cálculo integral", "Eigenvalues y Eigenvectors de la matriz de covarianza", "Geometría básica", "Probabilidad de Laplace"], correctAnswer: 1 }
  ],
  "2-15": [
    { id: 1, question: "¿Por qué es crucial entender la matemática subyacente en vez de solo usar las librerías de IA?", options: ["Para poder crear nuestras propias librerías desde cero", "Para entender por qué falla un modelo, qué hiperparámetros tocar y cómo interpretar los resultados", "No es importante, las librerías lo hacen todo", "Para que el código sea más largo"], correctAnswer: 1 },
    { id: 2, question: "Si un modelo tiene un alto 'Bias' (Sesgo estadístico, no el de neuronas), ¿qué le pasa?", options: ["Aprende demasiado de memoria", "Sufre de Underfitting: hace suposiciones muy simples y no capta la complejidad de los datos", "El programa falla", "Es el modelo perfecto"], correctAnswer: 1 },
    { id: 3, question: "Si un modelo tiene una alta 'Varianza', ¿qué le sucede?", options: ["Sufre de Underfitting", "Sufre de Overfitting: es muy sensible a las variaciones del set de entrenamiento y memoriza el ruido", "Ignora los datos", "Predice puro cero"], correctAnswer: 1 },
    { id: 4, question: "El famoso 'Dilema Sesgo-Varianza' (Bias-Variance Tradeoff) nos dice que:", options: ["Podemos tener 0 sesgo y 0 varianza fácilmente", "Al disminuir uno, generalmente aumenta el otro, por lo que buscamos un equilibrio (Sweet Spot)", "Ambos son irrelevantes", "Solo importa el sesgo"], correctAnswer: 1 },
    { id: 5, question: "¿Qué es una matriz de confusión en estadística y clasificación?", options: ["Una matriz que marea al programador", "Una tabla que describe el rendimiento del modelo detallando Verdaderos Positivos, Falsos Positivos, etc.", "Un array tridimensional", "Una base de datos borrosa"], correctAnswer: 1 },
    { id: 6, question: "En clasificación médica, ¿qué es un Falso Negativo?", options: ["Decir que no tiene la enfermedad, y efectivamente está sano", "Decir que tiene la enfermedad, pero está sano", "Decir que NO tiene la enfermedad, pero en realidad SÍ la tiene", "Un error del compilador"], correctAnswer: 2 },
    { id: 7, question: "¿Cuál es la métrica 'F1-Score'?", options: ["El promedio de las notas", "La media armónica entre la Precisión y el Recall (Sensibilidad), ideal cuando las clases están desbalanceadas", "El porcentaje de aciertos totales (Accuracy)", "Una nota musical"], correctAnswer: 1 }
  ]
};

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
data.forEach(session => {
  if (quizzes[session.id]) {
    session.quiz = quizzes[session.id];
  }
});
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully updated Mod 2 Part 2');
