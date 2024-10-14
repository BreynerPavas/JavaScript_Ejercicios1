window.onload = () =>{
    // Dadas 2 variables booleanas:
    let booleano1 = true;
    let booleano2 = false;

    // Crear una variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2.
    let booleanoAnd = (booleano1 && booleano2);
    console.log(booleanoAnd);
    // Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2.
    let booleanoOr = (booleano1||booleano2);
    console.log(booleanoOr);
    // Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1.
    let booleanoNot = !booleano1;
    console.log(booleanoNot);
    // Crear variable booleanoMix0 cuyo valor sea la comparación booleana 
    //(booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2).
    let booleanoMix0 = ((booleano1||booleano2)&&(booleano1||(!booleano1&&!booleano2)));
    console.log(booleanoMix0);

}