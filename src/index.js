
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FetchNews from "./screens/FetchNews";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RickMorty from "./screens/RickMorty";
import RMGameScreen from "./screens/RMGameScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator initialRouteName="HomeScreen">
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: "Faça seu Login",
        }}
      />
      <Tabs.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Tabs.Screen
        name="FetchNews"
        component={FetchNews}

      />
      <Tabs.Screen
        name="RickMorty"
        component={RickMorty}

      />
      <Tabs.Screen
        name="RMGameScreen"
        component={RMGameScreen}

      />
    </Tabs.Navigator>
  );
}

