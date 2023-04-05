import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const Second = (props) => {
  console.log(props);

  const user = props.route.params.username;

  backToFirst =() =>{ 
    props.navigation.goBack();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Merhaba Second page</Text>
      <Text> {user} </Text>
      <Button title="Go back" onPress={backToFirst} />
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

export default Second