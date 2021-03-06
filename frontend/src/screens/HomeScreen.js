import React, {useEffect} from 'react'
import {Container, Table} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { deleteTodo, getTodos } from '../redux/actions/todoActions'
import Loader from '../components/Loader'
import Message from "../components/Message"


const HomeScreen = () => {
  const dispatch = useDispatch()
  const todoInfo = useSelector(state => state.todoInfo)
  const {todos, loading, error, todo} = todoInfo

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch, todo])

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      <Container className="my-3">
        <Link to="/todos/add" >
          <FontAwesomeIcon icon={faPlusSquare} size="3x" color="green" />
        </Link>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader /> 
          
        }
        <Table responsive striped hover className="my-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th style={{textAlign: "right"}}>Actions</th>
              </tr>
            </thead>
            {todos && todos.map((todo, index) => {
              return (
                <tbody key={todo._id}>
                  <tr>
                    <td>{index + 1}</td>  
                    <td><Link to={`todos/details/${todo._id}`}>{todo.name}</Link></td>  
                    <td>{todo.description.substring(0, 20)} ...</td>
                    <td>{todo.status}</td>  
                    <td style={{textAlign: "right"}}>
                      <FontAwesomeIcon onClick={() => handleDelete(todo._id)} style={{cursor: "pointer"}} icon={faTrash} size="1x" color="red" />
                    </td>
                  </tr>              
                </tbody>
              )
            })}   
          </Table>
        
      </Container>
    </div>
  )
}

export default HomeScreen
