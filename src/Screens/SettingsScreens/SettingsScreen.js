import React from "react";
import { View, Text, Alert } from "react-native";
import FlatButton from "../../Components/FlatButton";
import styles from "../../Styles/GlobalStyles";

export default SettingsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatButton
      text="About"
      onPress={() =>
        navigation.navigate("AboutScreen", { name: "About Screen" })
      }
    />
    <FlatButton
      text="Policy"
      onPress={() =>
        navigation.navigate("PolicyScreen", { name: "Policy Screen" })
      }
    />
    <FlatButton
      text="Contact"
      onPress={() =>
        navigation.navigate("ContactScreen", { name: "Contact Screen" })
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
          { text: "Yes", onPress: () => console.warn("Yes Pressed") },
          { text: "No", onPress: () => console.warn("No Pressed") },
        ])
      }
    />
    <FlatButton
      text="Scan QR Code"
      onPress={() =>
        navigation.navigate("QRScannerScreen", {
          name: "QR Scanner Screen",
        })
      }
    />
  </View>
);
