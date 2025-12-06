import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';

const TabsLayout = () => {
  const {colors} = useTheme();
  
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor:colors.primary,
      tabBarStyle:{backgroundColor:colors.surface,
        borderTopWidth:2,
        borderTopColor:'#3B4A5A'
      },
      headerStyle:{backgroundColor:'#1F2933'},
      headerTitleStyle:{color:'skyblue'},

    }}>
      <Tabs.Screen name="index" options={{title: "Todo", tabBarIcon:({color,size}) =>{
        return <Ionicons name='checkbox' size={size=size} color={color}/>
      }}} />

      <Tabs.Screen name="settings" options={{title: "Settings",tabBarIcon:({color,size})=>
      {return <Ionicons name='options' size={size=size} color={color}/>}}} />
    </Tabs>
  )
}

export default TabsLayout