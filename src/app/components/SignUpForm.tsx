"use client";

import React, { useState } from 'react';
import { signUp } from '../actions/users/signUp';

const SignUpForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = async () =>{
    setMessage("Signing up........");
    const message = await signUp(email, password);
    setMessage(message);
  };

  return (
    <div className='flex flex-col gap-4 bg-gray-400 p-4'>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

      <button onClick={handleSubmit}>
        Sign Up
      </button>
      
      <p>
        {message}
      </p>
    </div>
  );
}

export default SignUpForm;
