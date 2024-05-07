// cree un arreglo que almacenwe las temperaturas de una semana de lunes a viernes
// Muestre cual es la temperatura promedio
// Muestre el dia de la temperatura más alta y mas baja

// realice como minimo 2 funciones

// funcion para calcular promedio

function promedio(lista){
    let suma=0;
    for (i=0;i<lista.length;i++){
        suma+=lista[i];
    }
    let promedio=suma/lista.length;
    return promedio;
}

// funcion posicion maximo y minimo
function posicionMaxMin(lista){
    let max=0;
    let min=0;
    for (i=0;i<lista.length;i++){
        if (lista[i]>lista[max]){
            max = i;
        }
        if (lista[i]<min){
            min=i;
        }
    }
    let posiciones=[max,min];
    return posiciones;
} 

let temperaturas=[17,22.5,20,25.4,19];
let dias=["Lunes","Martes","Miercoles","Jueves","Viernes"];
console.log(temperaturas);

console.log("El promedio de las temperatura es "+promedio(temperaturas));

let posiciones=posicionMaxMin(temperaturas);
console.log("La temperatura maxima es "+dias[posiciones[0]]+" con una temperatura de "+temperaturas[posiciones[0]]);
console.log("La temperatura minima es "+dias[posiciones[1]]+" con una temperatura de "+temperaturas[posiciones[1]]);


// Con el siguiente arreglo
// datos=[25,4,7,8,55,2,24,44,1];
// Muestre ordenado de menor a mayor los datos
// utilice como minimo una función

let datos=[25,4,7,8,55,2,24,44,1];
console.log(datos);


function ordenador(lista){
    var controlador =  true;
    while (controlador){
        controlador= false;
        for (i=0;i<lista.length;i++){
            if(lista[i]>lista[i+1]){
                nuevo=lista[i];
                antiguo=lista[i+1];
                lista[i+1]=nuevo
                lista[i]=antiguo;
                controlador = true;
            }
        }
    }
    listaOrdenada=lista;
    return listaOrdenada
}


let datosOrdenados=ordenador(datos);
console.log(datosOrdenados);

// -------------------------------------------------------------------
// Funciones Flecha o Arrow Function
// con un parametro y solo una expresión
const multiplicaNumero = (x) => x**3;

console.log(multiplicaNumero(10));


//

const calcularArea = (ancho,alto) =>{
    const area = ancho * alto;
    return area;
}

console.log(calcularArea(25,10));


// 

const avisaUsuario = (fun,x) => {
    alert(fun(x));
};

const saludaUsuario = (nombre = "amigo") => {
    return  `Hola ${nombre}`;
}

avisaUsuario(saludaUsuario);

// Crear una función inversa() que calcule la inversión de una cadena
// y lo retorne. Por ejemplo, la cadena <<Hola Mundo>> deberiía retornar 
// la cadena <<odnum aloh>> (retornar todo el String en minúsculas).

const invertirCadena = (cadena) =>{
    var separarCadena = cadena.split(""); // separa las letras en String distintos

    var invertirCadena = separarCadena.reverse(); // reverse invierte la cadena

    var unirCadenas = invertirCadena.join(""); // une la separa de split

    return unirCadenas;
}

console.log(invertirCadena("hola Mundo"));
