import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext({})

export default function AuthProvider({children}) {
  async function createUser(email, senha) {
    try{
      await AsyncStorage.setItem(email, senha)
    }catch(e){
      console.warn(e)
    }
  }
  const [user, setUser] = useState(null)
  
  function login(email, senha) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          token: 'fsndjjn',
          user: {
            email: email,
            senha: senha
          }
        })
      },2000)
    })
  }
  async function entrar(email, senha){
    try{
      const response = await login(email, senha)
      const {token, user} = response
      const storage = await AsyncStorage.getItem(email)
      if(storage != null && storage == senha){
        await AsyncStorage.setItem("currentUser", JSON.stringify(user))
        setUser(user)
      }else{
        console.warn("usuario não existe")
      }
    }catch(e) {
      console.warn(e)
    }
  }
 
  async function logoff() {
    try {
      await AsyncStorage.setItem("currentUser", null)
      setUser(null)
    }catch(e){
      console.warn(e)
    }
  }

  return(
    <AuthContext.Provider value={{isLoggedIn: !!user, user, entrar, createUser, logoff}}>
      {children}
    </AuthContext.Provider>
  )
}

