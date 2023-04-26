import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartao: {
        display: "flex",
        flexDirection: 'row-reverse',
        height: '25%',
        maxWidth: '90%',
        alignItems: 'center',
        backgroundColor: '#0077b6',
    },
    imagemContainer: {
        height: '100%',
        maxWidth: '50%',
        display: 'flex',
        flex: 1,
    },
    imagem: {
      height: 100,
      width: 200,
      resizeMode: 'contain',
    },
    informacoes: {
        height: '100%',
        maxWidth: '50%'
    },
    tituloContainer: {
        backgroundColor: '#023e8a',
        minWidth: '100%',
        textAlign: 'center'
    },
    titulo: {
        fontSize: '2rem',
        fontFamily: 'Aller',
        color: '#ee9b00',
    },
    sinopseContainer: {
      maxHeight: '40%', 
      marginBottom: '10px',
    },
    subtitulo: {
        fontSize: '1rem',
        fontFamily: 'Aller',
        color: '#ee9b00',
    },
    sinopse: {
        fontSize: '0.9rem',
        fontFamily: 'helvetica',
    },
    comprar: {
        minWidth: '20%',
        justifyContent:'center',
    },
    
})

export {styles}
