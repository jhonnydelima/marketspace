import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, Tag, SignOut } from 'phosphor-react-native';

import { HomeRoutes } from './home.routes';
import { MyProductsRoutes } from './my-products.routes';
import { Logout } from '@screens/Logout';

type AppRoutes = {
  homeRoutes: undefined;
  myProductsRoutes: undefined;
  logout: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { colors, sizes } = useTheme();
  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.gray[600],
      tabBarInactiveTintColor: colors.gray[400],
      tabBarStyle: {
        backgroundColor: colors.gray[100],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6],
      }
    }}>
      <Screen
        name='homeRoutes'
        component={HomeRoutes}
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
        name='myProductsRoutes'
        component={MyProductsRoutes}
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