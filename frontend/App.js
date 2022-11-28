import * as React from "react";

import { AuthProvider } from "./src/components/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

function App() {
  return (
    <AuthProvider>
      <AppNav></AppNav>
    </AuthProvider>
  );
}

export default App;
