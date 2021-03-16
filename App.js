import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/Screens/HomeScreen";
import AnotherScreen from "./src/Screens/AnotherScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="AnotherScreen" component={AnotherScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
