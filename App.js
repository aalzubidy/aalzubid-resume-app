import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Education from './Education';
import Experience from './Experience';
import Publications from './Publications';
import Social from './Social';
import hiImg from './img/hi.png';
import educationImg from './img/education.png';
import experienceImg from './img/projects.png';
import publicationsImg from './img/publication.png';
import socialImg from './img/socialMediaCircle.png';

// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="front"
        edgeWidth={100}
        minSwipeDistance
        drawerStyle={styles.drawer}
        drawerContentOptions={{
          activeTintColor: 'black',
          activeBackgroundColor: '#fbdbc6',
          inactiveTintColor: 'black',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Hey There!',
            headerStyle: styles.screen,
            drawerIcon: ({ focused, size }) => (<Image source={hiImg} style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]} />),
            headerTintColor: 'black',
            headerTitleStyle: styles.screenTitle
          }}
        />
        <Drawer.Screen
          name="Education"
          component={Education}
          options={{
            title: 'Education',
            headerStyle: styles.screen,
            drawerIcon: ({ focused, size }) => (<Image source={educationImg} style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]} />),
            headerTintColor: 'black',
            headerTitleStyle: styles.screenTitle
          }}
        />
        <Drawer.Screen
          name="Experience"
          component={Experience}
          options={{
            title: 'Experience',
            headerStyle: styles.screen,
            drawerIcon: ({ focused, size }) => (<Image source={experienceImg} style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]} />),
            headerTintColor: 'black',
            headerTitleStyle: styles.screenTitle
          }}
        />
        <Drawer.Screen
          name="Publications"
          component={Publications}
          options={{
            title: 'Publications',
            headerStyle: styles.screen,
            drawerIcon: ({ focused, size }) => (<Image source={publicationsImg} style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]} />),
            headerTintColor: 'black',
            headerTitleStyle: styles.screenTitle
          }}
        />
        <Drawer.Screen
          name="Social"
          component={Social}
          options={{
            title: 'Let\'s Connect!',
            headerStyle: styles.screen,
            drawerIcon: ({ focused, size }) => (<Image source={socialImg} style={[focused ? styles.drawerActive : styles.drawerInActive, { height: size, width: size }]} />),
            headerTintColor: 'black',
            headerTitleStyle: styles.screenTitle
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
    flex: 1,
    padding: 1
    // width: 240
  },
  screen: {
    backgroundColor: '#f7ae80',
    opacity: 1
  },
  screenTitle: {
    alignSelf: 'center'
    // fontSize: 28
  }
});
