import { View } from "react-native";
import React, { useState } from "react";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function RegisterScreen(){
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  //função para registrar 
  function handleRegister(){
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      alert("Usuário logado com sucesso!");
      navigation.navigate("LoginScreen");
    }).catch((error) => {
      console.log("Erro ao logar usuário! ", error);
      const errorCode = error.code;

    if (errorCode === "auth/weak-password") {
      alert("A senha é muito fraca.");
    }

    if (errorCode === "auth/invalid-email") {
      alert("O e-mail é inválido.");
    }

    if (errorCode === "auth/email-already-in-use") {
      alert("O e-mail já está em uso.");
    }
    })

    
  }

  return(
    <View style={styles.container}> 
        <View style={styles.box}>
            <Paragraph>Realize seu cadastro</Paragraph>
            <TextInput
                label="E-mail"
                placeholder="Digite o seu e-mail"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
            />
            <TextInput
                label="Senha"
                placeholder="Digite a sua senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                mode="flat"
            />
            <Button onPress={handleRegister}>Registrar</Button>
        </View>

    </View>
  )
}