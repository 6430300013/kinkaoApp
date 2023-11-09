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
    const cancel = ()=>{
        dispatch(emptyBasket());
        navigation.navigate('Home')
      }

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
        
          <View className="rounded-t-3xl  bg-white relative">
            <View className="flex-row justify-between px-5 pt-10">
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Waiting...
                    </Text>
                    <Text className="text-3xl font-extrabold text-gray-700 ">
                        15-30 Minutes
                    </Text>
                    <Text className="mt-2 font-semibold text-gray-700 py-3">
                        Your order its way
                    </Text>
                    
                </View>
                <Image className="h-24 w-24 rounded-full py-3" source={require('../image/wait.gif')} />
                
            </View>
            <View className="bg-yellow-400 flex-row justify-between items-center rounded-t-3xl  relative py-3">
                <View className="p-1 rounded-full bg-orange-400 left-3">
                <Image className="h-16 w-16 rounded-full " source={require('../image/Anno.jpg')} />
                </View>
                <View className="flex-1 ml-3">
                    <Text className="text-lg font-bold left-3">
                        Somchai B.
                    </Text>
                    <Text className="font-semibold left-3">
                        Your Rider
                    </Text>
                </View>
                <View className="flex-row items-center space-x-3 mr-3  rounded-full">
                    <TouchableOpacity className="bg-white p-2 rounded-full">
                        <Icon.MessageCircle stroke={'green'} strokeWidth={3}/>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white p-2 rounded-full" onPress={cancel}>
                        <Icon.XCircle stroke={'red'} strokeWidth={3}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
            
    </View>
  )
}