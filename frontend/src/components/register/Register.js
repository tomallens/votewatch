import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import CustomInput from "../customInput/CustomInput";
import CustomButton from "../customButton/CustomButton";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mpName, setMpName] = useState("");

  const onRegisterPressed = () => {
    console.warn("Register");
  };

  return (
    <View>
      <Text>Welcome!</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({});
