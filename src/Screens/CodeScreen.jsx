import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CodeScreen = ({ route, navigation }) => {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          keyboardType="phone-pad"
          placeholder="Code..."
          placeholderTextColor="white"
          onChangeText={(val) => setCode(String(val))}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          const { phoneNumber } = route.params;
          fetch('https://wch.jnet-it.com/verify',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                phoneNumber,
                code,
              }),
          })
          .then(res => {
            if (res.status === 200) {
              return res.json();
            } else {
              Alert.alert(
                'Failed to validate code',
                'Please check your code and try again',
                [ { text: 'OK' } ]
              );
              return res.json();
            }
          })
          .then((data) => {
            if (data.token) {
              console.log(data);
              console.log(`Token: ${data.token}`);
              AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))
              AsyncStorage.setItem('token', JSON.stringify(data.token));
              AsyncStorage.setItem('isAdmin', JSON.stringify(data.isAdmin))
              AsyncStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));
              if (data.isAdmin) {
                navigation.replace('QRScannerScreen')
              } else {
                navigation.replace('LoyaltyCardScreen');
              }
            }
          })
          .catch(error => {
            console.error(error);
            Alert.alert(
              'Something went wrong',
              'Please check your connection and try again',
              [ { text: 'OK' } ]
            );
          })
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23282A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#CC5500',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#CC5500',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default CodeScreen;
