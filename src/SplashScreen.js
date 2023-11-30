import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationActions} from 'react-navigation';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    MoveFun();
  }, []);

  const MoveFun = async () => {
    const value = await AsyncStorage.getItem('email');
    console.log('value on splash - ', value);
    if (value !== null) {
      // value previously stored
      setTimeout(() => {
        navigation.dispatch(StackActions.replace('Home'));
      }, 1500);
    } else {
      setTimeout(() => {
        //   navigation.navigate('Login');
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            },
          ],
        });
      }, 1500);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <Image
        style={{width: 120, height: 120}}
        source={require('../src/assets/dummy_logo.png')}
      />
    </View>
  );
}
