// funciones

function mensaje(){
    console.log("Buenas Tardes");
}

mensaje()


// funcion con parametros
function saludo(nombre){
    console.log("Hola "+nombre);
}

saludo("Juan")

// funciona para ver si un numero es par o impar

function es_par(numero){
    if(numero%2==0){
        console.log(numero+" es par");
    }else {
        console.log(numero+" es impar");
    }
}

es_par(25)


// ejercicio
// Cree un programa que permita generar los números entre el 0 y 25
// muestre cuantos números son pares y cuantos impares
// utilice una funcion para saber si son pares o no

function true_par(num){
    if (num%2 == 0){
        return true;
    } else {
        return false;
    }
}
let x=1;
let contPar=0;
let contImpar=0;
while (x<26){
    console.log(x);
    if (true_par(x)){
        contPar++;
    } else {
        contImpar++;
    }
    x++;
    if (x>25){
        console.log("Hay "+contPar+" numero pares");
        console.log("Hay "+contImpar+" numero impares");
    }
}




