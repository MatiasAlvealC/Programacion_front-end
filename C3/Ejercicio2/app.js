let libros = [];

function datos(formulario) {
    const { titulo, valor, cantidad } = formulario;
    let libro = { titulo: titulo.value, valor: valor.value, cantidad: cantidad.value }
    if (libro.titulo !== "" && libro.valor !== "" && libro.cantidad !== "") {
        libros.push(libro);
        console.log("libro guardados:", libro);
    } else {
        alert('Dato(s) vacio(s), ingrese dato(s)');
    }
}


function costo() {
    // sacamos el costo del ultimo libro agregado
    let total = parseInt(libros[libros.length - 1].cantidad) * parseInt(libros[libros.length - 1].valor);
    alert(`La cantidad total es ${total}`);
}

function biblioteca() {
    // Muestra la cantidad total de libros que compro la biblioteca
    let suma = 0;
    libros.forEach(myFunction);

    alert(`El total de libros de la biblioteca es ${suma}`);
    function myFunction(item) {
        suma += parseInt(item.cantidad);
        return suma;
    }
}