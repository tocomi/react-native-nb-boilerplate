import { AntDesign } from '@expo/vector-icons'
import {
  Center,
  Fab,
  Icon,
  KeyboardAvoidingView,
  Text,
  useTheme,
} from 'native-base'
import React from 'react'
import { Platform } from 'react-native'
import { Bounceable } from 'rn-bounceable'
import { BaseModal } from '../components'
import { useBaseModal } from '../hooks/useBaseModal'

export const HomeScreen = () => {
  const { colors } = useTheme()
  const { isOpen, openModal, closeModal, onSubmit } = useBaseModal()

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
        <Text>Home Screen</Text>
      </Center>
      <BaseModal isOpen={isOpen} submit={onSubmit} closeModal={closeModal} />
      <Bounceable>
        <Fab
          size="sm"
          renderInPortal={false}
          shadow={4}
          bg={colors.lightBlue[600]}
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
          onPress={openModal}
        />
      </Bounceable>
    </KeyboardAvoidingView>
  )
}
