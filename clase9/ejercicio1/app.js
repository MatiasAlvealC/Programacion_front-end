/* se pasa parametros por referencia */

function myFunction(autto){
    autto.marca = 'Jeep'
}

let auto={marca:'Mercedes', modelo:'Jeep', año:2020}


document.write("marca del vehiculo: ",auto.marca+"<br>");

myFunction(auto);
document.write("marca del vehiculo: ",auto.marca+"<br>");

/* paso parametros por valor */

function porvalor(moto){
    moto = "Azul"
    document.write("color de la moto: ",moto+"<br>");
}

let moto = "blanca "

document.write("color de la moto: ",moto+"<br>");

porvalor(moto);
document.write("color de la moto: ",moto+"<br>");


/* arreglo de objetos */

let alumnos =[{nombre:'Ana',edad:12},{nombre:'Carlos',edad:20}];
let suma = 0;
alumnos.forEach(myFunction2)

function myFunction2(item){
    suma+=parseInt(item.edad)
}

document.write(`El total de la suma de las edades es: ${suma}`+"<br>");


// cree un programa que permita ingresar el nombre y la nota
// de un alumno en un objeto llamado alumno
// Muestre el promedio de los alumnos

function functionAlumno(nombreNuevo,notaNueva){
    alumnoNuevo = {nombre: nombreNuevo,nota:notaNueva};
    return alumnoNuevo
}

let alumnosNuevos=[];

alumnosNuevos.push(functionAlumno("Juan",5.5));
alumnosNuevos.push(functionAlumno("Diego",6.6));

let suma2=0;
for (alumno of alumnosNuevos){
    suma2+=alumno.nota;
}
let promedio = suma2/alumnosNuevos.length;

document.write(`El promedio de los alumnos es: ${promedio}`+"<br>");
