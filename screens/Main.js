import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from "react-native-animatable";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Section1Screen from './Section1Screen';
import Section2Screen from './Section2Screen';
import Section3Screen from './Section3Screen';

const Tab = createMaterialTopTabNavigator();

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        {/* Logo and app name */}
        {/* <Image source={require('../assets/picture4-2.png')} style={styles.logo} /> */}
        <Animatable.Image
          style={styles.logo}
          source={require("../assets/Logo2.png")}
          resizeMode="contain"
          animation="rotate"
          iterationCount="infinite"
          easing="linear"
          duration={3000}
        />
        <Text style={styles.appName}>LEARNLANCE</Text>
      </View>
    );
  }

  // Once loading is done, render the main content
  return (
      <Tab.Navigator screenOptions={{
        swipeEnabled: true,
      }}>
        <Tab.Screen name="Section1Screen" component={Section1Screen} options={{
          title: 'COURSE HUB',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
        }} />
        <Tab.Screen name="Section2Screen" component={Section2Screen} options={{
          title: 'TALENT MATCH',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
        }} />
        <Tab.Screen name="Section3Screen" component={Section3Screen} options={{
          title: 'LIVE CONNECT',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
        }} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  logo: {
    width: 100,
    height: 100,
  },
  appName: {
    fontSize: 50,
    marginTop: 10,
    color: "black"
  },
});

export default Main;