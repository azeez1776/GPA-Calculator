import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Calc5 from './pages/Calc5';
import Calc4 from './pages/Calc4';
import Detail from './pages/Detail';
import About from './pages/About';
import Contacts from './pages/Contacts';


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
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          name='Kaluu'
          component={Calc5}
          options={{
            title: 'Kaluu.',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name='Kaluu'
          component={Calc4}
          options={{
            title: 'Kaluu.',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name='Home'
          component={Detail}
          options={{
            title: 'Kaluu.',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name='About'
          component={About}
          options={{
            title: 'About',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
          name='Contacts'
          component={Contacts}
          options={{
            title: 'Contacts',
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