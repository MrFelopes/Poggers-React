import { View } from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import { styles } from "../utils/styles";

export default function SplashScreen({ navigation }){
    setTimeout(() => {
        navigation.navigate("TabsNavigation"); 
    }, 3000);
    

  return(
    <View
      style={styles.container}
      >
      <ActivityIndicator />
      <Text>Carregando...</Text>
    </View>
  )
}