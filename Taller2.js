//Llama al botón desde el html con el identificador de cada uno y se le asigna una función al hacerle la acción click sobre el botón
const buttons1 = document.getElementById("boton1");
buttons1.addEventListener('click', calculo)

const buttons2 = document.getElementById("boton2");
buttons2.addEventListener('click', limpiar)

const buttons3 = document.getElementById("boton3");
buttons3.addEventListener('click', aleatorio)

const buttons4 = document.getElementById("boton4");
buttons4.addEventListener('click', Loteria)

const buttons5 = document.getElementById("boton5");
buttons5.addEventListener('click', agregarTarea)

const buttons6 = document.getElementById("boton6");
buttons6.addEventListener('click', digitoverificador)

//Se declaran y se atribullen cada función que se realizará cuando se active el botón

//Función para la calculadora
function calculo() {
//Se obtienen los datos que se requiere para hacer un calculo aritmético simple Dos valores y la operación aritmética
  var numero1 = document.getElementById("Numero1").value;
   
  var operacion = document.getElementById("Operacion").value;
 
  var numero2 = document.getElementById("Numero2").value;

//Se revisa si el imput de la variable operación es válido como operador % porcentaje, + sumar, - restar, / dividir, * multiplicación
  if (operacion === "%" || operacion === "+" || operacion === "-" || operacion === "/" || operacion === "*"){
    //Se realiza el calculo de porcentaje de forma manual
    if (operacion == "%"){
      var resultado = (numero1 * numero2)/100;
    }
    //Se utiliza la función eval que permite realizar una operación matemática con variables tipo string que en realidad son numéricos, 
    //excepto % el que se realiza de forma manual
    else{
      var resultado = eval(numero1 + operacion + numero2)
    }
    //Se  muestra el resultado al usuario de forma de ventana emergente
    alert(" resultado " + resultado);
  }
  //Se le informa que no se pudo realizar la operación dado que no ingresó un caracter válido en esta ocación y se le informa de cuales lo son
  else{
    alert("No introdujo una operación válida, por favor ingrese una de estas: %, *, +, -, /")
  }
  
}

function limpiar(){
  var numero1 = NaN;
  var numero2 = NaN;
  var operación = NaN;
}

//Se crea un número aleatorio para las funciónes que lo requieran, en este caso el juego aleatorio
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//Función para el juego de adivinanza 
function aleatorio(){
  //Se obtiene el valor de apuesta que ingresa el usuario 
  var adivina = document.getElementById("adivinar").value;

  //Se evalua si es igual el numero apostado con el real
  if (adivina == numeroAleatorio){
    //Se le informa a través de una ventana emergente al usuario que ha ganado
    alert("Felicidades, has ganado.")
  }
  //Se evalua si el valor apostado es menor que el valor real
  else if(adivina < numeroAleatorio){
    //Se le informa a través de una ventana emergente al usuario que su apuesta es menor que el número real
    alert("Haz puesto un número menor")
  }
  //Si no es ningúna de las anteriores entonces es porque el valor es mayor
  else{
    //Se le informa a través de una ventana emergente al usuario que su apuesta es mayor que el número real
    alert("Haz puesto un número mayor")
  }
}

//Función para el juego de la lotería
function Loteria(){
  //Se crean las matrices necesarias para realizar el cálculo 
  const premio = [1,2,3,4,5,6]; //Se crea el boleto de la lotería con el que se va a comparar
  const billete = []; //Se crea la matríz en donde se guardará cada número del billete del usuario
  const comparacion = []; //Se utilizará para poder mostrar los números que le achuntó el usuario 
  //Se guardan todos los 6 números
  billete.push(document.getElementById("loteria1").value);
  billete.push(document.getElementById("loteria2").value);
  billete.push(document.getElementById("loteria3").value);
  billete.push(document.getElementById("loteria4").value);
  billete.push(document.getElementById("loteria5").value);
  billete.push(document.getElementById("loteria6").value);

  //Se recorre y compara cada número de tanto el número ganador con el billete ingresado del usuario
  for (var i = 0; i < 6; i++){
    if (premio[i] == billete[i]){
      //Se guardan los números que son iguales en la matriz comparación 
      comparacion.push(billete[i]);
    }
  }
  if (comparacion.length == 6){
    alert("Haz ganado");
  }
  //Se muestran los resultados de la comparación y se muestran los número que concuerdan
  alert("El número ganador es: " + premio + " y los números que coinciden son: " + comparacion + " de: " + billete);
}

