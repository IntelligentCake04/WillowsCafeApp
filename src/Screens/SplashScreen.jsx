import React, { useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem('isAdmin')
      .then(data => JSON.parse(data))
      .then(admin => {
        if (admin) {
          navigation.replace('QRScannerScreen');
        } else {
          AsyncStorage.getItem('isLoggedIn')
            .then(loggedIn => {
              if (loggedIn) {
                navigation.replace('LoyaltyCardScreen');
              }
              else {
                navigation.replace('LoginScreen');
              }
            });
          }
    });
  }, []);

  return <View></View>;
};

export default SplashScreen;
