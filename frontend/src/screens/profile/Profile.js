import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/customButton/CustomButton";
import * as SecureStore from "expo-secure-store";

export function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <CustomButton
        text="Register"
        onPress={() => navigation.navigate("Register")}
      ></CustomButton>

      <CustomButton
        text="Sign In"
        onPress={() => navigation.navigate("SignIn")}
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
