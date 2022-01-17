/* eslint-disable react/no-unescaped-entities */
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import {
  ActionSheet,
  Button,
  Card,
  Colors,
  Dialog,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib'
import { ScreenProps } from '.'
import { useVisibility } from '../hooks'

type Props = NativeStackScreenProps<ScreenProps, 'Example'>

const CardView: React.VFC = () => {
  return (
    <View padding-s4>
      <Card height={120}>
        <View padding-20 flex>
          <Text text60R grey10>
            You’re Invited!
          </Text>
          <View marginT-4>
            <Text text80 grey10>
              222 Join Old The Town Barbershop Official Store. Download the Wix
              app to...
            </Text>
          </View>
          <View marginT-4 right>
            <Text text80BO grey50>
              2022/01/12
            </Text>
          </View>
        </View>
      </Card>
    </View>
  )
}

const DialogView: React.VFC = () => {
  const [visible, open, close] = useVisibility(false)
  return (
    <View marginT-16>
      <Dialog
        visible={visible}
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

const ActionSheetView: React.VFC = () => {
  const [visible, open, close] = useVisibility(false)
  const [selected, setSelected] = useState('')
  const select = useCallback((selected: string) => {
    setSelected(selected)
  }, [])
  return (
    <View marginT-16>
      <ActionSheet
        visible={visible}
        onDismiss={close}
        title="First Pokemon"
        message="Choose your first partner."
        cancelButtonIndex={3}
        useNativeIOS
        options={[
          { label: 'ヒトカゲ', onPress: () => select('ヒトカゲ') },
          { label: 'ゼニガメ', onPress: () => select('ゼニガメ') },
          { label: 'フシギダネ', onPress: () => select('フシギダネ') },
          { label: 'cancel', onPress: () => select('') },
        ]}
      />
      <View centerH>
        <Button
          label="Open Action Sheet"
          backgroundColor={Colors.blue10}
          onPress={open}
        />
        <Text>{selected}</Text>
      </View>
    </View>
  )
}

export const Example: React.FC<Props> = () => {
  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CardView />
        <DialogView />
        <ActionSheetView />
      </ScrollView>
    </View>
  )
}
