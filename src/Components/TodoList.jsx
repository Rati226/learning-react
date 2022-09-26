import React from 'react'

function TodoList(props) {
  return (
    <div>
        { props.user.map((ele, index) => {
            return (
                <h3>{props.user}</h3>
            )
            }  
             
        )}
      
     </div>
  );
}

export default TodoList