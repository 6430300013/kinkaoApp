import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../style';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { StatusBar } from 'expo-status-bar';

export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();

  let item = params;
// console.log {`'Restaurant: '` ,item}
  return (
    <View>
        <CartIcon />
        {/* <StatusBar  style='light'/> */}
        <ScrollView>
          <View className="relative">
            <Image className="w-full h-60" source={item.image}/>
            <TouchableOpacity
              onPress={()=> navigation.goBack()}
              className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
             </TouchableOpacity>

          </View>
          <View
            style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            className="bg-white -mt-12 pt-6 shadow"
          >
            <View className="px-5">
              <Text className="text-3xl font-bold">{item.name }</Text>
              <View className="flex-row items-center space-x-1">
                
                <View className="flex-row items-center space-x-1">
                  <Icon.MapPin color="darkorange" height="15" width="15" />
                  <Text className="text-gray-700 ">{item.address}</Text>
                </View>
              
              </View>
              
            </View>
          </View>
          <View className="pb-36 bg-white">
            <Text className="px-4 py-5 text-2xl font-bold">Menu</Text>

            { 
              item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index}/>)
            }
          </View>
        </ScrollView>
    </View>
  )
}