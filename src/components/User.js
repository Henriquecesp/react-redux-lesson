import React from 'react';
import { useSelector } from 'react-redux'

const User = () => {
  const { user, isLogged } = useSelector(state => state.user)
  console.log(isLogged)
  return (
    <div>
      <h1>Usuário: {user}</h1>
    </div>
  );
}

export default User;
