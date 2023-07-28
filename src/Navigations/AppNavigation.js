import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Storelive from "../Screens/Storelive";
import Showroomlist from "../Screens/Showroomlist";
import Home from "../Screens/Home/Home";
import Assetlist from "../Screens/Home/Assetlist";
import Storedetails from "../Screens/StoreDetails";
import Navigator from "./Navigator";
import Storereport from "../Screens/Storereport";
import StoreExterior from "../Screens/StoreExterior";
import StoreInterior from "../Screens/StoreInterior";
import Advertise from "../Screens/Advertise";

const Stack = createStackNavigator();

const Appnavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Assetlist" component={Assetlist} options={{headerShown: false}}/>
                <Stack.Screen name="Showroomlist" component={Showroomlist} options={{headerShown: false}}/>
                <Stack.Screen name="Storelive" component={Storelive} options={{headerShown: false}}/>
                <Stack.Screen name="Storedetails" component={Storedetails} options={{headerShown: false}}/>
                <Stack.Screen name="Storereport" component={Storereport} options={{headerShown: false}}/>
                <Stack.Screen name="StoreExterior" component={StoreExterior} options={{headerShown: false}}/>
                <Stack.Screen name="StoreInterior" component={StoreInterior} options={{headerShown: false}}/>
                <Stack.Screen name="Advertise" component={Advertise} options={{headerShown: false}}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Appnavigation;