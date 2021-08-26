import React from "react";
import { View, Text, Alert } from "react-native";
import FlatButton from "../Components/FlatButton";
import styles from "../Styles/GlobalStyles"

const CupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatButton
      text="Menu"
      onPress={() => navigation.navigate("MenuScreen", { name: "Menu Screen" })}
    />
    <FlatButton
      text="About"
      onPress={() =>
        navigation.navigate("AboutScreen", { name: "About Screen" })
      }
    />
    <FlatButton
      text="Contact"
      onPress={() =>
        navigation.navigate("ContactScreen", { name: "Contact Screen" })
      }
    />
  </View>
);

export default CupScreen;
