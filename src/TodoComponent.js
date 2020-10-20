import React from 'react'

function TodoComponent({items,change}){
  const {text,completed, id} = items

  const completedStyle= {
    fontStyle: "italic",
    color: "grey",
    textDecoration: "line-through"
}
 
  return (
    
    <div className="todo-item">

        <input onChange={()=>change(id)} type="checkbox" checked={completed} />
        <p style={completed ? completedStyle : null}> {text}</p>
        
  
    </div>
    
    
  )
}

export default TodoComponent  