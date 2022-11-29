import * as React from "react";
import { View, useContext, ActivityIndicator } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../components/context/AuthContext";

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContext: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />{" "}
      </View>
    );
  }
  console.log("user token from AppNAv", userToken);
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
