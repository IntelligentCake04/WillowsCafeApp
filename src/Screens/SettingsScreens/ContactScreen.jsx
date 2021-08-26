import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Linking } from "react-native";
import { SocialIcon } from "react-native-elements";
import { TouchableHighlight } from "react-native-gesture-handler";
import FlatButton from "../../Components/FlatButton";
import GlobalStyles from "../../Styles/GlobalStyles";

const ContactScreen = () => (
  <View style={GlobalStyles.container}>
    <View style={styles.text}>
      <FlatButton text="Email us here" onPress={() => Linking.openURL("mailto:willowscoffeehouse37@gmail.com")}/>
      <FlatButton text="Find us here" onPress={() => Linking.openURL("https://www.google.com/maps?cid=16426280826944911646")}/>
      <FlatButton text="Phone us here" onPress={() => Linking.openURL("tel:+447796174233")}/>
    </View>
    <View>
      <SocialIcon button type='instagram' title="Our Instagram" onPress={() => Linking.openURL("https://www.instagram.com/willowscoffeehouse/?hl=en")}/>
      <SocialIcon button type='facebook' title="Our Facebook" onPress={() => Linking.openURL("https://www.facebook.com/willowsbasingstoke/")}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  text: {
    margin: 20,
  },
  headline: {
    color: 'white', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    backgroundColor: "#CC5500"
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#CC5500',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CC5500',
  },
});

export default ContactScreen;
