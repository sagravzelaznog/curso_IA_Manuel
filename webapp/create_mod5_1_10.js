import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "5-1",
    "title": "5.1: Proyecto 1 - Visión Computacional (Setup y Datos)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Iniciar el Proyecto 1: Un clasificador de enfermedades en hojas de plantas.</li><li>Aprender a buscar y descargar datasets de Kaggle.</li><li>Configurar el entorno de trabajo inicial en la nube (Google Colab).</li></ul>",
    "content": `
      <h3>1. Presentación del Proyecto 1</h3>
      <p>A lo largo de las sesiones 5.1 a la 5.5, construiremos un proyecto End-to-End: <strong>Un Doctor de Plantas (Plant Disease Classifier)</strong>. El objetivo es entrenar una Red Neuronal Convolucional (CNN) que analice la foto de una hoja y determine si la planta está sana o tiene alguna plaga (ej. roya, moho). Este es un caso de uso real en la industria de la tecnología agrícola (AgriTech).</p>

      <h3>2. Obtención de Datos (Kaggle)</h3>
      <p>El primer paso de cualquier proyecto de IA es conseguir datos. <strong>Kaggle</strong> es la plataforma de Google para competiciones de Data Science. Aloja miles de datasets públicos. Para nuestro proyecto, utilizaremos el famoso dataset <em>"PlantVillage"</em>, que contiene más de 50,000 imágenes de hojas categorizadas en 38 clases diferentes (sanas y enfermas).</p>

      <h3>3. Configuración del Entorno (Google Colab)</h3>
      <p>Entrenar una red para miles de imágenes freiría el procesador de una computadora portátil normal. Usaremos <strong>Google Colab</strong>, un entorno de cuadernos Jupyter gratuito en la nube que nos regala acceso a una GPU T4 de NVIDIA durante algunas horas. Solo necesitas una cuenta de Google y acceso a internet.</p>
    `,
    "practical": `
      <h3>Descargando Datasets de Kaggle vía API en Python</h3>
      <p>En lugar de hacer clic en "Descargar" y saturar tu disco duro, podemos ordenar a Colab que descargue los datos directamente a su servidor usando la API oficial de Kaggle.</p>
      <pre><code class="language-python"># Código para correr en Google Colab
!pip install kaggle

import os

# Debes subir tu archivo personal kaggle.json con tus credenciales
# Esto configura la API de Kaggle en la máquina virtual
os.environ['KAGGLE_CONFIG_DIR'] = "/content/"

# Comando mágico para descargar el dataset directamente al servidor de Colab
!kaggle datasets download -d abdallahalboy/plantvillage-dataset

# Descomprimir el archivo gigantesco zip silenciosamente (-q)
!unzip -q plantvillage-dataset.zip -d dataset/

print("¡Dataset descargado y descomprimido exitosamente!")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Crea una cuenta gratuita en Kaggle (si no la tienes), ve a los ajustes de tu perfil y genera un 'New API Token'. Esto descargará un archivo llamado <code>kaggle.json</code>. Intenta subir este archivo a un cuaderno de Google Colab y ejecuta el comando de descarga mostrado en la lección.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿De qué trata el Proyecto 1 que construiremos en las sesiones 5.1 a 5.5?", "options": ["Un bot de Twitter", "Un sistema de Visión Computacional (CNN) para detectar enfermedades en las hojas de las plantas", "Un videojuego de granjas", "Un recomendador de fertilizantes basado en texto"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es Kaggle en el mundo del Data Science?", "options": ["Un lenguaje de programación", "Una plataforma (propiedad de Google) que aloja miles de conjuntos de datos (datasets) públicos y organiza competiciones de Machine Learning", "Un framework para hacer APIs", "Una base de datos SQL en tiempo real"], "correctAnswer": 1 },
      { "id": 3, "question": "En el proyecto, usaremos el dataset 'PlantVillage'. ¿Qué tipo de datos contiene?", "options": ["Textos sobre agricultura", "Precios de vegetales en el mercado", "Más de 50,000 imágenes etiquetadas de hojas de plantas, tanto sanas como enfermas", "Coordenadas GPS de granjas"], "correctAnswer": 2 },
      { "id": 4, "question": "¿Qué herramienta online gratuita usaremos para evitar quemar o saturar nuestra computadora local durante el entrenamiento?", "options": ["Facebook", "Google Colab", "Microsoft Excel", "Photoshop"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué recurso fundamental, muy caro de comprar físicamente, te presta Google Colab gratuitamente por unas horas?", "options": ["Monitor 4K", "Licencia de Windows", "GPU (Tarjeta Gráfica como la NVIDIA T4) para acelerar el cálculo matricial", "Un ingeniero que programa por ti"], "correctAnswer": 2 },
      { "id": 6, "question": "En el código práctico, ¿para qué sirve el archivo 'kaggle.json'?", "options": ["Es la foto de una planta", "Son tus credenciales personales (Token) que le dan permiso al código Python para conectarse a los servidores de Kaggle y descargar archivos en tu nombre", "Es el modelo de Inteligencia Artificial", "Es un virus inofensivo"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Por qué es mejor descargar el dataset mediante la API de Kaggle directamente en Colab en lugar de descargarlo manualmente a tu PC y luego subirlo a Colab?", "options": ["Porque es más bonito", "Porque 50,000 imágenes (varios Gigabytes) tardarían horas en subir desde tu conexión de internet a casa; la API de Kaggle envía los datos de un servidor de Google a otro servidor de Google en segundos", "Porque la PC no tiene espacio", "No hay diferencia"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-2",
    "title": "5.2: Proyecto 1 - Data Augmentation y Generators",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Aplicar técnicas de aumento de datos para prevenir el sobreajuste.</li><li>Comprender el uso de Data Generators de Keras.</li><li>Preparar los lotes (Batches) de imágenes para alimentar a la red.</li></ul>",
    "content": `
      <h3>1. El Problema de las Imágenes Reales</h3>
      <p>El dataset <em>PlantVillage</em> tiene imágenes muy perfectas: hojas centradas y con un fondo liso. Si entrenamos a la red solo con eso, cuando un campesino tome una foto chueca, con zoom, o rotada, el modelo se confundirá y fallará (Overfitting al entorno de laboratorio).</p>
      
      <h3>2. Data Augmentation a la Medida</h3>
      <p>Para solucionar esto, usaremos <strong>Data Augmentation</strong>. Durante el entrenamiento, rotaremos las hojas aleatoriamente (ej. 20 grados), haremos zoom in/out, y voltearemos la imagen horizontal y verticalmente. Para una hoja, no importa si está de cabeza o de lado, sigue siendo una hoja con una mancha de enfermedad. Esto fuerza a la red a enfocarse en la "mancha" y no en la posición de la hoja.</p>

      <h3>3. Los Generators de Keras</h3>
      <p>No podemos cargar 50,000 imágenes a la RAM al mismo tiempo, el entorno colapsaría. Keras incluye herramientas como <code>ImageDataGenerator</code> (o las más modernas APIs de <code>tf.data</code>). Estas herramientas actúan como una "tubería": leen 32 imágenes del disco duro, les aplican las rotaciones al azar, se las dan a la GPU para entrenar, y luego las borran de la RAM para cargar las siguientes 32. Esto es eficiencia pura.</p>
    `,
    "practical": `
      <h3>Creando la Tubería de Datos (Pipeline)</h3>
      <pre><code class="language-python">from tensorflow.keras.preprocessing.image import ImageDataGenerator

# 1. Definimos las transformaciones aleatorias (solo para Entrenamiento)
train_datagen = ImageDataGenerator(
    rescale=1./255,           # Vital: normalizar píxeles de 0-255 a 0-1
    rotation_range=20,        # Rota hasta 20 grados al azar
    width_shift_range=0.1,    # Desplaza horizontalmente
    height_shift_range=0.1,   # Desplaza verticalmente
    zoom_range=0.15,          # Zoom aleatorio de 15%
    horizontal_flip=True,     # Espejo horizontal
    vertical_flip=True,       # Espejo vertical (válido en plantas)
    validation_split=0.2      # Reservamos 20% para validar
)

