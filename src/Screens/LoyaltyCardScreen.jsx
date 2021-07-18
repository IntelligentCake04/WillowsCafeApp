import React, { useState, useEffect } from "react";
import QRScreen from "./QRScreen";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LoyaltyCardScreen({ navigation }) {
  const [points, setPoints] = useState(0);
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const interval = setInterval(() => {
      AsyncStorage.getItem('token')
        .then(token => JSON.parse(token))
        .then((token) => {
          fetch(`https://wch.jnet-it.com/points?token=${token}`,
            {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
          }).then(res => res.json())
          .then(data => setPoints(data.points))    
        });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <View style={styles.loyaltytext}>
      <View style={styles.SquareShapeView2}>
        <QRScreen />
      </View>
      <View style={styles.SquareShapeView}>
        <FlatList
          numColumns={3}
          keyExtractor={(item) => item}
          data={labels}
          renderItem={({ item }) => (
            <TouchableOpacity style={{align: "center"}}>
              <Text style={(points >= item) ? styles.item : styles.disabledItem}>{String(item)}</Text>
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
    paddingTop: 4,
    paddingHorizontal: 30,
    backgroundColor: "#292929",
  },
  text: {
    fontSize: 21,
    fontWeight: "700",
    color: "#A14F0B",
  },
  SquareShapeView2: {
    width: 175,
    height: 175,
    backgroundColor: "#5A5959",
    borderColor: "#3B3B3B",
    borderWidth: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
    textAlign: "center",
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
  disabledItem: {
    flex: 1,
    textAlign: "center",
    marginHorizontal: 3,
    marginTop: 3,
    padding: 30,
    backgroundColor: "#726e6a",
    fontSize: 16,
    fontWeight: "100",
    borderWidth: 3,
    borderColor: "#937b67",
    borderRadius: 10,
  },
});
