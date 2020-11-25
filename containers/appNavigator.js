import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { Icon } from '@ui-kitten/components';
import CatalogScreen from '../screens/catalog';
import MenuScreen from '../screens/menu';
import BasketScreen from '../screens/basket';

const BottomTab = createBottomTabNavigator();

export const ShoppingCartIcon = style => (
  <Icon {...style} name="shopping-cart-outline" />
);

const BottomTabBar = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView>
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
        <BottomNavigationTab title="CATALOG" />
        <BottomNavigationTab icon={ShoppingCartIcon} />
        <BottomNavigationTab title="MENU" />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <BottomTab.Screen name="Users" component={CatalogScreen} />
    <BottomTab.Screen name="Basket" component={BasketScreen} />
    <BottomTab.Screen name="Menu" component={MenuScreen} />
  </BottomTab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
