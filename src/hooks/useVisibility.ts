import { useCallback, useState } from 'react'

export const useVisibility = (
  initialState: boolean
): [boolean, () => void, () => void, () => void] => {
  const [isVisible, setIsVisible] = useState(initialState)
  const visible = useCallback(() => {
    setIsVisible(true)
  }, [])
  const invisible = useCallback(() => {
    setIsVisible(false)
  }, [])
  const toggle = useCallback(() => {
    setIsVisible(prev => !prev)
  }, [])
  return [isVisible, visible, invisible, toggle]
}
