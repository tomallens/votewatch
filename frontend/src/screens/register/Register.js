import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mpName, setMpName] = useState('');

  const onRegisterPressed = async () => {
    await handleRegistration();
  };

  async function handleRegistration() {
    await fetch('http://localhost:3000/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
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
        autoCapitalize='words'
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 32,
    fontWeight: 'bold'
  },
  textSecondary: {
    fontFamily: 'Futura',
    fontSize: 18
  }
});

export default Register;
