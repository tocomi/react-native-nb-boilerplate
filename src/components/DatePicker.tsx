import { MaterialIcons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button, Text, Icon, HStack } from 'native-base'
import React, { VFC, ComponentProps, useMemo } from 'react'
import { Platform } from 'react-native'
import { formatYYYYMMDD } from '../utils/date'

type DatePickerProps = {
  isShowDatePicker: boolean
  openDatePicker: () => void
  date: Date
  handleChangeDate: ComponentProps<typeof DateTimePicker>['onChange']
}

export const DatePicker: VFC<DatePickerProps> = ({
  isShowDatePicker,
  openDatePicker,
  date,
  handleChangeDate,
}) => {
  const isShow = useMemo(() => {
    return (
      Platform.OS === 'ios' || (Platform.OS === 'android' && isShowDatePicker)
    )
  }, [isShowDatePicker])
  return (
    <>
      {isShow && (
        <DateTimePicker
          value={date}
          onChange={handleChangeDate}
          maximumDate={new Date()}
          locale="ja-jp"
        />
      )}
      {Platform.OS === 'android' && (
        <HStack alignItems="center" justifyContent="flex-end" space={2}>
          <Text fontSize="xl">{formatYYYYMMDD(date)}</Text>
          <Button
            size="xs"
            onPress={openDatePicker}
            leftIcon={
              <Icon color="white" as={MaterialIcons} name="event" size="xs" />
            }
          />
        </HStack>
      )}
    </>
  )
}
