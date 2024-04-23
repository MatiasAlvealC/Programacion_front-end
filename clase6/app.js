console.log("Hola mundo");

document.write("JavaScript");

//String 
/*comentario mas grande */

let num1 = 100;
let num2 = 200;

let suma = num1 + num2;
console.log("La suma es "+suma);


// operadores relacionales

let uno = 1;
let dos = "1";

if (uno == dos){
    console.log("Son iguales");
}
if (uno === dos){
    console.log("Son iguales");
}
else {
    console.log("Son distintos");
}

let tipoAlumno = "diurno";

switch(tipoAlumno){
    case "diurno":
        console.log("Es un alumno diurno");
        break;
    case "vespertino":
        console.log("es un alumno de la noche");
        break;
    default:
        console.log("no es alumno")
}

let cont = 10;

while(cont>=0){
    console.log(cont)
    cont= cont -1;
}


for (let i = 0;i<=10;i++){
    console.log(i)
}

let nombres = ["Ana","Felipe","Franscisco","Pablo"];

console.log(nombres[0]);
console.log(nombres.length);

for(i = 0;i < nombres.length; i++){
    console.log(nombres[i]);
}


for(i = nombres.length-1;i >=0; i--){
    console.log(nombres[i]);
}