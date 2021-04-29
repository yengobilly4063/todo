import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const AddTodoScreen = () => {
  const status = ["ATIVE", "PENGING", "COMPLETED"]
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("adding todo...")
  }

  return (
    <div>
      <Container>
        <Form className="my-3" onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control as="text" placeholder="Enter todo name"></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter todo description"></Form.Control>
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status:</Form.Label>
            <Form.Control as="select">
              {status.map((st, index)=> {
                return (
                  <option>{st}</option>
                )
              })}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Todo
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddTodoScreen
