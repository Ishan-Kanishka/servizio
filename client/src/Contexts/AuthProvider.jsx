import React, {useState} from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState (null);
  const auth_url = 'http://localhost:8080/api/v1/users';

  const login = async (email, password) => {
    //     {
    //     "code": 200,
    //     "message": "OK",
    //     "data": {
    //         "id": 13,
    //         "name": "John Doe",
    //         "email": "b@w.com",
    //         "password": "123",
    //         "dateOfBirth": "1990-05-25",
    //         "phoneNumbers": [],
    //         "role": {
    //             "roleId": 2,
    //             "roleName": "CUSTOMER"
    //         },
    //         "address": "123 Main St",
    //         "zipCode": "12345",
    //         "city": "New York",
    //         "country": "USA",
    //         "events": [],
    //         "orders": []
    //     }
    // }
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
      console.log (data.data);
      return {success: true};
    } else {
      return {success: false, message: data.message};
    }
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
