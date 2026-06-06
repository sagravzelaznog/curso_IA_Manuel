import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "4-1",
    "title": "4.1: Introducción al Deep Learning Moderno",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Diferenciar Deep Learning del Machine Learning tradicional.</li><li>Conocer la historia y el renacimiento de las redes neuronales gracias al Hardware (GPUs) y Big Data.</li><li>Entender la extracción automática de características.</li></ul>",
    "content": `
      <h3>1. ¿Qué hace 'Profundo' al Deep Learning?</h3>
      <p>El término 'Profundo' (Deep) se refiere a la cantidad de capas ocultas en la red neuronal. Mientras que los modelos tradicionales tenían 1 o 2 capas, las redes modernas (DNNs) pueden tener decenas o cientos de capas. Esto les permite aprender representaciones jerárquicas: las primeras capas detectan bordes, las intermedias formas y las últimas rostros u objetos complejos.</p>
      
      <h3>2. Extracción Automática de Características</h3>
      <p>En el Machine Learning tradicional (ej. SVM o Random Forest), un humano (Data Scientist) tiene que hacer <em>Feature Engineering</em>, es decir, extraer manualmente características útiles de los datos antes de entrenar el modelo. En Deep Learning, la red aprende automáticamente a extraer esas características por sí sola a partir de los datos crudos (píxeles, ondas de audio, texto).</p>
      
      <h3>3. La Revolución del Deep Learning</h3>
      <p>El renacimiento de la IA (a partir de 2012 con AlexNet) fue impulsado por tres factores clave:</p>
      <ul>
        <li><strong>Big Data:</strong> Por primera vez tuvimos millones de imágenes etiquetadas (ImageNet) y textos masivos en internet.</li>
        <li><strong>Hardware (GPUs):</strong> Las tarjetas gráficas de los videojuegos resultaron perfectas para hacer el paralelismo matricial masivo que requieren las redes neuronales.</li>
        <li><strong>Nuevos Algoritmos:</strong> Mejoras en optimizadores y funciones de activación (como ReLU).</li>
      </ul>
    `,
    "practical": `
      <h3>El Cambio de Paradigma</h3>
      <p>Imagina que quieres detectar si una foto tiene un coche.</p>
      <ul>
        <li><strong>Machine Learning Tradicional:</strong> Escribes código para detectar "círculos negros" (ruedas), líneas rectas (ventanas), mides distancias entre ellas y le das esos números a un Random Forest.</li>
        <li><strong>Deep Learning:</strong> Le pasas la imagen en bruto de 256x256 píxeles a la red y le dices "Esto es un coche, encuéntrale el sentido tú misma".</li>
      </ul>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga y explica brevemente por qué las CPUs tradicionales son muy malas entrenando Redes Neuronales Profundas comparadas con las GPUs de NVIDIA.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿A qué se refiere la palabra 'Deep' (Profundo) en Deep Learning?", "options": ["A que es un conocimiento filosófico profundo", "Al uso de múltiples capas ocultas consecutivas en una red neuronal", "A la complejidad del código en Python", "A que se programa en la Dark Web"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuál es la diferencia clave en el manejo de características (features) entre ML tradicional y Deep Learning?", "options": ["En ML se extraen automáticamente, en DL manualmente", "En DL la red aprende a extraer las características útiles automáticamente a partir de datos crudos", "No hay diferencia", "El DL no usa características"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué pieza de hardware fue fundamental para la explosión del Deep Learning en la última década?", "options": ["Discos duros HDD", "Unidades de CD-ROM", "GPUs (Tarjetas Gráficas)", "Monitores 4K"], "correctAnswer": 2 },
      { "id": 4, "question": "En una red profunda que procesa imágenes de rostros, ¿qué suelen detectar las primeras capas?", "options": ["La edad de la persona", "Conceptos simples y de bajo nivel como bordes o contrastes", "Si es un hombre o una mujer", "El nombre de la persona"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué gran evento marcó el inicio del auge del Deep Learning en 2012?", "options": ["La creación del lenguaje Python", "La victoria de AlexNet en la competencia ImageNet usando una red convolucional profunda", "La invención del transistor", "El lanzamiento de Windows 8"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Por qué las redes profundas necesitan enormes cantidades de datos (Big Data)?", "options": ["Para justificar el precio de la nube", "Porque tienen millones de parámetros (pesos) que necesitan ajustarse, y sin suficientes ejemplos simplemente memorizarían (overfitting) datos pequeños", "Para que la pantalla se vea llena", "No necesitan datos"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué técnica humana se elimina casi por completo gracias al Deep Learning?", "options": ["Programación orientada a objetos", "Feature Engineering (Ingeniería de Características manual)", "Escribir documentación", "Instalar librerías"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-2",
    "title": "4.2: Tensores y Frameworks Modernos",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender matemáticamente qué es un Tensor y su estructura dimensional.</li><li>Conocer los dos frameworks dominantes en la industria: TensorFlow/Keras y PyTorch.</li><li>Aprender a declarar tensores en código.</li></ul>",
    "content": `
      <h3>1. ¿Qué es un Tensor?</h3>
      <p>Un Tensor es una estructura de datos matemática, el bloque fundamental en Deep Learning (de ahí el nombre TensorFlow). Es simplemente una generalización de vectores y matrices a dimensiones superiores:</p>
      <ul>
        <li><strong>Tensor 0D (Escalar):</strong> Un solo número (ej. \`5\`).</li>
        <li><strong>Tensor 1D (Vector):</strong> Un array de números (ej. \`[1, 2, 3]\`).</li>
        <li><strong>Tensor 2D (Matriz):</strong> Una tabla de filas y columnas. Es el formato de datos tabulares (CSV).</li>
        <li><strong>Tensor 3D:</strong> Un cubo de números. Las imágenes a color son tensores 3D (Alto x Ancho x 3 Canales RGB).</li>
        <li><strong>Tensor 4D:</strong> Un lote (batch) de imágenes. Ej: \`(32, 256, 256, 3)\` significa 32 imágenes, cada una de 256x256 píxeles, con 3 canales de color.</li>
      </ul>
      
      <h3>2. Los Grandes Frameworks</h3>
      <p>Entrenar redes desde cero con NumPy es educativo pero ineficiente. Por eso usamos frameworks que manejan el Backpropagation automáticamente (Autograd) y se ejecutan en la GPU:</p>
      <ul>
        <li><strong>TensorFlow & Keras (Google):</strong> Es muy estable para producción, móvil e IoT. Su API de alto nivel, Keras, hace que construir redes sea como armar legos.</li>
        <li><strong>PyTorch (Meta/Facebook):</strong> Es el favorito de la comunidad científica y de investigación porque es más 'Pythónico' y dinámico, permitiendo depurar el código línea por línea.</li>
      </ul>
    `,
    "practical": `
      <h3>Creando Tensores en PyTorch</h3>
      <p>Mira lo similar que es PyTorch a NumPy:</p>
      <pre><code class="language-python">import torch
import numpy as np

# Desde una lista
mi_tensor = torch.tensor([[1, 2], [3, 4]])

# Creando tensores con valores aleatorios
tensor_aleatorio = torch.rand(size=(3, 224, 224)) # Ejemplo: una imagen aleatoria

# Verificando propiedades
print(f"Forma (Shape): {tensor_aleatorio.shape}")
print(f"Dispositivo (Device): {tensor_aleatorio.device}") # dirá 'cpu' o 'cuda' (GPU)

# Mover a la GPU si está disponible
if torch.cuda.is_available():
    tensor_gpu = mi_tensor.to('cuda')
    print("¡Tensor en GPU!")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Busca en la documentación oficial de TensorFlow cómo se crea un tensor lleno de ceros (zeros) con la forma (Shape) de (10, 5).</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué es un Tensor de Dimensión 0 (0D)?", "options": ["Un vector de 10 elementos", "Un error matemático", "Un escalar (un número único como 7)", "Una matriz vacía"], "correctAnswer": 2 },
      { "id": 2, "question": "Si una imagen a color (RGB) tiene dimensiones de ancho, alto y canales de color, ¿qué tipo de tensor es por sí sola?", "options": ["Tensor 1D", "Tensor 2D", "Tensor 3D", "Tensor 4D"], "correctAnswer": 2 },
      { "id": 3, "question": "En el entrenamiento de Deep Learning, usamos 'Batches' (lotes). ¿Qué añade el tamaño de batch a un tensor de imágenes 3D?", "options": ["Le borra una dimensión", "Le añade una 4ta dimensión, convirtiéndolo en un Tensor 4D (Lote x Alto x Ancho x Color)", "Lo convierte en texto", "Lo comprime a ZIP"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Cuáles son los dos frameworks principales de Deep Learning en la actualidad?", "options": ["React y Angular", "Pandas y Matplotlib", "TensorFlow/Keras y PyTorch", "Django y Flask"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Qué característica clave de estos frameworks ahorra meses de trabajo al matemático o programador?", "options": ["Generan interfaces web", "Cálculo automático de derivadas / gradientes (Autograd) para el Backpropagation", "No requieren instalar nada", "Diseñan la página web de la IA"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué compañía está principalmente detrás del desarrollo de PyTorch?", "options": ["Google", "Meta (Facebook)", "Amazon", "Microsoft"], "correctAnswer": 1 },
      { "id": 7, "question": "Si ejecutas 'tensor.device' en PyTorch y te dice 'cuda:0', ¿qué significa?", "options": ["Que hubo un error", "Que el tensor está en el disco duro", "Que el tensor está cargado en la memoria de una GPU de NVIDIA", "Que el tensor se borró"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-3",
    "title": "4.3: Redes Neuronales Profundas (DNN) en la práctica",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Aprender la anatomía completa de un script de entrenamiento en Keras.</li><li>Comprender los conceptos de Epochs, Batch Size y Optimizadores.</li><li>Construir un modelo completo multicapa.</li></ul>",
    "content": `
      <h3>1. El Ciclo de Vida de Entrenamiento</h3>
      <p>Entrenar una Red Neuronal Profunda sigue un patrón repetitivo llamado "Bucle de Entrenamiento":</p>
      <ol>
        <li>Extraer un lote (Batch) de datos y pasarlo por la red (Forward Pass).</li>
        <li>Medir el error con la Función de Pérdida (Loss).</li>
        <li>Calcular los gradientes (Backward Pass / Backpropagation).</li>
        <li>El Optimizador actualiza ligeramente los pesos de la red.</li>
        <li>Repetir hasta acabar todos los datos (1 Época).</li>
      </ol>
      
      <h3>2. Conceptos Clave de Hiperparámetros</h3>
      <ul>
        <li><strong>Batch Size (Tamaño de Lote):</strong> Cuántas muestras procesamos juntas antes de actualizar los pesos. Un Batch de 32 consume menos memoria RAM que uno de 1024.</li>
        <li><strong>Epochs (Épocas):</strong> Cuántas veces el algoritmo verá el conjunto COMPLETO de datos de entrenamiento. Si tienes 1000 imágenes y tu Batch Size es 100, se requieren 10 pasos (steps) para completar 1 Epoch.</li>
        <li><strong>Optimizador:</strong> El algoritmo responsable de dar el "paso" matemático. El más usado hoy es <code>Adam</code>, porque ajusta inteligentemente la tasa de aprendizaje.</li>
      </ul>
    `,
    "practical": `
      <h3>Modelo Completo en Keras (TensorFlow)</h3>
      <pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import numpy as np

# Datos ficticios: 1000 muestras, 20 características de entrada
X_train = np.random.random((1000, 20))
y_train = np.random.randint(2, size=(1000, 1)) # Clasificación Binaria (0 o 1)

# 1. Definir la Red Profunda (DNN)
model = Sequential([
    Dense(64, activation='relu', input_shape=(20,)),
    Dense(64, activation='relu'), # Otra capa profunda
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid') # Capa final binaria
])

# 2. Compilar el modelo
model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy'])

# 3. Entrenar el modelo
# Separamos el 20% como datos de validación
historial = model.fit(X_train, y_train, 
                      epochs=10, 
                      batch_size=32, 
                      validation_split=0.2)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Modifica el código anterior para que en lugar de clasificación binaria (0 o 1), sea clasificación multiclase para 10 categorías (como clasificar dígitos del 0 al 9). Pista: Deberás cambiar la capa final y la función de pérdida a 'categorical_crossentropy'.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué ocurre durante el 'Forward Pass' (Paso hacia adelante)?", "options": ["Se actualizan los pesos", "Los datos de entrada atraviesan la red matemática hasta generar una predicción final", "La computadora se reinicia", "Se calculan las derivadas"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuál es la función del Optimizador (ej. Adam, SGD)?", "options": ["Hacer que la red se vea bien", "Actualizar los pesos de la red basándose en los gradientes para minimizar el error", "Generar datos nuevos", "Imprimir resultados en consola"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué es un 'Epoch' (Época)?", "options": ["Un año de entrenamiento", "Una pasada de un solo dato", "Un ciclo completo donde el modelo ha visto TODOS los datos del conjunto de entrenamiento", "Un error del sistema"], "correctAnswer": 2 },
      { "id": 4, "question": "Si tienes 1000 imágenes para entrenar y un 'Batch Size' de 100. ¿Cuántos pasos (steps o actualizaciones de peso) tomará completar 1 Epoch?", "options": ["10", "100", "1000", "1"], "correctAnswer": 0 },
      { "id": 5, "question": "¿Por qué no pasamos las 1000 imágenes al mismo tiempo en un solo Batch gigantesco?", "options": ["Porque Python no deja", "Porque consumiría demasiada memoria VRAM de la GPU y haría las actualizaciones de peso muy lentas o imposibles", "Porque el resultado sería peor", "Para que el código sea más corto"], "correctAnswer": 1 },
      { "id": 6, "question": "Si estás haciendo clasificación binaria, ¿qué función de pérdida (loss) debes usar en Keras?", "options": ["mean_squared_error", "categorical_crossentropy", "binary_crossentropy", "absolute_error"], "correctAnswer": 2 },
      { "id": 7, "question": "El parámetro 'validation_split=0.2' en Keras le dice a la red que:", "options": ["Borre el 20% de los datos", "Separe internamente el 20% final de los datos para evaluar el modelo y no entrenar con ellos", "El modelo fallará 20% del tiempo", "Doble el tamaño de los datos"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-4",
    "title": "4.4: Problemas en Redes Profundas (Vanishing Gradient)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender por qué agregar miles de capas ciegamente no funciona.</li><li>Comprender el Problema del Desvanecimiento y Explosión del Gradiente.</li><li>Conocer las soluciones modernas (Inicialización, Normalización).</li></ul>",
    "content": `
      <h3>1. El Problema de Desvanecimiento del Gradiente (Vanishing Gradient)</h3>
      <p>A medida que añadimos más y más capas a nuestra red, backpropagation tiene que multiplicar gradientes (números menores a 1) por cada capa hacia atrás. Matemáticamente, si multiplicas muchos números pequeños entre sí (ej. 0.1 * 0.1 * 0.1), el resultado se acerca rápidamente a 0.</p>
      <p>Como resultado, las primeras capas de la red (cerca de la entrada) casi nunca actualizan sus pesos y "no aprenden nada". Esto estancó el desarrollo de IA por años.</p>

      <h3>2. El Problema de la Explosión del Gradiente (Exploding Gradient)</h3>
      <p>Es el efecto opuesto. Si los gradientes o los pesos iniciales son muy grandes, al multiplicarlos repetidamente hacia atrás, los números crecen exponencialmente (ej. 10 * 10 * 10 = 1000). Los pesos de la red saltan salvajemente causando errores 'NaN' (Not a Number) y destruyendo el entrenamiento.</p>

      <h3>3. Soluciones Modernas de la Industria</h3>
      <p>Hoy en día, podemos entrenar redes de cientos de capas gracias a tres descubrimientos:</p>
      <ul>
        <li><strong>Función ReLU:</strong> En lugar de usar Sigmoide (cuyo gradiente máximo es 0.25), ReLU <code>f(x) = max(0, x)</code> devuelve un gradiente exactamente de 1 para valores positivos, evitando que el gradiente se desvanezca al multiplicarse.</li>
        <li><strong>Inicialización He / Glorot:</strong> Fórmulas estadísticas especiales para inicializar los pesos aleatorios con la varianza correcta desde el principio.</li>
        <li><strong>Batch Normalization:</strong> Una capa que normaliza estadísticamente las activaciones INTERNAS de la red en tiempo real.</li>
      </ul>
    `,
    "practical": `
      <h3>Implementando Soluciones en Código</h3>
      <pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, BatchNormalization

# Un modelo muy profundo, pero seguro de entrenar
modelo_seguro = Sequential([
    # 1. Usamos ReLU en lugar de sigmoide
    # 2. Usamos He initialization (ideal para ReLU)
    Dense(128, activation='relu', kernel_initializer='he_normal', input_shape=(50,)),
    
    # 3. Batch Normalization estabiliza los datos antes de la siguiente capa
    BatchNormalization(),
    
    Dense(64, activation='relu', kernel_initializer='he_normal'),
    BatchNormalization(),
    
    Dense(32, activation='relu', kernel_initializer='he_normal'),
    
    Dense(1, activation='sigmoid') # Solo la salida usa sigmoide
])
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Busca información sobre las 'Conexiones Residuales' (Skip Connections) inventadas por la red ResNet. ¿Cómo ayudan específicamente al problema del Desvanecimiento del Gradiente en redes de 100 capas?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué sucede en el problema del Desvanecimiento del Gradiente (Vanishing Gradient)?", "options": ["La computadora se apaga", "Los gradientes se vuelven tan pequeños que las primeras capas de la red dejan de actualizar sus pesos y no aprenden", "La red empieza a borrar datos de entrenamiento", "Los pesos crecen infinitamente"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuál es la causa matemática principal del Vanishing Gradient?", "options": ["Multiplicar repetidamente derivadas pequeñas (menores a 1) a través de muchas capas durante el Backpropagation", "Que la función de pérdida no tenga límite", "Sumar números negativos en un bucle for", "El uso de la tarjeta gráfica"], "correctAnswer": 0 },
      { "id": 3, "question": "¿Qué sucede en el problema de Explosión del Gradiente?", "options": ["Los gradientes crecen exponencialmente causando que los pesos cambien drásticamente hacia el infinito (NaN)", "El disco duro explota por el calor", "La red clasifica todo perfectamente", "El modelo se congela"], "correctAnswer": 0 },
      { "id": 4, "question": "¿Por qué la función de activación ReLU solucionó en gran parte el problema del desvanecimiento?", "options": ["Porque es más bonita de dibujar", "Porque su derivada para números positivos es siempre exactamente 1, evitando que el producto de gradientes encoja a 0", "Porque devuelve siempre cero", "Porque multiplica por infinito"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Por qué inicializar todos los pesos en cero (0.0) antes de entrenar es una idea desastrosa?", "options": ["Porque ocupa mucha memoria", "Porque todas las neuronas aprenderán exactamente lo mismo (simetría matemática) y no extraerán diferentes características", "Porque da error de compilación", "Porque python no soporta ceros"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué hace la técnica de 'Batch Normalization'?", "options": ["Borra el batch actual", "Re-escala (normaliza) las salidas de una capa oculta para que tengan media 0 y varianza 1 antes de pasar a la siguiente, estabilizando el entrenamiento", "Descarga datos de internet", "Cierra el programa suavemente"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué inicialización de pesos aleatorios es la mejor práctica estándar actual si utilizas activaciones ReLU?", "options": ["Inicialización en Ceros", "Inicialización en Unos", "Inicialización de He (He Normal)", "Valores aleatorios muy altos"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-5",
    "title": "4.5: Redes Neuronales Convolucionales (CNN)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender por qué las redes densas fallan procesando imágenes de alta resolución.</li><li>Aprender el concepto de Operación de Convolución y Filtros (Kernels).</li><li>Comprender el MaxPooling para reducción espacial.</li></ul>",
    "content": `
      <h3>1. El Problema con la Visión Espacial</h3>
      <p>Si pasamos una imagen en color de 1000x1000 píxeles a una capa Densa plana estándar, tendríamos 3,000,000 de entradas. Conectar cada píxel a 100 neuronas ocultas requeriría <strong>300 millones de parámetros (pesos) en una sola capa</strong>. El modelo explotaría la memoria y se sobreajustaría horriblemente.</p>
      <p>Además, una capa densa no entiende la "geometría". Para ella, un píxel arriba a la izquierda y otro abajo a la derecha son solo dos números desconectados.</p>

      <h3>2. La Solución: Convoluciones</h3>
      <p>Una CNN usa "Filtros" o "Kernels" (pequeñas ventanas de pesos, ej. 3x3). En lugar de mirar toda la imagen de golpe, el filtro "se desliza" barriendo la imagen de izquierda a derecha y de arriba a abajo.</p>
      <p>Ese pequeño filtro multiplica sus valores con los píxeles subyacentes. Gracias a esto, el filtro aprende a detectar patrones específicos localizados, como: <em>bordes verticales, texturas o formas</em> sin importar en qué parte de la imagen aparezcan.</p>

      <h3>3. Pooling (Submuestreo)</h3>
      <p>Para reducir el tamaño de la imagen y quedarse solo con "lo importante", se aplican capas de Pooling. El <strong>Max Pooling</strong> de tamaño 2x2 mira un cuadrado de 4 píxeles en la imagen procesada y simplemente descarta 3, guardando únicamente el número de mayor valor (la característica más prominente). Esto encoge la imagen a la mitad y hace al modelo resistente a pequeñas traslaciones del objeto.</p>
    `,
    "practical": `
      <h3>Construyendo una CNN Básica para Visión Computacional</h3>
      <p>Arquitectura típica: Conv2D -> MaxPooling -> Conv2D -> MaxPooling -> Flatten -> Dense.</p>
      <pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

modelo_vision = Sequential([
    # Capa Convolucional 1: Extrae 32 características usando ventanas de 3x3
    # Input shape para imágenes RGB de 64x64
    Conv2D(32, kernel_size=(3, 3), activation='relu', input_shape=(64, 64, 3)),
    
    # Capa de Pooling: Reduce a la mitad el alto y ancho
    MaxPooling2D(pool_size=(2, 2)),
    
    # Capa Convolucional 2: La red se hace más "gruesa" (64 filtros) a medida que la imagen es más pequeña
    Conv2D(64, kernel_size=(3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    
    # "Aplastamos" los mapas de características 2D a un vector plano 1D
    Flatten(),
    
    # Red Densa clásica final para tomar la decisión
    Dense(128, activation='relu'),
    Dense(10, activation='softmax') # Clasificación de 10 clases (ej. Gato, Perro, etc.)
])

modelo_vision.summary()
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Revisa la salida de <code>modelo_vision.summary()</code>. Notarás que después del Flatten, la cantidad de parámetros crece muchísimo. Explica por qué sucede esto con tus propias palabras.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué es una mala idea usar una Red Densa clásica para procesar imágenes de alta resolución (ej. 1080p)?", "options": ["Porque los colores confunden a la red", "Porque se generarían miles de millones de parámetros causando problemas de memoria RAM y un Overfitting brutal", "Porque las capas densas no soportan números positivos", "Porque el código sería muy feo"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es la operación de 'Convolución' en visión por computadora?", "options": ["Borrar píxeles al azar", "Deslizar una pequeña ventana de pesos (Filtro/Kernel) a través de la imagen para detectar patrones locales como bordes", "Doblar la imagen a la mitad", "Multiplicar todos los píxeles por cero"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué ventaja crucial tienen las CNNs sobre la invariancia espacial?", "options": ["No tienen ventajas", "Si la red aprende a reconocer un 'ojo' en la esquina superior izquierda, el mismo filtro lo reconocerá si el ojo aparece en la esquina inferior derecha", "Pueden procesar texto más rápido", "Hacen que la PC corra a más Hz"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué hace una capa de MaxPooling (Submuestreo)?", "options": ["Añade agua a la imagen", "Reduce el tamaño (resolución) del mapa de características reteniendo únicamente el valor más importante (el máximo) de cada región analizada", "Amplía la imagen a 4K", "Convierte la imagen a blanco y negro"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué significa el parámetro 'kernel_size=(3, 3)'?", "options": ["Que creará 3 capas", "Que el filtro o lupa que barre la imagen es un cuadradito de 3x3 píxeles", "Que el color usado es 3", "Que procesa 3 imágenes a la vez"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Para qué sirve la capa 'Flatten()' antes del final de una CNN?", "options": ["Para comprimir el archivo .jpg", "Para 'aplastar' o aplanar los volúmenes 3D resultantes en un simple vector 1D, permitiendo conectarlo a capas Densas normales para clasificación", "Para borrar características inútiles", "Para girar la imagen"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué es un 'Feature Map' (Mapa de Características)?", "options": ["Un mapa de Google", "La salida 2D generada después de que un Filtro Convolucional ha barrido toda la imagen original", "Un documento PDF", "Una lista de errores en Python"], "correctAnswer": 1 }
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
console.log('Successfully created/updated sessions 4.1 to 4.5');
