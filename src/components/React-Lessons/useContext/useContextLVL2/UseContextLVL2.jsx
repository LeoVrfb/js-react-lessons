import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import LoginPage from './LoginPage';

function UseContextLVL2() {
  const authContext = useContext(AuthContext);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  if (!authContext.isAuthenticated) {
    return (
      <>
        <p>Veuillez vous connecter pour accéder à cette page</p>
        {showLoginForm ? (
          <LoginPage />
        ) : (
          <button onClick={handleShowLoginForm}>Se connecter</button>
        )}
      </>
    );
  }

  return (
    <>
      <p>Bienvenue sur la page de dashboard</p>
    </>
  );
}

export default UseContextLVL2;
