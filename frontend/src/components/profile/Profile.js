import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
