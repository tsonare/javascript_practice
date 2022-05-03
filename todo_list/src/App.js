import './App.css';
import Header from './Components/Header.js';
import {Footer} from './Components/Footer.js';
// import {Todo} from './Components/Todo.js';
import {Todos} from  './Components/Todos'
import { AddTodo } from './Components/AddTodo';
import { useState } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null){
      initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=> {
    console.log("I am onDelete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }
    ));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, description)=>{
      console.log("Todo Saved successfully and its title is", title, description);
      let sno;
      if(todos.length == 0){
        sno = 0;
      }else{
          sno = todos[todos.length-1].sno+1;
      }
      const myTodo = {
        sno:sno,
        title:title,
        description:description
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
  }
  const [todos, setTodos]  = useState(initTodo);
  if(localStorage.getItem("todos")){
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return (
    <>
    <Header title="My Todo List" searchBar = {true}/>
    {/* <Todo/> */}
    <AddTodo addTodo = {addTodo} />
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

