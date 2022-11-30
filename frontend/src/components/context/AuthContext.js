import React from 'react';
import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
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
      setUserData(data);
      setUserToken(data.accessToken);

      await AsyncStorage.setItem('userToken', JSON.stringify(data.accessToken)); //Asyncstorage is asyncronous, so we need to use await
      await AsyncStorage.setItem('userData', JSON.stringify(data));

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
    AsyncStorage.removeItem('userData');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  // const isLoggedIn = async () => {
  //   console.log(
  //     'user token from isLoggedIn: ',
  //     await AsyncStorage.getItem('userToken')
  //   );
  //   let userToken = await AsyncStorage.getItem('userToken');
  //   let userData = await AsyncStorage.getItem('userData');

  //   if (userToken) {
  //     setUserToken(userToken);
  //   }
  // };

  // useEffect(() => {
  //   isLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
