import React, { Component } from 'react'
import { StyleSheet,  View,Dimensions, Animated,Easing } from 'react-native'
import CarBody from './MotoBody';
import Tire from './Tire';

const DEVİCE_WIDTH=Dimensions.get('window').width;

export default class Car extends Component {
  state={
    animation:new Animated.Value(DEVİCE_WIDTH)
  }

  componentDidMount(){
    this.startAnimation()
  }

  startAnimation=()=>{
    Animated.loop(
      Animated.timing(this.state.animation,{
      duration:6000,
      toValue:-200,
      easing:Easing.linear,
      useNativeDriver:false
    })).start()
  }
  render() {
    const animationStyles={
      left:this.state.animation
    }
    return (
      <View  style={[styles.container,{...this.props.style}]}>
        <Animated.View style={[styles.car,animationStyles]}>
        <CarBody/>
        <View style={styles.tire1}>
          <Tire/>
        </View>
        <View style={styles.tire2}>
          <Tire/>
        </View>
        </Animated.View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container: {
		flex:1,
		zIndex: 10
	},
  car:{
    position: 'relative',
    width:200,
    height:200
  },
  tire1:{
    position:'absolute',
    left:5,bottom:-15
  },
  tire2:{
    position:'absolute',
    right:23,bottom:-15
  }
});