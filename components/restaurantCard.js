import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../style';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={()=>navigation.navigate('Restaurant', {...item})}
    >
        <View 
          // style={{
          //   shadowColor: themeColors.bgColor(0.2)
          // }}
          className="mr-6 bg-white rounded-3xl shadow-lg pt-1">
            <Image className="h-36 w-64 rounded-t-3xl " source={item.image}/>
            <View className="px-3 pb-4 space-y-2">
              <Text className="text-lg font-bold pt-1">{item.name}</Text>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="darkorange" height="15" width="15"/>
                <Text className="text-gray-500 font-light ">{item.address}</Text>
              </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}