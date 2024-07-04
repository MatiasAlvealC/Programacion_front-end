import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import estrella from './assets/img/estrella.png'
import { Row, Col, Container, Card } from 'react-bootstrap';

function App() {
  const [recordatorios, setRecordatorios] = useState([])
  
  const [descripcion, setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')
  
  // estado para ver si es importante o no
  const [importante, setImportante] = useState(false);

  // estado para la modificación de estudiante
  const [editIndex,setEditIndex] = useState(null)
  // funcion para que se mantenga al recargar

  const handleSubmit = (event) => {
    event.preventDefault() //esto hace que no se rederice el navegador cada vez, y así se guarden
    // agregamos el if que pregunte si es null o no para ver si esta editando o agregando un nuevo estudiante
    if (editIndex !== null){
      const newRecordatorio = [...recordatorios]
      newRecordatorio[editIndex] = {descripcion,fecha,importante}
      setRecordatorios(newRecordatorio)
      setEditIndex(null)
    } else {
      setRecordatorios([...recordatorios, { descripcion, fecha,importante }])
    }
    setDescripcion('')
    setFecha('')
    setImportante(false);
  }

  // funcion para eliminar 
  const handleDelete = (index)=>{
    const newRecordatorio = [...recordatorios] //no podemos trabajar con recordatorio ya que los state no se pueden modificar
    newRecordatorio.splice(index,1) //splice elimina
    setRecordatorios(newRecordatorio)
  }

  // funcion de editar
  const handEdit = (index) =>{
    setDescripcion(recordatorios[index].descripcion)
    setFecha(recordatorios[index].fecha)
    setImportante(recordatorios[index].importante);

    setEditIndex(index)
  }
  
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <h1>Recordatorios</h1>
            <Form.Group className="mb-3">
              <Form.Label>Descripción :</Form.Label>
              <Form.Control placeholder="Ingrese lo que desea recordar" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha: </Form.Label>
              <Form.Control type='date' value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </Form.Group>
            <Form.Check  className="mb-3"// prettier-ignore
               type="switch"
               id="custom-switch"
               label="Importante"
               checked={importante}
               onChange={() => setImportante(!importante)}/>
            <Button variant="primary" type="submit">
              {
                // if ternario en js
                editIndex != null ? 'Actualizar recordatorio' : 'Agregar recordatorio'
              }
              </Button>
              
          </Form>
        </Row>
        <br></br>
        <Row>
          {
            recordatorios.map((recordatorio, index) => ( //map es como forEach

              <Col sm={6} key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Text> Fecha: {recordatorio.fecha}{' '} {recordatorio.importante && (
                    <img className="imagen-estrella" src={estrella} alt="Importante" />)}
                    </Card.Text>
                    <Card.Text id="texto-recordatorio"> {recordatorio.descripcion}</Card.Text>
                    <Button variant="primary" onClick={()=>handEdit(index)}>Editar</Button>
                    <Button variant="danger" onClick={()=>handleDelete(index)}>Eliminar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}

        </Row>
      </Container>
    </>
  )
}

export default App
