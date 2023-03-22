import * as React from 'react';
import {View} from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import styles from "../utils/styles";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from '@firebase/auth';


export default function LoginScreen({ navigation }){
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  
  function handleLogin(){
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Usuário logado com sucesso!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/invalid-email") {
        alert("O e-mail está errado.");
      }

      if (errorCode === "auth/user-not-found") {
        alert("O usuário não existe.");
      }
      
      if (errorCode === "auth/wrong-password") {
        alert("A senha está incorreta.");
      }
      
      if (!senha) {
        alert("Digite uma senha.");
      }
    });
}

    return(
        <View
          style={styles.container}
        >
          <Text>Faça seu login</Text>
          <br />
          <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}

          />

          <TextInput
            secureTextEntry={true}
            label="Senha"
            value={senha}
            onChangeText={senha => setSenha(senha)}
          />
          <Button onClick={handleLogin}>Login</Button>
          
        </View>
      )
    }
