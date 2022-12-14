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
  // const [errors, setErrors] = React.useState({});

  // const handleError = (error, input) => {
  //   setErrors((prevState) => ({ ...prevState, [input]: error }));
  // };

  // const validate = async () => {
  //   let isValid = true;

  //   if (!email) {
  //     handleError('Please input email', 'email');
  //     isValid = false;
  //   } else if (!email.match(/\S+@\S+\.\S+/)) {
  //     handleError('Please input a valid email', 'email');
  //     isValid = false;
  //   }

  //   if (!password) {
  //     handleError('Please input password', 'password');
  //     isValid = false;
  //   } else if (password.length < 7) {
  //     handleError('Password needs to be at least 8 characters.', 'password');
  //     isValid = false;
  //   }

  //   if (isValid) {
  //     login(email, password);
  //   }
  // };

  return (
    <SafeAreaView 
    style={styles.container}>
      <Text
      style={styles.text}>Please enter your{`\n`}    login details</Text>


      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        // error={errors.email}
      ></CustomInput>
      {/* <Text style={{ color: 'red' }}>{errors['email']}</Text> */}

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
        // error={errors.password}
      ></CustomInput>
      {/* <Text style={{ color: 'red' }}>{errors['password']}</Text> */}

      <CustomButton
        text="Login"
        onPress={() => {
          login(email, password);
          // validate();
        }}
      ></CustomButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mintcream",
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
