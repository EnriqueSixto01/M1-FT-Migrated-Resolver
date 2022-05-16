//========================================== contar valores de una propiedad ======================================
// const obj = [
//   { idioma: "inglés", editorial: "Sarasa" },
//   { idioma: "inglés", editorial: "Scholastic" },
//   { idioma: "castellano", editorial: "emece" },
// ];

// let aux = [];
// for (let i in obj) {
//   if (!aux.includes(obj[i].idioma)) aux.push(obj[i].idioma);
// }

// console.log(aux.length);

// //============================================= printStaff ===========================================================
const hogwarts = {
  staff: {
    headmaster: {
      name: "Albus Percival Wulfric Brian Dumbledore",
    },
    keeperOfKeys: {
      name: "Rubeus Hagrid",
    },
    potionsMaster: {
      name: "Severus Snape",
    },
    headOfGryffindor: {
      name: "Minerva McGonagall",
    },
  },
};

// let staff = [];
// for (let key in hogwarts.staff) {
//   staff.push("The " + key + " is " + hogwarts.staff[key].name);
// }
// console.log(staff);


const printStaff = function (objeto) {
  let sendArray = [];
  let array = Object.values(objeto)[0];
    //console.log(array)
  for (var [key1, value1] of Object.entries(array)) {
      // console.log(key1)
      // console.log(value1)
      // console.log(Object.entries(array))
    // for (var [key2, value2] of Object.entries(value1)) {
    //     console.log(Object.entries(value1))
    //     console.log(value2)
      sendArray.push("The " + key1 + " is " + value1.name);
    //}
  }
  return sendArray;
};

console.log(printStaff(hogwarts));

//======================================= Contar Propiedades de un objeto ========================================
var count = {
  a: {
    a1: 10,
    a2: "10",
    a3: { a3a: "10", a3b: "10", a3c: { a3c1: true } },
  },
  b: 2,
  c: [1, { a: 1 }, "Duda"],
};

// var countProps = function(count) {
//     for(let

//  }

//  console.log(countProps(count))

const numObjct = {
  name: "enrique",
  lastName: "sixto",
  age: "26",
  d: {
    a: { c: 8 },
    b: 5,
  },
  f: {
    g: 8,
  },
};

function countProp(objeto) {
  let aux = [];
  for (i in objeto) {
    //iteramos el primer nivel de porp del objeto
    if (typeof objeto[i] === "object") {
      //preguntamos si alguna popiedad tiene como valor otro objeto
      for (key in objeto[i]) {
        //iteramos sobre las propiedades de ese objeto como valor del anterior objeto
        //se podria decir que iteraos en el segundo nivel de porp del objeto
        if (typeof objeto[i][key] === "object") {
          for (key2 in objeto[i][key]) {    //iteramos sobre el 3 nivel del objeto
            aux.push(key2); //pusheamos al array solo propiedades
            console.log(key2)
          }
        }
        aux.push(key); //volvemos a pushear al array solo propiedades
        console.log(key);
      }
      
    }
    aux.push(i)
    console.log(i)
  } 

  return aux;
}

//console.log(countProp(numObjct));
const counObj = {
  name: "luis",
  age: 26,
};

function countProp2(objeto) {
  if (Object.keys(objeto).length === 1) return 1; //si el objeto solo tiene una propiedad
  return countProp2(Object.keys(objeto).slice(1)) + 1;
}
console.log(countProp2(counObj))
//console.log(Object.keys(counObj)[1])

// var cars = {
//   label: "Autos",
//   subs: [
//     {
//       label: "SUVs",
//       subs: [],
//     },
//     {
//       label: "Trucks",
//       subs: [
//         {
//           label: "2 Wheel Drive",
//           subs: [],
//         },
//         {
//           label: "4 Wheel Drive",
//           subs: [
//             {
//               label: "Ford",
//               subs: [],
//             },
//             {
//               label: "Chevrolet",
//               subs: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "Sedan",
//       subs: [],
//     },
//   ],
// };


// const objRe = {
//   name: "enrique",
//   lastName: "sixto",
//   age: "26",
//   d: {
//     a: { c: 8, r: 9 },
//     b: 5,
//   },
//   f: {
//     g: 8,
//   },
// };

// var findObjectByLabel = function (obj, label) {
//  for(let key in obj){
//    if(obj[key] === label)
//   return true 
//  }
//    //si esta la propiedad del obj que se pasa por parametro devuelve el value de esa propiedad
//   for (var i in obj) {
//     //hacemos un recorrido al objeto
//     if (obj.hasOwnProperty(i)) {
//       //preguntamos si en cada iteracion la prop coincide con la que se pasa por parametro
//       var foundLabel = findObjectByLabel(obj[i], label);
//       if (foundLabel) {
//         return foundLabel;
//       }
//     }
//   }
//   return null;
// };

// console.log(findObjectByLabel(objRe, 9));
