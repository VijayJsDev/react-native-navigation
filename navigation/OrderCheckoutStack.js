import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddressSelection from '../screens/Orders/AddressSelection';
import OrderSummary from '../screens/Orders/OrderSummary';
import Payment from '../screens/Orders/Payment';

const Stack = createStackNavigator();

export default function OrderCheckoutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddressSelection" component={AddressSelection} />
      <Stack.Screen name="OrderSummary" component={OrderSummary} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}