import './App.css'
import Pokemon from './Pokemon'


function App() {
  const pokemones =[
    {
      nombre:'Charizard',
      imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
      nombre:'Delphox',
      imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png"
    },
    {
      nombre:'Emboar',
      imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png"
    },
    {
      nombre:'Incineroar',
      imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png"
    },
    {
      nombre:'Blaziken',
      imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
    },
    {
      nombre:' Infernape',
      imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
    }
  ]
  return (
    <Pokemon pokemones ={pokemones}/>
  )
}

export default App