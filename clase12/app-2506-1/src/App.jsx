import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count+1)
  } 
  return (
    <>
    <p> Contador: {count}</p>
    <button onClick={increment}>Incrementar Contador</button>
    </>
  )
}

export default App