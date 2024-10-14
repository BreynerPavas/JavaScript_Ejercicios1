window.onload = () => {
    // Crea una variable A cuyo valor sea el número 9, y después crea una variable B cuyo valor sea un string con el número 9. Desarrolla la lógica
    // para que cuando A == B muestre por consola “Son iguales”. ¿Qué pasa si en vez de tener A == B, comprobamos que A === B?
        let A = 9;
        let B = "9";
        console.log(A == B);
        console.log(A === B);
    // Crea una variable mochila que sea un array de elementos. Desarrolla la lógica para que: a) si mochila tiene más de 10 elementos, muestre por
    // consola el mensaje “No puedo cargar con tantas cosas”; b) si mochila contiene entre 10 y 2 elementos, se muestre por consola
    // “Qué bien voy con mi mochila”, y, si no,  muestre por consola “Creo q no necesito una mochila”.
    let mochila = [0,1,2,3,4,5,6,7,8,9,10];
    if(mochila.length > 10){
        console.log("esta mochila esta mas pesada que primo pequeño");
    }else if(mochila.length >=2 && mochila.length<=10){
        console.log("voy de lujo");
    }else{
        console.log("para que llevo mochila?");
    }
    // Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10.
    let contarHasta10 = 0;
    for(contarHasta10; contarHasta10 <=10;contarHasta10++){
        console.log(contarHasta10);
    }

    // Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario en el que si diaFestivo es true devuelva un console.log de 
    //‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.
    let diaFestivo = false;
    if(diaFestivo){
        console.log("hoy se juega hasta la madrugada");
    }else{
        console.log("a trabajar vago");
    }
    
    // Crea una variable arrayBucle tipo array vacía y rellénala con números del 4 al 18 utilizando un bucle.
    let arrayBucle = [];
    for(var i = 4;i<=18;i++){
        arrayBucle.push(i);
    }
    console.log(arrayBucle);
    
    // Recorre la variable creada anteriormente arrayBucle, suma todos sus elementos y guárdalos en una variable de nombre resultado.
    let sumatoria = 0;
    for(var i = 0;i<arrayBucle.length;i++){
        sumatoria += arrayBucle[i];
        
    }
    console.log(sumatoria);
    
    // Dado el siguiente array [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle for of y muestra por consola todos sus 
    //elementos. Después, recórrelo utilizando el bucle for in mostrando también por consola todos sus elementos.
    let array = ["Con","Sofia","aprendiendo","bucles"];
    for (const index of array) {
        console.log(index);
    }
    for (const key in array) {
        console.log(array[key]);
        
    }
    
    // Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
    let cont = 0;
    while (cont<=20) {
        if(cont%3 == 0 ){
            console.log("patata"+cont);
        }
        cont++;
    }
}
