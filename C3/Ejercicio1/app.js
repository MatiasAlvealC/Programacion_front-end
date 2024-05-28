function datos(formulario) {
    const { correo, telefono } = formulario;
    let persona={correo:correo.value,telefono:telefono.value}
    if (persona.correo !== "" && persona.telefono !== "") {
        if (persona.telefono.length ==10 && persona.correo.includes("@")){ // correo.includes("@")
            mensaje = "";
            document.getElementById('Error').innerHTML = mensaje;
            alert('Acceso concedido');
        } else {
            mensaje = "Error en correo electrónico y/o número de teléfono";
            document.getElementById('Error').innerHTML = mensaje;
        }
    } else {
      alert('Dato(s) vacio(s), ingrese dato(s)');
    }
  }
