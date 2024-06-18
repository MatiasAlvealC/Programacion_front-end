function Datos(props){
    return (
        <div>
            {
                props.alumnos.map((datosAlumnos)=>(
                    <div>
                        <h1>{datosAlumnos.nombre}</h1>
                        <h1>{datosAlumnos.edad}</h1>
                    </div>
                ))
            }
        </div>
    )
}
export default Datos;