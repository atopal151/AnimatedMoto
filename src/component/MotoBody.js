import React, { Component } from 'react'
import {  StyleSheet,Animated } from 'react-native'

export default class CarBody extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  componentDidMount() {
    this.startAnimation()
  }
  startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation, {
          duration: 400,
          toValue: 3,
          useNativeDriver: false
        }),
        Animated.timing(this.state.animation, {
          duration: 500,
          toValue: 0,
          useNativeDriver: false
        }),

      ])
    ).start()
  }

  render() {
    const animatedStyles = {
      top: this.state.animation
    }
    return (
      <Animated.Image resizeMode={'contain'}
        source={require('../../assets/car.png')}
        style={[styles.carBody, animatedStyles]} />
    )
  }
}

const styles = StyleSheet.create({
  carBody: {
    width: 200,
    height: 200,
    position: 'absolute',
    left: 0,
    top: 0
  }
})
