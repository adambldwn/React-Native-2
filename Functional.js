import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
    const [counter, setcounter] = useState(0);

    useEffect(() => {
        if (counter > 10) {
            Alert.alert("DİKKAT", "10'dan büyük sayı girdiniz")
        }
    }
        , [counter]
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Counter : {counter}</Text>
            <Button
                title='UP!'
                onPress={() => setcounter(counter + 1)}
            />
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcedc8',
        justifyContent: 'center',
    },
    text: {
        marginVertical: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})