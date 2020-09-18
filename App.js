import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Education from './Education';
import testImage from './img/landscape-lowres.jpg';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerType="front" edgeWidth={100} minSwipeDistance drawerStyle={styles.drawer}
      drawerContentOptions={{
        activeTintColor: 'black',
        activeBackgroundColor: '#fbdbc6',
        inactiveTintColor: 'black',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Hey There!',
            headerStyle: {
              backgroundColor: '#f7ae80',
              opacity: 1,
            },
            drawerIcon: ({ focused, size }) => (<Image source={testImage} style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]}/>),
            headerTintColor: 'black',
            headerTitleStyle: {
              // fontSize: 28
              alignSelf: 'center'
            }
          }}
        />
        <Drawer.Screen
          name="Education"
          component={Education}
          options={{
            headerStyle: {
              backgroundColor: '#f7ae80',
              opacity: 1,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              alignSelf: 'center'
            }
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;


const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#f7ae80',
    // width: 240,
    flex: 1,
    padding: 1,
  },
});
