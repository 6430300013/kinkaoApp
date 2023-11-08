import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { featured } from '../constants';
import OrderPrepairing from './OrderPrepairingSceen';


export default function CartScreen({item}) {
const restaurant = featured.restaurants[0];
const navigation = useNavigation(); 
  return (
    <View className="bg-white flex-1">
        
        <View className="relative py-4 shadow-sm">
            <TouchableOpacity
                onPress={()=> navigation.goBack()}
                className="absolute z-10 rounded-full p-1 top-5 left-2 w-5 h-5">
                    <Icon.ArrowLeft strokeWidth={3} stroke={'orange'}/>
            </TouchableOpacity>
            
            <View >
                <Text className="text-center font-bold text-xl">My Cart</Text>
                <Text className="text-center text-gray-500">{restaurant.name}</Text>
            </View>

        </View>
        
        <View className=" bg-yellow-200 flex-row  items-center h-20 space-x-3">
            <Icon.MapPin strokeWidth={3} stroke={'orange'} className="h-20 w-20 left-5"/>
            <Text className="font-1 pl-5"> Deliver in 15-30 minutes </Text>
            
            <TouchableOpacity>
                <Text className="font-bold pl-20">Charge</Text>
            </TouchableOpacity>
        </View>
        
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 50
            }}
            className="bg-white pt-5"
        >
        {    restaurant.dishes.map((dish, index)=>{
                return(
                    <View key={index}
                        className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                            <Text className="font-bold ">
                                1 x
                            </Text>
                            <Image className="h-14 w-14 rounded-md" source={dish.image}/>
                            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                            <Text className="font-semibold text-base">{dish.price} ฿</Text>
                            <TouchableOpacity
                                className="p-1 rounded-full bg-orange-400"
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white"/>
                            </TouchableOpacity>
                    </View>
                )
            })
        }
        </ScrollView>

        <View className="p-6 px-8 rounded-t-3xl space-y-4 bg-yellow-200">
            <View className="flex-row justify-between">
                <Text className="font-extrabold">Order total</Text>
                <Text className="font-extrabold">10 ฿</Text>
            </View>
            <View>
            <TouchableOpacity className="bg-orange-400 p-3 rounded-full"
                onPress={()=>navigation.navigate('OrderPrepairing')}
            >
                    <Text className="text-white text-center font-bold text-lg">Order NOW</Text>
            </TouchableOpacity>
        </View>
        </View>
        

    </View>
  )
}