import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logof.jpg';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [error, setError] = useState('');
  const navigate = useNavigate();  


  const handleRegistration = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      setTimeout(() => {
        toast('🐱‍👤Register Success!', {
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
    }
    navigate('/Form');
    // window.location.href = "./Tasklist";
  };

  return (
    <section>
      <div className='register2'>
          <h1 className='heading'>Task Bender</h1>
          <p className='head2'>Helps you keep organized</p>
          <h2 id='h22'>Register</h2>
          <p id='p1'>
            Already have an account? <Link to="/Form">Sign In</Link>
          </p>
          <form id='form' className='flex flex-col'>
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className='btn' onClick={handleRegistration}>Register</button>
            {/* {error && <p className='error'>{error}</p>} */}
          </form>
          <img src={logo1} alt="registration" id="ig"/>
      </div>
    </section>
  );
}

export default Register;
