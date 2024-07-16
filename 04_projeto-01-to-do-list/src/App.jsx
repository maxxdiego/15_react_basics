import { useState, useEffect } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const date = new Date()
  const month = date.getMonth()+1
  const day = date.getDate()
  const currentDate = `${day}/${month}`

  const addTask = (task) => {
    // id, text, done

    setTasks([...tasks, {id: Date.now(), date: currentDate, text: task, done: false}])
    
  // localstorage
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </>
  );
}

export default App;
