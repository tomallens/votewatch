import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function CustomInput({ value, setValue, placeholder, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "50%",
    height: 25,
    borderColor: "black",
    justifyContent: "center",
    borderWidth: 2,
    margin: 4,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  input: {},
});

export default CustomInput;
