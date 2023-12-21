import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import {FontAwesome} from '@expo/vector-icons'
export default function Button ({title, onPress = () => {}}){
  return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <Text style={styles.title}>Enviar</Text> */}
      <FontAwesome name="send" size={25} color={'#00509d'}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    paddingHorizontal:15,
    // backgroundColor:'#00509d',
    borderRadius:10
  },
  title:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'
  }
})