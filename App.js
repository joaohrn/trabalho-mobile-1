import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import FilmesPage from "./src/pages/FilmesPage";
import LoginPage from "./src/pages/login";
import FilmeDetails from "./src/pages/FilmeDetails";
import RegistrationPage from "./src/pages/RegistrationPage";
import Navigation from "./src/routing/navigation";
import AuthProvider from "./src/context/auth";

export default function App() {
  return(
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: '10px',
  },
});
