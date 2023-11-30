import {
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
  Alert,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationActions} from 'react-navigation';

export default function DashboardScreen() {
  const navigation = useNavigation();
  const data = [
    {
      taskTitle: 'one',
      taskDesc: 'my description1',
      status: 'Pending',
    },
    {
      taskTitle: 'one',
      taskDesc: 'my description2',
      status: 'Cancelled',
    },
    {
      taskTitle: 'three',
      taskDesc: 'my description3',
      status: 'Pending',
    },
    {
      taskTitle: 'four',
      taskDesc: 'my description 4',
      status: 'Pending',
    },
  ];

  const taskRenderDesign = ({item}) => {
    console.log(item.taskTitle);
    return (
      <View
        style={{
          height: 120,

          borderColor: 'grey',
          backgroundColor: 'white',
          marginTop: 15,
          marginHorizontal: 10,
          borderRadius: 10,

          paddingVertical: 15,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '700',
            marginHorizontal: 15,
          }}>
          {item.taskTitle}{' '}
        </Text>

        <View
          style={{
            height: 0.3,
            backgroundColor: 'grey',
            marginVertical: 6,
            marginHorizontal: 8,
          }}
        />

        <Text
          style={{
            color: 'darkgrey',
            fontSize: 14,
            fontWeight: '500',
            marginHorizontal: 15,
          }}>
          {item.taskDesc}{' '}
        </Text>
      </View>
    );
  };

  const logoutFun = async () => {
    AsyncStorage.clear();
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Splash',
          },
        ],
      });
    }, 1500);
  };

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <StatusBar backgroundColor={'black'} />
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          flexDirection: 'row',
          height: 62,
          backgroundColor: '#2251eb',
        }}>
        <Image
          source={require('../src/assets/dummy_logo.png')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 70,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            alignSelf: 'center',
            marginLeft: 15,
          }}>
          UserName
        </Text>

        <Pressable
          onPress={() => {}}
          style={{
            position: 'absolute',
            right: 55,
            top: 15,
            alignSelf: 'center',
          }}>
          <Image
            source={require('../src/assets/bell.png')}
            style={{
              width: 25,
              height: 25,
            }}
            tintColor={'white'}
          />
        </Pressable>

        <Pressable
          onPress={() =>
            Alert.alert('Logout!', 'Are you sure you went to Logout?', [
              {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Yes', onPress: () => logoutFun()},
            ])
          }
          style={{
            position: 'absolute',
            right: 15,
            top: 15,
            alignSelf: 'center',
          }}>
          <Image
            source={require('../src/assets/logout.png')}
            style={{
              width: 25,
              height: 25,

              alignSelf: 'center',
            }}
            tintColor={'white'}
          />
        </Pressable>
      </View>

      <View style={{flexDirection: 'column'}}>
        <FlatList
          style={{height: '100%'}}
          data={data}
          renderItem={item => taskRenderDesign(item)}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate('AddTask')}
        style={{
          width: 70,
          height: 70,
          position: 'absolute',
          right: 25,
          bottom: 25,
          backgroundColor: '#2251eb',
          borderRadius: 140,
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 40, height: 40, alignSelf: 'center'}}
          source={require('../src/assets/plus.png')}
          tintColor={'white'}
        />
      </Pressable>
    </View>
  );
}
