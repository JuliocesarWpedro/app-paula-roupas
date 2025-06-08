import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function HomeScreen() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const salvarProduto = async () => {
    if (!nome || !preco || !quantidade) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      await addDoc(collection(db, "produtos"), {
        nome,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade)
      });
      alert("Produto cadastrado!");
    } catch (error) {
      alert("Erro ao salvar: " + error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Preço:</Text>
      <TextInput keyboardType="numeric" onChangeText={setPreco} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Quantidade:</Text>
      <TextInput keyboardType="numeric" onChangeText={setQuantidade} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Cadastrar Produto" onPress={salvarProduto} />
    </View>
  );
}
