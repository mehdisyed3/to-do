import React,{useState} from "react"

function AddTodo(props){
  const [task,setTask] = useState("")


  
  function handleChange(event){
    const input = event.target.value
    setTask(input) 
  }
    


  function handleSubmit(e){
    e.preventDefault()
    props.add(task)
    setTask("")

  }
   
  
  return(
    <div>

      <h3>Add Daily Task</h3>
      <form >
      <input onChange={handleChange} value={task} type='text'  />
      <button onClick={handleSubmit} type="submit">Add</button>

      </form>
    </div>
  )

}

export default AddTodo