import { format } from 'date-fns'

export const formatYYYYMMDD = (date: Date) => {
  return format(date, 'yyyy/MM/dd')
}

export const formatYYYYMMDDWithDayOfWeek = (date: Date) => {
  return format(date, 'yyyy/MM/dd (EEE)')
}
