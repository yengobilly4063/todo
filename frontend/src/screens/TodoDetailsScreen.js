import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getTodoDetails, updateTodo } from '../redux/actions/todoActions'

const TodoDetailsScreen = ({match, history}) => {
  const [state, setState] = useState({name: "", description: "", message: {isGood: false, msg: ""}})

  const dispatch = useDispatch()
  const {todo, loading, error} = useSelector(state => state.todoInfo)

  useEffect(() =>  {
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

  const {name, description, message} = state

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !description ){
      setState({...state, message: {isGood: false, msg: "Please provide all fields"}})
      return
    }
    dispatch(updateTodo(match.params.id, {name, description}))
    setState({...state, message: {isGood: true, msg: "Updated Successfully"}})
    setTimeout(() => {history.push("/")}, 2000)
    
  }

  return (
    <Container className="my-3">
      <h1>Todo Details</h1>
      {error && <Message variant={message.isGood ? "primary" : "danger"}>{error}</Message>}
      
      {loading ? <Loader /> : 
        <Row>
        <Col md={8}>
          {message.msg && <Message variant="primary">{message.msg}</Message>}
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
