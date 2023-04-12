import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({ navigation }){

  return(
    <View
    style={styles.container}
    >
      <Text>Essa é a Home Screen</Text>
      <br />
      <Button 
        mode="contained"
        onPress={() => {navigation.navigate("AboutScreen")}}
      >Veja o sobre</Button>
      <br />
      <Button 
        mode="contained"
        onPress={() => {navigation.navigate("TakagiScreen")}}
      >cuidado</Button>
      <br />
      <Button 
        mode="contained"
        onPress={() => {navigation.navigate("LoginScreen")}}
      >Login</Button>
      <Button 
        mode="contained"
        onPress={() => {navigation.navigate("RegisterScreen")}}
      >Register</Button>
    </View>
  )
}