import React, {useEffect} from 'react'
import {Container, Row, Col, Table} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { getTodos } from '../redux/actions/todoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const HomeScreen = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todoList)
  const {todos, loading, error} = todoList

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div>
      <Container className="my-3">
        <Link to="/todos/add" >
          <FontAwesomeIcon icon={faPlusSquare} size="3x" color="green" />
        </Link>
        {loading && <Loader />}
        {error && <Message>{error}</Message>}
        {todos && 
          <Table responsive striped hover className="my-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <td>Status</td>
              </tr>
            </thead>
            {todos.map((todo, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>  
                    <td>{todo.name}</td>  
                    <td>{todo.description.substring(0, 20)} ...</td>
                    <td>{todo.status}</td>  
                  </tr>              
                </tbody>
              )
            })}   
          </Table>
        }
      </Container>
    </div>
  )
}

export default HomeScreen
