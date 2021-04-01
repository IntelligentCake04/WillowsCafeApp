import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginComponent = () => {
  const [username, setUsername] = useState("username123");
  const [password, setPassword] = useState("password123");

  return (
    <View style={styles.container}>
      <Text>Enter email:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g.email@domain.com"
        onChangeText={(val) => setUsername(val)}
      />

      {/* <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g.password123"
        onChangeText={(val) => setPassword(val)}
      /> */}

      <TouchableOpacity>
        <Text style={styles.login}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "orange",
    padding: 8,
    margin: 10,
    width: 200,
  },
  login: {
    borderWidth: 1,
    backgroundColor: "darkorange",
    padding: 8,
    margin: 10,
    width: 53,
  },
});

export default LoginComponent;
