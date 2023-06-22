import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartao: {
        display: "flex",
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#0077b6',
        overflow: 'hidden',
    },
    imagemContainer: {
      marginVertical: '10px',
        width: '90%',
        height : '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imagem: {
      width: 300,
      height: 500,
      resizeMode: 'contain',
    },
    informacoes: {
      width: '90%',
        gap: '10px',
    },
    tituloContainer: {
        backgroundColor: '#023e8a',
        minWidth: '100%',
        textAlign: 'center',
    },
    titulo: {
        fontSize: '2rem',
        fontFamily: 'Aller',
        color: '#ee9b00',
    },
    sinopseContainer: { 
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
        minWidth: '40%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC4F00'
    },
    botao: {
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Aller'
    }
    
})

export {styles}
