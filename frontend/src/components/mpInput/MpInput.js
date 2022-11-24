import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const MpInput = () => {
  const [mpName, onChangeMpName] = React.useState("");

 
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter MP name"
        onSubmitEditing={(value) => onChangeMpName(value.nativeEvent.text)}
      />
      <Text>It is { mpName }</Text>  
      
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
