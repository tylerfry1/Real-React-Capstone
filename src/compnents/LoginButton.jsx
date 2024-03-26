import React, { useState } from 'react';
import Login from './login';
import { RegisterButton } from './header/header'; // Import the RegisterButton component using its name

const LoginButton = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleButtonClick = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {!showLogin && (
        <RegisterButton onClick={handleButtonClick}>Register</RegisterButton> 
      )}
      {showLogin && (
        <Login onLogin={() => setShowLogin(false)} />
      )}
    </div>
  );
};

export default LoginButton;