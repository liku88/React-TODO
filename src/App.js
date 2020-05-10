import React, {useState , useEffect} from 'react';
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import TodoForm from './Components/TodoForm'
import Todos from './Components/Todoss'

const App = () => {
const [todos , setTodos] = useState([]);

useEffect(() => {
  const TodoLocal =  localStorage.getItem("todos");
  if(TodoLocal){
    setTodos(JSON.parse(TodoLocal))
  }
}, [])

const addTodos = async todo => {
  setTodos(...todos , todo);
}
useEffect(() => {
  localStorage.setItem("todos" , JSON.stringify(todos));
}, [todos])

const markComplete = id => {
  setTodos(todos.filter(todo => todo.id !== id))
};

return(
  <Container fluid>
  <h1>
  Todos with local storage
  </h1>
  <Todos todos = {todos} markComplete = {markComplete} />
 
  <TodoForm addTodos = {addTodos} />
  </Container>
)


}






export default App;
