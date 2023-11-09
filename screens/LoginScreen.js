import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { featured } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();
    return (

        <SafeAreaView className="flex-1 ">
            <View className="item-center justify-center absolute px-4 pb-4 w-full h-full space-x-2 space-y-2 bg-white">
                <View className="flex-2 bg-white justify-center items-center">
                    <Image source={require('../image/wait.png')} className=" h-28 w-28 p-3" />
                </View>
                <View className="flex-row flex-2 item-center p-1 rounded-md bg-yellow-200">
                    <Icon.Mail height="30" width="22" stroke="darkorange" className="pl-1.5" />
                    <TextInput placeholder='Enter email' className="flex-1 ml-2 " />
                </View>
                <View className="flex-row flex-2 item-center p-1 rounded-md bg-yellow-200">
                    <Icon.Key height="30" width="22" stroke="darkorange" className="pl-1.5" />
                    <TextInput placeholder='Enter password' className="flex-1 ml-2 " />
                </View>
                <TouchableOpacity className="bg-orange-400 p-3 rounded-full"
                    onPress={()=>navigation.navigate('Home')}
                 >
                    <Text className="text-white text-center font-bold text-lg">Log in</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="p-2 px-4 flex-row"
                    onPress={()=>navigation.navigate('Register')}
                 >
                    <Text className="text-black text-center font-light">Not have user?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}