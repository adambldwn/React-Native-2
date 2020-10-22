import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, Dimensions, Alert } from 'react-native';

const Login = (props) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        setMail("");
        setPassword("");
        alert(`Email: ${mail}, Pass: ${password}`);
    }
    
    return (

        <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor:'#ffebee'}}>

            <Image
                source= {{ uri: "https://e7.pngegg.com/pngimages/481/979/png-clipart-content-management-system-proprietary-software-panic-button-computer-software-art-login-weights-content-management.png"}}

                style={styles.image}
            />

            <TextInput
                value={mail}
                placeholder='Lütfen mail adresinizi giriniz'
                onChangeText= {(userText)=> setMail(userText)}
                style= {styles.inputtext}
            />
            
            <TextInput
                value={password}
                placeholder='Lütfen şifrenizi adresinizi giriniz'
                onChangeText={(userPass)=> setPassword(userPass)}
                style= {styles.inputtext}
                secureTextEntry={true}
            />
            <View style={styles.button}>
                <Button 
                    title='Giriş Yap'
                    onPress={login}
                />
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    inputtext: {
        backgroundColor: '#8d6e63',
        padding: 5,
        margin: 10,
        borderRadius: 10
    },
    button: {
        margin: 10,
        padding: 5,
        borderRadius:15
    },
    image: {
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.25,
        resizeMode: 'contain',
        margin: 10,
        alignSelf: 'center'
    }
})