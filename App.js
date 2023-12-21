import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import Message from "./src/components/Message";
import Button from "./src/components/Button";

export default function App() {
  const [message, setMessage] = useState([
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Olá" },
    { role: "assistent", content: "Olá! Em o quê posso ajudar?" },
  ]);
  const [prompt, setPrompt] = useState('');
  const onSend = () => {
    setMessage((existingMessage) => [...existingMessage, { role: 'user', content: prompt }]);

    setPrompt('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : 'height'} style={{flex:1}}>
        <FlatList
          data={message}
          contentContainerStyle={{ gap: 10, padding: 10 }}
          renderItem={({ item }) => <Message message={item} />}
        />
        <View style={styles.footer}>
          <TextInput value={prompt} onChangeText={setPrompt} placeholder="O que deseja?" style={styles.input} />
          <Button onPress={onSend} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 50
  }
});
