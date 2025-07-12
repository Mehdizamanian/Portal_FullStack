import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const formLoginHandler = async (e) => {
    e.preventDefault();
    const userData = { username, password };
    console.log(userData);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", userData);
      console.log(response.data);
    }
    
    catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log('Error Response:', error.response.data);
        console.log('Error Status:', error.response.status);
      } else if (error.request) {
        // Request was made but no response received
        console.log('Error Request:', error.request);
      } else {
        // Something happened in setting up the request
        console.log('Error Message:', error.message);
      }
    }



  };

  return (
    
    <div className="container bg-light-dark rounded align-items-start">
      <h2 className="text-center mt-4">Login</h2>

  
      <form className="mt-4" onSubmit={formLoginHandler}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">Submit</button>
        <button type="button" className="btn btn-success">Register</button>
      </form>
    </div>
  );
};

export default Login;
