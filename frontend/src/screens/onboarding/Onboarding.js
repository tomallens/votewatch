import * as React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
const image = ('../../../assets/BG2.png')

// import { AuthProvider } from "../../components/context/AuthContext";

function Onboarding({ navigation }) {
  return (
    <SafeAreaView
      style={ styles.container }
    >
      <Text style={ styles.text}>
        Aye Spy
      </Text>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Political transparency in your hands</Text>
      <Image
        source={require('./../../../assets/logo.png')}
        style={{ marginBottom: 50, width: 180, height: 100, blurRadius: 1000 }}
      ></Image>
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
    backgroundColor: "gainsboro",
    justifyContent: 'top', 
    alignItems: "center"},
    text:{
      // fontFamily: 'Futura',
      marginTop: 80,
      marginBottom: 5,
      fontSize: 60,
      fontWeight: 'bold'
  },
  // image: {
    // flex: 1,
    // justifyContent: "center"
  // }
});

export default Onboarding;
