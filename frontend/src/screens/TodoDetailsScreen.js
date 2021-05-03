import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getTodoDetails } from '../redux/actions/todoActions'

const TodoDetailsScreen = ({match}) => {
  const [state, setState] = useState({name: "", description: ""})

  const dispatch = useDispatch()
  const {todo, loading, error} = useSelector(state => state.todoInfo)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`updating ${match.params.id}`)
    console.log(name, description);
  }

  useEffect(() =>  {
    console.log(match.params.id);
    dispatch(getTodoDetails(match.params.id))
  }, [dispatch, match])


  useEffect(() => {
    if (todo && todo.name && todo.description) {
      setState({...state, name:todo.name, description: todo.description })
    }
    
  }, [todo])

  const handleChange = (e) => {
    const {name, value} = e.target
    setState({...state, [name]: value})
  }

  const {name, description} = state

  return (
    <Container className="my-3">
      <h1>Todo Details</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading ? <Loader /> : 
        <Row>
        <Col md={8}>
          <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter todo name"
                value={name} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Description:</Form.Label>
              <Form.Control name="description" as="textarea" rows={4} placeholder="Enter todo name"
                value={description} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
      }
    </Container>
  )
}

export default TodoDetailsScreen
