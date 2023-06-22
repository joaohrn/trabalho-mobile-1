import { Link } from "@react-navigation/native"
import { useContext, useState } from "react"
import { View, Image, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native"
import { AuthContext } from "../context/auth"


export default function RegistrationPage() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const {createUser} = useContext(AuthContext)
  
  async function registrar() {
    await createUser(email, senha)
    navigation.navigate("Login")
  }

  return(
    <View style={styles.tela}>
      <View style={styles.container}>
        <Text style={styles.text}>e-mail</Text>
        <TextInput onChangeText={e=> setEmail(e)} inputMode="email" style={styles.input}/>
        <Text style={styles.text}>Senha</Text>
        <TextInput onChangeText={e=> setSenha(e)} secureTextEntry={true} style={styles.input}/>
        <Text>Já tem conta? <Link to={{screen: 'Login'}}>Entre</Link></Text>
        <TouchableOpacity onPress={registrar} style={styles.botao}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tela: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a3a95',
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 30,
    gap: '2px',
  },
  input: {
    height: '26px',
    borderStyle: 'solid',
    borderWidth: '2px'
  },
  text: {
    fontSize: '1.2em'
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 68,
    backgroundColor: '#BA5913',
  }
})
