import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "4-11",
    "title": "4.11: Modelos de Difusión (Diffusion Models)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender cómo funcionan los modelos de difusión detrás de DALL-E y Midjourney.</li><li>Comprender el proceso de añadir y quitar ruido (Forward y Reverse Diffusion).</li><li>Comparar la estabilidad de los Modelos de Difusión frente a las GANs.</li></ul>",
    "content": `
      <h3>1. ¿Qué son los Modelos de Difusión?</h3>
      <p>Mientras que las GANs dominaron la generación de imágenes hasta 2020, los <strong>Modelos de Difusión</strong> tomaron el trono creando imágenes de calidad sin precedentes (como DALL-E 2, Midjourney o Stable Diffusion). Su concepto se basa en la termodinámica: destruir datos lentamente añadiendo ruido y luego aprender a revertir ese proceso.</p>
      
      <h3>2. Forward Diffusion (El proceso de destrucción)</h3>
      <p>Tomamos una imagen perfecta de un perro. En 1000 pequeños pasos consecutivos, le añadimos un poco de "ruido gaussiano" (estática como en los televisores antiguos). Al paso 1000, la imagen del perro se ha convertido en una pantalla de pura estática aleatoria irreconocible.</p>
      
      <h3>3. Reverse Diffusion (El proceso de creación)</h3>
      <p>Entrenamos a una Red Neuronal Profunda (generalmente una arquitectura <em>U-Net</em>) para que aprenda a hacer la operación inversa. Le damos la imagen en el paso 500 y le pedimos que adivine y reste el ruido para obtener la imagen del paso 499.</p>
      <p>Una vez entrenada, la magia ocurre: le damos a la red ruido 100% puro y aleatorio, y le pedimos que "quite el ruido" 1000 veces seguidas condicionada por un texto (ej. "Un astronauta a caballo"). El ruido se va esculpiendo mágicamente hasta revelar una imagen espectacular que nunca existió.</p>
    `,
    "practical": `
      <h3>Arquitectura de una U-Net (Base de Difusión)</h3>
      <p>La U-Net recibe una imagen ruidosa, reduce su tamaño espacial extraendo el 'qué es' (Downsampling), y luego vuelve a ampliarla a su tamaño original para generar la predicción del ruido (Upsampling), usando conexiones residuales intermedias.</p>
      <pre><code class="language-python"># Concepto simplificado de un bloque de Difusión
def paso_de_difusion(imagen_ruidosa, texto_prompt, modelo_unet):
    # La U-Net mira la imagen ruidosa y el texto ("astronauta")
    # y predice exactamente cómo se ve la "capa de ruido" que se añadió
    ruido_predicho = modelo_unet.predict([imagen_ruidosa, texto_prompt])
    
    # Restamos ese ruido de la imagen original
    imagen_mas_limpia = imagen_ruidosa - ruido_predicho
    
    return imagen_mas_limpia

# Repetir esto 50-1000 veces crea la imagen final
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga por qué las GANs sufren a menudo de un problema llamado 'Mode Collapse' (Colapso de Modo) y cómo el proceso matemático lento y guiado de los Modelos de Difusión evita en gran medida este problema.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué arquitectura de IA está detrás de los generadores de imágenes modernos como Stable Diffusion, DALL-E 2 y Midjourney?", "options": ["Máquinas de Vectores de Soporte (SVM)", "Redes Neuronales Recurrentes (RNN)", "Modelos de Difusión (Diffusion Models)", "Árboles de decisión"], "correctAnswer": 2 },
      { "id": 2, "question": "¿Qué ocurre durante el proceso de 'Forward Diffusion' (Difusión hacia adelante)?", "options": ["Se borra el código fuente", "Se toma una imagen clara y se le añade ruido gaussiano progresivamente paso a paso hasta que queda solo ruido estático", "Se le quita el ruido a una imagen", "Se cambia el color de la imagen a blanco y negro"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué debe aprender exactamente la Red Neuronal durante el entrenamiento de un modelo de difusión?", "options": ["A aprender vocabulario", "A predecir y restar el ruido añadido en el paso anterior para 'limpiar' la imagen gradualmente", "A clasificar si es un perro o un gato", "A generar sonido"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué tipo de arquitectura de red neuronal se usa clásicamente como el motor interno para limpiar el ruido en estos modelos?", "options": ["K-Means", "Arquitectura U-Net (una red que reduce y luego amplía la resolución conectando capas)", "Random Forest", "Naive Bayes"], "correctAnswer": 1 },
      { "id": 5, "question": "¿De dónde parte el modelo de difusión cuando le pides que genere una imagen nueva desde cero?", "options": ["De una foto tuya de perfil", "De un lienzo 100% blanco", "De un tensor lleno de puro ruido estático aleatorio", "De una base de datos SQL"], "correctAnswer": 2 },
      { "id": 6, "question": "¿Cómo sabe el modelo de difusión qué forma debe esculpir a partir del ruido (ej. 'Un gato azul')?", "options": ["Adivina al azar", "El proceso de eliminación de ruido está condicionado (guiado) por el texto introducido, usualmente usando Embeddings de Transformers (como CLIP)", "Busca la imagen en Google", "El programador se lo dicta en binario"], "correctAnswer": 1 },
      { "id": 7, "question": "Comparados con las GANs, ¿cuál es una desventaja de los Modelos de Difusión?", "options": ["Son muy inestables", "Generan imágenes en muy baja resolución", "Son computacionalmente mucho más lentos para generar una imagen porque requieren decenas o cientos de pasos iterativos", "No entienden texto"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-12",
    "title": "4.12: Deep Reinforcement Learning (RL)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Diferenciar el Aprendizaje por Refuerzo de otros paradigmas.</li><li>Entender la interacción entre el Agente, el Entorno, las Acciones y las Recompensas.</li><li>Conocer el concepto de Q-Learning profundo (DQN).</li></ul>",
    "content": `
      <h3>1. El Paradigma de las Recompensas</h3>
      <p>El Aprendizaje por Refuerzo (RL) no usa datos etiquetados. En su lugar, un <strong>Agente</strong> (nuestra IA) observa el estado de un <strong>Entorno</strong> (ej. una pantalla de Super Mario) y decide tomar una <strong>Acción</strong> (ej. saltar). Como resultado, el entorno cambia y le devuelve una <strong>Recompensa</strong> (positiva si gana puntos, negativa si muere).</p>
      <p>El objetivo de la red neuronal no es predecir una clase, sino aprender una <em>Política (Policy)</em> que maximice la recompensa total a largo plazo.</p>
      
      <h3>2. Deep Q-Networks (DQN)</h3>
      <p>En 2013, DeepMind revolucionó el campo al combinar Redes Neuronales Profundas con Q-Learning clásico. En un juego de Atari, el número de estados posibles es astronómico. Usaron una CNN que miraba directamente los píxeles de la pantalla del juego y predecía el "Q-Value" (el valor esperado de la recompensa futura) para cada posible botón del joystick.</p>
      
      <h3>3. Exploración vs Explotación</h3>
      <p>El dilema clásico en RL. Si el agente encuentra que saltar le da 10 puntos, puede quedarse saltando para siempre (Explotación). Pero si nunca decide caminar hacia adelante (Exploración) nunca descubrirá la meta que le da 10,000 puntos. Por eso, al principio del entrenamiento el agente actúa casi 100% al azar para explorar el mapa.</p>
    `,
    "practical": `
      <h3>El Bucle Básico de Reinforcement Learning</h3>
      <pre><code class="language-python"># Pseudocódigo de un ciclo de interacción en Gym (OpenAI)
