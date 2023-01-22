import React from "react";
import { View, StyleSheet, Image } from 'react-native';

export default () => (
    <View style={styles.container}>
        <Image source={require('../../assets/flowers-and-way.png')}
            style={styles.flowers}
            resizeMode={'contain'} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        zIndex:5
    },
    flowers: {
        width: '80%'
    }
})

