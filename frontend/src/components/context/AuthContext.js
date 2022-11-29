import React from 'react';
import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    let response = await fetch('http://localhost:8080/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.status === 200) {
      let data = await response.json();
      // setUserData(data);
      // setUserToken(data.accessToken);
      // AsyncStorage.setItem('userToken', JSON.stringify(data.accessToken));
      // AsyncStorage.setItem('userData', JSON.stringify(data));

      console.log('data', data);
      console.log('token 1 ', data.accessToken);
    } else {
      console.log(`Login error ${response.data}`);
      console.log(response.status);
    }
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    // AsyncStorage.removeItem('userData');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = AsyncStorage.getItem('userToken');
      // let userData = AsyncStorage.getItem('userData');
      // userData = JSON.parse(userData);

      // if (userData) {
      //   setUserToken(userToken);
      //   setUserData(userData);
      // }
      // setUserData(userData);
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(`Logged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
