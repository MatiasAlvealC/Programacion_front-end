let alumnos=[]
function prueba(formulario){
    const {nombre,edad}=formulario;
    let alumno={nombre:nombre.value,edad:edad.value}
    alumnos.push(alumno);
    console.log(alumnos);
    formulario.reset();
}

function reporte(){
    let suma = 0;
    alumnos.forEach(myFunction);

    alert(`El total de la suma de las edades es ${suma}`);
    function myFunction(item){
        suma += parseInt(item.edad);
        return suma;
    }
    let promedio = suma/alumnos.length;
    alert(`El promedio de las edades es ${promedio}`);
}