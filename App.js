import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './nevigation';
import HomeScreen from './screens/HomeScreen';
import { LogIn } from 'react-native-feather';
import LoginScreen from './screens/LoginScreen'
import { Provider } from 'react-redux'
import { store } from './store';

export default function App() {
  return (
    
      <Navigation/>
  )
}   
 // <Provider store={store}>
{/* </Provider> */}