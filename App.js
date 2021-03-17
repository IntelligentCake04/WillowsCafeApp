import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/Screens/HomeScreen";
import LoyaltyCardScreen from "./src/Screens/LoyaltyCardScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="LoyaltyCard" component={LoyaltyCardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
