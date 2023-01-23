import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Singin() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Mega')}
                >
                    <Text style={styles.buttonText}>Mega sena</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Quina')}
                >
                    <Text style={styles.buttonText}>Quina</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonHellp}
                    onPress={() => navigation.navigate('Ajuda')}
                >
                    <Text style={styles.buttonText}>Ajuda</Text>
                </TouchableOpacity>
                
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
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
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
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#32CD32',
        width: '100%',
        borderRadius: 50,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonHellp: {
        backgroundColor: '#32CD32',
        width: '50%',
        borderRadius: 50,
        paddingVertical: 8,
        marginTop: 300,
        marginLeft: 175,
        alignItems: 'center'
    }
})