function agregarTarea() {
  // Obtener el valor del input
  var nuevaTarea = document.getElementById("Nuevatarea").value;
  
  // Validar que se haya ingresado una tarea
  if (nuevaTarea === "") {
    alert("Debes ingresar una tarea");
    return;
  }
  
  // Crear un nuevo elemento li para la tarea
  var li = document.createElement("li");
  
  // Agregar el texto de la tarea al li
  li.appendChild(document.createTextNode(nuevaTarea));
  
  // Agregar el li a la lista de tareas
  document.getElementById("lista-tareas").appendChild(li);
  
  // Limpiar el valor del input
  document.getElementById("Nuevatarea").value = "";
  
  // Agregar un botón para eliminar la tarea
  var botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "Eliminar"; // Se utiliza para agregar el string "Eliminar" al botón.
  botonEliminar.onclick = function() { // Se utiliza para usar la función cuando se llame al botón 
    eliminarTarea(this); // Se le entrega la tarea a eliminar 
  }
  li.appendChild(botonEliminar); // Se utiliza para adjuntar el botón "Eliminar" en la lista para cada una de las tareas
}

// Función para eliminar una tarea de la lista
function eliminarTarea(boton) {
  // Obtener el li que contiene la tarea
  var tarea = boton.parentNode; 
  
  // Obtener el ul que contiene la lista de tareas
  var listaTareas = tarea.parentNode;
  
  // Eliminar el li de la lista de tareas
  listaTareas.removeChild(tarea);
}

// Función para calcular el dígito verificador del RUN
function digitoverificador(){
  // Se obtiene el elemento "rut" ingresador por el usuario
  var digitoV = document.getElementById("rut").value;
  // Se inicializan y crean valores que son necesarios para validar o calcular el dígito verificador del RUN
  var valido = true;
  const calculoDigito = []; // Vector que tendrá los valores que cambiarán para el cálculo
  const multiplicador = [2,3,4,5,6,7,2,3,4,5,6,7,2,3,4,5,6,7]; // Vector que posee  loas cantidades utilizar para el cálculo

  // Ciclo para buscar caracteres que usualmente son introducidos y que no sirven para el cálculo, de tamaño de lo ingrsado por el usuario
  for (var i = 0; i < digitoV.length; i++){
    if (digitoV[i] == "." || digitoV[i] == ","){ // En caso de que tenga puntos o comas envía una ventana emergente pidiendo que reingrese la data 
      //como se requiere
      alert("Por favor no utilice puntos ni guión verificador");
      i = digitoV.length;
      valido = false; // En caso de que se cumpla la conición no se realizará el calculo
    }
    if (digitoV[i] == "-"){ // En caso de que tenga guión envía una ventana emergente pidiendo que reingrese la data 
      //como se requiere
      alert("Por favor no utilice guión ni dígito verificador");
      i = digitoV.length;
      valido = false; // En caso de que se cumpla la condición no se realizará el calculo
    }
  }
  // Se crean y se inicializan variables para ayudar al cálculo
  var primeraSum = 0;
  var segundaSum = 0;
  var digitoRut = 0;
  // Evalua si lo ingresado cumplió con los requisitos evaluados anteriormente
  if (valido){
    // Se le agrega el valor a la matriz vacía para el cálculo y después reailza los primeros cálculos en la misma iteración
    // usando el vector de los múltiplos y realiza la suma de inmediato en la variable primeraSum
    for (var i = 0; i < digitoV.length; i++){
      calculoDigito[i] = digitoV[digitoV.length - 1 - i];
      calculoDigito[i] = calculoDigito[i] * multiplicador[i];
      var primeraSum = primeraSum + calculoDigito[i];
    }
    // Se realizan los cálculos aritméticos correspondientes 
    segundaSum = primeraSum/11; // Se divide la suma por 11 y el resultado se guarda en otra variable llamada segundaSum
    segundaSum = Math.floor(segundaSum); // Se le eliminan los decimales al resultado
    segundaSum = segundaSum * 11; // Se vuelve a multiplicar por 11
    primeraSum = primeraSum - segundaSum; // Se realiza la sustración a la primeraSum con la segundaSum
    digitoRut = 11 - primeraSum; // A 11 se le resta el resultado 
    // Y por último se entregan los resultados e información entragada y cómo quedaría el rut con el dígito al usurio.
    alert("Su dígito verificador es: " + digitoRut + " por lo cual su rut completo sería: " + digitoV + "-" + digitoRut); 
  } 
}

// Todo esto conforme al cálculo que aparece en https://validarutchile.cl/calcular-digito-verificador.php

