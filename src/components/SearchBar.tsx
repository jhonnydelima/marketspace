import { TouchableOpacity } from 'react-native';
import { Divider, HStack, useTheme } from 'native-base';
import { MagnifyingGlass, Sliders } from 'phosphor-react-native';

import { Input } from './Input';

export function SearchBar() {
  const { colors, sizes } = useTheme();

  return (
    <Input
      placeholder="Buscar anúncio"
      textTransform='uppercase'
      mb={2}
      InputRightElement={
        <HStack alignItems='center'>
          <TouchableOpacity
            style={{
              marginHorizontal: 12
            }}
            onPress={() => {}}
          >
            <MagnifyingGlass color={colors.gray[600]} size={sizes[5]} weight='bold' />
          </TouchableOpacity>

          <Divider
            orientation='vertical'
            height='5'
            bg='gray.400:alpha.50'
            thickness='1.5'
          />

          <TouchableOpacity
            style={{
              marginHorizontal: 12
            }}
            onPress={() => {}}
          >
            <Sliders color={colors.gray[600]} size={sizes[5]} weight='bold' />
          </TouchableOpacity>
        </HStack>
      }
    />
  );
}