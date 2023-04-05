import { View, Text,StyleSheet, Button } from 'react-native'
import React from 'react'

const First = (props) => {

  changePage = () => props.navigation.navigate("SecondScreen",{
    username: "alperenengineer"
  })
  console.log(props)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Merhaba First page</Text>
      <Button title="change" onPress={changePage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:'black',
    fontSize:32,
    fontWeight:'bold',
  }
})

export default First