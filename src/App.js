import React, {useState} from 'react';
import './App.css';
import TodoComponent from './TodoComponent'
import todosData from './todosData'
import AddTodo from './AddTodo'

function App() {
  const [todos, setTodos] = useState(todosData)

  function handleChange(id){
    const updated = todos.map( item => {
      if(item.id === id){
       return {
         ...item,
         completed : !item.completed
       }
      }
      return item
    })
    
  setTodos(updated)
  }

  function addTask(task){
    task.trim() && 
    setTodos([...todos,{id:Math.random(), text: task, completed:false }])
  }
    
  
  const itemTodo = todos.map(item => <TodoComponent change={handleChange} key={item.id} items={item} />)
  
  return (
    <div className="todo-list">
      <h1>Things To Do Daily</h1>
      {itemTodo}
      <br/>
      <AddTodo add={addTask} />
    </div>
  );
}

export default App;
