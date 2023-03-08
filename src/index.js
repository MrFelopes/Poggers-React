import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import TakagiScreen from "./screens/TakagiScreen";



const Stack = createNativeStackNavigator()

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen}
                    options={{
                        title: "Tela Inicial"
                    }}
                />
                <Stack.Screen 
                    name="AboutScreen" 
                    component={AboutScreen}
                    options = {{
                        headerTitle: "Tela de Sobre"
                    }}
                />
                <Stack.Screen 
                    name="TakagiScreen" 
                    component={TakagiScreen}
                    options = {{
                        headerTitle: "Tela de Sobre"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}