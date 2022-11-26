import * as React from "react";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Votewatch</Text>
      <Text>Keeping eyes on the ayes</Text>
      <Button
        title="Watch votes now!"
        onPress={() => navigation.navigate("Feed")}
      />
    </View>
  );
}
