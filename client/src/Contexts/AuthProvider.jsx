import React, {useState} from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState (null);

  // dummy user data for illustration
  const userData = {
    id: 1,
    name: 'John Doe',
    email: 'j@info.com',
    password: '1234',
  };

  const login = (email, password) => {
    if (email === userData.email && password === userData.password) {
      setUser (userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser (null);
  };

  const register = (name, email, password) => {
    setUser ({id: Math.round (Math.random () * 2), name, email, password});
  };
  return (
    <AuthContext.Provider value={{user, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
