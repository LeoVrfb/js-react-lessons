import React from 'react';

const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {},
  logout: () => {},
});

export default AuthContext ;

