import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import estrella from './assets/img/estrella.png'
import { Row, Col, Container, Card } from 'react-bootstrap';

function App() {
  const [recordatorios, setRecordatorios] = useState([])
  const [descripcion, setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')
  const [importante, setImportante] = useState(false);
  const [editIndex, setEditIndex] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (editIndex !== null) {
      const newRecordatorio = [...recordatorios]
      newRecordatorio[editIndex] = { descripcion, fecha, importante }
      setRecordatorios(newRecordatorio)
      setEditIndex(null)
    } else {
      setRecordatorios([...recordatorios, { descripcion, fecha, importante }])
    }
    setDescripcion('')
    setFecha('')
    setImportante(false);
  }

  const handleDelete = (index) => {
    const newRecordatorio = [...recordatorios]
    newRecordatorio.splice(index, 1)
    setRecordatorios(newRecordatorio)
  }

  const handEdit = (index) => {
    setDescripcion(recordatorios[index].descripcion)
    setFecha(recordatorios[index].fecha)
    setImportante(recordatorios[index].importante);
    setEditIndex(index)
  }

  return (
    <>
      <Container className="form-container">
        <Row>
          <Form onSubmit={handleSubmit} className="form-wrapper">
            <h1>Recordatorios</h1>
            <Form.Group className="mb-3">
              <Form.Label>Descripción :</Form.Label>
              <Form.Control placeholder="Ingrese lo que desea recordar" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha: </Form.Label>
              <Form.Control type='date' value={fecha} onChange={(e) => setFecha(e.target.value)} required/>
            </Form.Group>
            <Form.Check className="mb-3"
              type="switch"
              id="custom-switch"
              label="Importante"
              checked={importante}
              onChange={() => setImportante(!importante)} />
            <Button variant="primary" type="submit">
              {editIndex != null ? 'Actualizar recordatorio' : 'Agregar recordatorio'}
            </Button>
          </Form>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          {recordatorios.map((recordatorio, index) => (
            <Col sm={6} key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>Fecha: {recordatorio.fecha}{' '}
                    {recordatorio.importante && (
                      <img className="imagen-estrella" src={estrella} alt="Importante" />
                    )}
                  </Card.Text>
                  <Card.Text id="texto-recordatorio">{recordatorio.descripcion}</Card.Text>
                  <Button variant="primary" onClick={() => handEdit(index)}>Editar</Button>
                  <Button variant="danger" onClick={() => handleDelete(index)}>Eliminar</Button>
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