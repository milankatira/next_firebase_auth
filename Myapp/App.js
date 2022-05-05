import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./routes/index";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
  );
}
