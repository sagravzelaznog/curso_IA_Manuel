import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const quizzes = {
  "1-9": [
    { id: 1, question: "¿Para qué sirve el manejo de excepciones?", options: ["Para acelerar el código", "Para evitar que el programa colapse ante errores esperados", "Para crear interfaces gráficas", "Para compilar el código"], correctAnswer: 1 },
    { id: 2, question: "¿Qué bloque contiene el código que podría fallar?", options: ["try", "except", "catch", "finally"], correctAnswer: 0 },
    { id: 3, question: "¿Qué bloque atrapa el error?", options: ["try", "catch", "except", "error"], correctAnswer: 2 },
    { id: 4, question: "¿Qué bloque se ejecuta SIEMPRE, haya o no haya error?", options: ["try", "except", "else", "finally"], correctAnswer: 3 },
    { id: 5, question: "¿Cómo se fuerza a lanzar una excepción manualmente?", options: ["throw", "raise", "error", "catch"], correctAnswer: 1 },
    { id: 6, question: "¿Qué error arroja dividir por cero?", options: ["ValueError", "TypeError", "ZeroDivisionError", "SyntaxError"], correctAnswer: 2 },
    { id: 7, question: "¿El bloque 'else' en excepciones cuándo se ejecuta?", options: ["Cuando hay error", "Cuando NO hay error en el try", "Siempre", "Solo al cerrar archivos"], correctAnswer: 1 }
  ],
  "1-10": [
    { id: 1, question: "¿Cuál es un concepto clave en programación funcional?", options: ["Clases y objetos", "Bucles for", "Funciones puras y estado inmutable", "Variables globales"], correctAnswer: 2 },
    { id: 2, question: "¿Qué son las funciones lambda?", options: ["Funciones muy largas", "Funciones anónimas de una sola línea", "Módulos de matemáticas", "Errores del sistema"], correctAnswer: 1 },
    { id: 3, question: "¿Cuál es la sintaxis de una función lambda que suma dos números?", options: ["lambda x, y: x + y", "def lambda(x, y): x + y", "lambda(x, y) = x + y", "lambda: x + y"], correctAnswer: 0 },
    { id: 4, question: "¿Qué hace la función map()?", options: ["Dibuja un mapa de calor", "Filtra elementos de una lista", "Aplica una función a cada elemento de un iterable", "Suma todos los elementos"], correctAnswer: 2 },
    { id: 5, question: "¿Qué hace la función filter()?", options: ["Elimina variables nulas", "Retorna elementos que cumplan una condición dada", "Aplica matemáticas avanzadas", "Convierte strings a enteros"], correctAnswer: 1 },
    { id: 6, question: "¿En qué módulo se encuentra la función reduce() en Python 3?", options: ["math", "functools", "itertools", "collections"], correctAnswer: 1 },
    { id: 7, question: "¿Las listas por comprensión (List Comprehensions) son una técnica funcional?", options: ["Sí, permiten crear listas de forma declarativa", "No, son de programación orientada a objetos", "Solo si usan matrices", "No existen en Python"], correctAnswer: 0 }
  ],
  "1-11": [
    { id: 1, question: "¿Qué es la Programación Orientada a Objetos (POO)?", options: ["Un paradigma basado en el concepto de objetos y clases", "Un paradigma que solo usa funciones matemáticas", "Una librería de Python", "Un entorno de desarrollo"], correctAnswer: 0 },
    { id: 2, question: "¿Qué palabra clave crea una clase?", options: ["object", "def", "class", "create"], correctAnswer: 2 },
    { id: 3, question: "¿Qué es un objeto en POO?", options: ["Una función", "Una instancia de una clase", "Una variable global", "Un error"], correctAnswer: 1 },
    { id: 4, question: "¿Cómo se llama la función constructora en Python?", options: ["__init__", "constructor()", "init()", "__construct__"], correctAnswer: 0 },
    { id: 5, question: "¿Qué parámetro representa a la instancia de la clase en sus métodos?", options: ["this", "self", "me", "object"], correctAnswer: 1 },
    { id: 6, question: "¿Qué son los atributos de una clase?", options: ["Funciones dentro de la clase", "Las variables que almacenan el estado del objeto", "Módulos importados", "Excepciones generadas"], correctAnswer: 1 },
    { id: 7, question: "¿Qué son los métodos de una clase?", options: ["Variables", "Funciones definidas dentro de la clase", "Errores", "Librerías"], correctAnswer: 1 }
  ],
  "1-12": [
    { id: 1, question: "¿Qué es la Herencia en POO?", options: ["Cuando una clase recibe los atributos y métodos de otra", "Cuando se borran objetos", "Cuando se copia código manual", "Cuando se heredan errores"], correctAnswer: 0 },
    { id: 2, question: "¿Cómo se indica que la clase 'Perro' hereda de 'Animal'?", options: ["class Perro extends Animal:", "class Perro(Animal):", "class Perro inherits Animal:", "class Perro -> Animal:"], correctAnswer: 1 },
    { id: 3, question: "¿Qué función se usa para llamar al constructor de la clase padre?", options: ["parent()", "base()", "super()", "__init_parent__()"], correctAnswer: 2 },
    { id: 4, question: "¿Qué es el Polimorfismo?", options: ["Objetos de distintas clases pueden responder al mismo nombre de método", "Una clase con muchos atributos", "Una base de datos", "Herencia múltiple prohibida"], correctAnswer: 0 },
    { id: 5, question: "¿Qué es la Encapsulación?", options: ["Guardar datos en una cápsula espacial", "Ocultar los detalles internos y proteger el estado del objeto", "Heredar de múltiples clases", "Usar variables globales"], correctAnswer: 1 },
    { id: 6, question: "¿Cómo se indica que un atributo debe ser considerado 'privado' en Python por convención?", options: ["Con la palabra private", "Con doble guion bajo inicial (__atributo)", "Con mayúsculas", "Usando arroba @"], correctAnswer: 1 },
    { id: 7, question: "¿Permite Python herencia múltiple (heredar de más de una clase a la vez)?", options: ["Sí", "No", "Solo en Python 2", "Solo si es la misma clase"], correctAnswer: 0 }
  ],
  "1-13": [
    { id: 1, question: "¿Cuál es la diferencia entre un módulo y un paquete?", options: ["Un módulo es una carpeta, un paquete es un archivo .py", "Un módulo es un solo archivo .py, un paquete es una carpeta con varios módulos", "Son lo mismo", "Los paquetes se pagan, los módulos son gratis"], correctAnswer: 1 },
    { id: 2, question: "¿Qué archivo especial debe tener una carpeta para ser considerada un paquete en versiones antiguas de Python?", options: ["main.py", "package.json", "__init__.py", "setup.py"], correctAnswer: 2 },
    { id: 3, question: "¿Cómo instalas paquetes de terceros desde internet?", options: ["Con git pull", "Usando el gestor de paquetes pip", "Descargando un .exe", "Con brew install"], correctAnswer: 1 },
    { id: 4, question: "¿Qué comando crea un entorno virtual (venv) en Python?", options: ["python -m venv nombre", "virtualenv start", "pip install env", "python create env"], correctAnswer: 0 },
    { id: 5, question: "¿Por qué es importante usar Entornos Virtuales?", options: ["Para mejorar el rendimiento del PC", "Para aislar dependencias y que los proyectos no interfieran entre sí", "Para simular otro sistema operativo", "Para evitar virus"], correctAnswer: 1 },
    { id: 6, question: "¿Qué archivo se genera comúnmente con 'pip freeze' para listar dependencias?", options: ["package.json", "requirements.txt", "Pipfile", "dependencies.md"], correctAnswer: 1 },
    { id: 7, question: "¿Cómo importas la función 'pi' del módulo 'math'?", options: ["import pi from math", "from math import pi", "require('math.pi')", "math.import(pi)"], correctAnswer: 1 }
  ],
  "1-14": [
    { id: 1, question: "¿Para qué sirven las pruebas unitarias?", options: ["Para compilar código más rápido", "Para verificar que una pieza individual de código funciona como se espera", "Para diseñar bases de datos", "Para generar interfaces de usuario"], correctAnswer: 1 },
    { id: 2, question: "¿Qué módulo estándar de Python se usa para pruebas unitarias?", options: ["pytest", "unittest", "testlib", "checkcode"], correctAnswer: 1 },
    { id: 3, question: "¿Cómo se llama el método para comprobar si dos valores son iguales en unittest?", options: ["assertEqual()", "checkEqual()", "isEqual()", "verify()"], correctAnswer: 0 },
    { id: 4, question: "¿Qué método de comprobación verifica si un valor es verdadero?", options: ["assertTrue()", "isTrue()", "checkTrue()", "assertTruthy()"], correctAnswer: 0 },
    { id: 5, question: "¿Qué método se ejecuta ANTES de cada prueba en una clase de pruebas?", options: ["beforeAll()", "start()", "setUp()", "initTest()"], correctAnswer: 2 },
    { id: 6, question: "¿Qué método se ejecuta DESPUÉS de cada prueba?", options: ["clean()", "tearDown()", "end()", "finishTest()"], correctAnswer: 1 },
    { id: 7, question: "¿Por qué es buena práctica escribir pruebas?", options: ["Porque lo exige la ley", "Para prevenir regresiones y facilitar el refactorizado seguro", "Para que el código ocupe más líneas", "No es una buena práctica"], correctAnswer: 1 }
  ],
  "1-15": [
    { id: 1, question: "¿Qué paso suele ser el inicial en un proyecto integrador?", options: ["Comenzar a escribir código", "Entender los requerimientos y diseñar la arquitectura", "Desplegar a producción", "Instalar librerías al azar"], correctAnswer: 1 },
    { id: 2, question: "¿Qué es GitHub?", options: ["Un lenguaje de programación", "Una plataforma para alojar proyectos y usar control de versiones Git", "Un entorno virtual", "Una base de datos"], correctAnswer: 1 },
    { id: 3, question: "¿Qué hace el comando 'git init'?", options: ["Sube el código a internet", "Inicializa un nuevo repositorio Git local", "Borra el proyecto", "Instala dependencias"], correctAnswer: 1 },
    { id: 4, question: "¿Qué es la 'Refactorización'?", options: ["Hacer el código más feo", "Modificar el código para mejorar su estructura sin cambiar su comportamiento", "Cambiar a un nuevo lenguaje", "Borrar todo y empezar de cero"], correctAnswer: 1 },
    { id: 5, question: "¿Qué herramienta te ayuda a verificar la calidad del código (linting) en Python?", options: ["flake8 o pylint", "Photoshop", "Jupyter", "Numpy"], correctAnswer: 0 },
    { id: 6, question: "¿Qué es un README.md?", options: ["Un archivo ejecutable", "La documentación principal del repositorio", "Un módulo de python", "El código fuente principal"], correctAnswer: 1 },
    { id: 7, question: "¿Es importante documentar el código (docstrings) en un proyecto real?", options: ["Sí, es vital para la mantenibilidad por otros desarrolladores", "No, nadie lo lee", "Solo si sobra tiempo", "No, ocupa mucha memoria"], correctAnswer: 0 }
  ]
};

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

data.forEach(session => {
  if (quizzes[session.id]) {
    session.quiz = quizzes[session.id];
  }
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('Successfully updated quizzes for Mod 1 Part 2 (Sessions 1.9 to 1.15)');
