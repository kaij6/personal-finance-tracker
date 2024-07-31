import React from 'react';
import AuthForm from './AuthForm';
import axios from 'axios';

const Login = () => {
  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('/api/login', credentials);
      console.log('Login successful', response.data);
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
    </div>
  );
};

export default Login;
