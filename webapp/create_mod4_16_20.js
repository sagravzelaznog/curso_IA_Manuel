import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "4-16",
    "title": "4.16: Autoencoders y Denoising",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Comprender la arquitectura en forma de reloj de arena de un Autoencoder.</li><li>Aprender cómo se utilizan para reducción de dimensionalidad no lineal.</li><li>Aplicar Autoencoders para la eliminación de ruido (Denoising).</li></ul>",
    "content": `
      <h3>1. ¿Qué es un Autoencoder?</h3>
      <p>Un Autoencoder es una arquitectura de red neuronal no supervisada cuyo objetivo es aprender a comprimir los datos y luego descomprimirlos para que la salida sea lo más parecida posible a la entrada original. Tiene una forma clásica de "reloj de arena" y se divide en dos partes:</p>
      <ul>
        <li><strong>Encoder (Codificador):</strong> Toma la entrada de alta dimensión (ej. imagen de 784 píxeles) y la comprime gradualmente en una capa oculta central muy pequeña llamada <em>Espacio Latente (Latent Space)</em> o Cuello de Botella.</li>
        <li><strong>Decoder (Decodificador):</strong> Toma ese vector comprimido y reconstruye gradualmente la imagen original.</li>
      </ul>
      
      <h3>2. Reducción de Dimensionalidad No Lineal</h3>
      <p>El Autoencoder funciona como una versión mucho más poderosa y "no lineal" de PCA (Análisis de Componentes Principales). Al forzar a la red a pasar la información por un cuello de botella estricto, la red se ve obligada a descartar el ruido y conservar solo las características más esenciales de los datos.</p>

      <h3>3. Denoising Autoencoders (Eliminación de Ruido)</h3>
      <p>Una aplicación mágica de los autoencoders es la restauración de imágenes. Durante el entrenamiento, le inyectamos ruido artificial a las imágenes de entrada (las ensuciamos), pero configuramos la <em>Función de Pérdida</em> para que compare la salida del decodificador con la imagen original <strong>limpia</strong>. Así, la red aprende a ignorar la "basura" visual y reconstruye fotos dañadas, antiguas o con poca luz de forma espectacular.</p>
    `,
    "practical": `
      <h3>Arquitectura de un Autoencoder en Keras</h3>
      <pre><code class="language-python">from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Dense

# Dimensión de entrada: Imágenes de 28x28 (784 píxeles)
entrada = Input(shape=(784,))

# --- ENCODER ---
# Comprimimos gradualmente
codificado = Dense(128, activation='relu')(entrada)
codificado = Dense(64, activation='relu')(codificado)
# Cuello de botella: El espacio latente es de solo 32 dimensiones
espacio_latente = Dense(32, activation='relu')(codificado)

# --- DECODER ---
# Reconstruimos gradualmente
decodificado = Dense(64, activation='relu')(espacio_latente)
decodificado = Dense(128, activation='relu')(decodificado)
# Salida final de vuelta a 784 píxeles
salida = Dense(784, activation='sigmoid')(decodificado)

# El modelo completo
autoencoder = Model(inputs=entrada, outputs=salida)

# Entrenamos comparando la imagen consigo misma (o con su versión limpia)
autoencoder.compile(optimizer='adam', loss='binary_crossentropy')
# autoencoder.fit(X_ruidoso, X_limpio, epochs=50, batch_size=256)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga qué son los <em>Autoencoders Variacionales (VAE)</em>. ¿Cómo modifican el espacio latente del cuello de botella para permitir que la red se vuelva 'Generativa' (es decir, capaz de crear caras nuevas en lugar de solo copiar las existentes)?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es el objetivo principal de la Función de Pérdida en un Autoencoder estándar?", "options": ["Predecir una etiqueta", "Hacer que la salida reconstruida sea matemáticamente lo más idéntica posible a la entrada original", "Destruir la imagen", "Predecir la siguiente palabra en un texto"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué nombre recibe la pequeña capa central que conecta el Encoder con el Decoder?", "options": ["Capa de Ruido", "Espacio Latente o Cuello de Botella (Bottleneck)", "Punto ciego", "Capa convolucional"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Por qué es crucial que exista el cuello de botella?", "options": ["Para ahorrar RAM", "Porque si las capas ocultas fueran igual de grandes que la entrada, la red simplemente copiaría los datos pixel por pixel sin aprender ninguna regla o patrón comprimido", "Para que el código compile", "Por estética"], "correctAnswer": 1 },
      { "id": 4, "question": "En el contexto de Denoising Autoencoders, ¿qué datos le pasamos al modelo durante la función '.fit(X, Y)'?", "options": ["X = texto, Y = imágenes", "X = imagen limpia, Y = imagen ruidosa", "X = imagen artificialmente ruidosa, Y = la misma imagen limpia original", "X = ruido puro, Y = ruido puro"], "correctAnswer": 2 },
      { "id": 5, "question": "¿A qué algoritmo clásico de Machine Learning se suele comparar al Autoencoder por su capacidad de reducción de dimensionalidad?", "options": ["K-Nearest Neighbors", "PCA (Análisis de Componentes Principales)", "Árboles de Decisión", "SVM"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Cuál es una ventaja del Autoencoder sobre PCA?", "options": ["Que no usa matemáticas", "Que PCA solo puede encontrar relaciones lineales simples, mientras que las funciones de activación del Autoencoder le permiten aprender compresiones No-Lineales muy complejas", "Que PCA es más moderno", "No hay ninguna ventaja"], "correctAnswer": 1 },
      { "id": 7, "question": "¿El Autoencoder se considera Aprendizaje Supervisado o No Supervisado?", "options": ["Supervisado, porque hay un humano vigilando", "No supervisado (o auto-supervisado), porque no requiere etiquetas humanas externas; la propia imagen de entrada actúa como la etiqueta objetivo a predecir", "Aprendizaje por refuerzo", "Clasificación Binaria"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-17",
    "title": "4.17: Visión Avanzada - Detección de Objetos y Segmentación",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Diferenciar Clasificación, Detección de Objetos y Segmentación Semántica.</li><li>Conocer el revolucionario algoritmo YOLO (You Only Look Once).</li><li>Comprender cómo se manejan los 'Bounding Boxes' matemáticamente.</li></ul>",
    "content": `
      <h3>1. Más allá de la Clasificación</h3>
      <p>Hasta ahora, una CNN nos decía "Esta imagen es un perro". Pero en un coche autónomo, eso no basta. Necesitamos saber DÓNDE están los peatones, DÓNDE está el semáforo y CUÁNTOS hay. Así nacen tres niveles de visión:</p>
      <ul>
        <li><strong>Clasificación:</strong> Un solo objeto. (Ej. "Es un gato").</li>
        <li><strong>Detección de Objetos:</strong> Múltiples objetos, dibuja cajas delimitadoras (Bounding Boxes) alrededor de cada uno.</li>
        <li><strong>Segmentación Semántica/Instancia:</strong> Pinta exactamente los píxeles que pertenecen al objeto, delimitando su contorno perfecto en vez de una caja cuadrada.</li>
      </ul>

      <h3>2. YOLO (You Only Look Once)</h3>
      <p>Antes de 2015, los algoritmos de detección eran muy lentos; pasaban un pequeño cuadrado por toda la imagen cientos de veces. <strong>YOLO</strong> revolucionó la industria al convertir el problema en una regresión de un solo paso. La red mira la imagen completa "una sola vez", la divide en una cuadrícula (grid), y predice simultáneamente todas las cajas delimitadoras y probabilidades de clase para cada celda en fracciones de segundo, permitiendo visión en tiempo real (60+ FPS).</p>

      <h3>3. Bounding Boxes y el IoU</h3>
      <p>Para entrenar o evaluar una caja delimitadora, no basta con decir si está bien o mal. Usamos la métrica <strong>IoU (Intersection over Union)</strong>, que mide cuánto se superpone (interseca) el área de la caja predicha con el área de la caja real dibujada por el humano. Si el IoU es mayor a 0.5 o 0.7, consideramos que la IA detectó el objeto correctamente.</p>
    `,
    "practical": `
      <h3>Inferencia de Detección con Ultralytics (YOLOv8)</h3>
      <p>Hoy en día, implementar visión en tiempo real es extremadamente sencillo usando librerías pre-empaquetadas con modelos pre-entrenados en el dataset COCO.</p>
      <pre><code class="language-python"># pip install ultralytics opencv-python
