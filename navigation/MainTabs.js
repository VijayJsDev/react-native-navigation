import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AccountStack from './AccountStack';
import CartStack from './CartStack';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="AccountTab" component={AccountStack} />
      <Tab.Screen name="CartTab" component={CartStack} />
    </Tab.Navigator>
  );
}