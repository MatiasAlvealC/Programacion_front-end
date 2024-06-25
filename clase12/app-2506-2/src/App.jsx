import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import { Row, Col, Container, Card } from 'react-bootstrap';

function App() {
  const [students, setStudents] = useState([])
  const [age, setAge] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault() //esto hace que no se rederice el navegador cada vez, y así se guarden
    setStudents([...students, { name, age }])
    setName('')
    setAge('')
  }

  const handleDelete = (index)=>{
    const newStudent = [...students] //no podemos trabajar con student ya que los state no se pueden modificar
    newStudent.splice(index,1) //splice elimina
    setStudents(newStudent)
  }
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre :</Form.Label>
              <Form.Control placeholder="Ingrese nombre alumno" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Edad: </Form.Label>
              <Form.Control placeholder="Ingrese edad alumno" value={age} onChange={(e) => setAge(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Agregar estudiante </Button>
          </Form>
        </Row>
        <br></br>
        <Row>
          {
            students.map((student, index) => ( //map es como forEach

              <Col sm={6} key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Datos Alumno</Card.Title>
                    <Card.Text> Nombre:{student.name}</Card.Text>
                    <Card.Text> Edad: {student.age}</Card.Text>
                    <Button variant="primary">Editar</Button>
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
