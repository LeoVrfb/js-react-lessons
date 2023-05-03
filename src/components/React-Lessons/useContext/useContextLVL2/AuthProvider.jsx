import React, { useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider ({ children })  {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  function login(username, password) {

    setIsAuthenticated(true);
    setUser({ name: username });
  }

  function logout() {
    setIsAuthenticated(false);
    setUser(null);
  }

  const authContextValue = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export default AuthProvider;


