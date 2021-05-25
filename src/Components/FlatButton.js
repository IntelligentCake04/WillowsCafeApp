import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#ffff",
    margin: 5,
    borderRadius: 15,
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#CC5500",
  },
  buttonText: {
    color: "#ffffdd",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    alignItems: "center",
  },
});
