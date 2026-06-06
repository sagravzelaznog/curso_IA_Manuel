import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "4-6",
    "title": "4.6: Arquitecturas CNN Avanzadas y Transfer Learning",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Conocer las arquitecturas clásicas de visión por computadora (VGG, ResNet).</li><li>Aprender el concepto de Transfer Learning (Transferencia de Aprendizaje).</li><li>Saber cómo usar modelos pre-entrenados para resolver problemas propios con pocos datos.</li></ul>",
    "content": `
      <h3>1. Arquitecturas Famosas</h3>
      <p>A lo largo de los años, investigadores han creado arquitecturas CNN muy complejas que ganaron competencias mundiales de visión (ImageNet). Algunas de las más importantes son:</p>
      <ul>
        <li><strong>VGG16 (2014):</strong> Una red muy limpia y profunda (16 capas). Demostró que hacer la red más profunda usando filtros muy pequeños (3x3) era mejor que usar filtros grandes.</li>
        <li><strong>ResNet (2015):</strong> Revolucionó el Deep Learning al introducir las <em>Conexiones Residuales</em> (Skip Connections). Permitió entrenar redes de 152 capas sin sufrir el problema del Desvanecimiento del Gradiente.</li>
      </ul>
      
      <h3>2. ¿Qué es el Transfer Learning?</h3>
      <p>Entrenar una ResNet desde cero requiere millones de imágenes y semanas de procesamiento en granjas de GPUs. El <strong>Transfer Learning</strong> (Transferencia de Aprendizaje) es la técnica de tomar un modelo de red neuronal que ya fue pre-entrenado en un problema gigantesco (como reconocer 1000 objetos distintos en ImageNet) y "reutilizar" su conocimiento para nuestro problema específico.</p>
      
      <h3>3. ¿Cómo funciona matemáticamente?</h3>
      <p>Las primeras capas de una CNN aprenden cosas universales: detectar bordes, curvas y texturas. Estos conceptos sirven para cualquier imagen, ya sea un coche o un tumor médico. En Transfer Learning, nosotros "congelamos" (no actualizamos los pesos de) esas capas iniciales, y solo borramos y reemplazamos la última capa de la red (la capa de clasificación) entrenándola con nuestro set de datos pequeño.</p>
    `,
    "practical": `
      <h3>Transfer Learning con TensorFlow/Keras</h3>
      <pre><code class="language-python">from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D

# 1. Cargar el modelo pre-entrenado (MobileNetV2 es muy ligero)
# 'include_top=False' significa que le quitamos la última capa de clasificación original
modelo_base = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

# 2. Congelar los pesos del modelo base para no destruirlos al inicio
modelo_base.trainable = False

# 3. Construir nuestro modelo agregando nuestra propia capa al final
mi_modelo = Sequential([
    modelo_base,
    GlobalAveragePooling2D(),
    Dense(1, activation='sigmoid') # Clasificación binaria (ej. Perro vs Gato)
])

mi_modelo.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
# Listo para entrenar con un set de datos de tan solo cientos de imágenes!
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga y explica qué es el 'Fine-Tuning' (Ajuste Fino) en el contexto de Transfer Learning. ¿En qué momento del entrenamiento se debe realizar?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué innovación crítica introdujo ResNet (Residual Networks) en 2015?", "options": ["Uso de discos duros SSD", "Conexiones Residuales (Skip Connections) que permiten a la señal saltarse capas, evitando el desvanecimiento del gradiente en redes ultra-profundas", "Eliminar todas las neuronas ocultas", "Convertir imágenes a texto"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es el Transfer Learning (Transferencia de Aprendizaje)?", "options": ["Transferir archivos por USB", "Reutilizar un modelo de IA pre-entrenado en un gran problema general para aplicarlo a un problema específico nuevo", "Traducir código de Python a Java", "Mover la IA a la nube"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Por qué el Transfer Learning es revolucionario para empresas pequeñas?", "options": ["Porque es ilegal", "Porque permite crear IAs de clase mundial usando muy pocos datos y minutos de entrenamiento, en lugar de millones de imágenes y supercomputadoras", "Porque requiere programadores junior", "Porque usa menos luz"], "correctAnswer": 1 },
      { "id": 4, "question": "En visión por computadora, ¿por qué es útil congelar las primeras capas de un modelo pre-entrenado?", "options": ["Para que el modelo no tenga calor", "Porque las primeras capas aprenden a detectar características universales de las imágenes (bordes, curvas) que sirven para cualquier tarea visual", "Porque las primeras capas son inútiles", "Para acelerar el disco"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué argumento en Keras usamos para cargar un modelo famoso (ej. ResNet) SIN su capa final original de clasificación?", "options": ["delete_layer=True", "include_top=False", "bottom_only=True", "no_final_output=True"], "correctAnswer": 1 },
      { "id": 6, "question": "En el código, cuando decimos `modelo_base.trainable = False`, ¿qué estamos haciendo?", "options": ["Apagando el ordenador", "Congelando todos los pesos del modelo pre-entrenado para que el optimizador no los modifique durante nuestro entrenamiento", "Borrando el modelo", "Activando el modelo base"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué es el 'Fine-Tuning' (Ajuste Fino)?", "options": ["Pintar el hardware de la PC", "Una fase posterior al Transfer Learning donde 'descongelamos' algunas de las últimas capas del modelo base y las entrenamos con una tasa de aprendizaje muy pequeña para especializarlas", "Cambiar el nombre de las variables", "Comprimir los datos"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-7",
    "title": "4.7: Redes Neuronales Recurrentes (RNN y LSTM)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender por qué las redes estándar fallan con datos secuenciales (como texto o series temporales).</li><li>Aprender cómo funciona una Red Neuronal Recurrente (RNN).</li><li>Conocer las LSTM y por qué resolvieron el problema de memoria a largo plazo.</li></ul>",
    "content": `
      <h3>1. El Problema del Tiempo y el Contexto</h3>
      <p>Una Red Densa clásica o una CNN asume que las entradas son independientes entre sí. Si le pasamos la oración <em>"El cielo es ___"</em> palabra por palabra, la red clásica procesa "El", luego olvida todo y procesa "cielo", no guardando memoria del pasado.</p>
      <p>Las <strong>Redes Neuronales Recurrentes (RNN)</strong> solucionan esto añadiendo bucles: la salida de la neurona se vuelve a inyectar a sí misma como entrada para el siguiente paso de tiempo. Así, la red mantiene un <em>estado oculto (hidden state)</em> que funciona como memoria a corto plazo.</p>

      <h3>2. El Problema de las RNN Clásicas</h3>
      <p>Las RNN simples sufren horriblemente del <strong>Desvanecimiento del Gradiente</strong>. Si la frase es muy larga (ej. un párrafo entero), la RNN olvida la primera palabra para cuando llega a la última. Es decir, tienen pésima memoria a largo plazo.</p>

      <h3>3. La Solución: LSTM (Long Short-Term Memory)</h3>
      <p>Inventadas en 1997, las redes LSTM son una variante de RNN que incluyen un "estado de celda" interno (una banda transportadora de memoria) y estructuras llamadas <em>Puertas (Gates)</em>:</p>
      <ul>
        <li><strong>Puerta de Olvido (Forget Gate):</strong> Decide qué información vieja tirar a la basura.</li>
        <li><strong>Puerta de Entrada (Input Gate):</strong> Decide qué información nueva merece ser guardada en la memoria.</li>
        <li><strong>Puerta de Salida (Output Gate):</strong> Decide qué parte de la memoria interna se enviará como salida.</li>
      </ul>
      <p>Gracias a las LSTM, se popularizaron los traductores automáticos modernos y el reconocimiento de voz de Siri/Google Assistant.</p>
    `,
    "practical": `
      <h3>Estructura Secuencial de LSTM en Keras</h3>
      <pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

