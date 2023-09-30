import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logof.jpg';
import { useNavigate } from 'react-router-dom';
import './Form.css';
// import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigatetoTask = useNavigate();
  const handleSignIn = () => {

    if (username.trim() !== '' && password.trim() !== ''){
    // window.location.href="/Tasklist";
    navigatetoTask('/Tasklist')
    
    }
    else{
      setTimeout(() => {
        toast.error('🦄 Incorrect/Missing Credentials!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }, 0); 
    }
    setTimeout(() => {
      toast('🐱‍👤Login Success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }, 0);
  };

  return (
    <div className='register'>
      <nav className='navbar'>
        <Link to="/" className='navbar-link'>
          Home
        </Link>
      </nav>
        <h1 className='heading'>Task Bender</h1>
        <p className='head2'>Helps you keep organized</p>
        <h2 id='h2'>Sign In</h2>
        <p id='sp'>
          Don't have an account? <Link to="/Register">Sign Up</Link>
        </p>
        <form id='form' className='flex flex-col'>
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn' onClick={handleSignIn}>
            Sign In
          </button>
          {/* {error && <p className='error'>{error}</p>} */}
        </form>
        <img id='ai' src={logo1} alt="signin" />
    </div>
);
}

export default Form;
