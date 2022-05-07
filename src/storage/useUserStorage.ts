import { useCallback, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { userState } from '../stores/user'
import { User } from '../types'
import { storage, STORAGE_KEY } from './storage'

export const useUserStorage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const setUser = useSetRecoilState(userState)
  useEffect(() => {
    storage
      .load<User>({
        key: STORAGE_KEY.USER,
      })
      .then(user => {
        setUser(user)
      })
      .catch(() => {
        // ストレージがない場合。特に何もしない。
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setUser])
  const setMyTargetStorage = useCallback((user: User) => {
    storage.save({
      key: STORAGE_KEY.USER,
      data: user,
    })
  }, [])

  return { isLoading, setMyTargetStorage }
}
