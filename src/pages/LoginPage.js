// FILE: pages/LoginPage.js
import React, { useState, useContext } from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
        const response = await axios.post('/api/login', { email, password });
        setUser(response.data);
        setRedirect(true);
        navigate('/');

      // Handle successful login (e.g., set user context, redirect)
    } catch (e){
        if (e.response && e.response.status === 401) {
            console.error('Unauthorized: Incorrect email or password');
        } else {
            console.error('Login failed', e);
        }
        alert('Login failed');
    }


    if (redirect) {
      return <Navigate to={'/'} />
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-8/12 px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-8/12 px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-red-800 text-white px-4 py-2 rounded">
          Login
        </button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;