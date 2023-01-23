import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Quina() {
    const navigation = useNavigation();

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [num3, setNum3] = useState('')
    const [num4, setNum4] = useState('')
    const [num5, setNum5] = useState('')

    function numaleatorio() {

        setNum1(geraNmeroAleatorio(1, 60))
        setNum2(geraNmeroAleatorio(1, 60))
        setNum3(geraNmeroAleatorio(1, 60))
        setNum4(geraNmeroAleatorio(1, 60))
        setNum5(geraNmeroAleatorio(1, 60))


    }

    function geraNmeroAleatorio(min, max) {
        const delta = max - min + 1
        const aleatorio = parseInt(Math.random() * delta) + min
        return aleatorio

    }


    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Singin')}
            >
                <Text style={styles.buttonBack}>Voltar</Text>

            </TouchableOpacity>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Quina</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <TouchableOpacity
                    style={styles.buttonGerar}
                    onPress={numaleatorio}
                >
                    <Text style={styles.Gerar}>Gerar numeros</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button2}
                >
                    <Text style={styles.Numero}>{(num1)}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                >
                    <Text style={styles.Numero}>{num2}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                >
                    <Text style={styles.Numero}>{num3}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                >
                    <Text style={styles.Numero}>{num4}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                >
                    <Text style={styles.Numero}>{num5}</Text>
                </TouchableOpacity>
                </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32CD32'
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
        backgroundColor: '#32CD32',
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
    Gerar: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    buttonGerar: {
        marginTop: 20,
        backgroundColor: '#32CD32',
        width: '100%',
        borderRadius: 50,
        paddingVertical: 8,
        alignItems: 'center',
    },
    Numero: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
    },
    button2: {
        marginTop: 20,
        backgroundColor: '#32CD32',
        width: '15%',
        borderRadius: 50,
        paddingVertical: 8,
        alignItems: 'center',
    }
})