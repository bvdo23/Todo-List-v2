
import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const toggleSelectTask = (index) => {
    if (selectedTasks.includes(index)) {
      setSelectedTasks(selectedTasks.filter((taskIndex) => taskIndex !== index));
    } else {
      setSelectedTasks([...selectedTasks, index]);
    }
  };

  const bulkDelete = () => {
    const newTasks = tasks.filter((_, taskIndex) => !selectedTasks.includes(taskIndex));
    setTasks(newTasks);
    setSelectedTasks([]);
  };

  return (
    <div className="app">
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleSelectTask={toggleSelectTask}
        selectedTasks={selectedTasks}
      />
      <div className="bulk-action">
        <span>Bulk Action:</span>
        <button className="remove-button" onClick={bulkDelete}>Remove</button>
      </div>
    </div>
  );
}

export default App;