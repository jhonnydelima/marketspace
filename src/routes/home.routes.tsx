import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { ProductDetails } from '@screens/ProductDetails';

type HomeRoutes = {
  home: undefined;
  productDetails: undefined;
}

export type HomeNavigatorRoutesProps = NativeStackNavigationProp<HomeRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<HomeRoutes>();

export function HomeRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='productDetails'
        component={ProductDetails}
      />
    </Navigator>
  );
}