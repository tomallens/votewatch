import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

import CustomButton from '../../components/customButton/CustomButton';

// import { AuthProvider } from "../../components/context/AuthContext";

function Onboarding({ navigation }) {
  return (
    <SafeAreaView
      style={ styles.container }
    >
      <Image
        source={require('./../../../assets/logo.png')}
        style={{ marginTop: 80, marginBottom: 20, width: 180, height: 100, blurRadius: 1000 }}
      ></Image>
      <Text style={ styles.text}>
        Welcome to Aye Spy
      </Text>
      <Text style={{ marginBottom: 150, fontSize: 18 }}>Political transparency in your hands</Text>

      <CustomButton
        text="Register"
        onPress={() => navigation.navigate('Register')}
      ></CustomButton>

      <CustomButton
        text="Login"
        onPress={() => navigation.navigate('Login')}
      ></CustomButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'top', 
    alignItems: "center"},
    text:{
    fontFamily: 'Futura', fontSize: 32, fontWeight: 'bold'
  },
});

export default Onboarding;
