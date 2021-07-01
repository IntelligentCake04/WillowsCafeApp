import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  AsyncStorage,
} from "react-native";

const SendVerification = async (phoneNumber, code) => {
  try {
    let response = await fetch("google.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        code: code,
      }),
    });
    let json = await response.json();
    console.log("Response " + json);
    return json.code;
  } catch (error) {
    console.error(error);
    return 400;
  }
};

const CodeScreen = ({ route, navigation }) => {
  const [codeInput, SetCodeInput] = useState("");
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
          onChangeText={(val) => SetCodeInput(val)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          const { phoneNumber } = route.params;
          if (SendVerification(phoneNumber, codeInput) == 200) {
            navigation.replace("LoyaltyCardScreen");
            AsyncStorage.setItem("isLoggedIn", true);
          } else {
            Alert.alert(
              "Invalid Phone Number",
              "Your phone number is not valid, please try again",
              [
                {
                  text: "OK",
                },
              ]
            );
          }
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
