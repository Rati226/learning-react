import React from 'react'

const  TodoList = (props) => {
  return (
   <ul>
    {props.items.map((user,index) => ( <li key = {user.id}>{ user.name}</li>))}
   </ul>
  )
}

export default TodoList;
