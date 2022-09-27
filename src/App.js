import './App.css';
import { useState } from 'react';

function App() {

  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewtask] = useState("")

  const handleChange = (event) => {
    setNewtask(event.target.value)
  }

  const addTask = () => {
    // const newToDoList = [...toDoList, newTask]
    // setToDoList(newToDoList)
    setToDoList([...toDoList, newTask])
  }
  
  const deleteTask = (taskName) => {
    const newToDoList = toDoList.filter((task) => {
      if (task === taskName){
        return false
      } else {
        return true
      }
    })

    setToDoList(newToDoList)
  }

  return (
    <div className="App">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
        <div className='list'>
          {toDoList.map((task) => {
            return (
              <div className='taskRow'>
                <h1>{task}</h1> 
                <button onClick={() => deleteTask(task)}>X</button>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
