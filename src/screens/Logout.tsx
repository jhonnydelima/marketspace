import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AlertDialog, Button, Center } from 'native-base';
import { useCallback, useRef, useState } from 'react';

export function Logout() {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
  const navigation = useNavigation();
  
  function onClose() {
    setIsOpen(false);
    navigation.goBack();
  }

  useFocusEffect(
    useCallback(() => {
      setIsOpen(true);
    }, [])
  );

  return (
    <Center flex={1}>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />

          <AlertDialog.Header>Sair</AlertDialog.Header>

          <AlertDialog.Body>
            Deseja sair da aplicação?
          </AlertDialog.Body>

          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancelar
              </Button>

              <Button colorScheme="danger" onPress={onClose}>
                Sim
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}