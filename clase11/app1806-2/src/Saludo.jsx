function Saludo(props){
    const{nombre,apellido,edad}=props.datos

    return (
        <h1>Hola {nombre} {apellido} {edad}</h1>
    )
}
export default Saludo;