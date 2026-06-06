import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "4-26",
    "title": "4.26: MLOps (Machine Learning Operations)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Diferenciar el entorno de laboratorio (Jupyter) del entorno de Producción.</li><li>Comprender el concepto de MLOps y el ciclo de vida continuo.</li><li>Conocer herramientas de tracking como MLflow y Weights & Biases.</li></ul>",
    "content": `
      <h3>1. El Abismo entre Jupyter y Producción</h3>
      <p>Entrenar un modelo espectacular en un cuaderno Jupyter y guardarlo en un archivo \`.h5\` o \`.pkl\` es apenas el 10% del trabajo en el mundo real. ¿Qué pasa si el desarrollador se va de la empresa? ¿Cómo sabemos qué hiperparámetros usó? ¿Qué pasa si la librería de Python se actualiza y rompe el código? Este caos motivó el nacimiento de <strong>MLOps</strong>.</p>
      
      <h3>2. ¿Qué es MLOps?</h3>
      <p>Es la unión entre Machine Learning, Data Engineering y DevOps. Es un conjunto de prácticas de ingeniería para desplegar y mantener modelos de IA de forma confiable y eficiente. Su núcleo es la automatización: si los datos cambian, el sistema debe saber extraer datos nuevos, reentrenar el modelo, pasar tests automáticos y desplegarlo sin intervención humana (CI/CD para IA).</p>

      <h3>3. Seguimiento de Experimentos (Experiment Tracking)</h3>
      <p>Cuando entrenas cientos de modelos buscando la mejor arquitectura, llevar un Excel manual es inviable. Herramientas estándar de MLOps como <strong>MLflow</strong> o <strong>Weights & Biases (W&B)</strong> actúan como la "caja negra" de tu investigación. Graban automáticamente en un servidor cada línea de código, cada métrica de pérdida, y cada gráfico generado durante el entrenamiento para que sea 100% reproducible años después.</p>
    `,
    "practical": `
      <h3>Tracking con MLflow en Python</h3>
      <pre><code class="language-python">import mlflow
import mlflow.keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Iniciamos el "grabador" de MLflow
with mlflow.start_run():
    # 1. Loggeamos los hiperparámetros para no olvidarlos
    epocas = 10
    mlflow.log_param("epochs", epocas)
    mlflow.log_param("optimizer", "adam")
    
    # 2. Creamos y entrenamos el modelo
    modelo = Sequential([Dense(32, activation='relu'), Dense(1, activation='sigmoid')])
    modelo.compile(optimizer='adam', loss='binary_crossentropy')
    
    # Supongamos que entrenamos aquí
    accuracy_final = 0.95 
    
    # 3. Loggeamos la métrica de éxito
    mlflow.log_metric("accuracy", accuracy_final)
    
    # 4. MLflow guarda el modelo entero (pesos, arquitectura y dependencias) en su servidor
    mlflow.keras.log_model(modelo, "modelo_clasificador")

print("Experimento guardado. Puedes verlo en la interfaz web de MLflow.")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el concepto de 'Docker' en el contexto de MLOps. ¿Por qué se dice que poner tu modelo dentro de un <em>Contenedor Docker</em> elimina para siempre la excusa del programador: <em>'En mi computadora sí funciona'</em>?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué porcentaje del esfuerzo en un proyecto real de IA se estima que es crear el modelo predictivo (código en Jupyter)?", "options": ["99%", "Cerca del 10% al 20%; el resto es infraestructura, limpieza de datos, despliegue y monitoreo", "100%", "0%"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué significan las siglas MLOps?", "options": ["Multi-Layer Operations", "Machine Learning Operations (Operaciones de Machine Learning)", "Model Loading Options", "Machine Learning Operators"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Cuál es uno de los objetivos principales de implementar MLOps en una empresa?", "options": ["Hacer que los modelos sean más bonitos", "Garantizar que el ciclo de vida del modelo (entrenamiento, pruebas, despliegue y actualización) sea automático, confiable y 100% reproducible", "Que el código se borre solo", "Evitar pagar servidores"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Para qué sirve una herramienta de 'Experiment Tracking' (como MLflow o Weights & Biases)?", "options": ["Para espiar a los empleados", "Para registrar automáticamente todos los hiperparámetros, métricas, código y versiones de librerías de cada entrenamiento, reemplazando el registro manual", "Para descargar películas", "Para acelerar la CPU"], "correctAnswer": 1 },
      { "id": 5, "question": "En MLOps, ¿qué significa CI/CD (Continuous Integration / Continuous Deployment)?", "options": ["Copia Incompleta / Código Descartado", "La automatización de integrar código nuevo al repositorio, pasar pruebas automáticas y desplegar la IA a producción sin requerir humanos apagando servidores", "Comprimir Información / Conexión Directa", "Comando Interno / Comando Dinámico"], "correctAnswer": 1 },
      { "id": 6, "question": "Si un Data Scientist abandona la empresa, ¿por qué MLflow te salvaría la vida?", "options": ["Porque contiene su currículum", "Porque MLflow guardó automáticamente la arquitectura, los pesos, los datos exactos y las versiones de Python (requirements.txt) para reproducir su modelo en 1 clic", "Porque borra los errores", "No sirve de nada"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué problema fundamental soluciona Docker al desplegar un modelo de Deep Learning?", "options": ["Paga la nube", "Empaqueta tu modelo, tu código y tu sistema operativo con todas las librerías exactas en un 'Contenedor' aislado. Si funciona en ese contenedor, funcionará en cualquier servidor del mundo", "Cambia el lenguaje de programación", "Aumenta la memoria RAM físicamente"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-27",
    "title": "4.27: Despliegue de Modelos mediante APIs REST (FastAPI)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Entender la arquitectura Cliente-Servidor en Machine Learning.</li><li>Aprender qué es una API REST y por qué la usamos para IA.</li><li>Desplegar un modelo real localmente usando FastAPI.</li></ul>",
    "content": `
      <h3>1. ¿Cómo consume el mundo tu modelo?</h3>
      <p>Tu modelo entrenado \`modelo.h5\` no puede ser usado directamente por la App móvil en iOS de tu cliente, ni por la página web en React. La solución estándar en la industria de software es empaquetar el modelo detrás de una <strong>API REST</strong>.</p>
      
      <h3>2. La Arquitectura de una API de IA</h3>
      <p>El servidor es una computadora gigante con GPU que tiene Python, Keras y el modelo cargado en memoria. Cuando el usuario usa su app de celular para pedir un préstamo, la app manda los datos del usuario por internet en formato JSON (un mensaje ligero) hacia el Servidor. El servidor recibe el JSON, lo transforma en un Tensor, lo pasa por el modelo predictivo, y devuelve la respuesta en otro JSON: <em>{"aprobado": true, "probabilidad": 0.95}</em>.</p>

      <h3>3. Flask vs FastAPI</h3>
      <p>Históricamente, la librería <em>Flask</em> dominaba este campo en Python. Hoy en día, <strong>FastAPI</strong> es el estándar moderno absoluto. Es asincrónico (puede procesar miles de peticiones simultáneas muy rápido) y, sorprendentemente, genera la documentación de la API de manera automática e interactiva (Swagger UI).</p>
    `,
    "practical": `
      <h3>Levantando un Servidor de IA en FastAPI</h3>
      <pre><code class="language-python"># pip install fastapi uvicorn tensorflow
from fastapi import FastAPI
from pydantic import BaseModel
import tensorflow as tf

# Creamos la aplicación servidor
app = FastAPI()

# Supongamos que ya tenemos un modelo entrenado guardado
modelo = tf.keras.models.load_model('mi_modelo_bancario.h5')

# Definimos cómo luce la estructura JSON que esperamos recibir
class Cliente(BaseModel):
    ingresos: float
    edad: int
    deudas: float

# Creamos el 'Endpoint' (La URL donde recibiremos las peticiones POST)
@app.post("/predecir")
def predecir_aprobacion(datos: Cliente):
    # Convertimos los datos del JSON a un Tensor que Keras entienda
    tensor_entrada = [[datos.ingresos, datos.edad, datos.deudas]]
    
    # El modelo hace su magia
    prediccion = modelo.predict(tensor_entrada)
    
    # Respondemos al cliente
    aprobado = bool(prediccion[0][0] > 0.5)
    return {"aprobado": aprobado, "score_confianza": float(prediccion[0][0])}

# Para encender el servidor en la consola escribiríamos:
# uvicorn archivo:app --reload
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Al procesar imágenes masivas, enviar fotos por JSON no es eficiente (requiere Base64). Investiga qué es el <code>FileResponse</code> o envío de archivos <code>UploadFile</code> mediante peticiones <em>Multipart/Form-Data</em> en FastAPI para que los usuarios puedan subir fotos a tu IA.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué no mandamos el archivo del modelo (ej. modelo.h5) directamente al celular del cliente para que lo corra?", "options": ["Porque los archivos pesan cientos de Megabytes, consumirían la batería del cliente y expondríamos nuestra propiedad intelectual al público", "Porque es imposible en iOS", "Porque la nube es aburrida", "Porque los modelos no pueden ser copiados"], "correctAnswer": 0 },
      { "id": 2, "question": "¿Qué es una API REST en el contexto de IA?", "options": ["Un código de descanso", "Una interfaz puente por internet; el cliente envía datos (JSON) al servidor, el servidor los procesa con su GPU poderosa y devuelve solo el resultado", "Un virus de Python", "Una red neuronal recurrente"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué formato de texto ligero y universal es el estándar para enviar y recibir datos en una API REST moderna?", "options": ["XML", "CSV", "JSON (JavaScript Object Notation)", "TXT"], "correctAnswer": 2 },
      { "id": 4, "question": "¿Por qué FastAPI ha desplazado enormemente a Flask en el ecosistema moderno de Python para IA?", "options": ["Porque tiene un logo más bonito", "Porque es nativamente asíncrono (procesa miles de peticiones sin bloquearse), usa validación de tipos estricta y genera documentación Swagger automática", "Porque es el único que acepta matemáticas", "Porque Flask fue borrado"], "correctAnswer": 1 },
      { "id": 5, "question": "En el código, ¿para qué sirve la clase 'Cliente(BaseModel)' usando Pydantic?", "options": ["Para nada", "Valida matemáticamente que si el usuario debía mandar su 'edad' como número (int), la API rechace la petición automáticamente si el usuario envía texto, evitando que el modelo de IA crashee", "Para conectarse a la base de datos SQL", "Para imprimir colores"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué método HTTP se usa generalmente para enviar datos confidenciales (como características de un paciente o una foto) al servidor para que este genere una predicción?", "options": ["GET", "POST", "DELETE", "PATCH"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Cómo se prueba manualmente una API creada con FastAPI sin necesidad de escribir código cliente?", "options": ["No se puede probar", "Escribiendo correos electrónicos", "Yendo a la ruta oculta '/docs' en el navegador, donde FastAPI genera una interfaz interactiva Swagger para probar botones visualmente", "Conectando una memoria USB"], "correctAnswer": 2 }
    ]
  },
  {
    "id": "4-28",
    "title": "4.28: Deep Learning en el Navegador (TensorFlow.js)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Descubrir cómo la IA puede ejecutarse en el lado del cliente (Frontend).</li><li>Conocer las ventajas de TensorFlow.js respecto a servidores API.</li><li>Aprender los beneficios críticos de privacidad y latencia en el navegador.</li></ul>",
    "content": `
      <h3>1. El Paradigma Client-Side (IA en el Navegador)</h3>
      <p>Aunque vimos que usar servidores y APIs es el estándar, tiene un costo: mantener un servidor cuesta mucho dinero, y si 10,000 usuarios suben fotos al mismo tiempo, el servidor colapsará. En 2018, Google lanzó <strong>TensorFlow.js</strong>, permitiendo que las Redes Neuronales se ejecuten ¡directamente en el navegador web del usuario (Chrome, Safari, Edge) usando JavaScript!</p>
      
      <h3>2. ¿Cómo es esto computacionalmente posible?</h3>
      <p>TensorFlow.js se comunica directamente con la Tarjeta Gráfica (GPU) de la computadora portátil o el teléfono inteligente del usuario final a través de la tecnología <em>WebGL</em> o el moderno <em>WebGPU</em>. Esto permite hacer cálculos matriciales súper rápidos en la máquina de la persona que visita tu página web.</p>

      <h3>3. Ventajas Insuperables</h3>
      <ul>
        <li><strong>Privacidad Absoluta:</strong> Si haces una web de diagnóstico médico, la foto íntima del paciente nunca viaja por internet hacia un servidor; la IA la procesa localmente en su propia PC y la borra.</li>
        <li><strong>Costo de Servidor $0:</strong> Como los usuarios usan sus propios teléfonos para calcular las matemáticas, puedes tener 1 millón de usuarios y pagar 0 dólares en procesamiento cloud.</li>
        <li><strong>Latencia Cero (Tiempo Real):</strong> Para filtros interactivos (como los de Instagram) o detectar gestos en webcam a 60 FPS, enviar video al servidor por internet tiene mucho retraso. Hacerlo en el navegador es instantáneo.</li>
      </ul>
    `,
    "practical": `
      <h3>Cargando un Modelo Pre-Entrenado en HTML/JS</h3>
      <p>Para esto, primero convertimos nuestro modelo Python a formato TFJS. Luego, la página web lo descarga y lo ejecuta.</p>
      <pre><code class="language-html">&lt;!-- Importar TensorFlow.js desde la nube --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"&gt;&lt;/script&gt;

