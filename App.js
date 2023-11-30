import * as React from 'react';
import {View, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/DashboardScreen';
import SplashScreen from './src/SplashScreen';
import LoginScreen from './src/LoginScreen';
import AddTaskScreen from './src/AddTaskScreen';
// LogBox.ignoreAllLogs();
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  offlineAccess: true,
  webClientId:
    '634084555650-bbi6qdvl728bsiig2c5kgemn9b4ag2bl.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="Home" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
