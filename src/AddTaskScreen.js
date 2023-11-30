import {View, Text, TextInput, StatusBar, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';

export default function AddTaskScreen() {
  const navigation = useNavigation();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, seTasDescription] = useState('');

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'black'} />

      <Text
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: '700',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        Add Your Task
      </Text>
      <TextInput
        value={taskName}
        onChangeText={text => {
          setTaskName(text);
        }}
        numberOfLines={1}
        placeholder="Enter Your Title"
        placeholderTextColor={'#000'}
        style={{
          height: 45,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginTop: 20,
          borderWidth: 0.2,
          borderColor: 'grey',
          borderRadius: 5,
          color: 'black',
        }}
      />

      <TextInput
        value={taskDescription}
        onChangeText={text => {
          seTasDescription(text);
        }}
        multiline={true}
        placeholder="Enter Your Description"
        placeholderTextColor={'#000'}
        style={{
          minHeight: 120,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginTop: 20,
          borderWidth: 0.2,
          borderColor: 'grey',
          borderRadius: 5,
          color: 'black',
          textAlignVertical: 'top',
        }}
      />

      <Pressable
        style={{
          height: 50,
          backgroundColor: '#2251eb',
          marginHorizontal: 20,
          borderRadius: 30,
          marginTop: 50,
          justifyContent: 'center',
        }}
        onPress={() => {
          // navigation.navigate('Home');
          setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'Home',
                },
              ],
            });
          }, 1500);
        }}>
        <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>
          Submit
        </Text>
      </Pressable>
    </View>
  );
}
