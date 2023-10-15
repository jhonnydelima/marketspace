import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, HStack, Heading, Image, Pressable, ScrollView, Text, useTheme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Eye, EyeSlash, PencilSimpleLine } from 'phosphor-react-native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { UserPhoto } from '@components/UserPhoto';

import LogoImg from '@assets/logoSignUp.png';
import DefaultUserPhoto from '@assets/defaultAvatar.png';

const AVATAR_SIZE = 22;

export function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const { colors } = useTheme();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg="gray.200"
    >
      <Center safeAreaTop px={12} pb={72}>
        <Image
          source={LogoImg}
          defaultSource={LogoImg}
          alt="Logo do MarketSpace"
          resizeMode="contain"
          mt={3}
        />

        <Heading
          my={2}
          fontFamily="heading"
          fontSize="lg"
          color="gray.700"
        >
          Boas vindas!
        </Heading>

        <Text
          color="gray.600"
          fontSize="sm"
          fontFamily="body"
          lineHeight="sm"
          textAlign='center'
          mb={7}
        >
          Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
        </Text>

        <HStack mb={4}>
          <UserPhoto
            size={AVATAR_SIZE}
            source={DefaultUserPhoto}
            alt='Foto do usuário'
          />

          <Pressable
            rounded='full'
            w={10}
            h={10}
            bg='blue.500'
            p={3}
            position='absolute'
            alignSelf='flex-end'
            right={-8}
            _pressed={{
              bg: 'blue.700'
            }}
          >
            <PencilSimpleLine size={16} color={colors.gray[200]} />
          </Pressable>
        </HStack>

        <Input
          placeholder="Nome"
          // value={}
          // onChangeText={}
          // errorMessage={}
        />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          // value={}
          // onChangeText={}
          // errorMessage={}
        />

        <Input
          placeholder="Telefone"
          keyboardType="phone-pad"
          autoCapitalize="none"
          // value={}
          // onChangeText={}
          // errorMessage={}
        />

        <Input
          placeholder="Senha"
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

        <Input
          placeholder="Confirmar senha"
          secureTextEntry={!isConfirmPasswordVisible}
          InputRightElement={
            <TouchableOpacity
              style={{ paddingRight: 16 }}
              onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            >
              {isConfirmPasswordVisible ? <EyeSlash /> : <Eye />}
            </TouchableOpacity>
          }
          // value={}
          // onChangeText={}
          // errorMessage={}
        />

        <Button
          w='full'
          mt={2}
          title="Criar"
          variant='tertiary'
          onPress={() => {}}
          // isLoading={}
        />

        <Text
          mt={10}
          color="gray.600"
          fontSize="sm"
          fontFamily="body"
        >
          Já tem uma conta?
        </Text>

        <Button
          w='full'
          mt={4}
          title="Ir para o login"
          variant="secondary"
          onPress={handleGoBack}
        />
      </Center>
    </ScrollView>
  );
}