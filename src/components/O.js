import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing} from 'react-native';

export default class O extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            altura: new Animated.Value(0)
        }

        Animated.timing(
            this.state.altura,
            {toValue: 44, duration: 500, easing: Easing.elastic(1.5) }
        ).start();
    }

    render() {
        return (
            <Animated.View style={styles.container}>
                <Animated.View style={[styles.content, {height: this.state.altura}]}/>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#f2A122'
    }          
});

