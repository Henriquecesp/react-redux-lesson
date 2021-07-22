import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUser } from '../redux/user/userActions';

const Login = () => {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(changeUser(name))
  }

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
