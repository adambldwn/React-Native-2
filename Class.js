import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button, Alert } from 'react-native';

class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount() { Alert.alert('Merhaba','Dostum') }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text style={{marginVertical: 20, textAlign: 'center'}}>Counter : {this.state.counter}</Text>
                    <Button
                        title='UP!'
                        onPress={() => {
                            this.setState({ counter: this.state.counter + 1 })
                        }}
                    />
                    <View style={{marginVertical: 20}}>
                        <Button
                            title='RESET'
                            onPress={() => {
                                this.setState({ counter: 0 })
                            }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default App;