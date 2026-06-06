import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "4-21",
    "title": "4.21: Optimización de Modelos (Pruning y Cuantización)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender por qué los modelos masivos son inviables para dispositivos móviles o de borde (Edge).</li><li>Aprender las técnicas de Pruning (Poda) de pesos neuronales.</li><li>Comprender la Cuantización y formatos universales como ONNX.</li></ul>",
    "content": `
      <h3>1. El Costo de la Inferencia</h3>
      <p>Entrenar una red neuronal es costoso, pero la <em>Inferencia</em> (poner el modelo a predecir en el mundo real) ocurre millones de veces por hora. Un modelo como GPT-3 pesa cientos de gigabytes y exige clusters de GPUs. Si quieres que una red reconozca señales de tráfico en un coche autónomo a 60 FPS, no puedes usar un modelo tan masivo ni depender de la latencia de internet.</p>
      
      <h3>2. Pruning (Poda Neuronal)</h3>
      <p>Tras entrenar una red de 100 capas, descubrimos matemáticamente que muchos de sus pesos son casi cero (ej. 0.0001). No aportan casi nada a la decisión final. El <strong>Pruning</strong> consiste en borrar estos pesos (convertirlos exactamente en 0) e incluso eliminar neuronas enteras. ¡Podemos borrar hasta el 50% de la red sin que la precisión baje significativamente!</p>

      <h3>3. Cuantización (Quantization)</h3>
      <p>Las redes neuronales suelen calcular todo en alta precisión decimal (Float32, 32 bits por número). La <strong>Cuantización</strong> reduce esa precisión. Convierte los números de 32 bits a enteros de 8 bits (Int8). Esto reduce mágicamente el tamaño del modelo en disco en un 75% y acelera la predicción en hardware de bajo consumo (teléfonos, smartwatches) tolerando una pérdida mínima de exactitud (apenas un 1% o 2%).</p>
    `,
    "practical": `
      <h3>Exportando a formato universal ONNX</h3>
      <p>Frameworks como PyTorch o TensorFlow están optimizados para entrenar, no para inferencia en producción. Convertimos nuestro modelo a <strong>ONNX (Open Neural Network Exchange)</strong>, un formato de código abierto super-rápido soportado por hardware nativo.</p>
      <pre><code class="language-python"># Pseudo-código de PyTorch a ONNX
import torch
import torchvision.models as models

# 1. Cargamos un modelo de visión pre-entrenado
modelo = models.resnet18(pretrained=True)
modelo.eval() # Modo inferencia (apaga Dropout, etc)

# 2. Creamos un tensor 'falso' de entrada para trazar la red
entrada_dummy = torch.randn(1, 3, 224, 224)

# 3. Exportamos el modelo
torch.onnx.export(
    modelo,                  # El modelo de PyTorch
    entrada_dummy,           # La entrada falsa
    "resnet_optimizada.onnx", # Nombre del archivo exportado
    export_params=True,      # Exportar también los pesos entrenados
    opset_version=11         # Versión del formato ONNX
)
print("¡Modelo exportado listo para correr en C++ o Edge Devices a máxima velocidad!")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el concepto de <em>Knowledge Distillation (Destilación de Conocimiento)</em>. ¿Cómo funciona la técnica de entrenar a un modelo muy pequeño ('Estudiante') para que imite las decisiones complejas de un modelo masivo ('Profesor')?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué problema grave surge al intentar poner en producción (Inferencia) modelos masivos de Deep Learning en tiempo real?", "options": ["No corren en Python", "Requieren demasiado espacio de almacenamiento, memoria RAM y tiempo de procesamiento, haciéndolos inviables para dispositivos pequeños o de batería baja", "Se vuelven malvados", "Exigen que el usuario sepa matemáticas"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué hace la técnica de 'Pruning' (Poda) en una red neuronal entrenada?", "options": ["Cambia los colores de las imágenes", "Identifica los pesos (conexiones) cuyos valores son muy cercanos a cero y los elimina matemáticamente, reduciendo la complejidad del modelo sin perder precisión", "Borra el modelo y lo entrena de nuevo", "Multiplica el tamaño de la red"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué ocurre matemáticamente en la 'Cuantización' (Quantization)?", "options": ["Divide todo por dos", "Reduce la precisión de los parámetros de la red, pasando por ejemplo de decimales Float32 a enteros de 8 bits (Int8), logrando un modelo 4 veces más ligero", "Cuenta cuántas neuronas hay", "Suma todos los pesos"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Por qué estarías dispuesto a perder un 1% de Accuracy (Exactitud) aplicando cuantización?", "options": ["Porque los errores son graciosos", "Porque a cambio el modelo ocupa un 75% menos de espacio y se ejecuta mucho más rápido en el celular del usuario, ahorrando batería y dinero", "Porque las leyes lo exigen", "Para que los hackers no lo roben"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué significan las siglas ONNX?", "options": ["Online Native Neural XML", "Open Neural Network Exchange (formato universal abierto de interoperabilidad de modelos)", "Optical Network Node X", "Overly Nice Neural Xenomorph"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Cuál es la principal ventaja de convertir tu modelo de TensorFlow o PyTorch a formato ONNX?", "options": ["Te regalan una GPU", "El formato ONNX está altamente optimizado para Inferencia (predicción) y puede ser ejecutado directamente en múltiples plataformas como C++, Java o aceleradores hardware IoT", "Oculta el código fuente", "Añade más capas a la red automáticamente"], "correctAnswer": 1 },
      { "id": 7, "question": "En la técnica de Destilación de Conocimiento (Knowledge Distillation), ¿quién es el 'Profesor'?", "options": ["El programador", "El usuario final", "Un modelo enorme, lento y muy preciso que guía el entrenamiento de un modelo 'Estudiante' mucho más pequeño", "El libro de texto"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-22",
    "title": "4.22: Redes Neuronales en Grafos (GNNs)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender por qué los modelos clásicos fallan en datos relacionales.</li><li>Comprender la estructura matemática de un Grafo (Nodos y Aristas).</li><li>Conocer las Graph Neural Networks y el concepto de Paso de Mensajes (Message Passing).</li></ul>",
    "content": `
      <h3>1. El Problema de los Datos No Estructurados</h3>
      <p>Las CNNs dominan las imágenes (una cuadrícula perfecta de píxeles). Las RNNs dominan el texto (una línea secuencial). Pero en el mundo real, muchos datos son complejas redes de relaciones amorfas: las amistades en Facebook, la estructura 3D de una molécula química, o el mapa de carreteras de Uber. Estos datos se modelan matemáticamente como <strong>Grafos</strong>.</p>
      
      <h3>2. Anatomía de un Grafo</h3>
      <p>Un grafo se compone de:</p>
      <ul>
        <li><strong>Nodos (Vértices):</strong> Entidades. Ej. Las personas en una red social. Cada nodo tiene un vector de características (edad, ciudad, gustos).</li>
        <li><strong>Aristas (Edges):</strong> Las conexiones entre los nodos. Ej. "Es amigo de", o el enlace químico entre dos átomos.</li>
      </ul>

      <h3>3. Graph Neural Networks (GNN) y Message Passing</h3>
      <p>Para predecir algo en un grafo (ej. sugerir un nuevo amigo o descubrir una nueva medicina), usamos GNNs. El mecanismo principal es el <strong>Message Passing (Paso de Mensajes)</strong>. En cada capa de la red, un nodo "actualiza" su propia información agregando matemáticamente la información de todos sus nodos vecinos directos. Si apilamos 3 capas de GNN, el nodo entenderá no solo a sus amigos, sino a los amigos de los amigos de sus amigos.</p>
    `,
    "practical": `
      <h3>Definición visual de un Grafo en Python (NetworkX)</h3>
      <p>Las GNNs modernas se programan usando PyTorch Geometric, pero la lógica de grafos clásica es esencial.</p>
      <pre><code class="language-python">import networkx as nx
