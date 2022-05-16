function timeConversion(time) {
  // Recibe una hora en formato 12 horas y retorna la hora en formato 24 horas
  // Ejemplo:
  // timeConversion("12:00 AM") // "00:00"
  // timeConversion("12:00 PM") // "12:00"
  // timeConversion("27:00") // false
  // timeConversion("12:60") // false
  // timeConversion("09:00 PM") // "21:00"
  // tu codigo acá
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.

/*
Crear una funcion saludar que pueda fijar cada vez que la guardo en una variable distintos saludos.
Recibira en la funcion interna el nombre a quien tiene que saludar y retornara el saludo correspondiente seguido por el nombre al ser invocada
*/
function saludar(saludo) {
  return function (nombre) {
    return saludo + " " + nombre;
  };
}

var saludo = saludar("Hola!");
console.log(saludo("Enrique"));

/*---------------------------------------------------*/

/* 
Crear una funcion contador que debe incrementar de a uno cada vez que invoco la funcion.
Adicionalmente agregarle una funcion que cuando pasen 8 seg incremente el contador a 100.

*/
function contador() {
  let count = 0;
  setTimeout(function () {
    count = 100;
  }, 8000);
  return function () {
    
    count ++
    return count;
  };
}

var cont = contador();
console.log(cont());
console.log(cont());
// console.log(cont());

/*---------------------------------------------------*/
/*
  Retorna una funcion que cuando sea invocada retorne 
un valor creciente.
 el primer valor debe ser el que se le pase por 
parametro a la funcion global.
 
 ejemplo: const Pepe = creciendo(20);
 Pepe(); // "El proximo año va a tener 21"
 Pepe(); // "El proximo año va a tener 22"
*/
function creciendo(n) {
  //let age = n;
  return function () {
    n++;
    return "El proximo año va a tener " + n;
  };
}
var Pepe = creciendo(20);
console.log(Pepe());
console.log(Pepe());
var Luis = creciendo(25);
console.log(Luis());

/*---------------------------------------------------*/
// Retorna una funcion que cuando sea invocada con un valor mayor a 50 retorne un valor decreciente,
// pero si el valor es menor o igual que 50 retorne un valor creciente
// el primer valor debe ser el que se le pase por parametro a la funcion global.
// ejemplo: const newCounter = arribaAbajo(49);
// newCounter(); // 50
// newCounter(); // 51
// newCounter(); // 52
// newCounter(); // 53
// ejemplo: const newCounter = arribaAbajo(52)
// newCounter(); // 51
// newCounter(); // 50
// newCounter(); // 49
function arribaAbajo(n){
let a = n;                //paso por valor a = 49 y n = 49
return function () {
  if (n <= 50) { 
    a++;         
    return a;
  } else {
    a--;
    return a;
  }
}
}

var newCounter = arribaAbajo(52);
console.log(newCounter()); // 51
console.log(newCounter()); // 50
console.log(newCounter()); // 49
console.log(newCounter()); // 48
var newCounter2 = arribaAbajo(49); //paso por valor a = 49 y n = 49
console.log(newCounter2()); // 50   49 <= 50 --> a++ --> a=50 | n=49 
console.log(newCounter2()); // 51   49 <= 50 --> a++ --> a=51 | n=49
console.log(newCounter2()); // 52   49 <= 50 --> a++ --> a=52 | n=49
console.log(newCounter2()); // 53
/*---------------------------------------------------*/

// Implementar la funcion closureSum que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  return function (number) {
    return number * multiplier;
  };
};
var multByFour = closureMult(4);
console.log(multByFour(2));
console.log(multByFour(5));
var multBySix = closureMult(6);
console.log(multBySix(4));

/*---------------------------------------------------*/

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
}

module.exports = {
  timeConversion,
};
