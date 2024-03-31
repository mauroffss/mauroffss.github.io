let randomNumber = Math.floor(Math.random() * 100) + 1;  //Declaración e inicialización de la variable randomNumber que establece un número aleatorio entre 1 y 100. Con Math.random()*100 se genera un número entre 0 y 99.999, con Math.floor se redondea un entero abajo para evitar decimales y mediante el +1 se incluye al 100 y se comienza a ejecutar en 1

const guesses = document.querySelector(".guesses");  //Selecciona a la clase "guesses" del documento HTML con el método querySelector y lo almacena en la constante declarada guesses. Sirve para almacenar una referencia a los párrafos de resultados en el HTML a los cuales se les insertará un valor
const lastResult = document.querySelector(".lastResult");  //Selecciona a la clase "lastResult" del documento HTML con el método querySelector y lo almacena en la constante declarada lastResult. Sirve para almacenar una referencia a los párrafos de resultados en el HTML a los cuales se les insertará un valor
const lowOrHi = document.querySelector(".lowOrHi");  //Selecciona a la clase "lowOrHi" del documento HTML con el método querySelector y lo almacena en la constante declarada lowOrHi. Sirve para almacenar una referencia a los párrafos de resultados en el HTML a los cuales se les insertará un valor

const guessSubmit = document.querySelector(".guessSubmit");  //Selecciona a la clase "guessSubmit" del documento HTML con el método querySelector y lo almacena en la constante declarada guessSubmit
const guessField = document.querySelector(".guessField");  //Selecciona a la clase "guessField" del documento HTML con el método querySelector y lo almacena en la constante declarada guessField (es unar referencia al campo de texto del formulario)

let guessCount = 1;  //Declaración e inicialización de la variable guessCount con el valor de 1. Esta variable servirá para hacer el conteo de intentos que ha hecho el jugador
let resetButton;  //Declaración de la variable resetButton. Es una referencica al botón de reinicio
guessField.focus();  //Establece el enfoque del cursor en el campo de entrada de guessField, el cursor se coloca automáticamente ahí, así el usuario puede ingresar su intento tan pronto se cargue la página sin tener que hacer click en el campo del formulario

function checkGuess() {  //Declara una función llamada checkGuess que responde apropiadamente acorde al número ingresado por el usuario en X intento
    let userGuess = Number(guessField.value);  //Declaración e inicialización de la variable userGuess. Establece su valor al valor actual ingresado dentro del campo de texto de guessField, además a traves de Number() se asegura que el valor ingresado sea un número
    if (guessCount === 1) {  //Condicional a ejecutar si la igualdad estricta es True entre 1 y el valor de la variable guessCount, es decir, si es el primer intento del jugador
      guesses.textContent = "Intentos anteriores: ";  //Si la condición anterior resulta cierta, entonces establece el contenido de texto del párrafo guesses con el valor de "Intentos anteriores: "
    }
    guesses.textContent += userGuess + " ";  //Mediante el operador de asignación += concatena la variable de userGuess y un espacio en blanco al contenido de texto del párrafo guesses. Esto para ir señalando los intentos del jugador para que no vuelva a repetir los números
  
    if (userGuess === randomNumber) {  //Condicional a ejecutar si la igualdad estricta es True entre userGuess y randomNumber, es decir, verifica si el usuario acertó el número y ganó el juego
      lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";  //Establece el contenido de texto del párrafo lastResult con el valor de "¡Felicidades! ¡Lo adivinaste!"
      lastResult.style.backgroundColor = "green";  //Establece el contenido de lastResult con un fondo de color verde
      lowOrHi.textContent = "";  //Establece el contenido de texto del párrafo lowOrHi con una cadena vacía, sirve para borrar su contenido de texto
      setGameOver();  //Se ejecuta la función setGameOver()
    } else if (guessCount === 10) {  //Condicional alternativa a la primera opción a ejecutar si la igualdad estricta es True entre guessCount y 10, es decir, se aplicará si el usuario se acabó todos los intentos para adivinar el número y perdió
      lastResult.textContent = "¡¡¡Fin del juego!!!";  //Establece el contenido de texto del párrafo lastResult con el valor de "¡¡¡Fin del juego!!!"
      setGameOver();  //Se ejecuta la función setGameOver()
    } else {  //Condicional default a ejecutar si las opciones anteriores no se cumplen, es decir, el jugador esta en el intermedio del juego tratando de adivinar el número, en este caso es si falla pero todavía le quedan intentos
      lastResult.textContent = "¡Incorrecto!";  //Establece el contenido de texto del párrafo lastResult con el valor de "¡Incorrecto!"
      lastResult.style.backgroundColor = "red";  //Establece el contenido de lastResult con un fondo de color rojo
      if (userGuess < randomNumber) {  //Condicional anidada a ejecutar que verifica si el número ingresado por el usuario es menor al número a adivinar
        lowOrHi.textContent = "¡El número es muy bajo!";  //Establece el contenido de texto del párrafo lowOrHi con el valor de "¡El número es muy bajo!"
      } else if (userGuess > randomNumber) {  //Condicional anidada a ejecutar que verifica si el número ingresado por el usuario es mayor al número a adivinar
        lowOrHi.textContent = "¡El número es muy grande!";  //Establece el contenido de texto del párrafo lowOrHi con el valor de "¡El número es muy grande!"
      }
    }
  
    guessCount++;  //Aumenta el valor de la variable guessCount en 1, incrementando el número de intentos del usuario para adivinar el número y tenga un nuevo turno
    guessField.value = "";  //Se vacía el valor del campo entrada de texto, eliminando el texto previamente ingresado para que pueda intentar acertar con un nuevo número
    guessField.focus();  //Establece el enfoque del cursor en el campo de entrada de guessField, el cursor se coloca automáticamente ahí, así el usuario puede ingresar el próximo intento
  }

