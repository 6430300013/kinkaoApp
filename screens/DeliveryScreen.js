import { View, Text, TextInput, ScrollView, TouchableOpacity ,Image} from 'react-native'
import React, { useEffect } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { featured } from '../constants/index.js';
import FeaturedRow from '../components/featureRow.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation();
    const origin = {latitude: 13.71835, longitude: 100.62124};
    const destination = {latitude: 13.07913, longitude: 101.93422};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBQPDdg96BpVWwHmkiTIr3LpjLu4CshNgQ';


    return(
    <View className="flex-1">
        
        <TouchableOpacity
            onPress={()=> navigation.goBack()}
            className="absolute z-10 rounded-full p-1 top-5 left-2 w-5 h-5">
                <Icon.ArrowLeft strokeWidth={3} stroke={'orange'}/>
        </TouchableOpacity>
        <MapView 
            style={{flex:1}}
            provider = {PROVIDER_GOOGLE}
            initialRegion={{
                latitude:13.081736,
                longitude:100.967467,
                latitudeDelta: 1.5,
                longitudeDelta: 1.5,
            }} 
            >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="hotpink"
            />
            <Marker
                coordinate={{latitude:origin.latitude,longitude:origin.longitude}}
            >
            </Marker>
        </MapView><ScrollView>
        
          <View
            style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            className="bg-white -mt-12 pt-6 shadow"
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
          </View>
        </ScrollView>
            
    </View>
  )
}