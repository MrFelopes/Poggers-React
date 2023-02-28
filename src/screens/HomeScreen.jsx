import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Bem vindo ao Poggers</Text>
        <Button
          title="Me deixa entrar!"
          onPress={() => navigation.navigate("Details")}
        ></Button>
      </View>
    );
  }