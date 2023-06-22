import { useContext, useState } from "react"
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"
import { NavigationContainer } from "@react-navigation/native"
import AuthProvider, { AuthContext } from "../context/auth"

export default function Navigation() {

  const {isLoggedIn} = useContext(AuthContext)

  return isLoggedIn ? <AppRoutes /> : <AuthRoutes />

  }
