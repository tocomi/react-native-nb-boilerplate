import { MaterialIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Icon, useTheme } from 'native-base'
import React from 'react'
import { HomeScreen, SettingScreen } from './screens'

const Tab = createMaterialBottomTabNavigator()

export const Main = () => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator initialRouteName="Home" shifting>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: colors.cyan[500],
          tabBarIcon: () => (
            <Icon as={MaterialIcons} name="home" size="md" color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: colors.lightBlue[600],
          tabBarIcon: () => (
            <Icon as={MaterialIcons} name="settings" size="md" color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
