/* eslint-disable react/no-unescaped-entities */
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import {
  Button,
  Card,
  Colors,
  Dialog,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib'
import { ScreenProps } from '.'

type Props = NativeStackScreenProps<ScreenProps, 'Example'>

const CardView: React.VFC = () => {
  return (
    <View padding-s4>
      <Card height={120}>
        <View padding-20 flex>
          <Text text70 grey10>
            You’re Invited!
          </Text>
          <Text text80 grey10>
            222 Join Old The Town Barbershop Official Store. Download the Wix
            app to...
          </Text>
          <Text text90 grey50>
            wix.to/A465c
          </Text>
        </View>
      </Card>
    </View>
  )
}

const DialogView: React.VFC = () => {
  const [opened, setOpened] = useState(false)
  const open = useCallback(() => {
    setOpened(true)
  }, [])
  const close = useCallback(() => {
    setOpened(false)
  }, [])
  return (
    <View marginT-16>
      <Dialog
        visible={opened}
        onDismiss={close}
        containerStyle={dialogStyles.container}
        useSafeArea
      >
        <ScrollView>
          <View centerH>
            <Text text40>Heaven</Text>
          </View>
          <View marginT-16>
            <Text text70R grey20>
              Can't get my mind out of those memories. Now time to tell them
              "don't take my dream". Still music keeps on turning me from the
              words that hurt my soul Removing doubts from my mind.
            </Text>
          </View>
          <View marginT-24 right>
            <TouchableOpacity onPress={close}>
              <Text text70 red40>
                close
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Dialog>
      <View centerH>
        <Button
          label="Open Dialog"
          backgroundColor={Colors.cyan10}
          onPress={open}
          enableShadow
        />
      </View>
    </View>
  )
}
const dialogStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
})

export const Example: React.FC<Props> = () => {
  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CardView />
        <DialogView />
      </ScrollView>
    </View>
  )
}
