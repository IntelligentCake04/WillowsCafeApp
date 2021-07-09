import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
} from "react-native";
import validator from "validator";

const SendPhoneNumber = (phoneNumber) => {
  // try {
  //   let response = await fetch("wch.jnet-it.com/login", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       phoneNumber: phoneNumber,
  //     }),
  //   });
  //   let res = await response.json();
  //   console.log("Response " + res);
  //   return res.code;
  // } catch (error) {
  //   console.error(error);
  //   return 200;
  // }
  console.log(phoneNumber);
  return 200;
};

const HomeScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../images/logo.png")} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          keyboardType={"phone-pad"}
          style={styles.inputText}
          placeholder="Phone Number..."
          placeholderTextColor="white"
          onChangeText={(val) => {
            setPhoneNumber(val);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (validator.isMobilePhone(phoneNumber)) {
            if (SendPhoneNumber(phoneNumber) == 200) {
              navigation.replace("CodeScreen", { phoneNumber: phoneNumber });
            } else {
              Alert.alert(
                "Something went wrong",
                "Something went wrong, please try again",
                [
                  {
                    text: "OK",
                  },
                ]
              );
            }
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
        <Text style={styles.loginText}>SUBMIT</Text>
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

export default HomeScreen;
