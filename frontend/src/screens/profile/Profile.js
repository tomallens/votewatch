import * as React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
//import CustomButton from "../../components/customButton/CustomButton";

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Profile;
