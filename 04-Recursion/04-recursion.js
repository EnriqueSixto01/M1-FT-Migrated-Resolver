// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

//    
//producto([5]) =      5                                          
//producto([2,5]) =   2 * producto([5])                 producto([2,5]) = 2 * 5 = 10
//producto([1,2,5]) = 1 * producto([2,5])               producto([1,2,5]) = 1 * 10 = 10
const producto = function (array) {
  //escribe aqui tu codigo [7, 9, 3]
  if(array.length === 1) return array[0]
  return array.shift() * producto(array)

};
console.log(producto([5,5]))
// Recursividad en javascript con objetos
// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//    prop2:{value:5}
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
let obj = {
  school: {
    hogwarts: {
      headmaster: {
        name: {
          first: "Albus",
          last: "Dumbledore",
        },
      },
    },
  },
  prop1: 5,
  prop2: 6,
};

  const isThere = function (obj, value) {
    // tu código aca
    for(let i in obj){
      if(obj[i] === value) return true
      else if(typeof obj[i] === 'object')  {
        var find = isThere(obj[i], value)
        if(find) return find
        }
    } 
    return false 
};
console.log(isThere(obj, 6));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Ejercicio 1
// Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

//Ejemplo
// parImpar(20)
// "Par"

let parImpar = (value) => {
  if(value === 1) return "Es Impar"
  else if(value === 0) return "Es Par"
  else 
    return parImpar(value - 2)
}

console.log(parImpar(15))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 2
// Objetivo: Realizar un contador decreciente hasta llegar a 1, que arranque del numero que se le pasa por parametro
// Desafio: Devolver los numeros en un array

// Ejemplo
// restar(8)
// (8)  [8, 7, 6, 5, 4, 3, 2, 1]

let nuevoArray = [];

function restar(n) {
  nuevoArray.push(n)
  if(n === 1) return nuevoArray;
  return restar(n-1)
  // return n + ' ' + restar(n-1) 
  
}
console.log(restar(10))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 3

//Objetivo: Realizar una funcion que invierta el orden del string recibido
// Ejemplo: reverse("hola susuna")
// --> 'anusus aloh'

function reverse(str) {
  if(str.length < 2) return str;
  return reverse(str.slice(1)) + str[0]
}

console.log(reverse('hola'))

// "hola"
//  0123
//   1----
//   "ola" + "h"------->
/*                   "ola"
                      012
                       "la"  + "o"  ----------->
                                                "la"
                                                  "a" + "l"
                                                  --------"a"
                                                  "a+ l + o + h"*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ultimo ejercicio

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)


  var countArray = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        sum = sum + countArray(array[i]);
      } 
      else {
        sum = sum + array[i];
      }
    }
    return sum;
  
};

//console.log(countArray([1, [2, [3,4]], [5,[6,[5]]],7]))
console.log(countArray([1, 2]))

module.exports = { producto, isThere };
