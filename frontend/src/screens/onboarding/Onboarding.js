import * as React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import CustomButton from "../../components/customButton/CustomButton";

// import { AuthProvider } from "../../components/context/AuthContext";

function Onboarding({ navigation }) {
  return (
    <SafeAreaView>
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

export default Onboarding;
