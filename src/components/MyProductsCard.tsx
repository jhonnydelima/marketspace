import { HStack, Heading, Text, VStack, useTheme } from 'native-base';
import { Tag, ArrowRight } from 'phosphor-react-native';

import { Button } from './Button';

export function MyProductsCard() {
  const { colors, sizes } = useTheme();

  return (
    <HStack
      bg='blue.500:alpha.10'
      alignItems='center'
      px={4}
      py={3}
      rounded='lg'
      mb={8}
    >
      <Tag size={sizes[5]} color={colors.blue[700]} weight='bold' />

      <VStack ml={4} flex={1}>
        <Heading fontSize='lg' fontFamily='heading' color='gray.600'>
          4
        </Heading>
        
        <Text fontSize='xs' color='gray.600'>
          anúncios ativos
        </Text>
      </VStack>

      <Button
        title="Meus anúncios"
        _text={{
          color: colors.blue[700],
          fontSize: 'sm',
          fontFamily: 'heading',
        }}
        variant='unstyled'
        rightIcon={
          <ArrowRight size={sizes[4]} color={colors.blue[700]} weight='bold' />
        }
        _pressed={{
          bg: undefined,
          _text: {
            color: 'blue.500'
          }
        }}
        onPress={() => {}}
      />
    </HStack>
  );
}