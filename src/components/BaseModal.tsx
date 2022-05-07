import { MaterialIcons } from '@expo/vector-icons'
import { Button, HStack, Icon, Modal, Text } from 'native-base'
import React, { VFC } from 'react'

type BaseModalProps = {
  isOpen: boolean
  submit: () => void
  closeModal: () => void
}

export const BaseModal: VFC<BaseModalProps> = ({
  isOpen,
  submit,
  closeModal,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} size="lg">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>
          <Text>Header</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>Body</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group flex={1} justifyContent="space-between">
            <HStack>
              <Button
                onPress={submit}
                leftIcon={<Icon as={MaterialIcons} name="update" size={4} />}
              >
                submit
              </Button>
              <Button
                variant="ghost"
                colorScheme="coolGray"
                onPress={closeModal}
              >
                cancel
              </Button>
            </HStack>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
