import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartao: {
        display: "flex",
        flexDirection: 'row',
        height: '250px',
        maxWidth: '90%',
        alignItems: 'center',
        backgroundColor: '#0077b6',
        overflow: 'hidden',
    },
    imagemContainer: {
        maxWidth: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imagem: {
      width: 150,
      height: 300,
      resizeMode: 'center',
    },
    informacoes: {
        height: '100%',
        maxWidth: '50%',
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
        height: '10%',
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
