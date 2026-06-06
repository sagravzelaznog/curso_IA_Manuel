/* eslint-disable */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const newSessions = [
  {
    "id": "5-11",
    "title": "5.11: Proyecto 3 - Sistema de Recomendación de Películas",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Iniciar el Proyecto 3: Clonar el motor de recomendación de Netflix.</li><li>Conocer el famoso dataset MovieLens.</li><li>Comprender la técnica de Filtros Colaborativos basados en Usuarios y en Ítems.</li></ul>",
    "content": `
      <h3>1. Presentación del Proyecto 3</h3>
      <p>A lo largo de las sesiones 5.11 a la 5.15, construiremos el motor de negocio más rentable de internet: <strong>Un Sistema de Recomendación</strong>. Empresas como Amazon o Netflix generan más del 30% de sus ingresos gracias a recomendaciones personalizadas. El objetivo es predecir qué calificación del 1 al 5 le dará un usuario a una película que nunca ha visto.</p>

      <h3>2. El Dataset MovieLens</h3>
      <p>Usaremos el dataset estándar de la industria académica: <em>MovieLens</em>. Contiene millones de filas con un formato muy simple: \`[ID_Usuario, ID_Pelicula, Calificacion, Fecha]\`. Esta simplicidad esconde un reto matemático masivo debido a la dispersión de los datos (la mayoría de los usuarios solo ha visto el 0.01% del catálogo).</p>

      <h3>3. Filtros Colaborativos (La vieja escuela)</h3>
      <p>La intuición humana dice: "Si al Usuario A y al Usuario B les gustaron las mismas 10 películas, probablemente al Usuario A le gustará la película 11 que vio el Usuario B". A esto se le llama <strong>Filtro Colaborativo basado en Usuarios</strong>. Matemáticamente, calculamos la Similitud del Coseno entre las filas de calificaciones de todos los usuarios para encontrar "Almas Gemelas" estadísticas.</p>
    `,
    "practical": `
      <h3>Explorando la Matriz Dispersa (Sparse Matrix)</h3>
      <pre><code class="language-python">import pandas as pd
import numpy as np

# 1. Cargamos una versión pequeña de MovieLens
ratings = pd.read_csv('ratings.csv') # Columnas: userId, movieId, rating

# 2. Creamos la "Matriz de Utilidad" (Usuarios x Películas)
# Cada fila es un usuario, cada columna es una película
matriz_utilidad = ratings.pivot(index='userId', columns='movieId', values='rating')

# 3. Llenamos los espacios vacíos (Películas no vistas) con Ceros
matriz_utilidad = matriz_utilidad.fillna(0)

# Verificamos la dispersión (Sparsity)
total_celdas = matriz_utilidad.shape[0] * matriz_utilidad.shape[1]
celdas_llenas = np.count_nonzero(matriz_utilidad)
dispersion = 100 - (celdas_llenas / total_celdas * 100)

print(f"Matriz creada. El {dispersion:.2f}% de la matriz está vacía.")
print("¡El reto del modelo es predecir los números exactos que deberían ir en esos ceros!")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el problema del 'Filtro Burbuja' (Filter Bubble) en sistemas de recomendación. ¿Por qué recomendarle a un usuario siempre lo que sabemos que le gusta al 100% (explotación) puede ser destructivo para su experiencia a largo plazo y para la sociedad?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es la premisa económica central detrás de construir un Sistema de Recomendación en una empresa?", "options": ["Reducir el costo de los servidores", "Aumentar brutalmente el tiempo de retención y los ingresos cruzados (Cross-selling) descubriendo automáticamente qué producto específico enganchará a cada usuario", "Para cumplir normativas legales", "Para borrar cuentas inactivas"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué dataset público, creado por el grupo GroupLens de la Universidad de Minnesota, es el estándar dorado para aprender sistemas de recomendación?", "options": ["Titanic Dataset", "MNIST de imágenes", "MovieLens (millones de calificaciones de películas por usuarios reales)", "PlantVillage"], "correctAnswer": 2 },
      { "id": 3, "question": "¿Cómo funciona un 'Filtro Colaborativo basado en Usuarios' intuitivamente?", "options": ["Te recomienda las películas más taquilleras", "Busca usuarios que tengan historiales de gustos matemáticamente muy similares a ti, y te recomienda lo que a ellos les gustó y tú aún no has visto", "Filtra películas por violencia", "Le pregunta a tus amigos de Facebook"], "correctAnswer": 1 },
      { "id": 4, "question": "Al crear una 'Matriz de Utilidad' donde las filas son usuarios y las columnas son películas, ¿por qué la matriz termina estando casi vacía (Sparse)?", "options": ["Porque hubo un error de descarga", "Porque el catálogo tiene miles de películas, pero un humano promedio solo ha calificado unas pocas docenas; el 99% de las celdas se rellenan con ceros", "Porque a nadie le gustan las películas", "Porque Python borra los datos"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Cuál es el objetivo matemático de los algoritmos predictivos sobre esta Matriz de Utilidad?", "options": ["Cambiar todos los 5 por 1", "Adivinar con la mayor exactitud posible qué número del 1 al 5 iría en las celdas que actualmente tienen un 'cero' (películas no vistas)", "Sumar todas las filas", "Hacer la matriz más grande"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué métrica geométrica se usa comúnmente en filtros clásicos para calcular qué tan 'parecidos' son los gustos de dos usuarios?", "options": ["El Teorema de Pitágoras", "Similitud del Coseno (Mide el ángulo entre los vectores de calificaciones de ambos usuarios)", "Logaritmo Neperiano", "Regla de Tres Simple"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué problema social gravísimo puede causar un sistema de recomendación si solo optimiza clics (explotación) sin variedad?", "options": ["Se calienta el celular", "El 'Filtro Burbuja' (Echo Chamber); aísla al usuario encerrándolo en contenido hiper-polarizado o repetitivo, limitando su exposición a opiniones y géneros nuevos", "Le gasta la batería al usuario", "Empieza a cobrar en dólares"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-12",
    "title": "5.12: Proyecto 3 - Factorización de Matrices (SVD)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Entender la técnica ganadora del Premio Netflix de $1 millón de dólares.</li><li>Comprender la descomposición matemática en Vectores Latentes.</li><li>Aplicar la librería 'Surprise' para predecir calificaciones.</li></ul>",
    "content": `
      <h3>1. El Premio Netflix (The Netflix Prize)</h3>
      <p>En 2006, Netflix ofreció 1 millón de dólares a quien pudiera mejorar su algoritmo de recomendación en un 10%. La técnica que arrasó en la competencia no fue la inteligencia artificial moderna, sino una técnica de álgebra lineal avanzada llamada <strong>Factorización de Matrices</strong> (específicamente, SVD - Singular Value Decomposition).</p>
      
      <h3>2. Descomponiendo el Problema (Vectores Latentes)</h3>
      <p>SVD toma esa matriz gigante y casi vacía de Usuarios vs Películas, y la descompone matemáticamente en dos matrices mucho más pequeñas:</p>
      <ul>
        <li><strong>Matriz de Usuarios:</strong> Describe a cada usuario con un vector de "Factores Ocultos" (Ej. cuánto le gusta la comedia, la acción, el romance).</li>
        <li><strong>Matriz de Películas:</strong> Describe cada película con factores ocultos idénticos (Ej. qué tanta comedia o acción tiene).</li>
      </ul>
      <p>Para predecir cuánto le gustará *Shrek* al *Usuario A*, simplemente multiplicamos su vector de preferencias con el vector de características de *Shrek* (Producto Punto).</p>

      <h3>3. La Librería Surprise en Python</h3>
      <p>En lugar de codificar álgebra compleja a mano, la comunidad de Data Science utiliza la librería <em>Surprise</em>, diseñada exclusivamente para crear y evaluar sistemas de recomendación clásicos en minutos.</p>
    `,
    "practical": `
      <h3>El Algoritmo de 1 Millón de Dólares (SVD)</h3>
      <pre><code class="language-python"># pip install scikit-surprise
from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
from surprise import accuracy

# 1. Cargamos los datos definiendo la escala de calificación (1 al 5)
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(ratings[['userId', 'movieId', 'rating']], reader)

# 2. Separamos para entrenamiento y prueba
trainset, testset = train_test_split(data, test_size=0.2)

# 3. Inicializamos el modelo ganador (SVD)
modelo_svd = SVD(n_factors=100) # 100 'Factores Ocultos' o gustos abstractos

# 4. Entrenamos el modelo
print("Entrenando SVD...")
modelo_svd.fit(trainset)

# 5. Hacemos las predicciones en el set de prueba
predicciones = modelo_svd.test(testset)

# 6. Evaluamos el error promedio (RMSE)
# Si el RMSE es 0.8, significa que en promedio nos equivocamos por 0.8 estrellas
error_rmse = accuracy.rmse(predicciones)
print(f"Error RMSE del modelo: {error_rmse}")

# Predecir un caso específico:
# pred = modelo_svd.predict(uid=196, iid=302)
# print(pred.est)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga por qué el algoritmo SVD sufre enormemente ante el problema del 'Arranque Frío' (Cold Start). Si creas una cuenta nueva en Netflix hoy, ¿por qué la matemática del SVD no puede recomendarte nada en absoluto hasta que califiques al menos unas cuantas películas?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué hito histórico impulsó enormemente el campo de los Sistemas de Recomendación en el año 2006?", "options": ["La creación del iPhone", "La competencia del 'Netflix Prize', que ofreció 1 millón de dólares a quien mejorara su algoritmo de recomendación en un 10%", "La fundación de Amazon", "La invención del álgebra lineal"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué técnica matemática resultó ser el núcleo de la solución ganadora del premio?", "options": ["Redes Neuronales Profundas", "Regresión Logística Simple", "Factorización de Matrices (Específicamente el algoritmo SVD)", "Blockchain"], "correctAnswer": 2 },
      { "id": 3, "question": "Intuitivamente, ¿qué logra la Factorización de Matrices?", "options": ["Borra las películas malas de la base de datos", "Rompe la gigantesca matriz vacía en dos matrices pequeñas (Usuarios y Películas) descubriendo 'Factores Ocultos' matemáticos (como géneros) sin necesidad de que un humano los etiquete manualmente", "Añade más píxeles a las películas", "Convierte las películas a formato MP4"], "correctAnswer": 1 },
      { "id": 4, "question": "Para predecir si a Juan le gustará la película 'Titanic', SVD simplemente hace un 'Producto Punto' entre dos vectores ocultos. ¿Cuáles son?", "options": ["El vector de peso y el vector de altura", "El vector de preferencias abstractas de Juan y el vector de características abstractas de la película Titanic", "El vector de fecha y hora", "El vector de precio y el de ganancias"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué famosa librería de Python simplifica enormemente la creación de estos sistemas recomendadores clásicos?", "options": ["Django", "Scikit-Surprise", "BeautifulSoup", "TensorFlow.js"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué significa la métrica de error RMSE (Root Mean Square Error) en este contexto?", "options": ["La cantidad de películas procesadas", "Cuánto se equivocó en promedio el algoritmo al predecir las estrellas. Si el RMSE es 0.8, nuestras predicciones fallan en promedio por menos de 1 estrella de diferencia frente a la realidad", "El tiempo que tardó en cargar", "La memoria RAM usada"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Por qué SVD falla ante el 'Cold Start' (Arranque Frío) de un usuario nuevo?", "options": ["Porque el usuario necesita internet", "Porque SVD se basa exclusivamente en las calificaciones históricas para multiplicar vectores. Si el usuario nuevo tiene 0 calificaciones, su vector está en cero y la matemática arroja un error predictivo.", "Porque el servidor está frío por la mañana", "Porque las películas nuevas no tienen color"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-13",
    "title": "5.13: Proyecto 3 - Recomendador Profundo (Neural Collaborative Filtering)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Migrar del SVD clásico hacia Redes Neuronales Profundas (Keras).</li><li>Implementar la arquitectura NCF (Neural Collaborative Filtering).</li><li>Comprender el poder de las Capas de Embeddings en Deep Learning.</li></ul>",
    "content": `
      <h3>1. Evolucionando más allá del Álgebra</h3>
      <p>SVD es excelente, pero tiene un límite: solo puede hacer combinaciones <em>lineales</em> (un simple Producto Punto). Si las interacciones entre los gustos del usuario y las películas son increíblemente complejas (ej. "Me gusta la acción, pero solo si es de los 90s y el protagonista es calvo"), la matemática lineal del SVD se queda corta.</p>
      
      <h3>2. Neural Collaborative Filtering (NCF)</h3>
      <p>En la era moderna, reemplazamos el Producto Punto del SVD con una <strong>Red Neuronal Densa multicapa</strong>. En el NCF, alimentamos a la red con el vector del Usuario y el vector de la Película. Las capas ocultas de la red neuronal (con activaciones ReLU) pueden aprender relaciones no-lineales extremadamente complejas, aplastando los resultados del SVD clásico.</p>

      <h3>3. La Magia de las Capas de Embeddings</h3>
      <p>En lugar de usar un One-Hot Encoding masivo (una lista con 1 millón de ceros y un solo 1 para representar al usuario), usamos una capa de <strong>Embedding</strong> en Keras. Esta capa actúa como una tabla de búsqueda (Look-up Table). A medida que la red entrena, ajusta los valores de esta tabla hasta que ubica al Usuario A en un punto geométrico del espacio 3D que mágicamente está "cerca" del punto geométrico de las películas de terror.</p>
    `,
    "practical": `
      <h3>Arquitectura de un Recomendador Profundo en Keras</h3>
      <pre><code class="language-python">from tensorflow.keras.layers import Input, Embedding, Flatten, Dense, Concatenate
from tensorflow.keras.models import Model

num_usuarios = 100000
num_peliculas = 20000
factores_ocultos = 50 # El tamaño del Embedding (Latent Space)

# 1. Definimos las entradas (Recibimos el ID literal del usuario y de la peli)
entrada_usuario = Input(shape=(1,), name='user_id')
entrada_pelicula = Input(shape=(1,), name='movie_id')

# 2. Las mágicas Capas de Embeddings (Aprenden la identidad abstracta)
emb_usuario = Embedding(input_dim=num_usuarios, output_dim=factores_ocultos)(entrada_usuario)
emb_pelicula = Embedding(input_dim=num_peliculas, output_dim=factores_ocultos)(entrada_pelicula)

# Aplanamos los tensores
vec_usuario = Flatten()(emb_usuario)
vec_pelicula = Flatten()(emb_pelicula)

# 3. Concatenamos (Unimos) ambos vectores en uno solo largo
vector_unido = Concatenate()([vec_usuario, vec_pelicula])

# 4. Red Neuronal Profunda (El reemplazo del Producto Punto)
x = Dense(128, activation='relu')(vector_unido)
x = Dense(64, activation='relu')(x)
x = Dense(32, activation='relu')(x)

# 5. Salida final (Predicción de calificación del 1 al 5)
salida = Dense(1)(x)

modelo_ncf = Model(inputs=[entrada_usuario, entrada_pelicula], outputs=salida)
modelo_ncf.compile(optimizer='adam', loss='mse')

modelo_ncf.summary()
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Observa que la última capa de la red es <code>Dense(1)</code> sin función de activación (activación lineal) y la pérdida es <code>mse</code>. ¿Por qué usamos esto en lugar de <code>softmax</code> y <code>categorical_crossentropy</code>? PISTA: ¿Estamos clasificando un perro/gato, o estamos intentando adivinar un número continuo (Regresión) como el '4.2' de calificación?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es la principal debilidad técnica del algoritmo SVD clásico frente a los modelos modernos?", "options": ["SVD es muy pesado", "SVD utiliza un simple 'Producto Punto' (una operación lineal rígida), por lo que es incapaz de descubrir patrones cruzados y combinaciones no lineales ultra-complejas en los gustos del usuario", "SVD borra las películas malas", "SVD no funciona con números"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué significan las siglas NCF en sistemas de recomendación modernos?", "options": ["Network Communication Failure", "Neural Collaborative Filtering (Filtro Colaborativo Neuronal)", "New Classification Format", "Non-Categorical Function"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué reemplaza al tradicional Producto Punto matemático en la arquitectura NCF?", "options": ["La división por cero", "Una suma aritmética", "Una Red Neuronal Densa (Perceptrón Multicapa) con funciones de activación ReLU, la cual puede aprender cualquier función matemática no-lineal por más compleja que sea", "Un árbol de decisión"], "correctAnswer": 2 },
      { "id": 4, "question": "En lugar de codificar a 1 millón de usuarios con enormes vectores llenos de ceros (One-Hot Encoding), ¿qué capa especializada de Keras usamos para optimizar esto?", "options": ["Capa de Dropout", "Capa de Embedding; actúa como un diccionario compacto que asigna a cada ID de usuario un pequeño vector matemático denso de características abstractas", "Capa Convolucional 2D", "Capa de Pooling"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué sucede geométricamente con el 'Embedding' de una película de Acción y otra película de Acción a medida que la red se entrena?", "options": ["Se restan hasta ser cero", "La red ajusta sus valores internos hasta que los vectores de ambas películas quedan posicionados muy 'cerca' uno del otro en el espacio multidimensional", "Cambian de color a rojo", "Se alejan lo más posible"], "correctAnswer": 1 },
      { "id": 6, "question": "En el código Keras, ¿qué hace la capa `Concatenate()`?", "options": ["Imprime un texto en consola", "Borra el vector del usuario", "Une o 'pega' el vector abstracto del usuario y el vector abstracto de la película uno al lado del otro, formando un único vector largo que entrará al cerebro de la red neuronal", "Divide los datos en mitades"], "correctAnswer": 2 },
      { "id": 7, "question": "Si queremos que el modelo prediga una calificación (ej. 3.7 estrellas), ¿qué tipo de problema de Machine Learning estamos resolviendo en la última capa?", "options": ["Clasificación Binaria", "Clasificación Multiclase", "Agrupamiento (Clustering)", "Un problema de Regresión, por eso la última capa es `Dense(1)` sin función de activación y el error se mide con MSE (Mean Squared Error)"], "correctAnswer": 3 }
    ]
  },
  {
    "id": "5-14",
    "title": "5.14: Proyecto 3 - Solucionando el Cold Start y Metadatos",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Vencer por fin el problema del Arranque Frío añadiendo contexto real.</li><li>Modificar nuestra red para aceptar Variables Categóricas (Edad, Género).</li><li>Diseñar un recomendador Híbrido (Contenido + Colaborativo).</li></ul>",
    "content": `
      <h3>1. El Monstruo Invicto: El Cold Start</h3>
      <p>Incluso nuestra poderosa Red Neuronal del capítulo anterior sigue sufriendo el <strong>Arranque Frío</strong>. Si Netflix sube una película nueva hoy, su "ID" jamás fue visto en el entrenamiento. El modelo intentará buscar su <em>Embedding</em>, no lo encontrará (o estará al azar), y la recomendación será basura.</p>
      
      <h3>2. Recomendadores Híbridos al Rescate</h3>
      <p>La solución absoluta de la industria moderna es combinar el historial de calificaciones (Colaborativo) con la información real descriptiva (Basado en Contenido). Si la película nueva no tiene vistas, ¡no importa! Sabemos que el director es Nolan, los actores son DiCaprio y el género es Sci-Fi. Le inyectaremos a la Red Neuronal estos <strong>Metadatos</strong> (Features Exógenas).</p>

      <h3>3. Arquitectura de Múltiples Entradas en Keras</h3>
      <p>Nuestra red neuronal ahora tendrá "Múltiples Puertas de Entrada". En una puerta metemos el ID del Usuario. En otra puerta metemos el ID de la Película. En una tercera puerta metemos texto de la sinopsis procesado por NLP (Transformers). La red neuronal aprende a "leer" la película para recomendarla, logrando un éxito rotundo incluso en el día de estreno.</p>
    `,
    "practical": `
      <h3>Keras Multi-Input Model (Pseudocódigo Híbrido)</h3>
      <pre><code class="language-python">from tensorflow.keras.layers import Input, Dense, Concatenate, Embedding, Flatten
from tensorflow.keras.models import Model

# --- PUERTA 1: IDs CLÁSICOS ---
in_usuario = Input(shape=(1,), name="id_usuario")
in_pelicula = Input(shape=(1,), name="id_pelicula")

emb_usr = Flatten()(Embedding(10000, 32)(in_usuario))
emb_pel = Flatten()(Embedding(5000, 32)(in_pelicula))

# --- PUERTA 2: METADATOS DEL USUARIO (Demografía) ---
in_edad = Input(shape=(1,), name="edad_usuario")
in_genero = Input(shape=(1,), name="genero_usuario")

# --- PUERTA 3: METADATOS DE LA PELÍCULA (Contenido) ---
# Supongamos que ya convertimos el género (Acción/Drama) usando One-Hot Encoding
in_genero_peli = Input(shape=(10,), name="generos_peli_onehot")

# --- EL CEREBRO HÍBRIDO ---
# Unimos TODO: IDs matemáticos + Datos Reales
vector_maestro = Concatenate()([emb_usr, emb_pel, in_edad, in_genero, in_genero_peli])

x = Dense(128, activation='relu')(vector_maestro)
x = Dense(64, activation='relu')(x)
salida = Dense(1)(x) # Predicción final

modelo_hibrido = Model(inputs=[in_usuario, in_pelicula, in_edad, in_genero, in_genero_peli], outputs=salida)
modelo_hibrido.compile(optimizer='adam', loss='mse')

print("¡Tenemos un Recomendador Híbrido inmune al Cold Start de películas nuevas!")
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Imagina que estás construyendo este sistema para Spotify. Además de la edad del usuario y el género musical de la canción, menciona 3 características exógenas (Metadatos del contexto en tiempo real) que inyectarías como nuevas entradas a la red neuronal para saber si el usuario quiere escuchar Reguetón a las 2:00 AM o Música Clásica a las 8:00 AM.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué un sistema basado puramente en IDs de usuarios y películas falla estrepitosamente el día del estreno de una película (Cold Start)?", "options": ["Porque el servidor se cae por visitas", "Porque el modelo jamás vio ese ID durante el entrenamiento y la película tiene cero historial de calificaciones, así que sus 'Embeddings' matemáticos están vacíos o al azar", "Porque no tiene imagen de portada", "Porque los directores prohíben su recomendación"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuál es la solución dorada de la industria (ej. Netflix, TikTok) para resolver el Cold Start de ítems nuevos?", "options": ["Recomendarla a todos al azar", "Construir Sistemas Híbridos: Inyectar a la red neuronal 'Metadatos' físicos y reales (ej. sinopsis, género, actores, país) para que el modelo la recomiende por su contenido, no solo por su ID", "Obligar a los empleados a calificarla", "Borrar la película y esperar"], "correctAnswer": 1 },
      { "id": 3, "question": "En la Arquitectura de Keras, ¿qué mecanismo nos permite meter datos tan distintos como la 'Edad del Usuario' y el 'ID de la Película' al mismo tiempo?", "options": ["Solo acepta un dato a la vez", "El uso de 'Múltiples Puertas de Entrada' (Multiple Inputs). Definimos varios tensores `Input()` por separado y luego usamos la capa `Concatenate()` para fusionarlos en el cerebro central", "Sumar las edades con los IDs", "Guardarlo en un pendrive"], "correctAnswer": 1 },
      { "id": 4, "question": "Si una película nueva no tiene historial, ¿qué parte del vector maestro le dará la inteligencia al modelo para saber a quién recomendársela?", "options": ["El ID", "Los inputs de `in_genero_peli` (sus Metadatos de contenido, ej. que es de Sci-Fi y dirigida por Nolan), ya que la red aprendió históricamente qué tipo de demografía de usuarios ama esos metadatos", "El color de la pantalla", "El tamaño del archivo de video"], "correctAnswer": 1 },
      { "id": 5, "question": "Además de metadatos estáticos como el género de la película, ¿qué metadatos de 'Contexto Temporal' usaría un recomendador híbrido moderno?", "options": ["La marca del servidor de la empresa", "La hora del día, el día de la semana y la ubicación GPS del usuario (para recomendar música relajante en la mañana y enérgica en el gimnasio)", "El peso en Megabytes de la base de datos", "El nombre de la mascota del programador"], "correctAnswer": 1 },
      { "id": 6, "question": "En el código, la entrada de géneros de película se definió como `shape=(10,)`. ¿A qué técnica de procesamiento de datos categóricos corresponde este formato?", "options": ["Descenso de gradiente", "Regresión polinómica", "One-Hot Encoding (un vector de 10 posiciones donde cada posición representa un género distinto, ej. el índice 0 es Acción, el 1 es Comedia)", "Traducción por voz"], "correctAnswer": 2 },
      { "id": 7, "question": "Al unir la lógica colaborativa (historial de IDs) con la lógica de contenido (metadatos reales), ¿qué ventaja brutal consigues?", "options": ["El código es más corto", "Obtienes lo mejor de dos mundos: precisión casi mágica descubriendo gustos raros en usuarios veteranos (Colaborativo) e inmunidad predictiva ante usuarios o productos totalmente nuevos (Contenido)", "Gana dinero automáticamente", "No gasta luz eléctrica"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-15",
    "title": "5.15: Proyecto 3 - Evaluación de Rankings y Métricas de Negocio",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Diferenciar el error matemático (RMSE) del éxito en ventas.</li><li>Aprender qué son las Métricas de Ranking Top-K (Precision@K y Recall@K).</li><li>Entender la métrica dorada NDCG (Normalized Discounted Cumulative Gain).</li></ul>",
    "content": `
      <h3>1. Predecir estrellas no es el Negocio Real</h3>
      <p>Hasta ahora optimizamos el RMSE (qué tan cerca adivina la red la calificación del 1 al 5). Pero a Netflix no le importa si el modelo predijo 4.1 y la realidad fue 4.4. A Netflix le importa <strong>el orden en pantalla</strong>: ¿Apareció la película favorita del usuario en el Carrusel del Top 10 inicial, o quedó enterrada en la posición 500 donde nunca hará scroll?</p>
      
      <h3>2. Precision@K y Recall@K</h3>
      <p>En el mundo real, evaluamos Sistemas de Recomendación creando un ranking "Top-K" (las 10 mejores recomendaciones del modelo).</p>
      <ul>
        <li><strong>Precision@10:</strong> De las 10 películas que el modelo le sugirió en portada al usuario, ¿cuántas realmente le gustaron/hizo clic? (Si hizo clic en 4, la precisión es 40%).</li>
        <li><strong>Recall@10:</strong> De todas las películas que al usuario realmente le gustaron en la historia, ¿qué porcentaje logramos mostrarle en ese Top 10 mágico?</li>
      </ul>

      <h3>3. La Joya de la Corona: NDCG</h3>
      <p>Aparecer en el Top 10 está bien, pero el orden es crítico. No es lo mismo que la mejor película esté en la posición 1, a que esté en la posición 9 (el usuario podría irse antes de llegar ahí). <strong>NDCG (Ganancia Acumulada Descontada Normalizada)</strong> es una métrica sofisticada que premia enormemente si las recomendaciones perfectas están en los primeros puestos, y te "descuenta" puntos o te penaliza matemáticamente si las pones hasta abajo en el ranking.</p>
    `,
    "practical": `
      <h3>Calculando Precision@K en la práctica</h3>
      <p>La evaluación se hace aislando al usuario y viendo si las recomendaciones de la IA coinciden con la realidad escondida en los datos de prueba.</p>
      <pre><code class="language-python">def precision_en_k(recomendaciones_ia, favoritos_reales_usuario, k=10):
    """
    recomendaciones_ia: Las películas ordenadas que el modelo dice que le gustarán.
    favoritos_reales: Lo que secretamente sabemos que al usuario le encantó.
    """
    # Tomamos solo el Top 10 del carrusel que generó la IA
    top_k_recomendado = recomendaciones_ia[:k]
    
    # Contamos cuántos "Aciertos" (Hits) tuvimos
    aciertos = 0
    for peli in top_k_recomendado:
        if peli in favoritos_reales_usuario:
            aciertos += 1
            
    # Calculamos la precisión porcentual
    precision = aciertos / k
    return precision

# Simulamos que la IA recomendó estas 10 películas al usuario VIP
top_10_ia = ["Inception", "Titanic", "Avatar", "Matrix", "Gladiator", "Alien", "Jaws", "Rocky", "Terminator", "Batman"]

# En realidad (datos de prueba), al usuario solo le gustaban estas 3
gustos_reales = ["Matrix", "Batman", "Shrek"]

resultado = precision_en_k(top_10_ia, gustos_reales, k=10)
print(f"El modelo tuvo un Precision@10 del: {resultado*100}%")
# Resultado: 20% (Adivinó Matrix y Batman, falló en Shrek y las otras 8 fueron ruido)
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>El NDCG se basa en la suposición matemática de que la atención del usuario se desploma exponencialmente mientras más 'scroll' tiene que hacer en la pantalla. Investiga rápidamente cómo se calcula el 'Descuento' (Discount) en la fórmula de DCG usando logaritmos inversos.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué las empresas como Amazon o Spotify dejaron de usar el RMSE (predecir estrellas exactas) como su métrica de evaluación principal?", "options": ["Porque es ilegal", "Porque al negocio no le importa si predices un 4.5 en vez de un 4.7. Al negocio le importa el Ranking: que el ítem que el usuario va a comprar aparezca de los primeros en la pantalla (Top 10) para maximizar la conversión", "Porque consume mucha memoria RAM", "Porque RMSE da siempre números negativos"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué evalúa exactamente la métrica 'Precision@10' (Precisión en K=10)?", "options": ["Cuántas fotos de 10 Megapíxeles subió el usuario", "Calcula qué porcentaje de las 10 recomendaciones que la IA puso en el carrusel de inicio realmente resultaron relevantes (clic o compra) para el usuario", "Mide el tiempo de carga del top 10", "Cuenta cuántos programadores trabajaron 10 horas"], "correctAnswer": 1 },
      { "id": 3, "question": "Si el modelo te recomendó 10 productos en la portada, y tú compraste 6 de ellos, ¿cuál fue el Precision@10 de ese modelo?", "options": ["100%", "6%", "60%", "0%"], "correctAnswer": 2 },
      { "id": 4, "question": "Un problema de Precision@K es que no toma en cuenta el 'Orden' (da lo mismo si el acierto está en la posición 1 o en la 10). ¿Qué métrica de oro soluciona esto?", "options": ["F1-Score Clásico", "Accuracy Absoluto", "NDCG (Normalized Discounted Cumulative Gain)", "Derivada Parcial"], "correctAnswer": 2 },
      { "id": 5, "question": "¿Cómo funciona lógicamente el 'Descuento' en la métrica NDCG?", "options": ["Te da un cupón de descuento de Amazon", "Aplica una fórmula logarítmica que penaliza el puntaje severamente si la recomendación perfecta aparece en la posición 9 en lugar de la posición 1, simulando la pérdida de atención del usuario en el scroll", "Descuenta impuestos de las ganancias", "Resta la edad del usuario"], "correctAnswer": 1 },
      { "id": 6, "question": "Si estás probando el algoritmo y el usuario en el dataset de validación NO tiene ninguna calificación registrada (usuario fantasma). ¿Qué valor de Precision obtendrás matemáticamente?", "options": ["100% perfecto", "0%, porque es imposible adivinar gustos sin información base (Arranque Frío Extremo) y el denominador/numerador se corrompen", "El código explota", "50% al azar"], "correctAnswer": 1 },
      { "id": 7, "question": "Concluyendo el Proyecto 3: ¿Qué hemos logrado construir en estas 5 sesiones?", "options": ["Un juego de cartas", "Un motor de predicción corporativo completo, evolucionando desde matemáticas clásicas (SVD) hasta Redes Profundas Híbridas Keras, cerrando con evaluación de impacto de negocio (NDCG)", "Una calculadora científica", "Una página web HTML sin funcionalidad"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-16",
    "title": "5.16: Despliegue Avanzado (Dockerizando IA)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Comenzar el 'Capstone' final: Embalaje y Despliegue Real.</li><li>Entender la catástrofe de las dependencias ('En mi PC sí funciona').</li><li>Crear un Dockerfile y empaquetar un modelo de Machine Learning.</li></ul>",
    "content": `
      <h3>1. 'En mi máquina sí funciona'</h3>
      <p>Llevas 90 sesiones construyendo modelos increíbles. El jefe de la empresa te dice: "Ponlo en el servidor principal para que los clientes lo usen". Copias tu código en un Pendrive, lo pasas al servidor, lo corres y... TODO EXPLOTA. La versión de Python es diferente, las librerías de Ubuntu chocan con tu código de Windows y TensorFlow requiere unos drivers de GPU específicos. Bienvenido al infierno de las dependencias.</p>
      
      <h3>2. Docker al Rescate</h3>
      <p>La industria del software inventó <strong>Docker</strong> para matar este problema. Docker te permite crear una caja mágica (Contenedor) donde metes: tu modelo \`.h5\`, tu script de FastAPI, una mini-versión exacta de Linux y la versión precisa de Python que usaste. Una vez que sellas esa caja, correrá <em>idénticamente</em> en tu laptop, en los servidores de Google o en la computadora de tu abuela.</p>

      <h3>3. Imágenes y Contenedores</h3>
      <p>Escribimos las "recetas" de esta caja en un archivo de texto llamado <code>Dockerfile</code>. Al "cocinar" esa receta generamos una <strong>Imagen</strong> (el archivo ejecutable masivo). Cuando corremos esa Imagen, cobra vida y se llama <strong>Contenedor</strong> (la aplicación viva, respirando en una burbuja aislada de la computadora anfitrión).</p>
    `,
    "practical": `
      <h3>Escribiendo un Dockerfile para IA</h3>
      <p>Este texto se guarda en un archivo llamado literalmente 'Dockerfile' sin ninguna extensión.</p>
      <pre><code class="language-dockerfile"># 1. Heredamos de un Linux oficial que ya tiene Python 3.9 pre-instalado
FROM python:3.9-slim

# 2. Definimos nuestra carpeta de trabajo dentro de la caja virtual
WORKDIR /app

# 3. Copiamos nuestra lista de librerías desde nuestra PC a la caja
COPY requirements.txt .

# 4. Instalamos las librerías necesarias (TensorFlow, FastAPI, Uvicorn)
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copiamos nuestro modelo entrenado y nuestro código de la API al contenedor
COPY mi_modelo.h5 .
COPY servidor_api.py .

# 6. Exponemos el puerto 8000 para que internet pueda comunicarse con la caja
EXPOSE 8000

# 7. La orden final que se ejecutará cuando se encienda la caja
CMD ["uvicorn", "servidor_api:app", "--host", "0.0.0.0", "--port", "8000"]
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Busca en Google qué es <code>NVIDIA Container Toolkit</code> (antes nvidia-docker). ¿Por qué los contenedores normales de Docker no pueden acceder mágicamente a tu costosa Tarjeta Gráfica (GPU) para hacer predicciones rápidas y qué soluciona este toolkit?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Cuál es el infierno recurrente al intentar pasar un modelo de Inteligencia Artificial de tu computadora de desarrollo a un servidor real de la empresa?", "options": ["Que los servidores no usan teclados", "El problema de las Dependencias; incompatibilidad masiva entre las versiones de sistema operativo, versiones específicas de Python, drivers de hardware o librerías matemáticas", "Que el código se borra solo", "Que el servidor habla otro idioma"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué revolucionaria herramienta estándar en la industria empaqueta tu código y entorno para que funcione 100% igual en cualquier computadora del mundo?", "options": ["Un archivo ZIP normal", "WinRAR", "Docker", "Microsoft Word"], "correctAnswer": 2 },
      { "id": 3, "question": "En la analogía de Docker, ¿qué es un 'Contenedor' (Container)?", "options": ["Un barco en el puerto de carga", "Una burbuja lógica aislada que contiene una mini-versión virtual de un sistema operativo, las librerías exactas y tu código ejecutándose en un ambiente blindado del servidor anfitrión", "Una función de Python larga", "Un dispositivo USB de hardware especial"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué es un 'Dockerfile'?", "options": ["Una imagen comprimida con Photoshop", "Un archivo de texto simple que contiene las instrucciones o 'receta' paso a paso de cómo construir exactamente el entorno de tu IA desde cero (desde qué OS usar, hasta qué comandos instalar)", "Una carpeta cifrada con contraseña", "Un comando malicioso"], "correctAnswer": 1 },
      { "id": 5, "question": "En el Dockerfile de ejemplo, ¿qué comando es el encargado de descargar e instalar TensorFlow y Pandas dentro del contenedor virgen?", "options": ["FROM python:3.9-slim", "COPY mi_modelo.h5", "RUN pip install --no-cache-dir -r requirements.txt", "EXPOSE 8000"], "correctAnswer": 2 },
      { "id": 6, "question": "¿Para qué sirve el comando `EXPOSE 8000` en Docker?", "options": ["Para borrar el código después de usarlo", "Para indicar visualmente que el contenedor abrirá una compuerta por el puerto 8000, permitiendo que las peticiones web de los clientes puedan entrar a consumir la API de la IA que está encerrada adentro", "Para que los hackers entren fácilmente", "Para limitar la memoria a 8000 MB"], "correctAnswer": 1 },
      { "id": 7, "question": "Si tu contenedor incluye una Red Neuronal muy pesada que requiere aceleración por GPU, ¿basta con instalar Docker normal en el servidor?", "options": ["Sí, Docker la detecta por telepatía", "No, los contenedores están tan aislados que no ven el hardware de video. Necesitas herramientas especiales como 'NVIDIA Container Toolkit' para abrir un puente seguro directo a la GPU física", "Sí, pero tarda un poco en calentar", "No, es imposible usar GPUs en Docker"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-17",
    "title": "5.17: Despliegue en la Nube (AWS, GCP y HuggingFace Spaces)",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Superar el 'localhost' subiendo el Docker a la nube.</li><li>Conocer los gigantes del Cloud (AWS, GCP, Azure).</li><li>Desplegar una App gratuita en Hugging Face Spaces en minutos.</li></ul>",
    "content": `
      <h3>1. Adiós a Localhost</h3>
      <p>Ya tienes tu contenedor Docker blindado funcionando en tu máquina. Pero si cierras tu laptop, la API de IA muere y tus clientes se enojan. Necesitamos subir esa "Caja Docker" a una computadora inmensa que esté encendida 24/7/365 en un lugar frío de Norteamérica. A eso se le llama <strong>Despliegue en la Nube (Cloud Deployment)</strong>.</p>
      
      <h3>2. Los Gigantes: AWS, GCP y Azure</h3>
      <p>Amazon Web Services, Google Cloud Platform y Microsoft Azure dominan el mundo. Tienen servicios masivos como <em>AWS EC2</em> (donde alquilas una computadora virtual vacía) o servicios más manejados como <em>AWS ECS</em> o <em>Google Cloud Run</em>. Tú simplemente les mandas tu archivo Docker y ellos se encargan de multiplicarlo mágicamente en 10 servidores si de repente te haces viral en redes sociales (Escalamiento Horizontal automático).</p>

      <h3>3. La vía rápida: Hugging Face Spaces</h3>
      <p>Configurar AWS requiere semanas de estudio de redes, VPCs y seguridad. Para portafolios de Data Science y startups jóvenes, <strong>Hugging Face Spaces</strong> es un regalo divino. Te permiten conectar tu repositorio de GitHub, detectar automáticamente si usaste Streamlit, FastAPI o Docker, y desplegar tu Inteligencia Artificial gratis (o pagando muy poco por GPU) en cuestión de dos clics con un enlace web público funcional.</p>
    `,
    "practical": `
      <h3>El proceso conceptual de Subida a la Nube (AWS ECS / GCP Cloud Run)</h3>
      <p>Esto se ejecuta en la terminal de línea de comandos, no en Python.</p>
      <pre><code class="language-bash"># 1. En nuestra PC local, construimos la "Caja" leyendo el Dockerfile
# La llamamos "miapp-vision:v1"
docker build -t miapp-vision:v1 .

# 2. Ahora necesitamos "Subir" (Push) esa caja a internet
# AWS ECR y Google Container Registry actúan como un Dropbox gigante para Dockers
# Etiquetamos nuestra caja hacia el servidor de Google
docker tag miapp-vision:v1 gcr.io/mi-proyecto-nube/miapp-vision:v1

# 3. Subimos el archivo masivo (puede pesar 2 GB)
docker push gcr.io/mi-proyecto-nube/miapp-vision:v1

# 4. En el panel de Google Cloud, presionamos un botón que dice:
# "Tomar caja de GCR, encenderla, y asignarle una URL HTTPS pública".
# Resultado: https://mi-ia-bancaria.run.app 
# ¡Tu IA ya está en el mundo real recibiendo dinero!
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Crea una cuenta gratuita en Hugging Face (huggingface.co). Ve a la pestaña 'Spaces', selecciona crear uno nuevo usando 'Streamlit'. Verás que te genera un pequeño repositorio de archivos web en 2 segundos. Pega el código de la sesión 5.10 allí y observa cómo tu Chatbot cobra vida en internet sin haber tocado un solo servidor complejo.</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué es insostenible dejar el servidor de IA ejecutándose en tu laptop o PC de escritorio (localhost)?", "options": ["Porque la laptop gasta mucha luz", "Porque si tu PC se apaga, pierde internet, se reinicia por Windows Update o te roban la computadora, toda la empresa y el servicio web mundial se caerían instantáneamente", "Porque los servidores no aceptan laptops", "Porque localhost tiene virus siempre"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es fundamentalmente el 'Cloud Computing' (Computación en la Nube)?", "options": ["Volar aviones sobre las nubes", "Alquilar por segundos/horas la potencia de procesamiento y memoria de centros de datos inmensos y súper seguros (operados por Amazon, Google o Microsoft) en lugar de comprar servidores físicos", "Un servicio de clima meteorológico", "Usar redes neuronales que levitan"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Qué significa el concepto de 'Escalamiento Horizontal' (Auto-Scaling) que la nube ofrece de manera nativa para tus Dockers?", "options": ["Poner los monitores de costado", "Si tu App de IA pasa de tener 10 a 100,000 usuarios en un segundo por hacerse viral, la nube detecta el tráfico y clona automáticamente tu caja Docker en 500 servidores simultáneos para no colapsar", "Aumentar la memoria RAM de tu celular", "Borrar cuentas inactivas horizontalmente"], "correctAnswer": 1 },
      { "id": 4, "question": "¿Qué es Hugging Face en la comunidad moderna de IA?", "options": ["Un club de lectura de libros físicos", "El 'GitHub del Machine Learning'. Además de alojar modelos Open Source gigantes (Llama, BERT), ofrece 'Spaces', una plataforma para desplegar proyectos web de IA con un par de clics sin configurar infraestructura", "Un sistema de realidad virtual", "Un editor de imágenes con IA"], "correctAnswer": 1 },
      { "id": 5, "question": "En el código de la consola Bash, ¿qué hace exactamente el comando `docker build -t miapp-vision:v1 .`?", "options": ["Subcontrata a programadores", "Lee tu receta Dockerfile, descarga Python, instala tus librerías matemáticas, empaqueta tu modelo y sella todo creando la imagen final ejecutable etiquetada como 'v1'", "Borra todas las cajas", "Sube el archivo a Facebook"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Para qué sirven servicios como AWS ECR (Elastic Container Registry) o Google Container Registry (GCR)?", "options": ["Para guardar documentos PDF", "Actúan como almacenes o librerías seguras en la nube (parecido a GitHub o Dropbox) diseñadas específicamente para alojar el peso masivo de tus Imágenes Docker construidas", "Para registrar correos electrónicos masivos", "Para registrar horas extras de empleados"], "correctAnswer": 1 },
      { "id": 7, "question": "Una vez que tu contenedor está corriendo en Google Cloud Run y te asignan un link HTTPS público. ¿Quién puede interactuar con tu modelo?", "options": ["Solo el presidente de Google", "Absolutamente cualquier persona, dispositivo iOS, Android, o página web en el mundo que haga una petición POST a ese link con los datos correctos", "Solo ordenadores de sobremesa", "Nadie, porque está oculto"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-18",
    "title": "5.18: Monitoreo MLOps - Apache Airflow y Reentrenamiento",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Entender la orquestación avanzada de procesos con DAGs.</li><li>Conocer Apache Airflow como el cerebro de las operaciones de datos.</li><li>Crear un flujo automatizado de Reentrenamiento de Modelos (CT).</li></ul>",
    "content": `
      <h3>1. El Trabajo Aburrido</h3>
      <p>Tu IA de detección de fraudes lleva meses funcionando de maravilla. Pero recuerda el "Concept Drift": los fraudes cambian mes a mes. En una empresa prehistórica, un programador tiene que despertarse cada lunes a las 3:00 AM, correr el script de descarga de base de datos, luego correr manualmente el script de Jupyter para re-entrenar la IA con la data fresca, y luego reiniciar el servidor. Si falla la descarga a medias, ocurre una catástrofe.</p>
      
      <h3>2. El Maestro de la Orquesta: Apache Airflow</h3>
      <p><strong>Apache Airflow</strong> (creado por Airbnb) es el rey mundial de la orquestación de datos. Te permite escribir código Python que define "Flujos de Trabajo" (Pipelines). Estos se representan como <strong>DAGs (Directed Acyclic Graphs)</strong>: diagramas de cajitas con flechas donde una tarea depende de que la anterior haya terminado exitosamente. Airflow programa estas cajas, maneja los errores, envía alertas a Slack si algo explota en la madrugada, y reintenta automáticamente.</p>

      <h3>3. Continuous Training (Entrenamiento Continuo)</h3>
      <p>Al juntar MLOps y Airflow, logramos la utopía de la Inteligencia Artificial corporativa: El proceso de <em>Continuous Training</em>. Airflow vigila la base de datos cada 24 horas. Si detecta nuevos patrones, manda a entrenar al modelo de forma 100% autónoma, evalúa su nueva precisión, lo inyecta a un Docker, y despliega la nueva API sin que ningún humano mueva un solo dedo.</p>
    `,
    "practical": `
      <h3>Definiendo un DAG Simple en Airflow</h3>
      <p>En lugar de ejecutar scripts sueltos, creamos un grafo lógico de dependencias.</p>
      <pre><code class="language-python">from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from datetime import datetime, timedelta

# Definiendo funciones que en la realidad ejecutarían nuestros scripts pesados de IA
def extraer_datos_nuevos():
    print("Conectando a SQL... Extrayendo datos de la última semana.")

def reentrenar_modelo_keras():
    print("Actualizando los pesos de la CNN con los datos más frescos...")

def validar_y_desplegar():
    print("El modelo nuevo superó al viejo. Haciendo deploy de Docker a AWS.")

# 1. Configuración general del orquestador
default_args = {
    'owner': 'data_science_team',
    'retries': 2,                          # Si falla por problemas de red, intenta 2 veces más
    'retry_delay': timedelta(minutes=5)    # Espera 5 min antes del reintento
}

# 2. Creamos el DAG (que corra todos los domingos a la medianoche)
with DAG('pipeline_reentrenamiento_ia', default_args=default_args, 
         schedule_interval='@weekly', start_date=datetime(2025, 1, 1), catchup=False) as dag:

    # 3. Definimos las tareas como cajitas
    tarea_1 = PythonOperator(task_id='extraer_db', python_callable=extraer_datos_nuevos)
    tarea_2 = PythonOperator(task_id='entrenar_ia', python_callable=reentrenar_modelo_keras)
    tarea_3 = PythonOperator(task_id='deploy_api', python_callable=validar_y_desplegar)

    # 4. Establecemos el Orden Lógico Estricto (Las flechas del Grafo)
    # Tarea 2 NO empezará hasta que Tarea 1 termine con absoluto éxito, etc.
    tarea_1 >> tarea_2 >> tarea_3
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga el concepto de <em>Shadow Deployment (Despliegue Sombra)</em> o <em>A/B Testing</em> en MLOps. Cuando la 'tarea_3' despliega el modelo nuevo re-entrenado, ¿por qué es una locura reemplazar instantáneamente el viejo modelo para el 100% de los usuarios reales, y cómo el despliegue en Sombra mitiga los riesgos?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué problema grave soluciona un orquestador de datos en una empresa madura con IA?", "options": ["Hace que los colores se vean bien", "Evita que humanos tengan que correr secuencias pesadas y frágiles de scripts de extracción y re-entrenamiento manualmente a horas de madrugada, automatizando la recuperación de errores", "Acelera el teclado del programador", "Borra virus del sistema operativo"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Qué es Apache Airflow?", "options": ["Un modelo de procesamiento de lenguaje natural de Google", "La plataforma Open Source estándar de la industria (desarrollada por Airbnb) para programar, crear y monitorear flujos de trabajo masivos de datos e IA de manera programática en Python", "Una aerolínea tecnológica", "Una base de datos en tiempo real"], "correctAnswer": 1 },
      { "id": 3, "question": "En Airflow y matemáticas de orquestación, ¿qué significa un DAG?", "options": ["Data Artificial Generation", "Directed Acyclic Graph (Grafo Dirigido Acíclico); una estructura visual donde las tareas fluyen en una sola dirección sin formar bucles infinitos, definiendo dependencias estrictas (A -> B -> C)", "Distributed Algorithm Generator", "Double Asymmetric Gradient"], "correctAnswer": 1 },
      { "id": 4, "question": "En el código del DAG, ¿qué logra la sintaxis `tarea_1 >> tarea_2 >> tarea_3`?", "options": ["Es un comentario sin uso", "Mueve bits binarios", "Establece el flujo de dependencia estricto: Airflow garantiza que la Tarea 2 de entrenamiento jamás empezará si la Tarea 1 de descargar datos falló o lanzó error", "Imprime los resultados en pantalla al mismo tiempo"], "correctAnswer": 2 },
      { "id": 5, "question": "En el diccionario `default_args`, ¿para qué sirve configurar `'retries': 2`?", "options": ["Para cobrar el doble", "Si el servidor SQL tiene un micro-corte de red temporal y falla la extracción, Airflow no aborta todo colapsando el sistema; se toma un respiro e intenta automáticamente 2 veces más antes de disparar alarmas", "Para borrar los datos dos veces", "Para entrenar la red el doble de rápido"], "correctAnswer": 1 },
      { "id": 6, "question": "¿A qué etapa del ciclo MLOps corresponde la automatización de la 'tarea_2' (re-entrenar cada semana)?", "options": ["Ingeniería de Características", "Exploración de Datos (EDA)", "Continuous Training (CT / Entrenamiento Continuo); el modelo aprende la 'nueva normalidad' del mundo periódicamente sin intervención humana", "Recolección de Logs"], "correctAnswer": 2 },
      { "id": 7, "question": "A nivel corporativo, ¿por qué herramientas como Airflow se consideran el 'corazón' o 'cerebro' del Big Data?", "options": ["Porque ocupan todo el espacio del disco", "Porque no ejecutan las matemáticas en sí mismas, sino que dirigen la sinfonía entera: le ordenan al servidor SQL que mande datos a AWS, luego le dicen al cluster Docker que arranque, monitoreando todo visualmente desde un tablero de control único", "Porque son de color rojo", "No se les considera importantes"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-19",
    "title": "5.19: Ética Aplicada - Auditoría de Sesgos en un Modelo Real",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Entender la responsabilidad civil y legal al desplegar IA al público.</li><li>Descubrir la diferencia entre Fair ML y mitigación de sesgos.</li><li>Auditar un modelo real y corregir variables sensibles protegidas.</li></ul>",
    "content": `
      <h3>1. El Código tiene Consecuencias Reales</h3>
      <p>A lo largo de 98 sesiones hemos optimizado métricas matemáticas (Accuracy, RMSE, NDCG). Pero en el mundo real, los errores de la IA destruyen vidas. Un Falso Positivo en un algoritmo de fianzas significa que un inocente va a la cárcel. Un sesgo en un algoritmo de Recursos Humanos descarta a miles de mujeres talentosas de conseguir empleo. <strong>La Inteligencia Artificial no es neutra, es un amplificador de los prejuicios históricos humanos presentes en los datos.</strong></p>
      
      <h3>2. Variables Protegidas por la Ley (Protected Attributes)</h3>
      <p>Las legislaciones modernas (como la IA Act de la Unión Europea) exigen que atributos como el <em>Género, la Raza, la Edad, la Orientación Sexual o la Religión</em> no influyan en predicciones críticas (como créditos bancarios o diagnósticos). El instinto inicial de un Data Scientist novato es decir: "¡Fácil! Elimino la columna 'Género' de mi base de datos de entrenamiento (Dataset) y el modelo será ciego a eso". A eso se le llama Fairness through Unawareness (Equidad por ignorancia)... <strong>Y ES UN GRAVE ERROR</strong>.</p>

      <h3>3. El Problema de los Proxy (Variables Proxy)</h3>
      <p>Si quitas la columna 'Raza' pero dejas la columna 'Código Postal', la Red Neuronal (que es extremadamente lista) encontrará que ciertos códigos postales correlacionan estadísticamente con ciertas razas debido a la segregación histórica urbana. ¡El modelo terminará siendo racista usando el código postal como 'Proxy'! La auditoría moderna implica dejar la variable, medir estadísticamente cómo reacciona el modelo ante ella, y aplicar algoritmos de mitigación (Fair ML) antes de entregar predicciones.</p>
    `,
    "practical": `
      <h3>Auditoría de Equidad (Fairness) en Python</h3>
      <p>Librerías como AIF360 (de IBM) o Fairlearn (de Microsoft) automatizan el descubrimiento de discriminación oculta en el cerebro de tus modelos.</p>
      <pre><code class="language-python"># pip install fairlearn scikit-learn pandas
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from fairlearn.metrics import demographic_parity_difference

# 1. Cargamos un dataset de aprobaciones de Préstamos Bancarios
# Features: [Ingresos, Deudas, Edad, Genero]
datos = pd.read_csv("prestamos.csv")
X = datos[['Ingresos', 'Deudas', 'Edad']] # Ignoramos el Género en el entrenamiento a propósito
Y = datos['Aprobado'] # Variable objetivo 0 o 1
Atributo_Sensible = datos['Genero'] # 1=Hombre, 0=Mujer

# 2. Entrenamos un modelo aparentemente "Ciego" y "Justo"
modelo_banco = RandomForestClassifier()
modelo_banco.fit(X, Y)

# 3. Hacemos las predicciones
predicciones = modelo_banco.predict(X)

# 4. LA AUDITORÍA ÉTICA (Calculamos la Paridad Demográfica)
# Mide la diferencia en la tasa de aprobación entre Hombres y Mujeres.
# Si el modelo es justo, la diferencia debería ser muy cercana a Cero.
disparidad = demographic_parity_difference(y_true=Y, y_pred=predicciones, sensitive_features=Atributo_Sensible)

print(f"Brecha de Discriminación en el modelo: {disparidad * 100:.2f}%")

# Si la salida es 25%, significa que aunque el modelo no vio la columna género,
# está aprobando un 25% más créditos a los hombres usando variables ocultas (Proxys) como la edad o los ingresos.
# ¡Este modelo es ILEGAL desplegarlo en producción sin mitigación!
      </code></pre>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Investiga qué técnica utiliza el algoritmo <em>'Equalized Odds'</em> (Igualdad de Oportunidades) de la librería Fairlearn en la etapa de <em>Post-Procesamiento</em>. ¿Cómo altera dinámicamente los 'umbrales' de decisión de probabilidad (Thresholds) de la red neuronal para forzar matemáticamente que la tasa de errores sea idéntica para ambos géneros?</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Por qué es engañoso afirmar que los algoritmos de IA son 100% justos por estar basados en 'frías matemáticas'?", "options": ["Porque los robots nos odian", "Porque las matemáticas asimilan los patrones exactos de los datos de entrenamiento; si la historia humana (dataset) está llena de racismo y discriminación institucional, el modelo automatizará e invisibilizará esa misma discriminación a nivel matemático a escala industrial", "Porque Python fue programado mal", "Porque tienen fallas de sintaxis"], "correctAnswer": 1 },
      { "id": 2, "question": "En el contexto legal y ético, ¿qué son los 'Protected Attributes' (Atributos Protegidos)?", "options": ["Contraseñas de la base de datos", "Variables demográficas como género, raza, edad, religión u orientación sexual que por ley no deben ser factores para tomar decisiones de impacto social grave (hipotecas, cárcel, empleo)", "Archivos cifrados en ZIP", "Variables que usan llaves foráneas en SQL"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Por qué simplemente eliminar la columna 'Raza' de tu tabla de Excel (Fairness through Unawareness) es una técnica inútil e incompetente para evitar un modelo racista?", "options": ["Porque te gasta espacio en disco", "Por la existencia de 'Variables Proxy'. Una red profunda inferirá fácilmente la raza basándose indirectamente en los códigos postales, las escuelas asistidas o el historial de compras del usuario, resultando en la misma discriminación oculta.", "Porque arrojará un error 404 al compilar", "Porque necesitas todas las columnas para usar Keras"], "correctAnswer": 1 },
      { "id": 4, "question": "En el código de la auditoría usando Fairlearn de Microsoft, ¿qué evalúa la métrica de 'Paridad Demográfica' (Demographic Parity)?", "options": ["La diferencia en milisegundos del rendimiento de la GPU", "Verifica si la tasa cruda estadística de aprobación de créditos es idéntica entre el grupo privilegiado (ej. hombres) y el grupo no privilegiado (ej. mujeres), midiendo la brecha de disparidad generada", "Traduce el texto en la interfaz", "Suma los saldos de los clientes en dólares"], "correctAnswer": 1 },
      { "id": 5, "question": "Si tu auditoría revela un 30% de sesgo contra las minorías, pero el Accuracy de tu modelo es 99% perfecto. ¿Qué haces?", "options": ["Desplegarlo de todos modos para ganar un bono", "Detener el despliegue. Un modelo altamente preciso que perpetúa daño sistémico masivo representa riesgos morales, de reputación devastadora y de multas multimillonarias por reguladores gubernamentales.", "Borrar todas las métricas", "Cambiar los colores del reporte"], "correctAnswer": 1 },
      { "id": 6, "question": "¿Qué gran ventaja aportan las herramientas como AIF360 de IBM o Fairlearn al flujo de MLOps?", "options": ["Son antivirus", "Automatizan la auditoría ética; pueden incluirse como un paso bloqueante en el pipeline de validación para que Airflow rechace el despliegue a producción de cualquier modelo que repruebe tests de equidad racial o de género", "Bajan el consumo de energía", "Generan música de fondo automática"], "correctAnswer": 1 },
      { "id": 7, "question": "¿Qué nos enseña la rama de Fair ML (Machine Learning Justo) sobre la precisión de los modelos?", "options": ["Que nunca se equivocan", "Que en la ingeniería real existe un inevitable 'Trade-off' (Compromiso). Casi siempre, al aplicar mitigaciones de equidad para hacer un modelo éticamente justo y legal, se sacrifica un pequeño porcentaje de su 'Accuracy' matemático crudo global. Y como ingenieros, ese sacrificio es innegociable.", "Que la precisión es lo único que importa en el universo", "Que solo se logra con computación cuántica"], "correctAnswer": 1 }
    ]
  },
  {
    "id": "5-20",
    "title": "5.20: Graduación y Portafolio - El Futuro Profesional en IA",
    "meta": "Módulo 5: Proyectos Avanzados | Duración: 60 minutos",
    "objectives": "<ul><li>Revisar retrospectivamente el viaje desde la sesión 1.1 hasta el 5.20.</li><li>Comprender el concepto de AGI (Artificial General Intelligence).</li><li>Armar un portafolio técnico invencible y preparar el asalto al mercado laboral.</li></ul>",
    "content": `
      <h3>1. Has llegado a la Meta</h3>
      <p>Felicitaciones. Completar un currículo de 100 sesiones técnicas profundas es una hazaña estadística (menos del 5% de las personas que inician cursos online los terminan). Has programado regresiones a mano, has usado Keras para curar enfermedades de plantas con convoluciones, has creado Agentes Autónomos RAG con LangChain, y has dockerizado modelos en la nube vigilando sus sesgos éticos. Ahora eres un peligro para el status quo tecnológico. <strong>Eres un AI Engineer.</strong></p>
      
      <h3>2. El Horizonte de la IA (AGI)</h3>
      <p>El ritmo actual de evolución es exponencial. Todo lo que aprendiste de Transformers es apenas el escalón inicial hacia el Santo Grial del valle del silicio: la <strong>AGI (Artificial General Intelligence)</strong>. Una inteligencia capaz de superar cognitivamente al humano promedio en absolutamente cualquier tarea económica. Sin embargo, no importa cuánto evolucionen los modelos fundacionales cerrados; el mundo siempre necesitará ingenieros que conecten (orquesten) esa inteligencia pura con los problemas sucios y reales de las empresas tradicionales.</p>

      <h3>3. Tu Arma Secreta: El Portafolio de MLOps</h3>
      <p>El mercado junior de IA está saturado de estudiantes que clonan cuadernos de Jupyter del "Dataset del Titanic" y los suben a su currículum. Nadie te contratará por hacer un \`model.fit()\`. Te contratarán si les muestras una arquitectura End-to-End.</p>
    `,
    "practical": `
      <h3>La Anatomía de un Proyecto de Portafolio Invencible</h3>
      <p>Aplica esto en tu GitHub y serás contratado.</p>
      <ul>
        <li><strong>No uses Datasets Aburridos (Kaggle):</strong> Extrae (Web Scraping) tus propios datos frescos sobre un tema único (Ej. Predecir los precios de vivienda de TU ciudad exacta descargando anuncios locales cada hora).</li>
        <li><strong>Muestra el Pipeline de Datos (Airflow):</strong> Documenta cómo limpiaste y procesaste la basura asimétrica del mundo real.</li>
        <li><strong>Enfócate en la Solución, no en el Algoritmo:</strong> Al reclutador de negocios no le importa si usaste ResNet o YOLO. Le importa la métrica de negocio (Ej. "Reduje en 20% el tiempo manual de inventario").</li>
        <li><strong>Despliega en la Web (Streamlit + FastAPI):</strong> El reclutador no sabe instalar Python localmente. Si tu proyecto no es un link accesible por internet con un diseño bonito donde el reclutador pueda interactuar en 5 segundos, no existe.</li>
        <li><strong>Evidencia de MLOps (Docker):</strong> Incluye un archivo <code>Dockerfile</code> y un <code>docker-compose.yml</code> limpio en tu repositorio. Gritas que eres un profesional de producción listo para entrar al equipo.</li>
      </ul>
    `,
    "exercises": "<h3>Ejercicio 1</h3><p>Para culminar este viaje: Selecciona una de las 3 áreas que dominaste en el curso (Visión Computacional, NLP/Chatbots, o Análisis Predictivo/Series Temporales). Redacta en un documento un 'PITCH' (Presentación corta) de un producto que construirías en 30 días para resolver un problema de tu entorno local utilizando herramientas Cloud y despliegue por API. ¡Empieza a construir tu legado!</p>",
    "resources": "",
    "quiz": [
      { "id": 1, "question": "¿Qué separa tu nivel actual de Ingeniería de IA del '95% de principiantes' en el mercado laboral masivo?", "options": ["Tener un título impreso en papel brillante", "El dominio práctico de todo el ciclo de vida real: no solo el cuaderno estadístico aislado (Jupyter), sino el entendimiento de la orquestación (LangChain), el empaquetado (Docker), las APIs (FastAPI) y la Ética (Fairness)", "Que escribes código más lento", "Saber la historia de los fundadores de Google"], "correctAnswer": 1 },
      { "id": 2, "question": "¿Cuál es el objetivo final, altamente debatido en filosofía e ingeniería, que están persiguiendo corporaciones como OpenAI y DeepMind bajo la sigla AGI?", "options": ["Una computadora de escritorio barata", "Artificial General Intelligence (Una inteligencia cognitiva sintética capaz de comprender, aprender y realizar cualquier tarea económica o intelectual mejor o igual que cualquier ser humano)", "Animated Graphics Interface", "Algoritmos Generativos de Imágenes"], "correctAnswer": 1 },
      { "id": 3, "question": "¿Por qué las empresas seguirán contratando Ingenieros de IA si modelos como ChatGPT se vuelven cada vez más potentes por sí solos?", "options": ["Por caridad humana", "Porque un LLM puro alojado en un servidor externo no sirve para nada sin la integración de ingenieros que diseñen la arquitectura de datos RAG, los pipelines corporativos seguros, el despliegue local en hardware privado Edge y orquesten la toma de decisiones empresariales complejas y confidenciales", "Para que arreglen los cables del router", "Para imprimir el código"], "correctAnswer": 1 },
      { "id": 4, "question": "De cara al mundo laboral, ¿cuál es el peor error táctico que puedes cometer al crear tu repositorio de Portafolio en GitHub?", "options": ["No ponerle emojis", "Subir otro clon genérico pre-masticado del 'Titanic' o 'Iris Flower' en un archivo \`.ipynb\` crudo. No demuestra iniciativa, recolección de datos real ni capacidad para resolver problemas ambiguos de la industria.", "Escribir comentarios en español", "Usar el modo oscuro"], "correctAnswer": 1 },
      { "id": 5, "question": "¿Qué le interesa ver realmente a un Gerente (Manager) en tu portafolio, más allá de que hayas usado una 'Red Neuronal de 150 Capas' super compleja?", "options": ["Los colores de la gráfica", "El impacto de negocio real, cómo tu solución se vincula a métricas financieras, si soluciona un problema asimétrico de la vida real, y que lograste presentar el resultado final de forma intuitiva al cliente", "Cuántos miles de dólares te costó el servidor", "Si el código corre en computadoras viejas"], "correctAnswer": 1 },
      { "id": 6, "question": "Según la regla de oro para un portafolio de IA letal, ¿cómo debe ser presentado tu proyecto al reclutador que está leyendo tu CV?", "options": ["Le envías un ZIP de 3 Gigabytes por correo", "Le mandas instrucciones de cómo instalar Python 3.9 en su PC", "Debe ser un enlace web funcional e interactivo y de carga rápida (Ej. una app de Streamlit desplegada gratis en HuggingFace o Cloud Run) para que lo prueben y se sorprendan en 5 segundos sin pedirles instalar absolutamente nada", "Lo imprimes y lo mandas por fax"], "correctAnswer": 2 },
      { "id": 7, "question": "Y al revisar el código de ese proyecto increíble, ¿qué pequeño archivo de texto en la raíz de tu repositorio dejará al Ingeniero Líder (Tech Lead) impresionado confirmando que sabes de despliegue a producción?", "options": ["Un documento Word explicando tu vida", "Una presentación en PowerPoint", "Un archivo `Dockerfile` (y `requirements.txt`) pulidos y elegantes, demostrando que desarrollaste el modelo ya pensando en MLOps, aislamiento de dependencias y escalabilidad en nube", "Un acceso directo al escritorio"], "correctAnswer": 2 }
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
console.log('Successfully created/updated sessions 5.11 to 5.20');
