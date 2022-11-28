import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import { AuthContext } from "../../components/context/AuthContext.js";
import CustomButton from "../../components/customButton/CustomButton";

function Profile() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <CustomButton
        text="Logout"
        onPress={() => {
          logout();
        }}
      ></CustomButton>
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
