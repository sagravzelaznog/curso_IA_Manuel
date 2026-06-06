import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const quizzes = {
  "1-1": [
    { id: 1, question: "¿Qué es Python?", options: ["Un sistema operativo", "Un lenguaje de programación interpretado de alto nivel", "Un editor de texto", "Una base de datos"], correctAnswer: 1 },
    { id: 2, question: "¿Quién fue el creador de Python?", options: ["Guido van Rossum", "Linus Torvalds", "Bill Gates", "Dennis Ritchie"], correctAnswer: 0 },
    { id: 3, question: "¿Por qué Python es muy utilizado en IA?", options: ["Porque solo funciona en Linux", "Por su amplio ecosistema de bibliotecas como TensorFlow y PyTorch", "Porque es el único lenguaje que entienden las computadoras", "Porque fue creado por Google"], correctAnswer: 1 },
    { id: 4, question: "¿Qué comando verifica la versión de Python instalada?", options: ["python --version", "py -v", "python info", "check python"], correctAnswer: 0 },
    { id: 5, question: "¿Qué es Jupyter Notebook?", options: ["Una marca de laptop", "Un entorno interactivo muy usado en ciencia de datos", "Un lenguaje de programación", "Un módulo de C++"], correctAnswer: 1 },
    { id: 6, question: "¿Cuál es la función en Python para mostrar texto en pantalla?", options: ["echo()", "console.log()", "print()", "show()"], correctAnswer: 2 },
    { id: 7, question: "¿Qué comando de terminal instala paquetes en Python?", options: ["npm install", "apt-get", "pip install", "brew install"], correctAnswer: 2 }
  ],
  "1-2": [
    { id: 1, question: "¿Qué es una variable en Python?", options: ["Un número fijo", "Un espacio en memoria para almacenar un dato", "Una función matemática", "Un error de sintaxis"], correctAnswer: 1 },
    { id: 2, question: "¿Cuál de estos es un tipo de dato numérico en Python?", options: ["String", "Boolean", "Float", "List"], correctAnswer: 2 },
    { id: 3, question: "¿Cómo se define una variable de texto (string)?", options: ["x = 10", "x = 'Hola'", "x = True", "x = []"], correctAnswer: 1 },
    { id: 4, question: "¿Qué valor representa el tipo booleano?", options: ["Verdadero o Falso", "Números enteros", "Cadenas de texto", "Números decimales"], correctAnswer: 0 },
    { id: 5, question: "¿Qué función se usa para saber el tipo de una variable?", options: ["typeof()", "type()", "class()", "get_type()"], correctAnswer: 1 },
    { id: 6, question: "¿Cómo se convierte un string a entero?", options: ["parse()", "to_int()", "int()", "integer()"], correctAnswer: 2 },
    { id: 7, question: "¿Qué regla es correcta para nombrar variables en Python?", options: ["Pueden empezar con números", "No pueden contener espacios", "Pueden usar símbolos especiales como @", "Deben estar en mayúsculas"], correctAnswer: 1 }
  ],
  "1-3": [
    { id: 1, question: "¿Qué operador se usa para la multiplicación?", options: ["x", "*", ".", "x()"], correctAnswer: 1 },
    { id: 2, question: "¿Cuál es el operador de exponenciación (potencia)?", options: ["^", "**", "//", "%"], correctAnswer: 1 },
    { id: 3, question: "¿Qué hace el operador % (módulo)?", options: ["Calcula porcentaje", "Devuelve el residuo de una división", "Divide exactamente", "Suma valores"], correctAnswer: 1 },
    { id: 4, question: "¿Qué operador es de comparación de igualdad?", options: ["=", "==", "===", "!="], correctAnswer: 1 },
    { id: 5, question: "¿Cómo se escribe el operador lógico 'Y' en Python?", options: ["&&", "and", "&", "Y"], correctAnswer: 1 },
    { id: 6, question: "Si x = 5 y y = 3, ¿cuánto es x // y?", options: ["1.66", "2", "1", "0"], correctAnswer: 2 },
    { id: 7, question: "¿Qué significa el operador !=", options: ["Diferente de", "Igual a", "Mayor que", "Menor o igual que"], correctAnswer: 0 }
  ],
  "1-4": [
    { id: 1, question: "¿Cuál es la palabra clave para una condicional?", options: ["when", "if", "check", "case"], correctAnswer: 1 },
    { id: 2, question: "¿Qué palabra clave se usa para múltiples condiciones?", options: ["else if", "elseif", "elif", "case"], correctAnswer: 2 },
    { id: 3, question: "¿Qué estructura se usa para iterar un número conocido de veces?", options: ["while", "for", "do-while", "repeat"], correctAnswer: 1 },
    { id: 4, question: "¿Qué hace la palabra clave 'break' en un loop?", options: ["Pausa el loop", "Termina el loop inmediatamente", "Salta a la siguiente iteración", "Reinicia el loop"], correctAnswer: 1 },
    { id: 5, question: "¿Qué hace 'continue' en un loop?", options: ["Termina el loop", "Salta el resto de la iteración actual y pasa a la siguiente", "Imprime un valor", "Genera un error"], correctAnswer: 1 },
    { id: 6, question: "¿Cuál es la sintaxis correcta del for?", options: ["for i in range(5):", "for (i=0; i<5; i++)", "for i to 5:", "for i = 1 to 5"], correctAnswer: 0 },
    { id: 7, question: "¿El bloque 'else' se puede usar con 'while'?", options: ["No, nunca", "Sí, se ejecuta cuando la condición es falsa sin usar break", "Sí, pero solo si hay un error", "No, pertenece solo a 'if'"], correctAnswer: 1 }
  ],
  "1-5": [
    { id: 1, question: "¿Con qué palabra clave se define una función?", options: ["function", "def", "func", "define"], correctAnswer: 1 },
    { id: 2, question: "¿Qué se usa para devolver un valor en una función?", options: ["return", "yield", "output", "send"], correctAnswer: 0 },
    { id: 3, question: "¿Qué son los parámetros de una función?", options: ["Las variables dentro de la función", "Los valores que la función recibe en su definición", "Los resultados devueltos", "Errores en la función"], correctAnswer: 1 },
    { id: 4, question: "¿Qué palabra clave importa un módulo completo?", options: ["include", "require", "import", "using"], correctAnswer: 2 },
    { id: 5, question: "¿Cómo se llama a una función llamada 'saludar'?", options: ["call saludar", "saludar()", "run saludar", "execute(saludar)"], correctAnswer: 1 },
    { id: 6, question: "¿Qué son los argumentos por defecto (*default arguments*)?", options: ["Valores que no se pueden cambiar", "Valores que toma un parámetro si no se provee uno al llamarlo", "Errores por defecto", "Funciones sin nombre"], correctAnswer: 1 },
    { id: 7, question: "¿Qué palabra clave importa funciones específicas de un módulo?", options: ["from", "get", "pull", "import_specific"], correctAnswer: 0 }
  ],
  "1-6": [
    { id: 1, question: "¿Con qué símbolos se define una lista en Python?", options: ["()", "{}", "[]", "<>"], correctAnswer: 2 },
    { id: 2, question: "¿Las listas en Python son mutables?", options: ["Sí, se pueden cambiar sus elementos", "No, son inmutables", "Solo si contienen números", "Solo en Python 2"], correctAnswer: 0 },
    { id: 3, question: "¿Qué método agrega un elemento al final de la lista?", options: ["add()", "push()", "append()", "insert()"], correctAnswer: 2 },
    { id: 4, question: "¿Con qué símbolos se define una tupla?", options: ["{}", "[]", "()", "<>"], correctAnswer: 2 },
    { id: 5, question: "¿Cuál es la principal diferencia entre listas y tuplas?", options: ["Las tuplas son mutables, las listas no", "Las listas son mutables, las tuplas son inmutables", "No hay diferencia", "Las listas solo guardan strings"], correctAnswer: 1 },
    { id: 6, question: "¿Cómo accedes al primer elemento de una lista llamada 'datos'?", options: ["datos[1]", "datos[0]", "datos.first()", "datos{0}"], correctAnswer: 1 },
    { id: 7, question: "¿Qué hace el método pop() en una lista?", options: ["Elimina el primer elemento", "Elimina y retorna el último elemento (por defecto)", "Borra toda la lista", "Duplica la lista"], correctAnswer: 1 }
  ],
  "1-7": [
    { id: 1, question: "¿Qué es un diccionario en Python?", options: ["Una lista de palabras ordenadas", "Una colección de pares clave-valor", "Una tupla mutable", "Un conjunto matemático"], correctAnswer: 1 },
    { id: 2, question: "¿Con qué símbolos se define un diccionario?", options: ["[]", "()", "{}", "<>"], correctAnswer: 2 },
    { id: 3, question: "¿Cómo se accede al valor de la clave 'nombre' en dict1?", options: ["dict1[0]", "dict1('nombre')", "dict1['nombre']", "dict1.get(nombre)"], correctAnswer: 2 },
    { id: 4, question: "¿Qué característica define a un conjunto (set) en Python?", options: ["Permite duplicados", "Es ordenado", "No permite elementos duplicados", "No es mutable"], correctAnswer: 2 },
    { id: 5, question: "¿Qué método devuelve todas las claves de un diccionario?", options: ["keys()", "values()", "get_keys()", "items()"], correctAnswer: 0 },
    { id: 6, question: "¿Qué método de conjunto realiza la unión de dos conjuntos?", options: ["merge()", "join()", "union()", "add()"], correctAnswer: 2 },
    { id: 7, question: "¿Los diccionarios permiten tener múltiples claves iguales?", options: ["Sí", "No, las claves deben ser únicas", "Solo si los valores son diferentes", "Sí, pero solo con números"], correctAnswer: 1 }
  ],
  "1-8": [
    { id: 1, question: "¿Qué función se utiliza para abrir un archivo?", options: ["read()", "file()", "open()", "load()"], correctAnswer: 2 },
    { id: 2, question: "¿Qué modo se usa para leer un archivo?", options: ["'w'", "'r'", "'a'", "'x'"], correctAnswer: 1 },
    { id: 3, question: "¿Qué modo se usa para escribir (sobrescribir) un archivo?", options: ["'r'", "'w'", "'a'", "'e'"], correctAnswer: 1 },
    { id: 4, question: "¿Qué hace el modo 'a' (append)?", options: ["Abre el archivo para añadir texto al final sin borrarlo", "Borra el archivo", "Crea un archivo de solo lectura", "Genera un error si el archivo existe"], correctAnswer: 0 },
    { id: 5, question: "¿Qué es altamente recomendado usar al manejar archivos para asegurar que se cierren?", options: ["try...catch", "El bloque 'with'", "Un bucle while", "Funciones anónimas"], correctAnswer: 1 },
    { id: 6, question: "¿Qué método lee todo el contenido de un archivo como un string único?", options: ["readlines()", "read()", "readall()", "readline()"], correctAnswer: 1 },
    { id: 7, question: "¿Qué pasa si intentas abrir en modo 'r' un archivo que no existe?", options: ["Se crea vacío", "Genera un error FileNotFoundError", "No pasa nada", "Se abre en modo escritura"], correctAnswer: 1 }
  ]
};

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

data.forEach(session => {
  if (quizzes[session.id]) {
    session.quiz = quizzes[session.id];
  }
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully updated quizzes for Mod 1 Part 1 (Sessions 1.1 to 1.8)');
