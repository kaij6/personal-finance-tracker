import React from 'react';
import AuthForm from './AuthForm';
import axios from 'axios';

const Register = () => {
  const handleRegister = async (credentials) => {
    try {
      const response = await axios.post('/api/register', credentials);
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
    </div>
  );
};

export default Register;
