import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

// import { Container } from './styles';

export default class X extends Component {
    constructor(props){
        super(props);
        this.state = {
            seta1: new Animated.Value(0),
            seta2: new Animated.Value(0)
        };

        Animated.timing(
            this.state.seta1,
            {toValue: 45, duration: 500, easing: Easing.elastic(1.5)}
        ).start();
        Animated.timing(
            this.state.seta2,
            {toValue: -45, duration: 500, easing: Easing.elastic(1.5)}
        ).start();
    }

    render() {

        let r1 = this.state.seta1.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
        let r2 = this.state.seta2.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });

        return (
            <Animated.View style={styles.container}> 
                <Animated.View style={[ styles.content, { transform: [ {perspective: 1000}, {rotate: r1} ] } ]}></Animated.View>
                <Animated.View style={[ styles.content, { transform: [ {perspective: 1000}, {rotate: r2} ] } ]}></Animated.View>
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
        width: 10,
        height: 44,
        backgroundColor: '#f73',
        position: 'absolute'
    }     
});

