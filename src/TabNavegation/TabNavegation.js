import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Para los íconos de la barra de navegación
import { HomeScreen } from "../HomeSetting/HomeScreen";
import { SettingScreen } from "../HomeSetting/SettingScreen";

export function TabNavegation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions= {{headerShown: false}}>
            <Tab.Screen name="Publicaciones" component={HomeScreen}/>
            <Tab.Screen name="Ajustes" component={SettingScreen}/>
        </Tab.Navigator>    
    )
}