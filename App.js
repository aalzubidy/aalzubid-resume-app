import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hi There!"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#f7ae80',
              opacity: 1,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              // fontSize: 28
              alignSelf: 'center'
            }
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
