import React from "react";
import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { AuthContext } from '../../components/context/AuthContext.js';

function Login({ navigation }) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const onLoginPressed = async () => {
  //   //await handleLogin();
  // };

  // async function handleLogin() {
  //   await fetch("http://localhost:3000/users", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({
  //       name: name,
  //       email: email,
  //       password: password,
  //       mpname: mpName,
  //     }),
  //   }).then((response) => {
  //     if (response.status === 201) {
  //       console.log("OK");
  //     } else {
  //       console.log("OH NO");
  //     }
  //   });
  // }

  return (
    <SafeAreaView 
    style={styles.container}>
      <Text
      style={styles.text}>Please enter your{`\n`}    login details</Text>


      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
      ></CustomInput>

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      ></CustomInput>

      <CustomButton
        text="Login"
        onPress={() => {
          login(email, password);
        }}
      ></CustomButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 26,
    alignItems: 'center',
    fontWeight: 'bold'
  },
  textSecondary: {
    fontSize: 18
  }
});

export default Login;
