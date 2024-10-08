import "@/styles/global.css"

import { View, StatusBar } from "react-native"

import { Slot } from "expo-router"

import { 
    useFonts, 
    Roboto_700Bold, 
    Roboto_500Medium, 
    Roboto_400Regular 
} from "@expo-google-fonts/roboto"

import { Loading } from "@/components/loading"


export default function Layout(){
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_500Medium,
        Roboto_400Regular,
    })

    if(!fontsLoaded){
        return <Loading/>
    }
    return (
    <View className="flex-1 bg-zinc-950">
        <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
        <Slot/>
    </View>
    )
}