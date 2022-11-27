import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/customButton/CustomButton";

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
        text="Login"
        onPress={() => navigation.navigate("Login")}
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
