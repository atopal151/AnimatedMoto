import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Car from './src/component/Moto'
import FlowersAndWay from './src/component/FlowersAndWay'
import Windmill from './src/component/Windmill'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Windmill style={{left:150,top:75}}/>
         <Windmill style={{left:-40,top:63}}/>
        <Car style={{top:290}}/>
       <FlowersAndWay/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#94BBA9'
  }
})
