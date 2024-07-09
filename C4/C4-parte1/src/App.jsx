import './App.css'
import React, { useState } from 'react';
import Pokemon from './Pokemon'; // Asumiendo que tienes un componente Pokemon

function App() {
  const [maximo, setMaximo] = useState(100); // Estado para almacenar el número máximo del ciclo
  const [minimo, setMinimo] = useState(1); // Estado para almacenar el número mínimo del ciclo

  const handleSelectChange = (event) => {
    const value = event.target.value; // Obtener el valor seleccionado del select
    if (value === "primera_generacion") {
      setMaximo(151);
      setMinimo(1);
    } else if (value === "segunda_generacion") {
      setMaximo(251);
      setMinimo(152);
    } else if (value === "tercera_generacion") {
      setMaximo(386);
      setMinimo(252);
    } else if (value === "cuarta_generacion") {
      setMaximo(493);
      setMinimo(387);
    } else if (value === "quinta_generacion") {
      setMaximo(649);
      setMinimo(494);
    } else if (value === "sexta_generacion") {
      setMaximo(721);
      setMinimo(650);
    } else if (value === "septima_generacion") {
      setMaximo(809);
      setMinimo(722);
    } else if (value === "octaba_generacion") {
      setMaximo(905);
      setMinimo(810);
    }  else if (value === "novena_generacion") {
      setMaximo(1025);
      setMinimo(906);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  };

  const pokemones = [];
  for (let n = minimo; n <= maximo; n++) {
    const numero = n < 10 ? "#00" + n : n < 100 ? "#0" + n : "#" + n;
    pokemones.push({
      numero: numero,
      imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png`
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Seleccione generación:
          <br />
          <select onChange={handleSelectChange}>
            <option value="primera_generacion">Primera generación</option>
            <option value="segunda_generacion">Segunda generación</option>
            <option value="tercera_generacion">Tercera generación</option>
            <option value="cuarta_generacion">Cuarta generación</option>
            <option value="quinta_generacion">Quinta generación</option>
            <option value="sexta_generacion">Sexta generación</option>
            <option value="septima_generacion">Septima generación</option>
            <option value="octaba_generacion">Octava generación</option>
            <option value="novena_generacion">Novena generación</option>
          </select>
        </label>
        <br />
      </form>
      <h1>Pokedex</h1>
      <Pokemon pokemones={pokemones} />
    </>
  );
}

export default App;

