window.onload = () => {
    //auxiliares
    const obj1 = {
        name : "pepito",
        age : 25
    }
    const obj2 = {
        name : "pepito",
        age : 30
    }
    const obj3 = {
        name : "Jepito",
        age : 25
    }
    //objetivo Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes':
    let arr = [obj1,obj2,obj3];
    //ajustes
    

    // TEST 1
    if (typeof arr === "object" && arr.length >= 0) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 2
      if (typeof arr[0] === "object") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 3
      if (typeof arr[1] === "object") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
       }
      // TEST 4
      if (typeof arr[2] === "object") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
    //   // TEST 5
      if (arr.length === 3) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 6
      if (arr[0].name === arr[1].name) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }


      // TEST 6
      if (arr[1].name === "pepito") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }


      // TEST 7
      if (arr[1].age > arr[2].age) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 8
      if (arr[0].age === 25) {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 9
      if (typeof arr[2].name === "string") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }


      // TEST 10
      if (arr[2].name[0] === "J") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }

}