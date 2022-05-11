//========================================= Eliminar elemntos repetidos con forEach ===================================
// let data = [1, 2, 6, 1, 2, 5, 9, "33", "33"];

// var result = [];
// data.forEach((item) => {
//   //pushes only unique element
//   if (!result.includes(item)) {
//     result.push(item);
//   }
// });
// console.log(result); //[1,2,6,5,9,'33']

//=================================================================================================================
function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let u = arreglo1.concat(arreglo2).sort((a, b) => a - b);
  let min = Math.min(...arreglo1);
  let min2 = Math.min(...arreglo2);

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

console.log(buscoInterseccion([10, 15, 24, 19], [78]));

//===================================================================================================================
// function sumaDeArrays(array) {
//   // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
//   // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
//   // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
//   // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
//   // Ejemplo:
//   //            [[1, 3], [10, 20], [4, 5],   2] ===> [4,30,9,2]
//   //       i      [0]      [1]      [2]     [3]
//   // [i][j]      [0][1]  [0][1]    [0][1]
//   // length        2        2         2      1

//   let newArr= [];
//   let sum =0;
//   for(let i=0; i< array.length;i++){
//     if(Array.isArray(array[i]) && array[i].length < 3){
//       for(let j=0; j<array[i].length;j++){  //j = 0; j<2; j++ recorremos cada array dentro del array
//         if(typeof array[i][j] === 'number')
//           sum+=array[i][j];
//       }  newArr.push(sum)
//         sum =0;
//     }
//     else {
//       newArr.push(array[i])
//     }
//   }
//    return newArr;

// };
// console.log(sumaDeArrays([[1, 3], [10, 20], [4, 5], 2]))

function numeroEnComun(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return array1[i];
        // console.log(aux)
      }
    }
  }
  let min = Math.min(...array1);
  let min2 = Math.min(...array2);
  if (min < min2) return min;
  else {
    return min2;
  }
}

console.log(numeroEnComun([2, 15, 24], [19, 78, 10]));