&lt;script&gt;
// Código JavaScript en tu página web
async function iniciarIA() {
    console.log("Descargando modelo al navegador del usuario...");
    
    // Carga un modelo que previamente convertimos desde Python
    const modelo = await tf.loadLayersModel('https://misitio.com/modelo_web/model.json');
    
    console.log("¡Modelo Listo! Ejecutando en tu PC local.");
    
    // Creamos un tensor falso de prueba
    const entrada = tf.tensor2d([[5.0, 3.2, 1.1, 0.2]]);
    
    // Predecir
    const prediccion = modelo.predict(entrada);
    
    // Mostramos los resultados sin haber usado ningún servidor Backend!
    prediccion.print(); 
}

iniciarIA();
&lt;/script&gt;
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Visita el sitio oficial de ejemplos de TensorFlow.js (como 'Move Mirror' o 'PoseNet'). Analiza cómo la cámara web funciona en tiempo real y reflexiona: ¿Qué modelo de negocio o aplicación web revolucionaria podrías crear usando IA que garantice 100% de privacidad al usuario?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué tecnología permite correr redes neuronales masivas usando exclusivamente código JavaScript dentro de una página web?", "options": ["ReactJS", "Node.js Cloud", "TensorFlow.js (TFJS)", "jQuery"], "correctAnswer": 2 },
      { "id": 2, "question": "¿Cómo logra el navegador hacer las matemáticas matriciales tan rápido si JavaScript es un lenguaje lento?", "options": ["Porque engaña al usuario", "Porque utiliza WebGL o WebGPU para saltarse JavaScript y ejecutar operaciones matemáticas directamente en la Tarjeta Gráfica (GPU) del visitante", "Porque usa la batería del teléfono", "Porque la pantalla es táctil"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Cuál es la principal ventaja financiera de desplegar un modelo en el navegador (Client-Side) frente a una API (Server-Side)?", "options": ["Ganas dinero por anuncios", "El costo de procesamiento de servidores es 0, ya que los propios usuarios aportan la potencia de cálculo (hardware) de sus computadoras o celulares para ejecutar la IA", "No usas HTML", "Las empresas te pagan por código"], "correctAnswer": 1 },
      { "id": 4, "question": "Si estás desarrollando una IA que analiza historiales médicos confidenciales, ¿por qué TFJS es la mejor opción en cuanto a Privacidad?", "options": ["Porque los hackers no saben JavaScript", "Porque los datos íntimos (fotos, documentos) nunca viajan por internet hacia una base de datos externa; la IA los procesa y olvida dentro del propio equipo del paciente", "Porque los datos se encriptan", "Porque no se usan archivos"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Por qué los filtros faciales de Snapchat o Instagram no mandan tu video al servidor para ponerte orejas de perro?", "options": ["Porque el servidor se llenaría", "Por la Latencia (Lag). Mandar video 4K a un servidor y esperar la respuesta rompería la ilusión a 60 FPS. Procesar localmente da latencia cero.", "Porque es ilegal", "Porque la cámara no tiene internet"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Cuál es la principal DESVENTAJA de TensorFlow.js?", "options": ["Es muy caro", "Que si el modelo pesa 200 Megabytes, cada usuario que visite tu página web tendrá que descargar esos 200 MB, consumiendo sus datos y haciendo la carga lenta", "Que no detecta colores", "Que solo funciona en Internet Explorer"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Puedes entrenar modelos de IA (no solo predecir) en TensorFlow.js?", "options": ["Sí, TFJS soporta re-entrenamiento (como Transfer Learning) y backpropagation directamente en el navegador", "No, solo sirve para predecir", "Solo si pagas la versión premium", "Sí, pero se tarda 10 años"], "correctAnswer": 0 }
    ]
  },
  {
    "id": "4-29",
    "title": "4.29: Monitoreo en Producción (Data Drift y Concept Drift)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Reconocer que el despliegue de IA no es el fin del proyecto, es el principio.</li><li>Entender por qué los modelos 'se pudren' o degradan con el tiempo.</li><li>Aprender la diferencia crucial entre Data Drift y Concept Drift.</li></ul>",
    "content": `
      <h3>1. La Degradación Silenciosa</h3>
      <p>El código de software tradicional (una calculadora o un IF) no caduca. 2 + 2 siempre será 4. Sin embargo, los modelos de Machine Learning aprenden de los datos del "pasado". Dado que el mundo humano cambia constantemente (modas, economía, pandemias), el comportamiento que la IA aprendió ayer se vuelve obsoleto hoy. A esto se le llama la <strong>Degradación del Modelo</strong>.</p>
      
      <h3>2. Data Drift (Deriva de los Datos)</h3>
      <p>Ocurre cuando <strong>las características de entrada (X) cambian</strong>, pero las reglas del negocio no. Ejemplo: Entrenaste una red neuronal para analizar rayos X con imágenes de máquinas hospitalarias de baja resolución (1080p). Un año después, el hospital compra máquinas 4K y te envía imágenes gigantes o con un contraste azulado en vez de gris. El mundo físico (la distribución estadística de las imágenes de entrada) cambió. Tu IA colapsará por error de formato, aunque la anatomía humana de la neumonía siga siendo la misma.</p>

      <h3>3. Concept Drift (Deriva del Concepto)</h3>
      <p>Ocurre cuando <strong>la definición de la respuesta correcta (Y) cambia</strong>, aunque los datos sigan igual. Ejemplo: Entrenaste un sistema de detección de spam bancario en 2018. En 2024, los ataques de Phishing usan tácticas psicológicas completamente nuevas generadas por ChatGPT. Los emails (texto) siguen viéndose igual, pero la "regla" de lo que constituye un fraude ha mutado. Tu modelo debe ser re-entrenado urgentemente.</p>
    `,
    "practical": `
      <h3>¿Cómo solucionamos esto con MLOps?</h3>
      <p>No esperamos a que el cliente se queje. Configuramos "Monitoreo Continuo":</p>
      <ul>
        <li><strong>Alarma Estadística:</strong> Cada semana, comparamos la distribución (media/varianza) de las edades y salarios de los clientes nuevos contra los que usamos para entrenar. Si divergen más de un 5%, lanzamos una alarma de Data Drift.</li>
        <li><strong>Reentrenamiento Automático (CT - Continuous Training):</strong> Usamos herramientas como <em>Apache Airflow</em> o <em>Kubeflow</em> para que, si se detecta degradación, se dispare un script que extraiga la base de datos más reciente, reentrene la red neuronal durante la noche, pase los tests y reemplace al modelo viejo de forma invisible.</li>
      </ul>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Durante la pandemia de COVID-19 en 2020, casi todos los sistemas de Inteligencia Artificial bancaria y logística (predicción de compras y viajes) fallaron catastróficamente de un día para otro. ¿A cuál de los dos conceptos (Data Drift o Concept Drift) atribuyes este colapso monumental y por qué?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué se dice que el software clásico perdura, pero los modelos de Machine Learning 'caducan' o se degradan?", "options": ["Porque los servidores se apagan", "Porque los modelos de IA son mapas estadísticos del pasado. Cuando la realidad y el comportamiento humano cambian, las reglas que aprendió el modelo se vuelven obsoletas y sus predicciones fallan.", "Porque Python se actualiza", "Porque las matemáticas fallan"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es el 'Data Drift' (Deriva de Datos)?", "options": ["Cuando los discos duros se desconectan", "Cuando las propiedades estadísticas o el formato de los datos de entrada (X) cambian con el tiempo (ej. cambia el proveedor de sensores y ahora arrojan datos en Fahrenheit en vez de Celsius)", "Cuando se pierde información por internet", "Cuando el modelo de datos se encripta"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué es el 'Concept Drift' (Deriva del Concepto)?", "options": ["Olvidar qué modelo usaste", "Cuando las reglas del mundo o la definición de lo que intentas predecir cambian (ej. lo que antes se consideraba una 'compra normal' ahora se considera un comportamiento de fraude debido a nuevas modalidades de robo)", "Cuando cambias de framework a PyTorch", "Cuando el cliente cambia de idea"], "correctAnswer": 1 },
      { "id": 4, "question": "En el caso de un algoritmo que recomienda ropa de invierno que funciona perfecto en diciembre pero falla catastróficamente en agosto, ¿qué tipo de Drift predecible está ocurriendo?", "options": ["System Drift", "Concept Drift Estacional", "Database Drift", "Error de Sintaxis"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Cómo se previene el impacto negativo del Drift en las empresas modernas?", "options": ["Borrando la IA cada mes", "Con Monitoreo Continuo (Continuous Monitoring); vigilando las métricas en tiempo real y programando alarmas si las predicciones comienzan a desviarse del historial", "Despidiendo al Data Scientist", "Prohibiendo que los datos cambien"], "correctAnswer": 1 },
      { "id": 6, "question": "En el ciclo de MLOps, ¿qué significa CT (Continuous Training / Entrenamiento Continuo)?", "options": ["Correr en la caminadora", "Un pipeline automatizado que se activa al detectar degradación, el cual re-entrena automáticamente el modelo con los datos más frescos sin intervención manual", "Dejar la PC encendida por siempre", "Entrenar modelos infinitamente grandes"], "correctAnswer": 1 },
      { "id": 7, "question": "Si tu modelo de predicción de ventas empieza a fallar gradualmente después de 6 meses de ser desplegado, ¿qué es lo ético y profesional?", "options": ["Ocultarlo y culpar al usuario", "Analizar si ha habido Data o Concept Drift, limpiar los datos recientes, reentrenar una versión 2.0 y hacer un despliegue 'Shadow' o 'Canary' para evaluar que supera al modelo viejo de forma segura", "Culpar a la API", "Apagar el servidor definitivamente"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "4-30",
    "title": "4.30: Arquitectura End-to-End (El Proyecto Final de Módulo 4)",
    "meta": "Módulo 4: Deep Learning | Duración: 60 minutos",
    "objectives": "<ul><li>Consolidar todos los conocimientos adquiridos en las 29 sesiones anteriores.</li><li>Visualizar el ciclo de vida completo: desde los datos crudos hasta la inferencia en producción.</li><li>Evaluar críticamente las decisiones de arquitectura e infraestructura.</li></ul>",
    "content": `
      <h3>1. La Visión Panorámica (End-to-End)</h3>
      <p>Nadie te paga por hacer cuadernos Jupyter bonitos. La verdadera Ingeniería de IA (AI Engineering) consiste en unir todas las piezas del rompecabezas. Un sistema End-to-End significa abarcar absolutamente todo el flujo de valor: Recopilación de datos en la nube &rarr; Limpieza &rarr; Entrenamiento Distribuido en GPU &rarr; Guardado en MLflow &rarr; Exportación a ONNX &rarr; Despliegue en FastAPI/Docker &rarr; Monitoreo de Concept Drift en Grafana.</p>

      <h3>2. Caso de Estudio: IA de Inspección de Calidad</h3>
      <p>Imagina que diseñas una IA para la fábrica de Tesla que detecta rayones milimétricos en la pintura de los autos en la línea de ensamblaje:<br>
      - <strong>Los Datos:</strong> Usas una cámara IoT que envía imágenes al servidor central.<br>
      - <strong>El Modelo:</strong> Como son imágenes, eliges una <em>CNN (YOLO o Autoencoders de Anomalías)</em>.<br>
      - <strong>El Hardware:</strong> En el entrenamiento usaste la Nube (AWS/GCP) con 4 GPUs para procesar miles de gigabytes de fotos defectuosas. Pero en la fábrica local, instalarás una TPU pequeña (Edge Computing) para que el brazo robótico decida en 10 milisegundos sin latencia de internet.<br>
      - <strong>El Despliegue:</strong> El modelo correrá empaquetado en un <em>Contenedor Docker</em>, exponiendo una <em>API REST</em> para que el brazo robótico la consuma.</p>

      <h3>3. Conclusión del Módulo de Deep Learning</h3>
      <p>A lo largo de este módulo de élite has pasado de no entender un escalar a conocer la arquitectura Transformer detrás de ChatGPT, las GANs, la difusión de DALL-E, el hardware de NVIDIA y cómo conectar todo en la nube. Estás listo para el mundo real de la Inteligencia Artificial moderna.</p>
    `,
    "practical": `
      <h3>Checklist de Producción (Architectural Review)</h3>
      <p>Antes de lanzar tu IA al mercado, debes marcar todas estas casillas (Checklist):</p>
      <ul>
        <li>[ ] <strong>Datos:</strong> ¿Están preprocesados correctamente (normalización, limpios)? ¿Están libres de sesgos éticos (género, raza)?</li>
        <li>[ ] <strong>Modelo:</strong> ¿Usé la red neuronal adecuada (RNN para tiempo, CNN para imágenes, Transformers para texto complejo)?</li>
        <li>[ ] <strong>Hardware:</strong> ¿Tengo una GPU lista para el entrenamiento? ¿Entrené mi modelo usando Batch Normalization, ReLU y Dropout para evitar Overfitting?</li>
        <li>[ ] <strong>MLOps:</strong> ¿Guardé los hiperparámetros de esta versión (MLflow)? ¿El modelo final fue empaquetado y subido a un contenedor Docker?</li>
        <li>[ ] <strong>Monitorización:</strong> ¿Agregué código para guardar las solicitudes de los usuarios y detectar si los datos del mundo cambian en 3 meses (Data Drift)?</li>
      </ul>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Tómate 10 minutos para reflexionar sobre toda la travesía técnica de este Módulo 4. De todos los paradigmas (CNN, RNN, Transformers, GANs, RL, MLOps), ¿cuál consideras que es el más disruptivo para los próximos 5 años de la humanidad y en qué proyecto personal o de tu empresa te gustaría aplicarlo?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué significa crear un sistema de IA 'End-to-End' (De extremo a extremo)?", "options": ["Hacer solo la primera y la última capa de la red", "Desarrollar y conectar TODO el flujo de trabajo completo: desde extraer y limpiar los datos, diseñar y entrenar el modelo en GPU, hasta desplegarlo en un servidor API con monitoreo de degradación y consumo de usuario final", "Juntar 2 cables físicos", "Aprender el abecedario de la A a la Z"], "correctAnswer": 1 },
      { "id": 2, "question": "En el caso de Tesla (cámara industrial detectando rayones de pintura muy rápido), ¿qué tipo de arquitectura de Red Neuronal elegirías fundamentalmente?", "options": ["RNN y LSTM", "Transformer GPT de Texto", "Redes Neuronales Convolucionales (CNN) especializadas en Visión o Detección de Objetos", "Regresión Lineal Simple"], "correctAnswer": 2 },
      { "id": 3, "question": "Para que ese brazo robótico industrial tome la decisión en 10 milisegundos sin depender de caídas de Wi-Fi, ¿qué técnica de Hardware/Despliegue debes usar?", "options": ["Mandarlo por correo", "Cloud Computing centralizado (AWS) en otro continente", "Edge Computing (Desplegar el modelo localmente en una micro-TPU o procesador junto al robot)", "TensorFlow en el navegador de otra computadora"], "correctAnswer": 2 },
      { "id": 4, "question": "En la 'Checklist' de Arquitectura, ¿qué técnica aplicaste en las capas ocultas durante el entrenamiento para asegurarte de que tu red no sufriera de memorización (Overfitting)?", "options": ["Apagar la PC", "Regularización mediante capas de Dropout (apagar neuronas al azar) o L1/L2 Weight Decay", "Darle menos datos a la IA", "Bajar la luz del monitor"], "correctAnswer": 1 },
      { "id": 5, "question": "Si tu modelo final pesa 3 Gigabytes, es gigantesco y muy lento para Inferencia en producción. ¿Qué técnica usarás para comprimirlo antes de desplegar?", "options": ["Ponerlo en un archivo ZIP", "Aplicar Pruning (borrar pesos en cero) y Cuantización (bajar la precisión a Int8), seguido de una exportación al formato ligero ONNX", "Imprimirlo en papel", "Cambiar de Python a HTML"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué herramienta usarás para que las versiones de tu modelo de IA, las librerías de Python exactas y el sistema operativo no se rompan cuando migres de tu laptop al servidor de la empresa?", "options": ["Una memoria USB", "Un Excel", "Contenedores Docker (aislamiento y virtualización a nivel de sistema operativo)", "Block de notas"], "correctAnswer": 2 },
      { "id": 7, "question": "Y finalmente, ¿qué harás 6 meses después del lanzamiento cuando notes que la precisión del modelo empieza a decaer lentamente por los cambios en el mundo real?", "options": ["Llorar", "Reconocer que hay Data Drift o Concept Drift; usar MLOps para lanzar un proceso de reentrenamiento continuo (CT) con los datos frescos recopilados estos 6 meses y actualizar la API", "Apagar los servidores permanentemente", "Poner un aviso de que el modelo está viejo"], "correctAnswer": 1 }
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
console.log('Successfully created/updated sessions 4.26 to 4.30');
