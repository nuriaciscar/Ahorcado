# AHORCADO

## COMPONENTES

### App

// - Crear un array de palabras

- Elegir de manera aleatoria una palabra
  // - Asigna a cada letra de la palabra un index y una propiedad booleana de correcto
- Ejecuta una función que settea la current letter al botón pulsado
  //- Recorre la palabra y busca coincidencias entre currentLetter y la palabra
  - Si hay coincidencia, envía la letra y la posición a Word
  - Si no, aumenta los fallos
  - Cambia la clase del botón dependiendo de si es correcto o no
- Almacena el número de fallos

### Hangman

- RECIBE el número de fallos y renderiza la parte del muñeco correspondiente

### Word

- RECIBE un número de caracteres
- Renderiza tantos huecos como caracteres recibidos
- RECIBE una letra y su posición o posiciones y las renderiza

### Keyboard Button

- Renderizar un texto RECIBIDO
- Ejecutar una función RECIBIDA

### Modal fin de juego

- Si los fallos son igual a 11, renderiza un mensaje
- Si todas las letras de la palabra son correctas, renderiza un mensaje
