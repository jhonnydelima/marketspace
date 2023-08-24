import { StatusBar, Text, View } from 'react-native';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Karla_400Regular, Karla_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EDECEE' }}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Text>MartkeSpace!</Text> : <View />}
    </View>
  );
}
