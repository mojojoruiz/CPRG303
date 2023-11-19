import React, { useState } from 'react';
import ToDoForm from './ToDoForm';

function App() {
const [tasks, setTasks] = useState([]);

const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
};

return (
    <div className="App">
    <h1>ToDo List</h1>
    <ToDoForm addTask={addTask} />
    <ul>
        {tasks.map((task, index) => (
        <li key={index}>{task}</li>
        ))}
    </ul>
    </div>
);
}

export default App;
