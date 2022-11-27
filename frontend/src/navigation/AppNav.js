import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { AuthProvider } from "../components/context/AuthContext";
import AuthStack from "./AuthStack";

function AppNav() {
  return (
    <NavigationContainer>
      // {/* <AppStack/> */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default AppNav;
