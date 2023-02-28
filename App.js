import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootNavigation />
  );
}

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
        <Stack.Screen name = "DetailsScreen" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

