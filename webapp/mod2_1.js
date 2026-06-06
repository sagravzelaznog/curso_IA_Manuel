import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const quizzes = {
  "2-1": [
    { id: 1, question: "¿Qué es un escalar en álgebra lineal?", options: ["Una matriz de 2x2", "Un número real único que tiene magnitud pero no dirección", "Una flecha en el espacio", "Una función trigonométrica"], correctAnswer: 1 },
    { id: 2, question: "¿Cuál es la biblioteca de Python estándar para realizar operaciones de álgebra lineal de alto rendimiento?", options: ["Pandas", "Matplotlib", "NumPy", "Flask"], correctAnswer: 2 },
    { id: 3, question: "¿Qué representa un vector en un espacio bidimensional?", options: ["Un punto o una flecha con magnitud y dirección (x, y)", "Un solo número (escalar)", "Una matriz de 3x3", "Un número imaginario"], correctAnswer: 0 },
    { id: 4, question: "¿Por qué el álgebra lineal es fundamental en IA?", options: ["Porque permite crear interfaces web", "Porque las redes neuronales operan principalmente sobre matrices y vectores multidimensionales (tensores)", "Porque acelera el disco duro", "Porque dibuja gráficas"], correctAnswer: 1 },
    { id: 5, question: "Si multiplicas un vector [2, 3] por un escalar 2, el resultado es:", options: ["[4, 6]", "[4, 5]", "[2, 6]", "[0, 0]"], correctAnswer: 0 },
    { id: 6, question: "¿Cómo se llama una estructura de datos que representa una tabla de números en álgebra lineal?", options: ["Pila", "Cola", "Matriz", "Árbol binario"], correctAnswer: 2 },
    { id: 7, question: "¿Qué es un Tensor?", options: ["Un escalar negativo", "La generalización matemática de escalares, vectores y matrices hacia N dimensiones", "Un músculo del cuerpo humano", "Una librería de Google"], correctAnswer: 1 }
  ],
  "2-2": [
    { id: 1, question: "¿Qué es una matriz?", options: ["Un número único", "Un arreglo bidimensional (filas y columnas) de números", "Una línea recta", "Un grafo"], correctAnswer: 1 },
    { id: 2, question: "¿Cuáles son las dimensiones de una matriz con 3 filas y 4 columnas?", options: ["4x3", "3x3", "4x4", "3x4"], correctAnswer: 3 },
    { id: 3, question: "¿Qué es el 'producto punto' (dot product) entre dos vectores?", options: ["La división de ambos", "Una operación algebraica que toma dos secuencias de números y retorna un único número (escalar)", "La concatenación de los vectores", "Una matriz vacía"], correctAnswer: 1 },
    { id: 4, question: "En NumPy, ¿qué función se usa para calcular el producto punto de dos matrices o vectores?", options: ["np.dot()", "np.multiply()", "np.cross()", "np.product()"], correctAnswer: 0 },
    { id: 5, question: "¿Qué condición debe cumplirse para poder multiplicar la Matriz A por la Matriz B?", options: ["Ambas deben ser cuadradas", "El número de columnas de A debe ser igual al número de filas de B", "Ambas deben tener la misma cantidad de filas", "No hay condiciones"], correctAnswer: 1 },
    { id: 6, question: "¿Qué es la Matriz Transpuesta?", options: ["Una matriz donde los negativos se vuelven positivos", "Una matriz resultante de intercambiar las filas por las columnas", "Una matriz llena de ceros", "Una matriz invertida en el tiempo"], correctAnswer: 1 },
    { id: 7, question: "¿Qué caracteriza a la Matriz Identidad?", options: ["Tiene 1s en la diagonal principal y 0s en el resto", "Está llena de ceros", "Tiene números negativos", "Solo tiene una columna"], correctAnswer: 0 }
  ],
  "2-3": [
    { id: 1, question: "¿Qué es un sistema de ecuaciones lineales?", options: ["Una ecuación con números complejos", "Un conjunto de dos o más ecuaciones lineales con las mismas variables", "Un algoritmo de ordenamiento", "Una ecuación cuadrática"], correctAnswer: 1 },
    { id: 2, question: "En el contexto de álgebra lineal, un sistema de ecuaciones puede expresarse como:", options: ["y = mx + b", "Ax = b", "x = -b +- raiz()", "F = ma"], correctAnswer: 1 },
    { id: 3, question: "Si un sistema de ecuaciones tiene exactamente una solución, las rectas en un plano 2D...", options: ["Son paralelas", "Son la misma línea", "Se intersectan en un único punto", "No existen"], correctAnswer: 2 },
    { id: 4, question: "Si las rectas son paralelas y nunca se tocan, el sistema...", options: ["Tiene infinitas soluciones", "No tiene solución", "Tiene una solución", "Es una matriz"], correctAnswer: 1 },
    { id: 5, question: "¿Qué función de NumPy se usa comúnmente para resolver sistemas de ecuaciones lineales?", options: ["np.linalg.solve()", "np.resolve()", "np.math.system()", "np.calculate()"], correctAnswer: 0 },
    { id: 6, question: "¿Qué es la matriz Inversa?", options: ["Una matriz negativa", "La matriz que multiplicada por la original da como resultado la matriz Identidad", "La matriz transpuesta", "Una matriz de ceros"], correctAnswer: 1 },
    { id: 7, question: "¿Todas las matrices cuadradas tienen matriz inversa?", options: ["Sí, siempre", "No, solo aquellas cuyo determinante es diferente de cero (no singulares)", "Solo las matrices pequeñas", "No, ninguna tiene"], correctAnswer: 1 }
  ],
  "2-4": [
    { id: 1, question: "¿Cómo se les conoce también a los valores propios y vectores propios?", options: ["Vectores mágicos", "Eigenvalues y Eigenvectors", "Vectores cero", "Tensores principales"], correctAnswer: 1 },
    { id: 2, question: "¿Qué es un Eigenvector (vector propio)?", options: ["Un vector que cambia de dirección al ser transformado por una matriz", "Un vector cuya dirección no cambia cuando se le aplica una transformación lineal (solo se escala)", "Un vector lleno de ceros", "Un número escalar"], correctAnswer: 1 },
    { id: 3, question: "¿Qué es el Eigenvalue (valor propio)?", options: ["El número negativo del vector", "El factor por el cual el eigenvector es escalado (estirado o encogido) durante la transformación", "La dirección de la flecha", "El número de filas de la matriz"], correctAnswer: 1 },
    { id: 4, question: "¿En qué algoritmo muy famoso de IA/Data Science se utilizan intensamente los Eigenvectors para reducir la dimensionalidad?", options: ["Regresión Lineal", "PCA (Análisis de Componentes Principales)", "Árboles de decisión", "K-Means"], correctAnswer: 1 },
    { id: 5, question: "Si la ecuación es Ax = λx, ¿qué representa λ?", options: ["La matriz", "El eigenvector", "El eigenvalue", "La variable desconocida"], correctAnswer: 2 },
    { id: 6, question: "¿Qué módulo de NumPy permite calcular eigenvalues y eigenvectors?", options: ["np.linalg.eig()", "np.eigen()", "np.math.eig()", "np.vector()"], correctAnswer: 0 },
    { id: 7, question: "¿En qué ámbito de la vida real se usaron los eigenvalues a gran escala?", options: ["Para cocinar", "En el algoritmo PageRank original de Google", "Para pintar", "Para jugar ajedrez"], correctAnswer: 1 }
  ],
  "2-5": [
    { id: 1, question: "¿Qué es la derivada de una función matemática?", options: ["El área bajo la curva", "La tasa de cambio instantánea o la pendiente de la recta tangente en un punto", "El límite en el infinito", "La suma de los valores"], correctAnswer: 1 },
    { id: 2, question: "Si tienes la función de posición de un auto respecto al tiempo, ¿qué representa su primera derivada?", options: ["Su masa", "Su velocidad", "Su aceleración", "Su color"], correctAnswer: 1 },
    { id: 3, question: "¿Cuál es la regla de la potencia para derivar f(x) = x^n?", options: ["n * x^(n+1)", "n * x^(n-1)", "x^n", "1 / x^n"], correctAnswer: 1 },
    { id: 4, question: "¿Cuál es la derivada de una constante (ej. f(x) = 5)?", options: ["5", "1", "0", "-5"], correctAnswer: 2 },
    { id: 5, question: "¿Por qué el cálculo diferencial es vital en Machine Learning?", options: ["Para dibujar gráficos bonitos", "Para optimizar las funciones de pérdida (saber hacia dónde ajustar los pesos)", "Para contar datos", "Para borrar la memoria RAM"], correctAnswer: 1 },
    { id: 6, question: "¿Qué dice la regla de la cadena?", options: ["Las cadenas no se pueden derivar", "Permite derivar la composición de funciones (la derivada de lo de afuera por la derivada de lo de adentro)", "Todo es cero", "Suma las funciones"], correctAnswer: 1 },
    { id: 7, question: "En Python, ¿qué librería se usa frecuentemente para cálculo simbólico (derivadas matemáticas)?", options: ["SymPy", "Pandas", "Requests", "Flask"], correctAnswer: 0 }
  ],
  "2-6": [
    { id: 1, question: "¿Qué representa la segunda derivada de una función?", options: ["La tasa de cambio de la tasa de cambio (ej. la concavidad o la aceleración)", "El doble de la primera derivada", "La derivada al cuadrado", "El área total"], correctAnswer: 0 },
    { id: 2, question: "Si la primera derivada es cero en un punto, ¿qué sabemos de ese punto?", options: ["Que la función se rompió", "Que es un punto crítico (puede ser un máximo, mínimo o punto de inflexión)", "Que no existe", "Que la curva es vertical"], correctAnswer: 1 },
    { id: 3, question: "Si la segunda derivada es positiva en un punto crítico, ¿qué es ese punto?", options: ["Un máximo local", "Un mínimo local", "Un punto plano", "Un error"], correctAnswer: 1 },
    { id: 4, question: "Si la segunda derivada es negativa en un punto crítico, ¿qué es ese punto?", options: ["Un mínimo local", "Un máximo local", "Una asíntota", "Un logaritmo"], correctAnswer: 1 },
    { id: 5, question: "¿Cuál es la derivada de f(x) = e^x?", options: ["e^x", "x*e", "0", "ln(x)"], correctAnswer: 0 },
    { id: 6, question: "¿Cuál es la derivada de f(x) = ln(x)?", options: ["1/x", "x", "e^x", "0"], correctAnswer: 0 },
    { id: 7, question: "¿Cómo se llama la matriz que contiene todas las segundas derivadas parciales de una función multivariable?", options: ["Matriz Identidad", "Matriz Hessiana", "Matriz Jacobiana", "Matriz Nula"], correctAnswer: 1 }
  ],
  "2-7": [
    { id: 1, question: "¿Qué es una derivada parcial?", options: ["Una derivada mal hecha", "La derivada de una función de varias variables con respecto a una de ellas, manteniendo las demás constantes", "La derivada multiplicada por fracciones", "Una suma"], correctAnswer: 1 },
    { id: 2, question: "¿Qué es el Gradiente?", options: ["Un color bonito", "Un vector que agrupa todas las derivadas parciales de una función multivariable", "Una matriz de ceros", "Un escalar negativo"], correctAnswer: 1 },
    { id: 3, question: "¿En qué dirección apunta el vector Gradiente?", options: ["Hacia abajo", "En la dirección del MÁXIMO incremento de la función", "En la dirección del MÍNIMO incremento", "Al origen"], correctAnswer: 1 },
    { id: 4, question: "Para MINIMIZAR el error en una red neuronal, ¿en qué dirección debemos dar los pasos respecto al gradiente?", options: ["En la misma dirección del gradiente", "En la dirección OPUESTA (negativa) del gradiente", "Hacia arriba", "Hacia los lados"], correctAnswer: 1 },
    { id: 5, question: "Si f(x, y) = x^2 + y^2, ¿cuál es su gradiente?", options: ["(2x, 2y)", "(x, y)", "(2, 2)", "(0, 0)"], correctAnswer: 0 },
    { id: 6, question: "¿Qué es el Descenso del Gradiente (Gradient Descent)?", options: ["Un juego de mesa", "El algoritmo de optimización más usado para minimizar la función de costo en Machine Learning", "Un método para comprimir archivos", "Una función de activación"], correctAnswer: 1 },
    { id: 7, question: "¿Qué sucede si el 'learning rate' (tasa de aprendizaje) es demasiado alto en el descenso del gradiente?", options: ["El modelo aprende perfecto y rápido", "Da saltos muy grandes, sobrepasa el mínimo y puede divergir (explotar)", "Se congela", "Reduce los datos"], correctAnswer: 1 }
  ],
  "2-8": [
    { id: 1, question: "¿Qué es el espacio muestral en probabilidad?", options: ["El espacio sideral", "El conjunto de todos los resultados posibles de un experimento", "El resultado ganador", "Una matriz vacía"], correctAnswer: 1 },
    { id: 2, question: "Si lanzas un dado estándar de 6 caras, ¿cuál es la probabilidad de sacar un 4?", options: ["1/2", "1/4", "1/6", "100%"], correctAnswer: 2 },
    { id: 3, question: "¿En qué rango numérico se expresa siempre una probabilidad?", options: ["De 0 a 100", "De 0 a 1 (o 0% a 100%)", "De -1 a 1", "De menos infinito a infinito"], correctAnswer: 1 },
    { id: 4, question: "¿Qué es un evento mutuamente excluyente?", options: ["Dos eventos que siempre ocurren juntos", "Dos eventos que no pueden ocurrir al mismo tiempo", "Eventos irrelevantes", "Eventos seguros"], correctAnswer: 1 },
    { id: 5, question: "¿Qué es la probabilidad condicional P(A|B)?", options: ["La probabilidad de A más la de B", "La probabilidad de que ocurra A DADO QUE sabemos que B ya ocurrió", "La probabilidad de A y B al mismo tiempo", "Probabilidad de errores"], correctAnswer: 1 },
    { id: 6, question: "Si lanzas una moneda justa, la probabilidad de cara es 0.5. Si lanzas otra moneda, ¿cuál es la probabilidad de sacar dos caras seguidas?", options: ["0.5", "0.25", "1", "0"], correctAnswer: 1 },
    { id: 7, question: "¿Por qué es importante la probabilidad en Inteligencia Artificial?", options: ["Para adivinar la lotería", "Porque la IA modela la incertidumbre y casi siempre devuelve predicciones probabilísticas, no certezas absolutas", "Para contar filas", "Para borrar variables"], correctAnswer: 1 }
  ]
};

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
data.forEach(session => {
  if (quizzes[session.id]) {
    session.quiz = quizzes[session.id];
  }
});
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully updated Mod 2 Part 1');
