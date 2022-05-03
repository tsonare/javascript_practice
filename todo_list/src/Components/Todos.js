import React from 'react'
import { Todo } from './Todo'
export const Todos = (props) => {
  let headingStyle = {
    color : "red"
  }
  let myStyle = {
    minHeight: "70vh",
    margin:"50px, auto",
  }
  return (
    <div className='container my-3' style={myStyle}>
    <h2 className='text-center '> Todos List </h2> 
    {props.todos.length === 0 ? <h2 className='text-center mt-5' style={headingStyle}>No Todos to Display</h2> : 
    props.todos.map((todo)=>{
      return( 
      <>
      <Todo todo = {todo} onDelete={props.onDelete}/> <hr/>
      </>)
    })
    }
        
    </div>
  )
}
