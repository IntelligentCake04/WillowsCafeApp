import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";

const CodeScreen = ({ route, navigation }) => {
  const [codeInput, setcodeInput] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Code..."
          placeholderTextColor="white"
          onChangeText={(val) => setcodeInput(val)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          // if (codeInput == route.params.code) {
          //   navigation.replace("LoyaltyCardScreen");
          // } else {
          //   Alert.alert("Invalid Code", "Invalid code");
          // }
          navigation.replace("LoyaltyCardScreen");
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23282A",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#CC5500",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#CC5500",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

export default CodeScreen;
