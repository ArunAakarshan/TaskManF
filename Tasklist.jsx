import React, { useState } from 'react';
import Task from './Task';
import Header from './Header';
import Footer from './Footer';
import './Tasklist.css';
import Sidebar from './Sidebar2';

function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    deadline: '',
  });

  const handleTaskCreation = () => {
    const createdTask = {
      title: newTask.title,
      deadline: newTask.deadline,
      status: 'inactive',
    };
    setTasks([...tasks, createdTask]);
    setNewTask({ title: '', deadline: '' });
  };

  const handleTaskStart = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'in progress';
    setTasks(updatedTasks);
  };

  const handleTaskComplete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='cov'>
      <Header />
      <div className="task-list">
        <Sidebar></Sidebar>
        <div className="new-task-form fixed-form">
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="date"
            placeholder="Deadline"
            value={newTask.deadline}
            onChange={(e) =>
              setNewTask({ ...newTask, deadline: e.target.value })
            }
          />
          <button onClick={handleTaskCreation}>Create Task</button>
        </div>

        <div className="task-list-content">
          {tasks.map((task, index) => (
            <Task
              key={index}
              {...task}
              onStart={() => handleTaskStart(index)}
              onComplete={() => handleTaskComplete(index)}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Tasklist;
