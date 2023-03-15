import * as React from 'react';
import {View} from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import styles from "../utils/styles";

export default function LoginScreen({ navigation }){
    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
    return(
        <View
          style={styles.container}
        >
          <Text>Faça seu login</Text>
          <br />
          <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}

          />

          <TextInput
            secureTextEntry={true}
            label="Senha"
            onChangeText={text => setPassword(text)}
          />
          
        </View>
      )
    }
