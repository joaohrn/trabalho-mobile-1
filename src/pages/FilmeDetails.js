import React, {useState, useEffect, useContext} from "react";
import { Text, Image, View, ScrollView } from "react-native";
import { styles } from "./FilmeDetailsStyles";
import { TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";

export default function FilmeDetails({ route }) {

  const {filme} = route.params

  return (
    <View style={styles.cartao}>
      <View style={styles.imagemContainer}>
        <Image source={{uri:`https://api.otaviolube.com${filme.poster.data.attributes.url}`}} style={styles.imagem} />
      </View>
      <View style={styles.informacoes}>
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>{filme.titulo}</Text>
          <Text style={styles.subtitulo}>{filme.subtitulo}</Text>
        </View>
        <View style={styles.sinopseContainer}>
          <Text style={styles.sinopse}>{filme.sinopse}</Text>
        </View>
        <TouchableOpacity style={styles.comprar}>
          <Text style={styles.botao}>comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

