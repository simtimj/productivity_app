import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'
import CreateTask from './components/CreateBlock';

function App() {
  // const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([]);
  // const [inputText, setInputText] = useState("");

  // console.log("Input Text:", inputText);

  return (
    <div>
      <h1>Vite + React</h1>
      <CreateTask />
      <TaskList
        // setInputText={setInputText}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
}

export default App







/*
user story:
starting from not tasks, what should that look like?






task {
  text: string,
  id: 
}



*/



