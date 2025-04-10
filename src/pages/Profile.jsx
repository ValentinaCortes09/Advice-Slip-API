import React from 'react';
import ColorToggleButton from '../components/ColorToggleButton';

const Profile = () => {
  const user = {
    username: 'Valentina Cortes Alarcon',
    email: 'valentina.cortesa@uniagustiniana.edu.co',
  };

  return (
    <div>
      <h2>Perfil</h2>
      <p>Usuario: {user.username}</p>
      <p>Email: {user.email}</p>
      <ColorToggleButton />
    </div>
  );
};

export default Profile;
