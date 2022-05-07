import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, extendTheme } from 'native-base'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { Main } from './src/app'

// Define the config
const config = {
  useSystemColorMode: false,
}

// extend the theme
const theme = extendTheme({ config })

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <RecoilRoot>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </RecoilRoot>
    </NativeBaseProvider>
  )
}