from ultralytics import YOLO
import cv2

# 1. Cargar el modelo YOLO pre-entrenado más moderno
modelo_yolo = YOLO('yolov8n.pt') # 'n' significa Nano (muy rápido)

# 2. Pasar una imagen (o frame de video) al modelo
resultados = modelo_yolo.predict('calle_con_coches.jpg')

# 3. Iterar sobre los objetos encontrados en la imagen
for caja in resultados[0].boxes:
    clase_id = int(caja.cls[0])
    confianza = round(float(caja.conf[0]), 2)
    nombre_clase = modelo_yolo.names[clase_id]
    
    # Las coordenadas [x1, y1, x2, y2] de la caja
    coords = caja.xyxy[0].tolist()
    
    print(f"Detectado: {nombre_clase} (Confianza: {confianza}) en coords {coords}")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el algoritmo 'Non-Maximum Suppression' (NMS) utilizado en Detección de Objetos. Si YOLO detecta 5 cajas diferentes muy juntas, todas apuntando al mismo perro, ¿cómo ayuda el NMS a resolver este problema y entregar una sola caja final limpia?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es la diferencia entre Clasificación simple y Detección de Objetos?", "options": ["La clasificación es para texto y la detección para imágenes", "La Detección de Objetos no solo dice qué hay en la foto, sino que localiza DÓNDE están dibujando cajas delimitadoras (Bounding Boxes) alrededor de múltiples objetos", "No hay diferencia", "La clasificación dibuja cajas, la detección no"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué nivel de visión por computadora clasifica el objeto a nivel de píxel exacto, pintando su contorno perfecto en lugar de usar una caja cuadrada rígida?", "options": ["Clasificación Binaria", "Reducción de ruido", "Segmentación Semántica / de Instancia", "Gradient Descent"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Qué significan las siglas del revolucionario algoritmo YOLO?", "options": ["You Ought to Look Often", "You Only Look Once (Solo miras una vez)", "Yellow Object Locator Optimizator", "Your Omnipotent Local Observer"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Por qué YOLO es el estándar de facto en coches autónomos y cámaras de seguridad?", "options": ["Porque es muy lento y seguro", "Porque fue el primer algoritmo capaz de detectar objetos múltiples con alta precisión en 'Tiempo Real' (alta tasa de FPS) al procesar toda la imagen en una sola pasada de la red", "Porque lo hizo Tesla", "Porque no usa inteligencia artificial"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué métrica geométrica se usa para medir qué tan buena es una caja delimitadora predicha comparada con la caja real?", "options": ["El Teorema de Pitágoras", "Intersection over Union (IoU - Intersección sobre Unión)", "R-Cuadrado", "Accuracy de Píxel"], "correctAnswer": 1 },
      { "id": 6, "question": "En el resultado de YOLO, además de las coordenadas de la caja y el nombre de la clase, ¿qué otra variable crítica te entrega el modelo?", "options": ["El nombre de la persona en la foto", "El número de tarjeta de crédito", "El nivel de 'Confianza' (Confidence o Probabilidad) de que el objeto detectado realmente sea de esa clase", "La temperatura de la imagen"], "correctAnswer": 2 },
      { "id": 7, "question": "Si YOLO divide la imagen en una cuadrícula (grid) de 13x13, ¿quién es el responsable de predecir la caja de un coche en la imagen?", "options": ["El primer píxel de la imagen", "Toda la red a la vez", "La celda específica de la cuadrícula donde cae el centro (punto medio) exacto del coche", "El programador"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-18",
    "title": "4.18: Sistemas de Recomendación Profundos",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Diferenciar Filtros Colaborativos clásicos del enfoque de Deep Learning.</li><li>Entender cómo Netflix y YouTube retienen tu atención.</li><li>Aplicar capas de Embeddings para usuarios y productos.</li></ul>",
    "content": `
      <h3>1. El Problema de Recomendación</h3>
      <p>En el mundo moderno, el producto más valioso es la 'Atención'. Sistemas de recomendación (RecSys) impulsan a gigantes como Amazon, TikTok, Spotify y Netflix. El objetivo es predecir la calificación o el interés (ej. probabilidad de hacer clic o tiempo de visualización) que un Usuario 'U' tendrá sobre un Ítem 'I'.</p>

      <h3>2. Limitaciones del Filtro Colaborativo (Clásico)</h3>
      <p>El ML clásico usaba factorización de matrices de una tabla gigante de Usuarios vs Películas. Si a ti y a un extraño les gustan las mismas 5 películas de terror, el sistema te recomienda la 6ta película que el extraño vio. El problema es el <strong>Cold Start (Arranque Frío)</strong>: si entra un usuario nuevo hoy o se sube una película nueva hoy sin historial de vistas, la tabla matemática tiene ceros y el modelo se rompe.</p>

      <h3>3. Deep Recommender Systems (Arquitectura de Dos Torres)</h3>
      <p>El Deep Learning soluciona esto integrando datos de contenido. Una red neuronal procesa el perfil del usuario (edad, país, historial de clics) usando un Embedding. Otra sub-red (otra torre) procesa el ítem (ej. imagen en miniatura de YouTube mediante CNN, descripción de texto usando NLP). Ambas torres entregan vectores matemáticos densos al final. Si el vector del Usuario y el vector del Video apuntan en la misma dirección geométrica (alta similitud del coseno), YouTube te recomienda ese video.</p>
    `,
    "practical": `
      <h3>Concepto de Embeddings de Usuario en Keras</h3>
      <p>Las redes neuronales pueden aprender vectores (embeddings) de usuarios de la misma forma que aprenden de palabras.</p>
      <pre><code class="language-python">from tensorflow.keras.layers import Input, Embedding, Flatten, Dot
from tensorflow.keras.models import Model

# Supongamos 50,000 usuarios y 10,000 películas
entrada_usuario = Input(shape=(1,), name='user_id')
entrada_pelicula = Input(shape=(1,), name='movie_id')

# El sistema aprende un vector de 32 dimensiones ocultas (gustos) para cada usuario
vector_usuario = Embedding(50000, 32)(entrada_usuario)
vector_usuario = Flatten()(vector_usuario)

# El sistema aprende un vector de 32 dimensiones ocultas (géneros) para cada película
vector_pelicula = Embedding(10000, 32)(entrada_pelicula)
vector_pelicula = Flatten()(vector_pelicula)

# Producto Punto entre ambos vectores. 
# Si el vector del usuario coincide numéricamente con el de la película, la salida es alta
prediccion_calificacion = Dot(axes=1)([vector_usuario, vector_pelicula])

modelo_rec = Model(inputs=[entrada_usuario, entrada_pelicula], outputs=prediccion_calificacion)
modelo_rec.compile(optimizer='adam', loss='mse')
# Se entrena con: modelo.fit([usuarios, peliculas], calificaciones_reales_de_1_a_5)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el famoso algoritmo de recomendación 'DLRM' (Deep Learning Recommendation Model) impulsado por Meta/Facebook. ¿Por qué el manejo de datos categóricos dispersos es el mayor reto computacional de este algoritmo a escala industrial?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es el objetivo principal de un Sistema de Recomendación?", "options": ["Obligar al usuario a comprar productos caros", "Predecir la afinidad o interés de un usuario hacia un ítem específico para personalizar su experiencia y aumentar la retención", "Clasificar imágenes en el perfil del usuario", "Eliminar videos aburridos de la base de datos"], "correctAnswer": 1 },
      { "id": 2, "question": "¿En qué consiste el problema del 'Arranque Frío' (Cold Start) en recomendadores clásicos?", "options": ["Que los servidores de Netflix tardan en encenderse por la mañana", "Que el sistema no puede recomendar nada cuando entra un usuario totalmente nuevo o se publica un video nuevo sin historial de interacciones", "Que el modelo da error de temperatura", "Que se congela la base de datos de usuarios"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Cómo resuelve el Deep Learning el problema del Arranque Frío?", "options": ["Obligando al usuario a ver 10 películas al azar primero", "En lugar de depender solo del historial (ID), las redes profundas procesan las características reales del contenido (texto de la descripción, imagen miniatura, edad del usuario) para predecir si le gustará", "Subiendo la temperatura del procesador", "Borrando a los usuarios nuevos"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué es la 'Arquitectura de Dos Torres' (Two-Tower Model) muy común en YouTube/Pinterest?", "options": ["Una red neuronal que dibuja edificios", "Un modelo con una rama (torre) procesando los datos del usuario y otra procesando los datos del ítem; luego comparan matemáticamente ambos vectores resultantes", "Dos PCs corriendo en paralelo", "Un algoritmo de Ajedrez"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué concepto matemático de NLP vimos previamente que los Sistemas de Recomendación adaptan para 'entender' a los usuarios?", "options": ["Word Embeddings; crean 'User Embeddings' e 'Item Embeddings' para ubicarlos como puntos en un espacio multidimensional", "La suma de vectores", "Las matrices de identidad", "El logaritmo natural"], "correctAnswer": 0 },
      { "id": 6, "question": "En el código Keras de ejemplo, ¿qué operación matemática básica se usa para comparar el vector del usuario y el de la película y dar la calificación final?", "options": ["Resta", "División por cero", "Producto Punto (Dot Product). Mide qué tan alineados están los vectores", "Derivada Parcial"], "correctAnswer": 2 },
      { "id": 7, "question": "¿Por qué es peligroso éticamente un sistema de recomendación profundo en redes sociales (ej. TikTok o YouTube Shorts)?", "options": ["Porque ocupa mucha batería del celular", "Porque la IA optimiza ciegamente el 'Tiempo en Pantalla', empujando a los usuarios hacia contenido extremo, polarizado o conspirativo para retener su atención (Rabbit Hole)", "Porque puede borrar los videos", "Porque recomienda música que no te gusta"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-19",
    "title": "4.19: Generación Aumentada por Recuperación (RAG) y Vectores",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender la mayor limitación de ChatGPT y modelos LLM (Alucinaciones y datos privados).</li><li>Comprender el paradigma RAG (Retrieval-Augmented Generation).</li><li>Conocer qué es una Base de Datos Vectorial (Vector DB).</li></ul>",
    "content": `
      <h3>1. Las Alucinaciones de los LLMs</h3>
      <p>Los Grandes Modelos de Lenguaje (LLMs como GPT-4) tienen dos grandes problemas empresariales:<br>
      1. <strong>Falta de conocimiento privado:</strong> No conocen los documentos internos de tu empresa porque no fueron entrenados con ellos.<br>
      2. <strong>Alucinaciones:</strong> Si no saben la respuesta, su naturaleza matemática generativa hace que "inventen" una respuesta sonando muy seguros de sí mismos.</p>

      <h3>2. ¿Qué es RAG?</h3>
      <p><strong>Retrieval-Augmented Generation (Generación Aumentada por Recuperación)</strong> es la técnica número 1 en la industria actual para solucionar esto. El flujo es el siguiente:</p>
      <ul>
        <li>Cuando el usuario hace una pregunta, la IA <strong>NO</strong> responde de memoria.</li>
        <li>Primero, un algoritmo busca en tu base de datos de documentos privados el párrafo exacto que contiene la respuesta.</li>
        <li>Luego, la IA lee la pregunta DEL usuario JUNTO con el documento privado recuperado, y se le instruye: <em>"Responde a esta pregunta usando ÚNICAMENTE este documento. Si no está ahí, di que no lo sabes"</em>.</li>
      </ul>

      <h3>3. Bases de Datos Vectoriales (Vector DBs)</h3>
      <p>Para buscar documentos rápido, no usamos el buscador de Windows. Convertimos todos los PDF de la empresa en "Vectores Matemáticos" (Embeddings) usando una red neuronal, y los guardamos en una <strong>Vector DB</strong> (Pinecone, ChromaDB). Cuando el usuario pregunta "reglas de vacaciones", convertimos la pregunta a vector y buscamos los documentos más "cercanos" geométricamente en el espacio.</p>
    `,
    "practical": `
      <h3>Flujo RAG de 3 Pasos (Concepto)</h3>
      <p>Implementar RAG requiere orquestar la conversión de vectores y la llamada al modelo de texto final.</p>
      <pre><code class="language-python"># Pseudo-código de un sistema RAG moderno
import openai
from vector_database import ChromaDB

db = ChromaDB.load("mi_base_de_conocimiento")

pregunta = "¿Cuántos días de vacaciones tengo el primer año?"

# 1. RETRIEVAL (Recuperación)
# Busca los 3 párrafos del manual de empleados matemáticamente más similares a la pregunta
documentos_relevantes = db.similarity_search(pregunta, top_k=3)
contexto = "\\n".join(documentos_relevantes)

# 2. AUGMENTED GENERATION (Generación Aumentada)
# Creamos un prompt gigante que inyecta la verdad al modelo
prompt_final = f"""
Eres el bot de RRHH. Contesta la PREGUNTA usando SOLO el CONTEXTO proporcionado.
CONTEXTO: {contexto}
PREGUNTA: {pregunta}
"""

# 3. Respuesta Final del LLM
respuesta = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt_final}]
)
print(respuesta.choices[0].message.content)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Una queja común de los sistemas RAG es el problema del 'Lost in the Middle' (Perdido en el medio). Investiga qué significa esto cuando le pasas un contexto inmenso de 20 páginas a un LLM como GPT-4.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es el problema empresarial principal si usamos ChatGPT directamente para servicio al cliente sin ninguna técnica adicional?", "options": ["Que es muy rápido", "Que no conoce los manuales privados de la empresa y es muy propenso a 'alucinar' (inventar respuestas falsas con total seguridad)", "Que se borra automáticamente", "Que requiere hardware especial"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué significan las siglas RAG en IA moderna?", "options": ["Random Access Generator", "Retrieval-Augmented Generation (Generación Aumentada por Recuperación)", "Realtime AI Graphics", "Robot Automatic Guide"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Cuál es la premisa fundamental de la arquitectura RAG?", "options": ["Re-entrenar la red neuronal cada 5 minutos", "El modelo NO responde de memoria; primero busca documentos reales relevantes y luego genera una respuesta leyendo específicamente esos textos comprobados", "Borrar la memoria de la IA", "Darle al usuario un PDF"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué es una Base de Datos Vectorial (Vector DB)?", "options": ["Una tabla de Excel", "Una base de datos SQL tradicional", "Un sistema de almacenamiento diseñado específicamente para guardar y buscar rápidamente Embeddings matemáticos (vectores densos generados por IA)", "Una carpeta de imágenes"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Cómo encuentra el sistema RAG el documento correcto cuando haces una pregunta?", "options": ["Usa CTRL+F para buscar la palabra exacta", "Convierte la pregunta a un vector de Embedding y busca en la base de datos el documento cuyo vector tenga la mayor 'Similitud del Coseno' (cercanía geométrica / semántica) con la pregunta", "Pregunta a un humano en tiempo real", "Adivina al azar"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Por qué RAG elimina casi por completo las 'alucinaciones' del LLM?", "options": ["Porque apagamos el internet", "Porque en el Prompt le decimos al LLM que su única fuente de verdad es el documento recuperado que le estamos inyectando, prohibiéndole inventar", "Porque el LLM es actualizado", "No elimina las alucinaciones"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué ventaja brutal de costos tiene RAG frente al Fine-Tuning (Ajuste Fino)?", "options": ["Te pagan por usarlo", "El Fine-Tuning cuesta miles de dólares en computación para que el modelo 'aprenda' textos. RAG no entrena el modelo, solo lo usa como lector, costando unos centavos por consulta", "Gasta menos luz", "Usa discos magnéticos viejos"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-20",
    "title": "4.20: LangChain y Orquestación de Agentes de IA",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Descubrir cómo la IA pasa de 'Chatear' a 'Actuar'.</li><li>Entender la arquitectura de un Agente Inteligente.</li><li>Conocer frameworks de orquestación modernos como LangChain.</li></ul>",
    "content": `
      <h3>1. De Chatear a Actuar (Herramientas / Tool Use)</h3>
      <p>Un LLM solo escupe texto. Si le preguntas el clima, no puede salir a internet a buscarlo. Sin embargo, un <strong>Agente de IA</strong> es un LLM equipado con herramientas. El modelo razona: <em>"No sé el clima actual, pero tengo una herramienta llamada 'GoogleSearch'. Voy a escribir un código para invocar esa herramienta, leer su resultado, y luego le responderé al usuario."</em></p>

      <h3>2. LangChain: El pegamento de la IA</h3>
      <p>Construir estas tuberías complejas donde un LLM llama a bases de datos, luego a calculadoras, guarda memoria del chat y razona iterativamente requiere mucho código espagueti. <strong>LangChain</strong> nació en 2022 como un framework en Python/JS diseñado para encadenar (Chain) de forma modular modelos de lenguaje con herramientas externas y memorias complejas.</p>

      <h3>3. ReAct: Razonamiento y Acción</h3>
      <p>Los agentes más avanzados utilizan el patrón <em>ReAct (Reason + Act)</em>. Antes de tomar una decisión, la IA imprime su pensamiento. <br>
      <code>Pensamiento: Debo buscar en la base de datos la edad de Juan.</code><br>
      <code>Acción: BuscarBD("Juan Edad")</code><br>
      <code>Observación: Juan tiene 30.</code><br>
      <code>Pensamiento: Ahora debo multiplicarlo por 2 según el usuario.</code><br>
      <code>Acción: Calculadora(30 * 2)</code><br>
      <code>Observación: 60</code><br>
      <code>Respuesta Final: El resultado es 60.</code></p>
    `,
    "practical": `
      <h3>Invocación de una Herramienta (Concepto LangChain)</h3>
      <pre><code class="language-python"># Pseudo-código de orquestación de un Agente Autónomo
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
from utils import buscar_en_wikipedia, calculadora_math

llm = OpenAI(temperature=0)

# Definimos las "armas" del agente
herramientas = [
    Tool(name="Wikipedia", func=buscar_en_wikipedia, description="Útil para buscar datos históricos"),
    Tool(name="Calculadora", func=calculadora_math, description="Útil cuando necesitas hacer operaciones matemáticas complejas")
]

# Inicializamos el cerebro con sus herramientas
agente_react = initialize_agent(herramientas, llm, agent="zero-shot-react-description", verbose=True)

# Damos una tarea compleja. El agente decidirá SOLITO en qué orden usar las herramientas.
agente_react.run("Busca en qué año nació Albert Einstein y multiplícalo por 3.")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Los Agentes de IA son muy propensos a caer en 'Bucles Infinitos' (Loops). Piensa e investiga: ¿Qué técnicas implementan frameworks como LangChain para evitar que el agente gaste todo tu saldo de la API de OpenAI atascándose en un error recursivo llamando herramientas?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué diferencia crítica hay entre un simple Chatbot LLM y un 'Agente de IA'?", "options": ["El agente tiene voz", "El LLM solo predice texto basado en su entrenamiento; un Agente puede usar la lógica del LLM como cerebro para decidir usar 'Herramientas' (APIs, calculadoras, internet) para interactuar con el mundo", "El chatbot es gratis", "No hay diferencia alguna"], "correctAnswer": 1 },
      { "id": 2, "question": "Si a un LLM clásico sin herramientas le pides la fecha y hora exactas de hoy, ¿qué sucede?", "options": ["Te da la respuesta correcta", "Adivina o alucina, porque es una red neuronal congelada en el tiempo sin conexión al reloj del sistema", "Se apaga", "Descarga un calendario"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué famoso framework de código abierto facilita enormemente la conexión de LLMs con bases de datos, memorias y herramientas externas en tuberías lógicas?", "options": ["TensorFlow", "ReactJS", "LangChain", "Matplotlib"], "correctAnswer": 2 },
      { "id": 4, "question": "¿Qué es el paradigma 'ReAct' en Agentes de IA?", "options": ["Reaccionar de forma exagerada", "Una técnica de prompting donde obligamos a la IA a escribir iterativamente su 'Pensamiento', luego tomar una 'Acción' con una herramienta, leer la 'Observación', y volver a pensar hasta resolver el problema", "El framework de JavaScript creado por Facebook", "Reiniciar Actividades"], "correctAnswer": 1 },
      { "id": 5, "question": "En el código de ejemplo, el agente tiene la herramienta 'Wikipedia' y 'Calculadora'. ¿Quién decide qué herramienta usar primero?", "options": ["El programador lo pone en un IF manual", "El propio Agente (el LLM razona el texto de la tarea y decide autónomamente invocar primero Wikipedia para obtener el año, y luego la Calculadora)", "El usuario interactúa", "Usa ambas al mismo tiempo"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Por qué es importante darle una buena 'Description' en texto a cada Tool (Herramienta) en la orquestación?", "options": ["Por estética del código", "Para hacer documentación automática", "Porque el LLM lee esas descripciones para comprender matemáticamente para qué sirve esa herramienta y decidir en qué momento es útil llamarla", "Para cumplir normativas legales"], "correctAnswer": 2 },
      { "id": 7, "question": "El desarrollo de agentes que escriben y ejecutan código por sí mismos se acerca rápidamente al concepto definitivo de Inteligencia Artificial llamado:", "options": ["I.A. Débil", "AGI (Inteligencia Artificial General)", "Hardware Inteligente", "Machine Learning Clásico"], "correctAnswer": 1 }
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
console.log('Successfully created/updated sessions 4.16 to 4.20');
