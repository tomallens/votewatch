import * as React from "react";
//import { useNavigation } from "@react-navigation/native";
//import { AuthProvider } from "./src/components/context/AuthContext";
import { View, Text } from "react-native-web";

import AppNav from "./src/navigation/AppNav";
//const Stack = createNativeStackNavigator();

function App() {
  return (
    <View>
      {/* // <AuthProvider> */}
      <AppNav></AppNav>
      {/* // </AuthProvider> */}
    </View>
  );
}

export default App;
