import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Alert } from "react-native";
import FlatButton from "../../Components/FlatButton";
import styles from "../../Styles/GlobalStyles";

const SettingsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatButton
      text="Policy"
      onPress={() =>
        navigation.navigate("PolicyScreen", { name: "Policy Screen" })
      }
    />
    <FlatButton
      text="Terms and Conditions"
      onPress={() =>
        navigation.navigate("TermsAndConditionsScreen", {
          name: "TermsAndConditionsScreen",
        })
      }
    />
    <FlatButton
      text="Logout"
      onPress={() =>
        Alert.alert("Logout", "Do you want to logout?", [
          {
            text: "Yes",
            onPress: () => {
              AsyncStorage.removeItem("token");
              AsyncStorage.setItem("isLoggedIn", JSON.stringify(false));
              navigation.replace("LoginScreen");
            },
          },
          { text: "No", onPress: () => console.warn("No Pressed") },
        ])
      }
    />
  </View>
);

export default SettingsScreen;
