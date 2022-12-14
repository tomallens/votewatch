import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Pressable } from "react-native";

function CustomButton({ onPress, text }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "30%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 8,
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    // justifyContent: 'bottom',
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  
});

export default CustomButton;
