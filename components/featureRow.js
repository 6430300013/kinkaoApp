import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './restaurantCard'

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View>
        <View className="flex-row justify-between items-center px-4">
            <View>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-xs">{description}</Text>
            </View>
            <TouchableOpacity>
                <Text>
                    See all
                </Text>
            </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            className="overflow-visible py-5"
        >
            {
                restaurants.map((restaurants, index)=>{
                    return(
                        <RestaurantCard
                            item={restaurants}
                            key={index}
                            
                        />
                    )
                })
            }
        </ScrollView>
    </View>
  )
}