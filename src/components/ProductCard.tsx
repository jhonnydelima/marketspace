import { TouchableOpacity } from 'react-native';
import {
  AspectRatio,
  Box,
  HStack,
  Heading,
  Image,
  VStack,
} from 'native-base';

import { CardTag } from './CardTag';
import { UserPhoto } from './UserPhoto';

import DefaultUserPhoto from '@assets/defaultAvatar.png';

const USER_PHOTO_SIZE = 6;

type Props = {
  title: string;
  imgUrl: string;
  userImgUrl: string;
  price: number;
  isNew: boolean;
  onPress: () => void;
}

export function ProductCard({
  title,
  imgUrl,
  userImgUrl,
  price,
  isNew = true,
  onPress
}: Props) {
  const parsedPrice = price.toFixed(2).toString().replace(/\./g, ',');

  return (
    <TouchableOpacity style={{ maxWidth: 160 }} onPress={onPress}>
      <Box mb={1}>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: imgUrl,
            }}
            alt="Imagem do produto"
            rounded="lg"
            resizeMode='stretch'
          />
        </AspectRatio>

        <UserPhoto
          size={USER_PHOTO_SIZE}
          source={{
            uri: userImgUrl
          }}
          defaultSource={DefaultUserPhoto}
          alt="Foto do usuário"
          borderWidth={1}
          borderColor="gray.100"
          position="absolute"
          m={1}
          top="0"
          left="0"
        />

        <CardTag isNew={isNew} />
      </Box>

      <VStack>
        <Heading fontSize='sm' color='gray.600'>
          {title}
        </Heading>

        <HStack alignItems='baseline'>
          <Heading
            fontSize='xs'
            fontFamily='heading'
            color='gray.700'
            mr={1}
          >
            R$
          </Heading>

          <Heading fontSize='md' fontFamily='heading' color='gray.700'>
            {parsedPrice}
          </Heading>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
}
