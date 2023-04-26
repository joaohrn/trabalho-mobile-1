import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartao: {
        display: "flex",
        minHeight: '25%',
        maxWidth: '90%',
        alignItems: 'center',
        backgroundColor: '#0077b6',
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
    subtituloContainer: {
      maxHeight: '30%', 
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
