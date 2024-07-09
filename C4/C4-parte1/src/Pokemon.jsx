function Pokemon(props) {
    return (
      <div className="pokemon-grid">
        {
          props.pokemones.map((datosPokemon, index) => (
            <div className="pokemon-card" key={index}>
              <h1>{datosPokemon.numero}</h1>
              <h2>{datosPokemon.nombre}</h2>
              <img className="pokemon-image" src={datosPokemon.imagen} alt={datosPokemon.nombre} />
            </div>
          ))
        }
      </div>
    )
  }

export default Pokemon