import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function TakagiScreen({ navigation }){

  return(
    <View
      style={styles.container}
    >
      <Text>I LOVE TAKAGI</Text>
      <Button 
        mode="contained"
        onPress={() => {navigation.navigate("HomeScreen")}}
      >volta pra segurança</Button>
    </View>
  )
}