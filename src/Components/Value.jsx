import React from 'react'

function Value(props) {
     
  return (
   <div>
    <div>{props.task} </div>
    <button onClick={()=> props.onSelect(props.id)}>close</button>
   </div>
    
  
  )
}

export default Value;