import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Heading, Image, ScrollView, Text, VStack } from 'native-base';
import { Eye, EyeSlash } from 'phosphor-react-native';

import { Input } from '@components/Input';

import LogoImg from '@assets/logoSignIn.png';
import { Button } from '@components/Button';

export function SignIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
          mb={4}
        >
          Acesse sua conta
        </Text>

        <Input
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          // value={}
          // onChangeText={}
          // errorMessage={}
        />

        <Input
          placeholder='Senha'
          secureTextEntry={!isPasswordVisible}
          InputRightElement={
            <TouchableOpacity
              style={{ paddingRight: 16 }}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <EyeSlash /> : <Eye />}
            </TouchableOpacity>
          }
          // value={}
          // onChangeText={}
          // errorMessage={}
        />

        <Button
          mt={8}
          title='Entrar'
          onPress={() => {}}
          // isLoading={}
        />
      </VStack>

      <VStack
        bg='gray.100'
        flex={1}
        px={12}
        alignItems='center'
        justifyContent='center'
      >
        <Text color='gray.600' fontSize='sm' fontFamily='body'>
          Ainda não tem acesso?
        </Text>

        <Button
          mt={4}
          title='Criar uma conta'
          variant='secondary'
          onPress={() => {}}
        />
      </VStack>
    </ScrollView>
  );
}