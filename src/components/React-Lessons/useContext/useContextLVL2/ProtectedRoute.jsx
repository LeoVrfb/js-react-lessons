import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';


function ProtectedRoute() {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Dashboard/> 
  ) : (
    <LoginPage/>
  );
}

export default ProtectedRoute;
