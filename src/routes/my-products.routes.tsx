import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MyProducts } from '@screens/MyProducts';
import { MyProductDetails } from '@screens/MyProductDetails';
import { CreateProduct } from '@screens/CreateProduct';
import { EditProduct } from '@screens/EditProduct';
import { PreVisualizeProduct } from '@screens/PreVisualizeProduct';

type MyProductsRoutes = {
  myProducts: undefined;
  myProductDetails: undefined;
  createProduct: undefined;
  editProduct: undefined;
  preVisualizeProduct: undefined;
}

export type MyProductsNavigatorRoutesProps = NativeStackNavigationProp<MyProductsRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<MyProductsRoutes>();

export function MyProductsRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='myProducts'
        component={MyProducts}
      />

      <Screen
        name='myProductDetails'
        component={MyProductDetails}
      />

      <Screen
        name='createProduct'
        component={CreateProduct}
      />

      <Screen
        name='editProduct'
        component={EditProduct}
      />

      <Screen
        name='preVisualizeProduct'
        component={PreVisualizeProduct}
      />
    </Navigator>
  );
}