window.onload = () =>{
    let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },


        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    // Crea un array con la gente cuyo nombre tiene 4 letras sin utilizar el método filter de los arrays y muéstralo por consola.
    let arrayGente4  = [];
    for(var i = 0;i < gente.length; i++){
        if(gente[i].nombre.length == 4){
            arrayGente4.push(gente[i]);
        }
    }
    console.log(arrayGente4);
    // Crea un array con la gente cuyo nombre empieza por J y sean menores de 40 años sin utilizar el método filter de los arrays y muéstralo por consola.
    let arrayGenteJ40 = [];
    for(var i = 0;i<gente.length;i++){
        if(gente[i].nombre.charAt(0) === "J"){
            if(gente[i].edad <40){
                arrayGenteJ40.push(gente[i]);
            }
        }
    }
    console.log(arrayGenteJ40);
}