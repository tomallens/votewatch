import * as React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

import CustomButton from "../../components/customButton/CustomButton";

// import { AuthProvider } from "../../components/context/AuthContext";

function Onboarding({ navigation }) {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Welcome to Votewatch</Text>
      <Text>Keeping eyes on the ayes</Text>

      <CustomButton
        text="Register"
        onPress={() => navigation.navigate("Register")}
      ></CustomButton>

      <CustomButton
        text="Login"
        onPress={() => navigation.navigate("Login")}
      ></CustomButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },
});

export default Onboarding;
