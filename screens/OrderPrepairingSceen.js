import { View, Text, TextInput, ScrollView, TouchableOpacity ,Image} from 'react-native'
import React, { useEffect } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { featured } from '../constants/index.js';
import FeaturedRow from '../components/featureRow.js';
import { useNavigation } from '@react-navigation/native';

export default function OrderPrepairing() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        }, 3000)
    })
  return (
    <View className="flex-1 bg-white justify-center items-center">
        <Image source={require('../image/wait.png')}  className="h-25 w-25"/>
    </View>
  )
}