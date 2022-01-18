import 'expo-dev-client'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback, useEffect, useState } from 'react'
import { LogBox } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RecoilRoot } from 'recoil'
import { AppNavigator } from './src/app'
import { initServices } from './src/services'
import { hydrateStores, StoresProvider } from './src/stores'
import { configureDesignSystem } from './src/utils/designSystem'

LogBox.ignoreLogs(['Require'])

export default (): JSX.Element => {
  const [ready, setReady] = useState(false)

  const startApp = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync()

    await hydrateStores()
    await initServices()
    configureDesignSystem()

    setReady(true)
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    startApp()
  }, [startApp])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RecoilRoot>
        <StoresProvider>{ready ? <AppNavigator /> : null}</StoresProvider>
      </RecoilRoot>
    </GestureHandlerRootView>
  )
}
