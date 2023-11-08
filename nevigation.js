import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairingSceen';
import DeliveryScreen from './screens/DeliveryScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
                <Stack.Screen name="OrderPrepairing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairing} />
                <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
