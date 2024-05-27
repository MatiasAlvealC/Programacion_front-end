let prestamos = JSON.parse(localStorage.getItem("prestamos")) || { Hipotecario: [], Automotriz: [], Consumo: [] };

function datos(formulario) {
    
    const { nombre, tipo_prestamo } = formulario;

    prestamos[tipo_prestamo.value].push(nombre.value);

    localStorage.setItem("prestamos", JSON.stringify(prestamos));

    // Limpiar el formulario
    formulario.reset();
}

function reporte() {
    let mensaje = "Hipotecarios: " + prestamos.Hipotecario.length + "\n" +
                  "Automotriz: " + prestamos.Automotriz.length + "\n" +
                  "Consumo: " + prestamos.Consumo.length + "\n\n" ;

    alert(mensaje);
}

document.getElementById("hipotecarios").textContent = prestamos.Hipotecario.length;
document.getElementById("automotriz").textContent = prestamos.Automotriz.length;
document.getElementById("consumo").textContent = prestamos.Consumo.length;