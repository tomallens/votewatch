import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

export const MpInput = () => {
  const [mpName, onChangeMpName] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMpName}
        value={mpName}
        placeholder="Enter MP name"
      />
    </SafeAreaView>
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
