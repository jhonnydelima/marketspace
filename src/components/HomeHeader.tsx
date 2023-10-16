import { HStack, Heading, Text, VStack, useTheme } from 'native-base';
import { Plus } from 'phosphor-react-native';

import { UserPhoto } from './UserPhoto';
import { Button } from './Button';

import DefaultUserPhoto from '@assets/defaultAvatar.png';
import { TouchableOpacity } from 'react-native';

const PHOTO_SIZE = 12;

export function HomeHeader() {
  const { sizes, colors } = useTheme();

  return (
    <HStack pt={5} alignItems='center' mb={8}>
      <TouchableOpacity
        style={{
          marginRight: 12
        }}
        onPress={() => {}}
      >
        <UserPhoto
          size={PHOTO_SIZE}
          source={DefaultUserPhoto}
          defaultSource={DefaultUserPhoto}
          alt="Minha imagem de perfil"
        />
      </TouchableOpacity>

      <VStack flex={1}>
        <Text fontSize='md' color='gray.700'>
          Boas vindas,
        </Text>

        <Heading fontSize='md' fontFamily='heading' color='gray.700'>
          Giovana!
        </Heading>
      </VStack>

      <Button
        title="Criar anúncio"
        variant='tertiary'
        leftIcon={
          <Plus size={sizes[4]} color={colors.gray[100]} weight='bold' />
        }
        onPress={() => {}}
      />
    </HStack>
  );
}