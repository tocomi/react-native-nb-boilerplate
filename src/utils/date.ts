import { format } from 'date-fns'

export const formatDD = (date: Date) => {
  return format(date, 'dd')
}

export const formatYYYYMM = (date: Date) => {
  return format(date, 'yyyy/MM')
}

export const formatYYYYMMDD = (date: Date) => {
  return format(date, 'yyyy/MM/dd')
}

export const formatYYYYMMDDWithDayOfWeek = (date: Date) => {
  return format(date, 'yyyy/MM/dd (EEE)')
}
