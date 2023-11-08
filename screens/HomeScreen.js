import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { featured } from '../constants/index.js';
import FeaturedRow from '../components/featureRow.js';


export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
        
        {/* head */}
        <StatusBar barStyle='dark-content '/>
      
        <View className="flex-column item-center space-x-2 px-4 pb-4 bg-yellow-400">
          
          <View className=" flex-row item-center p-1 rounded-md">
            <TouchableOpacity className="p-3 flex-row">
              <Icon.MapPin height="25" width="25" color="darkorange"/>
              <Text className="flex-row  border border-gray-300 font-bold px-1" >หอใน</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-3 ">
              <Icon.Settings height="25" width="25" color="gray"/>
            </TouchableOpacity>
          </View>
          
          <View className="flex-row flex-2 item-center p-1 rounded-md bg-yellow-200">
              <TextInput placeholder='Search' className="flex-1 ml-2 "/>
              <Icon.Search height="22" width="22" stroke="darkorange" className="pl-1.5"/>
          </View>
        </View>

        {/* body */}
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStye={{
            paddingBottom: 20
          }}>
          
           <View className="mt-5 bottom-5 pt-1">
            {
              [featured, featured, featured].map((item, index)=>{
                return (
                  <FeaturedRow
                    key={index}
                    title={item.title}
                    restaurants={item.restaurants}
                    description={item.description}
                  />
                )
              })
            }
           </View>
          
        </ScrollView>

    </SafeAreaView>
  )
}