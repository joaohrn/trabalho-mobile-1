import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Cartao from "../components/filmeCard/scripts";

export default function FilmesPage() {
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
      })
      }, []);
  return (
      <View style={styles.container}>
        { filmes.length > 0 ? filmes.map((filme) => <Cartao filme={filme.attributes} id={filme.id} key={filme.id} />) : <Text>Carregando...</Text>}
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: "#fff",
    gap: '10px',
  },
});
