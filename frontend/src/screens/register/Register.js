import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import CustomButton from "../../components/customButton/CustomButton";
import CustomInput from "../../components/customInput/CustomInput";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mpName, setMpName] = useState("");

  const onRegisterPressed = async () => {
    await handleRegistration();
  };

  async function handleRegistration() {
    await fetch("http://localhost:3000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        mpname: mpName,
      }),
    }).then((response) => {
      if (response.status === 201) {
        console.log("OK");
      } else {
        console.log("OH NO");
      }
    });
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 36, fontWeight: 'bold'}}>Welcome!</Text>
      <CustomInput
        placeholder="Name"
        value={name}
        setValue={setName}
      ></CustomInput>

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

      <CustomInput
        placeholder="Your MP's name"
        value={mpName}
        setValue={setMpName}
      ></CustomInput>

      <CustomButton text="Register" onPress={onRegisterPressed}></CustomButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default Register;
