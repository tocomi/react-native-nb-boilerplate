import { ComponentProps, useCallback, useState } from 'react'
import { DatePicker } from '../components'
import { useVisibility } from './useVisibility'

export const useDatePicker = () => {
  const [date, setDate] = useState(new Date())
  const [isOpenDatePicker, openDatePicker] = useVisibility(false)

  const handleChangeDate: ComponentProps<
    typeof DatePicker
  >['handleChangeDate'] = useCallback((_event, date) => {
    if (date) {
      setDate(date)
    }
  }, [])

  return { date, isOpenDatePicker, openDatePicker, handleChangeDate }
}
