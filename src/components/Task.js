
import React, { useState } from 'react';
import '../App.css';

const Task = ({ task, index, deleteTask, toggleSelectTask, selectedTasks }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleDetailClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="todo-item">
            <div>
                <input
                    type="checkbox"
                    checked={selectedTasks.includes(index)}
                    onChange={() => toggleSelectTask(index)}
                />
                <span>{task.title}</span>
                <button className="detail-button" onClick={handleDetailClick}>Detail</button>
                <button className="remove-button" onClick={() => deleteTask(index)}>Remove</button>
                {showDetails && (
                    <div className="task-details">
                        <p>Description: {task.description}</p>
                        <p>Due Date: {task.dueDate}</p>
                        <p>Priority: {task.priority}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Task;