# Supongamos que predecimos el clima.
# Input shape: (30, 4) -> 30 días de historia, 4 características (temperatura, humedad, viento, lluvia)

modelo_rnn = Sequential([
    # La LSTM procesa la secuencia manteniendo la memoria en el tiempo
    # return_sequences=False significa que solo devuelve la predicción para el paso de tiempo final
    LSTM(64, activation='tanh', input_shape=(30, 4)),
    
    Dense(32, activation='relu'),
    # Salida: Temperatura predicha para el día 31
    Dense(1, activation='linear') 
])

modelo_rnn.compile(optimizer='adam', loss='mse')
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga qué son las redes GRU (Gated Recurrent Unit). ¿En qué se diferencian principalmente de las LSTM y por qué a veces los ingenieros prefieren usar GRU?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué tipo de datos procesan excelentemente las Redes Neuronales Recurrentes (RNN)?", "options": ["Imágenes estáticas", "Datos tabulares CSV sin orden", "Datos secuenciales o series temporales (como texto, audio, valores de bolsa de valores diarios)", "Datos aleatorios"], "correctAnswer": 2 },
      { "id": 2, "question": "¿Qué innovación arquitectónica tiene una RNN sobre una red densa normal?", "options": ["No usa activaciones", "Tiene conexiones cíclicas (bucles) que le permiten usar la salida de un paso anterior como entrada en el paso actual, creando 'memoria'", "Usa píxeles de imágenes directamente", "Borra el disco duro"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué grave problema matemático sufren las RNN simples cuando las secuencias son muy largas (ej. textos largos)?", "options": ["Exceso de velocidad", "Desvanecimiento del gradiente, lo que causa pérdida total de memoria a largo plazo", "Fallo de sintaxis", "División por cero"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué significa LSTM?", "options": ["Large Sequence Tensor Model", "Long Short-Term Memory", "Local Standard Text Machine", "Light Simple Training Module"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué mecanismo interno usa la LSTM para decidir qué recordar y qué olvidar?", "options": ["Estructuras llamadas 'Puertas' (Gates) como la puerta de olvido y la puerta de entrada", "Un bucle IF gigantesco", "Bases de datos relacionales", "Consulta a Google"], "correctAnswer": 0 },
      { "id": 6, "question": "¿Para qué tipo de tareas clásicas se usaron extensivamente las LSTM a partir del año 2015?", "options": ["Edición de fotos", "Reconocimiento de imágenes médicas", "Traducción automática (Google Translate clásico) y reconocimiento de voz", "Creación de bases de datos"], "correctAnswer": 2 },
      { "id": 7, "question": "En el ejemplo de Keras, si el input_shape de la LSTM es (30, 4), ¿qué representa el 30?", "options": ["30 neuronas", "30 capas", "30 pasos de tiempo (ej. 30 palabras o 30 días secuenciales)", "30 megabytes"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-8",
    "title": "4.8: Procesamiento de Lenguaje Natural (NLP) Clásico",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender cómo una máquina puede procesar texto.</li><li>Conocer el concepto revolucionario de Word Embeddings (Vectores de Palabras).</li><li>Aprender sobre Word2Vec y cómo las matemáticas capturan la semántica.</li></ul>",
    "content": `
      <h3>1. El Problema de las Palabras para una Computadora</h3>
      <p>Las redes neuronales no entienden texto, solo números (tensores). La forma más antigua de tratar palabras fue <strong>One-Hot Encoding</strong>: si el diccionario tiene 10,000 palabras, la palabra "Gato" es un vector de 10,000 ceros y un solo '1' en la posición correspondiente. Esto es ineficiente y, peor aún, no captura ningún significado (la distancia matemática entre "Perro" y "Gato" es la misma que entre "Perro" y "Automóvil").</p>
      
      <h3>2. La Revolución: Word Embeddings (Word2Vec)</h3>
      <p>En 2013, investigadores de Google publicaron <em>Word2Vec</em>. En lugar de vectores gigantes y dispersos, propusieron representar cada palabra como un vector denso y pequeño (ej. 300 números) donde <strong>la geometría representa semántica</strong>.</p>
      <p>Si entrenamos a una red para predecir qué palabras rodean a otras palabras en un texto gigantesco (ej. toda Wikipedia), las coordenadas espaciales de los números de las palabras se agrupan. Las palabras que aparecen en contextos similares, terminan cerca geométricamente.</p>

      <h3>3. Matemáticas Semánticas</h3>
      <p>La magia de los embeddings es que permiten álgebra con palabras. La demostración clásica mundial es:<br>
      <code>Vector(Rey) - Vector(Hombre) + Vector(Mujer) = Vector(Reina)</code>.<br>
      Esto significa que la red aprendió sola el concepto de género y realeza simplemente leyendo millones de frases y ajustando números.</p>
    `,
    "practical": `
      <h3>Usando Embeddings en Keras</h3>
      <p>En Keras, la capa <code>Embedding</code> convierte números enteros (índices de palabras) en vectores densos fijos mágicamente durante el entrenamiento.</p>
      <pre><code class="language-python">from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense

# Supongamos un vocabulario de 10,000 palabras.
# Queremos vectores semánticos (embeddings) de tamaño 128.

modelo_nlp = Sequential([
    # Capa Embedding: Toma un número (ej. palabra 502) y devuelve un vector de 128 números.
    Embedding(input_dim=10000, output_dim=128),
    
    # Pasamos los vectores de palabras a la LSTM
    LSTM(64),
    
    # Salida: Analizador de Sentimientos (ej. Crítica de cine: 0=Mala, 1=Buena)
    Dense(1, activation='sigmoid')
])

modelo_nlp.summary()
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga qué significa TF-IDF en Procesamiento de Lenguaje Natural clásico. ¿Para qué se usa y en qué se diferencia de un Word Embedding?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál era el problema principal de usar 'One-Hot Encoding' para palabras en Procesamiento de Lenguaje Natural?", "options": ["Era demasiado rápido", "Los vectores eran inmensos, llenos de ceros, y no capturaban ninguna relación semántica ni significado entre las palabras", "Generaba virus en el servidor", "Consumía poca memoria"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es un Word Embedding?", "options": ["Un bloque de HTML", "Una representación de palabras usando vectores densos numéricos continuos, donde la posición en el espacio refleja su significado", "Un diccionario de la RAE", "Una técnica para borrar palabras largas"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué famoso algoritmo popularizó masivamente el uso de Embeddings en 2013?", "options": ["K-Means", "Random Forest NLP", "Word2Vec", "BERT"], "correctAnswer": 2 },
      { "id": 4, "question": "En el espacio geométrico de Word2Vec, ¿qué ocurre con las palabras 'Perro' y 'Gato'?", "options": ["Estarán matemáticamente muy alejadas", "Sus vectores estarán matemáticamente muy cerca entre sí en el espacio n-dimensional porque se usan en contextos similares", "No existen en el sistema", "Sus vectores son exactamente iguales"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Cuál es la ecuación algebraica clásica que demuestra que los embeddings capturan analogías lógicas?", "options": ["x + y = z", "Vector(Rey) - Vector(Hombre) + Vector(Mujer) = Vector(Reina)", "Seno(Perro) + Coseno(Gato) = 1", "0 + 0 = 0"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Para qué sirve la capa 'Embedding' en TensorFlow/Keras?", "options": ["Para insertar imágenes en el texto", "Para traducir índices enteros de un diccionario en vectores semánticos densos que se entrenan junto con la red", "Para conectar el código a la nube", "Para encriptar la red"], "correctAnswer": 1 },
      { "id": 7, "question": "Si usamos LSTM después de una capa Embedding en análisis de sentimientos, ¿qué está analizando la LSTM?", "options": ["El sentimiento de cada letra", "La secuencia del significado (los vectores) de las palabras para entender el contexto global de la frase", "Solo cuenta cuántas palabras hay", "El color de las letras"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-9",
    "title": "4.9: La Revolución de los Transformers",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender por qué las LSTM quedaron obsoletas para grandes modelos de lenguaje.</li><li>Comprender el Mecanismo de 'Atención' (Self-Attention).</li><li>Conocer la arquitectura Transformer y cómo dio paso a modelos como ChatGPT (GPT/BERT).</li></ul>",
    "content": `
      <h3>1. El Cuello de Botella de las RNN/LSTM</h3>
      <p>Las redes RNN y LSTM son inherentemente secuenciales. Tienen que leer la palabra 1, luego la 2, luego la 3... No pueden aprovechar el procesamiento paralelo de las GPUs modernas para una oración entera de golpe. Esto limitaba gravemente el tamaño de los datos con los que podíamos entrenar.</p>

      <h3>2. "Attention Is All You Need" (2017)</h3>
      <p>Investigadores de Google publicaron un paper histórico donde presentaron la arquitectura <strong>Transformer</strong>. Su premisa fue audaz: deshacerse por completo de las redes recurrentes (LSTM) y usar únicamente un mecanismo llamado <em>Self-Attention (Auto-Atención)</em>.</p>
      
      <h3>3. ¿Qué es Self-Attention?</h3>
      <p>En lugar de leer en orden, el mecanismo de atención analiza TODAS las palabras de una frase al mismo tiempo. Para procesar la palabra "banco", la red calcula un porcentaje de "atención" o relevancia matemática con respecto a cada una de las otras palabras de la frase (ej. ¿se trata de un banco de peces, de sentarse, o de dinero?).</p>
      <p>Dado que procesa todo a la vez en paralelo, los tiempos de entrenamiento se desplomaron. De repente, podíamos entrenar modelos no con miles, sino con miles de millones de palabras de internet.</p>

      <h3>4. Los Hijos del Transformer: BERT y GPT</h3>
      <ul>
        <li><strong>BERT (Google):</strong> Es bidireccional, lee la oración entera junta para un entendimiento contextual profundo. Ideal para análisis de texto y búsquedas.</li>
        <li><strong>GPT (OpenAI):</strong> Es autorregresivo (Generative Pre-trained Transformer). Predice secuencialmente la siguiente palabra. Es el motor detrás de ChatGPT.</li>
      </ul>
    `,
    "practical": `
      <h3>Usando un Transformer Moderno en 3 líneas (Hugging Face)</h3>
      <p>Hoy en día no escribimos Transformers desde cero. Usamos la librería <code>transformers</code> de Hugging Face para cargar modelos gigantescos ya pre-entrenados.</p>
      <pre><code class="language-python"># Primero: pip install transformers
from transformers import pipeline

# Cargar un modelo basado en Transformer para análisis de sentimientos (BERT)
analizador = pipeline("sentiment-analysis", model="nlptown/bert-base-multilingual-uncased-sentiment")

resultado1 = analizador("¡Este curso de Inteligencia Artificial es absolutamente increíble!")
print(resultado1) # Probablemente devuelva 5 estrellas / Positivo

resultado2 = analizador("El servicio fue lento y la comida estaba fría.")
print(resultado2) # Probablemente devuelva 1 estrella / Negativo
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el concepto de 'Positional Encoding' (Codificación Posicional) dentro de la arquitectura Transformer. ¿Por qué es estrictamente necesario si el Transformer lee todas las palabras al mismo tiempo?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál era la mayor desventaja computacional de las redes LSTM/RNN?", "options": ["Que no podían leer texto", "Que procesan secuencialmente (palabra por palabra), impidiendo el paralelismo masivo en GPUs y haciendo el entrenamiento muy lento", "Que eran muy caras", "Que solo entendían inglés"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuál es el nombre del famoso paper de Google de 2017 que introdujo los Transformers?", "options": ["Deep Learning from Scratch", "Neural Networks are All You Need", "Attention Is All You Need", "LSTM is Dead"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Qué arquitectura clave eliminó por completo la necesidad de redes recurrentes (LSTM) en procesamiento de texto?", "options": ["Las CNN", "Los Perceptrones", "El Transformer", "El K-Means"], "correctAnswer": 2 },
      { "id": 4, "question": "¿Cómo funciona conceptualmente el mecanismo de 'Self-Attention' (Auto-Atención)?", "options": ["Pregunta al usuario qué es importante", "Procesa toda la oración al mismo tiempo, calculando matemáticamente cuánta atención/relevancia debe prestar cada palabra al resto de las palabras para entender el contexto", "Ignora las palabras cortas", "Lee el texto en orden inverso"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué enorme ventaja de hardware trajo el Transformer?", "options": ["Puede correr sin electricidad", "Al no ser secuencial, permite paralelizar totalmente el cálculo matricial en la GPU, permitiendo entrenar modelos con miles de millones de textos en tiempos aceptables", "Usa la CPU al 100%", "Baja la temperatura del procesador"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué significan las siglas GPT en ChatGPT?", "options": ["General Processing Text", "Generative Pre-trained Transformer", "Google Python Tool", "Generative Programming Tensor"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Cuál es la librería líder mundial de código abierto para descargar y usar modelos Transformer como BERT o GPT?", "options": ["Numpy", "Pandas NLP", "Hugging Face (transformers)", "SciPy"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-10",
    "title": "4.10: Redes Generativas Adversarias (GANs)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Comprender el concepto de modelos generativos vs discriminativos.</li><li>Entender la arquitectura dual de las GAN (Generador vs Discriminador).</li><li>Conocer el impacto de las GANs en la creación de imágenes sintéticas.</li></ul>",
    "content": `
      <h3>1. Modelos Discriminativos vs Generativos</h3>
      <p>Hasta ahora hemos visto modelos <em>Discriminativos</em>: redes que reciben una imagen de un gato y escupen una etiqueta "Gato". Aprenden a separar (discriminar) datos. Los modelos <em>Generativos</em> hacen lo contrario: aprenden las reglas del universo de datos y son capaces de crear una imagen nueva, nunca antes vista, de un gato realista de la nada.</p>
      
      <h3>2. ¿Qué son las GANs?</h3>
      <p>Inventadas por Ian Goodfellow en 2014, las <strong>Redes Generativas Adversarias (GANs)</strong> plantearon una brillante idea basada en la Teoría de Juegos. En lugar de una red, usamos <strong>DOS</strong> redes neuronales profundas que pelean entre sí (son adversarias):</p>
      <ul>
        <li><strong>El Generador (El Falsificador):</strong> Su única misión es crear imágenes falsas a partir de ruido aleatorio que parezcan tan reales que engañen a la otra red.</li>
        <li><strong>El Discriminador (El Policía):</strong> Su única misión es mirar imágenes (algunas reales del dataset, otras falsas creadas por el Generador) y adivinar cuáles son falsas y cuáles reales.</li>
      </ul>

      <h3>3. El Entrenamiento Adversario</h3>
      <p>Ambas redes se entrenan al mismo tiempo en un bucle cerrado. El Generador hace una imagen horrible, el Discriminador la pilla al instante. El Generador aprende qué falló y mejora su falsificación. El Discriminador mejora sus técnicas para atrapar al Generador. Tras miles de iteraciones, el Generador se vuelve tan absurdamente bueno falsificando que el Discriminador no puede distinguir lo real de lo falso (50% de probabilidad). En ese momento, ¡el Generador puede crear rostros hiperrealistas de personas que no existen!</p>
    `,
    "practical": `
      <h3>El Flujo (Pseudocódigo) de Entrenamiento de una GAN</h3>
      <p>Entrenar una GAN es notoriamente difícil e inestable. Mira la lógica básica:</p>
      <pre><code class="language-python"># Pseudocódigo simplificado de un ciclo de entrenamiento GAN

for epoca in range(epocas):
    # --- 1. Entrenar al Discriminador ---
    imagenes_reales = obtener_lote_real_dataset()
    
    ruido = generar_ruido_aleatorio()
    imagenes_falsas = generador.predict(ruido)
    
    # Entrenar policía para que diga "1" a lo real y "0" a lo falso
    discriminador.train_on_batch(imagenes_reales, etiquetas_reales_1)
    discriminador.train_on_batch(imagenes_falsas, etiquetas_falsas_0)
    
    # --- 2. Entrenar al Generador ---
    # Queremos engañar al discriminador, así que el generador es exitoso
    # si el discriminador se confunde y dice "1" (Real) a la imagen falsa
    ruido_nuevo = generar_ruido_aleatorio()
    modelo_gan_combinado.train_on_batch(ruido_nuevo, etiquetas_reales_1)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Visita la página web <em>thispersondoesnotexist.com</em> (que usa una versión avanzada de GAN llamada StyleGAN). Refresca la página un par de veces y fíjate en los detalles. ¿Puedes notar algún error visual clásico que suelen cometer las GANs (por ejemplo, en fondos, gafas, aretes, o dientes)?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué hace un modelo de Machine Learning 'Generativo'?", "options": ["Genera errores en el código", "Genera etiquetas de texto basándose en una imagen (Clasifica)", "Aprende la distribución de los datos para crear muestras sintéticas totalmente nuevas y realistas de la nada", "Borra archivos y genera espacio libre"], "correctAnswer": 2 },
      { "id": 2, "question": "¿Quién es acreditado como el inventor de las Redes Generativas Adversarias (GANs) en 2014?", "options": ["Geoffrey Hinton", "Ian Goodfellow", "Elon Musk", "Yann LeCun"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Cuáles son las dos sub-redes principales que conforman una GAN?", "options": ["El Frontend y el Backend", "El Encoder y el Decoder", "El Generador y el Discriminador", "La Entrada y la Salida"], "correctAnswer": 2 },
      { "id": 4, "question": "En la analogía común, ¿qué rol juega la red 'Generador'?", "options": ["El Juez", "El Policía experto en detectar fraudes", "El Falsificador de arte que intenta crear obras que parezcan auténticas", "El cliente de la galería de arte"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Cuál es la misión de la red 'Discriminador'?", "options": ["Crear mejores imágenes falsas", "Clasificar imágenes entrantes diciendo si son Reales (del dataset) o Falsas (creadas por el generador)", "Hacer que el entrenamiento sea más rápido", "Bajar la temperatura de la GPU"], "correctAnswer": 1 },
      { "id": 6, "question": "¿De dónde obtiene el Generador su entrada inicial para crear una imagen nueva?", "options": ["Toma una foto de internet", "Le pasamos una foto real y le pone un filtro", "Toma un vector de ruido totalmente aleatorio (números al azar) y lo moldea hasta convertirlo en una imagen", "De una base de datos SQL"], "correctAnswer": 2 },
      { "id": 7, "question": "¿Cuándo se considera que el entrenamiento de una GAN fue un éxito absoluto?", "options": ["Cuando el discriminador gana siempre (100% de precisión)", "Cuando el generador crea imágenes horribles", "Cuando el modelo produce un error y se detiene", "Cuando el generador es tan bueno que el discriminador no puede diferenciar lo falso de lo real (precisión del 50%, adivina al azar)"], "correctAnswer": 3 }
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
console.log('Successfully created/updated sessions 4.6 to 4.10');
