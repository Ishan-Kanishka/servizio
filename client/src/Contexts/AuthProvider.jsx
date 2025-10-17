import React, {useEffect, useState} from 'react';
import AuthContext from './AuthContext';
import {store, retrieve, remove} from '../utils/LocalStorage';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState (null);
  const auth_url = 'http://localhost:8080/api/v1/users';

  const login = async (email, password) => {
    const res = await fetch (`${auth_url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({email, password}),
    });
    const data = await res.json ();
    if (res.ok) {
      setUser (data.data);
      store ('user', data.data);
      console.log (data.data);
      return {success: true};
    } else {
      return {success: false, message: data.message};
    }
  };

  const logout = () => {
    setUser (null);
    remove ('user');
  };

  const register = (name, email, password) => {
    setUser ({id: Math.round (Math.random () * 2), name, email, password});
    store ('user', {
      id: Math.round (Math.random () * 2),
      name,
      email,
      password,
    });
  };

  useEffect (() => {
    const storedUser = retrieve ('user');
    if (storedUser) {
      setUser (storedUser);
    }
  }, []);
  return (
    <AuthContext.Provider value={{user, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
