import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function PoggersScreen({ navigation }){

  return(
    <View
      style={styles.container}
    >
      <Text>WHO IS A DETECTIVE WHO LIVES IN INABA?</Text>
      <Button 
        mode="contained"
        onPress={() => {navigation.navigate("AboutScreen")}}
      >Veja o sobre</Button>
      <Button 
        mode="contained"
        onPress={() => {navigation.navigate("TakagiScreen")}}
      >cuidado</Button>
    </View>
  )
}