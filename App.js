import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import FilmesPage from "./src/pages/FilmesPage";
import LoginPage from "./src/pages/login";

export default function App() {
  const Stack = createStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginPage" component={LoginPage}  />
        <Stack.Screen name="FilmesPage" component={FilmesPage} />
      </Stack.Navigator>
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
