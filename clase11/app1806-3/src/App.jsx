
import './App.css'
import Datos from './Datos'
function App() {
  const alumnos =[
    {
      nombre:'Carlos',
      edad:21
    },
    {
      nombre:'Ana',
      edad:20
    }
  ]
  return (
    <Datos alumnos ={alumnos}/>
  )
}

export default App
