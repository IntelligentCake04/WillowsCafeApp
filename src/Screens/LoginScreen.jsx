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
import validator from 'validator';

const HomeScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          keyboardType="phone-pad"
          style={styles.inputText}
          placeholder="Phone Number..."
          placeholderTextColor="white"
          onChangeText={(val) => {
            setPhoneNumber(val);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (validator.isMobilePhone(phoneNumber)) {
            fetch('https://wch.jnet-it.com/login', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                phoneNumber,
              })
            }).then(res => {
              if (res.status === 201) {
                navigation.replace('CodeScreen', { phoneNumber });
              } else {
                Alert.alert(
                  'Something went wrong',
                  'Something went wrong, check the phone number and try again',
                  [ { text: 'OK' } ],
                );
              }
            }).catch(error => {
                Alert.alert(
                  'Something went wrong',
                  'Check your internet connection and try again',
                  [ { text: 'OK' } ],
                );
                throw error;
            });
          } else {
            Alert.alert(
              'Invalid Phone Number',
              'Your phone number is not valid, please try again',
              [ { text: 'OK' } ],
          );
          }
        }}
      >
        <Text style={styles.loginText}>SUBMIT</Text>
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

export default HomeScreen;
