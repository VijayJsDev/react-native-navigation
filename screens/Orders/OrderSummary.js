import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OrderSummary() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the Address Selection screen</Text>
      <Button title='Payment Button' onPress={() => navigation.reset({
        index: 0,
        routes: [
          {
            name: 'AccountTab',
            state: {
              routes: [
                { name: 'MyAccount' }, // Start from MyAccount page
                { name: 'YourOrders' }, // Then YourOrders page
              ],
              index: 1, // Focus on YourOrders screen
            },
          },
        ],
      })
      } />
    </View>
  );
}