guessSubmit.addEventListener("click", checkGuess);  //Escucha de evento al botón guessSubit ("Enviar respuesta/Submit guess"), el cuál escucha al click sobre el mismo botón y ejecuta al manejador de eventos checkGuess para obtener una respuesta al resultado de su intento

function setGameOver() {  //Declara una función llamada setGameOver que se ejecutará una vez se termine el juego. Esta función no le permitirá ingresar ni verificar más intentos al jugador y crea un botón de reseteo
    guessField.disabled = true;  //Desactiva el campo de texto que permite continuar ingresando intentos
    guessSubmit.disabled = true;  //Desactiva el botón que permite continuar enviando los intentos ingresados para verificar el resultado
    resetButton = document.createElement("button");  //Crea un elemento de button con createElement y lo almacena en la variable resetButton antes declarada
    resetButton.textContent = "Iniciar nuevo juego";  //Establece el contenido de texto del botón resetButton en "Iniciar nuevo juego"
    document.body.append(resetButton);  //Agrega al elemento resetButton como un hijo de body, colocándolo al final del body en el HTML existente
    resetButton.addEventListener("click", resetGame);  //Escucha de evento al botón resetButton, el cuál escucha al click sobre el mismo botón y ejecuta al manejador de eventos resetGame para resetear el juego 
  }

function resetGame() {  //Declara una función llamada resetGame que se ejecutará una vez el usaurio haga click sobre el botón de resertButton anteriormente creado. Esta función permite regresar todo al estado inicial para jugar de nuevo
    guessCount = 1;  //Actualiza el valor de la variable guessCount al primer intento nuevamente
  
    const resetParas = document.querySelectorAll(".resultParas p");  //Se utiliza para seleccionar los tres párrafos de resultado (resultParas) y los almacena todos a forma de lista en la constante declarada resetParas
    for (let i = 0; i < resetParas.length; i++) {  //Búcle for utilizado para iterar sobre cada uno de los tres párrafos de resultado (resultParas) almacenados en la constante resetParas
      resetParas[i].textContent = "";  //En cada iteración va configurando el texto de cada párrafo a una cádena vacía para borrar su información y restablecerlos a sus valores originales al reiniciar el juego
    }

    resetButton.parentNode.removeChild(resetButton);  //Remueve el botón de reinicio (resetButton) anteriormente añadido en el body
  
    guessField.disabled = false;  //Activa nuevamente el campo de texto que permite continuar ingresando intentos
    guessSubmit.disabled = false;  //Activa nuevamente el botón que permite continuar enviando los intentos ingresados para verificar su resultado
    guessField.value = "";  //Se vacía el valor del campo entrada de texto, eliminando cualquier texto previamente ingresado
    guessField.focus();  //Establece el enfoque del cursor en el campo de entrada de guessField, el cursor se coloca automáticamente ahí, así el usuario puede ingresar nuevamente los intentos del próximo juego 
  
    lastResult.style.backgroundColor = "white";  //Establece el contenido de lastResult con un fondo de color blanco
  
    randomNumber = Math.floor(Math.random() * 100) + 1;  //Actualiza a la variable randomNumber con otro número aleatorio
  }
  