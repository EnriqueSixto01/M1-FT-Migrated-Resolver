
// function parImpar(num){
//   if(num%2 ===0) return 'Es par'
//   else return 'Es impar'
// }

// console.log(parImpar(101))

//======================================== Funcion ParImpar Recursivo =========================================
let parImpar = (value) => {
    if(value === 1) return "Es Impar"
    else if(value === 0) return "Es Par"
    else 
      return parImpar(value - 2)
  }
  
  console.log(parImpar(10))

// ======================================= Contar n Elementos de un array Recursivo ===================================
//-------stack execute------
//countStr(['well']) = return 1
//countStr(['bye', 'well']) = countStr(['well'])  + 1                   
//countStr(['hola', 'bye', 'well']) = countStr(['bye', 'well']) + 1

//countStr(['bye', 'well']) = 1 + 1
//countStr(['hola', 'bye', 'well']) = 2 + 1 = 3

  function countStr(arr){
    if(arr.length === 1) return 1
    console.log(arr)
    return countStr(arr.slice(1)) + 1 
  }

  console.log(countStr(['hi','bye','well']))



  const numObjct = {
    name: "enrique",
    lastName: "sixto",
    age: "26",
    d: {
      a: { c: 8 },
      b: 5,
    },
    // f: {
    //   g: 8,
    // },
  };

  function countProp2(objeto) {
    let aux = []
    for(let key in objeto){
      if(typeof objeto[key] === 'object'){
        aux.push(countProp2(objeto[key]))
        }
      aux.push(key)
    }
    console.log(aux.flat().length)
    //return aux.flat()
  }
  
  
 countProp2(numObjct) 
  // console.log(countProp2(numObjct));