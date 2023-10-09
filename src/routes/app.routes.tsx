import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, Tag, SignOut } from 'phosphor-react-native';

import { Home } from '@screens/Home';
import { ProductDetails } from '@screens/ProductDetails';
import { MyProducts } from '@screens/MyProducts';
import { MyProductDetails } from '@screens/MyProductDetails';
import { CreateProduct } from '@screens/CreateProduct';
import { EditProduct } from '@screens/EditProduct';
import { PreVisualizeProduct } from '@screens/PreVisualizeProduct';
import { Logout } from '@screens/Logout';
import { useTheme } from 'native-base';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();
  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.gray[600],
      tabBarInactiveTintColor: colors.gray[400],
    }}>
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House
              size={iconSize}
              color={color}
              weight={
                color === colors.gray[600] ? 'bold' : 'regular'
              }
            />
          ),
        }}
      />

      <Screen
        name='product-details'
        component={ProductDetails}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name='my-products'
        component={MyProducts}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag
              size={iconSize}
              color={color}
              weight={
                color === colors.gray[600] ? 'bold' : 'regular'
              }
            />
          ),
        }}
      />

      <Screen
        name='my-product-details'
        component={MyProductDetails}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name='create-product-ad'
        component={CreateProduct}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name='edit-product-ad'
        component={EditProduct}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name='pre-visualize-product'
        component={PreVisualizeProduct}
        options={{ tabBarButton: () => null }}
      />

      <Screen
        name='logout'
        component={Logout}
        options={{
          tabBarIcon: () => (
            <SignOut size={iconSize} color={colors.red[400]} />
          )
        }}
      />
    </Navigator>
  );
}