import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import Register from './Components/Register';
import Tasklist from './Components/Tasklist'; 
import Task from './Components/Task';
import About from './Components/About';
import Home from './Components/Home';
import AdminSign from './Components/AdminSign';
import AdminDashboard from './Components/Admindashboard';
import { ToastContainer } from 'react-toastify';
import userprofile from '../src/userprofile';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<userprofile />} />
        <Route path="/AdminSign" element={<AdminSign />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Task" element={<Task tasks={tasks}/>} />
        <Route path="/Tasklist" element={<Tasklist tasks={tasks} addTask={addTask} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Admindashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
