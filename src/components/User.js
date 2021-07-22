import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const {user, isLogged} = useSelector((state) => state.user)

  return (
    <div>
      {user}
    </div>
  );
}

export default User;
