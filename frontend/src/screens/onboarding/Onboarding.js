import * as React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, Image } from "react-native";

import CustomButton from "../../components/customButton/CustomButton";

// import { AuthProvider } from "../../components/context/AuthContext";

function Onboarding({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./../../../assets/logo.png')} style={{width: 180, height: 100, blurRadius: 1000}}></Image>
      <Text style={{font: 'helvetica', fontSize: 16, fontWeight: 'bold'}}>Welcome to Aye Spy</Text>
      <Text>See how your MP votes</Text>

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
