import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Alert } from 'react-native';

import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mpName, setMpName] = useState('');
  const [errors, setErrors] = React.useState({});

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const validate = async () => {
    let isValid = true;

    if (!email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!name) {
      handleError('Please input a name', 'name');
      isValid = false;
    } else if (!name.match(/^[a-zA-Z0-9 '-]*$/)) {
      handleError(
        'Name can only contain letters, spaces, hyphons and apostrophes.',
        'name'
      );
      isValid = false;
    }

    if (!password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (password.length < 7) {
      handleError('Password needs to be at least 8 characters.', 'password');
      isValid = false;
    }

    if (!mpName) {
      handleError('Please input an MP name.', 'mpName');
      isValid = false;
    } else if (!mpName.match(/^[a-zA-Z0-9 '-]*$/)) {
      handleError(
        'Name can only contain letters, spaces, hyphons and apostrophes.',
        'name'
      );
      isValid = false;
    }

    if (isValid) {
      await handleRegistration();
      navigation.navigate('Login');
    }
  };

  const onRegisterPressed = async () => {
    validate();
  };

  async function handleRegistration() {
    await fetch('http://localhost:8080/register', {
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
        error={errors.name}
      ></CustomInput>
      <span style={{ color: 'red' }}>{errors['name']}</span>

      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        error={errors.email}
      ></CustomInput>
      <span style={{ color: 'red' }}>{errors['email']}</span>

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
        error={errors.password}
      ></CustomInput>
      <span style={{ color: 'red' }}>{errors['password']}</span>

      <CustomInput
        placeholder="Your MP's name"
        value={mpName}
        setValue={setMpName}
        error={errors.mpName}
      ></CustomInput>
      <span style={{ color: 'red' }}>{errors['mpName']}</span>

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
