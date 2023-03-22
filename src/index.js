  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import { NavigationContainer } from "@react-navigation/native";
  import AboutScreen from "./screens/AboutScreen";
  import HomeScreen from "./screens/HomeScreen";
  import LoginScreen from "./screens/LoginScreen";
  import TakagiScreen from "./screens/TakagiScreen";
  import SplashScreen from "./screens/SplashScreen";
  import PoggersScreen from "./screens/PoggersScreen";
  import RegisterScreen from "./screens/RegisterScreen";
  import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

  const Stack = createNativeStackNavigator();

  export default function RootNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="TabsNavigator"
              component={TabsNavigation}
              options={{
                  headerShown: false
              }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Tela Inicial",
            }}
          />
          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{
              headerTitle: "Tela de Sobre",
            }}
          />
          <Stack.Screen
            name="TakagiScreen"
            component={TakagiScreen}
            options={{
              headerTitle: "Tela de Sobre",
            }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerTitle: "Tela de Login",
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerTitle: "Tela de Registro",
            }}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerTitle: "Tela Splash",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const tabs = createMaterialBottomTabNavigator();

  function TabsNavigation() {
    return (
      <tabs.Navigator>
        <tabs.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Tela Inicial",
          }}
        />
        <tabs.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Tela de login",
          }}
        />
        <tabs.Screen
          name="TakagiScreen"
          component={TakagiScreen}
          options={{
            title: "EU AMO TAKAGI",
          }}
        />
        <tabs.Screen
          name="PoggersScreen"
          component={PoggersScreen}
          options={{
            title: "tela do poggers",
          }}
        />
      </tabs.Navigator>
    );
  }
