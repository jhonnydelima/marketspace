import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';

import { SignUp } from '@screens/SignUp';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Karla_400Regular, Karla_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}
