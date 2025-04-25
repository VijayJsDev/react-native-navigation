import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartList from '../screens/Cart/CartList';

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartList" component={CartList} />
    </Stack.Navigator>
  );
}