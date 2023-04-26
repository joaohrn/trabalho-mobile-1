import React from "react";
import { Button, Text, Image, View, ScrollView } from "react-native";
import { styles } from "./styles";

export default function Cartao(props) {
  return (
    <View style={styles.cartao}>
      <View style={styles.imagemContainer}>
        <Image source={{uri:`https://api.otaviolube.com${props.filme.poster.data.attributes.url}`}} style={styles.imagem} />
      </View>
      <View style={styles.informacoes}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>{props.filme.titulo}</Text>
          <Text style={styles.subtitulo}>{props.filme.subtitulo}</Text>
        </View>
        <ScrollView style={styles.sinopseContainer}>
          <Text style={styles.sinopse}>{props.filme.sinopse}</Text>
        </ScrollView>
        <View style={styles.comprar}>
          <Button title="comprar"></Button>
        </View>
      </View>
    </View>
  );
}

