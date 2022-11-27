import { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";
import { AuthContext } from "../../components/context/AuthContext";

function SignIn() {
  // const { test } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = async () => {
    //await handleSignIn();
  };

  async function handleSignIn() {
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
    <View>
      <Text>Sign in</Text>
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

      <CustomButton text="Register" onPress={onSignInPressed}></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SignIn;
