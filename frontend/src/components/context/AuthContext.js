import React from "react";
import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();
import axios from "axios";

import { BASE_URL } from "../../config";

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = (email, password) => {
    console.log(email, password);
    setIsLoading(true);

    axios
      .post("http://localhost:8080/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("RESPONSE", response);
        // let userInfo = response.data;
        // setUserInfo(userInfo);
        // setUserToken(userInfo.accessToken);
        // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        // AsyncStorage.setItem("userToken", userInfo.accessToken);
        // console.log(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("login post error", error);
      });

    // const data = fetch(`${BASE_URL}/login`, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // }).then((response) => {
    //   if (response.status === 200) {
    //     console.log("OK");
    //   } else {
    //     console.log("OH NO");
    //   }
    // });

    // .then((response) => {
    //   // console.log("RESPONSE DATA", response.data);
    //   // let userInfo = response.data;
    //   // setUserInfo(userInfo);
    //   // setUserToken(userInfo.accessToken);
    //   // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    //   // AsyncStorage.setItem("userToken", userInfo.accessToken);
    //   // console.log(response.data);
    //   // console.log(response.data);
    // })
    // .catch((error) => {
    //   console.log("login error", error);
    // });
    // setUserToken("cuddlezzzzz");
    // AsyncStorage.setItem("userToken", "cuddlezzzzz");
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  // const isLoggedIn = async () => {
  //   // Checks if user is logged in once app is re-opened
  //   try {
  //     setIsLoading(true);
  //     let userToken = AsyncStorage.getItem("userToken");
  //     setUserToken(userToken);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(`Logged in error ${error}`);
  //   }
  // };

  // useEffect(() => {
  //   isLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// import React from "react";
// import { useEffect, useState } from "react-native";
// import { createContext } from "react";

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [userToken, setUserToken] = useState(null);
//   // const [userInfo, setUserInfo] = useState(null);
//   // const login = async (email, password) => {
//   //   setIsLoading(true);
//   //   axios
//   //     .post("http://localhost:8080/login", {
//   //       email,
//   //       password,
//   //     })
//   //     .then((response) => {
//   //       let userInfo = response.data;
//   //       setUserInfo(userInfo);
//   //       setUserToken(userInfo.accessToken);
//   //       AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
//   //       AsyncStorage.setItem("userToken", userInfo.accessToken);
//   //       console.log(response.data);
//   //       console.log(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log("login post error", error);
//   //     });
//   // let response = fetch('http://localhost:8080/login', {
//   //   method: 'post',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   //   body: JSON.stringify({ email: email, password: password }),
//   // });
//   // if (response.status == 200) {
//   //   let data = await response.json();
//   //   console.log("data", data)
//   //   console.log("Access token", data.accessToken)
//   //   console.log(response.status)
//   // } else {
//   //   console.log(response.status)
//   //   // let data = await response.json();
//   // }
//   // setUserToken("cuddlezzzzz");
//   //   // AsyncStorage.setItem("userToken", "cuddlezzzzz");
//   //   setIsLoading(false);
//   // };
//   // const logout = () => {
//   //   setIsLoading(true);
//   //   setUserToken(null);
//   //   AsyncStorage.removeItem("userInfo");
//   //   AsyncStorage.removeItem("userToken");
//   //   console.log("user token", userToken);
//   //   setIsLoading(false);
//   // };
//   // const isLoggedIn = async () => {
//   //   try {
//   //     setIsLoading(true);
//   //     let userInfo = await AsyncStorage.getItem("userInfo");
//   //     let userToken = await AsyncStorage.getItem("userToken");
//   //     userInfo = JSON.parse(userInfo);
//   //     if (userInfo) {
//   //       setUserToken(userToken);
//   //       setUserInfo(userInfo);
//   //     }
//   //     setIsLoading(false);
//   //   } catch (error) {
//   //     console.log(`Logged in error ${error}`);
//   //   }
//   // };
//   // useEffect(() => {
//   //   isLoggedIn();
//   // }, []);
//   // return (
//   //   <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
//   //     {children}
//   //   </AuthContext.Provider>
//   // );
// };
