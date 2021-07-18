import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminScreen = ({ route, navigation }) => {
  const [drinks, SetDrinks] = useState(0);
  const phone = route.params.qrData;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../images/orange_final_logo.png")}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          keyboardType={"phone-pad"}
          style={styles.inputText}
          placeholder="Enter number of drinks bought"
          placeholderTextColor="white"
          onChangeText={(val) => SetDrinks(parseInt(val))}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {


        AsyncStorage.getItem('token')
          .then(token => JSON.parse(token))
          .then((token) => {
            fetch(`https://wch.jnet-it.com/points?token=${token}`,
              {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  phoneNumber: phone,
                  points: drinks
                })
            })
          });
        }}
      >
        <Text style={styles.loginText}>Set Drinks</Text>
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

export default AdminScreen;
