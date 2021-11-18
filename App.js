import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calc from './pages/Calc';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#03071e'
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={Calc}
          options={{
            title: 'GPA Kaluu',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )

}