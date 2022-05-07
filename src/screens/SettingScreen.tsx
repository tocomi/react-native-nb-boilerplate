import { Center, KeyboardAvoidingView, Text, useTheme } from 'native-base'
import React from 'react'
import { Platform } from 'react-native'

export const SettingScreen = () => {
  const { colors } = useTheme()

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Center
        _dark={{ bg: colors.blueGray['900'] }}
        _light={{ bg: colors.blueGray['50'] }}
        px={8}
        flex={1}
      >
        <Text>Setting Screen</Text>
      </Center>
    </KeyboardAvoidingView>
  )
}
