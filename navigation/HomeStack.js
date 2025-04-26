import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/Home/HomePage';
import DoScan from '../screens/Home/DoScan';
import JoinTheBeta from '../screens/Home/JoinTheBeta';
import ValuableInformation from '../screens/Home/ValuableInformation';
import ProductDetails from '../screens/Home/ProductDetails';
import OrderCheckoutStack from './OrderCheckoutStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomePage" component={HomePage} options={{headerShown:false}} />
      <Drawer.Screen name="DoScan" component={DoScan} />
      <Drawer.Screen name="JoinTheBeta" component={JoinTheBeta} />
      <Drawer.Screen name="ValuableInformation" component={ValuableInformation} />
    </Drawer.Navigator>
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }}/>
      <Stack.Screen name="OrderCheckoutStack" component={OrderCheckoutStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}