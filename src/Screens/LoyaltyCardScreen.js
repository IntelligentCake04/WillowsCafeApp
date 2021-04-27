import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

const LoyaltyCardScreen = () => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  loyaltytext: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: "#212322",
  },
  item: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 3,
    padding: 30,
    backgroundColor: "#CC5500",
    fontSize: 20,
  },
});

export default LoyaltyCardScreen;
