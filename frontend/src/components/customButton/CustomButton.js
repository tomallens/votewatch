import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Pressable } from "react-native";

function CustomButton(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "15%",
    padding: 7,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 8,
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    // justifyContent: 'bottom',
  },
  text: {
    fontWeight: "bold",
    color: "#87ceeb",
  },
  
});

export default CustomButton;
