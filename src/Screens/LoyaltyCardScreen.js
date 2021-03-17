import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";

const LoyaltyCardScreen = ({ navigation }) => {
  const [drink, setDrink] = useState([
    { name: "drink 1", id: "1" },
    { name: "drink 2", id: "2" },
    { name: "drink 3", id: "3" },
    { name: "drink 4", id: "4" },
    { name: "drink 5", id: "5" },
    { name: "drink 6", id: "6" },
    { name: "drink 7", id: "7" },
    { name: "drink 8", id: "8" },
    { name: "drink 9", id: "9" },
    { name: "drink 10", id: "10" },
    { name: "free drink", id: "11" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setDrink((prevDrink) => {
      return prevDrink.filter((drink) => drink.id != id);
    });
  };

  return (
    <View style={styles.loyaltytext}>
      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={drink}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
};

const styles = StyleSheet.create({
  loyaltytext: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    height: 80,
    width: 80,
    padding: 20,
    alignItems: "center",
    backgroundColor: "darkorange",
  },
});

export default LoyaltyCardScreen;
