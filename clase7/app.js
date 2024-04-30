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


// Array

let array=[]

for (i = 0;i <= 20; i++){
    array.push(i);
}

console.log(array)

// ejercicios
// crear una funcion que permita mostrar el contenido de un arrglo


function mostrar(array){
    for (i=0; i<= array.length;i++){
        console.log(array[i]);
    }
}

let numeritos=[]
for (i = 0;i <= 20; i++){
    numeritos.push(i);
}

mostrar(numeritos)

// método forEach
// permite recorer arreglos

let numeros=[2,4,6,8];

numeros.forEach(function(elemento,i,arreglo){
    arreglo[i]=Math.pow(elemento,2);
})
console.log(numeros);


let suma=0;
let numbers = [65,44,12,4];
numbers.forEach(myFunction)

function myFunction(item){
    suma = suma + item;
    document.write("<br>"+"valor : "+item+" total: "+suma)
}

// cree un arreglo con elementos aleatorios
// Muestre el promedio de los avalores del arrglo
// Muestre el mayor y el menor elemento del arreglo

let aleatorio=[];

for (i=0;i<=10;i++){
    aleatorio[i]=Math.ceil((Math.random()* 100) + 1);
    if (i==0){
        aleatorioMaximo=aleatorio[i];
        aleatorioMinimo=aleatorio[i];
    } else {
        if (aleatorio[i]>aleatorioMaximo){
            aleatorioMaximo=aleatorio[i];
        }
        if (aleatorio[i]<aleatorioMinimo){
            aleatorioMinimo=aleatorio[i];
        }
    }
}
console.log(aleatorio)
let suma2=0;
aleatorio.forEach (function(elemt){
    suma2 += elemt;
});

let promedio = suma2/aleatorio.length;
console.log("El promedio es: "+promedio)
console.log("El numero maximo es: "+aleatorioMaximo);
console.log("El numero minimo es: "+aleatorioMinimo);



// Cree un areglo con 5 nombres de alumnos
// y para cada alumno en otro areglo sus notas

// muestre el nombre del alumno con nota mayor

let alumnos=["Juan","Maria","Pedro","Diego","Paz"];
let notas=[6.5,4.4,5.4,6.8,1.3];


for (i=0;i<=notas.length;i++){
    if(i==0){
        posicion=i;
    } else{
        if (notas[i]>notas[posicion]){
            posicion=i;
        }
    }
}

console.log("El alumno con mayor nota es: "+alumnos[posicion])

