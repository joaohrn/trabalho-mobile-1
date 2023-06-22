import { createStackNavigator } from "@react-navigation/stack";
import FilmesPage from "../pages/FilmesPage"
import FilmeDetails from "../pages/FilmeDetails";
import { Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function AppRoutes() {
  const AppStack = createStackNavigator()
  const {logoff} = useContext(AuthContext)

  return(
    <AppStack.Navigator initialRouteName="filmes" screenOptions={{
      headerRight: ()=> (
          <Button title="sair" onPress={logoff} />
    )}}>
      <AppStack.Screen name="filmes" component={FilmesPage} />
      <AppStack.Screen name="filme details" component={FilmeDetails} options={({route}) => ({title: route.params.filme.titulo})}/>
    </AppStack.Navigator>
  )
}
