import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Ajuda() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Singin')}
            >
                <Text style={styles.buttonBack}>Voltar</Text>

            </TouchableOpacity>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Ajuda</Text>
            </Animatable.View>
                
            <Animatable.View animation="fadeInUp" >
                <Text style={styles.ajuda} > App em evolução, qualquer bug reportar ao desenvolvidor </Text>
                <Text style={styles.ajuda} > Caso o gerador faça numero repetido basta clicar no botão novamnete para gerar novos numeros </Text>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    containerHeader: {
        marginTop: '4%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#000',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#000',
        width: '13%',
        borderRadius: 50,
        paddingVertical: 8,
        marginLeft: 10,
    },
    buttonBack: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    ajuda: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
})