
import React from 'react';
import '../App.css';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleSelectTask, selectedTasks }) => {
    if (tasks.length === 0) {
        return <div className="todo-list"><p>Task Empty</p></div>;
    }

    return (
        <div className="todo-list">
            <h1>Todo list</h1>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    index={index}
                    task={task}
                    deleteTask={deleteTask}
                    toggleSelectTask={toggleSelectTask}
                    selectedTasks={selectedTasks}
                />
            ))}
        </div>
    );
};

export default TaskList;