import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export const MpInput = ({ setMpName }) => {
  //const [mpName, setMpName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter MP name"
        onSubmitEditing={(value) => setMpName(value.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    color: "white",
  },
  button: {
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 20,
    borderBottomRightRadius: 20,
    height: 40,
    justifyContent: "center",
    margin: -1,
    paddingHorizontal: 20,
  },
});
