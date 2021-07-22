import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/user/userActions';

const Logout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
