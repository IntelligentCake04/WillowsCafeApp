import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

const ShowAlert = (navigation) => {
  Alert.alert(
    "Successfully Signed Up!",
    "Return to the login screen to begin using the app!",
    [
      {
        text: "Ok",
        onPress: () => ReturnToLoginScreen(navigation),
      },
    ],
    {
      cancelable: true,
      onDismiss: () => ReturnToLoginScreen(navigation),
    }
  );
};

const ReturnToLoginScreen = (navigation) => navigation.replace("LoginScreen");

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Signup</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="white"
          onChangeText={(val) => this.setState({ email: val })}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          ShowAlert(navigation);
        }}
      >
        <Text style={styles.loginText}>SIGNUP</Text>
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
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#CC5500",
    marginBottom: 40,
    marginHorizontal: 20,
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

export default SignupScreen;
