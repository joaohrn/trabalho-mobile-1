import React from "react";
import { Text, Image, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";

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
        <View style={styles.sinopseContainer}>
          {props.filme.sinopse.length >= 200 ? <Text style={styles.sinopse}>{props.filme.sinopse.substring(0, 200)}...<Link to={{screen: 'filme details', params: {filme: props.filme}}}>saiba mais</Link></Text> :<Text style={styles.sinopse}>{props.filme.sinopse}</Text>}
        </View>
        <TouchableOpacity style={styles.comprar}>
          <Text style={styles.botao}>comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

