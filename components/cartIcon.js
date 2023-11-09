import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";


export default function CartIcon({item}) {
const navigation = useNavigation();

  return (
    // ปุ่มส้มซื้อของ
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity 
        className="bg-yellow-500 flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
        onPress={()=> navigation.navigate('Cart')}
        >
            
            <Icon.ShoppingCart strokeWidth={2} height={22} width={22} stroke={'white'} className="p-3 px-5"/>
            
            <Text className="flex-1 text-center font-extrabold text-white text-lg">
                {45} ฿
            </Text>

            <View className="p-2 px-4 rounded-full " 
                style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
                <Text className="font-extrabold text-white text-lg">
                    1
                </Text>
            </View>

        </TouchableOpacity>
    </View>
  )
}