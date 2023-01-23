import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            
        <View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../assets/APP2.png')}
                style={{ width: '80%'}}
                resizeMode="contain"
            />
        </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.text}>Entre e ecolha uma opção</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Singin')}
            >

            <Text style={styles.buttonText}>Acessar</Text> 

            </TouchableOpacity>
            
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'black'
    },
    containerLogo:{
        flex:2,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems: 'center'

    },
    containerForm:{
        flex:2,
        backgroundColor: '#000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: 'white',
    },
    text:{
        color: '#a1a1a1',
        fontSize: 20,
    },
    button:{
        position: 'absolute',
        backgroundColor: '#32CD32',
        borderRadius: 50,
        paddingVertical:8,
        width: '60%',
        alignSelf: 'center',
        bottom: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }

})