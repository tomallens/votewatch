import * as React from "react";
import { useContext } from "react";
import {
  NavigationContainer,
  View,
  ActivityIndicator,
} from "@react-navigation/native";
// import { AuthProvider } from "../components/context/AuthContext";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../components/context/AuthContext";

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContext: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />{" "}
    </View>;
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
