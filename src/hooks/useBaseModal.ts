import { useCallback } from 'react'
import { useVisibility } from './useVisibility'

export const useBaseModal = () => {
  const [isOpen, open, close] = useVisibility(false)

  const openModal = useCallback(() => {
    open()
  }, [open])

  const onSubmit = useCallback(() => {
    close()
  }, [close])

  const closeModal = useCallback(() => {
    close()
  }, [close])

  return { isOpen, openModal, closeModal, onSubmit }
}