import gym

entorno = gym.make("CartPole-v1")
estado_actual = entorno.reset()

for paso in range(1000):
    entorno.render() # Mostrar en pantalla
    
    # El agente neuronal mira el estado y decide qué acción tomar
    accion = agente_neuronal.elegir_accion(estado_actual)
    
    # El entorno procesa la acción y devuelve el resultado
    nuevo_estado, recompensa, terminado, info = entorno.step(accion)
    
    # El agente aprende de las consecuencias de sus actos
    agente_neuronal.aprender(estado_actual, accion, recompensa, nuevo_estado)
    
    estado_actual = nuevo_estado
    if terminado:
        break
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Busca información sobre el algoritmo AlphaGo de DeepMind. ¿Cómo combinó el Aprendizaje por Refuerzo con el Método de Búsqueda de Árbol Monte Carlo (MCTS) para derrotar al campeón mundial de Go?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿En qué se diferencia el Aprendizaje por Refuerzo (RL) del Aprendizaje Supervisado?", "options": ["No requiere matemáticas", "En RL no hay datos etiquetados; la IA aprende mediante ensayo y error interactuando con un entorno y recibiendo recompensas o castigos", "RL usa solo árboles de decisión", "RL siempre es más rápido"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuáles son los 4 elementos principales en un ciclo de Reinforcement Learning?", "options": ["Teclado, Mouse, Pantalla, PC", "Agente, Entorno, Acción y Recompensa", "Variables, Funciones, Clases, Objetos", "Peso, Sesgo, Gradiente, Error"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Cuál es el objetivo final de un Agente de RL?", "options": ["Minimizar el uso de RAM", "Aprender una 'Política' que le permita maximizar la suma de recompensas a largo plazo", "Clasificar imágenes como perros o gatos", "Terminar el entrenamiento rápido"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué innovación introdujo el algoritmo DQN (Deep Q-Network) en 2013?", "options": ["Que puede conectarse a internet", "Usar una Red Neuronal Profunda (CNN) para aproximar los valores de recompensa directamente desde los píxeles de la pantalla, en lugar de tablas matemáticas simples", "Que no requiere electricidad", "Que usa regresión lineal simple"], "correctAnswer": 1 },
      { "id": 5, "question": "¿A qué se refiere el dilema 'Exploración vs Explotación'?", "options": ["Saber si comprar o vender acciones", "El equilibrio entre elegir la mejor acción conocida hasta el momento (Explotar) y probar acciones nuevas al azar que podrían descubrir mejores recompensas (Explorar)", "Elegir entre Python o Java", "Un tipo de función de activación"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué librería estándar se usa en Python para simular entornos físicos y de videojuegos clásicos para entrenar agentes?", "options": ["Pandas", "Matplotlib", "OpenAI Gym (ahora Gymnasium)", "BeautifulSoup"], "correctAnswer": 2 },
      { "id": 7, "question": "En juegos de estrategia complejos como Ajedrez o Go, ¿por qué el aprendizaje por refuerzo tradicional no basta por sí solo?", "options": ["Porque el tablero es muy grande", "Porque el espacio de estados posibles es mayor que los átomos del universo, por lo que se requiere inteligencia artificial de búsqueda (MCTS) combinada con la red neuronal", "Porque las reglas cambian", "Porque la computadora se sobrecalienta"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-13",
    "title": "4.13: Hardware para IA: GPUs, TPUs y Edge Computing",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Comprender por qué el Deep Learning requiere aceleradores de hardware especializados.</li><li>Conocer las diferencias arquitectónicas entre CPU, GPU y TPU.</li><li>Introducir el concepto de Edge AI (IA en dispositivos móviles e IoT).</li></ul>",
    "content": `
      <h3>1. El Cuello de Botella de la CPU</h3>
      <p>Una CPU moderna (como un Intel Core i9) es un generalista excepcional. Tiene pocos núcleos (8-24) que son increíblemente rápidos ejecutando instrucciones complejas secuenciales (como un sistema operativo). Sin embargo, una red neuronal requiere realizar millones de sumas y multiplicaciones matriciales extremadamente simples, pero de forma simultánea. Usar una CPU para esto es como usar a 8 genios matemáticos para pintar un mural gigante píxel por píxel.</p>
      
      <h3>2. La Revolución de la GPU y TPU</h3>
      <ul>
        <li><strong>GPU (Graphics Processing Unit):</strong> Una GPU de NVIDIA tiene miles de núcleos pequeños (ej. 10,000 núcleos CUDA). Son "tontos" para tareas complejas, pero excelentes para pintar millones de píxeles al mismo tiempo. Resultó que la matemática 3D de los videojuegos es exactamente la misma matemática de las matrices en Deep Learning.</li>
        <li><strong>TPU (Tensor Processing Unit):</strong> Un chip ASIC creado por Google específicamente para ejecutar TensorFlow. Mientras la GPU es flexible, la TPU hace literalmente solo una cosa en hardware puro: multiplicaciones matriciales de tensores a una velocidad absurdamente superior.</li>
      </ul>

      <h3>3. Edge AI (IA en el Borde)</h3>
      <p>Entrenar modelos requiere la nube y supercomputadoras. Pero, ¿qué pasa cuando queremos que nuestro smartphone reconozca nuestra cara, o un coche frene solo? No podemos depender de la latencia de enviar la foto a internet. <strong>Edge Computing</strong> implica "cuantizar" y comprimir el modelo de red profunda entrenado para que quepa en un chip minúsculo de bajo consumo que corre localmente en el dispositivo en tiempo real sin internet.</p>
    `,
    "practical": `
      <h3>Verificando el Hardware en TensorFlow</h3>
      <p>Es el paso 0 de cualquier Data Scientist antes de entrenar un modelo masivo.</p>
      <pre><code class="language-python">import tensorflow as tf

# Listar dispositivos físicos detectados
dispositivos_gpu = tf.config.list_physical_devices('GPU')

if len(dispositivos_gpu) > 0:
    print(f"¡Excelente! Se detectaron {len(dispositivos_gpu)} GPU(s) disponibles.")
    for gpu in dispositivos_gpu:
        print("Nombre:", gpu.name)
else:
    print("Advertencia: No se detectó GPU. TensorFlow está corriendo en CPU.")
    print("El entrenamiento de Deep Learning será extremadamente lento.")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga qué es la 'Cuantización' (Quantization) de modelos de Deep Learning (ej. de Float32 a Int8). ¿Por qué es obligatoria para desplegar un modelo en un smartwatch o cámara de seguridad?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué las CPUs tradicionales son deficientes para entrenar redes neuronales profundas?", "options": ["Porque son muy antiguas", "Porque tienen pocos núcleos muy rápidos diseñados para procesamiento secuencial y complejo, no para realizar miles de multiplicaciones matriciales simples simultáneamente", "Porque se calientan mucho", "Porque no soportan Python"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué arquitectura hace que las GPUs (Tarjetas Gráficas) sean perfectas para Deep Learning?", "options": ["Su conexión a monitores 4K", "Su memoria RAM estándar", "Tienen miles de núcleos paralelos diseñados para cálculo matricial (como los cálculos de píxeles 3D de los videojuegos)", "Que son de marca NVIDIA"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Qué significa TPU?", "options": ["Total Processing Unit", "Tensor Processing Unit", "Time Parameter Usage", "Text Parser Unit"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Quién diseñó y opera las TPUs principales de la industria?", "options": ["Microsoft", "Intel", "Google, optimizándolas específicamente a nivel de hardware para ejecutar las operaciones tensoriales de TensorFlow", "AMD"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Qué significa 'Edge AI' o Edge Computing en Inteligencia Artificial?", "options": ["Una IA que está al borde de la quiebra", "Correr algoritmos de IA en servidores enormes en la nube", "Ejecutar la Inferencia del modelo de IA directamente en el dispositivo local del usuario (smartphone, coche, cámara) sin requerir internet, garantizando baja latencia y privacidad", "Programar en Microsoft Edge"], "correctAnswer": 2 },
      { "id": 6, "question": "¿Qué es la 'Cuantización' (Quantization) de un modelo?", "options": ["Multiplicar su tamaño", "Una técnica para comprimir el tamaño del modelo en disco convirtiendo los pesos decimales de 32 bits a enteros de 8 bits, perdiendo un mínimo de precisión pero ganando mucha velocidad", "Un modelo de física cuántica", "Contar cuántas capas tiene la red"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué devuelve 'tf.config.list_physical_devices('GPU')' en TensorFlow?", "options": ["Un error del sistema operativo", "Borra las variables", "Lista las tarjetas gráficas (GPUs) detectadas en tu computadora que el framework puede usar para acelerar matemáticamente el entrenamiento", "Descarga drivers"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-14",
    "title": "4.14: Ética y Sesgos en Deep Learning",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Reconocer que los modelos matemáticos no son neutrales, heredan los sesgos humanos.</li><li>Entender los conceptos de Privacidad, Explicabilidad (XAI) y Responsabilidad.</li><li>Conocer casos reales donde algoritmos profundos fallaron éticamente.</li></ul>",
    "content": `
      <h3>1. Las Redes Neuronales no son Objetivas</h3>
      <p>Existe el mito de que como la IA es matemática pura, es 100% justa e imparcial. Esto es falso. El Machine Learning funciona como un espejo estadístico de nuestra sociedad. Si el <em>Dataset</em> de entrenamiento tiene sesgos históricos o prejuicios humanos (racismo, sexismo), la red neuronal no solo los aprenderá, sino que a menudo los amplificará.</p>

      <h3>2. Casos de Estudio de Sesgos (Bias)</h3>
      <ul>
        <li><strong>Sistemas de Contratación:</strong> Una empresa tecnológica entrenó un algoritmo con los currículums de los últimos 10 años para automatizar contrataciones. Como el 80% de los empleados históricos eran hombres, la IA aprendió matemáticamente que "ser mujer" o usar palabras asociadas a mujeres era un rasgo negativo para el puesto, descartándolas automáticamente.</li>
        <li><strong>Reconocimiento Facial:</strong> Sistemas entrenados abrumadoramente con rostros de personas de piel clara han mostrado altas tasas de falsos positivos en personas de piel oscura, resultando en arrestos injustificados.</li>
      </ul>

      <h3>3. Explainable AI (XAI) - Inteligencia Artificial Explicable</h3>
      <p>Las redes profundas (como las de 100 capas o los Transformers) son "Cajas Negras". Sabemos qué entró y qué salió, pero no <em>por qué</em> tomó esa decisión. En medicina o leyes, decirle a alguien "Tienes una enfermedad incurable porque la matriz multiplicó por 0.8" no es ético ni legal. XAI busca desarrollar técnicas para que la red nos "explique" visual o estadísticamente en qué se fijó para decidir.</p>
    `,
    "practical": `
      <h3>Auditoría Básica de Datos</h3>
      <p>Antes de entrenar un modelo, la ética exige revisar la representatividad estadística del Dataset.</p>
      <pre><code class="language-python">import pandas as pd

# Cargar dataset de clientes para evaluación de créditos
df = pd.read_csv('datos_creditos.csv')

# Verificar el balance de la clase objetivo
print("Balance de Aprobación:\\n", df['Aprobado'].value_counts(normalize=True))

# Verificar representación demográfica (Riesgo de sesgo)
print("\\nRepresentación por Género:\\n", df['Genero'].value_counts(normalize=True))

# ¡Peligro! Si el 90% de los aprobados históricamente pertenecen a una raza o género,
# el modelo aprenderá que esas características (protegidas por la ley) son la causa de ser un 'buen cliente'.
# Solución: Eliminar variables sensibles antes de entrenar, re-balancear pesos o usar algoritmos de 'Fairness'.
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el concepto de 'Data Poisoning' (Envenenamiento de Datos) en Ciberseguridad de IA. ¿Cómo podría un atacante modificar imperceptiblemente los datos de entrenamiento para que un coche autónomo confunda una señal de STOP con un límite de velocidad?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Es cierto que los algoritmos de Inteligencia Artificial son 100% justos y neutrales porque usan matemáticas frías?", "options": ["Sí, la matemática no miente", "No, los modelos de IA son espejos estadísticos y aprenden los sesgos y prejuicios que existen en los datos históricos creados por humanos", "Sí, siempre son mejores que los jueces", "Depende del lenguaje de programación"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué ocurrió en el famoso caso del algoritmo de reclutamiento que discriminaba mujeres?", "options": ["El código tenía un virus", "El algoritmo fue entrenado con datos históricos donde los hombres dominaban los puestos, por lo que la IA correlacionó el éxito estadístico con ser hombre", "El modelo fue hackeado por la competencia", "Las mujeres no aplicaban al trabajo"], "correctAnswer": 1 },
      { "id": 3, "question": "En el contexto de la IA, ¿qué es un modelo de 'Caja Negra' (Black Box)?", "options": ["Un modelo pintado de negro", "Un modelo que da predicciones muy exactas pero cuyas decisiones internas son matemáticamente tan complejas que los humanos no pueden entender el 'por qué' tomó esa decisión", "Un modelo que guarda la información de los vuelos aéreos", "Un modelo que no funciona"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué campo de estudio busca solucionar el problema de las Cajas Negras?", "options": ["Criptografía", "Ingeniería de Software", "XAI (Explainable Artificial Intelligence / IA Explicable)", "Computación Cuántica"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Por qué la 'Explicabilidad' es legalmente crítica en sectores como la salud o los seguros?", "options": ["Para cobrar más", "Porque en decisiones de alto impacto humano (negar una hipoteca, diagnósticos graves), la ley y la ética exigen que el usuario sepa por qué fue rechazado o diagnosticado", "Para poder hacer gráficos bonitos", "No es crítica, a nadie le importa"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué debes hacer éticamente si en tu dataset descubres que el 90% de tus imágenes médicas provienen de pacientes de un solo país o etnia?", "options": ["Entrenar el modelo igual, no pasa nada", "Reconocer que el modelo no generalizará bien para otras etnias, reportar este límite e intentar balancear el dataset recopilando datos más diversos", "Borrar todas las imágenes", "Cambiarles el color con Photoshop"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué es el 'Data Poisoning' (Envenenamiento de datos)?", "options": ["Darle comida en mal estado al programador", "Un ataque cibernético donde un hacker inyecta sutilmente datos falsos o manipulados en el set de entrenamiento para corromper la lógica futura del modelo de IA", "Derramar líquidos sobre el servidor", "Una técnica de compresión de archivos ZIP"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-15",
    "title": "4.15: Proyecto Integrador - Clasificación de Imágenes y Transfer Learning",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Integrar los conocimientos del módulo para resolver un problema complejo de visión.</li><li>Aplicar técnicas de preprocesamiento de imágenes (Data Augmentation).</li><li>Ajustar una arquitectura profunda utilizando Keras y Transfer Learning.</li></ul>",
    "content": `
      <h3>1. Definición del Proyecto Final</h3>
      <p>Has sido contratado por una clínica veterinaria. Necesitan un sistema automatizado capaz de distinguir en radiografías si los pulmones de un paciente están sanos o si presentan neumonía. Dado que las radiografías médicas son escasas, no tienes los millones de imágenes necesarias para entrenar una red profunda desde cero.</p>

      <h3>2. La Estrategia: Transfer Learning y Aumento de Datos</h3>
      <ul>
        <li><strong>Paso 1:</strong> Descargar una arquitectura pre-entrenada (ej. VGG16 o ResNet50) que ya 'sabe ver' bordes y texturas generales.</li>
        <li><strong>Paso 2:</strong> Congelar sus pesos iniciales.</li>
        <li><strong>Paso 3:</strong> Como tienes pocas imágenes, aplicarás <em>Data Augmentation</em>: rotarás, harás zoom y voltearás ligeramente tus radiografías existentes en tiempo de ejecución para 'multiplicar' artificialmente tu dataset y evitar el overfitting.</li>
        <li><strong>Paso 4:</strong> Añadirás una capa final densa (Sigmoide) y entrenarás la red durante algunas épocas.</li>
        <li><strong>Paso 5:</strong> Evaluarás el modelo, poniendo especial atención a maximizar el <strong>Recall (Sensibilidad)</strong>, ya que un falso negativo (decir que está sano cuando tiene neumonía) podría ser fatal.</li>
      </ul>
    `,
    "practical": `
      <h3>Pipeline de Data Augmentation en Keras</h3>
      <p>Este código no entrena la red, pero demuestra cómo multiplicar y diversificar tus datos antes de alimentarlos al modelo de forma eficiente.</p>
      <pre><code class="language-python">import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Creamos un generador que alterará las imágenes aleatoriamente
# Esto previene enormemente el Overfitting en redes profundas
generador_entrenamiento = ImageDataGenerator(
    rescale=1./255,             # Normalizamos los píxeles de 0-255 a 0-1
    rotation_range=15,          # Rota la imagen aleatoriamente hasta 15 grados
    width_shift_range=0.1,      # Desplaza la imagen horizontalmente un 10%
    height_shift_range=0.1,     # Desplaza la imagen verticalmente un 10%
    zoom_range=0.1,             # Aplica zoom aleatorio de 10%
    horizontal_flip=False       # No volteamos horizontalmente (en radiografías el corazón tiene un lado)
)

# Cargamos directamente desde una carpeta en el disco duro
# sin necesidad de cargar todos los gigabytes a la memoria RAM de golpe
train_data = generador_entrenamiento.flow_from_directory(
    'dataset_radiografias/train',
    target_size=(224, 224),     # Redimensiona todo a 224x224
    batch_size=32,
    class_mode='binary'         # Clasificación binaria (Sano vs Neumonía)
)

print("Datos listos para model.fit(train_data)")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Una vez entrenado el modelo, este arroja una predicción de `0.30`. Si decides cambiar el umbral de decisión (threshold) del tradicional `0.50` a `0.20`, ¿qué pasará con los falsos positivos y los falsos negativos de tu sistema veterinario?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "En el proyecto de diagnóstico médico con pocas imágenes, ¿por qué NO debes entrenar una red CNN de 50 capas desde cero?", "options": ["Porque es ilegal", "Porque la red memorizará instantáneamente las pocas imágenes (Overfitting brutal) y no podrá generalizar. Se necesita Transfer Learning.", "Porque el código será muy largo", "Porque las radiografías son en blanco y negro"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué técnica permite generar versiones nuevas de nuestras imágenes (rotadas, con zoom) durante el entrenamiento para multiplicar artificialmente la cantidad de datos?", "options": ["Data Destruction", "Data Duplication en Windows", "Data Augmentation (Aumento de Datos)", "Data Extraction"], "correctAnswer": 2 },
      { "id": 3, "question": "En el contexto médico de detectar neumonía (enfermedad grave), ¿qué error es preferible cometer éticamente?", "options": ["Un Falso Positivo (asustar a un paciente sano con posibles estudios extra)", "Un Falso Negativo (decirle a un paciente con neumonía grave que está sano y se vaya a casa)", "Borrar la base de datos", "Cualquier error es igual"], "correctAnswer": 0 },
      { "id": 4, "question": "Debido a tu respuesta anterior, ¿qué métrica estadística debes enfocarte en maximizar durante este proyecto?", "options": ["Precisión (Precision)", "Sensibilidad o Recall (para evitar falsos negativos a toda costa)", "Accuracy General", "El Error Absoluto Medio"], "correctAnswer": 1 },
      { "id": 5, "question": "En Data Augmentation para radiografías, ¿por qué se deshabilitó el 'horizontal_flip=False' (volteo espejo)?", "options": ["Por error del programador", "Porque voltear los pulmones pondría el corazón del lado derecho, creando anatomías anómalas que destruirían el aprendizaje del modelo", "Porque la computadora se ralentiza", "Porque las fotos pierden color"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué hace el parámetro 'rescale=1./255' en el ImageDataGenerator?", "options": ["Añade color rojo", "Normaliza matemáticamente los valores de los píxeles de la imagen (de 0-255 a un rango de 0.0 a 1.0) para que la red neuronal converja mucho más rápido", "Convierte las imágenes a formato PNG", "Borra el 255% de la imagen"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué ventaja técnica brutal ofrece la función 'flow_from_directory' de Keras?", "options": ["Te regala almacenamiento en la nube", "Permite leer las imágenes en pequeños lotes desde el disco duro en tiempo real, evitando saturar la memoria RAM de la computadora si tienes 500GB de fotos", "Traduce el código automáticamente a Java", "Hace que tu monitor sea de mayor resolución"], "correctAnswer": 1 }
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
console.log('Successfully created/updated sessions 4.11 to 4.15');
