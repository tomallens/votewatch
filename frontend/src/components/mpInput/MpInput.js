import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export const MpInput = () => {
  const [mpName, onChangeMpName] = React.useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMpName}
        value={mpName}
        placeholder="Enter MP name"
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
});
