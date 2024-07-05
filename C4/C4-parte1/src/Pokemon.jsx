function Pokemon(props){
    return (
        <div>
            {
                props.pokemones.map((datosPokemon)=>(
                    <div>
                        <h1>{datosPokemon.nombre}</h1>
                        <img src={datosPokemon.imagen} alt={datosPokemon.nombre} />
                    </div>
                ))
            }
        </div>
    )
}

export default Pokemon