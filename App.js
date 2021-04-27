import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/Screens/LoginScreen";
import LoyaltyCardScreen from "./src/Screens/LoyaltyCardScreen";
import SettingsScreen from "./src/Screens/SettingsScreen";
import { Button } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoyaltyCardScreen"
          component={LoyaltyCardScreen}
          options={({ navigation }) => ({
            title: "Loyalty Card",
            headerStyle: {
              backgroundColor: "#CC5500",
              elevation: 0,
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Button
                title="Settings"
                icon
                onPress={() => navigation.navigate("SettingsScreen")}
              ></Button>
            ),
          })}
        />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
