import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';

function Register({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mpName, setMpName] = useState('');

  const onRegisterPressed = async () => {
    await handleRegistration();
    navigation.goBack();
  };

  async function handleRegistration() {
    await fetch('http://10.86.152.195:8080/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        mpname: mpName
      })
    }).then((response) => {
      if (response.status === 201) {
        console.log('OK');
      } else {
        console.log('OH NO');
      }
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.textSecondary}>
        Please enter your details to sign up
      </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  textSecondary: {
    fontSize: 18
  }
});

export default Register;
