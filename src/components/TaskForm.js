
import React, { useState } from 'react';
import '../App.css';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('NORMAL');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert('Title task is required');
            return;
        }
        addTask({ title, description, dueDate, priority });
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('NORMAL');
    };

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <div className="form">
                <input
                    type="text"
                    placeholder="Add new task..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p>Title task is required</p>
                <p>Description</p>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /></div>
            <div className="form-row">

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="NORMAL">NORMAL</option>
                    <option value="HIGH">HIGH</option>
                    <option value="LOW">LOW</option>
                </select>

            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;