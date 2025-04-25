import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProductDetails({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the ProductDetails screen</Text>
      <Button onPress={()=> navigation.navigate('ProductDetails')} title='Go To Add Address'/>
      <Button onPress={()=> navigation.navigate('ProductDetails')} title='Go To Order Summary'/>
    </View>
  );
}
