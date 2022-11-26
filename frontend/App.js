import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./src/components/homeScreen/HomeScreen";
import { Feed } from "./src/components/feed/Feed";
import { Profile } from "./src/components/profile/Profile";
import { Register } from "./src/components/register/Register";
import { SignIn } from "./src/components/signIn/SignIn";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: () => <Text>Votewatch</Text>,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("Profile")}
                  title="Profile"
                  color="#000000"
                />
              ),
            })}
          />
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
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "SignIn" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
