import * as React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import { AuthContext } from "../../components/context/AuthContext.js";
import CustomButton from "../../components/customButton/CustomButton";

function Profile() {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 26,
    alignItems: 'center',
    fontWeight: 'bold'
  }
});

export default Profile;
