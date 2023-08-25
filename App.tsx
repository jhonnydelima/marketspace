import { StatusBar, Text, View } from 'react-native';
import { NativeBaseProvider, Center } from 'native-base';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Karla_400Regular, Karla_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <Center flex={1} bg='#EDECEE'>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          translucent
        />

        {fontsLoaded ? <Text>MartkeSpace!</Text> : <View />}
      </Center>
    </NativeBaseProvider>
  );
}
