import { View, StyleSheet, Text } from 'react-native'


export default function Message({message}) {
  return (
    <View style={styles.message(message.role)}>
      <Text style={styles.messageText(message.role)}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: (message) => ({
    backgroundColor: 'gainsboro',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '90%',
    marginLeft: message === 'user' ? 'auto' : 0,
    backgroundColor: message === 'user' ? '#415a77' : '#778DA9',
    
  }),
  messageText:(message) => ({
    fontSize:17,
    color: message === 'user' ? '#ffffff' : '#0d1b2a'
  })
});