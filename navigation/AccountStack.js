import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyAccount from '../screens/Account/MyAccount';
import Login from '../screens/Account/Login';
import Signup from '../screens/Account/Signup';
import Register from '../screens/Account/Register';
import YourOrders from '../screens/Account/YourOrders';
import OrderDetails from '../screens/Account/OrderDetails';
import YourAddresses from '../screens/Account/YourAddresses';
import AddAddress from '../screens/Account/AddAddress';
import ForgotPassword from '../screens/Account/ForgotPassword';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="YourOrders" component={YourOrders} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="YourAddresses" component={YourAddresses} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}