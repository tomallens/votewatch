import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Feed from "../screens/feed/Feed";
// import Profile from "./src/components/profile/Profile";

const Stack = createNativeStackNavigator();

function AppStack({ navigation }) {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Profile")}
                title="Profile"
                color="#000000"
              />
            ),
          }}
        />

        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        /> */}
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

export default AppStack;
