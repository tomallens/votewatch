import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import Onboarding from "../screens/onboarding/Onboarding";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