import matplotlib.pyplot as plt

# Creamos un grafo vacío (ej. Una red de fraude bancario)
G = nx.Graph()

# Añadimos Nodos (Usuarios)
G.add_node("Usuario_A", saldo=100)
G.add_node("Usuario_B", saldo=5000)
G.add_node("Cuenta_Sospechosa", saldo=0)

# Añadimos Aristas (Transacciones financieras de dinero)
G.add_edge("Usuario_A", "Usuario_B", monto=50)
G.add_edge("Usuario_B", "Cuenta_Sospechosa", monto=4000)

# La GNN analizaría esta estructura de conexiones para detectar
# que el Usuario B podría estar siendo extorsionado o cometiendo lavado.
nx.draw(G, with_labels=True, node_color='lightblue', font_weight='bold')
plt.show()
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Una aplicación masiva de GNNs ocurre en <em>Google Maps</em>. Investiga brevemente cómo Google utiliza las redes neuronales en grafos para predecir con tanta exactitud el ETA (Tiempo Estimado de Llegada) cuando estás navegando en el tráfico.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué problema grave tienen las CNNs y las RNNs con datos como las redes sociales o estructuras moleculares?", "options": ["Que no pueden leer colores", "Que asumen que los datos vienen en cuadrículas perfectas (imágenes) o líneas rectas secuenciales (texto), y fallan ante redes interconectadas asimétricas", "Que ocupan mucha batería", "Que solo funcionan en inglés"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es matemáticamente un 'Grafo' (Graph)?", "options": ["Un gráfico de barras en Excel", "Una estructura de datos que modela relaciones conformada por Nodos (entidades) y Aristas (conexiones entre ellos)", "Un archivo de texto largo", "Un vector 1D de tamaño infinito"], "correctAnswer": 1 },
      { "id": 3, "question": "En un grafo de una molécula química, ¿qué representarían los Nodos y las Aristas?", "options": ["Los Nodos son la gravedad, las aristas la luz", "Los Nodos son los Átomos (ej. Carbono, Oxígeno) y las Aristas son los enlaces químicos covalentes entre ellos", "Los Nodos son el color, las Aristas el peso", "No se puede modelar química con grafos"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Cuál es el mecanismo central de aprendizaje en una Graph Neural Network (GNN)?", "options": ["Borrar a los amigos", "Message Passing (Paso de Mensajes): cada nodo actualiza sus características combinando (sumando/promediando) matemáticamente la información que recibe de todos sus nodos vecinos", "Gradient Descent Inverso", "Píxel por Píxel"], "correctAnswer": 1 },
      { "id": 5, "question": "Si una GNN tiene 2 capas ocultas, ¿hasta qué distancia de conexión puede 'ver' un nodo?", "options": ["Hasta el infinito", "Solo se ve a sí mismo", "Puede recolectar información de sus vecinos inmediatos, y también de los vecinos de sus vecinos (2 saltos de distancia)", "A 2 kilómetros de distancia"], "correctAnswer": 2 },
      { "id": 6, "question": "¿Cuál de estas es una tarea típica de 'Link Prediction' en un grafo?", "options": ["Sugerir un nuevo amigo en Facebook ('Personas que quizá conozcas') prediciendo que existe una arista no descubierta", "Traducir una frase de inglés a español", "Clasificar si una foto es un gato", "Cambiar el color del fondo de pantalla"], "correctAnswer": 0 },
      { "id": 7, "question": "¿Qué potente librería de Python construida sobre PyTorch se ha convertido en el estándar de la industria para entrenar GNNs?", "options": ["Pandas", "PyTorch Geometric (PyG)", "TensorFlow Image", "OpenCV"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-23",
    "title": "4.23: Procesamiento de Audio y Voz (Whisper y TTS)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Comprender cómo la IA procesa el sonido matemáticamente (Espectrogramas Mel).</li><li>Conocer los sistemas ASR (Automatic Speech Recognition) como Whisper de OpenAI.</li><li>Entender la síntesis de voz (Text-to-Speech) y Voice Cloning.</li></ul>",
    "content": `
      <h3>1. ¿Cómo 'Oye' una Máquina?</h3>
      <p>El sonido físico es solo variaciones de presión de aire captadas por un micrófono (una onda 1D en el tiempo). Las redes neuronales profundas (como las CNN) son pésimas analizando ondas 1D directamente. Por eso, el primer paso en IA de audio es la Transformada de Fourier: convertir el archivo .wav en una imagen colorida llamada <strong>Espectrograma de Mel</strong>, que muestra cómo cambian las frecuencias a lo largo del tiempo. ¡El procesamiento de audio moderno es en realidad Visión Computacional disfrazada!</p>

      <h3>2. ASR (Speech-to-Text) y Whisper</h3>
      <p>Convertir voz humana a texto escrito con precisión era casi imposible por los acentos, el ruido de fondo y la rapidez del habla. En 2022, OpenAI liberó <strong>Whisper</strong>, un modelo Transformer masivo pre-entrenado con 680,000 horas de audio multilingüe. Gracias a la arquitectura Transformer, Whisper entiende el <em>contexto</em> gramatical de la frase entera, logrando un nivel de transcripción con precisión humana casi perfecta en docenas de idiomas e ignorando el ruido ambiente.</p>

      <h3>3. TTS y Voice Cloning</h3>
      <p>Sistemas como ElevenLabs utilizan modelos generativos inversos. Toman un texto (embeddings) y lo transforman en un espectrograma acústico, luego un "Vocoder" convierte esa imagen de vuelta en onda de audio. Hoy en día, con solo 1 minuto de audio de tu voz como referencia (Zero-Shot Voice Cloning), la red puede extraer el vector de identidad de tu garganta y hacerte decir cualquier texto de forma hiperrealista.</p>
    `,
    "practical": `
      <h3>Transcribiendo Audio en 3 Líneas (OpenAI Whisper)</h3>
      <p>La revolución de la IA moderna es que estos modelos titánicos son Open Source y fáciles de usar localmente.</p>
      <pre><code class="language-python"># Primero: pip install openai-whisper
import whisper

# 1. Cargamos el modelo a la memoria (versión 'base', pequeña pero potente)
modelo = whisper.load_model("base")

# 2. Le pasamos el archivo de audio (puede ser una grabación de WhatsApp, MP3, etc.)
# Whisper procesa el Espectrograma y usa el Transformer para escupir texto
resultado = modelo.transcribe("entrevista_trabajo.mp3")

# 3. Imprimimos el texto extraído
print("Transcripción del Audio:")
print(resultado["text"])
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Las redes de clonación de voz están planteando graves desafíos legales y de ciberseguridad. Investiga el concepto de <em>Deepfakes de Audio</em> y explica cómo un atacante podría usar una red TTS pre-entrenada para realizar un fraude bancario 'Vishing' a una empresa.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué es un archivo de audio crudo a nivel matemático para una computadora?", "options": ["Una matriz de colores", "Un texto en código binario", "Una onda 1D en el tiempo (amplitudes de presión captadas por el micrófono a miles de Hercios)", "Una ecuación cuadrática"], "correctAnswer": 2 },
      { "id": 2, "question": "¿Qué transformación matemática se le hace casi siempre al audio antes de pasarlo a la IA?", "options": ["Se borra", "Se convierte a un 'Espectrograma de Mel' (una imagen 2D que muestra el tiempo vs las frecuencias), permitiendo usar Redes Convolucionales o Transformers visuales", "Se traduce a binario", "Se comprime en ZIP"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué significan las siglas ASR en la industria del audio?", "options": ["Audio System Recording", "Automatic Speech Recognition (Reconocimiento Automático del Habla / Speech-to-Text)", "Advanced Source Routing", "Acoustic Sound Reader"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué revolucionario modelo Transformer multilingüe liberó OpenAI gratis en 2022, cambiando la industria de la transcripción?", "options": ["ChatGPT", "DALL-E", "Whisper", "Siri"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Por qué Whisper es tan increíblemente preciso, incluso con mucho ruido de fondo en la calle?", "options": ["Porque adivina palabras al azar", "Porque usa el 'Contexto' gracias al mecanismo de Atención del Transformer; si escucha mal una palabra, deduce cuál era matemáticamente por las palabras que la rodean", "Porque le sube el volumen al audio", "Porque fue programado en C++"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué es TTS (Text-to-Speech)?", "options": ["Traducir texto a español", "El proceso inverso: enviar texto escrito a una IA para que genere el audio sintético de una voz humana hablándolo", "Transmitir texto por SMS", "Un formato de archivo de audio"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué permite la técnica de 'Zero-Shot Voice Cloning' moderna?", "options": ["Clonar un disco duro", "Tomar solo unos pocos segundos de la voz de alguien como referencia y sintetizar un discurso completamente nuevo que suene exactamente como esa persona, sin requerir re-entrenar la red neuronal", "Borrar la voz de una canción", "Mejorar la voz del cantante"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-24",
    "title": "4.24: Detección de Anomalías Profunda (Ciberseguridad)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender por qué la ciberseguridad y el fraude son problemas de Aprendizaje No Supervisado.</li><li>Conocer cómo los Autoencoders detectan intrusos sin saber cómo se ven.</li><li>Explorar el concepto de Isolation Forest y Series Temporales.</li></ul>",
    "content": `
      <h3>1. El Problema de la Aguja en el Pajar</h3>
      <p>En el mundo bancario o en redes de ciberseguridad, ocurren miles de millones de transacciones normales y solo unas poquitas transacciones fraudulentas o ataques de hackers. Como los hackers cambian su método cada semana, <strong>no tenemos ejemplos etiquetados</strong> de los ataques del futuro. Por tanto, el aprendizaje supervisado falla estrepitosamente.</p>
      
      <h3>2. Detección de Anomalías con Autoencoders</h3>
      <p>El truco más elegante en Deep Learning para seguridad es entrenar un Autoencoder usando <strong>ÚNICAMENTE</strong> datos 100% normales y sanos. La red aprende a comprimir y descomprimir perfectamente a un cliente "normal".<br>
      Cuando un Hacker o transacción de Fraude pasa por la red en tiempo real, el Autoencoder (que jamás ha visto ese patrón extraño) falla catastróficamente al intentar descomprimirlo. Al medir matemáticamente el <em>Error de Reconstrucción (MSE)</em>, si el error supera un umbral de alarma, bloqueamos la transacción al instante. ¡Hemos detectado a un intruso sin siquiera saber cómo operaba!</p>

      <h3>3. Isolation Forest en Big Data</h3>
      <p>Fuera de las redes profundas, uno de los algoritmos basados en árboles más eficientes para este trabajo es el <em>Isolation Forest</em>. Construye árboles al azar haciendo divisiones ciegas. Un dato "normal" que se parece a todo el mundo requiere muchísimos cortes para quedar aislado en una rama. Un dato "anómalo", al ser tan raro, queda aislado en la primera o segunda división. La IA marca como fraude a los que quedan aislados muy rápido.</p>
    `,
    "practical": `
      <h3>Detectando Anomalías con Scikit-Learn</h3>
      <pre><code class="language-python">from sklearn.ensemble import IsolationForest
import numpy as np

# Simulamos 1000 transacciones bancarias normales (montos, IPs, frecuencias, etc)
datos_normales = np.random.randn(1000, 5)

# Simulamos 2 ataques de hackers muy extraños y diferentes
ataques = np.random.uniform(low=-10, high=10, size=(2, 5))

# Combinamos todo
datos_completos = np.vstack([datos_normales, ataques])

# 1. Entrenamos el Bosque de Aislamiento
# contamination=0.01 indica que asumimos que el 1% de los datos es fraude
detector = IsolationForest(contamination=0.01, random_state=42)

# 2. El modelo predice: +1 significa 'Normal', -1 significa 'Anomalía/Fraude'
predicciones = detector.fit_predict(datos_completos)

# Contar cuántas anomalías detectó (debería encontrar los 2 ataques)
anomalias = np.count_nonzero(predicciones == -1)
print(f"Alerta de Seguridad: Se detectaron {anomalias} transacciones anómalas.")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Si eres analista de ciberseguridad y tu Autoencoder está detectando que el 50% de las transacciones son anómalas bloqueando las tarjetas de clientes inocentes. ¿Qué hiperparámetro crítico deberías modificar para solucionar este caso de excesivos Falsos Positivos?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué la clasificación supervisada tradicional suele fracasar en detectar Fraude Bancario o Ciberataques?", "options": ["Porque los bancos no usan Python", "Porque hay muy pocos ejemplos históricos de ataques, las clases están abrumadoramente desbalanceadas y los hackers inventan nuevos ataques no vistos cada día", "Porque la IA es racista", "Porque las transacciones son muy grandes"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué paradigma de Inteligencia Artificial domina en la detección de anomalías modernas?", "options": ["Aprendizaje Supervisado (Clasificación)", "Aprendizaje por Refuerzo", "Aprendizaje No Supervisado y Semi-Supervisado", "Programación Tradicional con IFs"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Cómo se entrena un Autoencoder para detectar fraudes?", "options": ["Se entrena con puros ejemplos de fraude", "Se entrena ÚNICAMENTE con millones de transacciones/comportamientos normales y sanos, para que memorice a la perfección 'qué es lo normal'", "Se entrena borrando la base de datos", "No se entrena"], "correctAnswer": 1 },
      { "id": 4, "question": "En producción, ¿cómo detecta el Autoencoder a un atacante o hacker en tiempo real?", "options": ["Porque el hacker tiene IP de Rusia", "Al intentar comprimir y descomprimir los datos del hacker, el modelo generará un altísimo 'Error de Reconstrucción' (MSE) ya que jamás vio esos patrones extraños durante el entrenamiento normal", "El modelo se crashea y da error de Windows", "Le pregunta al humano"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué hace el algoritmo Isolation Forest?", "options": ["Planta árboles en un bosque virtual para salvar el clima", "Realiza cortes aleatorios en los datos; las transacciones anómalas y raras quedan aisladas en solitario tras muy pocos cortes estadísticos", "Aísla la memoria de la computadora", "Manda las transacciones a un servidor remoto aislado"], "correctAnswer": 1 },
      { "id": 6, "question": "Si Isolation Forest te devuelve un resultado de '-1' al analizar un registro de acceso al servidor, ¿qué significa?", "options": ["Que restó un dólar", "Que el modelo predice fuertemente que ese registro es una Anomalía estadística (potencial ataque)", "Que el código falló y arrojó -1", "Que la conexión a internet se perdió"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué son los 'Falsos Positivos' en ciberseguridad impulsada por IA?", "options": ["Hackers que lograron entrar con éxito", "Bugs en el código fuente de Python", "Cuando la IA confunde un comportamiento normal y genuino del cliente con un fraude, bloqueando sus tarjetas de crédito o su acceso injustamente", "Cuando el modelo es muy rápido"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-25",
    "title": "4.25: Series Temporales Avanzadas (Time Series Transformers)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Superar los algoritmos estadísticos (ARIMA) en el análisis del mercado bursátil y clima.</li><li>Comprender por qué las TCN (Temporal Convolutional Networks) superan a las LSTM.</li><li>Ver el futuro de la predicción de series temporales con Time-Series Transformers.</li></ul>",
    "content": `
      <h3>1. Limitaciones de ARIMA y ML Clásico</h3>
      <p>Históricamente, para predecir las ventas del próximo mes o el precio de las acciones, los estadísticos usaban algoritmos como ARIMA o XGBoost. Estos modelos requieren mucha ingeniería humana para extraer la "estacionalidad" o "tendencia" y luchan fuertemente cuando intervienen múltiples variables exógenas (ej. predecir ventas usando fecha + temperatura del clima + feriados + precio histórico).</p>
      
      <h3>2. TCN: Convolutional Networks al rescate del Tiempo</h3>
      <p>Casi todos pensaban que las LSTM eran los reyes de las series temporales, hasta que la industria se dio cuenta de algo: las Redes Convolucionales (las de visión) ¡son increíbles previendo el tiempo! Las <strong>Temporal Convolutional Networks (TCN)</strong> usan convoluciones unidimensionales dilatadas. En vez de leer píxeles espaciales, la TCN lee valores en el eje del tiempo, procesando meses de historial simultáneamente mucho más rápido que la LSTM secuencial.</p>

      <h3>3. Transformers para Series Temporales</h3>
      <p>La IA que revolucionó el texto (Transformers) está devorando la predicción temporal financiera y climática. Modelos como Informer o TimeGPT aplican el mecanismo de Auto-Atención para analizar una secuencia de precios diarios de acciones. La Atención permite a la IA conectar matemáticamente que el precio de HOY está fuertemente influenciado por algo que pasó hace exactamente 365 días, ignorando el ruido del medio.</p>
    `,
    "practical": `
      <h3>Ventanas Deslizantes (Sliding Windows) en Python</h3>
      <p>El truco de ingeniería de datos principal en Series Temporales Profundas es transformar una serie larga en pedazos de [Pasado] para predecir el [Futuro].</p>
      <pre><code class="language-python">import numpy as np

# Supongamos una lista de ventas diarias de 10 días
ventas_historicas = [10, 15, 12, 18, 20, 25, 23, 30, 28, 35]

def crear_ventanas_deslizantes(datos, tamaño_ventana):
    X, y = [], []
    # Queremos mirar 3 días hacia atrás para predecir el día 4
    for i in range(len(datos) - tamaño_ventana):
        ventana_pasada = datos[i : i + tamaño_ventana] # X (Features)
        dia_futuro = datos[i + tamaño_ventana]         # Y (Target)
        
        X.append(ventana_pasada)
        y.append(dia_futuro)
    return np.array(X), np.array(y)

X_train, y_train = crear_ventanas_deslizantes(ventas_historicas, tamaño_ventana=3)

print("Datos formateados para inyectar en TCN o LSTM:")
for pasado, futuro in zip(X_train[:3], y_train[:3]):
    print(f"Mirar los días: {pasado} -> Para predecir el día: {futuro}")

# Salida:
# Mirar los días: [10 15 12] -> Para predecir el día: 18
# Mirar los días: [15 12 18] -> Para predecir el día: 20
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga qué es la 'Fuga de Datos' (Data Leakage) en el contexto de Series Temporales Financieras. ¿Qué sucede de forma desastrosa si, al aplicar Validación Cruzada normal (K-Fold), mezclas datos del futuro con datos del pasado para predecir?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué tipo de datos analiza un modelo de Series Temporales (Time Series)?", "options": ["Imágenes aleatorias sin orden", "Archivos de audio de música comprimida", "Datos secuenciales ordenados cronológicamente a intervalos regulares (ej. cotizaciones diarias de la bolsa, temperatura por hora, ventas mensuales)", "Diccionarios de idiomas"], "correctAnswer": 2 },
      { "id": 2, "question": "¿Qué modelo estadístico clásico (no-neuronal) fue el estándar absoluto durante décadas para pronosticar series de tiempo?", "options": ["YOLO", "K-Means", "ARIMA (AutoRegressive Integrated Moving Average)", "Random Forest"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Qué ventaja tiene el Deep Learning moderno sobre modelos como ARIMA en el sector retail o financiero?", "options": ["Es más barato matemáticamente", "Puede manejar múltiples 'variables exógenas' a la vez sin problema (ej. el precio pasado, la humedad actual, si hoy es día festivo nacional, y una foto del producto, todo junto)", "Dibuja mejores gráficos", "Solo predice ceros"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué significa TCN en este contexto y por qué está reemplazando a la famosa LSTM?", "options": ["Terminator Cyber Node", "Temporal Convolutional Network; usan Convoluciones de visión aplicadas al eje del tiempo. Son inmensamente más rápidas de entrenar que las LSTM porque no son secuenciales sino paralelas", "Tensor Calculation Number", "Total Control Network"], "correctAnswer": 1 },
      { "id": 5, "question": "En el contexto de preparar datos temporales para IA, ¿qué técnica acabamos de ver en el código práctico?", "options": ["Gradient Descent", "Sliding Windows (Ventanas Deslizantes), transformando una larga línea de tiempo en pequeños bloques de (X días de historia) para predecir (Y el día siguiente)", "Compresión de archivos", "Transformada de Fourier"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Por qué el Mecanismo de 'Atención' de los Transformers es brutalmente efectivo para predecir el clima o las ventas?", "options": ["Porque llama la atención del usuario", "Porque la Atención analiza toda la historia temporal de golpe y aprende a prestar más peso matemático a ciclos específicos (ej. que las ventas de hoy viernes dependen de las del viernes pasado, ignorando lo que pasó el martes)", "Porque borra el ruido estadístico", "No funciona para el clima"], "correctAnswer": 1 },
      { "id": 7, "question": "El mayor pecado capital en Machine Learning Financiero es la 'Fuga de Datos' (Data Leakage). ¿Cómo ocurre esto al entrenar?", "options": ["Si te hackean el servidor", "Si el disco duro tiene daños físicos", "Si accidentalmente le pasas a la red neuronal datos del 'futuro' (ej. precios de mañana) en su bloque de entrada (X) para predecir el precio de hoy (Y), creando un modelo que hace trampa", "Si divides por cero el array de ventas"], "correctAnswer": 2 }
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
console.log('Successfully created/updated sessions 4.21 to 4.25');
