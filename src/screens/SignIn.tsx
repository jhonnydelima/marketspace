import { Box, Heading, Image, Input, ScrollView, Text, VStack } from 'native-base';

import LogoImg from '@assets/logoSignIn.png';

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        bg='gray.200'
        h='70%'
        px={12}
        borderBottomRadius={24}
        alignItems='center'
      >
        <Box safeAreaTop>
          <Image
            source={LogoImg}
            defaultSource={LogoImg}
            alt="Logo do MarketSpace"
            resizeMode='contain'
            mt={12}
          />
        </Box>

        <Heading
          mt={2}
          fontFamily='heading'
          fontSize='2xl'
          color='gray.700'
        >
          marketspace
        </Heading>

        <Text
          color='gray.500'
          fontSize='sm'
          fontFamily='body'
          lineHeight='xs'
          mb={16} // VALIDAR
        >
          Seu espaço de compra e venda
        </Text>

        <Text
          color='gray.600'
          fontSize='sm'
          fontFamily='body'
        >
          Acesse sua conta
        </Text>

        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />
      </VStack>

      <VStack
        bg='gray.100'
        flex={1}
        px={12}
      >
      </VStack>
    </ScrollView>
  );
}