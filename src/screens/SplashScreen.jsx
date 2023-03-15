import { View } from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import styles from "../utils/styles";

export default function SplashScreen(){
    setTimeout(() => {
        navigation.navigate("HomeScreen"); 
    }, 3000);
    

  return(
    <View
      style={styles.container}
    >
      <Text>Carregando...</Text>
      <ActivityIndicator />
    </View>
  )
}