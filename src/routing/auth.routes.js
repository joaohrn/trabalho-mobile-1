import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/login";
import RegistrationPage from "../pages/RegistrationPage"

export default function AuthRoutes() {
    const AuthStack = createStackNavigator()

    return(
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Login" component={LoginPage}/>
        <AuthStack.Screen name="Registrar" component={RegistrationPage}/>
      </AuthStack.Navigator>
    )
}
