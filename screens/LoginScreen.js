import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => navigation.navigate("Home"))
      .catch(error => alert("Erro ao logar: " + error.message));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Senha:</Text>
      <TextInput secureTextEntry onChangeText={setSenha} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Entrar" onPress={login} />
    </View>
  );
}
