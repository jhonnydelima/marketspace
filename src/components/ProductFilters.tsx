import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Actionsheet,
  Button as NativeBaseButton,
  HStack,
  Heading,
  Switch,
  VStack,
  useTheme
} from 'native-base';
import { X, XCircle } from 'phosphor-react-native';

import { Button } from './Button';
import { PaymentMethods } from './PaymentMethods';
import { ProductTag } from './ProductTag';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type ProductStatus = 'NEW' | 'USED';

export function ProductFilters({ isOpen, onClose }: Props) {
  const [productStatuses, setProductStatuses] = useState<ProductStatus[]>([]);
  const [acceptsExchange, setAcceptsExchange] = useState(false);
  const { colors, sizes } = useTheme();

  function handleUpdateProductStatuses(status: ProductStatus) {
    setProductStatuses(prevState => {
      if (prevState.includes(status)) {
        return prevState.filter(prevStatus => prevStatus !== status)
      }

      return [
        ...prevState,
        status
      ]
    });
  }

  function hasProductStatus(status: ProductStatus) {
    return productStatuses.includes(status);
  }

  function handleResetFilters() {
    setProductStatuses([]);
    setAcceptsExchange(false);
    // criar e limpar contexto com filtros
  }

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} >
      <Actionsheet.Content px={6}>
        <HStack w='full' my={6}>
          <Heading
            fontSize='lg'
            fontFamily='heading'
            color='gray.700'
            flex={1}
          >
            Filtrar anúncios
          </Heading>

          <TouchableOpacity onPress={onClose}>
            <X size={sizes[6]} color={colors.gray[400]} />
          </TouchableOpacity>
        </HStack>

        <VStack w='full'>
          <Heading fontSize='sm' fontFamily='heading' color='gray.600'>
            Condição
          </Heading>

          <HStack mt={3} mb={6}>
            <NativeBaseButton.Group mr={2}>
              <ProductTag
                isNew
                isSelectable
                onPress={() => handleUpdateProductStatuses('NEW')}
                position='unset'
                m={0}
                pl={4}
                pr={hasProductStatus('NEW') ? 2 : 4}
                py={1.5}
                rounded='2xl'
                bg={hasProductStatus('NEW') ? 'blue.500' : 'gray.300'}
                _text={{
                  fontSize: 'xs',
                  fontFamily: 'heading',
                  color: hasProductStatus('NEW') ? 'white' : 'gray.500'
                }}
                _pressed={{
                  bg: hasProductStatus('NEW') ? 'blue.500' : 'gray.300',
                  opacity: 100,
                }}
                rightIcon={
                  hasProductStatus('NEW') ? (
                    <XCircle size={sizes[4]} weight='fill' color={colors.gray[200]} />
                  ) : undefined
                }
              />

              <ProductTag
                isNew={false}
                isSelectable
                onPress={() => handleUpdateProductStatuses('USED')}
                position='unset'
                m={0}
                pl={4}
                pr={hasProductStatus('USED') ? 2 : 4}
                py={1.5}
                rounded='2xl'
                bg={hasProductStatus('USED') ? 'gray.600' : 'gray.300'}
                _text={{
                  fontSize: 'xs',
                  fontFamily: 'heading',
                  color: hasProductStatus('USED') ? 'white' : 'gray.500'
                }}
                _pressed={{
                  bg: hasProductStatus('USED') ? 'gray.600' : 'gray.300',
                  opacity: 100,
                }}
                rightIcon={
                  hasProductStatus('USED') ? (
                    <XCircle size={sizes[4]} weight='fill' color={colors.gray[200]} />
                  ) : undefined
                }
              />
            </NativeBaseButton.Group>
          </HStack>

          <Heading
            fontSize='sm'
            fontFamily='heading'
            color='gray.600'
            mb={3}
          >
            Aceita troca?
          </Heading>

          <Switch
            offTrackColor='gray.300'
            onTrackColor='blue.500'
            offThumbColor='gray.100'
            onThumbColor='gray.100'
            isChecked={acceptsExchange}
            onToggle={() => {
              setAcceptsExchange(prevState => !prevState)
            }}
            mb={6}
          />

          <Heading
            fontSize='sm'
            fontFamily='heading'
            color='gray.600'
            mb={3}
          >
            Meios de pagamento aceitos
          </Heading>

          <PaymentMethods />

          <HStack mt={16} justifyContent='space-between'>
            <Button
              title="Resetar filtros"
              variant='secondary'
              px={9}
              onPress={handleResetFilters}
            />

            <Button
              title="Aplicar filtros"
              variant='tertiary'
              px={9}
              onPress={() => {}}
            />
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