# 2. Conectamos el generador a nuestra carpeta de disco duro (Train)
train_generator = train_datagen.flow_from_directory(
    'dataset/plantvillage/',
    target_size=(224, 224),   # Redimensionamos todas a 224x224
    batch_size=32,
    class_mode='categorical', # Clasificación de múltiples clases
    subset='training'         # Usa el 80%
)

# 3. Generador de Validación (¡NO se le aplica Data Augmentation, solo Rescale!)
val_generator = train_datagen.flow_from_directory(
    'dataset/plantvillage/',
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical',
    subset='validation'       # Usa el 20% restante
)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Observa que en el generador de Validación (el que simula el mundo real para calificar al modelo), <strong>no aplicamos rotaciones ni zoom</strong>. ¿Por qué es un error grave metodológico aplicar Data Augmentation al conjunto de Prueba o Validación?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué las imágenes perfectas de laboratorio (centradas, fondo limpio) son un peligro para el modelo final?", "options": ["Porque pesan mucho", "Porque el modelo memoriza ese entorno perfecto (Overfitting) y fallará en la vida real cuando el usuario tome fotos ruidosas, torcidas o mal centradas", "Porque los laboratorios son caros", "Porque a la GPU no le gustan los fondos limpios"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué logramos con el Data Augmentation en este proyecto de plantas?", "options": ["Mejorar los colores", "Forzar a la red neuronal a detectar la enfermedad (las manchas) sin importar la rotación, tamaño o posición de la hoja, mejorando enormemente su capacidad de Generalización", "Borrar fotos de hojas", "Traducir texto a plantas"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Por qué es válido usar 'vertical_flip=True' (espejo vertical) en fotos de hojas, pero sería catastrófico usarlo en un proyecto de leer señales de tránsito o reconocer rostros?", "options": ["Porque los rostros no tienen color", "Porque una hoja de cabeza sigue siendo la misma hoja, pero una señal de 'Pare' de cabeza o un rostro invertido rompe la lógica física y anatómica del problema original", "Porque Keras no permite voltear humanos", "No es catastrófico, da igual"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué problema resuelve la técnica de los 'Generators' (como ImageDataGenerator) que leen la carpeta desde el disco?", "options": ["El problema del internet lento", "El límite estricto de la memoria RAM. En lugar de colapsar la PC cargando 50,000 fotos de golpe, el generador carga pequeños lotes (ej. 32 fotos) a medida que la red los necesita", "Que las carpetas se borran solas", "Permite imprimir fotos"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué hace el hiperparámetro crítico `rescale=1./255`?", "options": ["Borra 255 imágenes", "Redimensiona la imagen a 255 píxeles", "Normaliza los valores matemáticos de los píxeles, pasando de números gigantes (0 a 255) a decimales pequeños (0.0 a 1.0) para que la red matemática no explote y aprenda más rápido", "Carga el modelo en memoria"], "correctAnswer": 2 },
      { "id": 6, "question": "En el código, definimos un `validation_split=0.2`. ¿Qué significa esto en la práctica?", "options": ["Que la imagen se corta en pedazos del 20%", "Que Keras tomará automáticamente el 20% de las imágenes de nuestras carpetas, las esconderá durante el entrenamiento y las usará SOLO como un examen sorpresa para medir la inteligencia real del modelo", "Que el modelo fallará el 20% del tiempo", "Que acelera la GPU 20%"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Por qué el conjunto de Validación JAMÁS debe sufrir Data Augmentation (zoom loco, rotaciones)?", "options": ["Porque gasta electricidad", "Porque el conjunto de validación debe representar cómo llegarán los datos en el mundo real (fotos normales del usuario). Si lo alteramos, nuestra métrica de evaluación final estará corrompida y será engañosa.", "Porque da error de compilación", "Porque Python se traba"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-3",
    "title": "5.3: Proyecto 1 - Construcción del Modelo (Transfer Learning)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Seleccionar una arquitectura base moderna y eficiente (MobileNetV2).</li><li>Congelar los pesos pre-entrenados en ImageNet.</li><li>Construir el 'Top' personalizado de la red (clasificador multiclase).</li></ul>",
    "content": `
      <h3>1. No reinventes la rueda</h3>
      <p>Crear nuestra propia red convolucional de 5 capas serviría, pero su precisión probablemente no pasaría del 70-80% en imágenes naturales complejas. Vamos a usar <strong>Transfer Learning</strong>. Tomaremos los "ojos" de una red diseñada por los mejores ingenieros de Google, que ya ha visto millones de fotos y sabe perfectamente cómo distinguir líneas, curvas, colores y texturas.</p>
      
      <h3>2. Elección de la Arquitectura: MobileNetV2</h3>
      <p>Existen modelos enormes como ResNet152 o VGG19. Sin embargo, si nuestro objetivo a futuro es que el campesino use este modelo en su teléfono celular sin internet, necesitamos un modelo ligero. <strong>MobileNetV2</strong> es una red convolucional increíblemente optimizada para correr en procesadores de dispositivos móviles (Edge Computing) manteniendo una precisión altísima.</p>

      <h3>3. La Cirugía de la Red (El 'Top')</h3>
      <p>MobileNetV2 fue entrenada (en el dataset ImageNet) para clasificar 1000 objetos: perros, coches, tazas, etc. A nosotros no nos interesa eso, nos interesan las enfermedades de plantas. Así que, al cargar el modelo, le "cortamos la cabeza" original (las capas finales). En su lugar, pegamos una nueva capa Densa nuestra que tenga exactamente el mismo número de neuronas de salida que clases de enfermedades tenemos en nuestro dataset (ej. 38 clases).</p>
    `,
    "practical": `
      <h3>Ensamblando el Modelo Keras</h3>
      <pre><code class="language-python">from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout

# 1. Cargamos el modelo Base, SIN la capa final de ImageNet (include_top=False)
base_model = MobileNetV2(weights='imagenet', 
                         include_top=False, 
                         input_shape=(224, 224, 3))

# 2. Congelamos los pesos de MobileNet para que no se arruinen al inicio
base_model.trainable = False

# 3. Ensamblamos nuestra propia red
model = Sequential([
    base_model,                               # El bloque de "Ojos" pre-entrenado
    GlobalAveragePooling2D(),                 # Aplana la salida 2D a un vector 1D
    Dense(128, activation='relu'),            # Capa oculta propia para razonar
    Dropout(0.5),                             # Dropout del 50% para evitar Overfitting local
    Dense(38, activation='softmax')           # 38 enfermedades posibles (Salida final)
])

# 4. Compilar el modelo
# categorical_crossentropy porque tenemos 38 clases distintas exclusivas
model.compile(optimizer='adam', 
              loss='categorical_crossentropy', 
              metrics=['accuracy'])

model.summary()
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Al imprimir <code>model.summary()</code>, notarás que dice 'Total params: 2,X' pero 'Trainable params: Y' es un número muchísimo menor. ¿Por qué el número de parámetros entrenables es una fracción minúscula del total en esta etapa?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué es preferible usar Transfer Learning en lugar de crear una CNN desde cero con 5 capas propias?", "options": ["Porque se ve más profesional", "Porque los modelos pre-entrenados por gigantes tecnológicos (Google, Meta) ya invirtieron meses de supercomputadoras para aprender matemáticamente la física visual perfecta (bordes, luz, contraste) que nos sirve de base", "Porque el código es más corto", "Porque es gratis"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Por qué elegimos la arquitectura 'MobileNetV2' en lugar de la gigantesca 'ResNet152' para este proyecto agrícola?", "options": ["Porque tiene un nombre genial", "Porque queremos que a futuro el modelo se ejecute en el teléfono celular (Edge AI) del agricultor sin requerir internet, y MobileNet está diseñada específicamente para ser ligera y rápida en móviles", "Porque no funciona en PCs", "Porque ResNet fue borrada"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué logramos con el comando `include_top=False` al descargar MobileNetV2?", "options": ["Borramos el modelo entero", "Evitamos descargar las capas inferiores", "Le 'cortamos la cabeza'; le pedimos que NO descargue la capa Densa final original (que clasifica perros/coches) porque vamos a ponerle la nuestra para clasificar plantas", "Apagamos el internet"], "correctAnswer": 2 },
      { "id": 4, "question": "¿Para qué sirve el comando `base_model.trainable = False`?", "options": ["Para pausar el programa", "Para 'congelar' los millones de pesos originales del modelo de Google. Así, el optimizador no alterará su conocimiento básico de visión durante el entrenamiento, ahorrando muchísimo tiempo y evitando destruir la red", "Para borrar la memoria", "Para apagar la GPU"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué hace la capa `GlobalAveragePooling2D()` en nuestra red ensamblada?", "options": ["Mejora la resolución a 4K", "Toma los gruesos cubos 3D matemáticos que entrega MobileNet y los aplana promediándolos en un simple vector matemático 1D de números, permitiendo conectarlo a la capa Densa final", "Promedia los colores de la foto", "Elimina el ruido de la imagen"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Por qué la capa final es `Dense(38, activation='softmax')`?", "options": ["Porque el número 38 da suerte", "Porque nuestro problema tiene 38 clases (tipos de enfermedades de plantas) distintas. 'Softmax' convierte la salida bruta en una distribución de probabilidades perfecta del 0 al 100% para esas 38 clases", "Para calcular 38 años", "Porque es el máximo permitido"], "correctAnswer": 1 },
      { "id": 7, "question": "En `model.compile`, ¿por qué usamos `categorical_crossentropy` en lugar de `binary_crossentropy`?", "options": ["Porque nos gustan las categorías", "Porque 'binary' es exclusivo para problemas donde solo hay 2 opciones (ej. Gato o Perro). Si tenemos 38 clases múltiples, obligatoriamente usamos 'categorical'", "Porque es más rápido de escribir", "Porque el framework lo exige siempre"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-4",
    "title": "5.4: Proyecto 1 - Entrenamiento, Callbacks y Early Stopping",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Entender qué son los Callbacks en Keras y por qué salvan proyectos.</li><li>Implementar EarlyStopping para detener el sobreajuste automáticamente.</li><li>Implementar ModelCheckpoint para guardar siempre los mejores pesos.</li><li>Iniciar el proceso iterativo de `.fit()`.</li></ul>",
    "content": `
      <h3>1. Entrenar a ciegas es un peligro</h3>
      <p>Imagina que le dices a tu red: "Entrena durante 50 épocas" y te vas a dormir. A la época 15, el modelo alcanza un 95% de precisión (su punto perfecto). Pero la red continúa entrenando hasta la época 50. Como la forzaste a seguir viendo los mismos datos una y otra vez, sufre un <strong>Overfitting severo</strong>, memoriza el entrenamiento y su precisión real cae al 80%. Has perdido horas de trabajo y electricidad.</p>
      
      <h3>2. Los Ángeles Guardianes: Callbacks</h3>
      <p>Keras nos ofrece los <strong>Callbacks</strong> (Llamadas de retorno). Son pequeños programas vigías que se ejecutan automáticamente al final de cada época (Epoch) y toman decisiones drásticas si es necesario.</p>
      <ul>
        <li><strong>EarlyStopping (Parada Temprana):</strong> Vigila la curva de error (Loss) del conjunto de validación. Si el error deja de mejorar durante 'X' épocas seguidas (Paciencia), aborta el entrenamiento inmediatamente.</li>
        <li><strong>ModelCheckpoint:</strong> No confía en la última época. Si en la época 15 el modelo fue asombroso, guarda ese archivo \`.h5\`. Si la época 16 es peor, no lo sobrescribe. Así, siempre te quedas con la "mejor versión de la historia" de tu modelo.</li>
        <li><strong>ReduceLROnPlateau:</strong> Si el modelo se estanca, reduce matemáticamente la "Tasa de Aprendizaje" (Learning Rate) para dar pasos más pequeñitos y finos y lograr encajar en el mínimo global.</li>
      </ul>
    `,
    "practical": `
      <h3>Ejecutando el Entrenamiento Protegido</h3>
      <pre><code class="language-python">from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

# 1. Definimos el Callback de Parada Temprana
parada_temprana = EarlyStopping(
    monitor='val_loss',     # Vigilamos el error en datos de validación
    patience=5,             # Si no mejora en 5 épocas seguidas, MATAMOS el entrenamiento
    restore_best_weights=True # Mágicamente nos devuelve a los pesos de la mejor época
)

# 2. Definimos el Guardado del Mejor Modelo
guardar_mejor = ModelCheckpoint(
    filepath='mejor_modelo_plantas.h5',
    monitor='val_accuracy', # Vigilamos la precisión
    save_best_only=True,    # Solo sobrescribe si es un récord histórico
    mode='max'              # Queremos maximizar la precisión
)

lista_callbacks = [parada_temprana, guardar_mejor]

# 3. ¡A ENTRENAR! (La magia ocurre aquí)
print("Iniciando entrenamiento del Doctor de Plantas...")
historial = model.fit(
    train_generator,
    epochs=50,                  # Le ponemos 50, pero el EarlyStopping lo cortará antes seguro
    validation_data=val_generator,
    callbacks=lista_callbacks   # Inyectamos nuestros vigías
)
print("¡Entrenamiento finalizado con éxito!")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Revisa la variable <code>patience=5</code> en el código. ¿Qué pasaría estadísticamente si pones un <code>patience=0</code>? ¿Por qué esto último casi siempre es una terrible idea durante el entrenamiento de redes profundas (PISTA: ruido y mínimos locales)?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué gran riesgo asumes si entrenas un modelo durante muchísimas épocas (ej. 100) sin vigilancia alguna?", "options": ["Que la PC mejore", "Que el modelo alcance su pico de inteligencia rápido, pero al seguir forzándolo a entrenar empiece a memorizar los datos (Overfitting brutal) y destruya su propia capacidad de generalizar", "Que el código se borre", "No hay ningún riesgo"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es conceptualmente un 'Callback' en TensorFlow/Keras?", "options": ["Un código de error", "Una función de Python que retrocede el tiempo", "Un bloque de código (vigía) que el framework invoca automáticamente al finalizar cada época para revisar métricas y tomar acciones, como guardar pesos o abortar", "Una llamada por teléfono"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Qué hace exactamente el callback 'EarlyStopping'?", "options": ["Inicia el programa rápido", "Revisa la métrica seleccionada (ej. el error de validación) y si detecta que el modelo ya no está mejorando después de cierto límite de paciencia, aborta y finaliza el entrenamiento", "Pausa la PC", "Borra el modelo viejo"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Por qué siempre vigilamos la métrica 'val_loss' (Pérdida en Validación) y no 'loss' (Pérdida en Entrenamiento) para decidir detenernos?", "options": ["Porque la validación es más lenta", "Porque el error en entrenamiento SIEMPRE bajará matemáticamente (memorización). La verdadera prueba de inteligencia artificial es si está mejorando frente a datos de validación (datos que nunca antes había visto)", "Porque suenan igual", "Porque 'loss' falla siempre"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué parámetro de EarlyStopping evita que te quedes con la versión final 'arruinada' del modelo?", "options": ["patience=5", "monitor='val_loss'", "restore_best_weights=True (Al abortar, retrocede el reloj y carga automáticamente a la memoria RAM los pesos exactos que lograron el mejor desempeño histórico)", "mode='min'"], "correctAnswer": 2 },
      { "id": 6, "question": "Imagina que en la época 8 la precisión es 90%, en la 9 es 88%, y en la 10 es 91%. ¿Qué hace el 'ModelCheckpoint' con 'save_best_only=True'?", "options": ["Guarda tres archivos diferentes", "En la 8 crea el archivo. En la 9 lo ignora. En la 10 lo sobrescribe, asegurando que el archivo .h5 en tu disco duro SIEMPRE sea el récord máximo absoluto", "Borra el archivo", "Cierra el programa"], "correctAnswer": 1 },
      { "id": 7, "question": "En el `.fit()`, si pusimos `epochs=50`, pero el modelo dejó de mejorar en la época 15 y tenemos `patience=5`. ¿En qué época se cortará todo?", "options": ["En la 50, ignorará la orden", "En la 5", "Aproximadamente en la época 20 (esperó 5 épocas extra desde la 15 a ver si mejoraba y abortó)", "En la época 15 exacta"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "5-5",
    "title": "5.5: Proyecto 1 - Evaluación, Gráficos y Exportación",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Aprender a interpretar las curvas de Aprendizaje (Loss y Accuracy).</li><li>Generar una Matriz de Confusión para encontrar el 'Talón de Aquiles' del modelo.</li><li>Exportar el modelo pulido a un formato listo para Producción (TensorFlow.js).</li></ul>",
    "content": `
      <h3>1. Las Curvas de Aprendizaje</h3>
      <p>Al final del \`.fit()\`, Keras devuelve un objeto "Historial". Trazar esto en un gráfico de líneas (Épocas vs Precisión) es el equivalente a la radiografía de tu modelo. Si la línea azul (Entrenamiento) sube al 99% pero la naranja (Validación) se queda plana en el 70%, es la confirmación visual e irrefutable de que sufriste Overfitting.</p>
      
      <h3>2. La Matriz de Confusión</h3>
      <p>Decir "Mi modelo tiene 92% de precisión general" no es suficiente profesionalmente. ¿Qué pasa si ese 8% de error es que confunde hojas sanas con 'Moho mortal'? Una <strong>Matriz de Confusión</strong> nos permite ver exactamente en qué clases se equivoca el modelo. Tal vez el modelo es un genio detectando 'Roya' (100%), pero es pésimo distinguiendo entre 'Mancha bacteriana' y 'Quemadura solar'. Eso nos da pistas para ir al dataset y conseguir mejores fotos de esas manchas específicas.</p>

      <h3>3. Del Laboratorio a la Realidad (Exportación)</h3>
      <p>Nuestro \`mejor_modelo.h5\` es excelente, pero pesa bastante. Para el gran final del proyecto, usaremos la herramienta de línea de comandos de TensorFlow.js Converter para transformar matemáticamente los pesos de Python en archivos \`.bin\` ultraligeros que una aplicación web en el celular de un granjero pueda leer instantáneamente por internet.</p>
    `,
    "practical": `
      <h3>Graficando el Éxito y Exportando para la Web</h3>
      <pre><code class="language-python">import matplotlib.pyplot as plt

# 1. Dibujar la historia del aprendizaje
# 'historial' es la variable que guardó el resultado del model.fit()
plt.plot(historial.history['accuracy'], label='Precisión Entrenamiento')
plt.plot(historial.history['val_accuracy'], label='Precisión Validación')
plt.title('Radiografía del Entrenamiento')
plt.xlabel('Época')
plt.ylabel('Precisión (Accuracy)')
plt.legend()
plt.show()

# 2. Convertir el modelo a TensorFlow.js para la web
# Instalar el conversor en la terminal: pip install tensorflowjs
import tensorflowjs as tfjs

# Guardamos el modelo en formato universal de SavedModel primero
model.save("modelo_plantas_guardado")

# Comando mágico de consola para convertirlo al formato Web de TFJS
!tensorflowjs_converter --input_format=keras \
                       mejor_modelo_plantas.h5 \
                       /content/modelo_web_tfjs

print("¡Modelo convertido! La carpeta 'modelo_web_tfjs' contiene los archivos model.json y los .bin")
print("Ahora cualquier programador web (Frontend) puede usar tu IA con JavaScript.")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga la librería <code>seaborn</code> en Python y su función <code>heatmap</code>. Describe cómo escribirías unas breves líneas de código usando la librería <code>sklearn.metrics.confusion_matrix</code> junto con seaborn para pintar una matriz de confusión colorida que muestre en qué enfermedades se confunde más tu red neuronal.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Para qué guardamos y graficamos el objeto 'Historial' devuelto por el `.fit()`?", "options": ["Para que el modelo se vea más profesional frente a los jefes", "Para diagnosticar visualmente la salud del modelo: ver cómo las curvas de entrenamiento y validación evolucionan juntas y detectar gráficamente si hubo Overfitting o Underfitting", "Para imprimir el código fuente", "No sirve para nada"], "correctAnswer": 1 },
      { "id": 2, "question": "Ves tu gráfico final. La curva de Entrenamiento llega al 98%, pero la curva de Validación jamás supera el 60%. ¿Cuál es tu diagnóstico irrefutable como ingeniero?", "options": ["El modelo es perfecto", "El modelo sufrió de Underfitting profundo", "El modelo sufrió de un Overfitting brutal; memorizó los datos de entrenamiento pero es incapaz de usar lógica en el mundo real", "El modelo necesita más capas"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Por qué la métrica 'Precisión General' (Accuracy) puede ocultar fallas graves en un problema multiclase de 38 enfermedades?", "options": ["Porque los porcentajes son difíciles", "Porque puede tener 95% general acertando enfermedades fáciles, pero fallar catastróficamente (0%) en detectar la única enfermedad mortal que mata cosechas rápidamente, lo cual no se nota en el promedio general", "Porque Python redondea mal los decimales", "La accuracy nunca oculta información"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué herramienta analítica te revela EXACTAMENTE en qué enfermedades específicas se está confundiendo tu modelo entre sí?", "options": ["El Gradient Descent", "El Logaritmo Natural", "La Matriz de Confusión (Confusion Matrix)", "El Optimizer Adam"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Qué problema resuelve la conversión del modelo usando 'tensorflowjs_converter'?", "options": ["Mejora la precisión del modelo un 10%", "Convierte un archivo denso de Python (.h5) en un formato modular de archivos .json y binarios (.bin) altamente comprimidos, que un navegador web como Chrome puede descargar e interpretar velozmente usando JavaScript", "Borra el modelo viejo", "Cambia el lenguaje de la red a C++"], "correctAnswer": 1 },
      { "id": 6, "question": "¿A quién le entregarías la carpeta generada 'modelo_web_tfjs' en una empresa real?", "options": ["Al departamento legal", "Al desarrollador Frontend / Web, quien sin saber nada de matemáticas de IA, podrá inyectar tu modelo en la App web para que el granjero suba su foto", "A recursos humanos", "A la papelera de reciclaje"], "correctAnswer": 1 },
      { "id": 7, "question": "Al finalizar este Proyecto 1 completo, has tocado datos, entrenamiento, métricas de validación, y exportación. ¿Cómo se le llama en la industria a este flujo completo de principio a fin?", "options": ["Machine Learning Teórico", "Pipeline de Desarrollo Front-End", "Pipeline End-to-End de Inteligencia Artificial", "Programación Orientada a Objetos"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "5-6",
    "title": "5.6: Proyecto 2 - Chatbot LLM (Fundamentos y APIs)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Iniciar el Proyecto 2: Chatbot Inteligente Corporativo.</li><li>Entender la dicotomía: APIs Privadas (OpenAI) vs Modelos Open Source (Llama).</li><li>Realizar la primera conexión mediante la API de OpenAI en Python.</li></ul>",
    "content": `
      <h3>1. Presentación del Proyecto 2</h3>
      <p>A lo largo de las sesiones 5.6 a la 5.10 construiremos un <strong>Agente Conversacional Avanzado</strong>. No será un simple loro que repite datos de internet. Será un bot capaz de mantener memoria del chat, leer PDFs corporativos (RAG), razonar qué herramienta usar, y desplegarse en una interfaz web funcional.</p>
      
      <h3>2. El Dilema del Motor: Cloud vs Local</h3>
      <p>Para el "Cerebro" de tu chatbot tienes dos grandes caminos en el mercado actual:</p>
      <ul>
        <li><strong>Modelos por API (Ej. GPT-4 de OpenAI, Claude de Anthropic):</strong> Son los más inteligentes del planeta. No requieren que compres GPUs de $10,000 dólares. Solo haces una petición web y pagas fracciones de centavo por cada palabra. Desventaja: Los datos de tu empresa viajan a los servidores de terceros (riesgo de privacidad corporativa).</li>
        <li><strong>Modelos Open Source (Ej. LLaMA 3 de Meta, Mistral):</strong> Modelos gratuitos que puedes descargar. Garantizan privacidad 100% porque corren en tus propios servidores locales. Desventaja: Requieres rentar o comprar hardware potentísimo (GPUs) para correrlos en tiempo real sin lag.</li>
      </ul>

      <h3>3. Tokens: La Moneda de la IA</h3>
      <p>Un concepto fundamental es el <em>Token</em>. Los LLM no leen letras o palabras, leen 'Tokens' (pedacitos de palabras, aprox. 4 caracteres). "Inteligencia" podría ser 3 tokens. OpenAI te cobra y te limita en base a la cantidad de Tokens de entrada (lo que tú le mandas en el Prompt) y Tokens de salida (lo que él responde).</p>
    `,
    "practical": `
      <h3>El "Hola Mundo" con la API de OpenAI</h3>
      <p>Esta es la base técnica de miles de Startups tecnológicas hoy en día.</p>
      <pre><code class="language-python"># pip install openai
import os
from openai import OpenAI

# 1. Configurar la Llave Maestra (API Key) - ¡NUNCA la pongas pública en GitHub!
os.environ["OPENAI_API_KEY"] = "sk-mi_clave_secreta_aqui..."
cliente = OpenAI()

# 2. Hacemos la llamada al servidor de OpenAI
respuesta = cliente.chat.completions.create(
  model="gpt-3.5-turbo", # El modelo cerebro (rápido y barato)
  messages=[
    # System: Las reglas inquebrantables del bot (su "alma")
    {"role": "system", "content": "Eres un asistente sarcástico y divertido."},
    # User: Lo que escribe el usuario real
    {"role": "user", "content": "¿Por qué el cielo es azul?"}
  ],
  temperature=0.8 # De 0 a 1. Cerca de 1 es más creativo/loco, 0 es robótico/preciso.
)

# 3. Extraemos el puro texto de la estructura JSON que nos devuelve
texto_final = respuesta.choices[0].message.content
print(texto_final)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Revisa la documentación oficial de precios (Pricing) de la API de OpenAI. Fíjate en los precios por millón de tokens de Entrada (Input) y Salida (Output) para el modelo <code>gpt-4o</code>. ¿Por qué crees que cobran significativamente más caro el token generado (salida) que el token que tú les mandas (entrada)? PISTA: Esfuerzo computacional de la GPU.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es el objetivo final del Proyecto 2 que construiremos en este bloque?", "options": ["Un modelo que dibuje plantas", "Un Agente Conversacional Avanzado (Chatbot) con memoria, capacidad de leer PDFs internos y una interfaz web real", "Un sistema que hackea bancos", "Una página en HTML de currículum"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuál es la principal ventaja de utilizar Modelos por API cerrados (como GPT-4 de OpenAI)?", "options": ["Son completamente gratis", "Que tú eres dueño de sus códigos fuente", "Que tienes acceso instantáneo a la inteligencia más avanzada del planeta sin necesidad de comprar ni mantener tarjetas gráficas (GPUs) costosas de servidor", "Que no usan internet"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Cuál es el argumento empresarial número uno para rechazar OpenAI y preferir usar un Modelo Open Source pesado (como Llama 3) corriendo en un servidor local propio?", "options": ["La Privacidad de Datos y Seguridad (garantizar que la información súper confidencial del banco o clínica nunca sale hacia servidores de una empresa externa)", "Porque Llama 3 sabe más matemáticas", "Porque Llama 3 es más fácil de instalar", "Por el diseño de su logo"], "correctAnswer": 0 },
      { "id": 4, "question": "¿Cómo 'leen' y cobran financieramente las empresas de IA como OpenAI el texto que les envías?", "options": ["Pagan por kilobyte de memoria", "Por letra y espacio", "En base a 'Tokens' (fragmentos estadísticos de palabras, aprox. 4 caracteres en inglés)", "En base a la dificultad de la pregunta"], "correctAnswer": 2 },
      { "id": 5, "question": "En el código Python usando la API de OpenAI, ¿para qué sirve el mensaje con el rol 'System'?", "options": ["Para instalar el sistema operativo", "Es un prompt maestro oculto de alta prioridad que dicta la personalidad, reglas y restricciones inquebrantables del chatbot (su 'alma')", "Para enviar el texto del usuario", "Para borrar el historial"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué hace el parámetro 'Temperature' = 0.0 en los modelos generativos?", "options": ["Apaga los ventiladores de la GPU", "Hace que el modelo sea completamente determinista (robótico), eligiendo siempre la respuesta estadística más obvia y precisa, ideal para matemáticas o extraer datos", "Hace que el modelo delire e invente poemas creativos", "Acelera el tiempo de respuesta"], "correctAnswer": 1 },
      { "id": 7, "question": "Si subes por accidente tu código a un repositorio público en GitHub (como tu portafolio) y olvidaste borrar el texto 'sk-xxxx' (Tu API Key). ¿Qué va a pasar?", "options": ["Nada, nadie lee mi GitHub", "Bots maliciosos escanean GitHub 24/7. Robarán tu clave en 3 segundos y generarán peticiones masivas, dejándote una deuda de miles de dólares en tu tarjeta de crédito con OpenAI", "OpenAI te mandará una felicitación", "Tu código se ejecutará más rápido"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-7",
    "title": "5.7: Proyecto 2 - RAG y Bases de Datos Vectoriales",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Inyectar conocimiento privado corporativo al Chatbot mediante RAG.</li><li>Convertir documentos de texto (PDFs) en Embeddings.</li><li>Almacenar y consultar vectores en ChromaDB.</li></ul>",
    "content": `
      <h3>1. El Límite de Memoria (Context Window)</h3>
      <p>¿Por qué no simplemente pegamos todos los PDFs del manual de recursos humanos de la empresa en el mensaje de "User" cada vez que preguntamos algo? Porque los LLM tienen una "Ventana de Contexto" (Context Window) limitada (ej. 8,000 o 128,000 tokens). Si envías 5 manuales enteros, sobrepasarás el límite, el modelo fallará, y si no falla, la factura de dinero por procesar 100,000 tokens en <em>cada maldita pregunta</em> quebrará a tu empresa.</p>
      
      <h3>2. Chunking y Embeddings</h3>
      <p>La arquitectura RAG soluciona esto procesando los documentos una sola vez por adelantado:</p>
      <ul>
        <li><strong>Chunking (Trozado):</strong> Tomamos el PDF gigante y lo picamos computacionalmente en pequeños fragmentos (chunks) de texto de 500 palabras.</li>
        <li><strong>Embedding:</strong> Pasamos cada uno de esos miles de fragmentos por un modelo matemático especializado (ej. \`text-embedding-ada-002\`). Esto transforma el párrafo de texto en un vector denso (ej. una lista de 1536 números decimales) que captura su "significado".</li>
      </ul>

      <h3>3. ChromaDB (Vector Database)</h3>
      <p>Guardamos esos miles de vectores en una base de datos especial vectorial (como <em>ChromaDB</em>, <em>Pinecone</em> o <em>Milvus</em>). Cuando el empleado pregunta: "¿Tengo bono de fin de año?", el sistema convierte esa pregunta a vector, busca matemáticamente el vector de la base de datos más cercano (Similitud del Coseno) y recupera ÚNICAMENTE ese párrafo. Luego, le enviamos a OpenAI <em>solo ese párrafo de 500 palabras</em> junto a la pregunta. ¡Rápido, preciso y baratísimo!</p>
    `,
    "practical": `
      <h3>Creando la Base de Conocimiento (ChromaDB)</h3>
      <pre><code class="language-python"># pip install chromadb sentence-transformers
import chromadb

# 1. Iniciamos una base de datos local ligera y permanente en disco
cliente_chroma = chromadb.PersistentClient(path="./mi_base_datos_rrhh")

# 2. Creamos una "Colección" (Como una tabla en SQL)
coleccion = cliente_chroma.get_or_create_collection(name="manual_empleados")

# Supongamos que ya dividimos nuestro PDF en estos 3 'Chunks' (fragmentos)
fragmentos = [
    "La empresa ofrece 15 días de vacaciones al año después del primer aniversario.",
    "El bono de fin de año es de un mes de sueldo para empleados full-time.",
    "La cafetería abre de 8:00 AM a 4:00 PM."
]

# 3. Guardamos los documentos. ChromaDB usará automáticamente un 
# modelo Open Source de Hugging Face para convertirlos a vectores por nosotros.
coleccion.add(
    documents=fragmentos,
    metadatas=[{"fuente": "pág 10"}, {"fuente": "pág 15"}, {"fuente": "pág 2"}],
    ids=["id1", "id2", "id3"]
)
print("¡Vectores generados y guardados en la Base de Datos con éxito!")

# 4. Magia Pura: Búsqueda Semántica en Producción
pregunta_usuario = "¿A qué hora cierran el lugar para comer?"
resultados = coleccion.query(
    query_texts=[pregunta_usuario],
    n_results=1 # Traer solo el fragmento más relevante
)

print("\\nFragmento encontrado por la IA:", resultados['documents'][0][0])
# Imprimirá lo de la cafetería, a pesar de que el usuario no usó la palabra "cafetería"
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Fíjate en el resultado de la Búsqueda Semántica en el código. El usuario preguntó por el 'lugar para comer', pero el texto en la base de datos decía 'cafetería'. Si usáramos una base de datos tradicional (SQL) con el comando `LIKE '%lugar para comer%'`, ¿por qué habría fallado horriblemente y por qué la base Vectorial triunfó?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué enviar los 500 PDFs completos de tu empresa a OpenAI en CADA pregunta del usuario es una idea desastrosa para hacer un Chatbot?", "options": ["Porque los PDFs tienen imágenes", "Por los costos económicos masivos por token en cada pregunta y porque el modelo sufriría el error de límite de Ventana de Contexto (Context Window Limit)", "Porque OpenAI prohíbe leer PDFs", "Porque el código se trabaría"], "correctAnswer": 1 },
      { "id": 2, "question": "En la creación de RAG, ¿qué significa la fase de 'Chunking' (Trozado)?", "options": ["Trozar la computadora", "Dividir documentos gigantescos (ej. 100 páginas) en pequeños párrafos manejables (ej. 500 tokens) para que no saturen la memoria al enviarlos", "Borrar texto inútil", "Transformar texto en imágenes"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué operación matemática fundamental convierte un párrafo de texto en un vector numérico (lista de 1500 decimales) que la máquina puede procesar geométricamente?", "options": ["Tokenización", "Compresión ZIP", "Embedding", "Gradient Descent"], "correctAnswer": 2 },
      { "id": 4, "question": "¿Qué tipo de base de datos nació en los últimos años diseñada exclusivamente para guardar, indexar y buscar ultrarrápido millones de Embeddings matemáticos?", "options": ["Bases de Datos Relacionales (MySQL)", "Bases de Datos Vectoriales (Vector Databases como ChromaDB, Pinecone)", "Bases de Datos en Grafos", "Archivos CSV gigantes"], "correctAnswer": 1 },
      { "id": 5, "question": "Cuando el usuario hace la pregunta en RAG, ¿qué debe hacerse con el texto de la pregunta ANTES de buscar la respuesta?", "options": ["Traducirlo al inglés", "Convertir la pregunta a su propio Vector de Embedding usando el EXACTO MISMO modelo que usamos para los documentos, para poder compararlos en el espacio", "Convertirlo a minúsculas obligatoriamente", "Enviar la pregunta a Google"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Por qué es tan potente la 'Búsqueda Semántica' vectorial respecto a la búsqueda tradicional de palabras clave (como presionar CTRL+F)?", "options": ["Es más lenta", "Porque busca significado matemático. Si preguntas por 'felinos pequeños', encontrará 'gatos' porque están cerca geométricamente, aunque las letras sean totalmente distintas", "Porque busca colores en las letras", "No es mejor, es igual"], "correctAnswer": 1 },
      { "id": 7, "question": "En el pipeline RAG final, una vez que ChromaDB te devuelve el fragmento correcto (ej. la pág 15 de vacaciones). ¿Qué haces a continuación?", "options": ["Le mandas el PDF al usuario por correo", "Tomas ese pequeño fragmento, lo pegas en un Prompt maestro de texto, y se lo mandas a OpenAI (ej. GPT-4) para que redacte una respuesta humana y cortés basada ÚNICAMENTE en ese fragmento", "Apagas la base de datos", "Terminas el programa"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-8",
    "title": "5.8: Proyecto 2 - LangChain (Memoria y Prompts)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Introducir el framework LangChain para orquestar la IA.</li><li>Entender la falta de memoria inherente de las APIs REST (Stateless).</li><li>Implementar un Buffer de Memoria Conversacional en código.</li></ul>",
    "content": `
      <h3>1. El Problema de la Amnesia (Stateless)</h3>
      <p>Cuando usas ChatGPT en la web, él recuerda lo que le dijiste hace 10 minutos. Pero cuando tú programas conectándote directamente a la API de OpenAI (como vimos en la sesión 5.6), descubres una cruda realidad: <strong>La API tiene amnesia total</strong>. Cada solicitud es independiente (Stateless). Si le dices "Me llamo Carlos" y en la siguiente línea de código le preguntas "¿Cómo me llamo?", la API te dirá "No lo sé".</p>
      
      <h3>2. LangChain al Rescate</h3>
      <p>Para solucionar la amnesia, los programadores tenían que escribir código espagueti para ir guardando en una variable gigante cada mensaje del usuario y la respuesta del bot, e inyectar ese bloque enorme de texto (el historial) en cada nueva petición de la API. <strong>LangChain</strong> automatiza esto y mucho más. Es un framework que actúa como el "pegamento" de la arquitectura de la IA.</p>

      <h3>3. Tipos de Memoria en LangChain</h3>
      <p>LangChain ofrece módulos de memoria listos para usar:</p>
      <ul>
        <li><strong>ConversationBufferMemory:</strong> Guarda el chat exacto tal cual. Problema: si el chat dura 2 horas, el tamaño de los tokens explota y los costos te arruinan.</li>
        <li><strong>ConversationSummaryMemory:</strong> ¡Magia pura! Ejecuta un modelo secundario en segundo plano que lee el historial cada vez que hablas, hace un pequeño "resumen" de la conversación y tira a la basura el texto largo original. Así, el bot siempre mantiene el contexto sin saturar la memoria.</li>
      </ul>
    `,
    "practical": `
      <h3>Implementando Memoria con LangChain</h3>
      <pre><code class="language-python"># pip install langchain langchain-openai
import os
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

os.environ["OPENAI_API_KEY"] = "sk-..."

# 1. Definimos el LLM cerebro
llm = ChatOpenAI(temperature=0.7, model="gpt-3.5-turbo")

# 2. Inicializamos una memoria de buffer básica
memoria_chat = ConversationBufferMemory()

# 3. Creamos la "Cadena" (Chain) que une el Cerebro con la Memoria
chatbot_con_memoria = ConversationChain(
    llm=llm, 
    memory=memoria_chat,
    verbose=True # En True, imprimirá en consola cómo maneja el historial internamente
)

# Simulamos un usuario chateando en tiempo real
print(chatbot_con_memoria.predict(input="¡Hola! Me llamo Carlos y mi color favorito es el azul."))
# Respuesta: ¡Hola Carlos! Qué bonito color...

print(chatbot_con_memoria.predict(input="Quiero comprar un coche. ¿De qué color me recomiendas pedirlo?"))
# Respuesta (Recordando): ¡Deberías pedirlo color azul, ya que es tu favorito!

print("\\n--- Contenido crudo de la memoria interna ---")
print(memoria_chat.buffer)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Cambia el argumento <code>verbose=True</code> en el código e investiga en la consola qué está haciendo LangChain internamente justo antes de mandar la petición a OpenAI. Notarás que está reconstruyendo un mega-prompt inyectando tu historial en un bloque llamado 'History'. ¡Esa es la amnesia solucionada!</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es un hecho técnico irrefutable sobre las APIs de los LLMs modernos (como la API de OpenAI)?", "options": ["Están vivas", "Tienen memoria persistente automática en sus servidores", "Son 'Stateless' (sin estado) y sufren amnesia total; no tienen idea de qué les preguntaste en la petición anterior de código", "Guardan tus archivos ZIP en su base de datos"], "correctAnswer": 2 },
      { "id": 2, "question": "¿Cómo se resuelve técnicamente la 'Amnesia' para construir un chatbot fluido con la API?", "options": ["Pagando un plan Premium", "Almacenando localmente en una variable el historial completo del chat y enviando TODO el historial repetidamente en cada nueva petición a la API", "Apagando y encendiendo el código", "Haciendo pausas de 5 minutos"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué problema grave económico y técnico ocurre si el usuario chatea por 4 horas usando una memoria simple que acumula texto (ConversationBufferMemory)?", "options": ["La pantalla del celular se quema", "El bloque de texto crecerá tanto que eventualmente superará el límite de tokens (Ventana de Contexto) del modelo, causando que crashee, además de cobrar muchísimo dinero por petición", "La API de OpenAI se borra", "El bot se deprime"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Cuál es la función principal del framework 'LangChain' en el ecosistema moderno de IA?", "options": ["Hacer páginas web", "Crear modelos neuronales de cero", "Actuar como 'pegamento' de orquestación, proporcionando bloques de código (Memoria, Prompts, Herramientas, Conexión a Vectores) estandarizados para conectar un LLM al mundo real fácilmente", "Hackear criptomonedas"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Qué genialidad realiza la clase 'ConversationSummaryMemory' de LangChain para solucionar el problema del límite de tokens en chats infinitos?", "options": ["Borra el primer mensaje cada 2 minutos", "Usa un modelo secundario en segundo plano para leer la charla larga, resumirla dinámicamente en un pequeño párrafo de contexto (ej. 'El usuario es Carlos y busca autos') y descartar el texto crudo gigante", "Traduce el chat al español", "Comprime el chat en un archivo .rar"], "correctAnswer": 1 },
      { "id": 6, "question": "En el concepto de LangChain, ¿qué significa una 'Cadena' (Chain)?", "options": ["Un código de bloqueo", "Una secuencia modular lógica; por ejemplo, unir el módulo de Memoria con el módulo del LLM y un módulo de Prompt predefinido para crear una entidad funcional completa", "Una cadena de texto (String) normal en Python", "Conexión Bluetooth"], "correctAnswer": 1 },
      { "id": 7, "question": "Cuando usamos `verbose=True` en una cadena de LangChain, ¿qué ventaja ganamos como ingenieros?", "options": ["El código se ejecuta más rápido", "Podemos ver 'detrás de cámaras' en la consola y observar exactamente el Prompt gigante ensamblado final (con el historial inyectado) que LangChain está a punto de mandar a la API de OpenAI", "El bot habla por los altavoces", "Genera colores en el fondo de la pantalla"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-9",
    "title": "5.9: Proyecto 2 - Agentes, Herramientas y ReAct",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Darle 'manos' al chatbot convirtiéndolo en un Agente Autónomo.</li><li>Implementar funciones de Python como Herramientas (Tools).</li><li>Conectar LangChain RAG con Agentes (ReAct).</li></ul>",
    "content": `
      <h3>1. La Evolución: Cadenas (Chains) vs Agentes (Agents)</h3>
      <p>Una Cadena (como la vimos en la sesión anterior) es rígida y secuencial (Paso 1, luego Paso 2, y fin). Si el usuario pregunta su nombre, la cadena usa el LLM y fin. Si el usuario pregunta el clima, la cadena usa el LLM... el cual no tiene internet y alucina.</p>
      <p>Un <strong>Agente (Agent)</strong> usa el LLM como un "Cerebro Lógico" o Router. Le entregas una mochila llena de <em>Herramientas (Tools)</em>. Cuando el usuario hace una petición compleja, el Agente analiza la frase, y decide por sí solo: qué herramientas usar, en qué orden usarlas y cuántas veces iterar hasta resolver el problema final.</p>

      <h3>2. Herramientas (Tools)</h3>
      <p>Una herramienta para un Agente no es más que una simple función normal de Python documentada. Puede ser una función que haga <code>requests.get()</code> a la API de Wikipedia, o una que conecte a nuestra Base de Datos Vectorial (ChromaDB), o una que envíe un correo electrónico.</p>

      <h3>3. Prompts de Agente y ReAct</h3>
      <p>Para que la magia funcione, LangChain inyecta un mega-prompt oculto al LLM que dice algo como: <em>"Tienes acceso a estas herramientas: [Calculadora, Wikipedia]. Tienes que responder usando este formato: PENSAMIENTO (razona tu estrategia), ACCION (elige la herramienta), OBSERVACION (resultado de la herramienta). Repite hasta tener la respuesta."</em> A esto se le conoce como el patrón <strong>ReAct</strong>.</p>
    `,
    "practical": `
      <h3>Convirtiendo a la IA en un Agente Matemático-Investigador</h3>
      <pre><code class="language-python">from langchain.agents import initialize_agent, AgentType, Tool
from langchain.chat_models import ChatOpenAI
from langchain.utilities import WikipediaAPIWrapper
from langchain.tools import DuckDuckGoSearchRun
import os

os.environ["OPENAI_API_KEY"] = "sk-..."

llm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo") # Temp 0 porque queremos lógica robótica pura

# 1. Herramientas pre-hechas de LangChain
buscador_web = DuckDuckGoSearchRun()
wikipedia = WikipediaAPIWrapper()

# 2. Definimos nuestra "mochila" de herramientas con descripciones CLAVES
# El agente lee las 'description' para entender cuándo debe usarlas.
herramientas = [
    Tool(
        name="Buscador_Internet",
        func=buscador_web.run,
        description="Útil cuando necesitas buscar el clima o noticias de actualidad en internet."
    ),
    Tool(
        name="Wikipedia",
        func=wikipedia.run,
        description="Útil cuando necesitas encontrar biografías precisas, fechas o hechos históricos."
    )
]

# 3. Inicializamos el cerebro como un agente
agente = initialize_agent(
    tools=herramientas, 
    llm=llm, 
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, 
    verbose=True # Vital para ver cómo razona
)

# 4. Solicitud compleja. El agente debe darse cuenta que tiene que usar Wikipedia para el año
# y luego usar su cerebro para calcular la edad actual.
print("Usuario: Busca en qué año nació Albert Einstein y dime cuántos años habría cumplido en el año actual.")
respuesta_final = agente.run("Busca en qué año nació Albert Einstein y dime cuántos años habría cumplido en el año actual (considera que hoy es 2024).")

print("\\nRespuesta Final del Bot al Usuario:", respuesta_final)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Imagina que quieres que el Agente pueda consultar el precio actual de Bitcoin. ¿Cómo escribirías en Python una función clásica usando la librería <code>requests</code> hacia la API pública de CoinDesk, y cómo la convertirías en una <code>Tool</code> de LangChain para inyectársela a la 'mochila' de tu Agente?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es la diferencia arquitectónica principal entre usar una 'Cadena' (Chain) y usar un 'Agente' (Agent) en LangChain?", "options": ["El agente tiene cuerpo físico", "La cadena es una secuencia de código rígida e inmutable; el Agente usa el modelo de IA para 'razonar' de forma autónoma qué ruta tomar y qué herramientas invocar basándose en el pedido del usuario", "La cadena no usa memoria RAM", "El agente no puede usar APIs"], "correctAnswer": 1 },
      { "id": 2, "question": "En el mundo de los Agentes de IA, ¿qué es exactamente una 'Herramienta' (Tool)?", "options": ["Un hardware de servidor", "Cualquier función de Python (ej. raspar la web, buscar SQL, enviar un email) que empaquetamos y le otorgamos al LLM para interactuar con el mundo exterior", "Un comando de consola CMD", "Una tarjeta gráfica NVIDIA"], "correctAnswer": 1 },
      { "id": 3, "question": "Cuando configuras una 'Tool' en LangChain, ¿por qué es tan extremadamente importante redactar una buena 'description' de la herramienta en texto humano?", "options": ["Para que quede bien documentado para los humanos", "Porque el Agente LLM lee matemáticamente esas descripciones en el prompt para comprender las reglas y decidir autónomamente SI ES APROPIADO invocar esa herramienta para el problema actual", "Para cumplir normativas legales de Python", "Por simple estética"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué significa el patrón de diseño 'ReAct' que los agentes modernos usan bajo el capó?", "options": ["Reasoning and Acting (Razonamiento y Acción). El agente es forzado a imprimir su proceso de pensamiento lógico interno ANTES de tomar una acción o usar una herramienta, mejorando masivamente su precisión lógica", "Reacción rápida a los datos", "Uso del framework React de JavaScript para hacer interfaces", "Reiniciar la actividad"], "correctAnswer": 0 },
      { "id": 5, "question": "¿Qué sucedería si le pasas a este Agente una pregunta de lógica matemática pura que NO requiere usar internet?", "options": ["El agente se traba buscando herramientas", "El agente razona que ninguna de sus herramientas le sirve, y procede a usar su 'conocimiento interno' (su cerebro generativo pre-entrenado) para responderte, demostrando verdadera autonomía", "El sistema operativo crashea", "El agente imprime un error 404"], "correctAnswer": 1 },
      { "id": 6, "question": "En el código, definimos el modelo con `temperature=0`. ¿Por qué esto es una regla de oro fundamental al crear Agentes lógicos en producción?", "options": ["Para evitar sobrecalentamiento de servidor", "Porque queremos que las decisiones del agente (qué herramientas usar, qué lógica aplicar) sean 100% robóticas, deterministas y precisas; un nivel alto de 'creatividad' (temperatura 0.8) haría que el agente alucine comandos que no existen", "Porque a los agentes no les gusta el calor", "Para que sea más lento"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Podrías conectar la Base de Datos Vectorial (ChromaDB) de tu proyecto RAG como una 'Herramienta' (Tool) de este Agente?", "options": ["No, los vectores no se conectan a agentes", "Sí, es el pináculo de la IA empresarial. El agente deducirá si la pregunta es casual (y charla normal) o si requiere información interna corporativa, e invocará la herramienta RAG solo cuando sea pertinente.", "Solo usando modelos Open Source", "Sí, pero se borraría la base de datos"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-10",
    "title": "5.10: Proyecto 2 - Interfaz Gráfica y Despliegue (Streamlit)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Llevar nuestro agente desde la aburrida consola negra a una UI moderna.</li><li>Aprender a usar Streamlit para construir Web Apps de Data Science en minutos.</li><li>Conectar la lógica de LangChain a una interfaz de Chat realista.</li></ul>",
    "content": `
      <h3>1. La IA debe ser Accesible (Frontend)</h3>
      <p>Has construido un agente corporativo con memoria, RAG, y herramientas web (Wikipedia). Pero si le entregas a tu jefe un script de Python \`app.py\` que se corre en una consola negra de texto (Terminal), el proyecto fracasará. Las personas exigen interfaces visuales atractivas, cuadros de texto, historiales de chat estilo iMessage y botones agradables.</p>
      
      <h3>2. El Milagro de Streamlit</h3>
      <p>Construir una página web interactiva con historial de chat normalmente requeriría meses de aprender React (JavaScript), CSS y conectarlo a FastAPI (Python). <strong>Streamlit</strong> es una librería que permite a los Data Scientists crear aplicaciones web espectaculares y reactivas escribiendo EXCLUSIVAMENTE código Python, sin tocar una sola línea de HTML o JS.</p>

      <h3>3. Estado de la Sesión (Session State)</h3>
      <p>El mayor desafío al hacer apps web en Python es que, cada vez que el usuario aprieta un botón en Streamlit, el script se vuelve a ejecutar desde arriba hacia abajo borrando todas las variables. Para crear un chatbot, debemos obligar al código a recordar las conversaciones antiguas mediante un almacén temporal en la memoria del navegador llamado <em>Session State</em>.</p>
    `,
    "practical": `
      <h3>App Chatbot en 15 Líneas (Streamlit)</h3>
      <p>Guarda este código en un archivo <code>app.py</code> y ejecútalo en consola usando: <code>streamlit run app.py</code></p>
      <pre><code class="language-python"># pip install streamlit
import streamlit as st
from langchain.chat_models import ChatOpenAI
import os

st.title("🤖 Chatbot Corporativo de IA")

# 1. Configuración Inicial e IA
os.environ["OPENAI_API_KEY"] = "sk-..."
llm = ChatOpenAI(model="gpt-3.5-turbo")

# 2. Inicializar la 'Memoria de Sesión' en la web
if "mensajes" not in st.session_state:
    st.session_state.mensajes = []

# 3. Dibujar todos los mensajes históricos en la pantalla
for msg in st.session_state.mensajes:
    with st.chat_message(msg["role"]):
        st.markdown(msg["content"])

# 4. Capturar el texto que el usuario escribe en la cajita inferior
texto_usuario = st.chat_input("Escribe tu pregunta aquí...")

if texto_usuario:
    # A) Mostrar y guardar lo que el usuario escribió
    with st.chat_message("user"):
        st.markdown(texto_usuario)
    st.session_state.mensajes.append({"role": "user", "content": texto_usuario})
    
    # B) (Aquí iría la lógica de tu Agente LangChain en un proyecto real)
    # Por brevedad, llamamos al LLM directamente
    respuesta_ia = llm.predict(texto_usuario)
    
    # C) Mostrar y guardar lo que la IA respondió
    with st.chat_message("assistant"):
        st.markdown(respuesta_ia)
    st.session_state.mensajes.append({"role": "assistant", "content": respuesta_ia})
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Streamlit es increíblemente poderoso. Investiga en la documentación de Streamlit qué función de código abierto te permite permitir que el usuario arrastre y suelte (Upload) un archivo PDF en tu página web. ¿Cómo conectarías esto a la base de datos ChromaDB de la sesión 5.7 para hacer un 'Chatbot analiza-documentos dinámico'?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué es vital darle una Interfaz de Usuario (UI) web a nuestro chatbot de Inteligencia Artificial desarrollado en los capítulos anteriores?", "options": ["Para que el código compile en C++", "Porque los usuarios finales o gerentes no saben ni quieren abrir una consola de comandos (Terminal) de Python para escribir; necesitan una experiencia moderna, amigable y visual como WhatsApp o la web de ChatGPT", "Para que funcione la librería Math", "Para ahorrar espacio en el disco duro"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es la librería 'Streamlit' en el ecosistema de Data Science?", "options": ["Un río pequeño", "Una base de datos relacional de Microsoft", "Un framework de código abierto puro en Python diseñado para crear Web Apps interactivas e increíbles para Machine Learning en cuestión de minutos, sin necesidad de saber lenguajes web como HTML o JavaScript", "Una librería de compresión de audio"], "correctAnswer": 2 },
      { "id": 3, "question": "En la arquitectura de Streamlit, ¿qué peculiaridad tiene la ejecución del código Python cada vez que un usuario interactúa con la interfaz web (ej. presiona un botón o manda un texto)?", "options": ["La computadora se apaga", "Streamlit vuelve a ejecutar todo el archivo de código Python de arriba hacia abajo desde cero. Si usaste variables normales de Python, se borrarán.", "El código de Python se traduce a Java en el servidor y ejecuta un ejecutable .exe", "Abre una ventana nueva"], "correctAnswer": 1 },
      { "id": 4, "question": "Dado el comportamiento anterior, ¿cómo evitamos perder el historial del chat cada vez que la página se actualiza o el usuario envía un nuevo mensaje?", "options": ["Escribiendo el historial en un papel", "Usando el objeto `st.session_state` de Streamlit, una memoria de estado persistente ligada a la sesión del navegador web que no se borra cuando el script de Python se refresca cíclicamente", "Usando un archivo de audio", "Haciendo pausas de 10 segundos en el código"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Para qué sirve el componente `st.chat_message('user')` o `st.chat_message('assistant')` de Streamlit?", "options": ["Para hacer un sonido de notificación", "Para invocar componentes nativos de interfaz gráfica de chat, renderizando un elegante globito de chat (burbuja de texto) con su respectivo avatar (robot o persona) automáticamente en la pantalla de la página web", "Para enviar un mensaje de WhatsApp a un servidor de Meta", "Para traducir idiomas"], "correctAnswer": 1 },
      { "id": 6, "question": "En el contexto de la orquestación total, si en la línea 'B' del código metiéramos al Agente LangChain de la Sesión 5.9, ¿qué pasaría en la interfaz?", "options": ["Error", "El usuario vería en la pantalla web cómo la IA se detiene a 'Pensar', usa herramientas como buscar en Wikipedia por internet, recupera datos de una base de datos ChromaDB y finalmente escupe la respuesta final elegantemente a la pantalla", "El navegador se cerraría por consumir mucha RAM", "La IA empezaría a hablar por los altavoces de la PC incontrolablemente"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Cuál es la forma más fácil y común hoy en día para publicar tu app final de Streamlit en internet para que cualquier persona en el mundo pueda usar tu bot con un link web?", "options": ["Comprar un servidor físico e instalar Linux localmente", "Subir el código a GitHub y conectarlo a 'Streamlit Community Cloud' o 'Hugging Face Spaces', quienes alojan, encienden y despliegan la aplicación web por ti de forma 100% gratuita", "Convertirlo a un APK y enviarlo por correo", "Instalando Windows 98"], "correctAnswer": 1 }
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
console.log('Successfully created/updated sessions 5.1 to 5.10');
