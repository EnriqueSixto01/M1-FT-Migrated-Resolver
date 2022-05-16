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



//countProp2({a:26, v:9}) = countProp2([a,v])
//countProp2(age:{a:26}) = countProp2({a:26})

// function countProp2(objeto) {
//   let aux = [];
//   for (let key in objeto) {
//     if (typeof objeto[key] === "object") {
//       aux.push(countProp2(objeto[key]));
//     }
    
//     aux.push(key);
//   }
//   return aux.flat();
// }
 
var countProps = function (obj) {
  var count = 0;
  for (var property in obj) {
    count++;
    if (typeof obj[property] === "object" && !Array.isArray(obj[property])) {
      count = count + countProps(obj[property]);
    }
  }
  return count;
};


console.log(countProps(numObjct));

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
          for (key2 in objeto[i][key]) {
            //iteramos sobre el 3 nivel del objeto
            aux.push(key2); //pusheamos al array solo propiedades
            console.log(key2);
          }
        }
        aux.push(key); //volvemos a pushear al array solo propiedades
        console.log(key);
      }
    }
    aux.push(i);
    console.log(i);
  }

  return aux + " --> " + aux.length;
}

console.log(countProp(numObjct));


//console.log(typeof ([1,2] + ' hola'))
