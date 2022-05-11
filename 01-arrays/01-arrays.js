function invertirOrden(array) {
  // [1,2,"x"]
  // ["x",2,1]
  // Invertir el orden de los elementos del array que recibe por parametro
  // Que los ultimos elementos, pasen a ser los primeros
  // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO
  // debera ser devuelto
  // No vale usar el metodo "reverse"
  // [1, 4, 24, 10, -8, 6] -> [6,4,1]
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number")
      if (array[i] >= 0 && array[i] < 10) arr.unshift(array[i]);
  }
  return arr;
}

function numeroEnComun(array1, array2) {
  // Entre los dos array's que recibe la funcion por parametro
  // Buscar y retornar el valor en comun entre ellos
  //Deberia retornar el numero mas chico en caso de que no haya numeros en comun entre ambos arrays
  let u = array1.concat(array2).sort((a, b) => a - b);
  let min = Math.min(...array1);
  let min2 = Math.min(...array2);

  for (let i = 0; i < u.length; i++) {
    //const item = u[i];
    for (j = 1; j < u.length; j++) {
      if (u[i + 1] === u[i]) {
        return u[i];
      }
    }
  }
  if (min < min2) return min;
  return min2;
}

function sumaDeArrays(array) {
  // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
  // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
  // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  // Ejemplo: [[1, 3], [10, 20], [4, 5], 2]
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && array[i].length < 3) {
      let sum = 0;
      for (let j = 0; j < array[i].length; j++) {
        //j = 0; j<2; j++ recorremos cada array dentro del array
        if (typeof array[i][j] === "number") sum += array[i][j];
      }
      newArr.push(sum);
    }
     else {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

function mismoValorMismosElementos(numero, divisor) {
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Ejemplo divisor = 3 => [x,x,x] y si es divisor = 4 => [x,x,x,x]
  // vemos que todos los elementos deben tener el mismo valor
  // Siendo el número divisible entre el divisor, de no ser así, debe devolver false
  // es decir Si el resultado de la division no es un entero, deben devolver false
}

function elementoMenorYMayor(array) {
  // El Array recibido por props es un array que contienen numeros
  // Tenes que retornar un array
  // Solamente con el elemento menor y mayor del array recibido
  let mayor = array[0];
  let menor = array[0];
  let auxArr = [];
  for (let i = 1; i < array.length; i++) {
    if (menor > array[i]) {
      menor = array[i];
    }
    if (mayor < array[i]) {
      mayor = array[i];
    }
  }
  auxArr.push(menor, mayor);
  return auxArr;
}

/* ******************************************************

Que pasaria si los array recibidos fuesen multidimensionales?

****************************************************** */

module.exports = {
  numeroEnComun,
  invertirOrden,
  elementoMenorYMayor,
  sumaDeArrays,
  mismoValorMismosElementos,
};
