import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Cartao from "./src/components/filmeCard/scripts";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("https://api.otaviolube.com/api/filmes?populate=*")
      .then((res) => {
        if(res.ok){
          console.log('deu certo')
          return(res.json())
        }else{
          console.log('caiu')
        }
      })
      .then((data) => {
        setFilmes(data.data)
      });
      }, []);
  return (
    <View style={styles.container}>
      {filmes.map((filme) => <Cartao filme={filme.attributes} key={filme.id} />)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: '10px',
  },
});
