import React, { useState } from "react";
import QRScreen from "../Screens/QRScreen";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function LoyaltyCardScreen({ navigation }) {
  const [drink, setDrink] = useState([
    { name: "  1  ", id: "1" },
    { name: "  2  ", id: "2" },
    { name: "  3  ", id: "3" },
    { name: "  4  ", id: "4" },
    { name: "  5  ", id: "5" },
    { name: "  6  ", id: "6" },
    { name: "  7  ", id: "7" },
    { name: "  8  ", id: "8" },
    { name: "  9  ", id: "9" },
    { name: " 10 ", id: "10" },
    { name: "free", id: "11" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setDrink((prevDrink) => {
      return prevDrink.filter((drink) => drink.id != id);
    });
  };

  return (
    <View style={styles.loyaltytext}>
      <View style={styles.SquareShapeView2}>
        <QRScreen />
      </View>

      <View style={styles.textsquareview}>
        <Text style={styles.text}>Willows Loyalty Card</Text>
      </View>

      <View style={styles.SquareShapeView}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  loyaltytext: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 30,
    backgroundColor: "#292929",
  },
  textsquareview: {
    width: 205,
    height: 60,
    position: "absolute",
    backgroundColor: "#292929",
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 21,
    fontWeight: "700",
    color: "#A14F0B",
  },
  SquareShapeView2: {
    width: 120,
    height: 120,
    padding: 0,
    backgroundColor: "#5A5959",
    borderColor: "#3B3B3B",
    borderWidth: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  SquareShapeView: {
    width: 300,
    height: 380,
    backgroundColor: "#5A5959",
    borderColor: "#3B3B3B",
    borderWidth: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    marginHorizontal: 3,
    marginTop: 3,
    padding: 30,
    backgroundColor: "#C46113",
    fontSize: 16,
    fontWeight: "100",
    borderWidth: 3,
    borderColor: "#A14F0B",
    borderRadius: 10,
  },
  itemnew: {
    flex: 1,
    marginHorizontal: 3,
    marginTop: 3,
    padding: 30,
    backgroundColor: "#BB5D13",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#994C0B",
    borderRadius: 10,
  },
});
