import './App.css'
import Saludo from './Saludo'


function App() {
  const alumno = {
    nombre: 'Juan',
    apellido: 'León',
    edad:21
  }

  return (
    <Saludo datos={alumno}/>
  )
}

export default App
