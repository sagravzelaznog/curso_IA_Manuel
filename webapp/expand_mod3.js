/* eslint-disable */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const expandedData = {
  "3-16": {
    content: `
      <h3>1. Inspiración Biológica: El Cerebro Humano</h3>
      <p>Las Redes Neuronales Artificiales (ANN) buscan imitar matemáticamente el funcionamiento del cerebro humano. El cerebro tiene aproximadamente 86 mil millones de neuronas que se comunican a través de sinapsis eléctricas y químicas.</p>
      <p>Una neurona biológica tiene dendritas (reciben señales), un soma (procesa) y un axón (transmite). En nuestro modelo artificial, representamos esto con <strong>entradas (x)</strong>, un <strong>nodo de procesamiento matemático</strong>, y una <strong>salida (y)</strong>.</p>
      
      <h3>2. Arquitectura Básica de una Red Neuronal</h3>
      <p>Una red neuronal estándar (Feedforward) se organiza en capas:</p>
      <ul>
        <li><strong>Capa de Entrada (Input Layer):</strong> Recibe los datos crudos (ej. los píxeles de una imagen o valores numéricos).</li>
        <li><strong>Capas Ocultas (Hidden Layers):</strong> Donde ocurre la 'magia'. Extraen patrones y características cada vez más complejas.</li>
        <li><strong>Capa de Salida (Output Layer):</strong> Entrega la predicción final (ej. la probabilidad de que una imagen sea un gato).</li>
      </ul>

      <h3>3. Pesos (Weights) y Sesgos (Biases)</h3>
      <p>El corazón del aprendizaje está en los parámetros de la red:</p>
      <p><strong>Pesos (w):</strong> Multiplican a la entrada. Si un peso es alto, significa que esa característica de entrada es muy importante para la decisión. Si es negativo, influye en contra.</p>
      <p><strong>Sesgo (b):</strong> Se suma al final del cálculo. Actúa como un umbral que facilita o dificulta la activación de la neurona, independientemente de las entradas.</p>
      <pre><code class="language-python"># Fórmula matemática de una neurona simple
salida_neta = (w1*x1 + w2*x2 + ... + wn*xn) + b</code></pre>
    `,
    practical: `
      <h3>Implementación de una Neurona desde Cero en Python</h3>
      <p>Vamos a programar una neurona completamente funcional usando solo Python puro (sin librerías avanzadas).</p>
      <pre><code class="language-python">def neurona_artificial(entradas, pesos, sesgo):
    # Paso 1: Suma ponderada (Producto Punto)
    suma = 0
    for x, w in zip(entradas, pesos):
        suma += x * w
    
    # Paso 2: Añadir el sesgo
    suma += sesgo
    
    # Paso 3: Función de activación (Escalón simple)
    if suma > 0:
        return 1
    else:
        return 0

# Prueba
datos_entrada = [1.5, 2.0, -0.5]
pesos_entrenados = [0.8, -0.5, 1.2]
sesgo = -0.2

prediccion = neurona_artificial(datos_entrada, pesos_entrenados, sesgo)
print(f"La neurona predice: {prediccion}")
      </code></pre>
      <p>Si ejecutas este código, la neurona calculará: <code>(1.5*0.8) + (2.0*-0.5) + (-0.5*1.2) - 0.2 = 1.2 - 1.0 - 0.6 - 0.2 = -0.6</code>. Como -0.6 no es mayor que 0, la predicción será 0.</p>
    `
  },
  "3-17": {
    content: `
      <h3>1. Origen e Historia del Perceptrón</h3>
      <p>Inventado en 1957 por Frank Rosenblatt en el Laboratorio Aeronáutico de Cornell, el Perceptrón fue la primera máquina capaz de "aprender" a reconocer patrones. Inicialmente fue implementado en hardware (el Mark I Perceptron), ocupando racks enteros de equipo.</p>
      
      <h3>2. La Función de Activación de Escalón (Step Function)</h3>
      <p>El Perceptrón original utiliza una regla de decisión muy dura: la función de escalón de Heaviside. Si la suma ponderada de las entradas más el sesgo (z) supera cierto umbral (generalmente 0), la neurona "dispara" un 1. Si no, dispara un 0 o -1.</p>
      <p>Matemáticamente: <code>f(z) = 1 si z > 0, de lo contrario 0</code>.</p>
      
      <h3>3. El Invierno de la IA y el Problema XOR</h3>
      <p>En 1969, Marvin Minsky y Seymour Papert publicaron un libro demostrando que el perceptrón simple <strong>solo puede aprender problemas linealmente separables</strong> (aquellos que se pueden dividir con una línea recta perfecta).</p>
      <p>Demostraron que el Perceptrón era incapaz de resolver la compuerta lógica XOR (O exclusivo), lo que causó el primer "Invierno de la IA" y paralizó la financiación de las redes neuronales por más de una década.</p>
    `,
    practical: `
      <h3>Demostrando el Perceptrón con Scikit-Learn</h3>
      <p>Podemos usar la clase <code>Perceptron</code> de Scikit-Learn para ver cómo funciona en la práctica con compuertas lógicas.</p>
      <pre><code class="language-python">from sklearn.linear_model import Perceptron
import numpy as np

# Datos de entrenamiento para compuerta AND
X_and = np.array([[0,0], [0,1], [1,0], [1,1]])
y_and = np.array([0, 0, 0, 1])

# Datos de entrenamiento para compuerta XOR
X_xor = np.array([[0,0], [0,1], [1,0], [1,1]])
y_xor = np.array([0, 1, 1, 0])

# Entrenar AND
clf_and = Perceptron(max_iter=1000)
clf_and.fit(X_and, y_and)
print("Predicciones AND:", clf_and.predict(X_and)) # Funciona perfecto: [0, 0, 0, 1]

# Entrenar XOR
clf_xor = Perceptron(max_iter=1000)
clf_xor.fit(X_xor, y_xor)
print("Predicciones XOR:", clf_xor.predict(X_xor)) # Falla! No puede aprender [0, 1, 1, 0]
      </code></pre>
    `
  },
  "3-18": {
    content: `
      <h3>1. El Problema de Asignación de Culpa</h3>
      <p>Si una red neuronal de 50 capas se equivoca al clasificar la foto de un perro como un gato, la pregunta fundamental es: <strong>¿Cuál de los millones de pesos en las capas anteriores causó el error y cuánto debemos ajustarlo?</strong></p>
      <p>El algoritmo de Backpropagation (Retropropagación), popularizado por Geoffrey Hinton y sus colegas en 1986, resolvió este problema.</p>

      <h3>2. La Función de Pérdida (Loss Function)</h3>
      <p>Antes de retropropagar, necesitamos cuantificar el error. La Función de Pérdida compara la predicción de la red (\`y_pred\`) con la etiqueta real (\`y_true\`).</p>
      <p>Ejemplos comunes:</p>
      <ul>
        <li><strong>Error Cuadrático Medio (MSE):</strong> Usado en regresión. Mide la distancia cuadrada entre predicción y realidad.</li>
        <li><strong>Entropía Cruzada (Cross-Entropy):</strong> Usado en clasificación. Mide la diferencia entre dos distribuciones de probabilidad.</li>
      </ul>

      <h3>3. Regla de la Cadena y Gradiente Descendente</h3>
      <p>Backpropagation aplica el concepto de la <em>Regla de la Cadena</em> del cálculo diferencial. Calcula el gradiente (derivada parcial) de la función de pérdida con respecto a cada peso de la red, yendo de la capa de salida hacia la capa de entrada.</p>
      <p>El <strong>Gradiente Descendente</strong> usa estos gradientes para actualizar los pesos: <code>w_nuevo = w_viejo - (tasa_de_aprendizaje * gradiente)</code>.</p>
    `,
    practical: `
      <h3>Visualizando el Descenso del Gradiente (Código Ilustrativo)</h3>
      <p>Para entender cómo se optimiza un valor, mira este ejemplo simple que busca encontrar el valor mínimo de la función matemática \(f(x) = x^2\).</p>
      <pre><code class="language-python"># Función de pérdida hipotética: f(x) = x^2
# Su derivada (el gradiente): f'(x) = 2x

x = 10.0 # Empezamos con un peso aleatorio alto
tasa_aprendizaje = 0.1

for epoca in range(15):
    gradiente = 2 * x
    # Actualizar peso usando descenso del gradiente
    x = x - (tasa_aprendizaje * gradiente)
    print(f"Época {epoca+1}: Nuevo valor de x = {x:.4f}")

# Verás que x se acerca rápidamente a 0 (el punto mínimo óptimo)
      </code></pre>
    `
  },
  "3-19": {
    content: `
      <h3>1. Superando los Límites: El Perceptrón Multicapa (MLP)</h3>
      <p>Al conectar múltiples capas de neuronas (una capa de entrada, una o más capas ocultas, y una de salida), creamos un MLP. Esta topología densa permite a la red modelar funciones matemáticas extremadamente complejas y fronteras de decisión no lineales.</p>

      <h3>2. La Magia de la No-Linealidad: Funciones de Activación</h3>
      <p>Si apilamos múltiples capas con funciones de activación lineales, matemáticamente colapsan en una sola capa. Las funciones de activación no lineales permiten que la red aprenda representaciones complejas.</p>
      <ul>
        <li><strong>Sigmoide:</strong> Aplasta valores entre 0 y 1. Histórica, pero sufre de desvanecimiento del gradiente (vanishing gradient).</li>
        <li><strong>Tanh (Tangente Hiperbólica):</strong> Aplasta entre -1 y 1. Centrada en cero, mejor que sigmoide para capas ocultas.</li>
        <li><strong>ReLU (Rectified Linear Unit):</strong> <code>f(x) = max(0, x)</code>. El estándar moderno de la industria. Eficiente, resuelve el desvanecimiento de gradiente, aunque puede sufrir del problema de "neuronas muertas".</li>
      </ul>

      <h3>3. Softmax para Clasificación Multiclase</h3>
      <p>Cuando queremos clasificar una imagen en 10 categorías distintas (ej. dígitos del 0 al 9), usamos <em>Softmax</em> en la capa de salida. Convierte los números crudos de la red en una distribución de probabilidades perfecta que suma 100%.</p>
    `,
    practical: `
      <h3>Construyendo un MLP Real con TensorFlow / Keras</h3>
      <p>Construir redes densas modernas toma unas cuantas líneas con las herramientas actuales.</p>
      <pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Definir la arquitectura de la red
modelo = Sequential([
    # Capa oculta 1: 64 neuronas, entrada de tamaño 10, activación ReLU
    Dense(64, activation='relu', input_shape=(10,)),
    
    # Capa oculta 2: 32 neuronas, activación ReLU
    Dense(32, activation='relu'),
    
    # Capa de Salida: 3 neuronas (para 3 clases), activación Softmax
    Dense(3, activation='softmax')
])

modelo.compile(optimizer='adam', 
               loss='categorical_crossentropy', 
               metrics=['accuracy'])

# El modelo ya está listo para modelo.fit(X_train, y_train)!
modelo.summary()
      </code></pre>
    `
  },
  "3-20": {
    content: `
      <h3>1. El Enemigo Número Uno: Overfitting</h3>
      <p>Las Redes Neuronales tienen millones de parámetros (pesos). Son tan expresivas que pueden literalmente memorizar la base de datos de entrenamiento píxel por píxel. Esto produce un modelo con 99% de precisión en el entrenamiento, pero que es inútil en el mundo real.</p>
      <p><strong>Síntoma clave del Overfitting:</strong> La precisión en entrenamiento sube, pero la precisión en el set de validación se estanca o empeora.</p>

      <h3>2. Regularización L1 y L2 (Weight Decay)</h3>
      <p>Agregan una penalización a la Función de Costo para evitar que los pesos crezcan demasiado.
      <ul>
        <li><strong>L1 (Lasso):</strong> Fuerza a que muchos pesos se vuelvan exactamente cero. Excelente para selección de características.</li>
        <li><strong>L2 (Ridge):</strong> Penaliza el cuadrado de los pesos. Los mantiene pequeños pero no en cero. Es la más común (Weight Decay).</li>
      </ul>
      </p>

      <h3>3. Dropout: El Caos Controlado</h3>
      <p>Desarrollado en 2014, Dropout es una técnica revolucionaria. Durante el entrenamiento, en cada iteración se "apaga" (su salida se vuelve 0) un porcentaje aleatorio de neuronas (ej. 20% o 50%).</p>
      <p>Esto obliga a la red a no depender de una o dos "neuronas estrella" super-especializadas, forzando a todo el equipo a aprender representaciones redundantes y robustas.</p>
      
      <h3>4. Early Stopping (Parada Temprana)</h3>
      <p>Simplemente detenemos el entrenamiento en el momento exacto en que la curva de error de validación empieza a subir de nuevo, quedándonos con los mejores pesos hasta ese punto.</p>
    `,
    practical: `
      <h3>Añadiendo Dropout en Keras</h3>
      <p>Implementar estas técnicas modernas es tan fácil como añadir una capa extra en nuestro modelo.</p>
      <pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.regularizers import l2

modelo_robusto = Sequential([
    # Añadimos regularización L2 a los pesos
    Dense(128, activation='relu', input_shape=(20,), kernel_regularizer=l2(0.01)),
    
    # Añadimos Dropout del 50%
    Dropout(0.5),
    
    Dense(64, activation='relu'),
    Dropout(0.3), # Dropout del 30%
    
    Dense(1, activation='sigmoid')
])

modelo_robusto.compile(optimizer='adam', loss='binary_crossentropy')
# Este modelo será mucho más resistente a la memorización
      </code></pre>
    `
  }
};

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

data.forEach(session => {
  if (expandedData[session.id]) {
    session.content = expandedData[session.id].content;
    session.practical = expandedData[session.id].practical;
  }
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully expanded content for sessions 3.16 to 3.20');
