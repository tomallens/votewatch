import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Alert } from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';

function Register({navigation}) {
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
    await handleRegistration();
    navigation.goBack();
    validate();
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
        error={errors.name}
      ></CustomInput>
      {/* <Text style={{ color: 'red' }}>{errors['name']}</Text> */}

      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        error={errors.email}
      ></CustomInput>
      {/* <Text style={{ color: 'red' }}>{errors['email']}</Text> */}
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry   error={errors.password}
        ></CustomInput>
        {/* <Text style={{ color: 'red' }}>{errors['password']}</Text> */}
  
        <CustomInput
          placeholder="Your MP's name"
          value={mpName}
          setValue={setMpName}
          error={errors.mpName}
        ></CustomInput>
        {/* <Text style={{ color: 'red' }}>{errors['mpName']}</Text> */}

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
