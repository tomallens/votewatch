import React from "react";
import { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";
import { AuthContext } from "../../components/context/AuthContext.js";

function Login({ navigation }) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Login</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({});

export default Login;
