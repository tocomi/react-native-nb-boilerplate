import { atom } from 'recoil'
import { Achievement } from '../types'

export const achievementState = atom<Achievement[]>({
  key: 'achievementState',
  default: [
    {
      date: new Date('2022-01-01'),
      result: 123,
    },
    {
      date: new Date('2022-01-02'),
      result: 456,
    },
  ],
})
