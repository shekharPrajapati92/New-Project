import {View, Text, Button, Alert} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import onGoogleButtonPress from './component/onGoogleButtonPress';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const navigation = useNavigation();

  const onPress = async () => {
    // await AsyncStorage.setItem('email', 'shekhar@gmail.com');
    // await AsyncStorage.setItem('name', 'shekhar');
    // setTimeout(() => {
    //   navigation.navigate('Home');
    // }, 1500);

    try {
      GoogleSignin.configure({
        //webClientId is required if you need offline access
        offlineAccess: false,
        webClientId:
          '634084555650-opag9g6gr08rn49sop2anvvmn8rtij4h.apps.googleusercontent.com',

        scopes: ['profile', 'email'],
      });
      await GoogleSignin.hasPlayServices();
      console.log('reached google sign in');

      await AsyncStorage.setItem('email', 'shekhar@gmail.com');
      await AsyncStorage.setItem('name', 'shekhar');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1500);
      //   const userInfo = await GoogleSignin.signIn();
      //   console.log('userInfo - ', userInfo);
    } catch (error) {
      console.log('error code - ', error.code);

      //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   console.log('error occured SIGN_IN_CANCELLED');
      //     // user cancelled the login flow
      //   } else if (error.code === statusCodes.IN_PROGRESS) {
      //     console.log('error occured IN_PROGRESS');
      //     // operation (f.e. sign in) is in progress already
      //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //     console.log('error occured PLAY_SERVICES_NOT_AVAILABLE');
      //   } else {
      //     console.log(error);
      //     console.log('error occured unknow error');
      //   }
    }
  };

  return (
    <View style={{marginHorizontal: 20, justifyContent: 'center', flex: 1}}>
      <Button title="Google Sign-In" onPress={() => onPress()} />
    </View>
  );
}
