import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
};

export default HomeScreen;
