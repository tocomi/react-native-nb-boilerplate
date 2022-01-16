import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { RootNavigator } from './screens'
import { useServices } from './services'
import {
  getNavigationTheme,
  getThemeStatusBarBGColor,
  getThemeStatusBarStyle,
} from './utils/designSystem'

export const AppNavigator = (): JSX.Element => {
  useColorScheme()
  const { nav } = useServices()

  return (
    <>
      <StatusBar
        barStyle={getThemeStatusBarStyle()}
        backgroundColor={getThemeStatusBarBGColor()}
      />
      <NavigationContainer
        ref={nav.n}
        onReady={nav.onReady}
        onStateChange={nav.onStateChange}
        theme={getNavigationTheme()}
      >
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}
