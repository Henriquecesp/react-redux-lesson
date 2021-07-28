import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const {name} = useSelector(state => state.user);

  return (
    <div>
      <h1>Usuário: {name}</h1>
    </div>
  );
}

export default User;
