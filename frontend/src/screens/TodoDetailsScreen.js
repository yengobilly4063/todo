import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoDetails } from '../redux/actions/todoActions'

const TodoDetailsScreen = ({match}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`updating ${match.params.id}`)
  }

  return (
    <Container className="my-3">
      <h1>Todo Details</h1>
      <Row>
        <Col md={8}>
          <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter todo name"
                value={name}
                onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter todo name"
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>
            
            
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  )
}

export default TodoDetailsScreen
